import { MagnifyingGlassPlus } from 'phosphor-react'

import logoImg from './assets/logo.svg'

export function App() {
  return (
    <main className='max-w-[1344px] mx-auto flex flex-col items-center'>
      <div className='my-20'>
        <img src={logoImg} title='NLW eSports' />
      </div>
      <h1 className='text-white font-black text-[4rem]'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <section className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src='game-1.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0'>
            <strong className='text-white font-bold block whitespace-nowrap text-ellipsis overflow-hidden'>League of Legendsssss</strong>
            <p className='text-purple-500 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src='game-2.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0'>
            <strong className='text-white font-bold block'>Dota 2</strong>
            <p className='text-purple-500 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src='game-3.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0'>
            <strong className='text-white font-bold block'>CS GO</strong>
            <p className='text-purple-500 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src='game-4.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0'>
            <strong className='text-white font-bold block'>Apex Legends</strong>
            <p className='text-purple-500 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src='game-5.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0'>
            <strong className='text-white font-bold block'>Fortnite</strong>
            <p className='text-purple-500 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src='game-6.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0'>
            <strong className='text-white font-bold block'>World of Warcraft</strong>
            <p className='text-purple-500 text-sm block'>4 anúncios</p>
          </div>
        </a>
      </section>

      <section className='mt-8 rounded-lg bg-nlw-gradient pt-[5px] self-stretch overflow-hidden'>
        <div className='bg-[#2a2634] py-6 px-8 w-full rounded-md flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-black block'>Não encontrou seu duo ?</strong>
            <p className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</p>
          </div>

          <button
            type='button'
            className='py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-colors text-white rounded h-12 flex gap-3 items-center justify-center'
          >
            <MagnifyingGlassPlus size={24} /> Publicar anúncio
          </button>
        </div>
      </section>
    </main>
  )
}
