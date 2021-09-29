import { RequesterType, DefaultResourceOptions } from './RequesterUtils';
export interface NativeAuth {
    gitlabSessionCookieKey?: string;
    gitlabSessionCookieValue: string;
    gitlabCSRFTokenKey?: string;
    gitlabCSRFTokenValue: string;
}
export interface BaseResourceOptions<C> {
    oauthToken?: string;
    token?: string;
    jobToken?: string;
    nativeAuth?: NativeAuth;
    host?: string;
    prefixUrl?: string;
    version?: 3 | 4;
    rejectUnauthorized?: boolean;
    camelize?: C;
    requesterFn?: (resourceOptions: DefaultResourceOptions) => RequesterType;
    requestTimeout?: number;
    profileToken?: string;
    sudo?: string | number;
    profileMode?: 'execution' | 'memory';
}
export declare class BaseResource<C extends boolean = false> {
    readonly url: string;
    readonly requester: RequesterType;
    readonly requestTimeout: number;
    readonly headers: {
        [header: string]: string;
    };
    readonly camelize: C | undefined;
    readonly rejectUnauthorized: boolean;
    readonly additionalBody: FormData | Record<string, unknown>;
    constructor({ token, jobToken, oauthToken, nativeAuth, sudo, profileToken, requesterFn, camelize, profileMode, host, prefixUrl, version, rejectUnauthorized, requestTimeout, }?: BaseResourceOptions<C>);
}
