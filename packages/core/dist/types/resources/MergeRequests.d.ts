import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { PipelineSchema } from './Pipelines';
import { IssueSchema, TimeStatsSchema } from './Issues';
import { CommitSchema, CommitDiffSchema } from './Commits';
import { MilestoneSchema } from '../templates/types';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface AcceptMergeRequestOptions {
    mergeCommitMessage?: string;
    squashCommitMessage?: string;
    squash?: boolean;
    shouldRemoveSourceBranch?: boolean;
    mergeWhenPipelineSucceeds?: boolean;
    sha?: string;
}
export interface ShowMergeRequestOptions {
    renderHtml?: boolean;
    includeDivergedCommitsCount?: true;
    includeRebaseInProgress?: boolean;
}
export interface CreateMergeRequestOptions {
    assigneeId?: number;
    description?: string;
    targetProjectId?: number;
    labels?: string | Array<string>;
    milestoneId?: number;
    removeSourceBranch?: boolean;
    allowCollaboration?: boolean;
    allowMaintainerToPush?: boolean;
    squash?: boolean;
}
export interface UpdateMergeRequestOptions {
    targetBranch?: number;
    title?: string;
    assigneeId?: number;
    milestoneId?: number;
    labels?: string | Array<string>;
    description?: string;
    stateEvent?: string;
    removeSourceBranch?: boolean;
    squash?: boolean;
    discussionLocked?: boolean;
    allowCollaboration?: boolean;
    allowMaintainerToPush?: boolean;
}
export interface AllMergeRequestsOptions {
    state?: 'opened' | 'closed' | 'locked' | 'merged';
    orderBy?: 'created_at' | 'updated_at';
    sort?: 'asc' | 'desc';
    milestone?: 'None' | string;
    view?: string;
    labels?: string | Array<string>;
    withLabelsDetails?: boolean;
    withMergeStatusRecheck?: boolean;
    createdAfter?: string;
    createdBefore?: string;
    updatedBefore?: string;
    updatedAfter?: string;
    scope?: 'created_by_me' | 'assigned_to_me' | 'all';
    authorId?: number;
    authorUsername?: string;
    asigneeId?: number;
    assigneeUsername?: string;
    approverIds?: Array<number>;
    approvedByIds?: Array<number>;
    reviewerId?: number;
    reviewerUsername?: string;
    myReactionEmoji?: string;
    sourceBranch?: string;
    targetBranch?: string;
    in?: string;
    wip?: string;
    iids?: number[];
    mergeCommitMessage?: string;
    squashCommitMessage?: string;
    squash?: boolean;
    shouldRemoveSourceBranch?: boolean;
    mergeWhenPipelineSucceeds?: boolean;
    sha?: string;
    search?: string;
    not?: {
        labels?: string | Array<string>;
        milestone?: string;
        authorId?: number;
        authorUsername?: string;
        assigneeId?: number;
        assigneeUsername?: string;
        reviewerId?: number;
        reviewerUsername?: string;
        myReactionEmoji?: string;
    };
    environment?: string;
    deployedBefore?: string;
    deployedAfter?: string;
}
export interface ReferenceSchema {
    short: string;
    relative: string;
    full: string;
}
export interface TaskCompletionStatusSchema {
    count: number;
    completed_count: number;
}
export interface RebaseSchema extends Record<string, unknown> {
    rebase_in_progress?: boolean;
    merge_error?: string;
}
export interface DiffSchema extends Record<string, unknown> {
    id: number;
    head_commit_sha: string;
    base_commit_sha: string;
    start_commit_sha: string;
    created_at: string;
    merge_request_id: number;
    state: string;
    real_size: string;
    commits?: CommitSchema[];
    diffs?: CommitDiffSchema[];
}
export interface MergeRequestSchema extends Record<string, unknown> {
    id: number;
    iid: number;
    project_id: number;
    title: string;
    description: string;
    state: string;
    merged_by: Omit<UserSchema, 'created_at'>;
    merged_at: string;
    closed_by?: string;
    closed_at?: string;
    created_at: string;
    updated_at: string;
    target_branch: string;
    source_branch: string;
    upvotes: number;
    downvotes: number;
    author: Omit<UserSchema, 'created_at'>;
    assignee: Omit<UserSchema, 'created_at'>;
    assignees?: Omit<UserSchema, 'created_at'>[];
    reviewers?: Omit<UserSchema, 'created_at'>[];
    source_project_id: number;
    target_project_id: number;
    labels?: string[];
    work_in_progress: boolean;
    milestone: MilestoneSchema;
    merge_when_pipeline_succeeds: boolean;
    merge_status: string;
    sha: string;
    merge_commit_sha?: string;
    squash_commit_sha?: string;
    user_notes_count: number;
    discussion_locked?: string;
    should_remove_source_branch: boolean;
    force_remove_source_branch: boolean;
    web_url: string;
    references: ReferenceSchema;
    time_stats: TimeStatsSchema;
    squash: boolean;
    task_completion_status: TaskCompletionStatusSchema;
    has_conflicts: boolean;
    blocking_discussions_resolved: boolean;
    changes?: CommitDiffSchema[];
}
export declare class MergeRequests<C extends boolean = false> extends BaseResource<C> {
    accept(projectId: string | number, mergerequestIid: number, options?: AcceptMergeRequestOptions & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
    addSpentTime(projectId: string | number, mergerequestIid: number, duration: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    addTimeEstimate(projectId: string | number, mergerequestIid: number, duration: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    all({ projectId, groupId, ...options }?: {
        projectId?: string | number;
        groupId?: string | number;
    } & AllMergeRequestsOptions & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>[]>;
    cancelOnPipelineSucess(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
    changes(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
    closesIssues(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueSchema>[]>;
    commits(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, CommitSchema>[]>;
    create(projectId: string | number, sourceBranch: string, targetBranch: string, title: string, options?: CreateMergeRequestOptions & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
    edit(projectId: string | number, mergerequestIid: number, options?: UpdateMergeRequestOptions & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
    participants(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Omit<UserSchema, "created_at">>[]>;
    pipelines(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Pick<PipelineSchema, "id" | "sha" | "ref" | "status">>[]>;
    rebase(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, RebaseSchema>>;
    remove(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<void>;
    resetSpentTime(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    resetTimeEstimate(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    show(projectId: string | number, mergerequestIid: number, options?: ShowMergeRequestOptions & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
    subscribe(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
    timeStats(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    version(projectId: string | number, mergerequestIid: number, versionId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, DiffSchema>>;
    versions(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, DiffSchema>[]>;
    unsubscribe(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
}
