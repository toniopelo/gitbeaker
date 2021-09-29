import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceDiscussions } from '../templates';
import { DiscussionSchema } from '../templates/types';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo, CamelizedRecord } from '../infrastructure';
export interface CommitDiscussions<C extends boolean = false> extends ResourceDiscussions<C> {
    addNote(projectId: string | number, commitId: number, discussionId: number, noteId: number, body: string, options?: BaseRequestOptions): Promise<CamelizedRecord<C, DiscussionSchema>>;
    all(projectId: string | number, commitId: number, options?: PaginatedRequestOptions): Promise<CamelizedRecord<C, DiscussionSchema>[]>;
    create(projectId: string | number, commitId: number, body: string, options?: BaseRequestOptions): Promise<CamelizedRecord<C, DiscussionSchema>>;
    editNote(projectId: string | number, commitId: number, discussionId: number, noteId: number, options: BaseRequestOptions & {
        body: string;
    }): Promise<CamelizedRecord<C, DiscussionSchema>>;
    removeNote(projectId: string | number, commitId: number, discussionId: number, noteId: number, options?: Sudo): Promise<void>;
    show(projectId: string | number, commitId: number, discussionId: number, options?: Sudo): Promise<CamelizedRecord<C, DiscussionSchema>>;
}
export declare class CommitDiscussions<C extends boolean = false> extends ResourceDiscussions<C> {
    constructor(options: BaseResourceOptions<C>);
}