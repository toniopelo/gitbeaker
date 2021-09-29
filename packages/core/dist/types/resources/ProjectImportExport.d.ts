import { BaseResource } from '@gitbeaker/requester-utils';
import { Sudo, BaseRequestOptions } from '../infrastructure';
export interface ExportStatusSchema extends Record<string, unknown> {
    id: number;
    description: string;
    name: string;
    name_with_namespace: string;
    path: string;
    path_with_namespace: string;
    created_at: string;
    export_status: string;
    _links: {
        api_url: string;
        web_url: string;
    };
}
export interface FailedRelationSchema {
    id: number;
    created_at: string;
    exception_class: string;
    exception_message: string;
    source: string;
    relation_name: string;
}
export interface ImportStatusSchema extends Record<string, unknown> {
    id: number;
    description: string;
    name: string;
    name_with_namespace: string;
    path: string;
    path_with_namespace: string;
    created_at: string;
    import_status: string;
    correlation_id: string;
    failed_relations?: FailedRelationSchema[];
}
export interface UploadMetadata {
    filename?: string;
    contentType?: string;
}
export declare const defaultMetadata: {
    filename: string;
};
export declare class ProjectImportExport<C extends boolean = false> extends BaseResource<C> {
    download(projectId: string | number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    exportStatus(projectId: string | number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ExportStatusSchema>>;
    import(content: string, path: string, { metadata, ...options }?: {
        metadata?: UploadMetadata;
    } & BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, ImportStatusSchema>>;
    importStatus(projectId: string | number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ImportStatusSchema>>;
    schedule(projectId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, {
        message: string;
    }>>;
}
