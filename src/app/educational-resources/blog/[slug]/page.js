import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/lib/blogs";
import BlogSection from "../BlogSection";
import BlogRightPanel from "../BlogRightPanel";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  // Await the params promise
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  return (
    <div className="bg-grid-dots">
      <PageHeader contentTitle={blog.date} />
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <article className="lg:col-span-2 space-y-10">
          <div className="relative h-[54vh] w-full rounded-xl overflow-hidden ">
            <Image
              src={blog.heroImage}
              alt={blog.title}
              fill
              priority
              className="object-contain"
            />
          </div>

          <BlogSection section={blog.section} />
        </article>

        {/* RIGHT SIDE */}
        <BlogRightPanel />
      </div>
    </div>
  );
}
