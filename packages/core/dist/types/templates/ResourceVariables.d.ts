import { BaseResource, BaseResourceOptions } from '@gitbeaker/requester-utils';
import { PaginatedRequestOptions } from '../infrastructure';
export interface VariableSchema extends Record<string, unknown> {
    variable_type: 'env_var' | 'file';
    value: string;
    protected: boolean;
    masked: boolean;
    environment_scope?: string;
    key: string;
}
export declare class ResourceVariables<C extends boolean> extends BaseResource<C> {
    constructor(resourceType: string, options: BaseResourceOptions<C>);
    all(resourceId: string | number, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, VariableSchema>[]>;
    create(resourceId: string | number, options?: VariableSchema): Promise<import("../infrastructure").CamelizedRecord<C, VariableSchema>>;
    edit(resourceId: string | number, keyId: string, options?: Omit<VariableSchema, 'key'>): Promise<import("../infrastructure").CamelizedRecord<C, VariableSchema>>;
    show(resourceId: string | number, keyId: string, options?: PaginatedRequestOptions): Promise<import("../infrastructure").CamelizedRecord<C, VariableSchema>>;
    remove(resourceId: string | number, keyId: string, options?: PaginatedRequestOptions): Promise<void>;
}
