import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="-ml-2">
      <Navbar></Navbar>      
      <div className="bg-black h-40 w-screen flex justify-center items-center ">
        <h1 className="text-white">Bem vindo ao Marvel Heroes</h1>
        
      </div>
    </div>
  );
}
