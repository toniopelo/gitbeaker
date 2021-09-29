import FormData from 'form-data';
import { parse } from 'li';
import { parseUrl } from 'query-string';
import { camelizeKeys } from 'xcase';
import { BaseResource } from '@gitbeaker/requester-utils';
import { lookup } from 'mime-types';

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

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

function appendFormFromObject(object) {
    /* eslint @typescript-eslint/ban-ts-comment: 0 */
    // @ts-ignore
    var form = new FormData();
    Object.entries(object).forEach(function (_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
        if (Array.isArray(v))
            form.append(k, v[0], v[1]);
        else
            form.append(k, v);
    });
    return form;
}
function getAPIMap() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-unresolved
        return require('./map.json');
    }
    catch (e) {
        throw new Error('This function is only available in the distributed code');
    }
}

function getHelper(service, endpoint, _a, acc) {
    if (_a === void 0) { _a = {}; }
    if (acc === void 0) { acc = []; }
    var sudo = _a.sudo, showExpanded = _a.showExpanded, maxPages = _a.maxPages, query = __rest(_a, ["sudo", "showExpanded", "maxPages"]);
    return __awaiter(this, void 0, void 0, function () {
        var response, headers, status, body, newAcc, next, _b, qs, withinBounds;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, service.requester.get(endpoint, { query: query, sudo: sudo })];
                case 1:
                    response = _c.sent();
                    headers = response.headers, status = response.status;
                    body = response.body;
                    // Camelize response body if specified
                    if (service.camelize)
                        body = camelizeKeys(body);
                    // Handle object responses
                    if (!Array.isArray(body)) {
                        if (!showExpanded)
                            return [2 /*return*/, body];
                        return [2 /*return*/, {
                                data: body,
                                headers: headers,
                                status: status,
                            }];
                    }
                    newAcc = __spreadArray(__spreadArray([], __read(acc)), __read(body));
                    next = parse(headers.link).next;
                    _b = (next ? parseUrl(next, { parseNumbers: true }) : {}).query, qs = _b === void 0 ? {} : _b;
                    withinBounds = maxPages
                        ? newAcc.length / (qs.per_page || 20) < maxPages
                        : true;
                    // Recurse through pagination results
                    if (!(query.page && acc.length === 0) && next && withinBounds) {
                        return [2 /*return*/, getHelper(service, endpoint, __assign(__assign({}, qs), { maxPages: maxPages, sudo: sudo }), newAcc)];
                    }
                    if (!showExpanded || query.pagination === 'keyset')
                        return [2 /*return*/, newAcc];
                    return [2 /*return*/, {
                            data: newAcc,
                            paginationInfo: {
                                total: parseInt(headers['x-total'], 10),
                                next: parseInt(headers['x-next-page'], 10) || null,
                                current: parseInt(headers['x-page'], 10) || 1,
                                previous: parseInt(headers['x-prev-page'], 10) || null,
                                perPage: parseInt(headers['x-per-page'], 10),
                                totalPages: parseInt(headers['x-total-pages'], 10),
                            },
                        }];
            }
        });
    });
}
function get() {
    return function (service, endpoint, options) { return getHelper(service, endpoint, options); };
}
function post() {
    var _this = this;
    return function (service, endpoint, _a) {
        if (_a === void 0) { _a = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var body, r;
            var query = _a.query, isForm = _a.isForm, sudo = _a.sudo, showExpanded = _a.showExpanded, options = __rest(_a, ["query", "isForm", "sudo", "showExpanded"]);
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = isForm ? appendFormFromObject(options) : options;
                        return [4 /*yield*/, service.requester.post(endpoint, {
                                query: query,
                                body: body,
                                sudo: sudo,
                            })];
                    case 1:
                        r = _b.sent();
                        return [2 /*return*/, showExpanded
                                ? {
                                    data: r.body,
                                    status: r.status,
                                    headers: r.headers,
                                }
                                : r.body];
                }
            });
        });
    };
}
function put() {
    var _this = this;
    return function (service, endpoint, _a) {
        if (_a === void 0) { _a = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var body, r;
            var query = _a.query, isForm = _a.isForm, sudo = _a.sudo, showExpanded = _a.showExpanded, options = __rest(_a, ["query", "isForm", "sudo", "showExpanded"]);
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = isForm ? appendFormFromObject(options) : options;
                        return [4 /*yield*/, service.requester.put(endpoint, {
                                body: body,
                                query: query,
                                sudo: sudo,
                            })];
                    case 1:
                        r = _b.sent();
                        return [2 /*return*/, showExpanded
                                ? {
                                    data: r.body,
                                    status: r.status,
                                    headers: r.headers,
                                }
                                : r.body];
                }
            });
        });
    };
}
function del() {
    var _this = this;
    return function (service, endpoint, _a) {
        if (_a === void 0) { _a = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var r;
            var sudo = _a.sudo, showExpanded = _a.showExpanded, query = __rest(_a, ["sudo", "showExpanded"]);
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, service.requester.delete(endpoint, {
                            query: query,
                            sudo: sudo,
                        })];
                    case 1:
                        r = _b.sent();
                        return [2 /*return*/, showExpanded
                                ? {
                                    data: r.body,
                                    status: r.status,
                                    headers: r.headers,
                                }
                                : r.body];
                }
            });
        });
    };
}
function stream(service, endpoint, options) {
    if (typeof service.requester.stream !== 'function') {
        throw new Error('Stream method is not implementated in requester!');
    }
    return service.requester.stream(endpoint, {
        query: options,
    });
}
var RequestHelper = {
    post: post,
    put: put,
    get: get,
    del: del,
    stream: stream,
};

var Groups = /** @class */ (function (_super) {
    __extends(Groups, _super);
    function Groups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Groups.prototype.all = function (options) {
        return RequestHelper.get()(this, 'groups', options);
    };
    Groups.prototype.create = function (name, path, options) {
        return RequestHelper.post()(this, 'groups', __assign({ name: name, path: path }, options));
    };
    Groups.prototype.createLDAPLink = function (groupId, cn, groupAccess, provider, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.post()(this, "groups/" + gId + "/ldap_group_links", __assign({ cn: cn, groupAccess: groupAccess, provider: provider }, options));
    };
    Groups.prototype.edit = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.put()(this, "groups/" + gId, options);
    };
    Groups.prototype.projects = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.get()(this, "groups/" + gId + "/projects", options);
    };
    Groups.prototype.remove = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.del()(this, "groups/" + gId, options);
    };
    Groups.prototype.removeLDAPLink = function (groupId, cn, _a) {
        if (_a === void 0) { _a = {}; }
        var provider = _a.provider, options = __rest(_a, ["provider"]);
        var gId = encodeURIComponent(groupId);
        var url = provider ? provider + "/" + cn : "" + cn;
        return RequestHelper.del()(this, "groups/" + gId + "/ldap_group_links/" + url, options);
    };
    Groups.prototype.search = function (nameOrPath, options) {
        return RequestHelper.get()(this, 'groups', __assign({ search: nameOrPath }, options));
    };
    Groups.prototype.show = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.get()(this, "groups/" + gId, options);
    };
    Groups.prototype.subgroups = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.get()(this, "groups/" + gId + "/subgroups", options);
    };
    Groups.prototype.syncLDAP = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.post()(this, "groups/" + gId + "/ldap_sync", options);
    };
    Groups.prototype.transferProject = function (groupId, projectId, options) {
        var _a = __read([groupId, projectId].map(encodeURIComponent), 2), gId = _a[0], pId = _a[1];
        return RequestHelper.post()(this, "groups/" + gId + "/projects/" + pId, options);
    };
    return Groups;
}(BaseResource));

var ResourceAccessRequests = /** @class */ (function (_super) {
    __extends(ResourceAccessRequests, _super);
    function ResourceAccessRequests(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
    }
    ResourceAccessRequests.prototype.all = function (resourceId) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.get()(this, rId + "/access_requests");
    };
    ResourceAccessRequests.prototype.request = function (resourceId) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.post()(this, rId + "/access_requests");
    };
    ResourceAccessRequests.prototype.approve = function (resourceId, userId, options) {
        var _a = __read([resourceId, userId].map(encodeURIComponent), 2), rId = _a[0], uId = _a[1];
        return RequestHelper.post()(this, rId + "/access_requests/" + uId + "/approve", options);
    };
    ResourceAccessRequests.prototype.deny = function (resourceId, userId) {
        var _a = __read([resourceId, userId].map(encodeURIComponent), 2), rId = _a[0], uId = _a[1];
        return RequestHelper.del()(this, rId + "/access_requests/" + uId);
    };
    return ResourceAccessRequests;
}(BaseResource));

function url$4(projectId, resourceType, resourceId, awardId, noteId) {
    var _a = __read([projectId, resourceId].map(encodeURIComponent), 2), pId = _a[0], rId = _a[1];
    var output = [pId, resourceType, rId];
    if (noteId)
        output.push('notes', encodeURIComponent(noteId));
    output.push('award_emoji');
    if (awardId)
        output.push(encodeURIComponent(awardId));
    return output.join('/');
}
var ResourceAwardEmojis = /** @class */ (function (_super) {
    __extends(ResourceAwardEmojis, _super);
    function ResourceAwardEmojis(resourceType, options) {
        var _this = _super.call(this, __assign({ prefixUrl: 'projects' }, options)) || this;
        _this.resourceType = resourceType;
        return _this;
    }
    ResourceAwardEmojis.prototype.all = function (projectId, resourceIId, options) {
        return RequestHelper.get()(this, url$4(projectId, this.resourceType, resourceIId), options);
    };
    ResourceAwardEmojis.prototype.award = function (projectId, resourceIId, name, options) {
        return RequestHelper.post()(this, url$4(projectId, this.resourceType, resourceIId), __assign({ name: name }, options));
    };
    ResourceAwardEmojis.prototype.remove = function (projectId, resourceIId, awardId, options) {
        return RequestHelper.del()(this, url$4(projectId, this.resourceType, resourceIId, awardId), options);
    };
    ResourceAwardEmojis.prototype.show = function (projectId, resourceIId, awardId, options) {
        return RequestHelper.get()(this, url$4(projectId, this.resourceType, resourceIId, awardId), options);
    };
    return ResourceAwardEmojis;
}(BaseResource));

var ResourceNoteAwardEmojis = /** @class */ (function (_super) {
    __extends(ResourceNoteAwardEmojis, _super);
    function ResourceNoteAwardEmojis(resourceType, options) {
        var _this = _super.call(this, __assign({ prefixUrl: 'projects' }, options)) || this;
        _this.resourceType = resourceType;
        return _this;
    }
    ResourceNoteAwardEmojis.prototype.all = function (projectId, resourceIId, noteId, options) {
        return RequestHelper.get()(this, url$4(projectId, this.resourceType, resourceIId, null, noteId), options);
    };
    ResourceNoteAwardEmojis.prototype.award = function (projectId, resourceIId, noteId, name, options) {
        return RequestHelper.post()(this, url$4(projectId, this.resourceType, resourceIId, null, noteId), __assign({ name: name }, options));
    };
    ResourceNoteAwardEmojis.prototype.remove = function (projectId, resourceIId, noteId, awardId, options) {
        return RequestHelper.del()(this, url$4(projectId, this.resourceType, resourceIId, awardId, noteId), options);
    };
    ResourceNoteAwardEmojis.prototype.show = function (projectId, resourceIId, noteId, awardId, options) {
        return RequestHelper.get()(this, url$4(projectId, this.resourceType, resourceIId, awardId, noteId), options);
    };
    return ResourceNoteAwardEmojis;
}(BaseResource));

var ResourceBadges = /** @class */ (function (_super) {
    __extends(ResourceBadges, _super);
    function ResourceBadges(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
    }
    ResourceBadges.prototype.add = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.post()(this, rId + "/badges", options);
    };
    ResourceBadges.prototype.all = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.get()(this, rId + "/badges", options);
    };
    ResourceBadges.prototype.edit = function (resourceId, badgeId, options) {
        var _a = __read([resourceId, badgeId].map(encodeURIComponent), 2), rId = _a[0], bId = _a[1];
        return RequestHelper.put()(this, rId + "/badges/" + bId, options);
    };
    ResourceBadges.prototype.preview = function (resourceId, linkUrl, imageUrl, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.get()(this, rId + "/badges/render", __assign({ linkUrl: linkUrl, imageUrl: imageUrl }, options));
    };
    ResourceBadges.prototype.remove = function (resourceId, badgeId, options) {
        var _a = __read([resourceId, badgeId].map(encodeURIComponent), 2), rId = _a[0], bId = _a[1];
        return RequestHelper.del()(this, rId + "/badges/" + bId, options);
    };
    ResourceBadges.prototype.show = function (resourceId, badgeId, options) {
        var _a = __read([resourceId, badgeId].map(encodeURIComponent), 2), rId = _a[0], bId = _a[1];
        return RequestHelper.get()(this, rId + "/badges/" + bId, options);
    };
    return ResourceBadges;
}(BaseResource));

var ResourceCustomAttributes = /** @class */ (function (_super) {
    __extends(ResourceCustomAttributes, _super);
    function ResourceCustomAttributes(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
    }
    ResourceCustomAttributes.prototype.all = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.get()(this, rId + "/custom_attributes", options);
    };
    ResourceCustomAttributes.prototype.set = function (resourceId, customAttributeId, value, options) {
        var _a = __read([resourceId, customAttributeId].map(encodeURIComponent), 2), rId = _a[0], cId = _a[1];
        return RequestHelper.put()(this, rId + "/custom_attributes/" + cId, __assign({ value: value }, options));
    };
    ResourceCustomAttributes.prototype.remove = function (resourceId, customAttributeId, options) {
        var _a = __read([resourceId, customAttributeId].map(encodeURIComponent), 2), rId = _a[0], cId = _a[1];
        return RequestHelper.del()(this, rId + "/custom_attributes/" + cId, options);
    };
    ResourceCustomAttributes.prototype.show = function (resourceId, customAttributeId, options) {
        var _a = __read([resourceId, customAttributeId].map(encodeURIComponent), 2), rId = _a[0], cId = _a[1];
        return RequestHelper.get()(this, rId + "/custom_attributes/" + cId, options);
    };
    return ResourceCustomAttributes;
}(BaseResource));

// https://docs.gitlab.com/ee/api/deploy_tokens.html
var ResourceDeployTokens = /** @class */ (function (_super) {
    __extends(ResourceDeployTokens, _super);
    function ResourceDeployTokens(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
    }
    ResourceDeployTokens.prototype.add = function (resourceId, tokenName, tokenScopes, options) {
        return RequestHelper.post()(this, encodeURIComponent(resourceId) + "/deploy_tokens", __assign({ name: tokenName, scopes: tokenScopes }, options));
    };
    ResourceDeployTokens.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var resourceId = _a.resourceId, projectId = _a.projectId, groupId = _a.groupId, options = __rest(_a, ["resourceId", "projectId", "groupId"]);
        var prefix = resourceId || projectId || groupId
            ? encodeURIComponent((resourceId || projectId || groupId)) + "/"
            : '';
        return RequestHelper.get()(this, prefix + "deploy_tokens", options);
    };
    ResourceDeployTokens.prototype.remove = function (resourceId, tokenId, options) {
        var _a = __read([resourceId, tokenId].map(encodeURIComponent), 2), rId = _a[0], tId = _a[1];
        return RequestHelper.del()(this, rId + "/deploy_tokens/" + tId, options);
    };
    return ResourceDeployTokens;
}(BaseResource));

