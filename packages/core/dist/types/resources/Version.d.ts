import { BaseResource } from '@gitbeaker/requester-utils';
import { Sudo } from '../infrastructure';
export interface VersionSchema extends Record<string, unknown> {
    version: string;
    revision: string;
}
export declare class Version<C extends boolean = false> extends BaseResource<C> {
    show(options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, VersionSchema>>;
}