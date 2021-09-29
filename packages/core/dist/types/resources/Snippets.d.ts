import { BaseResource } from '@gitbeaker/requester-utils';
import { UserSchema } from './Users';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export declare type SnippetVisibility = 'private' | 'public' | 'internal';
export interface SnippetSchema extends Record<string, unknown> {
    id: number;
    title: string;
    file_name: string;
    description?: string;
    visibility: string;
    author: Pick<UserSchema, 'name' | 'username' | 'id' | 'state' | 'avatar_url' | 'web_url'>;
    updated_at: string;
    created_at: string;
    project_id?: string | number;
    web_url: string;
    raw_url: string;
}
export interface SnippetExtendedSchema extends SnippetSchema {
    expires_at?: string;
    ssh_url_to_repo: string;
    http_url_to_repo: string;
    files?: {
        path: string;
        raw_url: string;
    }[];
}
export interface UserAgentDetailSchema extends Record<string, unknown> {
    user_agent: string;
    ip_address: string;
    akismet_submitted: boolean;
}
export declare class Snippets<C extends boolean = false> extends BaseResource<C> {
    all({ public: p, ...options }?: {
        public?: boolean;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, SnippetSchema>[]>;
    content(snippetId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    create(title: string, fileName: string, content: string, visibility: SnippetVisibility, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, SnippetExtendedSchema>>;
    edit(snippetId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, SnippetExtendedSchema>>;
    remove(snippetId: number, options?: Sudo): Promise<void>;
    show(snippetId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, SnippetSchema>>;
    userAgentDetails(snippetId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, UserAgentDetailSchema>>;
}