var ResourceDiscussions = /** @class */ (function (_super) {
    __extends(ResourceDiscussions, _super);
    function ResourceDiscussions(resourceType, resource2Type, options) {
        var _this = _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
        _this.resource2Type = resource2Type;
        return _this;
    }
    ResourceDiscussions.prototype.addNote = function (resourceId, resource2Id, discussionId, noteId, body, options) {
        var _a = __read([resourceId, resource2Id, discussionId, noteId].map(encodeURIComponent), 4), rId = _a[0], r2Id = _a[1], dId = _a[2], nId = _a[3];
        return RequestHelper.post()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions/" + dId + "/notes", __assign({ query: { body: body }, noteId: nId }, options));
    };
    ResourceDiscussions.prototype.all = function (resourceId, resource2Id, options) {
        var _a = __read([resourceId, resource2Id].map(encodeURIComponent), 2), rId = _a[0], r2Id = _a[1];
        return RequestHelper.get()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions", options);
    };
    ResourceDiscussions.prototype.create = function (resourceId, resource2Id, body, options) {
        var _a = __read([resourceId, resource2Id].map(encodeURIComponent), 2), rId = _a[0], r2Id = _a[1];
        return RequestHelper.post()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions", __assign({ query: { body: body } }, options));
    };
    ResourceDiscussions.prototype.editNote = function (resourceId, resource2Id, discussionId, noteId, _a) {
        if (_a === void 0) { _a = {}; }
        var body = _a.body, options = __rest(_a, ["body"]);
        var _b = __read([resourceId, resource2Id, discussionId, noteId].map(encodeURIComponent), 4), rId = _b[0], r2Id = _b[1], dId = _b[2], nId = _b[3];
        return RequestHelper.put()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions/" + dId + "/notes/" + nId, __assign({ query: { body: body } }, options));
    };
    ResourceDiscussions.prototype.removeNote = function (resourceId, resource2Id, discussionId, noteId, options) {
        var _a = __read([resourceId, resource2Id, discussionId, noteId].map(encodeURIComponent), 4), rId = _a[0], r2Id = _a[1], dId = _a[2], nId = _a[3];
        return RequestHelper.del()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions/" + dId + "/notes/" + nId, options);
    };
    ResourceDiscussions.prototype.show = function (resourceId, resource2Id, discussionId, options) {
        var _a = __read([resourceId, resource2Id, discussionId].map(encodeURIComponent), 3), rId = _a[0], r2Id = _a[1], dId = _a[2];
        return RequestHelper.get()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/discussions/" + dId, options);
    };
    return ResourceDiscussions;
}(BaseResource));

var ResourceIssueBoards = /** @class */ (function (_super) {
    __extends(ResourceIssueBoards, _super);
    function ResourceIssueBoards(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
    }
    ResourceIssueBoards.prototype.all = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.get()(this, rId + "/boards", options);
    };
    ResourceIssueBoards.prototype.create = function (resourceId, name, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.post()(this, rId + "/boards", __assign({ name: name }, options));
    };
    ResourceIssueBoards.prototype.createList = function (resourceId, boardId, labelId, options) {
        var _a = __read([resourceId, boardId].map(encodeURIComponent), 2), rId = _a[0], bId = _a[1];
        return RequestHelper.post()(this, rId + "/boards/" + bId + "/lists", __assign({ labelId: labelId }, options));
    };
    ResourceIssueBoards.prototype.edit = function (resourceId, boardId, options) {
        var _a = __read([resourceId, boardId].map(encodeURIComponent), 2), rId = _a[0], bId = _a[1];
        return RequestHelper.put()(this, rId + "/boards/" + bId, options);
    };
    ResourceIssueBoards.prototype.editList = function (resourceId, boardId, listId, position, options) {
        var _a = __read([resourceId, boardId, listId].map(encodeURIComponent), 3), rId = _a[0], bId = _a[1], lId = _a[2];
        return RequestHelper.put()(this, rId + "/boards/" + bId + "/lists/" + lId, __assign({ position: position }, options));
    };
    ResourceIssueBoards.prototype.lists = function (resourceId, boardId, options) {
        var _a = __read([resourceId, boardId].map(encodeURIComponent), 2), rId = _a[0], bId = _a[1];
        return RequestHelper.get()(this, rId + "/boards/" + bId + "/lists", options);
    };
    ResourceIssueBoards.prototype.remove = function (resourceId, boardId, options) {
        var _a = __read([resourceId, boardId].map(encodeURIComponent), 2), rId = _a[0], bId = _a[1];
        return RequestHelper.del()(this, rId + "/boards/" + bId, options);
    };
    ResourceIssueBoards.prototype.removeList = function (resourceId, boardId, listId, options) {
        var _a = __read([resourceId, boardId, listId].map(encodeURIComponent), 3), rId = _a[0], bId = _a[1], lId = _a[2];
        return RequestHelper.del()(this, rId + "/boards/" + bId + "/lists/" + lId, options);
    };
    ResourceIssueBoards.prototype.show = function (resourceId, boardId, options) {
        var _a = __read([resourceId, boardId].map(encodeURIComponent), 2), rId = _a[0], bId = _a[1];
        return RequestHelper.get()(this, rId + "/boards/" + bId, options);
    };
    ResourceIssueBoards.prototype.showList = function (resourceId, boardId, listId, options) {
        var _a = __read([resourceId, boardId, listId].map(encodeURIComponent), 3), rId = _a[0], bId = _a[1], lId = _a[2];
        return RequestHelper.get()(this, rId + "/boards/" + bId + "/lists/" + lId, options);
    };
    return ResourceIssueBoards;
}(BaseResource));

var ResourceLabels = /** @class */ (function (_super) {
    __extends(ResourceLabels, _super);
    function ResourceLabels(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
    }
    ResourceLabels.prototype.all = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.get()(this, rId + "/labels", options);
    };
    ResourceLabels.prototype.create = function (resourceId, labelName, color, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.post()(this, rId + "/labels", __assign({ name: labelName, color: color }, options));
    };
    ResourceLabels.prototype.edit = function (resourceId, labelId, options) {
        var _a = __read([resourceId, labelId].map(encodeURIComponent), 2), rId = _a[0], lId = _a[1];
        return RequestHelper.put()(this, rId + "/labels/" + lId, options);
    };
    ResourceLabels.prototype.remove = function (resourceId, labelId, options) {
        var _a = __read([resourceId, labelId].map(encodeURIComponent), 2), rId = _a[0], lId = _a[1];
        return RequestHelper.del()(this, rId + "/labels/" + lId, options);
    };
    ResourceLabels.prototype.subscribe = function (resourceId, labelId, options) {
        var _a = __read([resourceId, labelId].map(encodeURIComponent), 2), rId = _a[0], lId = _a[1];
        return RequestHelper.post()(this, rId + "/issues/" + lId + "/subscribe", options);
    };
    ResourceLabels.prototype.unsubscribe = function (resourceId, labelId, options) {
        var _a = __read([resourceId, labelId].map(encodeURIComponent), 2), rId = _a[0], lId = _a[1];
        return RequestHelper.post()(this, rId + "/issues/" + lId + "/unsubscribe", options);
    };
    return ResourceLabels;
}(BaseResource));

var ResourceMembers = /** @class */ (function (_super) {
    __extends(ResourceMembers, _super);
    function ResourceMembers(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
    }
    ResourceMembers.prototype.add = function (resourceId, userId, accessLevel, options) {
        var _a = __read([resourceId, userId].map(encodeURIComponent), 2), rId = _a[0], uId = _a[1];
        return RequestHelper.post()(this, rId + "/members", __assign({ userId: uId, accessLevel: accessLevel }, options));
    };
    ResourceMembers.prototype.all = function (resourceId, _a) {
        if (_a === void 0) { _a = {}; }
        var includeInherited = _a.includeInherited, options = __rest(_a, ["includeInherited"]);
        var rId = encodeURIComponent(resourceId);
        var url = [rId, 'members'];
        if (includeInherited)
            url.push('all');
        return RequestHelper.get()(this, url.join('/'), options);
    };
    ResourceMembers.prototype.edit = function (resourceId, userId, accessLevel, options) {
        var _a = __read([resourceId, userId].map(encodeURIComponent), 2), rId = _a[0], uId = _a[1];
        return RequestHelper.put()(this, rId + "/members/" + uId, __assign({ accessLevel: accessLevel }, options));
    };
    ResourceMembers.prototype.show = function (resourceId, userId, _a) {
        if (_a === void 0) { _a = {}; }
        var includeInherited = _a.includeInherited, options = __rest(_a, ["includeInherited"]);
        var _b = __read([resourceId, userId].map(encodeURIComponent), 2), rId = _b[0], uId = _b[1];
        var url = [rId, 'members'];
        if (includeInherited)
            url.push('all');
        url.push(uId);
        return RequestHelper.get()(this, url.join('/'), options);
    };
    ResourceMembers.prototype.remove = function (resourceId, userId, options) {
        var _a = __read([resourceId, userId].map(encodeURIComponent), 2), rId = _a[0], uId = _a[1];
        return RequestHelper.del()(this, rId + "/members/" + uId, options);
    };
    return ResourceMembers;
}(BaseResource));

var ResourceMilestones = /** @class */ (function (_super) {
    __extends(ResourceMilestones, _super);
    function ResourceMilestones(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
    }
    ResourceMilestones.prototype.all = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.get()(this, rId + "/milestones", options);
    };
    ResourceMilestones.prototype.create = function (resourceId, title, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.post()(this, rId + "/milestones", __assign({ title: title }, options));
    };
    ResourceMilestones.prototype.edit = function (resourceId, milestoneId, options) {
        var _a = __read([resourceId, milestoneId].map(encodeURIComponent), 2), rId = _a[0], mId = _a[1];
        return RequestHelper.put()(this, rId + "/milestones/" + mId, options);
    };
    ResourceMilestones.prototype.issues = function (resourceId, milestoneId, options) {
        var _a = __read([resourceId, milestoneId].map(encodeURIComponent), 2), rId = _a[0], mId = _a[1];
        return RequestHelper.get()(this, rId + "/milestones/" + mId + "/issues", options);
    };
    ResourceMilestones.prototype.mergeRequests = function (resourceId, milestoneId, options) {
        var _a = __read([resourceId, milestoneId].map(encodeURIComponent), 2), rId = _a[0], mId = _a[1];
        return RequestHelper.get()(this, rId + "/milestones/" + mId + "/merge_requests", options);
    };
    ResourceMilestones.prototype.show = function (resourceId, milestoneId, options) {
        var _a = __read([resourceId, milestoneId].map(encodeURIComponent), 2), rId = _a[0], mId = _a[1];
        return RequestHelper.get()(this, rId + "/milestones/" + mId, options);
    };
    return ResourceMilestones;
}(BaseResource));

var ResourceNotes = /** @class */ (function (_super) {
    __extends(ResourceNotes, _super);
    function ResourceNotes(resourceType, resource2Type, options) {
        var _this = _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
        _this.resource2Type = resource2Type;
        return _this;
    }
    ResourceNotes.prototype.all = function (resourceId, resource2Id, options) {
        var _a = __read([resourceId, resource2Id].map(encodeURIComponent), 2), rId = _a[0], r2Id = _a[1];
        return RequestHelper.get()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/notes", options);
    };
    ResourceNotes.prototype.create = function (resourceId, resource2Id, body, options) {
        var _a = __read([resourceId, resource2Id].map(encodeURIComponent), 2), rId = _a[0], r2Id = _a[1];
        return RequestHelper.post()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/notes", __assign({ body: body }, options));
    };
    ResourceNotes.prototype.edit = function (resourceId, resource2Id, noteId, body, options) {
        var _a = __read([resourceId, resource2Id, noteId].map(encodeURIComponent), 3), rId = _a[0], r2Id = _a[1], nId = _a[2];
        return RequestHelper.put()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/notes/" + nId, __assign({ body: body }, options));
    };
    ResourceNotes.prototype.remove = function (resourceId, resource2Id, noteId, options) {
        var _a = __read([resourceId, resource2Id, noteId].map(encodeURIComponent), 3), rId = _a[0], r2Id = _a[1], nId = _a[2];
        return RequestHelper.del()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/notes/" + nId, options);
    };
    ResourceNotes.prototype.show = function (resourceId, resource2Id, noteId, options) {
        var _a = __read([resourceId, resource2Id, noteId].map(encodeURIComponent), 3), rId = _a[0], r2Id = _a[1], nId = _a[2];
        return RequestHelper.get()(this, rId + "/" + this.resource2Type + "/" + r2Id + "/notes/" + nId, options);
    };
    return ResourceNotes;
}(BaseResource));

var ResourceTemplates = /** @class */ (function (_super) {
    __extends(ResourceTemplates, _super);
    function ResourceTemplates(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: ['templates', resourceType].join('/') }, options)) || this;
    }
    ResourceTemplates.prototype.all = function (options) {
        return RequestHelper.get()(this, '', options);
    };
    ResourceTemplates.prototype.show = function (key, options) {
        var rId = encodeURIComponent(key);
        return RequestHelper.get()(this, "" + rId, options);
    };
    return ResourceTemplates;
}(BaseResource));

var ResourceVariables = /** @class */ (function (_super) {
    __extends(ResourceVariables, _super);
    function ResourceVariables(resourceType, options) {
        return _super.call(this, __assign({ prefixUrl: resourceType }, options)) || this;
    }
    ResourceVariables.prototype.all = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.get()(this, rId + "/variables", options);
    };
    ResourceVariables.prototype.create = function (resourceId, options) {
        var rId = encodeURIComponent(resourceId);
        return RequestHelper.post()(this, rId + "/variables", options);
    };
    ResourceVariables.prototype.edit = function (resourceId, keyId, options) {
        var _a = __read([resourceId, keyId].map(encodeURIComponent), 2), rId = _a[0], kId = _a[1];
        return RequestHelper.put()(this, rId + "/variables/" + kId, options);
    };
    ResourceVariables.prototype.show = function (resourceId, keyId, options) {
        var _a = __read([resourceId, keyId].map(encodeURIComponent), 2), rId = _a[0], kId = _a[1];
        return RequestHelper.get()(this, rId + "/variables/" + kId, options);
    };
    ResourceVariables.prototype.remove = function (resourceId, keyId, options) {
        var _a = __read([resourceId, keyId].map(encodeURIComponent), 2), rId = _a[0], kId = _a[1];
        return RequestHelper.del()(this, rId + "/variables/" + kId, options);
    };
    return ResourceVariables;
}(BaseResource));

var GroupAccessRequests = /** @class */ (function (_super) {
    __extends(GroupAccessRequests, _super);
    function GroupAccessRequests(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', options) || this;
    }
    return GroupAccessRequests;
}(ResourceAccessRequests));

var GroupBadges = /** @class */ (function (_super) {
    __extends(GroupBadges, _super);
    function GroupBadges(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', options) || this;
    }
    return GroupBadges;
}(ResourceBadges));

var GroupCustomAttributes = /** @class */ (function (_super) {
    __extends(GroupCustomAttributes, _super);
    function GroupCustomAttributes(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', options) || this;
    }
    return GroupCustomAttributes;
}(ResourceCustomAttributes));

var GroupIssueBoards = /** @class */ (function (_super) {
    __extends(GroupIssueBoards, _super);
    function GroupIssueBoards(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', options) || this;
    }
    return GroupIssueBoards;
}(ResourceIssueBoards));

