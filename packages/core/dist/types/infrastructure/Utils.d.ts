import FormData from 'form-data';
export declare type CamelizeString<T extends PropertyKey> = T extends string ? string extends T ? string : T extends `${infer F}_${infer R}` ? `${F}${Capitalize<CamelizeString<R>>}` : T : T;
export declare type Camelize<T> = {
    [K in keyof T as CamelizeString<K>]: T[K];
};
export declare function appendFormFromObject(object: Record<string, unknown>): FormData;
export declare function getAPIMap(): Record<string, unknown>;
