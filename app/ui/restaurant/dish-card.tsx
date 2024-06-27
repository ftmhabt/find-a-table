import React from 'react'

export default function DishCard({
    name,
    description,
    price
}:{
    name:string,
    description:string,
    price:string
}) {
  return (
    <div className='flex flex-col gap-2 bg-white p-4'>
        <h1 className='text-xl font-bold'>{name}</h1>
        <p>{description}</p>
        <p>{price.toString()}$</p>
    </div>
  )
}
