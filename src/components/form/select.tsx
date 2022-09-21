import { SelectHTMLAttributes } from "react"

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function Select ({ children, ...props }: SelectProps) {
  return (
    <select {...props} className='w-full bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none'>
      {children}
    </select>
  )
}
