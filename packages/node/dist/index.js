'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@gitbeaker/core');
var requesterUtils = require('@gitbeaker/requester-utils');
var Got = require('got');
var xcase = require('xcase');
var delay = require('delay');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Got__default = /*#__PURE__*/_interopDefaultLegacy(Got);
var delay__default = /*#__PURE__*/_interopDefaultLegacy(delay);

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

function defaultOptionsHandler(resourceOptions, _a) {
    var _b = _a === void 0 ? {} : _a, body = _b.body, query = _b.query, sudo = _b.sudo, method = _b.method;
    var options = requesterUtils.defaultOptionsHandler(resourceOptions, { body: body, query: query, sudo: sudo, method: method });
    // FIXME: Not the best comparison, but...it will have to do for now.
    if (typeof body === 'object' && body.constructor.name !== 'FormData') {
        options.json = xcase.decamelizeKeys(body);
        delete options.body;
    }
    if (resourceOptions.url.includes('https') &&
        resourceOptions.rejectUnauthorized != null &&
        resourceOptions.rejectUnauthorized === false) {
        options.https = {
            rejectUnauthorized: resourceOptions.rejectUnauthorized,
        };
    }
    return options;
}
function processBody(_a) {
    var rawBody = _a.rawBody, headers = _a.headers;
    // Split to remove potential charset info from the content type
    var contentType = (headers['content-type'] || '').split(';')[0].trim();
    if (contentType === 'application/json') {
        return rawBody.length === 0 ? {} : JSON.parse(rawBody.toString());
    }
    if (contentType.startsWith('text/')) {
        return rawBody.toString();
    }
    return Buffer.from(rawBody);
}
function handler(endpoint, options) {
    return __awaiter(this, void 0, void 0, function () {
        var retryCodes, maxRetries, response, i, waitTime, e_1, output, statusCode, headers, body;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    retryCodes = [429, 502];
                    maxRetries = 10;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < maxRetries)) return [3 /*break*/, 9];
                    waitTime = Math.pow(2, i) * 0.1;
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 8]);
                    if (options.method === 'stream') {
                        return [2 /*return*/, Got__default['default'](endpoint, __assign(__assign({}, options), { method: 'get', isStream: true }))];
                    }
                    return [4 /*yield*/, Got__default['default'](endpoint, options)];
                case 3:
                    response = _a.sent(); // eslint-disable-line
                    return [3 /*break*/, 9];
                case 4:
                    e_1 = _a.sent();
                    if (!e_1.response) return [3 /*break*/, 7];
                    if (!retryCodes.includes(e_1.response.statusCode)) return [3 /*break*/, 6];
                    return [4 /*yield*/, delay__default['default'](waitTime)];
                case 5:
                    _a.sent(); // eslint-disable-line
                    return [3 /*break*/, 8]; // eslint-disable-line
                case 6:
                    if (typeof e_1.response.body === 'string' && e_1.response.body.length > 0) {
                        try {
                            output = JSON.parse(e_1.response.body);
                            e_1.description = output.error || output.message;
                        }
                        catch (err) {
                            e_1.description = e_1.response.body;
                        }
                    }
                    _a.label = 7;
                case 7: throw e_1;
                case 8:
                    i += 1;
                    return [3 /*break*/, 1];
                case 9:
                    statusCode = response.statusCode, headers = response.headers;
                    body = processBody(response);
                    return [2 /*return*/, { body: body, headers: headers, status: statusCode }];
            }
        });
    });
}
var requesterFn = requesterUtils.createRequesterFn(defaultOptionsHandler, handler);

