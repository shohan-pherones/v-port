import Blogs from '@/components/Blogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'V-Port | Blogs',
};

const BlogsPage = () => {
  return (
    <main>
      <Blogs />
    </main>
  );
};

export default BlogsPage;
