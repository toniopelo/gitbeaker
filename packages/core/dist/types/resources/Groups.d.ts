import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, ShowExpanded, Sudo } from '../infrastructure';
import { ProjectSchema } from './Projects';
export interface GroupSchema extends Record<string, unknown> {
    id: number;
    name: string;
    path: string;
    full_name: string;
    full_path: string;
    parent_id: number;
    visibility: string;
    avatar_url: string;
    web_url: string;
    description: string;
    share_with_group_lock: boolean;
    require_two_factor_authentication: boolean;
    two_factor_grace_period: number;
    project_creation_level: string;
    auto_devops_enabled: boolean;
    subgroup_creation_level: string;
    emails_disabled: boolean;
    mentions_disabled: boolean;
    lfs_enabled: boolean;
    default_branch_protection: number;
    request_access_enabled: boolean;
    file_template_project_id: number;
    created_at: string;
}
export declare type GroupDetailSchema = {
    id: number;
    name: string;
    path: string;
    full_name: string;
    full_path: string;
    parent_id: number;
    visibility: string;
    avatar_url: string;
    web_url: string;
    description: string;
    request_access_enabled: boolean;
    file_template_project_id: number;
    runners_token: string;
    shared_with_groups: {
        group_id: number;
        group_name: string;
        group_full_path: string;
        group_access_level: number;
        expires_at: string;
    }[];
    created_at: string;
};
export declare class Groups<C extends boolean = false> extends BaseResource<C> {
    all(options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, GroupSchema>[]>;
    create(name: string, path: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, GroupSchema>>;
    createLDAPLink(groupId: string | number, cn: string, groupAccess: number, provider: string, options?: Sudo & ShowExpanded): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>> | import("../infrastructure").ExpandedResponse<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>>;
    edit(groupId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, GroupSchema>>;
    projects(groupId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProjectSchema>[]>;
    remove(groupId: string | number, options?: Sudo & ShowExpanded): Promise<void>;
    removeLDAPLink(groupId: string | number, cn: string, { provider, ...options }?: Sudo & ShowExpanded & {
        provider?: string;
    }): Promise<void>;
    search(nameOrPath: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    show(groupId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, GroupDetailSchema>>;
    subgroups(groupId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    syncLDAP(groupId: string | number, options?: Sudo & ShowExpanded): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>> | import("../infrastructure").ExpandedResponse<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>>;
    transferProject(groupId: string | number, projectId: string | number, options?: BaseRequestOptions & ShowExpanded): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>> | import("../infrastructure").ExpandedResponse<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>>;
}
