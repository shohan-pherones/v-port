import { blogs } from '@/constants/blogs';
import { notFound } from 'next/navigation';

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const blog = blogs.find((blog) => blog.id === params.id);

  if (!blog) notFound();

  return <main>BlogDetailsPage</main>;
};

export default BlogDetailsPage;
