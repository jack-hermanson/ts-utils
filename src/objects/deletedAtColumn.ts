import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";

export const deletedAtColumn: TableColumnOptions = {
    name: "deletedAt",
    type: "timestamp",
    isNullable: true,
};
