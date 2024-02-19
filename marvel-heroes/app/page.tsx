import  Navbar  from "./components/navbar";
import { ProfileCard } from "./components/profileCard";
import { getCharacters } from "@/utils/api";

export default async function Home() {
  const characters = await getCharacters();
  console.log(characters)

  return (
    <div className="-ml-2">
      <Navbar></Navbar>      
      <div className="bg-black h-40 w-screen flex justify-center items-center ">
        <h1 className="text-white">Bem vindo ao Marvel Heroes</h1>
      </div>
      <div className=" grid grid-cols-2 gap-4">
        {/* {characters.results.map(character =>(
          <ProfileCard key={character.id}></ProfileCard>
        ))} */}
        {/* <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard> */}
        </div>
    </div>
  );
}
