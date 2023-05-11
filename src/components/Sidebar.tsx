import { Home as HomeIcon, Search, Library, Plus, Heart } from 'lucide-react';
import Image from 'next/image';

export function Sidebar() {
    return(
        <aside className="w-72 bg-zinc-950 p-6">

        <div className='flex items-ceter gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full'></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>
        </div>

        <nav className='space-y-5 mt-6'>

          <a href="" className='flex items-center gap-3 font-sm font-semibold text-zinc-200'>
            <HomeIcon />
            Home
          </a>

          <a href="" className='flex items-center gap-3 font-sm font-semibold text-zinc-200'>
            <Search />
            Search
          </a>

          <a href="" className='flex items-center gap-3 font-sm font-semibold text-zinc-200'>
            <Library />
            Your Library
          </a>

        </nav>

        <div className='space-y-5 mt-12'>

          <a href="" className='flex items-center gap-3 font-sm font-semibold text-zinc-200'>
            <Plus />
            Create Playlist
          </a>

          <a href="" className='flex items-center gap-3 font-sm font-semibold text-zinc-200'>
            <Heart />
            Liked Songs
          </a>
        </div>

        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist de Aniversário</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hinos de Futebol</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk e Trap Brasileiro</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>As melhores do Sertanejo!</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
        </nav>

      </aside>
    )
}