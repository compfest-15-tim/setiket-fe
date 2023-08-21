import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cities } from "./mockData";
import { activities } from "./mockActivity";

const HomePage = () => {
  return (
    <main className="flex flex-auto justify-center bg-muted lg:p-10">
      <div className="w-full">
        <div className="relative h-1/5 w-full">
          <Image
            src="/images/home-background.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl">
                <span className="font-normal">Halo kamu</span>
                <span className="font-bold">, mau ngapain hari ini?</span>
              </h1>
            </div>
            <div className="mt-4">
              <Input type="search" placeholder="Search Event..." />
            </div>
          </div>
        </div>
        <div className="m-4">
          <h1 className="text-xl font-semibold">
            Ide kegiatan yang wajib diikutin!
          </h1>
          <p className="text-sm text-slate-500">
            Mau healing sendirian atau bareng teman-teman? Cek event yang
            tersedia!
          </p>
          {/* TODO : Menambahkan Card Corousel  */}
          <div className="relative flex items-center">
            <div
              id="slider-cities"
              className="scroll overflow-x-scroll scroll-smooth whitespace-nowrap "
            >
              {cities.map((item) => (
                <div
                  key={item.name}
                  className="relative inline-block cursor-pointer p-2 duration-300 ease-in-out hover:scale-105"
                >
                  <img
                    className="block w-[220px]"
                    src={item.img}
                    alt={item.name}
                    draggable="false"
                  />
                  <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 transform bg-black bg-opacity-50 p-2 text-white">
                    <p className="text-center text-xl font-bold">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Lihat Semua</Button>
          </div>

          <div className="m-4">
            <h1 className="text-xl font-semibold">
              Rekomendasi atraksi di luar negeri
            </h1>
            <p className="text-sm text-slate-500">
              Yuk, temukan aktivitas keren di berbagai negara! Ada banyak diskon
              menanti.
            </p>
            <div className="relative flex items-center">
              <div
                id="slider"
                className="scroll flex flex-nowrap overflow-x-scroll scroll-smooth whitespace-nowrap"
              >
                {activities.map((item) => (
                  <div
                    key={item.name}
                    className="inline-block h-[40vh] w-[calc(30vw)] p-2 duration-300 ease-in-out hover:scale-105"
                  >
                    <div className="relative h-full overflow-hidden rounded-lg bg-gray-200">
                      <div className="h-[40%]">
                        <img
                          className="block h-full w-full object-cover"
                          src={item.img}
                          alt={item.name}
                          draggable="false"
                        />
                      </div>
                      <div className="p-3">
                        <h2 className="mb-1 text-xl font-semibold">
                          {item.name}
                        </h2>
                        <p className="text-gray-600">{item.location}</p>
                        <div className="mb-1 flex items-center">
                          <span className="text-yellow-400">⭐</span>
                          <span className="ml-1 text-gray-600">
                            {item.rating} Stars
                          </span>
                        </div>
                        <p className="mt-2 text-xl font-semibold text-red-500">
                          IDR {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline">Lihat Semua</Button>
            </div>
          </div>

          <div className="m-4">
            <h1 className="text-xl font-semibold">Partner SeTiket</h1>
            <p className="mt-2 text-sm text-slate-500">
              Kenyamanan dan kebahagiaan kamu adalah hal yang utama bagi kami!
              Oleh karena itu, SeTiket bekerja sama dengan berbagai mitra
              layanan transportasi, jaringan hotel, penyedia sewa mobil, dan
              juga pemasok tiket hiburan untuk memastikan liburan kamu selalu
              berjalan dengan nyaman dan penuh kebahagiaan.
            </p>
            <Link href="/other-page">
              <p className="mt-2 text-base font-semibold text-purple-500">
                SELENGKAPNYA
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
