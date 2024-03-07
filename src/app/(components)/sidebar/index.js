/* eslint-disable react/jsx-key */
import streamers from '../(data)/streamers.json';
import { CircleUser } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="bg-[#1F2024] w-72 h-[57.5rem]">
        <p className="text-base font-medium text-white">Canales Recomendados</p>
            <div className='p-2 text-slate-200 text-sm gap-1.5 flex flex-col'>
        {streamers.map(({name, viewers, content}) => {
            return(
                <div className='flex justify-between'>
                    <CircleUser/>
                        <div className='flex gap-1'>
                        <div>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-slate-400'>{content}</p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                    <p className='text-red-500 text-5xl mt-[-29px]'>.</p>
                    <p>{viewers}</p>
                    </div>
                </div>

            )
        })}
            </div>
    </div>
  )
}
