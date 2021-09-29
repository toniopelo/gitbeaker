#!/usr/bin/env node
'use strict';

var Chalk = require('chalk');
var Sywac = require('sywac');
var xcase = require('xcase');
var Gitbeaker = require('@gitbeaker/node');
var core = require('@gitbeaker/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var Chalk__default = /*#__PURE__*/_interopDefaultLegacy(Chalk);
var Sywac__default = /*#__PURE__*/_interopDefaultLegacy(Sywac);
var Gitbeaker__namespace = /*#__PURE__*/_interopNamespace(Gitbeaker);

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

// Styling settings
var commandStyle = Chalk__default['default'].hex('#e34329').bold;
var groupStyle = Chalk__default['default'].hex('#fca325').bold;
var usageStyle = Chalk__default['default'].hex('#fc6e26').bold;
var optionStyle = Chalk__default['default'].white.bold;
var descriptionStyle = Chalk__default['default'].hex('#848484');
var hintStyle = Chalk__default['default'].hex('#6a5f88');
// Globally configurable arguments
function globalConfig(env) {
    if (env === void 0) { env = process.env; }
    return {
        'gb-token': {
            alias: 'gl-token',
            desc: 'Your Gitlab Personal Token',
            type: 'string',
            defaultValue: env.GITBEAKER_TOKEN || env.GITLAB_TOKEN,
        },
        'gb-oauth-token': {
            alias: 'gl-oauth-token',
            desc: 'Your Gitlab OAuth Token',
            type: 'string',
            defaultValue: env.GITBEAKER_OAUTH_TOKEN || env.GITLAB_OAUTH_TOKEN,
        },
        'gb-job-token': {
            alias: 'gl-job-token',
            desc: 'Your Gitlab Job Token',
            type: 'string',
            defaultValue: env.GITBEAKER_JOB_TOKEN || env.GITLAB_JOB_TOKEN,
        },
        'gb-host': {
            alias: 'gl-host',
            desc: 'Your Gitlab API host (Defaults to https://www.gitlab.com)',
            type: 'string',
            defaultValue: env.GITBEAKER_HOST || env.GITLAB_HOST,
        },
        'gb-version': {
            alias: 'gl-version',
            desc: 'The targetted Gitlab API version (Defaults to 4)',
            type: 'number',
            defaultValue: (env.GITBEAKER_VERSION && parseInt(env.GITBEAKER_VERSION, 10)) ||
                (env.GITLAB_VERSION && parseInt(env.GITLAB_VERSION, 10)),
        },
        'gb-sudo': {
            alias: 'gl-sudo',
            desc: '[Sudo](https://docs.gitlab.com/ee/api/#sudo) query parameter',
            type: 'string',
            defaultValue: env.GITBEAKER_SUDO || env.GITLAB_SUDO,
        },
        'gb-camelize': {
            alias: 'gl-camelize',
            desc: 'Camelizes all response body keys',
            type: 'boolean',
            defaultValue: (env.GITBEAKER_CAMELIZE && env.GITBEAKER_CAMELIZE === 'true') ||
                (env.GITLAB_CAMELIZE && env.GITLAB_CAMELIZE === 'true'),
        },
        'gb-request-timeout': {
            alias: 'gl-request-timeout',
            desc: 'Timeout for API requests. Measured in ms',
            type: 'number',
            defaultValue: (env.GITBEAKER_REQUEST_TIMEOUT && parseInt(env.GITBEAKER_REQUEST_TIMEOUT, 10)) ||
                (env.GITBEAKER_REQUEST_TIMEOUT && parseInt(env.GITBEAKER_REQUEST_TIMEOUT, 10)),
        },
        'gb-profile-token': {
            alias: 'gl-profile-token',
            desc: '[Requests Profiles Token](https://docs.gitlab.com/ee/administration/monitoring/performance/request_profiling.html)',
            type: 'string',
            defaultValue: env.GITBEAKER_PROFILE_TOKEN || env.GITLAB_PROFILE_TOKEN,
        },
        'gb-profile-mode': {
            alias: 'gl-profile-mode',
            desc: '[Requests Profiles Token](https://docs.gitlab.com/ee/administration/monitoring/performance/request_profiling.html)',
            type: 'string',
            defaultValue: env.GITBEAKER_PROFILE_MODE || env.GITLAB_PROFILE_MODE,
        },
    };
}
// Options to be ignored when making an API call
var ignoreOptions = ['_', '$0', 'v', 'version', 'h', 'help', 'g', 'global-args'];
// Helper function to param case strings
function param(string) {
    var cleaned = string;
    // Handle exceptions
    var exceptions = ['GitLabCI', 'YML', 'GPG', 'SSH'];
    var ex = exceptions.find(function (e) { return string.includes(e); });
    if (ex)
        cleaned = cleaned.replace(ex, ex.charAt(0).toUpperCase() + ex.slice(1));
    // Decamelize
    var decamelized = xcase.decamelize(cleaned, '-');
    return decamelized !== cleaned ? decamelized : xcase.depascalize(cleaned, '-');
}
function setupAPIMethods(setupArgs, methodArgs) {
    methodArgs.forEach(function (name) {
        if (typeof name !== 'string')
            return;
        setupArgs.positional("[--" + param(name) + "] <" + param(name) + ">", {
            group: 'Required Options',
            type: 'string',
        });
    });
    return setupArgs;
}
function runAPIMethod(ctx, args, apiName, method) {
    var coreArgs = {};
    var optionalArgs = {};
    var initArgs = {};
    Object.entries(args).forEach(function (_a) {
        var _b = __read(_a, 2), argName = _b[0], value = _b[1];
        if (ignoreOptions.includes(argName) || value == null)
            return;
        var camelCased = xcase.camelize(argName.replace('gb-', '').replace('gl-', ''), '-');
        if (globalConfig()[argName.replace('gl-', 'gb-')]) {
            initArgs[camelCased] = value;
        }
        else if (method.args.includes(camelCased))
            coreArgs[camelCased] = value;
        else
            optionalArgs[camelCased] = value;
    });
    // Create service
    var s = new Gitbeaker__namespace[apiName](initArgs);
    // Execute function
    return s[method.name].apply(s, __spreadArray(__spreadArray([], __read(Object.values(coreArgs))), [optionalArgs])).then(function (r) {
        ctx.output = JSON.stringify(r, null, 3);
    })
        .catch(function (e) {
        ctx.output = e;
    });
}
function setupAPIs(setupArgs, apiName, methods) {
    Object.entries(globalConfig()).forEach(function (_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
        setupArgs.option(k + " <value>", __assign({ group: 'Base Options' }, v));
    });
    var _loop_1 = function (i) {
        var method = methods[i];
        setupArgs.command(param(method.name), {
            setup: function (setupMethodArgs) { return setupAPIMethods(setupMethodArgs, method.args); },
            run: function (args, ctx) { return runAPIMethod(ctx, args, apiName, method); },
        });
    };
    for (var i = 1; i < methods.length; i += 1) {
        _loop_1(i);
    }
    return setupArgs;
}
// Add default settings
var cli = Sywac__default['default'].version('-v, --version')
    .help('-h, --help')
    .showHelpByDefault()
    .epilogue('Copyright 2019')
    .style({
    usagePrefix: function (s) { return usageStyle(s); },
    group: function (s) { return groupStyle(s); },
    flags: function (s) { return optionStyle(s); },
    usageCommandPlaceholder: function (s) { return commandStyle(s); },
    usageOptionsPlaceholder: function (s) { return optionStyle(s); },
    desc: function (s) { return descriptionStyle(s); },
    hints: function (s) { return hintStyle(s); },
});
// Add Global commands
cli.boolean('-g --global-args', {
    desc: 'Show global arguments currently set in the enviroment variables',
});
cli.command('*', function (argv, ctx) {
    if (!argv.g)
        return;
    var display = {};
    Object.entries(globalConfig()).forEach(function (_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
        if (v.defaultValue == null)
            return;
        display[k] = {
            alias: v.alias,
            description: v.desc,
            value: v.defaultValue,
        };
    });
    ctx.output =
        Object.keys(display).length === 0
            ? 'No global variables have been set!'
            : JSON.stringify(display, null, 3);
});
// Add all supported API's
Object.entries(core.getAPIMap()).forEach(function (_a) {
    var _b = __read(_a, 2), apiName = _b[0], methods = _b[1];
    // Skip Gitlab export
    if (apiName === 'Gitlab')
        return;
    cli.command(param(apiName), {
        desc: "The " + apiName + " API",
        setup: function (setupArgs) { return setupAPIs(setupArgs, apiName, methods); },
    });
});

// Parse input
cli.parseAndExit();
//# sourceMappingURL=index.js.map
