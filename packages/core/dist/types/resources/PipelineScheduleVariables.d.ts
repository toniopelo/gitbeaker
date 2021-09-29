import { BaseResource } from '@gitbeaker/requester-utils';
import { PipelineVariableSchema } from './Pipelines';
import { BaseRequestOptions, PaginatedRequestOptions } from '../infrastructure';
export declare class PipelineScheduleVariables<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, pipelineScheduleId: number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineVariableSchema>[]>;
    create(projectId: string | number, pipelineScheduleId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineVariableSchema>>;
    edit(projectId: string | number, pipelineScheduleId: number, keyId: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineVariableSchema>>;
    show(projectId: string | number, pipelineScheduleId: number, keyId: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineVariableSchema>>;
    remove(projectId: string | number, pipelineScheduleId: number, keyId: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PipelineVariableSchema>>;
}
