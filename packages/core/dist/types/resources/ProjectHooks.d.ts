import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface ProjectHookSchema extends Record<string, unknown> {
    id: number;
    url: string;
    project_id: number;
    push_events: boolean;
    push_events_branch_filter: string;
    issues_events: boolean;
    confidential_issues_events: boolean;
    merge_requests_events: boolean;
    tag_push_events: boolean;
    note_events: boolean;
    confidential_note_events: boolean;
    job_events: boolean;
    pipeline_events: boolean;
    wiki_page_events: boolean;
    deployment_events: boolean;
    releases_events: boolean;
    enable_ssl_verification: boolean;
    created_at: string;
}
export declare class ProjectHooks<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProjectHookSchema>[]>;
    show(projectId: string | number, hookId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ProjectHookSchema>>;
    add(projectId: string | number, url: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProjectHookSchema>>;
    edit(projectId: string | number, hookId: number, url: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProjectHookSchema>>;
    remove(projectId: string | number, hookId: number, options?: Sudo): Promise<void>;
}