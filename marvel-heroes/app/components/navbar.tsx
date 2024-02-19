import Link from "next/link";

export default function Navbar(){
    return(
      <div className="w-screen h-14 -mt-2 bg-red-800">
        <div className="container px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h3 className="text-white">Marvel</h3>
            <div>
                <p className="text-white">Search bar</p>
            </div>
          </div>
        </div>
      </div>
    )
}