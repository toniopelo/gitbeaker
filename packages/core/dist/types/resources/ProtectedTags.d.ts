import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface ProtectedTagAccessLevel {
    access_level: 0 | 30 | 40 | 60;
    access_level_description: string;
}
export interface ProtectedTagSchema extends Record<string, unknown> {
    name: string;
    create_access_levels?: ProtectedTagAccessLevel[];
}
export declare class ProtectedTags<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProtectedTagSchema>[]>;
    protect(projectId: string | number, tagName: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProtectedTagSchema>>;
    show(projectId: string | number, tagName: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ProtectedTagSchema>>;
    unprotect(projectId: string | number, tagName: string, options?: Sudo): Promise<void>;
}