var API = requesterUtils.presetResourceArguments(core.Resources, { requesterFn: requesterFn });
var // Groups
Groups = API.Groups, GroupAccessRequests = API.GroupAccessRequests, GroupBadges = API.GroupBadges, GroupCustomAttributes = API.GroupCustomAttributes, GroupIssueBoards = API.GroupIssueBoards, GroupMembers = API.GroupMembers, GroupMilestones = API.GroupMilestones, GroupRunners = API.GroupRunners, GroupVariables = API.GroupVariables, GroupLabels = API.GroupLabels, GroupDeployTokens = API.GroupDeployTokens, Epics = API.Epics, EpicIssues = API.EpicIssues, EpicNotes = API.EpicNotes, EpicDiscussions = API.EpicDiscussions, 
// Users
Users = API.Users, UserCustomAttributes = API.UserCustomAttributes, UserEmails = API.UserEmails, UserImpersonationTokens = API.UserImpersonationTokens, UserSSHKeys = API.UserSSHKeys, UserGPGKeys = API.UserGPGKeys, 
// Projects
Branches = API.Branches, Commits = API.Commits, CommitDiscussions = API.CommitDiscussions, ContainerRegistry = API.ContainerRegistry, Deployments = API.Deployments, DeployKeys = API.DeployKeys, Environments = API.Environments, FreezePeriods = API.FreezePeriods, Issues = API.Issues, IssuesStatistics = API.IssuesStatistics, IssueNotes = API.IssueNotes, IssueNoteAwardEmojis = API.IssueNoteAwardEmojis, IssueDiscussions = API.IssueDiscussions, IssueAwardEmojis = API.IssueAwardEmojis, Jobs = API.Jobs, Labels = API.Labels, MergeRequests = API.MergeRequests, MergeRequestApprovals = API.MergeRequestApprovals, MergeRequestAwardEmojis = API.MergeRequestAwardEmojis, MergeRequestDiscussions = API.MergeRequestDiscussions, MergeRequestNotes = API.MergeRequestNotes, Packages = API.Packages, PackageRegistry = API.PackageRegistry, Pipelines = API.Pipelines, PipelineSchedules = API.PipelineSchedules, PipelineScheduleVariables = API.PipelineScheduleVariables, Projects = API.Projects, ProjectAccessRequests = API.ProjectAccessRequests, ProjectBadges = API.ProjectBadges, ProjectCustomAttributes = API.ProjectCustomAttributes, ProjectImportExport = API.ProjectImportExport, ProjectIssueBoards = API.ProjectIssueBoards, ProjectHooks = API.ProjectHooks, ProjectMembers = API.ProjectMembers, ProjectMilestones = API.ProjectMilestones, ProjectSnippets = API.ProjectSnippets, ProjectSnippetNotes = API.ProjectSnippetNotes, ProjectSnippetDiscussions = API.ProjectSnippetDiscussions, ProjectSnippetAwardEmojis = API.ProjectSnippetAwardEmojis, ProtectedBranches = API.ProtectedBranches, ProtectedTags = API.ProtectedTags, ProjectVariables = API.ProjectVariables, ProjectDeployTokens = API.ProjectDeployTokens, PushRules = API.PushRules, Releases = API.Releases, ReleaseLinks = API.ReleaseLinks, Repositories = API.Repositories, RepositoryFiles = API.RepositoryFiles, RepositorySubmodules = API.RepositorySubmodules, Runners = API.Runners, Services = API.Services, Tags = API.Tags, Todos = API.Todos, Triggers = API.Triggers, VulnerabilityFindings = API.VulnerabilityFindings, 
// Genral
ApplicationSettings = API.ApplicationSettings, BroadcastMessages = API.BroadcastMessages, Events = API.Events, FeatureFlags = API.FeatureFlags, GeoNodes = API.GeoNodes, GitignoreTemplates = API.GitignoreTemplates, GitLabCIYMLTemplates = API.GitLabCIYMLTemplates, Keys = API.Keys, License = API.License, LicenseTemplates = API.LicenseTemplates, Lint = API.Lint, Namespaces = API.Namespaces, NotificationSettings = API.NotificationSettings, Markdown = API.Markdown, PagesDomains = API.PagesDomains, Search = API.Search, SidekiqMetrics = API.SidekiqMetrics, Snippets = API.Snippets, SystemHooks = API.SystemHooks, Version = API.Version, Wikis = API.Wikis, Gitlab = API.Gitlab;

