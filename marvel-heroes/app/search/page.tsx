'use client'

import { FC, Suspense, useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { useSearchParams } from "next/navigation";
import { searchCharacters } from "@/utils/api";
import { Character } from "@/types/marvels";
import { ProfileCard } from "../../components/profileCard";
import Grid from "@/components/layout/Grid";

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
                <div className="flex flex-col justify-center items-center gap-10">
                    <h1 className="mt-10 md:text-6xl sm:text-4xl font-bebas-neue">BEM VINDO AO MARVEL HEROES!</h1>
                    <Suspense>
                        <p className="font-roboto sm:text-sm md:text-base">Pesquisa por &quot;{querySearch}&quot;</p>
                    </Suspense>
                {
                    isLoading ? 
                        <div className="flex justify-center items-center">
                            <p className="text-3xl mt-40">Carregando...</p>
                        </div> : (
                        <div className="w-[90%] lg:w-4/5">
                            <Grid cols={1} sm={1} md={3}>
                            {characters.map(character =>(
                                <ProfileCard key={character.id} character={character} ></ProfileCard>
                                ))}
                            </Grid>
                        </div>
                    )
                }
            </div>  
        </div>
    )
}
