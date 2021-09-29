import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions } from '../infrastructure';
export interface UserEmailSchema extends Record<string, unknown> {
    id: number;
    email: string;
    confirmed_at: string;
}
export declare class UserEmails<C extends boolean = false> extends BaseResource<C> {
    all({ userId, ...options }?: {
        userId?: number;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserEmailSchema>[]>;
    add(email: string, { userId, ...options }?: {
        userId?: number;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserEmailSchema>>;
    show(emailId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserEmailSchema>>;
    remove(emailId: number, { userId, ...options }?: {
        userId?: number;
    } & BaseRequestOptions): Promise<void>;
}
