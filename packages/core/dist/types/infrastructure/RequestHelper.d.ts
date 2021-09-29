/// <reference types="node" />
import { BaseResource } from '@gitbeaker/requester-utils';
import { Camelize } from './Utils';
export declare type IsForm = {
    isForm?: boolean;
};
export declare type Sudo = {
    sudo?: string | number;
};
export declare type ShowExpanded<T extends boolean = boolean> = {
    showExpanded?: T;
};
export declare type BaseRequestOptions = Sudo & Record<string, unknown>;
export declare type BasePaginationRequestOptions<P extends 'keyset' | 'offset' = 'keyset' | 'offset'> = BaseRequestOptions & {
    pagination?: P;
    perPage?: number;
};
export declare type OffsetPaginationRequestOptions = {
    page?: number;
    maxPages?: number;
};
export declare type PaginatedRequestOptions<P extends 'keyset' | 'offset' = 'keyset' | 'offset'> = P extends 'keyset' ? BasePaginationRequestOptions<P> : BasePaginationRequestOptions<P> & OffsetPaginationRequestOptions;
export interface ExpandedResponse<T = Record<string, unknown>> {
    data: T;
    headers: Record<string, unknown>;
    status: number;
}
export interface PaginationResponse<T = Record<string, unknown>[]> {
    data: T;
    paginationInfo: {
        total: number;
        next: number | null;
        current: number;
        previous: number | null;
        perPage: number;
        totalPages: number;
    };
}
export declare type CamelizedRecord<C, T> = C extends true ? Camelize<T> : T;
export declare type ExtendedRecordReturn<C extends boolean, E extends boolean, T extends Record<string, unknown> | void> = T extends void ? void : E extends false ? CamelizedRecord<C, T> : ExpandedResponse<CamelizedRecord<C, T>>;
export declare type ExtendedArrayReturn<C extends boolean, E extends boolean, T, P extends 'keyset' | 'offset'> = E extends false ? CamelizedRecord<C, T>[] : P extends 'keyset' ? CamelizedRecord<C, T>[] : PaginationResponse<CamelizedRecord<C, T>[]>;
export declare type ExtendedReturn<C extends boolean, E extends boolean, P extends 'keyset' | 'offset', T extends Record<string, unknown> | Record<string, unknown>[]> = T extends Record<string, unknown> ? ExtendedRecordReturn<C, E, T> : T extends (infer R)[] ? ExtendedArrayReturn<C, E, R, P> : never;
export declare function get<T extends Record<string, unknown> | Record<string, unknown>[] = Record<string, unknown>>(): <C extends boolean, P extends "keyset" | "offset" = "offset", E extends boolean = false>(service: BaseResource<C>, endpoint: string, options?: (PaginatedRequestOptions<P> & ShowExpanded<E> & Record<string, any>) | undefined) => Promise<ExtendedReturn<C, E, P, T>>;
export declare function post<T extends Record<string, unknown> | void = Record<string, unknown>>(): <C extends boolean, E extends boolean = false>(service: BaseResource<C>, endpoint: string, { query, isForm, sudo, showExpanded, ...options }?: IsForm & Sudo & Record<string, unknown> & ShowExpanded<E>) => Promise<ExtendedRecordReturn<C, E, T>>;
export declare function put<T extends Record<string, unknown> = Record<string, unknown>>(): <C extends boolean, E extends boolean = false>(service: BaseResource<C>, endpoint: string, { query, isForm, sudo, showExpanded, ...options }?: IsForm & Sudo & Record<string, unknown> & ShowExpanded<E>) => Promise<ExtendedRecordReturn<C, E, T>>;
export declare function del<T extends Record<string, unknown> | void = void>(): <C extends boolean, E extends boolean = false>(service: BaseResource<C>, endpoint: string, { sudo, showExpanded, ...query }?: Sudo & Record<string, unknown> & ShowExpanded<E>) => Promise<ExtendedRecordReturn<C, E, T>>;
declare function stream<C extends boolean>(service: BaseResource<C>, endpoint: string, options?: BaseRequestOptions): NodeJS.ReadableStream;
export declare const RequestHelper: {
    post: typeof post;
    put: typeof put;
    get: typeof get;
    del: typeof del;
    stream: typeof stream;
};
export {};
