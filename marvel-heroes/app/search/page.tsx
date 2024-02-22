'use client'

import { FC, Suspense, useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { useSearchParams } from "next/navigation";
import { searchCharacters } from "@/utils/api";
import { Character } from "@/types/marvels";
import { ProfileCard } from "../../components/profileCard";

 export default function SearchPage() {
    const searchParams = useSearchParams()
    const querySearch = searchParams.get('query')
    const [characters, setCharacters] = useState<Character[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    console.log(characters)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try{
                const data = await searchCharacters(querySearch)
                setCharacters(data.results)
            }catch(error){
                console.error(error)
            }
            setIsLoading(false)
        }
        if(querySearch){
            fetchData();
        }
    }, [querySearch])

    return(
        <div>
            <Navbar></Navbar>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="my-10 text-6xl font-bebas-neue ">BEM VINDO AO MARVEL HEROES!</h1>
                    <Suspense>
                        <p className="font-medium">Pesquisa por &quot;{querySearch}&quot;</p>
                    </Suspense>
                </div>
                {
                    isLoading ? <div className="flex justify-center items-center">
                        <p className="text-3xl mt-40">Carregando...</p>
                    </div> : (
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {characters.map(character =>(
                                <ProfileCard key={character.id} character={character} ></ProfileCard>
                            ))}
                        </div>
                    )
                }
            </div>  
        </div>
    )
}
