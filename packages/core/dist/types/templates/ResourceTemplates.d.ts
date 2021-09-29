import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface TemplateSchema extends Record<string, unknown> {
    name: string;
    content: string;
}
export declare class ResourceTemplates<C extends boolean = false> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    all(options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, TemplateSchema>[]>;
    show(key: string | number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TemplateSchema>>;
}