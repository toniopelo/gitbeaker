import { BaseResource } from '@gitbeaker/requester-utils';
import { PipelineSchema } from './Pipelines';
import { PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface PackageSchema extends Record<string, unknown> {
    id: number;
    name: string;
    version: string;
    package_type: string;
    created_at: string;
}
export interface PackageFileSchema extends Record<string, unknown> {
    id: number;
    package_id: number;
    created_at: string;
    file_name: string;
    size: number;
    file_md5: string;
    file_sha1: string;
    pipelines?: PipelineSchema[];
}
export declare class Packages<C extends boolean = false> extends BaseResource<C> {
    all({ projectId, groupId, ...options }?: {
        projectId?: string | number;
        groupId?: string | number;
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, PackageSchema>[]>;
    remove(projectId: string | number, packageId: number, options?: Sudo): Promise<void>;
    removeFile(projectId: string | number, packageId: number, projectFileId: number, options?: Sudo): Promise<void>;
    show(projectId: string | number, packageId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PackageSchema>>;
    showFiles(projectId: string | number, packageId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, PackageFileSchema>[]>;
}