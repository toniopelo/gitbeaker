import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo, Camelize } from '../infrastructure';
export interface BroadcastMessageSchema extends Record<string, unknown> {
    message: string;
    starts_at: string;
    ends_at: string;
    color: string;
    font: string;
    id: number;
    active: boolean;
    target_path: string;
    broadcast_type: string;
    dismissable: boolean;
}
export declare class BroadcastMessages<C extends boolean = false> extends BaseResource<C> {
    all(options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, BroadcastMessageSchema>[]>;
    create(options?: Camelize<Omit<BroadcastMessageSchema, 'id'>> & Sudo): Promise<import("../infrastructure").CamelizedRecord<C, BroadcastMessageSchema>>;
    edit(broadcastMessageId: number, options?: Camelize<Omit<BroadcastMessageSchema, 'id'>> & Sudo): Promise<import("../infrastructure").CamelizedRecord<C, BroadcastMessageSchema>>;
    remove(broadcastMessageId: number, options?: Sudo): Promise<void>;
    show(broadcastMessageId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, BroadcastMessageSchema>>;
}
