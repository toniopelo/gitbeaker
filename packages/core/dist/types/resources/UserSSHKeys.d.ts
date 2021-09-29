import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions } from '../infrastructure';
export interface UserSSHKeySchema extends Record<string, unknown> {
    id: number;
    key: string;
    title: string;
    created_at: string;
}
export declare class UserSSHKeys<C extends boolean = false> extends BaseResource<C> {
    all({ userId, ...options }?: {
        userId?: number;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserSSHKeySchema>[]>;
    create(title: string, key: string, { userId, ...options }?: {
        userId?: number;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserSSHKeySchema>>;
    show(keyId: number, { userId, ...options }?: {
        userId?: number;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserSSHKeySchema>>;
    remove(keyId: number, { userId, ...options }?: {
        userId?: number;
    } & BaseRequestOptions): Promise<void>;
}