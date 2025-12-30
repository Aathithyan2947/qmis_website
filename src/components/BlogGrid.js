"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BLOGS_PER_PAGE = 6;

/**
 * Blog grid data
 * slug → dynamic route param
 */
const blogData = [
  {
    id: 1,
    slug: "how-movement-boosts-learning",
    title: "How Movement Boosts Learning",
    description:
      "The science behind active classrooms and how movement enhances learning outcomes.",
    image: "/blog/1.webp",
  },
  {
    id: 2,
    slug: "digital-learning-builds-social-connections",
    title: "How Digital Learning Builds Social Connections",
    description:
      "Exploring how technology-enabled classrooms strengthen collaboration.",
    image: "/blog/2.webp",
  },
  {
    id: 3,
    slug: "ai-empathy-education",
    title: "AI, Empathy & Education",
    description:
      "Understanding the new 3Es of modern schooling and future-ready learning.",
    image: "/blog/3.webp",
  },
  {
    id: 4,
    slug: "beyond-textbooks",
    title: "Beyond Textbooks",
    description:
      "How skill mapping is shaping future-ready learners in modern education.",
    image: "/blog/4.webp",
  },
  {
    id: 5,
    slug: "vijayadasami-admissions",
    title: "Vijayadasami Admissions at Queen Mira",
    description:
      "Begin your child's educational journey with confidence and care.",
    image: "/blog/5.webp",
  },
  {
    id: 6,
    slug: "first-five-years",
    title: "The First Five Years",
    description:
      "Why kindergarten education is more than just playtime.",
    image: "/blog/6.webp",
  },
];

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogData.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {currentBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/educational-resources/blog/${blog.slug}`}   // ✅ FIXED
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-52 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-red-600 transition">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {blog.description}
              </p>

              <span className="text-red-600 font-medium text-sm">
                READ BLOG »
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {blogData.length > BLOGS_PER_PAGE && (
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="text-sm font-medium disabled:text-gray-400 hover:text-red-600 transition"
          >
            ‹ Previous
          </button>

          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="text-sm font-medium disabled:text-gray-400 hover:text-red-600 transition"
          >
            Next ›
          </button>
        </div>
      )}
    </div>
  );
}
