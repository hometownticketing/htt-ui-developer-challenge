import Image from 'next/image';
import Link from 'next/link';

const linkClassNames = 'text-primary hover:text-primary-dark hover:underline';

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-primary-light py-2 px-4 w-full border-b-primary border-b-2">
      <h1 className="text-3xl font-serif font-bold text-primary flex flex-row items-center">
        <Image className="mr-3" src="/HomeTown_long_rgb.png" alt="HomeTown Ticketing Logo" width={150} height={40} />
        | UI Developer Challenge
      </h1>
      <nav className="flex flex-row gap-3">
        <Link className={linkClassNames} href="/">Instructions</Link>
        <Link className={linkClassNames} href="/challenge">Challenge</Link>
      </nav>
    </header>
  )
}