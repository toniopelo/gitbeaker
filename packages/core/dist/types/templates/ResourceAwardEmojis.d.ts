import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { UserSchema } from '../resources/Users';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface AwardEmojiSchema extends Record<string, unknown> {
    id: number;
    name: string;
    user: UserSchema;
    created_at: string;
    updated_at: string;
    awardable_id: number;
    awardable_type: string;
}
export declare function url(projectId: number | string, resourceType: string, resourceId: number | string, awardId?: number | null, noteId?: number): string;
export declare class ResourceAwardEmojis<C extends boolean = false> extends BaseResource<C> {
    protected resourceType: string;
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    all(projectId: string | number, resourceIId: number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, AwardEmojiSchema>[]>;
    award(projectId: string | number, resourceIId: number, name: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, AwardEmojiSchema>>;
    remove(projectId: string | number, resourceIId: number, awardId: number, options?: Sudo): Promise<void>;
    show(projectId: string | number, resourceIId: number, awardId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, AwardEmojiSchema>>;
}
