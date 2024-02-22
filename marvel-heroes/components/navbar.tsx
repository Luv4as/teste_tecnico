'use client'

import { Input } from "@material-tailwind/react";
import { useState, KeyboardEvent } from "react";
import logo from '../../public/images/Marvel-logo.png' 
//import logo from '@images/Marvel-logo.png'
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
          <div className="flex flex-row justify-between items-center h-full">
            <a href="/" className="ml-14">
              <Image alt="Logo Marvel" src={logo} height={300} width={300} className="w-20 h-10"></Image>
            </a>
            
            <div>
                 <Input 
                  crossOrigin={'/search'}
                  type="search"
                  label="Pesquisa"
                  color="white"
                  value={querySearch}
                  onChange={(e => setQuerySearch(e.target.value))}
                  onKeyDown={handleSearch}
                  ></Input>
            </div>
          </div>
        </div>
      </div>
    )
}