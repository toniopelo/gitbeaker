import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions } from '../infrastructure';
export interface SearchResultSchema extends Record<string, unknown> {
    id: number;
    description: string;
    name: string;
    name_with_namespace: string;
    path: string;
    path_with_namespace: string;
    created_at: string;
    default_branch: string;
    tag_list?: string[];
    ssh_url_to_repo: string;
    http_url_to_repo: string;
    web_url: string;
    avatar_url?: string;
    star_count: number;
    forks_count: number;
    last_activity_at: string;
}
export declare class Search<C extends boolean = false> extends BaseResource<C> {
    all(scope: string, search: string, { projectId, groupId, ...options }?: {
        projectId?: string | number;
        groupId?: string | number;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, SearchResultSchema>[]>;
}
