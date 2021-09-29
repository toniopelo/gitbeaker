import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface CustomAttributeSchema extends Record<string, unknown> {
    key: string;
    value: string;
}
export declare class ResourceCustomAttributes<C extends boolean = false> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    all(resourceId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, CustomAttributeSchema>[]>;
    set(resourceId: string | number, customAttributeId: number, value: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, CustomAttributeSchema>>;
    remove(resourceId: string | number, customAttributeId: number, options?: Sudo): Promise<void>;
    show(resourceId: string | number, customAttributeId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, CustomAttributeSchema>>;
}
