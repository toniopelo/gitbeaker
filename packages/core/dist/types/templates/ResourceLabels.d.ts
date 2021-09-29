import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo, ShowExpanded } from '../infrastructure';
export interface LabelSchema extends Record<string, unknown> {
    id: number;
    name: string;
    color: string;
    text_color: string;
    description: string;
    description_html: string;
    open_issues_count: number;
    closed_issues_count: number;
    open_merge_requests_count: number;
    subscribed: boolean;
    priority: number;
    is_project_label: boolean;
}
export declare class ResourceLabels<C extends boolean = false> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    all(resourceId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, LabelSchema>[]>;
    create(resourceId: string | number, labelName: string, color: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, LabelSchema>>;
    edit(resourceId: string | number, labelId: number | string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, LabelSchema>>;
    remove(resourceId: string | number, labelId: number | string, options?: Sudo & ShowExpanded): Promise<void>;
    subscribe(resourceId: string | number, labelId: number | string, options?: Sudo & ShowExpanded): Promise<import("../infrastructure").CamelizedRecord<C, LabelSchema> | import("../infrastructure").ExpandedResponse<import("../infrastructure").CamelizedRecord<C, LabelSchema>>>;
    unsubscribe(resourceId: string | number, labelId: number | string, options?: Sudo & ShowExpanded): Promise<import("../infrastructure").CamelizedRecord<C, LabelSchema> | import("../infrastructure").ExpandedResponse<import("../infrastructure").CamelizedRecord<C, LabelSchema>>>;
}
