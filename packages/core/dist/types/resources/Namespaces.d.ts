import { BaseResource } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface NamespaceSchema extends Record<string, unknown> {
    id: number;
    name: string;
    path: string;
    kind: string;
    full_path: string;
    parent_id?: number;
    avatar_url: string;
    web_url: string;
    billable_members_count: number;
    plan: string;
    trial_ends_on?: string;
    trial: boolean;
}
export declare class Namespaces<C extends boolean = false> extends BaseResource<C> {
    all(options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, NamespaceSchema>[]>;
    show(namespaceId: string | number, options?: {
        search?: string;
    } & Sudo): Promise<import("../infrastructure").CamelizedRecord<C, NamespaceSchema>>;
}
