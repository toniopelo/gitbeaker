import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface PagesDomainSchema extends Record<string, unknown> {
    domain: string;
    url: string;
    project_id: number;
    auto_ssl_enabled: boolean;
    certificate: {
        expired: boolean;
        expiration: string;
    };
}
export declare class PagesDomains<C extends boolean = false> extends BaseResource<C> {
    all({ projectId, ...options }?: {
        projectId?: string | number;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PagesDomainSchema>[]>;
    create(projectId: string | number, domain: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PagesDomainSchema>>;
    edit(projectId: string | number, domain: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PagesDomainSchema>>;
    show(projectId: string | number, domain: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PagesDomainSchema>>;
    remove(projectId: string | number, domain: string, options?: Sudo): Promise<void>;
}