import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
import { SnippetVisibility } from './Snippets';
import { UserSchema } from './Users';
export interface ProjectSnippetSchema extends Record<string, unknown> {
    id: number;
    title: string;
    file_name: string;
    description: string;
    author: Pick<UserSchema, 'id' | 'username' | 'name' | 'state' | 'created_at'>;
    updated_at: string;
    created_at: string;
    project_id: number;
    web_url: string;
    raw_url: string;
}
export declare class ProjectSnippets<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProjectSnippetSchema>[]>;
    content(projectId: string | number, snippetId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    create(projectId: string | number, title: string, fileName: string, code: string, visibility: SnippetVisibility, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProjectSnippetSchema>>;
    edit(projectId: string | number, snippetId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ProjectSnippetSchema>>;
    remove(projectId: string | number, snippetId: number, options?: Sudo): Promise<void>;
    show(projectId: string | number, snippetId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ProjectSnippetSchema>>;
    userAgentDetails(projectId: string | number, snippetId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, {
        user_agent: string;
        ip_address: string;
        akismet_submitted: boolean;
    }>>;
}
