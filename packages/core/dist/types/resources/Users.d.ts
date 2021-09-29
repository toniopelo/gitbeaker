import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
import { ProjectExtendedSchema } from './Projects';
import { EventOptions, EventSchema } from './Events';
export interface UserSchema extends Record<string, unknown> {
    id: number;
    name: string;
    username: string;
    state: string;
    avatar_url: string;
    web_url: string;
    created_at?: string;
}
export interface UserExtendedSchema extends UserSchema {
    bio?: string;
    location?: string;
    public_email: string;
    skype: string;
    linkedin: string;
    twitter: string;
    website_url: string;
    organization?: string;
    last_sign_in_at: string;
    confirmed_at: string;
    last_activity_on: string;
    email: string;
    theme_id: number;
    color_scheme_id: number;
    projects_limit: number;
    current_sign_in_at?: string;
    identities?: string[];
    can_create_group: boolean;
    can_create_project: boolean;
    two_factor_enabled: boolean;
    external: boolean;
    private_profile?: string;
}
export interface UserActivitySchema extends Record<string, unknown> {
    username: string;
    last_activity_on: string;
    last_activity_at: string;
}
export declare class Users<C extends boolean = false> extends BaseResource<C> {
    all(options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserSchema>[]>;
    activities(options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, UserActivitySchema>[]>;
    projects(userId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, ProjectExtendedSchema>[]>;
    block(userId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
    create(options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserSchema>>;
    current(options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, UserSchema>>;
    edit(userId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserSchema>>;
    events(userId: number, options?: BaseRequestOptions & EventOptions): Promise<import("../infrastructure").CamelizedRecord<C, EventSchema>[]>;
    search(emailOrUsername: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, UserSchema>>;
    show(userId: number, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, UserSchema>>;
    remove(userId: number, options?: Sudo): Promise<void>;
    unblock(userId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, Record<string, unknown>>>;
}
