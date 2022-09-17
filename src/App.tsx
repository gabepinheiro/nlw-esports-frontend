
import { useEffect, useState } from 'react'

import { CreateAdBanner, GameBanner, Fieldset, Input, Label  } from './components'

import { GameController } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from './assets/logo.svg'

type Game = {
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

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'>

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

            <Dialog.Description className='h-auto'>
              <form className='mt-8 flex flex-col gap-4'>
                <Fieldset>
                  <Label htmlFor='game'>Qual o Game</Label>
                  <Input
                    id='game'
                    type='text'
                    placeholder='Selecione o que game que deseja jogar'
                  />
                </Fieldset>

                <Fieldset>
                  <Label htmlFor='name'>Seu nome (ou nickname)</Label>
                  <Input id='name' type='text' placeholder='Como te chamam dentro do game?' />
                </Fieldset>

                <div className='grid grid-cols-2 gap-6 w-full'>
                  <Fieldset>
                    <Label htmlFor='yearsPlaying'>Joga há quantos anos?</Label>
                    <Input id='yearsPlaying' type='number' placeholder='Tudo bem ser ZERO' />
                  </Fieldset>

                  <Fieldset>
                    <Label htmlFor='discord'>Qual seu Discord?</Label>
                    <Input id='discord' type='text' placeholder='Usuário#0000' />
                  </Fieldset>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='weekDays'>Quando costuma jogar?</Label>
                    <div className='grid grid-cols-4 gap-2'>
                      <button title='Domingo' className='w-8 h-8 bg-zinc-900 rounded'>D</button>
                      <button title='Segunda' className='w-8 h-8 bg-zinc-900 rounded'>S</button>
                      <button title='Terça' className='w-8 h-8 bg-zinc-900 rounded'>T</button>
                      <button title='Quarta' className='w-8 h-8 bg-zinc-900 rounded'>Q</button>
                      <button title='Quinta' className='w-8 h-8 bg-zinc-900 rounded'>Q</button>
                      <button title='Sexta' className='w-8 h-8 bg-zinc-900 rounded'>S</button>
                      <button title='Sábado' className='w-8 h-8 bg-zinc-900 rounded'>S</button>
                    </div>
                  </div>

                  <Fieldset className='flex-1'>
                    <Label htmlFor='hourStart'>Qual horário do dia?</Label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input id='hourStart' type='time' placeholder='De' />
                      <Input id='hourEnd' type='time' placeholder='Até' />
                    </div>
                  </Fieldset>
                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <input type='checkbox' />
                  Costumo me conectar ao chat de voz.
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close
                    type='button'
                    className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 transition-colors'
                  >
                    Cancelar
                  </Dialog.Close>
                  <button
                    type='submit'
                    className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition-colors'
                  >
                    <GameController size={24} />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Description>
          </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  )
}
