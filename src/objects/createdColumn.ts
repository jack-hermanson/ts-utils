import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";

export const createdColumn: TableColumnOptions = {
    name: "created",
    type: "timestamp",
    isNullable: false,
    default: "CURRENT_TIMESTAMP",
};
