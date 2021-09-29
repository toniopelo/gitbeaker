import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, BaseRequestOptions, Sudo } from '../infrastructure';
import { IssueSchema } from '../resources/Issues';
import { MergeRequestSchema } from '../resources/MergeRequests';
export interface MilestoneSchema extends Record<string, unknown> {
    id: number;
    iid: number;
    project_id: number;
    title: string;
    description: string;
    due_date?: string;
    start_date: string;
    state: string;
    updated_at: string;
    created_at: string;
    expired: boolean;
    web_url?: string;
}
export declare class ResourceMilestones<C extends boolean = false> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    all(resourceId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MilestoneSchema>[]>;
    create(resourceId: string | number, title: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MilestoneSchema>>;
    edit(resourceId: string | number, milestoneId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MilestoneSchema>>;
    issues(resourceId: string | number, milestoneId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueSchema>[]>;
    mergeRequests(resourceId: string | number, milestoneId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>[]>;
    show(resourceId: string | number, milestoneId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, MilestoneSchema>>;
}