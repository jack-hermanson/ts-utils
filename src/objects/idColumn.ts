import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";

export const idColumn: TableColumnOptions = {
    name: "id",
    type: "integer",
    isPrimary: true,
    isGenerated: true,
    generationStrategy: "increment",
};
