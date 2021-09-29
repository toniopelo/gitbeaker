import { BaseResource } from '@gitbeaker/requester-utils';
export interface ProcessMetricSchema {
    hostname: string;
    pid: number;
    tag: string;
    started_at: string;
    queues?: string[];
    labels?: string[];
    concurrency: number;
    busy: number;
}
export interface SidekickProcessMetricsSchema extends Record<string, unknown> {
    processes?: ProcessMetricSchema[];
}
export interface SidekickQueueMetricsSchema extends Record<string, unknown> {
    queues: {
        default: {
            backlog: number;
            latency: number;
        };
    };
}
export interface SidekickJobStatsSchema extends Record<string, unknown> {
    jobs: {
        processed: number;
        failed: number;
        enqueued: number;
        dead: number;
    };
}
export declare type SidekickCompoundMetricsSchema = SidekickJobStatsSchema & SidekickQueueMetricsSchema & SidekickProcessMetricsSchema;
export declare class SidekiqMetrics<C extends boolean = false> extends BaseResource<C> {
    queueMetrics(): Promise<import("../infrastructure").CamelizedRecord<C, SidekickQueueMetricsSchema>>;
    processMetrics(): Promise<import("../infrastructure").CamelizedRecord<C, SidekickProcessMetricsSchema>>;
    jobStats(): Promise<import("../infrastructure").CamelizedRecord<C, SidekickJobStatsSchema>>;
    compoundMetrics(): Promise<import("../infrastructure").CamelizedRecord<C, SidekickCompoundMetricsSchema>>;
}