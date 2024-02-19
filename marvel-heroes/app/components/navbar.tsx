'use client'
import { Input } from "@material-tailwind/react";
import logo from 'C:/Users/lucas/Documents/teste_tecnico/marvel-heroes/public/images/Marvel-logo.png'
import Image from "next/image";

export default function Navbar(){
    return(
      <div className="w-screen h-14 -mt-2 bg-[#9C3636]">
        <div className="container px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Image alt="Logo Marvel" src={logo} height={300} width={300} className="w-20 h-10"></Image>
            <div>
                <input className="rounded-lg h-6" placeholder="Escreva aqui"></input>
            </div>
          </div>
        </div>
      </div>
    )
}