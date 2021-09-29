/// <reference types="node" />
import { Agent } from 'https';
import { DefaultResourceOptions, DefaultRequestReturn, DefaultRequestOptions } from '@gitbeaker/requester-utils';
export declare function defaultOptionsHandler(serviceOptions: DefaultResourceOptions, options?: DefaultRequestOptions): DefaultRequestReturn & {
    agent?: Agent;
};
export declare function processBody(response: Response): Promise<any>;
export declare function handler(endpoint: string, options: Record<string, unknown>): Promise<Response | {
    body: any;
    headers: {
        [k: string]: string;
    };
    status: number;
}>;
export declare const requesterFn: (serviceOptions: DefaultResourceOptions) => import("@gitbeaker/requester-utils").RequesterType;
