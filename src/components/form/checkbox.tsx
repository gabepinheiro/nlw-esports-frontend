import { ButtonHTMLAttributes, forwardRef, InputHTMLAttributes } from 'react'

import * as Primitive from '@radix-ui/react-checkbox'

import { Check } from 'phosphor-react'

type CheckboxProps = ButtonHTMLAttributes<HTMLButtonElement> & Primitive.CheckboxProps

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref)=> (
  <Primitive.Root {...props} ref={ref} className='w-6 h-6 rounded bg-zinc-900 flex items-center justify-center'>
    <Primitive.Indicator>
      <Check className='text-emerald-400 w-4 h-4'/>
    </Primitive.Indicator>
  </Primitive.Root>
))
