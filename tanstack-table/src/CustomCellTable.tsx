import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const defaultData: User[] = [
  { id: 1, name: "Gemini", email: "gemini@example.com", role: "Admin" },
  { id: 2, name: "Alice", email: "alice@example.com", role: "User" },
  { id: 3, name: "Bob", email: "bob@example.com", role: "Editor" },
];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", { header: "ID" }),
  columnHelper.accessor("name", {
    header: "이름",
    cell: (info) => <span className="text-blue-500">{info.getValue()}</span>,
  }),
  columnHelper.accessor("email", { header: "이메일" }),
  columnHelper.accessor("role", {
    header: "역할",
    cell: (info) => {
      const role = info.getValue();
      const isAdmin = role === "Admin";
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            isAdmin ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
          }`}
        >
          {role}
        </span>
      );
    },
  }),
];

function CustomCellTable() {
  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
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
    </div>
  );
}

export { CustomCellTable };