Object.defineProperty(exports, 'Types', {
    enumerable: true,
    get: function () {
        return core.Types;
    }
});
exports.ApplicationSettings = ApplicationSettings;
exports.Branches = Branches;
exports.BroadcastMessages = BroadcastMessages;
exports.CommitDiscussions = CommitDiscussions;
exports.Commits = Commits;
exports.ContainerRegistry = ContainerRegistry;
exports.DeployKeys = DeployKeys;
exports.Deployments = Deployments;
exports.Environments = Environments;
exports.EpicDiscussions = EpicDiscussions;
exports.EpicIssues = EpicIssues;
exports.EpicNotes = EpicNotes;
exports.Epics = Epics;
exports.Events = Events;
exports.FeatureFlags = FeatureFlags;
exports.FreezePeriods = FreezePeriods;
exports.GeoNodes = GeoNodes;
exports.GitLabCIYMLTemplates = GitLabCIYMLTemplates;
exports.GitignoreTemplates = GitignoreTemplates;
exports.Gitlab = Gitlab;
exports.GroupAccessRequests = GroupAccessRequests;
exports.GroupBadges = GroupBadges;
exports.GroupCustomAttributes = GroupCustomAttributes;
exports.GroupDeployTokens = GroupDeployTokens;
exports.GroupIssueBoards = GroupIssueBoards;
exports.GroupLabels = GroupLabels;
exports.GroupMembers = GroupMembers;
exports.GroupMilestones = GroupMilestones;
exports.GroupRunners = GroupRunners;
exports.GroupVariables = GroupVariables;
exports.Groups = Groups;
exports.IssueAwardEmojis = IssueAwardEmojis;
exports.IssueDiscussions = IssueDiscussions;
exports.IssueNoteAwardEmojis = IssueNoteAwardEmojis;
exports.IssueNotes = IssueNotes;
exports.Issues = Issues;
exports.IssuesStatistics = IssuesStatistics;
exports.Jobs = Jobs;
exports.Keys = Keys;
exports.Labels = Labels;
exports.License = License;
exports.LicenseTemplates = LicenseTemplates;
exports.Lint = Lint;
exports.Markdown = Markdown;
exports.MergeRequestApprovals = MergeRequestApprovals;
exports.MergeRequestAwardEmojis = MergeRequestAwardEmojis;
exports.MergeRequestDiscussions = MergeRequestDiscussions;
exports.MergeRequestNotes = MergeRequestNotes;
exports.MergeRequests = MergeRequests;
exports.Namespaces = Namespaces;
exports.NotificationSettings = NotificationSettings;
exports.PackageRegistry = PackageRegistry;
exports.Packages = Packages;
exports.PagesDomains = PagesDomains;
exports.PipelineScheduleVariables = PipelineScheduleVariables;
exports.PipelineSchedules = PipelineSchedules;
exports.Pipelines = Pipelines;
exports.ProjectAccessRequests = ProjectAccessRequests;
exports.ProjectBadges = ProjectBadges;
exports.ProjectCustomAttributes = ProjectCustomAttributes;
exports.ProjectDeployTokens = ProjectDeployTokens;
exports.ProjectHooks = ProjectHooks;
exports.ProjectImportExport = ProjectImportExport;
exports.ProjectIssueBoards = ProjectIssueBoards;
exports.ProjectMembers = ProjectMembers;
exports.ProjectMilestones = ProjectMilestones;
exports.ProjectSnippetAwardEmojis = ProjectSnippetAwardEmojis;
exports.ProjectSnippetDiscussions = ProjectSnippetDiscussions;
exports.ProjectSnippetNotes = ProjectSnippetNotes;
exports.ProjectSnippets = ProjectSnippets;
exports.ProjectVariables = ProjectVariables;
exports.Projects = Projects;
exports.ProtectedBranches = ProtectedBranches;
exports.ProtectedTags = ProtectedTags;
exports.PushRules = PushRules;
exports.ReleaseLinks = ReleaseLinks;
exports.Releases = Releases;
exports.Repositories = Repositories;
exports.RepositoryFiles = RepositoryFiles;
exports.RepositorySubmodules = RepositorySubmodules;
exports.Runners = Runners;
exports.Search = Search;
exports.Services = Services;
exports.SidekiqMetrics = SidekiqMetrics;
exports.Snippets = Snippets;
exports.SystemHooks = SystemHooks;
exports.Tags = Tags;
exports.Todos = Todos;
exports.Triggers = Triggers;
exports.UserCustomAttributes = UserCustomAttributes;
exports.UserEmails = UserEmails;
exports.UserGPGKeys = UserGPGKeys;
exports.UserImpersonationTokens = UserImpersonationTokens;
exports.UserSSHKeys = UserSSHKeys;
exports.Users = Users;
exports.Version = Version;
exports.VulnerabilityFindings = VulnerabilityFindings;
exports.Wikis = Wikis;
//# sourceMappingURL=index.js.map
