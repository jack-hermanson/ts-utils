export interface AggregateResourceModel<T> {
    items: T[];
    count: number;
    total: number;
}
