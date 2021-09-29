import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
import { AwardEmojiSchema } from './ResourceAwardEmojis';
export declare class ResourceNoteAwardEmojis<C extends boolean = false> extends BaseResource<C> {
    protected resourceType: string;
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    all(projectId: string | number, resourceIId: number, noteId: number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, AwardEmojiSchema>[]>;
    award(projectId: string | number, resourceIId: number, noteId: number, name: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, AwardEmojiSchema>>;
    remove(projectId: string | number, resourceIId: number, noteId: number, awardId: number, options?: Sudo): Promise<void>;
    show(projectId: string | number, resourceIId: number, noteId: number, awardId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, AwardEmojiSchema>>;
}
