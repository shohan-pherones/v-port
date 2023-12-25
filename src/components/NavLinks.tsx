'use client';

import { navLinks } from '@/constants/navLinks';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='flex items-center gap-5'>
        {navLinks.map((link) => (
          <li
            key={link.route}
            className={cn(link.route === pathname && 'text-orange')}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
