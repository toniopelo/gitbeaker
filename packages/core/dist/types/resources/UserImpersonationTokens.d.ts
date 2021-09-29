import { BaseResource } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
export declare type ImpersonationTokenScope = 'api' | 'read_user';
export declare type ImpersonationTokenState = 'all' | 'active' | 'inactive';
export interface UserImpersonationTokenSchema extends Record<string, unknown> {
    active: boolean;
    user_id: number;
    scopes?: string[];
    revoked: boolean;
    name: string;
    id: number;
    created_at: string;
    impersonation: boolean;
    expires_at: string;
}
export declare class UserImpersonationTokens<C extends boolean = false> extends BaseResource<C> {
    all(userId: number, options?: {
        state?: ImpersonationTokenState;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserImpersonationTokenSchema>[]>;
    add(userId: number, name: string, scopes: ImpersonationTokenScope, expiresAt: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, UserImpersonationTokenSchema>>;
    show(userId: number, tokenId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, UserImpersonationTokenSchema>>;
    revoke(userId: number, tokenId: number, options?: Sudo): Promise<void>;
}
