'use client';
import HoverExpandGallery from "@/components/HoverExpandGallery";
import ImageCarousel from "@/components/ImageCarousel";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Veeravanam() {
  const nccCarouselImages = [
    '/facility/Veeravanam/8.png',
    '/facility/Veeravanam/Pic_13.png',
    '/facility/Veeravanam/Pic_14.png',
  ]
  return (
    <>
      <PageHeader contentTitle={"Veeravanam"} />

      <div className="bg-grid-dots py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <iframe
              className="rounded-lg w-full max-w-2xl aspect-video"
              src="https://www.youtube.com/embed/X57vnqWbzPI?si=3Bi_qahsx0RRkY_9"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <p className="text-center md:text-left text-gray-500 text-lg leading-loose font-normal">
            Veeravanam is a purpose-built enclave honoring bravery, creativity, and
            discipline. Designed around the philosophy of “Feel & Do,” it invites
            students to internalize and live their art, rather than merely watch it.
          </p>
        </div>
      </div>
      {/* 2nd section */}
      <div className="bg-darkBlue-100 py-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

            {/* Left Text Section */}
            <div className="text-left">
              <p className="text-white text-md md:text-lg leading-loose font-normal max-w-2xl">
                The name Veeravanam itself evokes valour and fearlessness.
                More than just a facility, Veeravanam is a vibrant space where students feel the art in their
                bodies and practice discipline with heart — cultivating mastery, character, and lifelong confidence.
              </p>
            </div>

            {/* Right Hover Expand Gallery */}
            <div className="flex justify-center overflow-hidden">
              <HoverExpandGallery
                images={[
                  '/facility/Veeravanam/1.png',
                  '/facility/Veeravanam/2.png',
                  '/facility/Veeravanam/3.png',
                ]}
              />
            </div>

          </div>
        </div>
      </div>
      {/* 3rd section */}
      <section className="bg-grid-dots py-20 px-6 md:px-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Left Image */}
          <div className="relative w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/facility/Veeravanam/4.png"
              alt="Silambam Ground"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Text */}
          <div className="text-center ">
            <p className="text-black  text-md md:text-lg leading-loose font-normal max-w-xl mx-auto md:mx-0">
              A <span className="font-bold text-2xl">Silambam ground</span>, set on a soft sand area, lets students
              train in the traditional Tamil martial art with barefoot agility
              enhancing balance and rooted strength.
            </p>
          </div>

        </div>
      </section>
      <div className="bg-maroon-100 h-12 w-full"></div>
      <section className="bg-grid-dots py-20 px-6 md:px-16 overflow-hidden">

        {/* Top Text */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-black text-md md:text-lg leading-relaxed font-normal">
            The <span className="font-bold text-2xl">Multi Purpose Hall</span>, designed for Karate, yoga, and martial
            arts conditioning, provides a spacious, flexible arena for growth.
          </p>
        </div>

        {/* Stacked Images Area */}
        <div className="relative w-full flex items-center justify-center">

          {/* Left Image */}
          <div className="relative w-[250px] md:w-[320px] h-[350px] md:h-[430px] rounded-xl overflow-hidden shadow-lg -mr-10 z-10">
            <Image
              src="/facility/Veeravanam/5.png"
              alt="Multipurpose Hall Side Image 1"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Center Image */}
          <div className="relative w-[380px] md:w-[500px] h-[450px] md:h-[550px] rounded-xl overflow-hidden shadow-xl z-20">
            <Image
              src="/facility/Veeravanam/6.png"
              alt="Multipurpose Hall Center Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Image */}
          <div className="relative w-[250px] md:w-[320px] h-[350px] md:h-[430px] rounded-xl overflow-hidden shadow-lg -ml-10 z-10">
            <Image
              src="/facility/Veeravanam/7.png"
              alt="Multipurpose Hall Side Image 2"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>
      <section className="bg-maroon-100 py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Text Section */}
          <div className="text-center md:text-left text-white order-2 md:order-1">
            <p className="text-md md:text-lg leading-loose font-normal max-w-xl mx-auto md:mx-0">
              A dedicated <span className="font-bold text-2xl">Classical Studio</span>, with Aathangudi-tiles
              flooring and stone pillars handcrafted by local artisans, celebrates heritage as students
              learn classical dance and Carnatic music. Athangudi tiles are a 500-year-old locally
              made craft known for their eco-friendly, handcrafted beauty.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-[90%] md:w-[600px] h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/facility/Veeravanam/3.png"
                alt="Classical Studio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grid-dots py-24 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Image Section */}
          <div className="flex justify-center order-1 md:order-1">
            <div className="relative w-[90%] md:w-[600px] h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/facility/Veeravanam/7.png"
                alt="Kung Fu training area"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left text-black order-2 md:order-2 max-w-xl mx-auto md:mx-0">
            <p className="text-md md:text-lg leading-loose font-normal">
              In the <span className="font-bold text-2xl">Kung Fu area</span>, an elegant arch made
              of stone and sculpted by regional artisans sets a powerful, serene tone,
              embodying tradition and strength.
            </p>
          </div>

        </div>
      </section>
      <section className="bg-darkBlue-100 py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Text Section */}
          <div className="text-center md:text-left text-white order-2 md:order-1">
            <p className="text-md md:text-lg leading-loose font-normal max-w-xl mx-auto md:mx-0">
              The <span className="font-bold text-2xl">Rifle Club & NCC Wing</span>, within Veeravanam is a calm,
              focused range where discipline meets concentration.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-1 md:order-2">
            <ImageCarousel images={nccCarouselImages} dotColor="#ffffff" />
          </div>
        </div>
      </section>
    </>
  );
}
