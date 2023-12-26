import { blogs } from '@/constants/blogs';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Overlay from './Overlay';

const Hero = () => {
  return (
    <section className='container grid min-h-screen grid-cols-1 gap-10 py-10 md:grid-cols-2 xl:grid-cols-3'>
      {blogs.slice(0, 3).map((blog) => (
        <Link
          href={`/blogs/${blog.id}`}
          key={blog.id}
          className={cn(
            'group relative w-full overflow-hidden rounded-2xl',
            blog.id === '1' && 'md:col-span-2 xl:row-span-2'
          )}
        >
          <Image
            src={blog.cover}
            alt={blog.title}
            width={1000}
            height={1000}
            priority
            className='h-full w-full object-cover transition duration-300 group-hover:scale-125'
          />
          <Overlay />
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] flex flex-col items-start justify-end gap-2 p-10 text-white'>
            <span className='rounded-lg bg-orange px-3 py-1 font-medium'>
              {new Date(blog.publishedAt).toLocaleDateString()}
            </span>
            <h1
              className={cn(
                'text-2xl font-medium',
                blog.id === '1' && 'md:text-4xl md:font-semibold'
              )}
            >
              {blog.title}
            </h1>
            <div className='flex items-center gap-2'>
              <div className='aspect-square w-10 overflow-hidden rounded-full border-2'>
                <Image
                  src={blog.author.picture}
                  alt={blog.author.name}
                  width={100}
                  height={100}
                  priority
                  className='h-full w-full object-cover'
                />
              </div>
              <h4 className='font-medium'>{blog.author.name}</h4>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Hero;
