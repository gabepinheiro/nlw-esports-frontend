import { useEffect, useState } from 'react'

import { Root as DialogRoot } from '@radix-ui/react-dialog'

import { CreateAdBanner, GameBanner, CreateAdModal  } from './components'

import logoImg from './assets/logo.svg'

export type Game = {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export function App() {
  const [games, setGames] = useState<Game[] | null>(null)

  useEffect(() => {
    async function fetchGames () {
      const response = await fetch('http://localhost:3333/games')

      const data = await response.json()

      setGames(data)
    }

    fetchGames()
  }, [])

  return (
    <main className='max-w-[1344px] mx-auto flex flex-col items-center'>
      <div className='my-20'>
        <img src={logoImg} title='NLW eSports' />
      </div>
      <h1 className='text-white font-black text-[4rem]'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <section className='grid grid-cols-6 gap-6 mt-16'>
        {games?.map(({ id, _count: { ads }, ...rest }) => (
          <GameBanner ads={ads} {...rest} key={id} />
        ))}
      </section>

      <DialogRoot>
          <CreateAdBanner />
          <CreateAdModal />
      </DialogRoot>
    </main>
  )
}