var GroupMembers = /** @class */ (function (_super) {
    __extends(GroupMembers, _super);
    function GroupMembers(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', options) || this;
    }
    return GroupMembers;
}(ResourceMembers));

var GroupMilestones = /** @class */ (function (_super) {
    __extends(GroupMilestones, _super);
    function GroupMilestones(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', options) || this;
    }
    return GroupMilestones;
}(ResourceMilestones));

var GroupRunners = /** @class */ (function (_super) {
    __extends(GroupRunners, _super);
    function GroupRunners() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupRunners.prototype.all = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.get()(this, "groups/" + gId + "/runners", options);
    };
    return GroupRunners;
}(BaseResource));

var GroupVariables = /** @class */ (function (_super) {
    __extends(GroupVariables, _super);
    function GroupVariables(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', options) || this;
    }
    return GroupVariables;
}(ResourceVariables));

var GroupLabels = /** @class */ (function (_super) {
    __extends(GroupLabels, _super);
    function GroupLabels(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', options) || this;
    }
    return GroupLabels;
}(ResourceLabels));

var GroupDeployTokens = /** @class */ (function (_super) {
    __extends(GroupDeployTokens, _super);
    function GroupDeployTokens(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', options) || this;
    }
    return GroupDeployTokens;
}(ResourceDeployTokens));

var Epics = /** @class */ (function (_super) {
    __extends(Epics, _super);
    function Epics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Epics.prototype.all = function (groupId, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.get()(this, "groups/" + gId + "/epics", options);
    };
    Epics.prototype.create = function (groupId, title, options) {
        var gId = encodeURIComponent(groupId);
        return RequestHelper.post()(this, "groups/" + gId + "/epics", __assign({ title: title }, options));
    };
    Epics.prototype.edit = function (groupId, epicId, options) {
        var _a = __read([groupId, epicId].map(encodeURIComponent), 2), gId = _a[0], eId = _a[1];
        return RequestHelper.put()(this, "groups/" + gId + "/epics/" + eId, options);
    };
    Epics.prototype.remove = function (groupId, epicId, options) {
        var _a = __read([groupId, epicId].map(encodeURIComponent), 2), gId = _a[0], eId = _a[1];
        return RequestHelper.del()(this, "groups/" + gId + "/epics/" + eId, options);
    };
    Epics.prototype.show = function (groupId, epicId, options) {
        var _a = __read([groupId, epicId].map(encodeURIComponent), 2), gId = _a[0], eId = _a[1];
        return RequestHelper.get()(this, "groups/" + gId + "/epics/" + eId, options);
    };
    return Epics;
}(BaseResource));

var EpicIssues = /** @class */ (function (_super) {
    __extends(EpicIssues, _super);
    function EpicIssues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EpicIssues.prototype.all = function (groupId, epicIId, options) {
        var _a = __read([groupId, epicIId].map(encodeURIComponent), 2), gId = _a[0], eId = _a[1];
        return RequestHelper.get()(this, "groups/" + gId + "/epics/" + eId + "/issues", options);
    };
    EpicIssues.prototype.assign = function (groupId, epicIId, epicIssueId, options) {
        var _a = __read([groupId, epicIId, epicIssueId].map(encodeURIComponent), 3), gId = _a[0], eId = _a[1], iId = _a[2];
        return RequestHelper.post()(this, "groups/" + gId + "/epics/" + eId + "/issues/" + iId, options);
    };
    EpicIssues.prototype.edit = function (groupId, epicIId, epicIssueId, options) {
        var _a = __read([groupId, epicIId, epicIssueId].map(encodeURIComponent), 3), gId = _a[0], eId = _a[1], iId = _a[2];
        return RequestHelper.put()(this, "groups/" + gId + "/epics/" + eId + "/issues/" + iId, options);
    };
    EpicIssues.prototype.remove = function (groupId, epicIId, epicIssueId, options) {
        var _a = __read([groupId, epicIId, epicIssueId].map(encodeURIComponent), 3), gId = _a[0], eId = _a[1], iId = _a[2];
        return RequestHelper.del()(this, "groups/" + gId + "/epics/" + eId + "/issues/" + iId, options);
    };
    return EpicIssues;
}(BaseResource));

var EpicNotes = /** @class */ (function (_super) {
    __extends(EpicNotes, _super);
    function EpicNotes(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', 'epics', options) || this;
    }
    return EpicNotes;
}(ResourceNotes));

var EpicDiscussions = /** @class */ (function (_super) {
    __extends(EpicDiscussions, _super);
    function EpicDiscussions(options) {
        /* istanbul ignore next */
        return _super.call(this, 'groups', 'epics', options) || this;
    }
    return EpicDiscussions;
}(ResourceDiscussions));

var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Users.prototype.all = function (options) {
        return RequestHelper.get()(this, 'users', options);
    };
    Users.prototype.activities = function (options) {
        return RequestHelper.get()(this, 'users/activities', options);
    };
    Users.prototype.projects = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return RequestHelper.get()(this, "users/" + uId + "/projects", options);
    };
    Users.prototype.block = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return RequestHelper.post()(this, "users/" + uId + "/block", options);
    };
    Users.prototype.create = function (options) {
        return RequestHelper.post()(this, 'users', options);
    };
    Users.prototype.current = function (options) {
        return RequestHelper.get()(this, 'user', options);
    };
    Users.prototype.edit = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return RequestHelper.put()(this, "users/" + uId, options);
    };
    Users.prototype.events = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return RequestHelper.get()(this, "users/" + uId + "/events", options);
    };
    Users.prototype.search = function (emailOrUsername, options) {
        return RequestHelper.get()(this, 'users', __assign({ search: emailOrUsername }, options));
    };
    Users.prototype.show = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return RequestHelper.get()(this, "users/" + uId, options);
    };
    Users.prototype.remove = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return RequestHelper.del()(this, "users/" + uId, options);
    };
    Users.prototype.unblock = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return RequestHelper.post()(this, "users/" + uId + "/unblock", options);
    };
    return Users;
}(BaseResource));

var UserCustomAttributes = /** @class */ (function (_super) {
    __extends(UserCustomAttributes, _super);
    function UserCustomAttributes(options) {
        /* istanbul ignore next */
        return _super.call(this, 'users', options) || this;
    }
    return UserCustomAttributes;
}(ResourceCustomAttributes));

var url$3 = function (userId) {
    return userId ? "users/" + encodeURIComponent(userId) + "/emails" : 'user/emails';
};
var UserEmails = /** @class */ (function (_super) {
    __extends(UserEmails, _super);
    function UserEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserEmails.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        return RequestHelper.get()(this, url$3(userId), options);
    };
    UserEmails.prototype.add = function (email, _a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        return RequestHelper.post()(this, url$3(userId), __assign({ email: email }, options));
    };
    UserEmails.prototype.show = function (emailId, options) {
        var eId = encodeURIComponent(emailId);
        return RequestHelper.get()(this, "user/emails/" + eId, options);
    };
    UserEmails.prototype.remove = function (emailId, _a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        var eId = encodeURIComponent(emailId);
        return RequestHelper.del()(this, url$3(userId) + "/" + eId, options);
    };
    return UserEmails;
}(BaseResource));

var UserImpersonationTokens = /** @class */ (function (_super) {
    __extends(UserImpersonationTokens, _super);
    function UserImpersonationTokens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserImpersonationTokens.prototype.all = function (userId, options) {
        var uId = encodeURIComponent(userId);
        return RequestHelper.get()(this, "users/" + uId + "/impersonation_tokens", options);
    };
    // TODO: change required params
    UserImpersonationTokens.prototype.add = function (userId, name, scopes, expiresAt, options) {
        var uId = encodeURIComponent(userId);
        return RequestHelper.post()(this, "users/" + uId + "/impersonation_tokens", __assign({ name: name, expiresAt: expiresAt, scopes: scopes }, options));
    };
    UserImpersonationTokens.prototype.show = function (userId, tokenId, options) {
        var _a = __read([userId, tokenId].map(encodeURIComponent), 2), uId = _a[0], tId = _a[1];
        return RequestHelper.get()(this, "users/" + uId + "/impersonation_tokens/" + tId, options);
    };
    UserImpersonationTokens.prototype.revoke = function (userId, tokenId, options) {
        var _a = __read([userId, tokenId].map(encodeURIComponent), 2), uId = _a[0], tId = _a[1];
        return RequestHelper.del()(this, "users/" + uId + "/impersonation_tokens/" + tId, options);
    };
    return UserImpersonationTokens;
}(BaseResource));

var url$2 = function (userId) {
    return userId ? "users/" + encodeURIComponent(userId) + "/keys" : 'user/keys';
};
var UserSSHKeys = /** @class */ (function (_super) {
    __extends(UserSSHKeys, _super);
    function UserSSHKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserSSHKeys.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        return RequestHelper.get()(this, url$2(userId), options);
    };
    UserSSHKeys.prototype.create = function (title, key, _a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        return RequestHelper.post()(this, url$2(userId), __assign({ title: title, key: key }, options));
    };
    UserSSHKeys.prototype.show = function (keyId, _a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        var kId = encodeURIComponent(keyId);
        return RequestHelper.get()(this, url$2(userId) + "/" + kId, options);
    };
    UserSSHKeys.prototype.remove = function (keyId, _a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        var kId = encodeURIComponent(keyId);
        return RequestHelper.del()(this, url$2(userId) + "/" + kId, options);
    };
    return UserSSHKeys;
}(BaseResource));

var url$1 = function (userId) {
    return userId ? "users/" + encodeURIComponent(userId) + "/gpg_keys" : 'user/gpg_keys';
};
var UserGPGKeys = /** @class */ (function (_super) {
    __extends(UserGPGKeys, _super);
    function UserGPGKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserGPGKeys.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        return RequestHelper.get()(this, url$1(userId), options);
    };
    UserGPGKeys.prototype.add = function (key, _a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        return RequestHelper.post()(this, url$1(userId), __assign({ key: key }, options));
    };
    UserGPGKeys.prototype.show = function (keyId, _a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        var kId = encodeURIComponent(keyId);
        return RequestHelper.get()(this, url$1(userId) + "/" + kId, options);
    };
    UserGPGKeys.prototype.remove = function (keyId, _a) {
        if (_a === void 0) { _a = {}; }
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        var kId = encodeURIComponent(keyId);
        return RequestHelper.del()(this, url$1(userId) + "/" + kId, options);
    };
    return UserGPGKeys;
}(BaseResource));

var Branches = /** @class */ (function (_super) {
    __extends(Branches, _super);
    function Branches() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Branches.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/branches", options);
    };
    Branches.prototype.create = function (projectId, branchName, ref, options) {
        var _a;
        var pId = encodeURIComponent(projectId);
        var branchKey = this.url.includes('v3') ? 'branchName' : 'branch';
        return RequestHelper.post()(this, "projects/" + pId + "/repository/branches", __assign((_a = {}, _a[branchKey] = branchName, _a.ref = ref, _a), options));
    };
    Branches.prototype.remove = function (projectId, branchName, options) {
        var _a = __read([projectId, branchName].map(encodeURIComponent), 2), pId = _a[0], bName = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/repository/branches/" + bName, options);
    };
    Branches.prototype.show = function (projectId, branchName, options) {
        var _a = __read([projectId, branchName].map(encodeURIComponent), 2), pId = _a[0], bName = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/repository/branches/" + bName, options);
    };
    return Branches;
}(BaseResource));

var Commits = /** @class */ (function (_super) {
    __extends(Commits, _super);
    function Commits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commits.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/commits", options);
    };
    Commits.prototype.cherryPick = function (projectId, sha, branch, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/repository/commits/" + sha + "/cherry_pick", __assign({ branch: branch }, options));
    };
    Commits.prototype.comments = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/commits/" + sha + "/comments", options);
    };
    Commits.prototype.create = function (projectId, branch, message, actions, options) {
        if (actions === void 0) { actions = []; }
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/repository/commits", __assign({ branch: branch, commitMessage: message, actions: actions }, options));
    };
    Commits.prototype.createComment = function (projectId, sha, note, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/repository/commits/" + sha + "/comments", __assign({ note: note }, options));
    };
    Commits.prototype.diff = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/commits/" + sha + "/diff", options);
    };
    Commits.prototype.editStatus = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/statuses/" + sha, options);
    };
    Commits.prototype.references = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/commits/" + sha + "/refs", options);
    };
    Commits.prototype.revert = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/repository/commits/" + sha + "/revert", options);
    };
    Commits.prototype.show = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/commits/" + sha, options);
    };
    Commits.prototype.statuses = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/commits/" + sha + "/statuses", options);
    };
    Commits.prototype.mergeRequests = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/commits/" + sha + "/merge_requests", options);
    };
    Commits.prototype.signature = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/commits/" + sha + "/signature", options);
    };
    return Commits;
}(BaseResource));

var CommitDiscussions = /** @class */ (function (_super) {
    __extends(CommitDiscussions, _super);
    function CommitDiscussions(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', 'repository/commits', options) || this;
    }
    return CommitDiscussions;
}(ResourceDiscussions));

var ContainerRegistry = /** @class */ (function (_super) {
    __extends(ContainerRegistry, _super);
    function ContainerRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContainerRegistry.prototype.projectRepositories = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/registry/repositories", options);
    };
    ContainerRegistry.prototype.groupRepositories = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "groups/" + pId + "/registry/repositories", options);
    };
    ContainerRegistry.prototype.showRepository = function (projectId, repositoryId, options) {
        var _a = __read([projectId, repositoryId].map(encodeURIComponent), 2), pId = _a[0], rId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/registry/repositories/" + rId, options);
    };
    ContainerRegistry.prototype.tags = function (projectId, repositoryId, options) {
        var _a = __read([projectId, repositoryId].map(encodeURIComponent), 2), pId = _a[0], rId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/registry/repositories/" + rId + "/tags", options);
    };
    ContainerRegistry.prototype.removeRepository = function (projectId, repositoryId, options) {
        var _a = __read([projectId, repositoryId].map(encodeURIComponent), 2), pId = _a[0], rId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/registry/repositories/" + rId, options);
    };
    ContainerRegistry.prototype.removeTag = function (projectId, repositoryId, tagName, options) {
        var _a = __read([projectId, repositoryId, tagName].map(encodeURIComponent), 3), pId = _a[0], rId = _a[1], tId = _a[2];
        return RequestHelper.del()(this, "projects/" + pId + "/registry/repositories/" + rId + "/tags/" + tId, options);
    };
    ContainerRegistry.prototype.removeTags = function (projectId, repositoryId, nameRegexDelete, options) {
        var _a = __read([projectId, repositoryId].map(encodeURIComponent), 2), pId = _a[0], rId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/registry/repositories/" + rId + "/tags", __assign({ nameRegexDelete: nameRegexDelete }, options));
    };
    ContainerRegistry.prototype.showTag = function (projectId, repositoryId, tagName, options) {
        var _a = __read([projectId, repositoryId, tagName].map(encodeURIComponent), 3), pId = _a[0], rId = _a[1], tId = _a[2];
        return RequestHelper.get()(this, "projects/" + pId + "/registry/repositories/" + rId + "/tags/" + tId, options);
    };
    return ContainerRegistry;
}(BaseResource));

