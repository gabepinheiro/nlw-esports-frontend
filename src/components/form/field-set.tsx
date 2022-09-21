import { HTMLAttributes } from "react"

type FieldsetProps = & HTMLAttributes<HTMLDivElement>

export function Fieldset ({ children, className, ...props }: FieldsetProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {children}
    </div>
  )
}
