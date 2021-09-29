import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface ProtectedBranchAccessLevel {
    access_level: 0 | 30 | 40 | 60;
    access_level_description: string;
    user_id?: number;
    group_id?: number;
}
export interface ProtectedBranchSchema extends Record<string, unknown> {
    id: number;
    name: string;
    push_access_levels?: ProtectedBranchAccessLevel[];
    merge_access_levels?: ProtectedBranchAccessLevel[];
    allow_force_push: boolean;
    code_owner_approval_required: boolean;
}
export declare class ProtectedBranches<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: {
        search?: string;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProtectedBranchSchema>[]>;
    protect(projectId: string | number, branchName: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProtectedBranchSchema>>;
    show(projectId: string | number, branchName: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ProtectedBranchSchema>>;
    unprotect(projectId: string | number, branchName: string, options?: Sudo): Promise<void>;
}
