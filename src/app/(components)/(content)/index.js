/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client'
import { useState } from 'react';
import categories from '../(data)/categories';
import dataCards from '../(data)/dataCards'
import { Search as SearchIcon, ChevronDown, Sparkle, ArrowDownWideNarrow } from "lucide-react";
import { cardsImages } from '../img/CardsImages';
import Image from 'next/image';

export default function Content() {
  return (
    <div className=" bg-[#0E0E10] px-5 py-10 w-full flex flex-col gap-6">
        <p className="text text-5xl font-bold text-white">Navega</p>
        <div className='flex justify-between gap-2'>
            {categories.map((category) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div className=' text-white bg-[#9147FF] px-4 py-2 w-full text-xl cursor-pointer hover:bg-[#4c2785] font-bold rounded-md'>
                        {category}
                    </div>
                )
            })}
        </div>
        <Tabs/>
        <Filters/>
        <Cards/>
    </div>
  )
}

const Tabs = () =>{
    return (
        <div className='flex font-semibold gap-8 '>
            <p className="text-[#b27fff] border-b-2 font-bold border-[#b27fff] font-bold cursor-pointer hover:text-[#844dd5]">Categories</p>
            <p className='text-white cursor-pointer hover:text-[#844dd5]'>Canales en Directos</p>
        </div>
    );
};

const Filters = () => {
    return (
        <div className='flex justify-between text-sm'>
            <SearchBox/>
            <ChevDown/>
        </div>
    );
};

const SearchBox = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');
    return (
            <div className='flex'>
            <SearchIcon className='text-white absolute ml-1 mt-1'/>
            <input
            type='text'
            placeholder='Búsqueda por Categoría'
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
            className='bg-inherit border-[1px] border-gray-500 rounded-md px-8 py-1'/>
               {
                open &&
                <div className='absolute bg-neutral-800 p-4 mt-1 rounded-md'>
                        <span
                        onClick={() => setSelected('Recomendación para ti')}
                        className={`flex items-center gap-2 hover:bg-neutral-950 px-2 py-1 cursor-pointer rounded-md ${selected === 'Recomendación para ti' ? 'text-purple-500' : 'text-white'}`}
                        >
                            <Sparkle size={20}/>
                        Recomendado para ti
                        </span>
                    <span
                      onClick={() => setSelected('Visitas(de mayor a menor)')}
                      className={`flex items-center gap-2 hover:bg-neutral-950 px-2 py-1 cursor-pointer rounded-md ${selected === 'Visitas(de mayor a menor)' ? 'text-purple-500' : 'text-white'}`}
                    >
                        <ArrowDownWideNarrow size={20}/>
                        Visitas(de mayor a menor)
                        </span>
                </div>
                }
            </div>
    );
};

const ChevDown = () => {
    return (
        <div className='font-semibold text-white flex gap-2 items-center'>
            <p className='font-semibold'>Ordenar por:</p>
            <div>
                <button
                onClick={() => setOpen(!open)}
                className='flex px-2 py-1 border-2 border-gray-500 rounded-md bg-neutral-800'>
                 {selected || 'Recomendación para ti'}
                <ChevronDown/>
                </button>
             
            </div>
        </div>
    );
};

const Cards = () => {
    return (
        <div className='flex gap-2'>
        {dataCards.map(({ name, viewers, categories, image }) => {
            return (
             <div>
                    <div className='bg-purple-500'>
                <Image src={cardsImages[image]} alt={card.title} className='w-56 h-72 object-cover cursor-pointer hover:translate-x-1.5 hover:translate-y-[-6px] transition-transform'/>
                    </div>
                <p className=' text-white text-lg font-bold mt-2'>{name}</p>
                <p className=' text-white text-sm text-gray-400 mt-2'>{viewers} Espectadores</p>
                <div className='flex gap-2 text-gray-300 text-sm font-semibold pt-2'>
                    {categories.map((category) => {
                        return (
                            <div className='bg-gray-800 px-[8px] rounded-md'>
                                {category}
                            </div>
                        )

                    })}
                </div>

             </div>
            )
        })}
        </div>
    );
};