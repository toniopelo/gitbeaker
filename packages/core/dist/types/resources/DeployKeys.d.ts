import { BaseResource } from '@gitbeaker/requester-utils';
import { Sudo, BaseRequestOptions, PaginatedRequestOptions } from '../infrastructure';
export interface DeployKeySchema extends Record<string, unknown> {
    id: number;
    title: string;
    key: string;
    can_push?: boolean;
    created_at: string;
}
export declare class DeployKeys<C extends boolean = false> extends BaseResource<C> {
    add(projectId: string | number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, DeployKeySchema>>;
    all({ projectId, ...options }?: {
        projectId?: string | number;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Omit<DeployKeySchema, "can_push">>[]>;
    edit(projectId: string | number, keyId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, DeployKeySchema>>;
    enable(projectId: string | number, keyId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Omit<DeployKeySchema, "can_push">>>;
    remove(projectId: string | number, keyId: number, options?: Sudo): Promise<void>;
    show(projectId: string | number, keyId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, DeployKeySchema>>;
}
