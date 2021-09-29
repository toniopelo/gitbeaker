import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export declare type PipelineStatus = 'created' | 'waiting_for_resource' | 'preparing' | 'pending' | 'running' | 'failed' | 'success' | 'canceled' | 'skipped' | 'manual' | 'scheduled';
export interface PipelineSchema extends Record<string, unknown> {
    id: number;
    status: PipelineStatus;
    ref: string;
    sha: string;
    web_url: string;
    created_at: string;
    updated_at: string;
    user: Pick<UserSchema, 'name' | 'avatar_url'>;
}
export interface PipelineExtendedSchema extends PipelineSchema {
    project_id: number;
    before_sha: string;
    tag: boolean;
    yaml_errors?: string;
    user: Pick<UserSchema, 'name' | 'username' | 'id' | 'state' | 'avatar_url' | 'web_url'>;
    started_at?: string;
    finished_at: string;
    committed_at?: string;
    duration?: string;
    coverage?: string;
}
export interface PipelineVariableSchema extends Record<string, unknown> {
    key: string;
    variable_type?: string;
    value: string;
}
export declare class Pipelines<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineSchema>[]>;
    create(projectId: string | number, ref: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineSchema>>;
    delete(projectId: string | number, pipelineId: number, options?: Sudo): Promise<void>;
    show(projectId: string | number, pipelineId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PipelineSchema>>;
    retry(projectId: string | number, pipelineId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PipelineExtendedSchema>>;
    cancel(projectId: string | number, pipelineId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PipelineExtendedSchema>>;
    allVariables(projectId: string | number, pipelineId: number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineVariableSchema>[]>;
}
