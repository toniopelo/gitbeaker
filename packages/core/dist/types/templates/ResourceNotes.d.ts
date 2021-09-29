import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { UserSchema } from '../resources/Users';
import { PaginatedRequestOptions, BaseRequestOptions, Sudo } from '../infrastructure';
export interface NoteSchema extends Record<string, unknown> {
    id: number;
    body: string;
    author: UserSchema;
    created_at: string;
    updated_at: string;
    confidential: boolean;
}
export declare class ResourceNotes<C extends boolean = false> extends BaseResource<C> {
    protected resource2Type: string;
    constructor(resourceType: string, resource2Type: string, options: BaseResourceOptions<C>);
    all(resourceId: string | number, resource2Id: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, NoteSchema>[]>;
    create(resourceId: string | number, resource2Id: string | number, body: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, NoteSchema>>;
    edit(resourceId: string | number, resource2Id: string | number, noteId: number, body: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, NoteSchema>>;
    remove(resourceId: string | number, resource2Id: string | number, noteId: number, options?: Sudo): Promise<void>;
    show(resourceId: string | number, resource2Id: string | number, noteId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, NoteSchema>>;
}
