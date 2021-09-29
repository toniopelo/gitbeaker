import { BaseResource } from '@gitbeaker/requester-utils';
import { Sudo } from '../infrastructure';
export interface MarkdownSchema extends Record<string, unknown> {
    html: string;
}
export declare class Markdown<C extends boolean = false> extends BaseResource<C> {
    render(text: string, options?: {
        gfm?: string;
        project?: string | number;
    } & Sudo): Promise<import("../infrastructure").CamelizedRecord<C, MarkdownSchema>>;
}