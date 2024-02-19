'use client'
import { Input } from "@material-tailwind/react";

export default function Navbar(){
    return(
      <div className="w-screen h-14 -mt-2 bg-[#9C3636]">
        <div className="container px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h3 className="text-white">Marvel Heroes</h3>
            <div>
                <input className="rounded-lg h-6" placeholder="Escreva aqui"></input>
            </div>
          </div>
        </div>
      </div>
    )
}