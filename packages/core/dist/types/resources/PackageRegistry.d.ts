import { BaseResource } from '@gitbeaker/requester-utils';
import { Sudo } from '../infrastructure';
export declare class PackageRegistry<C extends boolean = false> extends BaseResource<C> {
    publish(projectId: string | number, packageName: string, packageVersion: string, filename: string, content: string, { contentType, ...options }?: {
        contentType?: string;
    } & {
        status?: 'default' | 'hidden';
    }): Promise<import("../infrastructure").CamelizedRecord<C, {
        message: string;
    }>>;
    download(projectId: string | number, packageName: string, packageVersion: string, filename: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, {
        message: string;
    }>>;
}