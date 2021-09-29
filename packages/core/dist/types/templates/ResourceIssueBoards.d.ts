import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { MilestoneSchema } from './ResourceMilestones';
import { LabelSchema } from './ResourceLabels';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface IssueBoardListSchema extends Record<string, unknown> {
    id: number;
    label: Pick<LabelSchema, 'name' | 'color' | 'description'>;
    position: number;
    max_issue_count: number;
    max_issue_weight: number;
    limit_metric?: string;
}
export interface IssueBoardSchema extends Record<string, unknown> {
    id: number;
    name: string;
    milestone: Pick<MilestoneSchema, 'id' | 'title'>;
    lists?: IssueBoardListSchema[];
}
export declare class ResourceIssueBoards<C extends boolean = false> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    all(resourceId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, IssueBoardSchema>[]>;
    create(resourceId: string | number, name: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueBoardSchema>>;
    createList(resourceId: string | number, boardId: number, labelId: number | string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueBoardListSchema>>;
    edit(resourceId: string | number, boardId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    editList(resourceId: string | number, boardId: number, listId: number, position: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueBoardListSchema>>;
    lists(resourceId: string | number, boardId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueBoardListSchema>[]>;
    remove(resourceId: string | number, boardId: number, options?: Sudo): Promise<void>;
    removeList(resourceId: string | number, boardId: number, listId: number, options?: Sudo): Promise<void>;
    show(resourceId: string | number, boardId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueBoardSchema>>;
    showList(resourceId: string | number, boardId: number, listId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, IssueBoardListSchema>>;
}