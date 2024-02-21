'use client'
import { Input } from "@material-tailwind/react";
import { useState, KeyboardEvent } from "react";
import logo from 'C:/Users/lucas/Documents/teste_tecnico/marvel-heroes/public/images/Marvel-logo.png'
import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Navbar(){
  const router = useRouter()

  const [querySearch, setQuerySearch] = useState<string>('')

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key == 'Enter' && querySearch.trim() !== ''){
      setQuerySearch('');
      router.push(`/search?query=${querySearch}`)
    }
  }

    return(
      <div className="w-full h-14  bg-[#9C3636]">
        <div className="container px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <a href="/">
              <Image alt="Logo Marvel" src={logo} height={300} width={300} className="w-20 h-10"></Image>
            </a>
            
            <div>
                <input 
                 value={querySearch} 
                 type="text" 
                 placeholder="  Pesquisar"
                 onChange={(e => setQuerySearch(e.target.value))} 
                 onKeyDown={handleSearch}
                 className="rounded-lg h-7" ></input>
            </div>
          </div>
        </div>
      </div>
    )
}