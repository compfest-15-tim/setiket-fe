"use client";

import { X } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { Button } from "./button";
import { Input } from "./input";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  inputFilter?: {
    columnId: string;
    placeholder: string;
  };
  facetedFilters?: Array<{
    columnId: string;
    title: string;
    options: Array<{
      label: string;
      value: string;
      icon?: React.ComponentType<{ className?: string }>;
    }>;
  }>;
}

export function DataTableToolbar<TData>({
  table,
  inputFilter,
  facetedFilters,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-1 flex-col items-center gap-2 sm:flex-row">
      {/* One input filter */}
      {inputFilter && (
        <Input
          placeholder={inputFilter.placeholder}
          value={
            (table
              .getColumn(inputFilter.columnId)
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn(inputFilter.columnId)
              ?.setFilterValue(event.target.value)
          }
          className="h-8 w-full sm:w-[150px] lg:w-[250px]"
        />
      )}

      {/* One or more faucet filters */}
      {facetedFilters && (
        <div className="flex w-full flex-row flex-wrap justify-center gap-2 sm:w-auto">
          {facetedFilters.map(
            (filter) =>
              table.getColumn(filter.columnId) && (
                <DataTableFacetedFilter
                  key={filter.columnId}
                  column={table.getColumn(filter.columnId)}
                  title={filter.title}
                  options={filter.options}
                />
              )
          )}
          {/* Reset Button */}
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <X className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
