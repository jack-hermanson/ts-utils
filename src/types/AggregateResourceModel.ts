import { AggregateRequest } from "./AggregateRequest";

export interface AggregateResourceModel<T> extends AggregateRequest {
    items: T[];
    count: number;
    total: number;
}
