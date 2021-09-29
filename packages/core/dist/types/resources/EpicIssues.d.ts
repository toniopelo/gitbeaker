import { BaseResource } from '@gitbeaker/requester-utils';
import { IssueSchema } from './Issues';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface EpicIssueSchema extends Omit<IssueSchema, 'references' | 'task_completion_status'> {
    epic_issue_id: number;
}
export declare class EpicIssues<C extends boolean = false> extends BaseResource<C> {
    all(groupId: string | number, epicIId: number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, EpicIssueSchema>[]>;
    assign(groupId: string | number, epicIId: number, epicIssueId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, EpicIssueSchema>>;
    edit(groupId: string | number, epicIId: number, epicIssueId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, EpicIssueSchema>>;
    remove(groupId: string | number, epicIId: number, epicIssueId: number, options?: Sudo): Promise<void>;
}
