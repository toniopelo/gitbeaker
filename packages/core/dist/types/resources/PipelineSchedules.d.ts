import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { PipelineSchema, PipelineVariableSchema } from './Pipelines';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface PipelineScheduleSchema extends Record<string, unknown> {
    id: number;
    description: string;
    ref: string;
    cron: string;
    cron_timezone: string;
    next_run_at: string;
    active: boolean;
    created_at: string;
    updated_at: string;
    owner: Pick<UserSchema, 'name' | 'username' | 'id' | 'state' | 'avatar_url' | 'web_url'>;
}
export interface PipelineScheduleExtendedSchema extends PipelineScheduleSchema {
    last_pipeline: Pick<PipelineSchema, 'id' | 'sha' | 'ref' | 'status'>;
}
export declare class PipelineSchedules<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineScheduleSchema>[]>;
    create(projectId: string | number, description: string, ref: string, cron: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineScheduleSchema & {
        variables?: PipelineVariableSchema[] | undefined;
    }>>;
    edit(projectId: string | number, scheduleId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineScheduleExtendedSchema>>;
    remove(projectId: string | number, scheduleId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PipelineScheduleExtendedSchema>>;
    show(projectId: string | number, scheduleId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PipelineScheduleExtendedSchema>>;
    takeOwnership(projectId: string | number, scheduleId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PipelineScheduleExtendedSchema>>;
}