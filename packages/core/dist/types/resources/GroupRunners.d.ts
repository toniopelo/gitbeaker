import { BaseResource } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, ShowExpanded } from '../infrastructure';
import { RunnerSchema } from './Runners';
export declare class GroupRunners<C extends boolean = false> extends BaseResource<C> {
    all(groupId: string | number, options?: PaginatedRequestOptions & ShowExpanded): Promise<import("../infrastructure").CamelizedRecord<C, RunnerSchema>[] | import("../infrastructure").CamelizedRecord<C, RunnerSchema>[] | import("../infrastructure").PaginationResponse<import("../infrastructure").CamelizedRecord<C, RunnerSchema>[]>>;
}
