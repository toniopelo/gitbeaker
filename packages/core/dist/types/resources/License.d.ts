import { BaseResource } from '@gitbeaker/requester-utils';
import { Sudo } from '../infrastructure';
export interface LicenseSchema extends Record<string, unknown> {
    id: number;
    plan: string;
    created_at: string;
    starts_at: string;
    expires_at: string;
    historical_max: number;
    maximum_user_count: number;
    expired: boolean;
    overage: number;
    user_limit: number;
    active_users: number;
    licensee: {
        Name: string;
    };
    add_ons: {
        GitLab_FileLocks: number;
        GitLab_Auditor_User: number;
    };
}
export declare class License<C extends boolean = false> extends BaseResource<C> {
    add(license: string, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, LicenseSchema>>;
    all(options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, LicenseSchema>[]>;
    show(options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, LicenseSchema>>;
    remove(licenceId: number, options?: Sudo): Promise<import("../infrastructure").CamelizedRecord<C, LicenseSchema>>;
}