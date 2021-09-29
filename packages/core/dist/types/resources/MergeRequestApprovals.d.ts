import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, Sudo } from '../infrastructure';
import { UserSchema } from './Users';
import { GroupSchema } from './Groups';
import { ProtectedBranchSchema } from './ProtectedBranches';
export interface ProjectLevelMergeRequestApprovalSchema extends Record<string, unknown> {
    approvals_before_merge: number;
    reset_approvals_on_push: boolean;
    disable_overriding_approvers_per_merge_request: boolean;
    merge_requests_author_approval: boolean;
    merge_requests_disable_committers_approval: boolean;
    require_password_to_approve: boolean;
}
export interface ApprovedByEntity {
    user: Pick<UserSchema, 'name' | 'username' | 'id' | 'state' | 'avatar_url' | 'web_url'>;
}
export interface MergeRequestLevelMergeRequestApprovalSchema extends Record<string, unknown> {
    id: number;
    iid: number;
    project_id: number;
    title: string;
    description: string;
    state: string;
    created_at: string;
    updated_at: string;
    merge_status: string;
    approvals_required: number;
    approvals_left: number;
    approved_by?: ApprovedByEntity[];
}
export declare type ApprovalRulesRequestOptions = {
    userIds?: number[];
    groupIds?: number[];
    protectedBranchIds?: number[];
};
export interface ApprovalRuleSchema extends Record<string, unknown> {
    id: number;
    name: string;
    rule_type: string;
    eligible_approvers?: Pick<UserSchema, 'name' | 'username' | 'id' | 'state' | 'avatar_url' | 'web_url'>[];
    approvals_required: number;
    users?: Pick<UserSchema, 'name' | 'username' | 'id' | 'state' | 'avatar_url' | 'web_url'>[];
    groups?: GroupSchema[];
    contains_hidden_groups: boolean;
    overridden: boolean;
}
export interface ProjectLevelApprovalRuleSchema extends ApprovalRuleSchema {
    protected_branches?: ProtectedBranchSchema[];
}
export interface MergeRequestLevelApprovalRuleSchema extends ApprovalRuleSchema {
    source_rule?: string;
}
export declare class MergeRequestApprovals<C extends boolean = false> extends BaseResource<C> {
    configuration(projectId: string | number, options?: BaseRequestOptions): Promise<ProjectLevelMergeRequestApprovalSchema>;
    configuration(projectId: string | number, options: {
        mergerequestIid: number;
    } & BaseRequestOptions): Promise<MergeRequestLevelMergeRequestApprovalSchema>;
    editConfiguration(projectId: string | number, options?: BaseRequestOptions): Promise<ProjectLevelMergeRequestApprovalSchema>;
    editConfiguration(projectId: string | number, options: {
        mergerequestIid: number;
    } & BaseRequestOptions): Promise<MergeRequestLevelMergeRequestApprovalSchema>;
    approvalRule(projectId: string | number, approvalRuleId: number, options: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    approvalRules(projectId: string | number, options?: BaseRequestOptions): Promise<ProjectLevelApprovalRuleSchema>;
    approvalRules(projectId: string | number, options: {
        mergerequestIid: number;
    } & BaseRequestOptions): Promise<MergeRequestLevelApprovalRuleSchema>;
    addApprovalRule(projectId: string | number, name: string, approvalsRequired: number, options?: ApprovalRulesRequestOptions & BaseRequestOptions): Promise<ProjectLevelApprovalRuleSchema>;
    addApprovalRule(projectId: string | number, name: string, approvalsRequired: number, options: {
        mergerequestIid: number;
    } & ApprovalRulesRequestOptions & BaseRequestOptions): Promise<MergeRequestLevelApprovalRuleSchema>;
    approvalState(projectId: string | number, mergerequestIid: number, options?: {
        sha?: string;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    editApprovalRule(projectId: string | number, approvalRuleId: number, name: string, approvalsRequired: number, options?: ApprovalRulesRequestOptions & BaseRequestOptions): Promise<ProjectLevelApprovalRuleSchema>;
    editApprovalRule(projectId: string | number, approvalRuleId: number, name: string, approvalsRequired: number, options: {
        mergerequestIid: number;
    } & ApprovalRulesRequestOptions & BaseRequestOptions): Promise<MergeRequestLevelApprovalRuleSchema>;
    removeApprovalRule(projectId: string | number, approvalRuleId: number, options?: Sudo): Promise<void>;
    removeApprovalRule(projectId: string | number, approvalRuleId: number, options: {
        mergerequestIid: number;
    } & Sudo): Promise<void>;
    approve(projectId: string | number, mergerequestIid: number, options?: {
        sha?: string;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestLevelMergeRequestApprovalSchema>>;
    unapprove(projectId: string | number, mergerequestIid: number, options?: Sudo): Promise<void>;
}
