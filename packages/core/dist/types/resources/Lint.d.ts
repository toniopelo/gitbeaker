import { BaseResource } from '@gitbeaker/requester-utils';
import { Sudo } from '../infrastructure';
export interface LintSchema extends Record<string, unknown> {
    status: string;
    errors?: string[];
    warnings?: string[];
}
export declare class Lint<C extends boolean = false> extends BaseResource<C> {
    lint(content: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, LintSchema>>;
}
