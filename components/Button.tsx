import Image from 'next/image'
import Link from 'next/link'

type ButtonProps = {
  title: string
  variant:
    | 'btn_white'
    | 'btn_white_text'
    | 'btn_green'
    | 'btn_dark_green'
    | 'btn_dark_green_outline'
  type?: 'button' | 'submit'
  icon?: string
  full?: boolean
  href?: string
}

const Button = ({ title, variant, type = 'button', icon, full = false, href }: ButtonProps) => {
  const className = `flexCenter gap-3 rounded-full border px-8 py-4 ${variant} ${full ? 'w-full' : ''}`

  const content = (
    <>
      {icon && <Image src={icon} alt="" width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap">{title}</span>
    </>
  )

  if (href) {
    return <Link href={href} className={className}>{content}</Link>
  }

  return <button type={type} className={className}>{content}</button>
}

export default Button
