import { BaseResource } from '@gitbeaker/requester-utils';
import { CommitSchema } from './Commits';
import { BaseRequestOptions, Sudo } from '../infrastructure';
export interface RepositoryFileExtendedSchema extends Record<string, unknown> {
    file_name: string;
    file_path: string;
    size: number;
    encoding: string;
    content: string;
    content_sha256: string;
    ref: string;
    blob_id: string;
    commit_id: string;
    last_commit_id: string;
}
export interface RepositoryFileBlameSchema extends Record<string, unknown> {
    commit: CommitSchema;
    lines?: string[];
}
export interface RepositoryFileSchema extends Record<string, unknown> {
    file_path: string;
    branch: string;
}
export declare class RepositoryFiles<C extends boolean = false> extends BaseResource<C> {
    create(projectId: string | number, filePath: string, branch: string, content: string, commitMessage: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, RepositoryFileSchema>>;
    edit(projectId: string | number, filePath: string, branch: string, content: string, commitMessage: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, RepositoryFileSchema>>;
    remove(projectId: string | number, filePath: string, branch: string, commitMessage: string, options?: BaseRequestOptions): Promise<void>;
    show(projectId: string | number, filePath: string, ref: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, RepositoryFileExtendedSchema>>;
    showBlame(projectId: string | number, filePath: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, RepositoryFileBlameSchema>[]>;
    showRaw(projectId: string | number, filePath: string, options?: BaseRequestOptions): Promise<Blob>;
}