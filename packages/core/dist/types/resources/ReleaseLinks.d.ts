import { BaseResource } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface ReleaseLinkSchema extends Record<string, unknown> {
    id: number;
    name: string;
    url: string;
    external: boolean;
    link_type: string;
}
export declare class ReleaseLinks<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, tagName: string, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ReleaseLinkSchema>[]>;
    create(projectId: string | number, tagName: string, name: string, url: string, options?: Sudo & {
        filePath?: string;
        linkType?: string;
    }): Promise<import("../infrastructure").CamelizedRecord<C, ReleaseLinkSchema>>;
    edit(projectId: string | number, tagName: string, linkId: number, options?: Sudo & {
        name?: string;
        url?: string;
        filePath?: string;
        linkType?: string;
    }): Promise<import("../infrastructure").CamelizedRecord<C, ReleaseLinkSchema>>;
    remove(projectId: string | number, tagName: string, linkId: number, options?: Sudo): Promise<void>;
    show(projectId: string | number, tagName: string, linkId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ReleaseLinkSchema>>;
}