import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { MergeRequestSchema } from './MergeRequests';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface CommitAction {
    /** The action to perform */
    action: 'create' | 'delete' | 'move' | 'update' | 'chmod';
    /** Full path to the file. Ex. lib/class.rb */
    filePath: string;
    /** Original full path to the file being moved.Ex.lib / class1.rb */
    previousPath?: string;
    /** File content, required for all except delete. Optional for move */
    content?: string;
    /** text or base64. text is default. */
    encoding?: string;
    /** Last known file commit id. Will be only considered in update, move and delete actions. */
    lastCommitId?: string;
    /** When true/false enables/disables the execute flag on the file. Only considered for chmod action. */
    execute_filemode?: boolean;
}
export interface CommitSchema extends Record<string, unknown> {
    id: string;
    short_id: string;
    created_at: Date;
    parent_ids?: string[];
    title: string;
    message: string;
    author_name: string;
    author_email: string;
    authored_date?: Date;
    committer_name?: string;
    committer_email?: string;
    committed_date?: Date;
    web_url: string;
}
export interface CommitExtendedSchema extends CommitSchema {
    last_pipeline: {
        id: number;
        ref: string;
        sha: string;
        status: string;
    };
    stats: {
        additions: number;
        deletions: number;
        total: number;
    };
    status: string;
}
export interface GPGSignatureSchema extends Record<string, unknown> {
    signature_type: 'PGP';
    verification_status: 'verified' | 'unverified';
    gpg_key_id: number;
    gpg_key_primary_keyid: string;
    gpg_key_user_name: string;
    gpg_key_user_email: string;
    gpg_key_subkey_id?: number;
    commit_source: string;
}
export interface X509SignatureSchema extends Record<string, unknown> {
    signature_type: 'X509';
    verification_status: 'verified' | 'unverified';
    x509_certificate: {
        id: number;
        subject: string;
        subject_key_identifier: string;
        email: string;
        serial_number: string;
        certificate_status: string;
        x509_issuer: {
            id: number;
            subject: string;
            subject_key_identifier: string;
            crl_url: string;
        };
    };
    commit_source: string;
}
export interface MissingSignatureSchema extends Record<string, unknown> {
    message: string;
}
export declare type CommitSignatureSchema = GPGSignatureSchema | X509SignatureSchema | MissingSignatureSchema;
export interface CommentSchema extends Record<string, unknown> {
    note: string;
    line_type: 'new' | 'old';
    path: string;
    line: number;
    author: Omit<UserSchema, 'created_at'>;
}
export interface CommitDiffSchema extends Record<string, unknown> {
    diff: string;
    new_path: string;
    old_path: string;
    a_mode?: string;
    b_mode: string;
    new_file: boolean;
    renamed_file: boolean;
    deleted_file: boolean;
}
export interface CommitStatusSchema extends Record<string, unknown> {
    status: string;
    created_at: string;
    started_at?: string;
    name: string;
    allow_failure: boolean;
    author: Omit<UserSchema, 'created_at'>;
    description?: string;
    sha: string;
    target_url: string;
    finished_at?: string;
    id: number;
    ref: string;
}
export interface CommitReferenceSchema extends Record<string, unknown> {
    type: 'branch' | 'tag' | 'all';
    name: string;
}
export declare class Commits<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, CommitSchema>[]>;
    cherryPick(projectId: string | number, sha: string, branch: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, CommitSchema>>;
    comments(projectId: string | number, sha: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, CommentSchema>[]>;
    create(projectId: string | number, branch: string, message: string, actions?: CommitAction[], options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, CommitExtendedSchema>>;
    createComment(projectId: string | number, sha: string, note: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, CommentSchema>>;
    diff(projectId: string | number, sha: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, CommitDiffSchema>[]>;
    editStatus(projectId: string | number, sha: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, CommitStatusSchema>>;
    references(projectId: string | number, sha: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, CommitReferenceSchema>[]>;
    revert(projectId: string | number, sha: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, CommitSchema>>;
    show(projectId: string | number, sha: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, CommitExtendedSchema>>;
    statuses(projectId: string | number, sha: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, CommitStatusSchema>[]>;
    mergeRequests(projectId: string | number, sha: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MergeRequestSchema>>;
    signature(projectId: string | number, sha: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, GPGSignatureSchema> | import("../infrastructure").CamelizedRecord<C, X509SignatureSchema> | import("../infrastructure").CamelizedRecord<C, MissingSignatureSchema>>;
}