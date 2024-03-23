import tableA1 from "@/../public/image/hover-table/tabel-A1.jpg"
import tableA2 from "@/../public/image/hover-table/tabel-A2.jpg"
import tableA3 from "@/../public/image/hover-table/tabel-A3.jpg"
import tableB4 from "@/../public/image/hover-table/tabel-B4.jpg"
import tableC5 from "@/../public/image/hover-table/tabel-C5.jpg"
import tableC6 from "@/../public/image/hover-table/tabel-C6.jpg"
import tableC7 from "@/../public/image/hover-table/tabel-C7.jpg"
import tableC8 from "@/../public/image/hover-table/tabel-C8.jpg"
import tableC9 from "@/../public/image/hover-table/tabel-C9.jpg"
import tableD10 from "@/../public/image/hover-table/tabel-D10.jpg"
import tableD11 from "@/../public/image/hover-table/tabel-D11.jpg"
import tableD12 from "@/../public/image/hover-table/tabel-D12.jpg"
import tableD13 from "@/../public/image/hover-table/tabel-D13.jpg"
import tableD14 from "@/../public/image/hover-table/tabel-D14.jpg"


import imageC1 from "@/../public/image/hover-table/image-C1.jpg"
import imageC2 from "@/../public/image/hover-table/image-C2.jpg"
import imageD3 from "@/../public/image/hover-table/image-D3.jpg"
import imageD4 from "@/../public/image/hover-table/image-D4.jpg"

export interface menuContentClass{
    number:string,
    title:string,
    link:string,
    image:any
}
const Host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";

export const DataMenu: menuContentClass[] = [
    {
        number: "1",
        title: "Capaian Pembelajaran Program Dan Indikator Kinerja Yang Didukung Mata Kuliah",
        link: Host+"/A/Capaian-Pembelajaran",
        image: tableA1,
    },
    {
        number: "2",
        title: "Perangkat Asesmen untuk Pengukuran Indikator Kinerja dalam Mata Kuliah",
        link: Host+"/A/Perangkat-Asesmen",
        image: tableA2,
    },
    {
        number: "3",
        title: "Ceklis Indikator Kinerja yang Didukung Perangkat Asesmen dalam Mata Kuliah",
        link: Host+"/A/Ceklis-Indikator-Kinerja",
        image: tableA3,
    },
    {
        number: "4",
        title: "Daftar Nilai Mata Kuliah",
        link: Host+"/B/Daftar-Nilai",
        image: tableB4,
    },
    {
        number: "5",
        title: "Pencapaian Indikator Memuaskan pada Tengah Semester",
        link: "./table",
        image: tableC5,
    },
    {
        number: "6",
        title: "Evaluasi Hasil Belajar Tengah Semester",
        link: "./table",
        image: tableC6,
    },
    {
        number: "Gambar 1",
        title: "Grafik Ketercapaian Mata Kuliah Terhadap Indikator Kinerja pada Tengah Semester",
        link: "./table",
        image: imageC1,
    },
    {
        number: "7",
        title: "Persentase Ketercapaian Mata Kuliah dalam Indikator Kinerja Tengah Semester",
        link: "./table",
        image: tableC7,
    },
    {
        number: "Gambar 2",
        title: "Grafik Ketercapaian Mata Kuliah Terhadap Indikator Kinerja pada Tengah Semester",
        link: "./table",
        image: imageC2,
    },
    {
        number: "8",
        title: "Perhitungan Pencapaian Indikator Kinerja Mahasiswa di Tengah Semester",
        link: "./table",
        image: tableC8,
    },
    {
        number: "9",
        title: "Perhitungan Pencapaian Capaian Pembelajaran Program oleh Mahasiswa di Tengah Semester",
        link: "./table",
        image: tableC9,
    },
    {
        number: "10",
        title: "Pencapaian Indikator Memuaskan pada Akhir Semester",
        link: "./table",
        image: tableD10,
    },
    {
        number: "Gambar 3",
        title: "Kategori Ketercapaian Indikator Memuaskan pada Tengah Semester",
        link: "./table",
        image: imageD3,
    },
    {
        number: "11",
        title: "Evaluasi Hasil Belajar Akhir Semester",
        link: "./table",
        image: tableD11,
    },
    {
        number: "12",
        title: "Persentase Ketercapaian Mata Kuliah dalam Indikator Kinerja Akhir Semester",
        link: "./table",
        image: tableD12,
    },
    {
        number: "Gambar 4",
        title: "Grafik Ketercapaian Mata Kuliah Terhadap Indikator Kinerja pada Akhir Semester",
        link: "./table",
        image: imageD4,
    },
    {
        number: "13",
        title: "Perhitungan Pencapaian Indikator Kinerja Mahasiswa di Akhir Semester",
        link: "./table",
        image: tableD13,
    },
    {
        number: "14",
        title: "Perhitungan Pencapaian Capaian Pembelajaran Program oleh Mahasiswa di Akhir Semester",
        link: "./table",
        image: tableD14,
    },
];