var Deployments = /** @class */ (function (_super) {
    __extends(Deployments, _super);
    function Deployments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deployments.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/deployments", options);
    };
    Deployments.prototype.create = function (projectId, environment, sha, ref, tag, status, options) {
        var _a = __read([projectId].map(encodeURIComponent), 1), pId = _a[0];
        return RequestHelper.post()(this, "projects/" + pId + "/deployments", __assign({ environment: environment, sha: sha, ref: ref, tag: tag, status: status }, options));
    };
    Deployments.prototype.edit = function (projectId, deploymentId, status, options) {
        var _a = __read([projectId, deploymentId].map(encodeURIComponent), 2), pId = _a[0], dId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/deployments/" + dId, __assign({ status: status }, options));
    };
    Deployments.prototype.show = function (projectId, deploymentId, options) {
        var _a = __read([projectId, deploymentId].map(encodeURIComponent), 2), pId = _a[0], dId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/deployments/" + dId, options);
    };
    Deployments.prototype.mergeRequests = function (projectId, deploymentId, options) {
        var _a = __read([projectId, deploymentId].map(encodeURIComponent), 2), pId = _a[0], dId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/deployments/" + dId + "/merge_requests", options);
    };
    return Deployments;
}(BaseResource));

var DeployKeys = /** @class */ (function (_super) {
    __extends(DeployKeys, _super);
    function DeployKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeployKeys.prototype.add = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/deploy_keys", options);
    };
    DeployKeys.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, options = __rest(_a, ["projectId"]);
        var url;
        if (projectId) {
            url = "projects/" + encodeURIComponent(projectId) + "/deploy_keys";
        }
        else {
            url = 'deploy_keys';
        }
        return RequestHelper.get()(this, url, options);
    };
    DeployKeys.prototype.edit = function (projectId, keyId, options) {
        var _a = __read([projectId, keyId].map(encodeURIComponent), 2), pId = _a[0], kId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/deploy_keys/" + kId, options);
    };
    DeployKeys.prototype.enable = function (projectId, keyId, options) {
        var _a = __read([projectId, keyId].map(encodeURIComponent), 2), pId = _a[0], kId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/deploy_keys/" + kId + "/enable", options);
    };
    DeployKeys.prototype.remove = function (projectId, keyId, options) {
        var _a = __read([projectId, keyId].map(encodeURIComponent), 2), pId = _a[0], kId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/deploy_keys/" + kId, options);
    };
    DeployKeys.prototype.show = function (projectId, keyId, options) {
        var _a = __read([projectId, keyId].map(encodeURIComponent), 2), pId = _a[0], kId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/deploy_keys/" + kId, options);
    };
    return DeployKeys;
}(BaseResource));

var Environments = /** @class */ (function (_super) {
    __extends(Environments, _super);
    function Environments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Environments.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/environments", options);
    };
    Environments.prototype.show = function (projectId, environmentId, options) {
        var _a = __read([projectId, environmentId].map(encodeURIComponent), 2), pId = _a[0], eId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/environments/" + eId, options);
    };
    Environments.prototype.create = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/environments", options);
    };
    Environments.prototype.edit = function (projectId, environmentId, options) {
        var _a = __read([projectId, environmentId].map(encodeURIComponent), 2), pId = _a[0], eId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/environments/" + eId, options);
    };
    Environments.prototype.remove = function (projectId, environmentId, options) {
        var _a = __read([projectId, environmentId].map(encodeURIComponent), 2), pId = _a[0], eId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/environments/" + eId, options);
    };
    Environments.prototype.stop = function (projectId, environmentId, options) {
        var _a = __read([projectId, environmentId].map(encodeURIComponent), 2), pId = _a[0], eId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/environments/" + eId + "/stop", options);
    };
    return Environments;
}(BaseResource));

var FreezePeriods = /** @class */ (function (_super) {
    __extends(FreezePeriods, _super);
    function FreezePeriods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FreezePeriods.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/freeze_periods", options);
    };
    FreezePeriods.prototype.show = function (projectId, freezePeriodId, options) {
        var _a = __read([projectId, freezePeriodId].map(encodeURIComponent), 2), pId = _a[0], fId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/freeze_periods/" + fId, options);
    };
    FreezePeriods.prototype.create = function (projectId, freezeStart, freezeEnd, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/freeze_periods", __assign({ freezeStart: freezeStart, freezeEnd: freezeEnd }, options));
    };
    FreezePeriods.prototype.edit = function (projectId, freezePeriodId, options) {
        var _a = __read([projectId, freezePeriodId].map(encodeURIComponent), 2), pId = _a[0], fId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/freeze_periods/" + fId, options);
    };
    FreezePeriods.prototype.delete = function (projectId, freezePeriodId, options) {
        var _a = __read([projectId, freezePeriodId].map(encodeURIComponent), 2), pId = _a[0], fId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/freeze_periods/" + fId, options);
    };
    return FreezePeriods;
}(BaseResource));

var Issues = /** @class */ (function (_super) {
    __extends(Issues, _super);
    function Issues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Issues.prototype.addSpentTime = function (projectId, issueIid, duration, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/issues/" + iId + "/add_spent_time", __assign({ duration: duration }, options));
    };
    Issues.prototype.addTimeEstimate = function (projectId, issueIid, duration, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/issues/" + iId + "/time_estimate", __assign({ duration: duration }, options));
    };
    Issues.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, groupId = _a.groupId, options = __rest(_a, ["projectId", "groupId"]);
        var url;
        if (projectId) {
            url = "projects/" + encodeURIComponent(projectId) + "/issues";
        }
        else if (groupId) {
            url = "groups/" + encodeURIComponent(groupId) + "/issues";
        }
        else {
            url = 'issues';
        }
        return RequestHelper.get()(this, url, options);
    };
    Issues.prototype.create = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/issues", options);
    };
    Issues.prototype.closedBy = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/issues/" + iId + "/closed_by", options);
    };
    Issues.prototype.edit = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/issues/" + iId, options);
    };
    // TODO move
    Issues.prototype.link = function (projectId, issueIId, targetProjectId, targetIssueIId, options) {
        var _a = __read([projectId, issueIId].map(encodeURIComponent), 2), pId = _a[0], iIId = _a[1];
        var _b = __read([targetProjectId, targetIssueIId].map(encodeURIComponent), 2), targetPId = _b[0], targetIId = _b[1];
        return RequestHelper.post()(this, "projects/" + pId + "/issues/" + iIId + "/links", __assign({ targetProjectId: targetPId, targetIssueIid: targetIId }, options));
    };
    // TODO move
    Issues.prototype.links = function (projectId, issueIid) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/issues/" + iId + "/links");
    };
    Issues.prototype.participants = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/issues/" + iId + "/participants", options);
    };
    Issues.prototype.relatedMergeRequests = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/issues/" + iId + "/related_merge_requests", options);
    };
    // TODO move
    Issues.prototype.removeLink = function (projectId, issueIid, issueLinkId, options) {
        var _a = __read([projectId, issueIid, issueLinkId].map(encodeURIComponent), 3), pId = _a[0], iId = _a[1], iLinkId = _a[2];
        return RequestHelper.del()(this, "projects/" + pId + "/issues/" + iId + "/links/" + iLinkId, __assign({}, options));
    };
    Issues.prototype.remove = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/issues/" + iId, options);
    };
    Issues.prototype.resetSpentTime = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/issues/" + iId + "/reset_spent_time", options);
    };
    Issues.prototype.resetTimeEstimate = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/issues/" + iId + "/reset_time_estimate", options);
    };
    Issues.prototype.show = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/issues/" + iId, options);
    };
    Issues.prototype.subscribe = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/issues/" + iId + "/subscribe", options);
    };
    Issues.prototype.timeStats = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/issues/" + iId + "/time_stats", options);
    };
    Issues.prototype.unsubscribe = function (projectId, issueIid, options) {
        var _a = __read([projectId, issueIid].map(encodeURIComponent), 2), pId = _a[0], iId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/issues/" + iId + "/unsubscribe", options);
    };
    return Issues;
}(BaseResource));

var IssuesStatistics = /** @class */ (function (_super) {
    __extends(IssuesStatistics, _super);
    function IssuesStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IssuesStatistics.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, groupId = _a.groupId, options = __rest(_a, ["projectId", "groupId"]);
        var url;
        if (projectId) {
            url = "projects/" + encodeURIComponent(projectId) + "/issues_statistics";
        }
        else if (groupId) {
            url = "groups/" + encodeURIComponent(groupId) + "/issues_statistics";
        }
        else {
            url = 'issues_statistics';
        }
        return RequestHelper.get()(this, url, options);
    };
    return IssuesStatistics;
}(BaseResource));

var IssueNotes = /** @class */ (function (_super) {
    __extends(IssueNotes, _super);
    function IssueNotes(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', 'issues', options) || this;
    }
    return IssueNotes;
}(ResourceNotes));

var IssueNoteAwardEmojis = /** @class */ (function (_super) {
    __extends(IssueNoteAwardEmojis, _super);
    function IssueNoteAwardEmojis(options) {
        /* istanbul ignore next */
        return _super.call(this, 'issues', options) || this;
    }
    return IssueNoteAwardEmojis;
}(ResourceNoteAwardEmojis));

var IssueDiscussions = /** @class */ (function (_super) {
    __extends(IssueDiscussions, _super);
    function IssueDiscussions(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', 'issues', options) || this;
    }
    return IssueDiscussions;
}(ResourceDiscussions));

var IssueAwardEmojis = /** @class */ (function (_super) {
    __extends(IssueAwardEmojis, _super);
    function IssueAwardEmojis(options) {
        /* istanbul ignore next */
        return _super.call(this, 'issues', options) || this;
    }
    return IssueAwardEmojis;
}(ResourceAwardEmojis));

var Jobs = /** @class */ (function (_super) {
    __extends(Jobs, _super);
    function Jobs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jobs.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/jobs", options);
    };
    Jobs.prototype.cancel = function (projectId, jobId, options) {
        var _a = __read([projectId, jobId].map(encodeURIComponent), 2), pId = _a[0], jId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/jobs/" + jId + "/cancel", options);
    };
    // TODO move
    Jobs.prototype.downloadSingleArtifactFile = function (projectId, jobId, artifactPath, _a) {
        if (_a === void 0) { _a = {}; }
        var _b = _a.stream, stream = _b === void 0 ? false : _b, options = __rest(_a, ["stream"]);
        var _c = __read([projectId, jobId].map(encodeURIComponent), 2), pId = _c[0], jId = _c[1];
        if (stream) {
            return RequestHelper.stream(this, "projects/" + pId + "/jobs/" + jId + "/artifacts/" + artifactPath, options);
        }
        return RequestHelper.get()(this, "projects/" + pId + "/jobs/" + jId + "/artifacts/" + artifactPath, options);
    };
    // TODO move
    Jobs.prototype.downloadSingleArtifactFileFromRef = function (projectId, ref, artifactPath, jobName, _a) {
        if (_a === void 0) { _a = {}; }
        var _b = _a.stream, stream = _b === void 0 ? false : _b, options = __rest(_a, ["stream"]);
        var _c = __read([projectId, ref, jobName].map(encodeURIComponent), 3), pId = _c[0], rId = _c[1], name = _c[2];
        if (stream) {
            return RequestHelper.stream(this, "projects/" + pId + "/jobs/artifacts/" + rId + "/raw/" + artifactPath + "?job=" + name, options);
        }
        return RequestHelper.get()(this, "projects/" + pId + "/jobs/artifacts/" + rId + "/raw/" + artifactPath + "?job=" + name, options);
    };
    // TODO move
    Jobs.prototype.downloadLatestArtifactFile = function (projectId, ref, jobName, _a) {
        if (_a === void 0) { _a = {}; }
        var _b = _a.stream, stream = _b === void 0 ? false : _b, options = __rest(_a, ["stream"]);
        var _c = __read([projectId, ref, jobName].map(encodeURIComponent), 3), pId = _c[0], rId = _c[1], name = _c[2];
        if (stream) {
            return RequestHelper.stream(this, "projects/" + pId + "/jobs/artifacts/" + rId + "/download?job=" + name, options);
        }
        return RequestHelper.get()(this, "projects/" + pId + "/jobs/artifacts/" + rId + "/download?job=" + name, options);
    };
    Jobs.prototype.downloadTraceFile = function (projectId, jobId, options) {
        var _a = __read([projectId, jobId].map(encodeURIComponent), 2), pId = _a[0], jId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/jobs/" + jId + "/trace", options);
    };
    Jobs.prototype.erase = function (projectId, jobId, options) {
        var _a = __read([projectId, jobId].map(encodeURIComponent), 2), pId = _a[0], jId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/jobs/" + jId + "/erase", options);
    };
    // TODO move
    Jobs.prototype.eraseArtifacts = function (projectId, jobId, options) {
        var _a = __read([projectId, jobId].map(encodeURIComponent), 2), pId = _a[0], jId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/jobs/" + jId + "/artifacts", options);
    };
    // TODO move
    Jobs.prototype.keepArtifacts = function (projectId, jobId, options) {
        var _a = __read([projectId, jobId].map(encodeURIComponent), 2), pId = _a[0], jId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/jobs/" + jId + "/artifacts/keep", options);
    };
    Jobs.prototype.play = function (projectId, jobId, options) {
        var _a = __read([projectId, jobId].map(encodeURIComponent), 2), pId = _a[0], jId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/jobs/" + jId + "/play", options);
    };
    Jobs.prototype.retry = function (projectId, jobId, options) {
        var _a = __read([projectId, jobId].map(encodeURIComponent), 2), pId = _a[0], jId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/jobs/" + jId + "/retry", options);
    };
    Jobs.prototype.show = function (projectId, jobId, options) {
        var _a = __read([projectId, jobId].map(encodeURIComponent), 2), pId = _a[0], jId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/jobs/" + jId, options);
    };
    Jobs.prototype.showPipelineJobs = function (projectId, pipelineId, options) {
        var _a = __read([projectId, pipelineId].map(encodeURIComponent), 2), pId = _a[0], ppId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/pipelines/" + ppId + "/jobs", options);
    };
    Jobs.prototype.showPipelineBridges = function (projectId, pipelineId, options) {
        var _a = __read([projectId, pipelineId].map(encodeURIComponent), 2), pId = _a[0], ppId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/pipelines/" + ppId + "/bridges", options);
    };
    return Jobs;
}(BaseResource));

var Labels = /** @class */ (function (_super) {
    __extends(Labels, _super);
    function Labels(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', options) || this;
    }
    return Labels;
}(ResourceLabels));

