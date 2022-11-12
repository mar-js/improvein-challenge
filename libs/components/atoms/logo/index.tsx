import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Logo: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <Link href={ pathname !== '/' ? '/bands' : '/' }>
      <Image
        priority
        width={ 150 }
        height={ 50 }
        src="/improvein_logotipo.svg"
        alt="Logo Improve-in"
      />
    </Link>
  )
}
