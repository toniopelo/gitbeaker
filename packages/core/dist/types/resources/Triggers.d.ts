import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface PipelineTriggerSchema extends Record<string, unknown> {
    id: number;
    description: string;
    created_at: string;
    last_used?: string;
    token: string;
    updated_at: string;
    owner: Pick<UserSchema, 'id' | 'name' | 'created_at'>;
}
export declare class Triggers<C extends boolean = false> extends BaseResource<C> {
    add(projectId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineTriggerSchema>>;
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineTriggerSchema>[]>;
    edit(projectId: string | number, triggerId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineTriggerSchema>>;
    pipeline(projectId: string | number, ref: string, token: string, { variables }?: {
        variables?: Record<string, string>;
    }): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    remove(projectId: string | number, triggerId: number, options?: Sudo): Promise<void>;
    show(projectId: string | number, triggerId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PipelineTriggerSchema>>;
}