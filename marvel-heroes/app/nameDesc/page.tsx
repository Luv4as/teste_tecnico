import Grid from "@/components/layout/Grid";
import { Dropdown } from "@/components/dropdown";
import  Navbar  from "@/components/navbar";
import { ProfileCard } from "@/components/profileCard";
import { orderDescCharacters } from "@/utils/api";

export default async function Home() {
  const descCharacters = await orderDescCharacters();

  return (
    <main className="">
      <Navbar></Navbar>    
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="mt-10 md:text-6xl sm:text-4xl font-bebas-neue">BEM VINDO AO MARVEL HEROES!</h1>
        <p className="font-roboto sm:text-sm md:text-base">Veja a lista alfabética completa de personagens disponíveis</p>
        <div className="flex flex-col justify-end items-end">
          <Dropdown></Dropdown>         
        </div>
        <div className="w-[90%] lg:w-4/5">
          <Grid cols={1} sm={1} md={3}>
            {descCharacters.results.map(character =>(
                <ProfileCard key={character.id} character={character} ></ProfileCard>
              ))}
          </Grid>
        </div>
      </div>  
    </main>
  );
}