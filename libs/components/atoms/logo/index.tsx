import Image from 'next/image'
import Link from 'next/link'

export const Logo: React.FC = () => (
  <Link href="/">
    <Image
      priority
      width={ 150 }
      height={ 50 }
      src="/improvein_logotipo.svg"
      alt="Logo Improve-in"
    />
  </Link>
)
