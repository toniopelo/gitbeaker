import { BaseResource } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, Sudo } from '../infrastructure';
export interface FeatureFlagStrategyScope {
    id: number;
    environment_scope: string;
}
export interface FeatureFlagStrategy {
    id: number;
    name: string;
    parameters: {
        user_ids: string;
    };
    scopes?: FeatureFlagStrategyScope[];
}
export interface FeatureFlagSchema extends Record<string, unknown> {
    name: string;
    description: string;
    active: boolean;
    version: string;
    created_at: string;
    updated_at: string;
    scopes?: string[];
    strategies?: FeatureFlagStrategy[];
}
export declare class FeatureFlags<C extends boolean = false> extends BaseResource<C> {
    all(projectId: string | number, options?: {
        scopes?: 'enabled' | 'disabled';
    } & PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, FeatureFlagSchema>[]>;
    create(projectId: string | number, flagName: string, version: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, FeatureFlagSchema>>;
    edit(projectId: string | number, flagName: string, options?: BaseRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, FeatureFlagSchema>>;
    remove(projectId: string | number, flagName: string, options?: Sudo): Promise<void>;
    show(projectId: string | number, flagName: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, FeatureFlagSchema>>;
}