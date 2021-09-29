import { BaseResourceOptions } from '@gitbeaker/requester-utils';
import { ResourceTemplates } from '../templates';
export declare class DockerfileTemplates<C extends boolean = false> extends ResourceTemplates<C> {
    constructor(options: BaseResourceOptions<C>);
}