import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export declare type DeployTokenScope = 'read_repository' | 'read_registry' | 'write_registry' | 'read_package_registry' | 'write_package_registry';
export interface DeployTokenSchema extends Record<string, unknown> {
    id: number;
    name: string;
    username: string;
    expires_at: string;
    scopes?: string[];
}
export declare class ResourceDeployTokens<C extends boolean = false> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    add(resourceId: string | number, tokenName: string, tokenScopes: DeployTokenScope[], options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, DeployTokenSchema>>;
    all({ resourceId, projectId, groupId, ...options }?: {
        resourceId?: string | number;
        projectId?: string | number;
        groupId?: string | number;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, DeployTokenSchema>[]>;
    remove(resourceId: string | number, tokenId: number, options?: Sudo): Promise<void>;
}