var MergeRequests = /** @class */ (function (_super) {
    __extends(MergeRequests, _super);
    function MergeRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MergeRequests.prototype.accept = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/merge_requests/" + mIid + "/merge", options);
    };
    MergeRequests.prototype.addSpentTime = function (projectId, mergerequestIid, duration, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/merge_requests/" + mIid + "/add_spent_time", __assign({ duration: duration }, options));
    };
    MergeRequests.prototype.addTimeEstimate = function (projectId, mergerequestIid, duration, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/merge_requests/" + mIid + "/time_estimate", __assign({ duration: duration }, options));
    };
    MergeRequests.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, groupId = _a.groupId, options = __rest(_a, ["projectId", "groupId"]);
        var url;
        if (projectId) {
            url = "projects/" + encodeURIComponent(projectId) + "/merge_requests";
        }
        else if (groupId) {
            url = "groups/" + encodeURIComponent(groupId) + "/merge_requests";
        }
        else {
            url = 'merge_requests';
        }
        return RequestHelper.get()(this, url, options);
    };
    MergeRequests.prototype.cancelOnPipelineSucess = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/merge_requests/" + mIid + "/cancel_merge_when_pipeline_succeeds", options);
    };
    MergeRequests.prototype.changes = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid + "/changes", options);
    };
    MergeRequests.prototype.closesIssues = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid + "/closes_issues", options);
    };
    MergeRequests.prototype.commits = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid + "/commits", options);
    };
    MergeRequests.prototype.create = function (projectId, sourceBranch, targetBranch, title, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/merge_requests", __assign({ sourceBranch: sourceBranch, targetBranch: targetBranch, title: title }, options));
    };
    MergeRequests.prototype.edit = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/merge_requests/" + mIid, options);
    };
    MergeRequests.prototype.participants = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid + "/participants", options);
    };
    MergeRequests.prototype.pipelines = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid + "/pipelines", options);
    };
    MergeRequests.prototype.rebase = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/merge_requests/" + mIid + "/rebase", options);
    };
    MergeRequests.prototype.remove = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/merge_requests/" + mIid, options);
    };
    MergeRequests.prototype.resetSpentTime = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/merge_requests/" + mIid + "/reset_spent_time", options);
    };
    MergeRequests.prototype.resetTimeEstimate = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/merge_requests/" + mIid + "/reset_time_estimate", options);
    };
    MergeRequests.prototype.show = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid, options);
    };
    MergeRequests.prototype.subscribe = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/merge_requests/" + mIid + "/subscribe", options);
    };
    MergeRequests.prototype.timeStats = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid + "/time_stats", options);
    };
    MergeRequests.prototype.version = function (projectId, mergerequestIid, versionId, options) {
        var _a = __read([projectId, mergerequestIid, versionId].map(encodeURIComponent), 3), pId = _a[0], mIid = _a[1], vId = _a[2];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid + "/versions/" + vId, options);
    };
    MergeRequests.prototype.versions = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid + "/versions", options);
    };
    MergeRequests.prototype.unsubscribe = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/merge_requests/" + mIid + "/unsubscribe", options);
    };
    return MergeRequests;
}(BaseResource));

var MergeRequestApprovals = /** @class */ (function (_super) {
    __extends(MergeRequestApprovals, _super);
    function MergeRequestApprovals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MergeRequestApprovals.prototype.configuration = function (projectId, _a) {
        if (_a === void 0) { _a = {}; }
        var mergerequestIid = _a.mergerequestIid, options = __rest(_a, ["mergerequestIid"]);
        var pId = encodeURIComponent(projectId);
        var url;
        if (mergerequestIid) {
            var mIid = encodeURIComponent(mergerequestIid);
            url = "projects/" + pId + "/merge_requests/" + mIid + "/approvals";
        }
        else {
            url = "projects/" + pId + "/approvals";
        }
        return RequestHelper.get()(this, url, options);
    };
    MergeRequestApprovals.prototype.editConfiguration = function (projectId, _a) {
        if (_a === void 0) { _a = {}; }
        var mergerequestIid = _a.mergerequestIid, options = __rest(_a, ["mergerequestIid"]);
        var pId = encodeURIComponent(projectId);
        var url;
        if (mergerequestIid) {
            var mIid = encodeURIComponent(mergerequestIid);
            url = "projects/" + pId + "/merge_requests/" + mIid + "/approvals";
        }
        else {
            url = "projects/" + pId + "/approvals";
        }
        return RequestHelper.post()(this, url, options);
    };
    MergeRequestApprovals.prototype.approvalRule = function (projectId, approvalRuleId, options) {
        var _a = __read([projectId, approvalRuleId].map(encodeURIComponent), 2), pId = _a[0], aId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/approval_rules/" + aId, options);
    };
    MergeRequestApprovals.prototype.approvalRules = function (projectId, _a) {
        if (_a === void 0) { _a = {}; }
        var mergerequestIid = _a.mergerequestIid, options = __rest(_a, ["mergerequestIid"]);
        var pId = encodeURIComponent(projectId);
        var url;
        if (mergerequestIid) {
            var mIid = encodeURIComponent(mergerequestIid);
            url = "projects/" + pId + "/merge_requests/" + mIid + "/approval_rules";
        }
        else {
            url = "projects/" + pId + "/approval_rules";
        }
        return RequestHelper.get()(this, url, options);
    };
    MergeRequestApprovals.prototype.addApprovalRule = function (projectId, name, approvalsRequired, _a) {
        if (_a === void 0) { _a = {}; }
        var mergerequestIid = _a.mergerequestIid, options = __rest(_a, ["mergerequestIid"]);
        var pId = encodeURIComponent(projectId);
        var url;
        if (mergerequestIid) {
            var mIid = encodeURIComponent(mergerequestIid);
            url = "projects/" + pId + "/merge_requests/" + mIid + "/approval_rules";
        }
        else {
            url = "projects/" + pId + "/approval_rules";
        }
        return RequestHelper.post()(this, url, __assign({ name: name, approvalsRequired: approvalsRequired }, options));
    };
    MergeRequestApprovals.prototype.approvalState = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/merge_requests/" + mIid + "/approval_state", options);
    };
    MergeRequestApprovals.prototype.editApprovalRule = function (projectId, approvalRuleId, name, approvalsRequired, _a) {
        if (_a === void 0) { _a = {}; }
        var mergerequestIid = _a.mergerequestIid, options = __rest(_a, ["mergerequestIid"]);
        var _b = __read([projectId, approvalRuleId].map(encodeURIComponent), 2), pId = _b[0], aId = _b[1];
        var url;
        if (mergerequestIid) {
            var mIid = encodeURIComponent(mergerequestIid);
            url = "projects/" + pId + "/merge_requests/" + mIid + "/approval_rules/" + aId;
        }
        else {
            url = "projects/" + pId + "/approval_rules/" + aId;
        }
        return RequestHelper.put()(this, url, __assign({ name: name, approvalsRequired: approvalsRequired }, options));
    };
    MergeRequestApprovals.prototype.removeApprovalRule = function (projectId, approvalRuleId, _a) {
        var _b = _a === void 0 ? {} : _a, mergerequestIid = _b.mergerequestIid;
        var _c = __read([projectId, approvalRuleId].map(encodeURIComponent), 2), pId = _c[0], aId = _c[1];
        var url;
        if (mergerequestIid) {
            var mIid = encodeURIComponent(mergerequestIid);
            url = "projects/" + pId + "/merge_requests/" + mIid + "/approval_rules/" + aId;
        }
        else {
            url = "projects/" + pId + "/approval_rules/" + aId;
        }
        return RequestHelper.del()(this, url);
    };
    MergeRequestApprovals.prototype.approve = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/merge_requests/" + mIid + "/approve", options);
    };
    MergeRequestApprovals.prototype.unapprove = function (projectId, mergerequestIid, options) {
        var _a = __read([projectId, mergerequestIid].map(encodeURIComponent), 2), pId = _a[0], mIid = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/merge_requests/" + mIid + "/unapprove", options);
    };
    return MergeRequestApprovals;
}(BaseResource));

var MergeRequestAwardEmojis = /** @class */ (function (_super) {
    __extends(MergeRequestAwardEmojis, _super);
    function MergeRequestAwardEmojis(options) {
        /* istanbul ignore next */
        return _super.call(this, 'merge_requests', options) || this;
    }
    return MergeRequestAwardEmojis;
}(ResourceAwardEmojis));

var MergeRequestDiscussions = /** @class */ (function (_super) {
    __extends(MergeRequestDiscussions, _super);
    function MergeRequestDiscussions(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', 'merge_requests', options) || this;
    }
    return MergeRequestDiscussions;
}(ResourceDiscussions));

var MergeRequestNotes = /** @class */ (function (_super) {
    __extends(MergeRequestNotes, _super);
    function MergeRequestNotes(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', 'merge_requests', options) || this;
    }
    return MergeRequestNotes;
}(ResourceNotes));

var Packages = /** @class */ (function (_super) {
    __extends(Packages, _super);
    function Packages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Packages.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, groupId = _a.groupId, options = __rest(_a, ["projectId", "groupId"]);
        var url;
        if (projectId) {
            url = "projects/" + encodeURIComponent(projectId) + "/packages";
        }
        else if (groupId) {
            url = "groups/" + encodeURIComponent(groupId) + "/packages";
        }
        else {
            throw new Error('projectId or groupId must be passed');
        }
        return RequestHelper.get()(this, url, options);
    };
    Packages.prototype.remove = function (projectId, packageId, options) {
        var _a = __read([projectId, packageId].map(encodeURIComponent), 2), pId = _a[0], pkgId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/packages/" + pkgId, options);
    };
    Packages.prototype.removeFile = function (projectId, packageId, projectFileId, options) {
        var _a = __read([projectId, packageId, projectFileId].map(encodeURIComponent), 3), pId = _a[0], pkgId = _a[1], pfId = _a[2];
        return RequestHelper.del()(this, "projects/" + pId + "/packages/" + pkgId + "/package_files/" + pfId, options);
    };
    Packages.prototype.show = function (projectId, packageId, options) {
        var _a = __read([projectId, packageId].map(encodeURIComponent), 2), pId = _a[0], pkgId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/packages/" + pkgId, options);
    };
    Packages.prototype.showFiles = function (projectId, packageId, options) {
        var _a = __read([projectId, packageId].map(encodeURIComponent), 2), pId = _a[0], pkgId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/packages/" + pkgId + "/package_files", options);
    };
    return Packages;
}(BaseResource));

var PackageRegistry = /** @class */ (function (_super) {
    __extends(PackageRegistry, _super);
    function PackageRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PackageRegistry.prototype.publish = function (projectId, packageName, packageVersion, filename, content, _a) {
        if (_a === void 0) { _a = {}; }
        var contentType = _a.contentType, options = __rest(_a, ["contentType"]);
        var pId = encodeURIComponent(projectId);
        var meta = { filename: filename, contentType: contentType };
        if (!meta.contentType)
            meta.contentType = lookup(meta.filename);
        return RequestHelper.put()(this, "projects/" + pId + "/packages/generic/" + packageName + "/" + packageVersion + "/" + filename, __assign({ isForm: true, file: [content, meta] }, options));
    };
    PackageRegistry.prototype.download = function (projectId, packageName, packageVersion, filename, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/packages/generic/" + packageName + "/" + packageVersion + "/" + filename, options);
    };
    return PackageRegistry;
}(BaseResource));

// TODO: Add missing function
var Pipelines = /** @class */ (function (_super) {
    __extends(Pipelines, _super);
    function Pipelines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pipelines.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/pipelines", options);
    };
    Pipelines.prototype.create = function (projectId, ref, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/pipeline", __assign({ ref: ref }, options));
    };
    Pipelines.prototype.delete = function (projectId, pipelineId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.del()(this, "projects/" + pId + "/pipelines/" + pipelineId, options);
    };
    Pipelines.prototype.show = function (projectId, pipelineId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/pipelines/" + pipelineId, options);
    };
    Pipelines.prototype.retry = function (projectId, pipelineId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/pipelines/" + pipelineId + "/retry", options);
    };
    Pipelines.prototype.cancel = function (projectId, pipelineId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/pipelines/" + pipelineId + "/cancel", options);
    };
    Pipelines.prototype.allVariables = function (projectId, pipelineId, options) {
        var _a = __read([projectId, pipelineId].map(encodeURIComponent), 2), pId = _a[0], pipeId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/pipelines/" + pipeId + "/variables", options);
    };
    return Pipelines;
}(BaseResource));

var PipelineSchedules = /** @class */ (function (_super) {
    __extends(PipelineSchedules, _super);
    function PipelineSchedules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PipelineSchedules.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/pipeline_schedules", options);
    };
    PipelineSchedules.prototype.create = function (projectId, description, ref, cron, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/pipeline_schedules", __assign({ description: description, ref: ref, cron: cron }, options));
    };
    PipelineSchedules.prototype.edit = function (projectId, scheduleId, options) {
        var _a = __read([projectId, scheduleId].map(encodeURIComponent), 2), pId = _a[0], sId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/pipeline_schedules/" + sId, options);
    };
    PipelineSchedules.prototype.remove = function (projectId, scheduleId, options) {
        var _a = __read([projectId, scheduleId].map(encodeURIComponent), 2), pId = _a[0], sId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/pipeline_schedules/" + sId, options);
    };
    PipelineSchedules.prototype.show = function (projectId, scheduleId, options) {
        var _a = __read([projectId, scheduleId].map(encodeURIComponent), 2), pId = _a[0], sId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/pipeline_schedules/" + sId, options);
    };
    PipelineSchedules.prototype.takeOwnership = function (projectId, scheduleId, options) {
        var _a = __read([projectId, scheduleId].map(encodeURIComponent), 2), pId = _a[0], sId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/pipeline_schedules/" + sId + "/take_ownership", options);
    };
    return PipelineSchedules;
}(BaseResource));

var PipelineScheduleVariables = /** @class */ (function (_super) {
    __extends(PipelineScheduleVariables, _super);
    function PipelineScheduleVariables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PipelineScheduleVariables.prototype.all = function (projectId, pipelineScheduleId, options) {
        var _a = __read([projectId, pipelineScheduleId].map(encodeURIComponent), 2), pId = _a[0], psId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/pipeline_schedules/" + psId + "/variables", options);
    };
    PipelineScheduleVariables.prototype.create = function (projectId, pipelineScheduleId, options) {
        var _a = __read([projectId, pipelineScheduleId].map(encodeURIComponent), 2), pId = _a[0], psId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/pipeline_schedules/" + psId + "/variables", options);
    };
    PipelineScheduleVariables.prototype.edit = function (projectId, pipelineScheduleId, keyId, options) {
        var _a = __read([projectId, pipelineScheduleId, keyId].map(encodeURIComponent), 3), pId = _a[0], psId = _a[1], kId = _a[2];
        return RequestHelper.put()(this, "projects/" + pId + "/pipeline_schedules/" + psId + "/variables/" + kId, options);
    };
    PipelineScheduleVariables.prototype.show = function (projectId, pipelineScheduleId, keyId, options) {
        var _a = __read([projectId, pipelineScheduleId, keyId].map(encodeURIComponent), 3), pId = _a[0], psId = _a[1], kId = _a[2];
        return RequestHelper.get()(this, "projects/" + pId + "/pipeline_schedules/" + psId + "/variables/" + kId, options);
    };
    PipelineScheduleVariables.prototype.remove = function (projectId, pipelineScheduleId, keyId, options) {
        var _a = __read([projectId, pipelineScheduleId, keyId].map(encodeURIComponent), 3), pId = _a[0], psId = _a[1], kId = _a[2];
        return RequestHelper.del()(this, "projects/" + pId + "/pipeline_schedules/" + psId + "/variables/" + kId, options);
    };
    return PipelineScheduleVariables;
}(BaseResource));

var defaultMetadata = {
    filename: Date.now().toString() + ".tar.gz",
};
var ProjectImportExport = /** @class */ (function (_super) {
    __extends(ProjectImportExport, _super);
    function ProjectImportExport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectImportExport.prototype.download = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/export/download", options);
    };
    ProjectImportExport.prototype.exportStatus = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/export", options);
    };
    ProjectImportExport.prototype.import = function (content, path, _a) {
        if (_a === void 0) { _a = {}; }
        var metadata = _a.metadata, options = __rest(_a, ["metadata"]);
        var meta = __assign(__assign({}, defaultMetadata), metadata);
        if (!meta.contentType)
            meta.contentType = lookup(meta.filename);
        return RequestHelper.post()(this, 'projects/import', __assign(__assign({ isForm: true }, options), { file: [content, meta], path: path }));
    };
    ProjectImportExport.prototype.importStatus = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/import", options);
    };
    ProjectImportExport.prototype.schedule = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/export", options);
    };
    return ProjectImportExport;
}(BaseResource));

