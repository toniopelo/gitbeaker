import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions } from '../infrastructure';
export interface StatisticsSchema extends Record<string, unknown> {
    statistics: {
        counts: {
            all: number;
            closed: number;
            opened: number;
        };
    };
}
export declare class IssuesStatistics<C extends boolean = false> extends BaseResource<C> {
    all({ projectId, groupId, ...options }?: {
        projectId?: string | number;
        groupId?: string | number;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, StatisticsSchema>>;
}