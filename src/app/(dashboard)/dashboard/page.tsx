"use client"

import {ArrowUpDown, CalendarDays, MoreHorizontal} from "lucide-react";

import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import Image, {StaticImageData} from 'next/image';

import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {DataMenu, menuContentClass} from "@/components/dataConstant/contentMenu";

const dataMenu: menuContentClass[] = DataMenu
export default function Dashboard() {
    return (
        <section
            className={`mt-20 pb-20 pt-8 bg-slate-100 m-auto flex gap-8 flex-wrap flex-col md:flex-row min-w-full`}>
            <div
                className={`flex items-center bg-white flex-col h-auto shadow-xl m-auto rounded-xl p-10 w-11/12 md:w-auto`}>
                <div className={`flex flex-row`}>
                    <h1 className=" h1 mt-2 text-slate-400">
                        A
                    </h1>
                    <h4 className="h4 max-w-xl mx-10">
                        Matriks Capaian Pembelajaran,
                        Indikator Kinerja, dan
                        Perangkat Asesmen
                    </h4>
                </div>
                <div className="flex items-center content-center self-center justify-center flex-wrap gap-5 my-10 ">
                    {dataMenu.slice(0, 3).map((value, index, array) => (
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Link href={value.link}>
                                    <button
                                        className={`hover:bg-slate-800 hover:text-white transition-colors 
                                    rounded-sm flex flex-row align-center items-center shadow-md w-auto md:w-48 p-3`}>

                                        <h1 className="h3 mt-2 text-slate-400">
                                            {value.number}
                                        </h1>
                                        <h4 className="text-left text-md ml-2 ">
                                            {value.title}
                                        </h4>
                                    </button>
                                </Link>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-auto">
                                <h2 className="h2 m-10">
                                    Example Table
                                </h2>
                                <div className="flex justify-between space-x-4">
                                    <Image
                                        src={Object.values(value.image)[0] as string | StaticImport}
                                        alt="Image Table A1"
                                        width={800}
                                        height={800}
                                    />
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>

            <div
                className={`flex bg-white items-center flex-col h-auto shadow-xl m-auto rounded-xl p-10 w-10/12 md:w-auto`}>
                <div className={`flex flex-row`}>
                    <h1 className=" h1  text-slate-400">
                        B
                    </h1>
                    <h4 className="h4 mt-2 max-w-xl mx-10">
                        Daftar Nilai Mata Kuliah
                    </h4>
                </div>
                <div className="flex flex-wrap gap-5 my-10 ">
                    {dataMenu.slice(3, 4).map((value, index, array) => (
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Link href={value.link}>
                                    <button
                                        className={`hover:bg-slate-800 hover:text-white transition-colors 
                                    rounded-sm flex flex-row align-center items-center shadow-md w-auto md:w-48 p-3`}>

                                        <h1 className="h3 mt-2 text-slate-400">
                                            {value.number}
                                        </h1>
                                        <h4 className="text-left text-md ml-2 ">
                                            {value.title}
                                        </h4>
                                    </button>
                                </Link>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-auto">
                                <h2 className="h2 m-10">
                                    Example Table
                                </h2>
                                <div className="flex justify-between space-x-4">
                                    <Image
                                        src={Object.values(value.image)[0] as string | StaticImport}
                                        alt="Image Table A1"
                                        width={800}
                                        height={800}
                                    />
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>

            <div
                className={`flex items-center bg-white flex-col h-auto shadow-xl m-auto rounded-xl p-10 w-10/12 md:w-auto md:max-w-[60%]`}>
                <div className={`flex flex-row`}>
                    <h1 className=" h1 text-slate-400">
                        C
                    </h1>
                    <h4 className="h4 mt-2 max-w-xl mx-10">
                        Evaluasi Nilai Tengah Semester

                    </h4>
                </div>
                <div className="flex flex-wrap  justify-center items-center gap-5 my-10 ">
                    {dataMenu.slice(4, 10).map((value, index, array) => (
                        <div>
                            {value.number.slice(0, 6) !== "Gambar" ? (
                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <Link href={value.link}>
                                            <button
                                                className={`hover:bg-slate-800 hover:text-white transition-colors 
                                    rounded-sm flex flex-row align-center items-center shadow-md w-auto md:w-48 p-3`}>

                                                <h1 className="h3 mt-2 text-slate-400">
                                                    {value.number}
                                                </h1>
                                                <h4 className="text-left text-md ml-2 ">
                                                    {value.title}
                                                </h4>
                                            </button>
                                        </Link>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-auto">
                                        <h2 className="h2 m-10">
                                            Example Table
                                        </h2>
                                        <div className="flex justify-between space-x-4">
                                            <Image
                                                src={Object.values(value.image)[0] as string | StaticImport}
                                                alt="Image Table A1"
                                                width={800}
                                                height={800}
                                            />
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            ) : (
                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <Link href={"./table"}>
                                            <button
                                                className={`hover:bg-slate-800 bg-slate-100 hover:text-white transition-colors 
                                    rounded-sm flex flex-row align-center items-center shadow-md w-auto md:w-72 p-3`}>

                                                <h1 className="h4 mt-2 text-slate-400">
                                                    {value.number}
                                                </h1>
                                                <h4 className="text-left text-md ml-2 ">
                                                    {value.title}
                                                </h4>
                                            </button>
                                        </Link>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-auto">
                                        <h2 className="h2 m-10">
                                            Example Table
                                        </h2>
                                        <div className="flex justify-between space-x-4">
                                            <Image
                                                src={Object.values(value.image)[0] as string | StaticImport}
                                                alt="Image Table C6"
                                                width={800}
                                                height={800}
                                            />
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={`flex align-center  content-center items-center justify-center bg-white flex-col h-auto shadow-xl m-auto rounded-xl p-10 w-10/12 md:w-auto md:max-w-[60%]`}>
                <div className={`flex flex-row`}>
                    <h1 className=" h1 text-slate-400">
                        D
                    </h1>
                    <h4 className="h4 mt-2 max-w-xl mx-10">
                        Evaluasi Nilai Akhir Semester
                    </h4>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5 my-10 ">
                    {dataMenu.slice(11).map((value, index, array) => (
                        <div>
                            {value.number.slice(0, 6) !== "Gambar" ? (
                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <Link href={value.link}>
                                            <button
                                                className={`hover:bg-slate-800 hover:text-white transition-colors 
                                    rounded-sm flex flex-row align-center items-center shadow-md w-auto md:w-48 p-3`}>

                                                <h1 className="h3 mt-2 text-slate-400">
                                                    {value.number}
                                                </h1>
                                                <h4 className="text-left text-md ml-2 ">
                                                    {value.title}
                                                </h4>
                                            </button>
                                        </Link>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-auto">
                                        <h2 className="h2 m-10">
                                            Example Table
                                        </h2>
                                        <div className="flex justify-between space-x-4">
                                            <Image
                                                src={Object.values(value.image)[0] as string | StaticImport}
                                                alt="Image Table A1"
                                                width={800}
                                                height={800}
                                            />
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            ) : (
                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <Link href={"./table"}>
                                            <button
                                                className={`hover:bg-slate-800 bg-slate-100 hover:text-white transition-colors 
                                    rounded-sm flex flex-row align-center items-center shadow-md w-auto md:w-72 p-3`}>

                                                <h1 className="h4 mt-2 text-slate-400">
                                                    {value.number}
                                                </h1>
                                                <h4 className="text-left text-md ml-2 ">
                                                    {value.title}
                                                </h4>
                                            </button>
                                        </Link>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-auto">
                                        <h2 className="h2 m-10">
                                            Example Table
                                        </h2>
                                        <div className="flex justify-between space-x-4">
                                            <Image
                                                src={Object.values(value.image)[0] as string | StaticImport}
                                                alt="Image Table C6"
                                                width={800}
                                                height={800}
                                            />
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
