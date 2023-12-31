import { LifeBuoy } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex items-center gap-2 font-semibold transition hover:opacity-80'
    >
      <span>
        <LifeBuoy />
      </span>
      <span>V-Port</span>
    </Link>
  );
};

export default Logo;
