/// <reference types="node" />
import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
import { CommitSchema } from './Commits';
import { RunnerSchema } from './Runners';
import { UserSchema } from './Users';
import { PipelineSchema } from './Pipelines';
export declare type JobScope = 'created' | 'pending' | 'running' | 'failed' | 'success' | 'canceled' | 'skipped' | 'manual';
export interface ArtifactSchema extends Record<string, unknown> {
    file_type: string;
    size: number;
    filename: string;
    file_format?: string;
}
export interface JobSchema extends Record<string, unknown> {
    id: number;
    status: string;
    stage: string;
    name: string;
    ref: string;
    tag: boolean;
    coverage?: string;
    allow_failure: boolean;
    created_at: Date;
    started_at?: Date;
    finished_at?: Date;
    duration?: number;
    user: UserSchema;
    commit: CommitSchema;
    pipeline: PipelineSchema;
    web_url: string;
    artifacts: ArtifactSchema[];
    runner: RunnerSchema;
    artifacts_expire_at?: Date;
    tag_list?: string[];
}
export interface BridgeSchema extends Record<string, unknown> {
    commit: Pick<CommitSchema, 'id' | 'short_id' | 'author_name' | 'author_email' | 'message' | 'title' | 'created_at'>;
    coverage?: string;
    allow_failure: boolean;
    created_at: string;
    started_at: string;
    finished_at: string;
    duration: number;
    queued_duration: number;
    id: number;
    name: string;
    pipeline: Omit<PipelineSchema & {
        project_id: number;
    }, 'user'>;
    ref: string;
    stage: string;
    status: string;
    tag: boolean;
    web_url: string;
    user: UserSchema;
    downstream_pipeline: Omit<PipelineSchema, 'user'>;
}
export declare class Jobs<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, JobSchema>[]>;
    cancel(projectId: string | number, jobId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, JobSchema>>;
    downloadSingleArtifactFile(projectId: string | number, jobId: number, artifactPath: string, { stream, ...options }?: {
        stream?: boolean;
    } & BaseRequestOptions): NodeJS.ReadableStream | Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    downloadSingleArtifactFileFromRef(projectId: string | number, ref: string, artifactPath: string, jobName: string, { stream, ...options }?: {
        stream?: boolean;
    } & BaseRequestOptions): NodeJS.ReadableStream | Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    downloadLatestArtifactFile(projectId: string | number, ref: string, jobName: string, { stream, ...options }?: {
        stream?: boolean;
    } & BaseRequestOptions): NodeJS.ReadableStream | Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    downloadTraceFile(projectId: string | number, jobId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    erase(projectId: string | number, jobId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, JobSchema>>;
    eraseArtifacts(projectId: string | number, jobId: number, options?: Sudo): Promise<void>;
    keepArtifacts(projectId: string | number, jobId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    play(projectId: string | number, jobId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, JobSchema>>;
    retry(projectId: string | number, jobId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, JobSchema>>;
    show(projectId: string | number, jobId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, JobSchema>>;
    showPipelineJobs(projectId: string | number, pipelineId: number, options?: {
        scope?: JobScope;
    } & Sudo): Promise<import("../infrastructure").CamelizedRecord<C, JobSchema>[]>;
    showPipelineBridges(projectId: string | number, pipelineId: number, options?: {
        scope?: JobScope;
    } & Sudo): Promise<import("../infrastructure").CamelizedRecord<C, BridgeSchema>>;
}