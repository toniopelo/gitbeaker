import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface WikiSchema extends Record<string, unknown> {
    content: string;
    format: string;
    slug: string;
    title: string;
}
export declare class Wikis<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, WikiSchema>[]>;
    create(projectId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, WikiSchema>>;
    edit(projectId: string | number, slug: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, WikiSchema>>;
    show(projectId: string | number, slug: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, WikiSchema>>;
    remove(projectId: string | number, slug: string, options?: Sudo): Promise<void>;
}