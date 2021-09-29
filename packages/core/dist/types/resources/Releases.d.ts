import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { CommitSchema } from './Commits';
import { MilestoneSchema } from '../templates/types';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface ReleaseEvidence {
    sha: string;
    filepath: string;
    collected_at: string;
}
export interface ReleaseAssetSource {
    format: string;
    url: string;
}
export interface ReleaseAssetLink {
    id: number;
    name: string;
    url: string;
    external: boolean;
    link_type: string;
}
export interface ReleaseSchema extends Record<string, unknown> {
    tag_name: string;
    description: string;
    name: string;
    description_html: string;
    created_at: string;
    released_at: string;
    user: Pick<UserSchema, 'name' | 'username' | 'id' | 'state' | 'avatar_url' | 'web_url'>;
    commit: CommitSchema;
    milestones?: MilestoneSchema[];
    commit_path: string;
    tag_path: string;
    assets: {
        count: number;
        sources?: ReleaseAssetSource[];
        links?: ReleaseAssetLink[];
        evidence_file_path: string;
    };
    evidences?: ReleaseEvidence[];
}
export declare class Releases<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ReleaseSchema>[]>;
    create(projectId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ReleaseSchema>>;
    edit(projectId: string | number, tagName: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ReleaseSchema>>;
    remove(projectId: string | number, tagName: string, options?: Sudo): Promise<void>;
    show(projectId: string | number, tagName: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ReleaseSchema>>;
}
