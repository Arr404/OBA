import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "@/components/table/B-Daftar-Nilai/columns"
import { DataTable } from "@/components/table/B-Daftar-Nilai/data-table"
import { UserNav } from "@/components/table/B-Daftar-Nilai/user-nav"
import { nilaiSchema } from "./data/schema"
import Data from "./data/tasks.json"

// Simulate a database read for tasks.
async function getNilai() {
    const data = await fs.readFile(
        path.join(process.cwd(), "src/app/(dashboard)/(table)/A/Perangkat-Asesmen/data/tasks.json")
    )

    const nilai = JSON.parse(data.toString())

    return z.array(nilaiSchema).parse(nilai)
}

export default async function DaftarNilaiPage() {
    const nilai = await getNilai()
    return (
        <>
            <div className="mt-20 hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your Report!
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <UserNav />
                    </div>
                </div>
                <DataTable data={nilai} columns={columns} />
            </div>
        </>
    )
}
