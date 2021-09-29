import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, Camelize } from '../infrastructure';
export interface FreezePeriodSchema extends Record<string, unknown> {
    id: number;
    freeze_start: string;
    freeze_end: string;
    cron_timezone: string;
    created_at: string;
    updated_at: string;
}
export declare class FreezePeriods<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, FreezePeriodSchema>[]>;
    show(projectId: string | number, freezePeriodId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, FreezePeriodSchema>>;
    create(projectId: number | string, freezeStart: string, freezeEnd: string, options?: Camelize<Pick<FreezePeriodSchema, 'cron_timezone'>> & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, FreezePeriodSchema>>;
    edit(projectId: number | string, freezePeriodId: number, options?: Camelize<Omit<FreezePeriodSchema, 'id' | 'created_at' | 'updated_at'>> & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, FreezePeriodSchema>>;
    delete(projectId: number | string, freezePeriodId: number, options?: BaseRequestOptions): Promise<void>;
}
