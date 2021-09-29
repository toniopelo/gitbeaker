import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions } from '../infrastructure';
export interface UserGPGKeySchema extends Record<string, unknown> {
    id: number;
    key: string;
    created_at: string;
}
export declare class UserGPGKeys<C extends boolean = false> extends BaseResource<C> {
    all({ userId, ...options }?: {
        userId?: number;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserGPGKeySchema>[]>;
    add(key: string, { userId, ...options }?: {
        userId?: number;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserGPGKeySchema>>;
    show(keyId: number, { userId, ...options }?: {
        userId?: number;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserGPGKeySchema>>;
    remove(keyId: number, { userId, ...options }?: {
        userId?: number;
    } & BaseRequestOptions): Promise<void>;
}
