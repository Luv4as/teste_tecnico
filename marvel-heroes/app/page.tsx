import { Dropdown } from "./components/dropdown";
import  Navbar  from "./components/navbar";
import { ProfileCard } from "./components/profileCard";
import { getCharacters } from "@/utils/api";

export default async function Home() {
  const characters = await getCharacters();

  return (
    <main className="-ml-2">
      <Navbar></Navbar>    
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="my-10 text-6xl font-bebas-neue">BEM VINDO AO MARVEL HEROES!</h1>
          <p className="font-roboto">Veja a lista alfabética completa de personagens disponíveis</p>
        </div>
        
        <div className="flex flex-col justify-evenly items-center">
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col justify-end items-end my-9 mb-5 mr-5 col-span-3">
              <Dropdown></Dropdown>         
            </div>
            {characters.results.map(character =>(
              <ProfileCard key={character.id} character={character} ></ProfileCard>
            ))}
          </div>
        </div>
      </div>  
    </main>
  );
}
