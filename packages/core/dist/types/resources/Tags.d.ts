import { BaseResource } from '@gitbeaker/requester-utils';
import { CommitSchema } from './Commits';
import { ReleaseSchema } from './Releases';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface TagSchema extends Record<string, unknown> {
    commit: CommitSchema;
    release: Pick<ReleaseSchema, 'tag_name' | 'description'>;
    name: string;
    target: string;
    message?: string;
    protected: boolean;
}
export declare class Tags<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, TagSchema>[]>;
    create(projectId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, TagSchema>>;
    remove(projectId: string | number, tagName: string, options?: Sudo): Promise<void>;
    show(projectId: string | number, tagName: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, TagSchema>>;
}
