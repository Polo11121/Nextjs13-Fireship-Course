import { notFound } from "next/navigation";

export const revalidate = 420;

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params: { slug },
}: BlogPostPageProps) => {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  const post = posts.find(({ slug: postSlug }) => postSlug === slug);

  return post
    ? {
        title: post.title,
        description: post.content,
      }
    : {
        title: "Not Found",
        description: "This page could not be found.",
      };
};

export const generateStaticParams = async () => {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
};

const BlogPostPage = async ({ params: { slug } }: BlogPostPageProps) => {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  const post = posts.find(({ slug: postSlug }) => postSlug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