var Projects = /** @class */ (function (_super) {
    __extends(Projects, _super);
    function Projects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Projects.prototype.all = function (options) {
        return RequestHelper.get()(this, 'projects', options);
    };
    Projects.prototype.archive = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/archive", options);
    };
    Projects.prototype.create = function (_a) {
        var userId = _a.userId, options = __rest(_a, ["userId"]);
        var url = userId ? "projects/user/" + encodeURIComponent(userId) : 'projects';
        return RequestHelper.post()(this, url, options);
    };
    Projects.prototype.edit = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.put()(this, "projects/" + pId, options);
    };
    Projects.prototype.fork = function (projectId, _a) {
        if (_a === void 0) { _a = {}; }
        var forkedFromId = _a.forkedFromId, options = __rest(_a, ["forkedFromId"]);
        var pId = encodeURIComponent(projectId);
        var url = "projects/" + pId + "/fork";
        if (forkedFromId)
            url += "/" + encodeURIComponent(forkedFromId);
        return RequestHelper.post()(this, url, options);
    };
    Projects.prototype.forks = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/forks", options);
    };
    Projects.prototype.languages = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/languages", options);
    };
    Projects.prototype.mirrorPull = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/mirror/pull", options);
    };
    Projects.prototype.remove = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.del()(this, "projects/" + pId, options);
    };
    Projects.prototype.removeFork = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.del()(this, "projects/" + pId + "/fork", options);
    };
    Projects.prototype.search = function (projectName, options) {
        return RequestHelper.get()(this, 'projects', __assign({ search: projectName }, options));
    };
    Projects.prototype.share = function (projectId, groupId, groupAccess, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/share", __assign({ groupId: groupId, groupAccess: groupAccess }, options));
    };
    Projects.prototype.show = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId, options);
    };
    Projects.prototype.star = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/star", options);
    };
    Projects.prototype.transfer = function (projectId, namespaceId) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.put()(this, "projects/" + pId + "/transfer", {
            namespace: namespaceId,
        });
    };
    Projects.prototype.unarchive = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/unarchive", options);
    };
    Projects.prototype.unshare = function (projectId, groupId, options) {
        var _a = __read([projectId, groupId].map(encodeURIComponent), 2), pId = _a[0], gId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/share/" + gId, options);
    };
    Projects.prototype.unstar = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/unstar", options);
    };
    Projects.prototype.upload = function (projectId, content, _a) {
        if (_a === void 0) { _a = {}; }
        var metadata = _a.metadata, options = __rest(_a, ["metadata"]);
        var pId = encodeURIComponent(projectId);
        var meta = __assign(__assign({}, defaultMetadata), metadata);
        if (!meta.contentType)
            meta.contentType = lookup(meta.filename);
        return RequestHelper.post()(this, "projects/" + pId + "/uploads", __assign({ isForm: true, file: [content, meta] }, options));
    };
    return Projects;
}(BaseResource));

var ProjectAccessRequests = /** @class */ (function (_super) {
    __extends(ProjectAccessRequests, _super);
    function ProjectAccessRequests(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', options) || this;
    }
    return ProjectAccessRequests;
}(ResourceAccessRequests));

var ProjectBadges = /** @class */ (function (_super) {
    __extends(ProjectBadges, _super);
    function ProjectBadges(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', options) || this;
    }
    return ProjectBadges;
}(ResourceBadges));

var ProjectCustomAttributes = /** @class */ (function (_super) {
    __extends(ProjectCustomAttributes, _super);
    function ProjectCustomAttributes(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', options) || this;
    }
    return ProjectCustomAttributes;
}(ResourceCustomAttributes));

var ProjectIssueBoards = /** @class */ (function (_super) {
    __extends(ProjectIssueBoards, _super);
    function ProjectIssueBoards(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', options) || this;
    }
    return ProjectIssueBoards;
}(ResourceIssueBoards));

var ProjectHooks = /** @class */ (function (_super) {
    __extends(ProjectHooks, _super);
    function ProjectHooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectHooks.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/hooks", options);
    };
    ProjectHooks.prototype.show = function (projectId, hookId, options) {
        var _a = __read([projectId, hookId].map(encodeURIComponent), 2), pId = _a[0], hId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/hooks/" + hId, options);
    };
    ProjectHooks.prototype.add = function (projectId, url, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/hooks", __assign({ url: url }, options));
    };
    ProjectHooks.prototype.edit = function (projectId, hookId, url, options) {
        var _a = __read([projectId, hookId].map(encodeURIComponent), 2), pId = _a[0], hId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/hooks/" + hId, __assign({ url: url }, options));
    };
    ProjectHooks.prototype.remove = function (projectId, hookId, options) {
        var _a = __read([projectId, hookId].map(encodeURIComponent), 2), pId = _a[0], hId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/hooks/" + hId, options);
    };
    return ProjectHooks;
}(BaseResource));

var ProjectMembers = /** @class */ (function (_super) {
    __extends(ProjectMembers, _super);
    function ProjectMembers(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', options) || this;
    }
    return ProjectMembers;
}(ResourceMembers));

var ProjectMilestones = /** @class */ (function (_super) {
    __extends(ProjectMilestones, _super);
    function ProjectMilestones(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', options) || this;
    }
    return ProjectMilestones;
}(ResourceMilestones));

var ProjectSnippets = /** @class */ (function (_super) {
    __extends(ProjectSnippets, _super);
    function ProjectSnippets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectSnippets.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/snippets", options);
    };
    ProjectSnippets.prototype.content = function (projectId, snippetId, options) {
        var _a = __read([projectId, snippetId].map(encodeURIComponent), 2), pId = _a[0], sId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/snippets/" + sId + "/raw", options);
    };
    ProjectSnippets.prototype.create = function (projectId, title, fileName, code, visibility, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/snippets", __assign({ title: title, fileName: fileName, code: code, visibility: visibility }, options));
    };
    ProjectSnippets.prototype.edit = function (projectId, snippetId, options) {
        var _a = __read([projectId, snippetId].map(encodeURIComponent), 2), pId = _a[0], sId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/snippets/" + sId, options);
    };
    ProjectSnippets.prototype.remove = function (projectId, snippetId, options) {
        var _a = __read([projectId, snippetId].map(encodeURIComponent), 2), pId = _a[0], sId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/snippets/" + sId, options);
    };
    ProjectSnippets.prototype.show = function (projectId, snippetId, options) {
        var _a = __read([projectId, snippetId].map(encodeURIComponent), 2), pId = _a[0], sId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/snippets/" + sId, options);
    };
    ProjectSnippets.prototype.userAgentDetails = function (projectId, snippetId, options) {
        var _a = __read([projectId, snippetId].map(encodeURIComponent), 2), pId = _a[0], sId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/snippets/" + sId + "/user_agent_detail", options);
    };
    return ProjectSnippets;
}(BaseResource));

var ProjectSnippetNotes = /** @class */ (function (_super) {
    __extends(ProjectSnippetNotes, _super);
    function ProjectSnippetNotes(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', 'snippets', options) || this;
    }
    return ProjectSnippetNotes;
}(ResourceNotes));

var ProjectSnippetDiscussions = /** @class */ (function (_super) {
    __extends(ProjectSnippetDiscussions, _super);
    function ProjectSnippetDiscussions(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', 'snippets', options) || this;
    }
    return ProjectSnippetDiscussions;
}(ResourceDiscussions));

var ProjectSnippetAwardEmojis = /** @class */ (function (_super) {
    __extends(ProjectSnippetAwardEmojis, _super);
    function ProjectSnippetAwardEmojis(options) {
        /* istanbul ignore next */
        return _super.call(this, 'snippets', options) || this;
    }
    return ProjectSnippetAwardEmojis;
}(ResourceAwardEmojis));

var ProtectedBranches = /** @class */ (function (_super) {
    __extends(ProtectedBranches, _super);
    function ProtectedBranches() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProtectedBranches.prototype.all = function (projectId, options) {
        if (options === void 0) { options = {}; }
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/protected_branches", options);
    };
    ProtectedBranches.prototype.protect = function (projectId, branchName, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/protected_branches", __assign({ name: branchName }, options));
    };
    ProtectedBranches.prototype.show = function (projectId, branchName, options) {
        var _a = __read([projectId, branchName].map(encodeURIComponent), 2), pId = _a[0], bName = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/protected_branches/" + bName, options);
    };
    ProtectedBranches.prototype.unprotect = function (projectId, branchName, options) {
        var _a = __read([projectId, branchName].map(encodeURIComponent), 2), pId = _a[0], bName = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/protected_branches/" + bName, options);
    };
    return ProtectedBranches;
}(BaseResource));

var ProtectedTags = /** @class */ (function (_super) {
    __extends(ProtectedTags, _super);
    function ProtectedTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProtectedTags.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/protected_tags", options);
    };
    ProtectedTags.prototype.protect = function (projectId, tagName, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/protected_tags", __assign({ name: tagName }, options));
    };
    ProtectedTags.prototype.show = function (projectId, tagName, options) {
        var _a = __read([projectId, tagName].map(encodeURIComponent), 2), pId = _a[0], tName = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/protected_tags/" + tName, options);
    };
    ProtectedTags.prototype.unprotect = function (projectId, tagName, options) {
        var _a = __read([projectId, tagName].map(encodeURIComponent), 2), pId = _a[0], tName = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/protected_tags/" + tName, options);
    };
    return ProtectedTags;
}(BaseResource));

var ProjectVariables = /** @class */ (function (_super) {
    __extends(ProjectVariables, _super);
    function ProjectVariables(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', options) || this;
    }
    return ProjectVariables;
}(ResourceVariables));

var ProjectDeployTokens = /** @class */ (function (_super) {
    __extends(ProjectDeployTokens, _super);
    function ProjectDeployTokens(options) {
        /* istanbul ignore next */
        return _super.call(this, 'projects', options) || this;
    }
    return ProjectDeployTokens;
}(ResourceDeployTokens));

var PushRules = /** @class */ (function (_super) {
    __extends(PushRules, _super);
    function PushRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PushRules.prototype.create = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/push_rule", options);
    };
    PushRules.prototype.edit = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.put()(this, "projects/" + pId + "/push_rule", options);
    };
    PushRules.prototype.remove = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.del()(this, "projects/" + pId + "/push_rule", options);
    };
    PushRules.prototype.show = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/push_rule", options);
    };
    return PushRules;
}(BaseResource));

// TODO: Add missing functions
var Releases = /** @class */ (function (_super) {
    __extends(Releases, _super);
    function Releases() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Releases.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/releases", options);
    };
    Releases.prototype.create = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/releases", options);
    };
    Releases.prototype.edit = function (projectId, tagName, options) {
        var _a = __read([projectId, tagName].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/releases/" + tId, options);
    };
    Releases.prototype.remove = function (projectId, tagName, options) {
        var _a = __read([projectId, tagName].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/releases/" + tId, options);
    };
    Releases.prototype.show = function (projectId, tagName, options) {
        var _a = __read([projectId, tagName].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/releases/" + tId, options);
    };
    return Releases;
}(BaseResource));

var ReleaseLinks = /** @class */ (function (_super) {
    __extends(ReleaseLinks, _super);
    function ReleaseLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReleaseLinks.prototype.all = function (projectId, tagName, options) {
        var _a = __read([projectId, tagName].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/releases/" + tId + "/assets/links", options);
    };
    ReleaseLinks.prototype.create = function (projectId, tagName, name, url, options) {
        var _a = __read([projectId, tagName].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/releases/" + tId + "/assets/links", __assign({ name: name, url: url }, options));
    };
    ReleaseLinks.prototype.edit = function (projectId, tagName, linkId, options) {
        var _a = __read([projectId, tagName, linkId].map(encodeURIComponent), 3), pId = _a[0], tId = _a[1], lId = _a[2];
        return RequestHelper.put()(this, "projects/" + pId + "/releases/" + tId + "/assets/links/" + lId, options);
    };
    ReleaseLinks.prototype.remove = function (projectId, tagName, linkId, options) {
        var _a = __read([projectId, tagName, linkId].map(encodeURIComponent), 3), pId = _a[0], tId = _a[1], lId = _a[2];
        return RequestHelper.del()(this, "projects/" + pId + "/releases/" + tId + "/assets/links/" + lId, options);
    };
    ReleaseLinks.prototype.show = function (projectId, tagName, linkId, options) {
        var _a = __read([projectId, tagName, linkId].map(encodeURIComponent), 3), pId = _a[0], tId = _a[1], lId = _a[2];
        return RequestHelper.get()(this, "projects/" + pId + "/releases/" + tId + "/assets/links/" + lId, options);
    };
    return ReleaseLinks;
}(BaseResource));

var Repositories = /** @class */ (function (_super) {
    __extends(Repositories, _super);
    function Repositories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Repositories.prototype.compare = function (projectId, from, to, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/compare", __assign({ from: from, to: to }, options));
    };
    Repositories.prototype.contributors = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/contributors", options);
    };
    Repositories.prototype.mergeBase = function (projectId, refs, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/merge_base", __assign({ refs: refs }, options));
    };
    Repositories.prototype.showArchive = function (projectId, _a) {
        if (_a === void 0) { _a = {}; }
        var _b = _a.fileType, fileType = _b === void 0 ? 'tar.gz' : _b, options = __rest(_a, ["fileType"]);
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/archive." + fileType, options);
    };
    Repositories.prototype.showBlob = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/blobs/" + sha, options);
    };
    Repositories.prototype.showBlobRaw = function (projectId, sha, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/blobs/" + sha + "/raw", options);
    };
    Repositories.prototype.tree = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/tree", options);
    };
    return Repositories;
}(BaseResource));

var RepositoryFiles = /** @class */ (function (_super) {
    __extends(RepositoryFiles, _super);
    function RepositoryFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepositoryFiles.prototype.create = function (projectId, filePath, branch, content, commitMessage, options) {
        var _a = __read([projectId, filePath].map(encodeURIComponent), 2), pId = _a[0], path = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/repository/files/" + path, __assign({ branch: branch, content: content, commitMessage: commitMessage }, options));
    };
    RepositoryFiles.prototype.edit = function (projectId, filePath, branch, content, commitMessage, options) {
        var _a = __read([projectId, filePath].map(encodeURIComponent), 2), pId = _a[0], path = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/repository/files/" + path, __assign({ branch: branch, content: content, commitMessage: commitMessage }, options));
    };
    RepositoryFiles.prototype.remove = function (projectId, filePath, branch, commitMessage, options) {
        var _a = __read([projectId, filePath].map(encodeURIComponent), 2), pId = _a[0], path = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/repository/files/" + path, __assign({ branch: branch, commitMessage: commitMessage }, options));
    };
    RepositoryFiles.prototype.show = function (projectId, filePath, ref, options) {
        var _a = __read([projectId, filePath].map(encodeURIComponent), 2), pId = _a[0], path = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/repository/files/" + path, __assign({ ref: ref }, options));
    };
    RepositoryFiles.prototype.showBlame = function (projectId, filePath, options) {
        var _a = __read([projectId, filePath].map(encodeURIComponent), 2), pId = _a[0], path = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/repository/files/" + path + "/blame", options);
    };
    RepositoryFiles.prototype.showRaw = function (projectId, filePath, options) {
        var _a = __read([projectId, filePath].map(encodeURIComponent), 2), pId = _a[0], path = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/repository/files/" + path + "/raw", options);
    };
    return RepositoryFiles;
}(BaseResource));

