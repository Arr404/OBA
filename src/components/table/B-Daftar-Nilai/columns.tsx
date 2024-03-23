"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, priorities, statuses } from "@/app/(dashboard)/table/data/data"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import {TableNilai} from "@/app/(dashboard)/(table)/B-Daftar-Nilai/Daftar-Nilai/data/schema";
import {nilaiToHuruf} from "@/components/table/B-Daftar-Nilai/NilaiToHuruf";

export const columns: ColumnDef<TableNilai>[] = [
  {
    accessorKey: "no",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="NO." />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("no")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nim",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="NIM" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("nim")}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "nama",
    header: ({column}) =>(
        <DataTableColumnHeader column={column} title={"Nama"}/>
    ),
    cell: ({row}) => (
        <span className="max-w-[500px] truncate font-medium">
            {row.getValue("nama")}
        </span>
    )
  },
  {
    accessorKey: "tugas1",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tugas 1" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("tugas1")}</div>,
  },
  {
    accessorKey: "tugas2",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tugas 2" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("tugas2")}</div>,
  },
  {
    accessorKey: "tugas3",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tugas 3" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("tugas3")}</div>,
  },
  {
    accessorKey: "tugas4",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tugas 4" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("tugas4")}</div>,
  },
  {
    accessorKey: "tugas5",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tugas 5" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("tugas5")}</div>,
  },
  {
    accessorKey: "uts1",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UTS 1" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("uts1")}</div>,
  },
  {
    accessorKey: "uts2",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UTS 2" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("uts2")}</div>,
  },
  {
    accessorKey: "uts1p",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UTS 1 P" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("uts1p")}</div>,
  },
  {
    accessorKey: "uts2p",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UTS 2 P" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("uts2p")}</div>,
  },
  {
    accessorKey: "uas1",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UAS 1" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("uas1")}</div>,
  },
  {
    accessorKey: "uas2",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UAS 2" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("uas2")}</div>,
  },
  {
    accessorKey: "uas1p",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UAS 1 P" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("uas1p")}</div>,
  },
  {
    accessorKey: "uas2p",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="UAS 2 P" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("uas2p")}</div>,
  },
  {
    accessorKey: "nilaiAkhir",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nilai Akhir" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("nilaiAkhir")}</div>,
  },
  {
    id: "nilaiHuruf",
    header: "Nilai Huruf",
    cell: ({ row }) => {
      const NilaiHuruf = nilaiToHuruf(parseInt(row.getValue("nilaiAkhir"),10))
      return (
          <div className="w-[80px]">{NilaiHuruf}</div>
      )
    },
  },
  // {
  //   id: "select",
  //   header: ({table}) => (
  //       <Checkbox
  //           checked={
  //               table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Task" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // {
  //   accessorKey: "title",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Title" />
  //   ),
  //   cell: ({ row }) => {
  //     const label = labels.find((label) => label.value === row.original.label)
  //
  //     return (
  //       <div className="flex space-x-2">
  //         {label && <Badge variant="outline">{label.label}</Badge>}
  //         <span className="max-w-[500px] truncate font-medium">
  //           {row.getValue("title")}
  //         </span>
  //       </div>
  //     )
  //   },
  // },
  // {
  //   accessorKey: "status",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Status" />
  //   ),
  //   cell: ({ row }) => {
  //     const status = statuses.find(
  //       (status) => status.value === row.getValue("status")
  //     )
  //
  //     if (!status) {
  //       return null
  //     }
  //
  //     return (
  //       <div className="flex w-[100px] items-center">
  //         {status.icon && (
  //           <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{status.label}</span>
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },
  // {
  //   accessorKey: "priority",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Priority" />
  //   ),
  //   cell: ({ row }) => {
  //     const priority = priorities.find(
  //       (priority) => priority.value === row.getValue("priority")
  //     )
  //
  //     if (!priority) {
  //       return null
  //     }
  //
  //     return (
  //       <div className="flex items-center">
  //         {priority.icon && (
  //           <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{priority.label}</span>
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]
