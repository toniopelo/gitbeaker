import { BaseResource } from '@gitbeaker/requester-utils';
import { ProjectSchema } from './Projects';
import { JobSchema } from './Jobs';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface RunnerSchema extends Record<string, unknown> {
    id: number;
    description: string;
    ip_address: string;
    active: boolean;
    is_shared: boolean;
    name: string;
    online: boolean;
    status: 'running' | 'success' | 'failed' | 'canceled';
}
export interface RunnerExtendedSchema extends RunnerSchema {
    architecture?: string;
    description: string;
    contacted_at: string;
    platform?: string;
    projects?: Pick<ProjectSchema, 'id' | 'name' | 'name_with_namespace' | 'path' | 'path_with_namespace'>;
    revision?: string;
    tag_list?: string[];
    version?: string;
    access_level: string;
    maximum_timeout?: number;
}
export declare class Runners<C extends boolean = false> extends BaseResource<C> {
    all({ projectId, ...options }?: {
        projectId?: string | number;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, RunnerSchema>[]>;
    allOwned(options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, RunnerSchema>[]>;
    edit(runnerId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, RunnerExtendedSchema>>;
    enable(projectId: string | number, runnerId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, RunnerSchema>>;
    disable(projectId: string | number, runnerId: number, options?: Sudo): Promise<void>;
    jobs(runnerId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, JobSchema>[]>;
    remove(runnerId: number, options?: Sudo): Promise<void>;
    show(runnerId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, RunnerExtendedSchema>>;
}