var RepositorySubmodules = /** @class */ (function (_super) {
    __extends(RepositorySubmodules, _super);
    function RepositorySubmodules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepositorySubmodules.prototype.edit = function (projectId, submodule, branch, commit_sha, options) {
        var _a = __read([projectId, submodule].map(encodeURIComponent), 2), pId = _a[0], sm = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/repository/submodules/" + sm, __assign({ branch: branch, commit_sha: commit_sha }, options));
    };
    return RepositorySubmodules;
}(BaseResource));

var Runners = /** @class */ (function (_super) {
    __extends(Runners, _super);
    function Runners() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Runners.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, options = __rest(_a, ["projectId"]);
        var url = projectId ? "projects/" + encodeURIComponent(projectId) + "/runners" : 'runners/all';
        return RequestHelper.get()(this, url, options);
    };
    Runners.prototype.allOwned = function (options) {
        return RequestHelper.get()(this, 'runners', options);
    };
    Runners.prototype.edit = function (runnerId, options) {
        var rId = encodeURIComponent(runnerId);
        return RequestHelper.put()(this, "runners/" + rId, options);
    };
    Runners.prototype.enable = function (projectId, runnerId, options) {
        var _a = __read([projectId, runnerId].map(encodeURIComponent), 2), pId = _a[0], rId = _a[1];
        return RequestHelper.post()(this, "projects/" + pId + "/runners", __assign({ runnerId: rId }, options));
    };
    Runners.prototype.disable = function (projectId, runnerId, options) {
        var _a = __read([projectId, runnerId].map(encodeURIComponent), 2), pId = _a[0], rId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/runners/" + rId, options);
    };
    Runners.prototype.jobs = function (runnerId, options) {
        var rId = encodeURIComponent(runnerId);
        return RequestHelper.get()(this, "runners/" + rId + "/jobs", options);
    };
    Runners.prototype.remove = function (runnerId, options) {
        var rId = encodeURIComponent(runnerId);
        return RequestHelper.del()(this, "runners/" + rId, options);
    };
    Runners.prototype.show = function (runnerId, options) {
        var rId = encodeURIComponent(runnerId);
        return RequestHelper.get()(this, "runners/" + rId, options);
    };
    return Runners;
}(BaseResource));

var Services = /** @class */ (function (_super) {
    __extends(Services, _super);
    function Services() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Services.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/services", options);
    };
    Services.prototype.edit = function (projectId, serviceName, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.put()(this, "projects/" + pId + "/services/" + serviceName, options);
    };
    Services.prototype.remove = function (projectId, serviceName, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.del()(this, "projects/" + pId + "/services/" + serviceName, options);
    };
    Services.prototype.show = function (projectId, serviceName, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/services/" + serviceName, options);
    };
    return Services;
}(BaseResource));

var Tags = /** @class */ (function (_super) {
    __extends(Tags, _super);
    function Tags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tags.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/repository/tags", options);
    };
    Tags.prototype.create = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/repository/tags", options);
    };
    Tags.prototype.remove = function (projectId, tagName, options) {
        var _a = __read([projectId, tagName].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/repository/tags/" + tId, options);
    };
    Tags.prototype.show = function (projectId, tagName, options) {
        var _a = __read([projectId, tagName].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/repository/tags/" + tId, options);
    };
    return Tags;
}(BaseResource));

var Todos = /** @class */ (function (_super) {
    __extends(Todos, _super);
    function Todos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Todos.prototype.all = function (options) {
        return RequestHelper.get()(this, 'todos', options);
    };
    Todos.prototype.create = function (projectId, resourceId, resourceName, options) {
        var resourceAPI = resourceName === 'issue' ? 'issues' : 'merge_requests';
        return RequestHelper.post()(this, "projects/" + projectId + "/" + resourceAPI + "/" + resourceId + "/todo", options);
    };
    Todos.prototype.done = function (_a) {
        if (_a === void 0) { _a = {}; }
        var todoId = _a.todoId, options = __rest(_a, ["todoId"]);
        var url = ['todos'];
        if (todoId)
            url.push(todoId.toString());
        url.push('mark_as_done');
        // Fixme: Rewrite this to make better use of proper typing
        if (todoId) {
            return RequestHelper.post()(this, url.join('/'), options);
        }
        return RequestHelper.post()(this, url.join('/'), options);
    };
    return Todos;
}(BaseResource));

// TODO: Rename PipelineTriggers
var Triggers = /** @class */ (function (_super) {
    __extends(Triggers, _super);
    function Triggers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triggers.prototype.add = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/triggers", options);
    };
    Triggers.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/triggers", options);
    };
    Triggers.prototype.edit = function (projectId, triggerId, options) {
        var _a = __read([projectId, triggerId].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/triggers/" + tId, options);
    };
    Triggers.prototype.pipeline = function (projectId, ref, token, _a) {
        var _b = _a === void 0 ? {} : _a, variables = _b.variables;
        var pId = encodeURIComponent(projectId);
        var hapiVariables = {};
        if (variables) {
            Object.entries(variables).forEach(function (_a) {
                var _b = __read(_a, 2), k = _b[0], v = _b[1];
                hapiVariables["variables[" + k + "]"] = v;
            });
        }
        return RequestHelper.post()(this, "projects/" + pId + "/trigger/pipeline", __assign({ isForm: true, ref: ref, token: token }, hapiVariables));
    };
    Triggers.prototype.remove = function (projectId, triggerId, options) {
        var _a = __read([projectId, triggerId].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/triggers/" + tId, options);
    };
    Triggers.prototype.show = function (projectId, triggerId, options) {
        var _a = __read([projectId, triggerId].map(encodeURIComponent), 2), pId = _a[0], tId = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/triggers/" + tId, options);
    };
    return Triggers;
}(BaseResource));

var VulnerabilityFindings = /** @class */ (function (_super) {
    __extends(VulnerabilityFindings, _super);
    function VulnerabilityFindings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VulnerabilityFindings.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/vulnerability_findings", options);
    };
    return VulnerabilityFindings;
}(BaseResource));

var ApplicationSettings = /** @class */ (function (_super) {
    __extends(ApplicationSettings, _super);
    function ApplicationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationSettings.prototype.all = function (options) {
        return RequestHelper.get()(this, 'application/settings', options);
    };
    ApplicationSettings.prototype.edit = function (options) {
        return RequestHelper.put()(this, 'application/settings', options);
    };
    return ApplicationSettings;
}(BaseResource));

var BroadcastMessages = /** @class */ (function (_super) {
    __extends(BroadcastMessages, _super);
    function BroadcastMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BroadcastMessages.prototype.all = function (options) {
        return RequestHelper.get()(this, 'broadcast_messages', options);
    };
    BroadcastMessages.prototype.create = function (options) {
        return RequestHelper.post()(this, 'broadcast_messages', options);
    };
    BroadcastMessages.prototype.edit = function (broadcastMessageId, options) {
        var bId = encodeURIComponent(broadcastMessageId);
        return RequestHelper.put()(this, "broadcast_messages/" + bId, options);
    };
    BroadcastMessages.prototype.remove = function (broadcastMessageId, options) {
        var bId = encodeURIComponent(broadcastMessageId);
        return RequestHelper.del()(this, "broadcast_messages/" + bId, options);
    };
    BroadcastMessages.prototype.show = function (broadcastMessageId, options) {
        var bId = encodeURIComponent(broadcastMessageId);
        return RequestHelper.get()(this, "broadcast_messages/" + bId, options);
    };
    return BroadcastMessages;
}(BaseResource));

var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Events.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, options = __rest(_a, ["projectId"]);
        var url;
        if (projectId) {
            var pId = encodeURIComponent(projectId);
            url = "projects/" + pId + "/events";
        }
        else {
            url = 'events';
        }
        return RequestHelper.get()(this, url, options);
    };
    return Events;
}(BaseResource));

var FeatureFlags = /** @class */ (function (_super) {
    __extends(FeatureFlags, _super);
    function FeatureFlags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FeatureFlags.prototype.all = function (projectId, options) {
        if (options === void 0) { options = {}; }
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/features_flags", options);
    };
    FeatureFlags.prototype.create = function (projectId, flagName, version, options) {
        var _a = __read([projectId, flagName, version].map(encodeURIComponent), 3), pId = _a[0], fName = _a[1], ver = _a[2];
        return RequestHelper.post()(this, "projects/" + pId + "/features_flags", __assign({ version: ver, name: fName }, options));
    };
    FeatureFlags.prototype.edit = function (projectId, flagName, options) {
        var _a = __read([projectId, flagName].map(encodeURIComponent), 2), pId = _a[0], fName = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/features_flags/" + fName, options);
    };
    FeatureFlags.prototype.remove = function (projectId, flagName, options) {
        var _a = __read([projectId, flagName].map(encodeURIComponent), 2), pId = _a[0], fName = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/features_flags/" + fName, options);
    };
    FeatureFlags.prototype.show = function (projectId, flagName, options) {
        var _a = __read([projectId, flagName].map(encodeURIComponent), 2), pId = _a[0], fName = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/features_flags/" + fName, options);
    };
    return FeatureFlags;
}(BaseResource));

var GeoNodes = /** @class */ (function (_super) {
    __extends(GeoNodes, _super);
    function GeoNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeoNodes.prototype.all = function (options) {
        return RequestHelper.get()(this, 'geo_nodes', options);
    };
    GeoNodes.prototype.create = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return RequestHelper.post()(this, "geo_nodes/" + gId, options);
    };
    GeoNodes.prototype.edit = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return RequestHelper.put()(this, "geo_nodes/" + gId, options);
    };
    GeoNodes.prototype.failures = function (options) {
        return RequestHelper.get()(this, 'geo_nodes/current/failures', options);
    };
    GeoNodes.prototype.repair = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return RequestHelper.post()(this, "geo_nodes/" + gId + "/repair", options);
    };
    GeoNodes.prototype.remove = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return RequestHelper.del()(this, "geo_nodes/" + gId, options);
    };
    GeoNodes.prototype.show = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return RequestHelper.get()(this, "geo_nodes/" + gId, options);
    };
    GeoNodes.prototype.status = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return RequestHelper.get()(this, "geo_nodes/" + gId + "/status", options);
    };
    GeoNodes.prototype.statuses = function (options) {
        return RequestHelper.get()(this, 'geo_nodes/statuses', options);
    };
    return GeoNodes;
}(BaseResource));

var GitignoreTemplates = /** @class */ (function (_super) {
    __extends(GitignoreTemplates, _super);
    function GitignoreTemplates(options) {
        /* istanbul ignore next */
        return _super.call(this, 'gitignores', options) || this;
    }
    return GitignoreTemplates;
}(ResourceTemplates));

var GitLabCIYMLTemplates = /** @class */ (function (_super) {
    __extends(GitLabCIYMLTemplates, _super);
    function GitLabCIYMLTemplates(options) {
        /* istanbul ignore next */
        return _super.call(this, 'gitlab_ci_ymls', options) || this;
    }
    return GitLabCIYMLTemplates;
}(ResourceTemplates));

var Keys = /** @class */ (function (_super) {
    __extends(Keys, _super);
    function Keys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keys.prototype.show = function (keyId, options) {
        var kId = encodeURIComponent(keyId);
        return RequestHelper.get()(this, "keys/" + kId, options);
    };
    return Keys;
}(BaseResource));

var License = /** @class */ (function (_super) {
    __extends(License, _super);
    function License() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    License.prototype.add = function (license, options) {
        return RequestHelper.post()(this, 'license', __assign({ license: license }, options));
    };
    License.prototype.all = function (options) {
        return RequestHelper.get()(this, 'licenses', options);
    };
    License.prototype.show = function (options) {
        return RequestHelper.get()(this, 'license', options);
    };
    License.prototype.remove = function (licenceId, options) {
        var lId = encodeURIComponent(licenceId);
        return RequestHelper.del()(this, "license/" + lId, options);
    };
    return License;
}(BaseResource));

var LicenseTemplates = /** @class */ (function (_super) {
    __extends(LicenseTemplates, _super);
    function LicenseTemplates(options) {
        /* istanbul ignore next */
        return _super.call(this, 'Licenses', options) || this;
    }
    return LicenseTemplates;
}(ResourceTemplates));

var Lint = /** @class */ (function (_super) {
    __extends(Lint, _super);
    function Lint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lint.prototype.lint = function (content, options) {
        return RequestHelper.post()(this, 'ci/lint', __assign({ content: content }, options));
    };
    return Lint;
}(BaseResource));

// TODO: Add missing functions
var Namespaces = /** @class */ (function (_super) {
    __extends(Namespaces, _super);
    function Namespaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Namespaces.prototype.all = function (options) {
        return RequestHelper.get()(this, 'namespaces', options);
    };
    Namespaces.prototype.show = function (namespaceId, options) {
        var nId = encodeURIComponent(namespaceId);
        return RequestHelper.get()(this, "namespaces/" + nId, options);
    };
    return Namespaces;
}(BaseResource));

function url(_a) {
    var projectId = _a.projectId, groupId = _a.groupId;
    var uri = '';
    if (projectId) {
        uri += "projects/" + encodeURIComponent(projectId) + "/";
    }
    else if (groupId) {
        uri += "groups/" + encodeURIComponent(groupId) + "/";
    }
    return uri + "notification_settings";
}
var NotificationSettings = /** @class */ (function (_super) {
    __extends(NotificationSettings, _super);
    function NotificationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationSettings.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, groupId = _a.groupId, options = __rest(_a, ["projectId", "groupId"]);
        return RequestHelper.get()(this, url({ groupId: groupId, projectId: projectId }), options);
    };
    NotificationSettings.prototype.edit = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, groupId = _a.groupId, options = __rest(_a, ["projectId", "groupId"]);
        return RequestHelper.put()(this, url({ groupId: groupId, projectId: projectId }), options);
    };
    return NotificationSettings;
}(BaseResource));

var Markdown = /** @class */ (function (_super) {
    __extends(Markdown, _super);
    function Markdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Markdown.prototype.render = function (text, options) {
        return RequestHelper.post()(this, 'markdown', __assign({ text: text }, options));
    };
    return Markdown;
}(BaseResource));

// TODO: Add missing functions
var PagesDomains = /** @class */ (function (_super) {
    __extends(PagesDomains, _super);
    function PagesDomains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagesDomains.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, options = __rest(_a, ["projectId"]);
        var url = projectId ? "projects/" + encodeURIComponent(projectId) + "/" : '';
        return RequestHelper.get()(this, url + "pages/domains", options);
    };
    PagesDomains.prototype.create = function (projectId, domain, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/pages/domains", __assign({ domain: domain }, options));
    };
    PagesDomains.prototype.edit = function (projectId, domain, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.put()(this, "projects/" + pId + "/pages/domains/" + domain, options);
    };
    PagesDomains.prototype.show = function (projectId, domain, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/pages/domains/" + domain, options);
    };
    PagesDomains.prototype.remove = function (projectId, domain, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.del()(this, "projects/" + pId + "/pages/domains/" + domain, options);
    };
    return PagesDomains;
}(BaseResource));

var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Search.prototype.all = function (scope, search, _a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, groupId = _a.groupId, options = __rest(_a, ["projectId", "groupId"]);
        var url = '';
        if (projectId) {
            url += "projects/" + encodeURIComponent(projectId) + "/";
        }
        else if (groupId) {
            url += "groups/" + encodeURIComponent(groupId) + "/";
        }
        return RequestHelper.get()(this, url + "search", __assign({ scope: scope, search: search }, options));
    };
    return Search;
}(BaseResource));

