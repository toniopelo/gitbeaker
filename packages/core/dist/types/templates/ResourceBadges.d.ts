import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface BadgeSchema extends Record<string, unknown> {
    name: string;
    id: number;
    link_url: string;
    image_url: string;
    rendered_link_url: string;
    rendered_image_url: string;
    kind: 'project' | 'group';
}
export declare class ResourceBadges<C extends boolean = false> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    add(resourceId: string | number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, BadgeSchema>>;
    all(resourceId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, BadgeSchema>[]>;
    edit(resourceId: string | number, badgeId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, BadgeSchema>>;
    preview(resourceId: string | number, linkUrl: string, imageUrl: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Omit<BadgeSchema, "id" | "name" | "kind">>>;
    remove(resourceId: string | number, badgeId: number, options?: Sudo): Promise<void>;
    show(resourceId: string | number, badgeId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, BadgeSchema>>;
}
