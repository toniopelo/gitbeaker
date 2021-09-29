import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { Sudo } from '../infrastructure';
export declare type AccessLevel = 0 | 5 | 10 | 20 | 30 | 40 | 50;
export interface AccessRequestSchema extends Record<string, unknown> {
    id: number;
    username: string;
    name: string;
    state: string;
    created_at: string;
    requested_at: string;
}
export declare class ResourceAccessRequests<C extends boolean = false> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    all(resourceId: string | number): Promise<import("../infrastructure").CamelizedRecord<C, AccessRequestSchema>[]>;
    request(resourceId: string | number): Promise<import("../infrastructure").CamelizedRecord<C, AccessRequestSchema>>;
    approve(resourceId: string | number, userId: number, options?: {
        accessLevel?: AccessLevel;
    } & Sudo): Promise<import("../infrastructure").CamelizedRecord<C, AccessRequestSchema>>;
    deny(resourceId: string | number, userId: number): Promise<void>;
}