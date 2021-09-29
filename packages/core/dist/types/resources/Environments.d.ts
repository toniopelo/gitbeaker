import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
import { DeploymentSchema, DeployableSchema } from './Deployments';
import { ProjectSchema } from './Projects';
export interface EnvironmentSchema extends Record<string, unknown> {
    id: number;
    name: string;
    slug?: string;
    external_url?: string;
    project?: ProjectSchema;
    state?: string;
    last_deployment?: DeploymentSchema;
    deployable?: DeployableSchema;
}
export declare class Environments<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Omit<EnvironmentSchema, "last_deployment" | "deployable">>[]>;
    show(projectId: string | number, environmentId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, EnvironmentSchema>>;
    create(projectId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Omit<EnvironmentSchema, "last_deployment" | "deployable">>>;
    edit(projectId: string | number, environmentId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Omit<EnvironmentSchema, "last_deployment" | "deployable">>>;
    remove(projectId: string | number, environmentId: number, options?: Sudo): Promise<void>;
    stop(projectId: string | number, environmentId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Omit<EnvironmentSchema, "last_deployment" | "deployable">>>;
}
