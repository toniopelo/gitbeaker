/// <reference types="node" />
import { DefaultResourceOptions, DefaultRequestReturn, DefaultRequestOptions } from '@gitbeaker/requester-utils';
export declare function defaultOptionsHandler(resourceOptions: DefaultResourceOptions, { body, query, sudo, method }?: DefaultRequestOptions): DefaultRequestReturn & {
    json?: Record<string, unknown>;
    https?: {
        rejectUnauthorized: boolean;
    };
};
export declare function processBody({ rawBody, headers, }: {
    rawBody: Buffer;
    headers: Record<string, unknown>;
}): any;
export declare function handler(endpoint: string, options: Record<string, unknown>): Promise<import("got/dist/source/core").default | {
    body: any;
    headers: any;
    status: any;
}>;
export declare const requesterFn: (serviceOptions: DefaultResourceOptions) => import("@gitbeaker/requester-utils").RequesterType;