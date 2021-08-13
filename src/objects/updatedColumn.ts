import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";

export const updatedColumn: TableColumnOptions = {
    name: "updated",
    type: "timestamp",
    isNullable: false,
    default: "CURRENT_TIMESTAMP",
};
