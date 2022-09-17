import { InputHTMLAttributes } from "react"

type InputProps = & InputHTMLAttributes<HTMLInputElement>

export function Input (props: InputProps) {
  return (
    <input
      {...props}
      className='w-full bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
    />
  )
}
