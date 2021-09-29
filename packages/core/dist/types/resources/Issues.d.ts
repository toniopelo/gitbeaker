import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { MergeRequestSchema } from './MergeRequests';
import { MilestoneSchema } from '../templates/types';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface TimeStatsSchema extends Record<string, unknown> {
    time_estimate: number;
    total_time_spent: number;
    human_time_estimate: string;
    human_total_time_spent: string;
}
export interface IssueSchema extends Record<string, unknown> {
    state: string;
    description: string;
    weight?: number;
    health_status?: string;
    author: Omit<UserSchema, 'created_at'>;
    milestone: MilestoneSchema;
    project_id: number;
    assignees?: Omit<UserSchema, 'created_at'>[];
    updated_at: string;
    closed_at?: string;
    closed_by?: string;
    id: number;
    title: string;
    created_at: string;
    moved_to_id?: string;
    iid: number;
    labels?: string[];
    upvotes: number;
    downvotes: number;
    merge_requests_count: number;
    user_notes_count: number;
    due_date: string;
    web_url: string;
    references: {
        short: string;
        relative: string;
        full: string;
    };
    time_stats: TimeStatsSchema;
    has_tasks: boolean;
    task_status: string;
    confidential: boolean;
    discussion_locked: boolean;
    _links: {
        self: string;
        notes: string;
        award_emoji: string;
        project: string;
    };
    task_completion_status: {
        count: number;
        completed_count: number;
    };
    subscribed: boolean;
    epic?: {
        id: number;
        iid: number;
        title: string;
        url: string;
        group_id: number;
    };
}
export declare class Issues<C extends boolean = false> extends BaseResource<C> {
    addSpentTime(projectId: string | number, issueIid: number, duration: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    addTimeEstimate(projectId: string | number, issueIid: number, duration: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    all({ projectId, groupId, ...options }?: {
        projectId?: string | number;
        groupId?: string | number;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Omit<IssueSchema, "epic">>[]>;
    create(projectId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, IssueSchema>>;
    closedBy(projectId: string | number, issueIid: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>[]>;
    edit(projectId: string | number, issueIid: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, IssueSchema>>;
    link(projectId: string | number, issueIId: number, targetProjectId: string | number, targetIssueIId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    links(projectId: string | number, issueIid: number): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    participants(projectId: string | number, issueIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Omit<UserSchema, "created_at">>>;
    relatedMergeRequests(projectId: string | number, issueIid: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
    removeLink(projectId: string | number, issueIid: number, issueLinkId: string | number, options?: BaseRequestOptions): Promise<void>;
    remove(projectId: string | number, issueIid: number, options?: Sudo): Promise<void>;
    resetSpentTime(projectId: string | number, issueIid: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    resetTimeEstimate(projectId: string | number, issueIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    show(projectId: string | number, issueIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueSchema>>;
    subscribe(projectId: string | number, issueIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueSchema>>;
    timeStats(projectId: string | number, issueIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TimeStatsSchema>>;
    unsubscribe(projectId: string | number, issueIid: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueSchema>>;
}