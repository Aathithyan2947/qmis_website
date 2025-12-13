import BlogGrid from "@/components/BlogGrid";
import PageHeader from "@/components/PageHeader";

export default function BlogPage() {
  return (
    <div className="bg-grid-dots">
      <PageHeader contentTitle={'Blogs'} />
      <BlogGrid />
    </div>
  )
}
