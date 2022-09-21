import { FormEvent, useEffect, useState } from 'react'

import axios from 'axios'

import { CheckedState } from '@radix-ui/react-checkbox'

import * as Dialog from '@radix-ui/react-dialog'

import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { Fieldset, Label, Input, Checkbox, Select } from '../.'

import { GameController } from 'phosphor-react'

type Game = {
  id: string
  title: string
}

export function CreateAdModal () {
  const [games, setGames] = useState<Game[] | null>(null)
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  useEffect(() => {
    async function fetchGames () {
      const res = await axios('http://localhost:3333/games')
      setGames(res.data)
    }

    fetchGames()
  }, [])

  function handleUseVoiceChannel (value: CheckedState) {
    if (value === true) {
      setUseVoiceChannel(true)
    } else {
      setUseVoiceChannel(false)
    }
  }

  async function handleCreateAd (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))

    // Validação

    if(!data.name) {
      return
    }

    try {
      const res = await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel
     })

     alert('Anúncio criado com sucesso.')
    } catch (error) {
      alert('Erro ao criar o anúncio.')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'>
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
          <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

          <form className='mt-8 flex flex-col gap-4' onSubmit={handleCreateAd}>
            <Fieldset>
              <Label htmlFor='game'>Qual o Game ?</Label>
              <Select
                id='game'
                defaultValue=''
                name='game'
              >
                <option disabled value=''>Selecione o que game que deseja jogar</option>

                {games?.map(game => (
                  <option value={game.id} key={game.id}>{game.title}</option>
                ))}
              </Select>
            </Fieldset>

            <Fieldset>
              <Label htmlFor='name'>Seu nome (ou nickname)</Label>
              <Input
                id='name'
                name='name'
                type='text'
                placeholder='Como te chamam dentro do game?'
              />
            </Fieldset>

            <div className='grid grid-cols-2 gap-6 w-full'>
              <Fieldset>
                <Label htmlFor='yearsPlaying'>Joga há quantos anos?</Label>
                <Input
                  id='yearsPlaying'
                  name='yearsPlaying'
                  type='number'
                  placeholder='Tudo bem ser ZERO'
                />
              </Fieldset>

              <Fieldset>
                <Label htmlFor='discord'>Qual seu Discord?</Label>
                <Input
                  id='discord'
                  name='discord'
                  type='text'
                  placeholder='Usuário#0000'
                />
              </Fieldset>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='weekDays'>Quando costuma jogar?</Label>
                <ToggleGroup.Root
                  className='grid grid-cols-4 gap-2'
                  type='multiple'
                  value={weekDays}
                  onValueChange={setWeekDays}
                >
                  <ToggleGroup.Item
                    value='0'
                    title='Domingo'
                    className={`w-8 h-8  rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    className={`w-8 h-8  rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title='Segunda'
                    value='1'
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    className={`w-8 h-8  rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title='Terça'
                    value='2'
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    className={`w-8 h-8  rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title='Quarta'
                    value='3'
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    className={`w-8 h-8  rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title='Quinta'
                    value='4'
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    className={`w-8 h-8  rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title='Sexta'
                    value='5'
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    className={`w-8 h-8  rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title='Sábado'
                    value='6'
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>

              <Fieldset className='flex-1'>
                <Label htmlFor='hourStart'>Qual horário do dia?</Label>
                <div className='grid grid-cols-2 gap-2'>
                  <Input
                    id='hourStart'
                    name='hourStart'
                    type='time'
                    placeholder='De'
                  />
                  <Input
                    id='hourEnd'
                    name='hourEnd'
                    type='time'
                    placeholder='Até'
                  />
                </div>
              </Fieldset>
            </div>

            <div className='mt-2 flex gap-2 items-center text-sm'>
              <Checkbox
                id='voiceChannel'
                checked={useVoiceChannel}
                onCheckedChange={handleUseVoiceChannel}
              />
              <Label htmlFor='voiceChannel'>Costumo jogar com o canal de voz ativo</Label>
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
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
