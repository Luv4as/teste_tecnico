import Grid from "@/components/layout/Grid";
import { Dropdown } from "@/components/dropdown";
import  Navbar  from "@/components/navbar";
import { ProfileCard } from "@/components/profileCard";
import { orderModCharacters } from "@/utils/api";

export default async function Home() {
  const modifiedCharacters = await orderModCharacters();

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
            {modifiedCharacters.results.map(character =>(
              <ProfileCard key={character.id} character={character} ></ProfileCard>
            ))}
          </Grid>
        </div>
      </div>  
    </main>
  );
}

// import { Dropdown } from "../../components/dropdown";
// import  Navbar  from "../../components/navbar";
// import { ProfileCard } from "../../components/profileCard";

// export default async function Home() {
//   const modifiedCharacters = await orderModCharacters();

//   return (
//     <main className="-ml-2">
//       <Navbar></Navbar>    
//       <div>
//         <div className="flex flex-col justify-center items-center">
//           <h1 className="my-10 text-6xl font-bebas-neue">BEM VINDO AO MARVEL HEROES!</h1>
//           <p className="font-medium">Veja a lista de personagens modificados recentemenre</p>
//         </div>
        
//         <div className="flex flex-col justify-evenly items-center">
//           <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
//             <div className="flex flex-col justify-end items-end my-9 mb-5 mr-5 col-span-3">
//               <Dropdown></Dropdown>         
//             </div>
//             {modifiedCharacters.results.map(character =>(
//               <ProfileCard key={character.id} character={character} ></ProfileCard>
//             ))}
//           </div>
//         </div>
//       </div>  
//     </main>
//   );
// }
