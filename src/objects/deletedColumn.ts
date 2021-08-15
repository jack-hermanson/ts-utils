import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";

export const deletedColumn: TableColumnOptions = {
    name: "deleted",
    type: "timestamp",
    isNullable: true,
};
