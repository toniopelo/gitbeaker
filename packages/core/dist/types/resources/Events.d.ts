import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { PaginatedRequestOptions } from '../infrastructure';
export interface EventOptions {
    action?: 'created' | 'updated' | 'closed' | 'reopened' | 'pushed' | 'commented' | 'merged' | 'joined' | 'left' | 'destroyed' | 'expired';
    targetType?: 'issue' | 'milestone' | 'merge_request' | 'note' | 'project' | 'snippet' | 'user';
    before?: string;
    after?: string;
    scope?: string;
    sort?: 'asc' | 'desc';
}
export interface EventSchema extends Record<string, unknown> {
    id: number;
    title?: string;
    project_id: number;
    action_name: string;
    target_id: number;
    target_type: string;
    author_id: number;
    target_title: string;
    created_at: string;
    author: Omit<UserSchema, 'created_at'>;
    author_username: string;
}
export declare class Events<C extends boolean = false> extends BaseResource<C> {
    all({ projectId, ...options }?: {
        projectId?: string | number;
    } & PaginatedRequestOptions & EventOptions): Promise<import("../infrastructure").CamelizedRecord<C, EventSchema>[]>;
}
