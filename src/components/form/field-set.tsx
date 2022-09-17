import { FieldsetHTMLAttributes } from "react"

type FieldsetProps = & FieldsetHTMLAttributes<HTMLFieldSetElement>

export function Fieldset ({ children, className, ...props }: FieldsetProps) {
  return (
    <fieldset {...props} className={`flex flex-col gap-2 ${className}`}>
      {children}
    </fieldset>
  )
}
