/// <reference types="node" />
import FormData from 'form-data';
export interface Constructable<T = any> {
    new (...args: any[]): T;
}
export interface RequesterType {
    get(endpoint: string, options?: Record<string, unknown>): Promise<any>;
    post(endpoint: string, options?: Record<string, unknown>): Promise<any>;
    put(endpoint: string, options?: Record<string, unknown>): Promise<any>;
    delete(endpoint: string, options?: Record<string, unknown>): Promise<any>;
    stream?(endpoint: string, options?: Record<string, unknown>): NodeJS.ReadableStream;
}
export declare type DefaultResourceOptions = {
    headers: {
        [header: string]: string;
    };
    requestTimeout: number;
    url: string;
    rejectUnauthorized: boolean;
    additionalBody?: FormData | Record<string, unknown>;
};
export declare type DefaultRequestOptions = {
    body?: FormData | Record<string, unknown>;
    query?: Record<string, unknown>;
    sudo?: string;
    method?: string;
};
export declare type DefaultRequestReturn = {
    headers: Record<string, string> | Headers;
    timeout?: number;
    method: string;
    searchParams?: string;
    prefixUrl?: string;
    body?: string | FormData;
};
export declare function formatQuery(params?: Record<string, unknown>): string;
export declare type OptionsHandlerFn = (serviceOptions: DefaultResourceOptions, requestOptions: DefaultRequestOptions) => DefaultRequestReturn;
export declare function defaultOptionsHandler(resourceOptions: DefaultResourceOptions, { body, query, sudo, method }?: DefaultRequestOptions): DefaultRequestReturn;
export declare type RequestHandlerFn = (endpoint: string, options?: Record<string, unknown>) => any | Promise<{
    body: Record<string, unknown> | Record<string, unknown>[];
    headers: Record<string, unknown> | Headers;
    status: number;
}>;
export declare function createRequesterFn(optionsHandler: OptionsHandlerFn, requestHandler: RequestHandlerFn): (serviceOptions: DefaultResourceOptions) => RequesterType;
export declare function presetResourceArguments<T>(resources: T, customConfig?: Record<string, unknown>): T;
