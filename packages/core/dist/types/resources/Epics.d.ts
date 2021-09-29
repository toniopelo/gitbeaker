import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface EpicSchema extends Record<string, unknown> {
    id: number;
    iid: number;
    group_id: number;
    parent_id: number;
    title: string;
    description: string;
    state: string;
    confidential: string;
    web_url: string;
    reference: string;
    references: {
        short: string;
        relative: string;
        full: string;
    };
    author: Omit<UserSchema, 'created_at'>;
    start_date?: string;
    start_date_is_fixed: boolean;
    start_date_fixed?: string;
    start_date_from_inherited_source?: string;
    due_date: string;
    due_date_is_fixed: boolean;
    due_date_fixed?: string;
    due_date_from_inherited_source: string;
    created_at: string;
    updated_at: string;
    closed_at: string;
    labels?: string[];
    upvotes: number;
    downvotes: number;
    _links: {
        self: string;
        epic_issues: string;
        group: string;
    };
}
export declare class Epics<C extends boolean = false> extends BaseResource<C> {
    all(groupId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, EpicSchema>[]>;
    create(groupId: string | number, title: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, EpicSchema>>;
    edit(groupId: string | number, epicId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, EpicSchema>>;
    remove(groupId: string | number, epicId: number, options?: Sudo): Promise<void>;
    show(groupId: string | number, epicId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, EpicSchema>>;
}
