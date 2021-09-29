import { BaseResource } from '@gitbeaker/requester-utils';
import { CommitSchema, CommitDiffSchema } from './Commits';
import { Sudo, BaseRequestOptions } from '../infrastructure';
declare type ArchiveType = 'tar.gz' | 'tar.bz2' | 'tbz' | 'tbz2' | 'tb2' | 'bz2' | 'tar' | 'zip';
export interface RepositoryCompareSchema extends Record<string, unknown> {
    commit: Pick<CommitSchema, 'id' | 'short_id' | 'title' | 'author_name' | 'author_email' | 'created_at'>;
    commits?: Pick<CommitSchema, 'id' | 'short_id' | 'title' | 'author_name' | 'author_email' | 'created_at'>[];
    diffs?: CommitDiffSchema[];
    compare_timeout: boolean;
    compare_same_ref: boolean;
}
export interface RepositoryContributorSchema extends Record<string, unknown> {
    name: string;
    email: string;
    commits: number;
    additions: number;
    deletions: number;
}
export interface RepositoryTreeSchema extends Record<string, unknown> {
    id: string;
    name: string;
    type: string;
    path: string;
    mode: string;
}
export declare class Repositories<C extends boolean = false> extends BaseResource<C> {
    compare(projectId: string | number, from: string, to: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, RepositoryCompareSchema>>;
    contributors(projectId: string | number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, RepositoryContributorSchema>[]>;
    mergeBase(projectId: string | number, refs: string[], options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, CommitSchema>>;
    showArchive(projectId: string | number, { fileType, ...options }?: {
        fileType?: ArchiveType;
    } & Sudo): Promise<string>;
    showBlob(projectId: string | number, sha: string, options?: Sudo): Promise<Blob>;
    showBlobRaw(projectId: string | number, sha: string, options?: Sudo): Promise<Blob>;
    tree(projectId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, RepositoryTreeSchema>[]>;
}
export {};
