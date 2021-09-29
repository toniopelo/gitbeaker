import { BaseResource } from '@gitbeaker/requester-utils';
import { CommitSchema } from './Commits';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface BranchSchema extends Record<string, unknown> {
    name: string;
    merged: boolean;
    protected: boolean;
    default: boolean;
    developers_can_push: boolean;
    developers_can_merge: boolean;
    can_push: boolean;
    web_url: string;
    commit: Omit<CommitSchema, 'web_url' | 'created_at'>;
}
export declare class Branches<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, BranchSchema>[]>;
    create(projectId: string | number, branchName: string, ref: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, BranchSchema>>;
    remove(projectId: string | number, branchName: string, options?: Sudo): Promise<void>;
    show(projectId: string | number, branchName: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, BranchSchema>>;
}