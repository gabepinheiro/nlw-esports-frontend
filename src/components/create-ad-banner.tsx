import { MagnifyingGlassPlus } from 'phosphor-react'

import { Trigger } from '@radix-ui/react-dialog'

export function CreateAdBanner () {
  return (
    <section className='mt-8 rounded-lg bg-nlw-gradient pt-[5px] self-stretch overflow-hidden'>
        <div className='bg-[#2a2634] py-6 px-8 w-full rounded-md flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-black block'>Não encontrou seu duo ?</strong>
            <p className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</p>
          </div>

          <Trigger
            type='button'
            className='py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-colors text-white rounded h-12 flex gap-3 items-center justify-center'
          >
            <MagnifyingGlassPlus size={24} /> Publicar anúncio
          </Trigger>
        </div>
    </section>
  )
}
