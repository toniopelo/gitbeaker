import { BaseResource } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
import { CommitSchema } from './Commits';
import { PipelineSchema } from './Pipelines';
import { UserSchema } from './Users';
import { RunnerSchema } from './Runners';
import { EnvironmentSchema } from './Environments';
import { MergeRequestSchema } from './MergeRequests';
export declare type DeploymentStatus = 'created' | 'running' | 'success' | 'failed' | 'canceled';
export interface DeployableSchema {
    id: number;
    ref: string;
    name: string;
    runner?: RunnerSchema;
    stage?: string;
    started_at?: Date;
    status?: DeploymentStatus;
    tag: boolean;
    commit?: CommitSchema;
    coverage?: string;
    created_at?: Date;
    finished_at?: Date;
    user?: UserSchema;
    pipeline?: PipelineSchema;
}
export declare type DeploymentSchema = {
    id: number;
    iid: number;
    ref: string;
    sha: string;
    user: UserSchema;
    created_at: string;
    updated_at: string;
    status: DeploymentStatus;
    deployable: DeployableSchema;
    environment: EnvironmentSchema;
};
export declare class Deployments<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, DeploymentSchema>[]>;
    create(projectId: string | number, environment: string, sha: string, ref: string, tag: string, status: DeploymentStatus, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, DeploymentSchema>>;
    edit(projectId: string | number, deploymentId: number, status: DeploymentStatus, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, DeploymentSchema>>;
    show(projectId: string | number, deploymentId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, DeploymentSchema>>;
    mergeRequests(projectId: string | number, deploymentId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>[]>;
}