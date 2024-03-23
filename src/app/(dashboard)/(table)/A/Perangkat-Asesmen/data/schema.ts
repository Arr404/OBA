import { z } from "zod"

export const nilaiSchema = z.object({
  no: z.string(),
  nim: z.string(),
  nama: z.string(),
  tugas1: z.string(),
  tugas2: z.string(),
  tugas3: z.string(),
  tugas4: z.string(),
  tugas5: z.string(),
  uts1: z.string(),
  uts2: z.string(),
  uts1p: z.string(),
  uts2p: z.string(),
  uas1: z.string(),
  uas2: z.string(),
  uas1p: z.string(),
  uas2p: z.string(),
  nilaiAkhir: z.string(),
})

export type TableNilai = z.infer<typeof nilaiSchema>
