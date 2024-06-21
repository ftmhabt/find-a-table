'use client';
import Button from "./button";

export default function Search() {
  return (
    <div className="flex">
        <input type="text" name="" id="" />
        <Button text="lets go" onClick={onSearch} style="bg-black px-[1rem] py-[.25rem]"/>
    </div>
  )
}

function onSearch(){
    return ;
}
