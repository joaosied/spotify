import { Home as HomeIcon, Search, Library, Plus, Heart, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex flex-1">

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

        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>

            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afernoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-zinc-600 transition-colors '>
              <Image src="/midnights.png" width={104} height={104} alt="Capa do álbum Midnights da Taylor Swift" />
              <strong>Midnights</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-zinc-600 transition-colors '><Image src="/midnights.png" width={104} height={104} alt="Capa do álbum Midnights da Taylor Swift" />
              <strong>Midnights</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-zinc-600 transition-colors '><Image src="/midnights.png" width={104} height={104} alt="Capa do álbum Midnights da Taylor Swift" />
              <strong>Midnights</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-zinc-600 transition-colors '><Image src="/midnights.png" width={104} height={104} alt="Capa do álbum Midnights da Taylor Swift" />
              <strong>Midnights</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-zinc-600 transition-colors '><Image src="/midnights.png" width={104} height={104} alt="Capa do álbum Midnights da Taylor Swift" />
              <strong>Midnights</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-zinc-600 transition-colors '><Image src="/midnights.png" width={104} height={104} alt="Capa do álbum Midnights da Taylor Swift" />
              <strong>Midnights</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for João Antonio Siedlarczyk</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10'>
              <Image src="/midnights.png" className='w-full' width={120} height={120} alt="Capa do álbum Midnights da Taylor Swift" />

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10'>
              <Image src="/midnights.png" className='w-full' width={120} height={120} alt="Capa do álbum Midnights da Taylor Swift" />

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10'>
              <Image src="/midnights.png" className='w-full' width={120} height={120} alt="Capa do álbum Midnights da Taylor Swift" />

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10'>
              <Image src="/midnights.png" className='w-full' width={120} height={120} alt="Capa do álbum Midnights da Taylor Swift" />

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10'>
              <Image src="/midnights.png" className='w-full' width={120} height={120} alt="Capa do álbum Midnights da Taylor Swift" />

              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

          </div>
        </main>

      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>

    </div>
  )
}
