import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const data: User[] = [
  { id: 1, name: "Gemini", email: "gemini@example.com", role: "Admin" },
  { id: 2, name: "Alice", email: "alice@example.com", role: "User" },
  { id: 3, name: "Bob", email: "bob@example.com", role: "Editor" },
];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", { header: "ID" }),
  columnHelper.accessor("name", { header: "이름" }),
  columnHelper.accessor("email", { header: "이메일" }),
  columnHelper.accessor("role", { header: "역할" }),
];

function FilterTable() {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full max-w-sm"
          placeholder="전체 검색..."
        />
      </div>
      <table className="border-collapse border border-gray-400 w-full">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 p-2 text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.getRowModel().rows.length === 0 && (
        <div className="py-4 text-center text-gray-500">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}

export { FilterTable };
