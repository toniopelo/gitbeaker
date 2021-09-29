import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
import { AccessLevel } from './ResourceAccessRequests';
export interface IncludeInherited {
    includeInherited?: boolean;
}
export interface MemberSchema extends Record<string, unknown> {
    id: number;
    username: string;
    name: string;
    state: string;
    avatar_url: string;
    web_url: string;
    expires_at: string;
    access_level: AccessLevel;
    email: string;
    group_saml_identity: {
        extern_uid: string;
        provider: string;
        saml_provider_id: number;
    };
}
export declare class ResourceMembers<C extends boolean = false> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    add(resourceId: string | number, userId: number, accessLevel: AccessLevel, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MemberSchema>>;
    all(resourceId: string | number, { includeInherited, ...options }?: IncludeInherited & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MemberSchema>[]>;
    edit(resourceId: string | number, userId: number, accessLevel: AccessLevel, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, MemberSchema>>;
    show(resourceId: string | number, userId: number, { includeInherited, ...options }?: IncludeInherited & Sudo): Promise<import("../infrastructure").CamelizedRecord<C, MemberSchema>>;
    remove(resourceId: string | number, userId: number, options?: Sudo): Promise<void>;
}
