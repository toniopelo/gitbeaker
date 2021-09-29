import { BaseResource } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface RegistryRepositoryTagSchema extends Record<string, unknown> {
    name: string;
    path: string;
    location: string;
    revision: string;
    short_revision: string;
    digest: string;
    created_at: string;
    total_size: number;
}
export interface RegistryRepositorySchema extends Record<string, unknown> {
    id: number;
    name: string;
    path: string;
    project_id: number;
    location: string;
    created_at: string;
    cleanup_policy_started_at: string;
    tags_count?: number;
    tags?: Pick<RegistryRepositoryTagSchema, 'name' | 'path' | 'location'>[];
}
export declare class ContainerRegistry<C extends boolean = false> extends BaseResource<C> {
    projectRepositories(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Omit<RegistryRepositorySchema, "tags" | "tags_count">>[]>;
    groupRepositories(projectId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Omit<RegistryRepositorySchema, "tags" | "tags_count">>[]>;
    showRepository(projectId: string | number, repositoryId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, RegistryRepositorySchema>>;
    tags(projectId: string | number, repositoryId: number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, Pick<RegistryRepositoryTagSchema, "name" | "path" | "location">>[]>;
    removeRepository(projectId: string | number, repositoryId: number, options?: Sudo): Promise<void>;
    removeTag(projectId: string | number, repositoryId: number, tagName: string, options?: Sudo): Promise<void>;
    removeTags(projectId: string | number, repositoryId: number, nameRegexDelete: string, options?: Sudo & {
        nameRegexKeep: string;
        keepN: string;
        olderThan: string;
    }): Promise<void>;
    showTag(projectId: string | number, repositoryId: number, tagName: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, RegistryRepositoryTagSchema>>;
}