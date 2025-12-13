"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

const BLOGS_PER_PAGE = 6;

/**
 * Blog data
 * image → webp thumbnail
 * pdfUrl → PDF file path
 */
const blogData = [
  {
    id: 1,
    title: "How Movement Boosts Learning",
    description:
      "The science behind active classrooms and how movement enhances learning outcomes.",
    image: "/blog/1.webp",
    pdfUrl: "/blog/pdfs/movement-boosts-learning.pdf",
  },
  {
    id: 2,
    title: "How Digital Learning Builds Social Connections",
    description:
      "Exploring how technology-enabled classrooms strengthen collaboration.",
    image: "/blog/2.webp",
    pdfUrl: "/blog/pdfs/digital-learning.pdf",
  },
  {
    id: 3,
    title: "AI, Empathy & Education",
    description:
      "Understanding the new 3Es of modern schooling and future-ready learning.",
    image: "/blog/3.webp",
    pdfUrl: "/blog/pdfs/ai-empathy-education.pdf",
  },
  {
    id: 4,
    title: "Beyond Textbooks",
    description:
      "How skill mapping is shaping future-ready learners in modern education.",
    image: "/blog/4.webp",
    pdfUrl: "/blog/pdfs/beyond-textbooks.pdf",
  },
  {
    id: 5,
    title: "Vijayadasami Admissions at Queen Mira",
    description:
      "Begin your child's educational journey with confidence and care.",
    image: "/blog/5.webp",
    pdfUrl: "/blog/pdfs/vijayadasami-admissions.pdf",
  },
  {
    id: 6,
    title: "The First Five Years",
    description:
      "Why kindergarten education is more than just playtime.",
    image: "/blog/6.webp",
    pdfUrl: "/blog/pdfs/first-five-years.pdf",
  },
  {
    id: 7,
    title: "The Future of Education",
    description:
      "Emerging trends and technologies shaping the classrooms of tomorrow.",
    image: "/blog/7.webp",
    pdfUrl: "/blog/pdfs/future-of-education.pdf",
  },
  {
    id: 8,
    title: "Mindfulness in Education",
    description:
      "How meditation and mindfulness practices enhance student focus and wellbeing.",
    image: "/blog/8.webp",
    pdfUrl: "/blog/pdfs/mindfulness-in-education.pdf",
  },
  {
    id: 9,
    title: "Sustainable Schools",
    description:
      "Creating eco-friendly learning environments for the next generation.",
    image: "/blog/9.webp",
    pdfUrl: "/blog/pdfs/sustainable-schools.pdf",
  },
  {
    id: 10,
    title: "The Power of Play",
    description:
      "Research-backed benefits of play-based learning in early childhood.",
    image: "/blog/10.webp",
    pdfUrl: "/blog/pdfs/power-of-play.pdf",
  },
  {
    id: 11,
    title: "Digital Literacy in Modern Education",
    description:
      "Preparing students for a technology-driven future through comprehensive digital literacy.",
    image: "/blog/11.webp",
    pdfUrl: "/blog/pdfs/digital-literacy.pdf",
  },
  {
    id: 12,
    title: "Building Emotional Intelligence",
    description:
      "Strategies for developing EQ alongside academic skills in students.",
    image: "/blog/12.webp",
    pdfUrl: "/blog/pdfs/emotional-intelligence.pdf",
  },
  {
    id: 13,
    title: "Inclusive Education Practices",
    description:
      "Creating classrooms that celebrate diversity and accommodate all learners.",
    image: "/blog/13.webp",
    pdfUrl: "/blog/pdfs/inclusive-education.pdf",
  },
  {
    id: 14,
    title: "Project-Based Learning Success",
    description:
      "How hands-on projects enhance critical thinking and real-world problem solving.",
    image: "/blog/14.webp",
    pdfUrl: "/blog/pdfs/project-based-learning.pdf",
  },
  {
    id: 15,
    title: "The Role of Arts in Education",
    description:
      "How creative arts contribute to holistic child development and academic success.",
    image: "/blog/15.webp",
    pdfUrl: "/blog/pdfs/arts-in-education.pdf",
  },
  {
    id: 16,
    title: "Parent-Teacher Collaboration",
    description:
      "Building strong partnerships for student success through effective communication.",
    image: "/blog/16.webp",
    pdfUrl: "/blog/pdfs/parent-teacher-collaboration.pdf",
  },
  {
    id: 17,
    title: "Future Skills for Students",
    description:
      "Essential 21st century skills every student needs to thrive in tomorrow's world.",
    image: "/blog/17.webp",
    pdfUrl: "/blog/pdfs/future-skills.pdf",
  },
  {
    id: 18,
    title: "Healthy Eating in Schools",
    description:
      "Nutrition programs that support cognitive development and academic performance.",
    image: "/blog/18.webp",
    pdfUrl: "/blog/pdfs/healthy-eating.pdf",
  },
  {
    id: 19,
    title: "Outdoor Learning Benefits",
    description:
      "How nature-based education enhances creativity, focus, and environmental awareness.",
    image: "/blog/19.webp",
    pdfUrl: "/blog/pdfs/outdoor-learning.pdf",
  },
  {
    id: 20,
    title: "Assessment Revolution",
    description:
      "Moving beyond traditional testing to holistic student evaluation methods.",
    image: "/blog/20.webp",
    pdfUrl: "/blog/pdfs/assessment-revolution.pdf",
  },
  {
    id: 21,
    title: "Coding for Kids",
    description:
      "Introducing computational thinking and programming skills from an early age.",
    image: "/blog/21.webp",
    pdfUrl: "/blog/pdfs/coding-for-kids.pdf",
  },
  {
    id: 22,
    title: "Multilingual Education",
    description:
      "Cognitive benefits and cultural advantages of learning multiple languages.",
    image: "/blog/22.webp",
    pdfUrl: "/blog/pdfs/multilingual-education.pdf",
  },
  {
    id: 23,
    title: "STEM Education Innovations",
    description:
      "Creative approaches to teaching science, technology, engineering, and math.",
    image: "/blog/23.webp",
    pdfUrl: "/blog/pdfs/stem-innovations.pdf",
  },
  {
    id: 24,
    title: "Student Leadership Development",
    description:
      "Fostering leadership qualities and civic responsibility in young learners.",
    image: "/blog/24.webp",
    pdfUrl: "/blog/pdfs/student-leadership.pdf",
  },
  {
    id: 25,
    title: "Growth Mindset in Education",
    description:
      "Teaching students that intelligence can be developed through dedication and hard work.",
    image: "/blog/25.webp",
    pdfUrl: "/blog/pdfs/growth-mindset.pdf",
  },
  {
    id: 26,
    title: "Cybersecurity for Students",
    description:
      "Essential digital safety practices for the connected generation.",
    image: "/blog/26.webp",
    pdfUrl: "/blog/pdfs/cybersecurity.pdf",
  },
  {
    id: 27,
    title: "Cultural Exchange Programs",
    description:
      "How international experiences broaden perspectives and build global citizens.",
    image: "/blog/27.webp",
    pdfUrl: "/blog/pdfs/cultural-exchange.pdf",
  },
  {
    id: 28,
    title: "Physical Education Evolution",
    description:
      "Modern approaches to PE that promote lifelong fitness and health habits.",
    image: "/blog/28.webp",
    pdfUrl: "/blog/pdfs/physical-education.pdf",
  },
  {
    id: 29,
    title: "Financial Literacy for Teens",
    description:
      "Teaching money management skills for real-world financial success.",
    image: "/blog/29.webp",
    pdfUrl: "/blog/pdfs/financial-literacy.pdf",
  },
  {
    id: 30,
    title: "Education in Post-Pandemic World",
    description:
      "Lessons learned and innovations adopted in education after global challenges.",
    image: "/blog/30.webp",
    pdfUrl: "/blog/pdfs/post-pandemic-education.pdf",
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
            href={blog.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
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
                READ PDF »
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
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
    </div>
  );
}
