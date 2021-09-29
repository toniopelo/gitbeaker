import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions } from '../infrastructure';
export declare type NotificationSettingLevel = 'disabled' | 'participating' | 'watch' | 'global' | 'mention' | 'custom';
export interface NotificationSettingSchema extends Record<string, unknown> {
    level: NotificationSettingLevel;
    notification_email: string;
}
export declare class NotificationSettings<C extends boolean = false> extends BaseResource<C> {
    all({ projectId, groupId, ...options }?: ({
        projectId?: string | number;
    } | {
        groupId?: string | number;
    }) & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, NotificationSettingSchema>[]>;
    edit({ projectId, groupId, ...options }?: {
        level?: NotificationSettingLevel;
    } & ({
        projectId?: string | number;
    } | {
        groupId?: string | number;
    }) & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, NotificationSettingSchema>>;
}