import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface SystemHookSchema extends Record<string, unknown> {
    id: number;
    url: string;
    created_at: string;
    push_events: boolean;
    tag_push_events: boolean;
    merge_requests_events: boolean;
    repository_update_events: boolean;
    enable_ssl_verification: boolean;
}
export declare class SystemHooks<C extends boolean = false> extends BaseResource<C> {
    add(url: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, SystemHookSchema>>;
    all(options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, SystemHookSchema>[]>;
    edit(hookId: number, url: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, SystemHookSchema>>;
    remove(hookId: number, options?: Sudo): Promise<void>;
}
