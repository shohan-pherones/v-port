import { blogs } from '@/constants/blogs';
import { Book, Clock, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

const Blogs = () => {
  return (
    <section className='container py-10'>
      <SectionTitle title='Experience the Immerse Blogs' />
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {blogs.map((blog) => (
          <div key={blog.id} className='flex flex-col gap-2'>
            <div className='relative h-56 w-full overflow-hidden rounded-xl'>
              <Image
                src={blog.cover}
                alt={blog.title}
                width={500}
                height={500}
                priority
                className='h-full w-full object-cover'
              />
              <div className='absolute bottom-5 left-5 flex items-center gap-2'>
                {blog.categories.map((cat, index) => (
                  <span
                    key={index + cat}
                    className='rounded-md bg-white px-3 py-1 text-sm font-medium lowercase'
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex items-center justify-between gap-5'>
              <div className='flex items-center gap-2'>
                <div className='aspect-square w-7 overflow-hidden rounded-full'>
                  <Image
                    src={blog.author.picture}
                    alt={blog.author.name}
                    width={100}
                    height={100}
                    priority
                    className='h-full w-full object-cover'
                  />
                </div>
                <h5>{blog.author.name}</h5>
              </div>
              <h5 className='flex items-center gap-2 font-medium text-orange'>
                <span>
                  <Clock size={18} />
                </span>
                {Math.round(+blog.readTimes / 60)} min read
              </h5>
            </div>
            <h3 className='text-xl font-medium'>{blog.title}</h3>
            <hr />
            <p>{blog.body.short}</p>
            <div className='flex items-center justify-between gap-2'>
              <Link
                href={`/blogs/${blog.id}`}
                className='flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-orange px-4 py-2 text-center font-medium text-white'
              >
                <span>
                  <Book size={18} />
                </span>
                Read full thread
              </Link>
              <button className='flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-black/5 px-4 py-2 text-center font-medium text-black'>
                <span>
                  <Plus size={18} />
                </span>
                Add to list
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
