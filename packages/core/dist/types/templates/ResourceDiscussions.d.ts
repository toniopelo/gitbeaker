import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { UserSchema } from '../resources/Users';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface DiscussionNotePosition {
    base_sha: string;
    start_sha: string;
    head_sha: string;
    old_path: string;
    new_path: string;
    position_type: string;
    old_line: number;
    new_line: number;
}
export interface DiscussionNote {
    id: number;
    type?: string;
    body: string;
    attachment?: string;
    author: Omit<UserSchema, 'created_at'>;
    created_at: string;
    updated_at: string;
    system: boolean;
    noteable_id: number;
    noteable_type: string;
    noteable_iid?: number;
    resolvable: boolean;
    position?: DiscussionNotePosition;
}
export interface DiscussionSchema extends Record<string, unknown> {
    id: string;
    individual_note: boolean;
    notes?: DiscussionNote[];
}
export declare class ResourceDiscussions<C extends boolean = false> extends BaseResource<C> {
    protected resource2Type: string;
    constructor(resourceType: string, resource2Type: string, options: BaseResourceOptions<C>);
    addNote(resourceId: string | number, resource2Id: string | number, discussionId: string | number, noteId: number, body: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    all(resourceId: string | number, resource2Id: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, DiscussionSchema>[]>;
    create(resourceId: string | number, resource2Id: string | number, body: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, DiscussionSchema>>;
    editNote(resourceId: string | number, resource2Id: string | number, discussionId: string | number, noteId: number, { body, ...options }?: BaseRequestOptions & {
        body?: string;
    }): Promise<import("../infrastructure").CamelizedRecord<C, DiscussionSchema>>;
    removeNote(resourceId: string | number, resource2Id: string | number, discussionId: string | number, noteId: number, options?: Sudo): Promise<void>;
    show(resourceId: string | number, resource2Id: string | number, discussionId: string | number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, DiscussionSchema>>;
}