var SidekiqMetrics = /** @class */ (function (_super) {
    __extends(SidekiqMetrics, _super);
    function SidekiqMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SidekiqMetrics.prototype.queueMetrics = function () {
        return RequestHelper.get()(this, 'sidekiq/queue_metrics');
    };
    SidekiqMetrics.prototype.processMetrics = function () {
        return RequestHelper.get()(this, 'sidekiq/process_metrics');
    };
    SidekiqMetrics.prototype.jobStats = function () {
        return RequestHelper.get()(this, 'sidekiq/job_stats');
    };
    SidekiqMetrics.prototype.compoundMetrics = function () {
        return RequestHelper.get()(this, 'sidekiq/compound_metrics');
    };
    return SidekiqMetrics;
}(BaseResource));

var Snippets = /** @class */ (function (_super) {
    __extends(Snippets, _super);
    function Snippets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snippets.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var p = _a.public, options = __rest(_a, ["public"]);
        var url = p ? 'snippets/public' : 'snippets';
        return RequestHelper.get()(this, url, options);
    };
    Snippets.prototype.content = function (snippetId, options) {
        var sId = encodeURIComponent(snippetId);
        return RequestHelper.get()(this, "snippets/" + sId + "/raw", options);
    };
    Snippets.prototype.create = function (title, fileName, content, visibility, options) {
        return RequestHelper.post()(this, 'snippets', __assign({ title: title, fileName: fileName, content: content, visibility: visibility }, options));
    };
    Snippets.prototype.edit = function (snippetId, options) {
        var sId = encodeURIComponent(snippetId);
        return RequestHelper.put()(this, "snippets/" + sId, options);
    };
    Snippets.prototype.remove = function (snippetId, options) {
        var sId = encodeURIComponent(snippetId);
        return RequestHelper.del()(this, "snippets/" + sId, options);
    };
    Snippets.prototype.show = function (snippetId, options) {
        var sId = encodeURIComponent(snippetId);
        return RequestHelper.get()(this, "snippets/" + sId, options);
    };
    Snippets.prototype.userAgentDetails = function (snippetId, options) {
        var sId = encodeURIComponent(snippetId);
        return RequestHelper.get()(this, "snippets/" + sId + "/user_agent_detail", options);
    };
    return Snippets;
}(BaseResource));

var SystemHooks = /** @class */ (function (_super) {
    __extends(SystemHooks, _super);
    function SystemHooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemHooks.prototype.add = function (url, options) {
        return RequestHelper.post()(this, 'hooks', __assign({ url: url }, options));
    };
    SystemHooks.prototype.all = function (options) {
        return RequestHelper.get()(this, 'hooks', options);
    };
    SystemHooks.prototype.edit = function (hookId, url, options) {
        var hId = encodeURIComponent(hookId);
        return RequestHelper.put()(this, "hooks/" + hId, __assign({ url: url }, options));
    };
    SystemHooks.prototype.remove = function (hookId, options) {
        var hId = encodeURIComponent(hookId);
        return RequestHelper.del()(this, "hooks/" + hId, options);
    };
    return SystemHooks;
}(BaseResource));

var Version = /** @class */ (function (_super) {
    __extends(Version, _super);
    function Version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Version.prototype.show = function (options) {
        return RequestHelper.get()(this, 'version', options);
    };
    return Version;
}(BaseResource));

var Wikis = /** @class */ (function (_super) {
    __extends(Wikis, _super);
    function Wikis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wikis.prototype.all = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.get()(this, "projects/" + pId + "/wikis", options);
    };
    Wikis.prototype.create = function (projectId, options) {
        var pId = encodeURIComponent(projectId);
        return RequestHelper.post()(this, "projects/" + pId + "/wikis", options);
    };
    Wikis.prototype.edit = function (projectId, slug, options) {
        var _a = __read([projectId, slug].map(encodeURIComponent), 2), pId = _a[0], s = _a[1];
        return RequestHelper.put()(this, "projects/" + pId + "/wikis/" + s, options);
    };
    Wikis.prototype.show = function (projectId, slug, options) {
        var _a = __read([projectId, slug].map(encodeURIComponent), 2), pId = _a[0], s = _a[1];
        return RequestHelper.get()(this, "projects/" + pId + "/wikis/" + s, options);
    };
    Wikis.prototype.remove = function (projectId, slug, options) {
        var _a = __read([projectId, slug].map(encodeURIComponent), 2), pId = _a[0], s = _a[1];
        return RequestHelper.del()(this, "projects/" + pId + "/wikis/" + s, options);
    };
    return Wikis;
}(BaseResource));

/* eslint-disable  max-classes-per-file */
var resources = {
    Groups: Groups,
    GroupAccessRequests: GroupAccessRequests,
    GroupBadges: GroupBadges,
    GroupCustomAttributes: GroupCustomAttributes,
    GroupIssueBoards: GroupIssueBoards,
    GroupMembers: GroupMembers,
    GroupMilestones: GroupMilestones,
    GroupRunners: GroupRunners,
    GroupVariables: GroupVariables,
    GroupLabels: GroupLabels,
    GroupDeployTokens: GroupDeployTokens,
    Epics: Epics,
    EpicIssues: EpicIssues,
    EpicNotes: EpicNotes,
    EpicDiscussions: EpicDiscussions,
    Users: Users,
    UserCustomAttributes: UserCustomAttributes,
    UserEmails: UserEmails,
    UserImpersonationTokens: UserImpersonationTokens,
    UserSSHKeys: UserSSHKeys,
    UserGPGKeys: UserGPGKeys,
    Branches: Branches,
    Commits: Commits,
    CommitDiscussions: CommitDiscussions,
    ContainerRegistry: ContainerRegistry,
    Deployments: Deployments,
    DeployKeys: DeployKeys,
    Environments: Environments,
    FreezePeriods: FreezePeriods,
    Issues: Issues,
    IssuesStatistics: IssuesStatistics,
    IssueNotes: IssueNotes,
    IssueNoteAwardEmojis: IssueNoteAwardEmojis,
    IssueDiscussions: IssueDiscussions,
    IssueAwardEmojis: IssueAwardEmojis,
    Jobs: Jobs,
    Labels: Labels,
    MergeRequests: MergeRequests,
    MergeRequestApprovals: MergeRequestApprovals,
    MergeRequestAwardEmojis: MergeRequestAwardEmojis,
    MergeRequestDiscussions: MergeRequestDiscussions,
    MergeRequestNotes: MergeRequestNotes,
    Packages: Packages,
    PackageRegistry: PackageRegistry,
    Pipelines: Pipelines,
    PipelineSchedules: PipelineSchedules,
    PipelineScheduleVariables: PipelineScheduleVariables,
    Projects: Projects,
    ProjectAccessRequests: ProjectAccessRequests,
    ProjectBadges: ProjectBadges,
    ProjectCustomAttributes: ProjectCustomAttributes,
    ProjectImportExport: ProjectImportExport,
    ProjectIssueBoards: ProjectIssueBoards,
    ProjectHooks: ProjectHooks,
    ProjectMembers: ProjectMembers,
    ProjectMilestones: ProjectMilestones,
    ProjectSnippets: ProjectSnippets,
    ProjectSnippetNotes: ProjectSnippetNotes,
    ProjectSnippetDiscussions: ProjectSnippetDiscussions,
    ProjectSnippetAwardEmojis: ProjectSnippetAwardEmojis,
    ProtectedBranches: ProtectedBranches,
    ProtectedTags: ProtectedTags,
    ProjectVariables: ProjectVariables,
    ProjectDeployTokens: ProjectDeployTokens,
    PushRules: PushRules,
    Releases: Releases,
    ReleaseLinks: ReleaseLinks,
    Repositories: Repositories,
    RepositoryFiles: RepositoryFiles,
    RepositorySubmodules: RepositorySubmodules,
    Runners: Runners,
    Services: Services,
    Tags: Tags,
    Todos: Todos,
    Triggers: Triggers,
    VulnerabilityFindings: VulnerabilityFindings,
    ApplicationSettings: ApplicationSettings,
    BroadcastMessages: BroadcastMessages,
    Events: Events,
    FeatureFlags: FeatureFlags,
    GeoNodes: GeoNodes,
    GitignoreTemplates: GitignoreTemplates,
    GitLabCIYMLTemplates: GitLabCIYMLTemplates,
    Keys: Keys,
    License: License,
    LicenseTemplates: LicenseTemplates,
    Lint: Lint,
    Namespaces: Namespaces,
    NotificationSettings: NotificationSettings,
    Markdown: Markdown,
    PagesDomains: PagesDomains,
    Search: Search,
    SidekiqMetrics: SidekiqMetrics,
    Snippets: Snippets,
    SystemHooks: SystemHooks,
    Version: Version,
    Wikis: Wikis,
};
var Gitlab = /** @class */ (function (_super) {
    __extends(Gitlab, _super);
    function Gitlab(options) {
        var _this = _super.call(this) || this;
        Object.keys(resources).forEach(function (s) {
            _this[s] = new resources[s](options);
        });
        return _this;
    }
    return Gitlab;
}(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}())));

// Groups

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Groups: Groups,
    GroupAccessRequests: GroupAccessRequests,
    GroupBadges: GroupBadges,
    GroupCustomAttributes: GroupCustomAttributes,
    GroupIssueBoards: GroupIssueBoards,
    GroupMembers: GroupMembers,
    GroupMilestones: GroupMilestones,
    GroupRunners: GroupRunners,
    GroupVariables: GroupVariables,
    GroupLabels: GroupLabels,
    GroupDeployTokens: GroupDeployTokens,
    Epics: Epics,
    EpicIssues: EpicIssues,
    EpicNotes: EpicNotes,
    EpicDiscussions: EpicDiscussions,
    Users: Users,
    UserCustomAttributes: UserCustomAttributes,
    UserEmails: UserEmails,
    UserImpersonationTokens: UserImpersonationTokens,
    UserSSHKeys: UserSSHKeys,
    UserGPGKeys: UserGPGKeys,
    Branches: Branches,
    Commits: Commits,
    CommitDiscussions: CommitDiscussions,
    ContainerRegistry: ContainerRegistry,
    Deployments: Deployments,
    DeployKeys: DeployKeys,
    Environments: Environments,
    FreezePeriods: FreezePeriods,
    Issues: Issues,
    IssuesStatistics: IssuesStatistics,
    IssueNotes: IssueNotes,
    IssueNoteAwardEmojis: IssueNoteAwardEmojis,
    IssueDiscussions: IssueDiscussions,
    IssueAwardEmojis: IssueAwardEmojis,
    Jobs: Jobs,
    Labels: Labels,
    MergeRequests: MergeRequests,
    MergeRequestApprovals: MergeRequestApprovals,
    MergeRequestAwardEmojis: MergeRequestAwardEmojis,
    MergeRequestDiscussions: MergeRequestDiscussions,
    MergeRequestNotes: MergeRequestNotes,
    Packages: Packages,
    PackageRegistry: PackageRegistry,
    Pipelines: Pipelines,
    PipelineSchedules: PipelineSchedules,
    PipelineScheduleVariables: PipelineScheduleVariables,
    Projects: Projects,
    ProjectAccessRequests: ProjectAccessRequests,
    ProjectBadges: ProjectBadges,
    ProjectCustomAttributes: ProjectCustomAttributes,
    ProjectImportExport: ProjectImportExport,
    ProjectIssueBoards: ProjectIssueBoards,
    ProjectHooks: ProjectHooks,
    ProjectMembers: ProjectMembers,
    ProjectMilestones: ProjectMilestones,
    ProjectSnippets: ProjectSnippets,
    ProjectSnippetNotes: ProjectSnippetNotes,
    ProjectSnippetDiscussions: ProjectSnippetDiscussions,
    ProjectSnippetAwardEmojis: ProjectSnippetAwardEmojis,
    ProtectedBranches: ProtectedBranches,
    ProtectedTags: ProtectedTags,
    ProjectVariables: ProjectVariables,
    ProjectDeployTokens: ProjectDeployTokens,
    PushRules: PushRules,
    Releases: Releases,
    ReleaseLinks: ReleaseLinks,
    Repositories: Repositories,
    RepositoryFiles: RepositoryFiles,
    RepositorySubmodules: RepositorySubmodules,
    Runners: Runners,
    Services: Services,
    Tags: Tags,
    Todos: Todos,
    Triggers: Triggers,
    VulnerabilityFindings: VulnerabilityFindings,
    ApplicationSettings: ApplicationSettings,
    BroadcastMessages: BroadcastMessages,
    Events: Events,
    FeatureFlags: FeatureFlags,
    GeoNodes: GeoNodes,
    GitignoreTemplates: GitignoreTemplates,
    GitLabCIYMLTemplates: GitLabCIYMLTemplates,
    Keys: Keys,
    License: License,
    LicenseTemplates: LicenseTemplates,
    Lint: Lint,
    Namespaces: Namespaces,
    NotificationSettings: NotificationSettings,
    Markdown: Markdown,
    PagesDomains: PagesDomains,
    Search: Search,
    SidekiqMetrics: SidekiqMetrics,
    Snippets: Snippets,
    SystemHooks: SystemHooks,
    Version: Version,
    Wikis: Wikis,
    Gitlab: Gitlab
});

var types = /*#__PURE__*/Object.freeze({
    __proto__: null
});

export { ApplicationSettings, Branches, BroadcastMessages, CommitDiscussions, Commits, ContainerRegistry, DeployKeys, Deployments, Environments, EpicDiscussions, EpicIssues, EpicNotes, Epics, Events, FeatureFlags, FreezePeriods, GeoNodes, GitLabCIYMLTemplates, GitignoreTemplates, Gitlab, GroupAccessRequests, GroupBadges, GroupCustomAttributes, GroupDeployTokens, GroupIssueBoards, GroupLabels, GroupMembers, GroupMilestones, GroupRunners, GroupVariables, Groups, IssueAwardEmojis, IssueDiscussions, IssueNoteAwardEmojis, IssueNotes, Issues, IssuesStatistics, Jobs, Keys, Labels, License, LicenseTemplates, Lint, Markdown, MergeRequestApprovals, MergeRequestAwardEmojis, MergeRequestDiscussions, MergeRequestNotes, MergeRequests, Namespaces, NotificationSettings, PackageRegistry, Packages, PagesDomains, PipelineScheduleVariables, PipelineSchedules, Pipelines, ProjectAccessRequests, ProjectBadges, ProjectCustomAttributes, ProjectDeployTokens, ProjectHooks, ProjectImportExport, ProjectIssueBoards, ProjectMembers, ProjectMilestones, ProjectSnippetAwardEmojis, ProjectSnippetDiscussions, ProjectSnippetNotes, ProjectSnippets, ProjectVariables, Projects, ProtectedBranches, ProtectedTags, PushRules, ReleaseLinks, Releases, Repositories, RepositoryFiles, RepositorySubmodules, index as Resources, Runners, Search, Services, SidekiqMetrics, Snippets, SystemHooks, Tags, Todos, Triggers, types as Types, UserCustomAttributes, UserEmails, UserGPGKeys, UserImpersonationTokens, UserSSHKeys, Users, Version, VulnerabilityFindings, Wikis, getAPIMap };
//# sourceMappingURL=index.es.js.map
