import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export declare type SupportedService = 'asana' | 'assembla' | 'bamboo' | 'bugzilla' | 'buildkite' | 'campfire' | 'custom-issue-tracker' | 'drone-ci' | 'emails-on-push' | 'external-wiki' | 'flowdock' | 'hangouts_chat' | 'hipchat' | 'irker' | 'jira' | 'kubernetes' | 'slack-slash-commands' | 'slack' | 'packagist' | 'pipelines-email' | 'pivotaltracker' | 'prometheus' | 'pushover' | 'redmine' | 'microsoft-teams' | 'mattermost' | 'mattermost-slash-commands' | 'teamcity' | 'jenkins' | 'jenkins-deprecated' | 'mock-ci' | 'youtrack';
export interface ServiceSchema extends Record<string, unknown> {
    id: number;
    title: string;
    slug: string;
    created_at: string;
    updated_at: string;
    active: boolean;
    commit_events: boolean;
    push_events: boolean;
    issues_events: boolean;
    confidential_issues_events: boolean;
    merge_requests_events: boolean;
    tag_push_events: boolean;
    note_events: boolean;
    confidential_note_events: boolean;
    pipeline_events: boolean;
    wiki_page_events: boolean;
    job_events: boolean;
    comment_on_event_enabled: boolean;
}
export declare class Services<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ServiceSchema>[]>;
    edit(projectId: string | number, serviceName: SupportedService, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ServiceSchema>>;
    remove(projectId: string | number, serviceName: SupportedService, options?: Sudo): Promise<void>;
    show(projectId: string | number, serviceName: SupportedService, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ServiceSchema>>;
}