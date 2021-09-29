import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceMilestones } from '../templates';
import { MilestoneSchema } from '../templates/types';
import { PaginatedRequestOptions, BaseRequestOptions, Sudo, CamelizedRecord } from '../infrastructure';
import { IssueSchema } from './Issues';
import { MergeRequestSchema } from './MergeRequests';
export interface GroupMilestones<C extends boolean = false> extends ResourceMilestones<C> {
    all(groupId: string | number, options?: PaginatedRequestOptions): Promise<CamelizedRecord<C, MilestoneSchema>[]>;
    create(groupId: string | number, title: string, options?: BaseRequestOptions): Promise<CamelizedRecord<C, MilestoneSchema>>;
    edit(groupId: string | number, milestoneId: number, options?: BaseRequestOptions): Promise<CamelizedRecord<C, MilestoneSchema>>;
    issues(groupId: string | number, milestoneId: number, options?: Sudo): Promise<CamelizedRecord<C, IssueSchema>[]>;
    mergeRequests(groupId: string | number, milestoneId: number, options?: Sudo): Promise<CamelizedRecord<C, MergeRequestSchema>[]>;
    show(groupId: string | number, milestoneId: number, options?: Sudo): Promise<CamelizedRecord<C, MilestoneSchema>>;
}
export declare class GroupMilestones<C extends boolean = false> extends ResourceMilestones<C> {
    constructor(options: BaseResourceOptions<C>);
}
