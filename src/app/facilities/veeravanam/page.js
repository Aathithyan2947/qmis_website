'use client';
import CardSwap, { Card } from "@/components/CardSwap";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Veeravanam() {
  return (
    <>
      <PageHeader contentTitle={"Veeravanam"} />

      <div className="bg-grid-dots py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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

          <p className="text-center md:text-left text-[#8D8D8D] text-xl leading-relaxed font-normal">
            Veeravanam is a purpose-built enclave honoring bravery, creativity, and
            discipline. Designed around the philosophy of “Feel & Do,” it invites
            students to internalize and live their art, rather than merely watch it.
          </p>
        </div>
      </div>
      {/* 2nd section */}
      <div className="bg-darkBlue-100 py-10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-16">

          {/* Left Text Section */}
          <div className="text-left">
            <p className="text-white text-xl leading-relaxed font-normal max-w-2xl">
              The name <span className="font-semibold">“Veeravanam”</span> itself evokes valour and fearlessness.
              <br /><br />
              More than just a facility, Veeravanam is a vibrant space where students feel the art in their
              bodies and practice discipline with heart — cultivating mastery, character, and lifelong confidence.
            </p>
          </div>

          {/* Right CardSwap Section */}
          <div className="flex justify-center overflow-hidden">
            <div
              className="relative"
              style={{
                height: "600px",
                width: "100%",
                maxWidth: "480px", // LIMIT WIDTH TO STOP HORIZONTAL SHIFTING
              }}
            >
              <CardSwap
                cardDistance={40}
                verticalDistance={60}
                delay={5000}
                pauseOnHover={false}
              >
                <Card className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/facility/veeravanam/1.png"
                    alt="Veeravanam Image 1"
                    fill
                    className="object-cover"
                  />
                </Card>

                <Card className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/facility/veeravanam/2.png"
                    alt="Veeravanam Image 2"
                    fill
                    className="object-cover"
                  />
                </Card>

                <Card className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/facility/veeravanam/3.png"
                    alt="Veeravanam Image 3"
                    fill
                    className="object-cover"
                  />
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd section */}
      <section className="bg-grid-dots py-20 px-6 md:px-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Left Image */}
          <div className="relative w-full h-[450px] md:h-[520px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/facility/veeravanam/4.png"
              alt="Silambam Ground"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Text */}
          <div className="text-center md:text-left">
            <p className="text-black text-lg md:text-xl leading-relaxed font-normal max-w-xl mx-auto md:mx-0">
              A <span className="font-semibold">Silambam ground</span>, set on a soft sand area, lets students
              train in the traditional Tamil martial art with barefoot agility
              enhancing balance and rooted strength.
            </p>
          </div>

        </div>
      </section>
      <div className="bg-red-600 h-12 w-full"></div>
      <section className="bg-dot-pattern py-20 px-6 md:px-16 overflow-hidden">

        {/* Top Text */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-black text-lg md:text-xl leading-relaxed font-normal">
            The <span className="font-semibold">Multi Purpose Hall</span>, designed for Karate, yoga, and martial
            arts conditioning, provides a spacious, flexible arena for growth.
          </p>
        </div>

        {/* Stacked Images Area */}
        <div className="relative w-full flex items-center justify-center">

          {/* Left Image */}
          <div className="relative w-[250px] md:w-[320px] h-[350px] md:h-[430px] rounded-xl overflow-hidden shadow-lg -mr-10 z-10">
            <Image
              src="/facility/veeravanam/5.png"
              alt="Multipurpose Hall Side Image 1"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Center Image */}
          <div className="relative w-[380px] md:w-[500px] h-[450px] md:h-[550px] rounded-xl overflow-hidden shadow-xl z-20">
            <Image
              src="/facility/veeravanam/6.png"
              alt="Multipurpose Hall Center Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Image */}
          <div className="relative w-[250px] md:w-[320px] h-[350px] md:h-[430px] rounded-xl overflow-hidden shadow-lg -ml-10 z-10">
            <Image
              src="/facility/veeravanam/7.png"
              alt="Multipurpose Hall Side Image 2"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>
      <section className="bg-red-600 py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Text Section */}
          <div className="text-center md:text-left text-white order-2 md:order-1">
            <p className="text-lg md:text-xl leading-relaxed font-normal max-w-xl mx-auto md:mx-0">
              A dedicated <span className="font-semibold">Classical Studio</span>, with Aathangudi-tiles
              flooring and stone pillars handcrafted by local artisans, celebrates heritage as students
              learn classical dance and Carnatic music. Athangudi tiles are a 500-year-old locally
              made craft known for their eco-friendly, handcrafted beauty.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-[90%] md:w-[600px] h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/facility/veeravanam/3.png"
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
                src="/facility/veeravanam/7.png"
                alt="Kung Fu training area"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left text-black order-2 md:order-2 max-w-xl mx-auto md:mx-0">
            <p className="text-lg md:text-xl leading-relaxed font-normal">
              In the <span className="font-semibold">Kung Fu area</span>, an elegant arch made
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
            <p className="text-lg md:text-xl leading-relaxed font-normal max-w-xl mx-auto md:mx-0">
              The<span className="font-bold">Rifle Club & NCC Wing</span>, within Veeravanam is a calm,
              focused range where discipline meets concentration.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-[90%] md:w-[600px] h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/facility/veeravanam/8.png"
                alt="Classical Studio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
