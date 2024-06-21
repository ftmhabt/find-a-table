import Search from "../general/search";

export default function Hero() {
  return (
    <div className="flex flex-col h-[200px] py-1 bg-orange-950 text-white items-center justify-center">
       <h1>find your table for any occasion</h1>
       <Search/>
    </div>
  )
}
