import { decamelizeKeys } from 'xcase';
import { stringify } from 'qs';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

// Utility methods
function formatQuery(params) {
    if (params === void 0) { params = {}; }
    var decamelized = decamelizeKeys(params);
    return stringify(decamelized, { arrayFormat: 'bracket' });
}
function defaultOptionsHandler(resourceOptions, _a) {
    var _b = _a === void 0 ? {} : _a, body = _b.body, query = _b.query, sudo = _b.sudo, _c = _b.method, method = _c === void 0 ? 'get' : _c;
    var headers = resourceOptions.headers, requestTimeout = resourceOptions.requestTimeout, url = resourceOptions.url, _d = resourceOptions.additionalBody, additionalBody = _d === void 0 ? {} : _d;
    var bod;
    if (sudo)
        headers.sudo = sudo;
    // FIXME: Not the best comparison, but...it will have to do for now.
    if (typeof body === 'object' && body.constructor.name !== 'FormData') {
        bod = JSON.stringify(decamelizeKeys(__assign(__assign({}, body), additionalBody)));
        headers['content-type'] = 'application/json';
    }
    else {
        /**
         * TODO - what do I do here with the additionalBody?
         *
         * Update: attempting to parse `body` like so:
         *
         * ```ts
         * bod = { ...body, ...additionalBody } as FormData;
         * ```
         *
         * did not work and broke everything. Modify cautiously.
         *
         */
        bod = body;
    }
    return {
        headers: headers,
        timeout: requestTimeout,
        method: method,
        searchParams: formatQuery(query),
        prefixUrl: url,
        body: bod,
    };
}
function createRequesterFn(optionsHandler, requestHandler) {
    var methods = ['get', 'post', 'put', 'delete', 'stream'];
    return function (serviceOptions) {
        var requester = {};
        methods.forEach(function (m) {
            requester[m] = function (endpoint, options) {
                var requestOptions = optionsHandler(serviceOptions, __assign(__assign({}, options), { method: m }));
                return requestHandler(endpoint, requestOptions);
            };
        });
        return requester;
    };
}
function extendClass(Base, customConfig) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var options = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                options[_i] = arguments[_i];
            }
            var _this = this;
            var _a = __read(options), config = _a[0], opts = _a.slice(1);
            _this = _super.apply(this, __spreadArray([__assign(__assign({}, customConfig), config)], __read(opts))) || this;
            return _this;
        }
        return class_1;
    }(Base));
}
function presetResourceArguments(resources, customConfig) {
    if (customConfig === void 0) { customConfig = {}; }
    var updated = {};
    Object.entries(resources)
        .filter(function (_a) {
        var _b = __read(_a, 2), s = _b[1];
        return typeof s === 'function';
    }) // FIXME: Odd default artifact included in this list during testing
        .forEach(function (_a) {
        var _b = __read(_a, 2), k = _b[0], r = _b[1];
        updated[k] = extendClass(r, customConfig);
    });
    return updated;
}

var BaseResource = /** @class */ (function () {
    function BaseResource(_a) {
        var _b;
        var _c = _a === void 0 ? {} : _a, token = _c.token, jobToken = _c.jobToken, oauthToken = _c.oauthToken, nativeAuth = _c.nativeAuth, sudo = _c.sudo, profileToken = _c.profileToken, requesterFn = _c.requesterFn, camelize = _c.camelize, _d = _c.profileMode, profileMode = _d === void 0 ? 'execution' : _d, _e = _c.host, host = _e === void 0 ? 'https://gitlab.com' : _e, _f = _c.prefixUrl, prefixUrl = _f === void 0 ? '' : _f, _g = _c.version, version = _g === void 0 ? 4 : _g, _h = _c.rejectUnauthorized, rejectUnauthorized = _h === void 0 ? true : _h, _j = _c.requestTimeout, requestTimeout = _j === void 0 ? 300000 : _j;
        if (!requesterFn)
            throw new ReferenceError('requesterFn must be passed');
        this.url = [host, 'api', "v" + version, prefixUrl].join('/');
        this.headers = {
            'user-agent': 'gitbeaker',
        };
        this.rejectUnauthorized = rejectUnauthorized;
        this.camelize = camelize;
        this.requestTimeout = requestTimeout;
        this.additionalBody = {};
        // Handle auth tokens
        if (oauthToken)
            this.headers.authorization = "Bearer " + oauthToken;
        else if (jobToken)
            this.headers['job-token'] = jobToken;
        else if (token)
            this.headers['private-token'] = token;
        else if ((nativeAuth === null || nativeAuth === void 0 ? void 0 : nativeAuth.gitlabSessionCookieValue) && (nativeAuth === null || nativeAuth === void 0 ? void 0 : nativeAuth.gitlabCSRFTokenValue)) {
            /**
             * handle the defaults here, since if the `nativeAuth` is an object,
             * and if these fields aren't provided but others are -
             * the defaults @ param initialization would get overridden.
             */
            var _k = nativeAuth.gitlabSessionCookieKey, gitlabSessionCookieKey = _k === void 0 ? '_gitlab_session' : _k, gitlabSessionCookieValue = nativeAuth.gitlabSessionCookieValue, _l = nativeAuth.gitlabCSRFTokenKey, gitlabCSRFTokenKey = _l === void 0 ? 'authenticity_token' : _l, gitlabCSRFTokenValue = nativeAuth.gitlabCSRFTokenValue;
            /**
             * Step 1 - handle CSRF
             *
             * some gitlab instances need the CSRF token to be added via the body,
             * and some need the `X-CSRF-Token` header. We handle both.
             */
            this.additionalBody = __assign(__assign({}, this.additionalBody), (_b = {}, _b[gitlabCSRFTokenKey] = gitlabCSRFTokenValue, _b));
            this.headers['X-CSRF-Token'] = gitlabCSRFTokenValue;
            /**
             * Step 2 - handle the session cookie
             */
            if (!this.headers.cookie)
                this.headers.cookie = 'cookie: ';
            this.headers.cookie += gitlabSessionCookieKey + "=" + gitlabSessionCookieValue + "; ";
        }
        // Profiling
        if (profileToken) {
            this.headers['X-Profile-Token'] = profileToken;
            this.headers['X-Profile-Mode'] = profileMode;
        }
        // Set sudo
        if (sudo)
            this.headers.Sudo = "" + sudo;
        // Set requester instance using this information
        this.requester = requesterFn({
            headers: this.headers,
            rejectUnauthorized: this.rejectUnauthorized,
            requestTimeout: this.requestTimeout,
            url: this.url,
            additionalBody: this.additionalBody,
        });
    }
    return BaseResource;
}());

export { BaseResource, createRequesterFn, defaultOptionsHandler, formatQuery, presetResourceArguments };
//# sourceMappingURL=index.es.js.map
