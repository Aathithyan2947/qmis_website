import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Infrastructure() {
  return (
    <div className="bg-grid-dots">
      <PageHeader contentTitle={'Infrastructure'} />
      {/* 1st section */}
      <div className="w-full flex justify-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl w-full px-4">
          {/* Video Embed */}
          <div className="flex justify-center">
            <div className="w-full max-w-[560px] aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-r3mlxcxo50?si=mDxh0not_j_mUGbn"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Quote */}
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 leading-relaxed text-center">
              "Every corner,<br />
              a lesson.<br />
              Every space,<br />
              an opportunity."
            </h2>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <ActivitiesCarousel from={1} to={3} picPath={'/facility/Infrastructure/'} picType={'png'} />
      {/* 3rd section */}
      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

          {/* LEFT TEXT SECTION */}
          <div>
            <h2 className="text-4xl font-bold text-[#081A45] mb-4">
              Classrooms
            </h2>

            <p className="text-2xl font-semibold text-red-600 mb-6 leading-snug">
              “More than four walls — a space to grow, explore, and create.”
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Calm, connected, and fully equipped—spaces that<br />
              inspire flexible learning every day.
            </p>
          </div>

          {/* RIGHT IMAGE + DOTS */}
          <div className="flex flex-col items-center">
            <Image
              src="/facility/Infrastructure/6.png"
              height={700}
              width={700}
              alt="Classrooms"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* 4th section */}
      <div className="w-full bg-darkBlue-100 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="w-full">
              <Image
                src="/facility/Infrastructure/10.png"
                alt="Control Room"
                width={1200}
                height={800}
                className="rounded-xl w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Control Room
            </h2>

            <p className="text-xl font-semibold text-[#D6FF2A] mb-6 leading-snug">
              "Constant vigilance for complete protection."
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              A vigilant hub overseeing around 250 CCTV coverage across the campus
              and in the school buses, ensuring constant supervision and instantaneous
              response to any situation.
            </p>
          </div>

        </div>
      </div>
      {/* 4th section */}
      <div className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto text-start">

          {/* Title */}
          <h2 className="text-lg md:text-2xl font-bold text-darkBlue-300 mb-4">
            Nool Vanam (Library)
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl font-semibold text-red-500 mb-6">
            "A home for thinkers, dreamers, and learners."
          </p>

          {/* Description */}
          <p className="text-md md:text-lg text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed">
            Nool Vanam is a peaceful haven filled with curated books, offering students
            a quiet, inspirational space to read, research, and reflect independently.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="w-full flex justify-center">
              <Image
                src="/facility/Infrastructure/11.png"
                alt="Library View 1"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            <div className="w-full flex justify-center">
              <Image
                src="/facility/Infrastructure/12.png"
                alt="Library View 2"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            <div className="w-full flex justify-center">
              <Image
                src="/facility/Infrastructure/13.png"
                alt="Library View 3"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* red ribbon */}
      <div className="bg-red-600 h-12 w-full"></div>
      {/* robotics section */}
      <div className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold text-darkBlue-300 mb-12">
            Enthiravanam (Robotics Lab)
          </h2>

          {/* Quote Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mb-16">

            {/* Quote 1 */}
            <div className="relative w-[380px] md:w-[420px]">
              <Image
                src="/facility/Infrastructure/15.png"
                alt="Quote Shape"
                width={420}
                height={300}
                className="w-full h-auto"
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-semibold text-red-500 px-4">
                "Hands-on learning,<br />minds-on innovation."
              </p>
            </div>

            {/* Quote 2 */}
            <div className="relative w-[380px] md:w-[420px]">
              <Image
                src="/facility/Infrastructure/14.png"
                alt="Quote Shape"
                width={420}
                height={300}
                className="w-full h-auto"
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-semibold text-red-500 px-4">
                "Where curiosity<br />sparks invention."
              </p>
            </div>

          </div>

          {/* Image + Description Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">

            {/* Robotics Lab Image */}
            <div>
              <Image
                src="/facility/Infrastructure/16.png"
                alt="Robotics Lab"
                width={700}
                height={500}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* Description Text */}
            <div className="text-left text-lg md:text-xl leading-relaxed text-gray-700">
              <p>
                In partnership with Yagen Robotics Pvt Ltd, this lab empowers young
                innovators with hands-on experience in programming, automation,
                and design—nurturing computational thinking and creative
                problem-solving.
              </p>
            </div>

          </div>
        </div>
      </div>
      <section className="bg-[#b51617] w-full py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Text Section */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cyber Studio
            </h2>

            <p className="text-lg md:text-xl font-semibold text-yellow-300 mb-6">
              "Pixels, programs, possibilities."
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              The Cyber Studio is our school’s computer lab – a place for students to
              dive deep into digital learning, explore emerging technologies, and build
              strong computing skills in a supportive, well-equipped environment.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative w-full h-[360px] md:h-[420px]">
              <Image
                src="/facility/Infrastructure/7.png"
                alt="Cyber Studio Image"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-6 md:px-16">
        {/* Text */}
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C1D4A] mb-2">
            Music Studio
          </h2>

          <p className="text-lg md:text-xl font-semibold text-[#b51617] mb-4">
            "Strings, beats, and dreams."
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Acoustic, well-tuned, and equipped with modern instruments, our Music Studio
            provides students a soothing, creative space to practice, collaborate,
            and grow musically.
          </p>
        </div>

        {/* Image Row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="relative w-full h-[300px] md:h-[340px]">
            <Image
              src="/facility/Infrastructure/17.png"
              alt="Music Studio Image 1"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative w-full h-[300px] md:h-[340px]">
            <Image
              src="/facility/Infrastructure/18.png"
              alt="Music Studio Image 2"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative w-full h-[300px] md:h-[340px]">
            <Image
              src="/facility/Infrastructure/4.png"
              alt="Music Studio Image 3"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-6 md:px-16">
        {/* Text Section */}
        <div className="max-w-6xl mx-auto mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C1D4A]">
            Science Laboratories
          </h2>

          <p className="text-lg md:text-xl font-semibold text-[#b51617] mt-2">
            "From test tube to breakthrough."
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed mt-4">
            Where curiosity meets discovery – our labs turn questions into experiments,
            and students into problem solvers.
          </p>
        </div>

        {/* Image Row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative w-full h-[300px] md:h-[360px]">
            <Image
              src="/facility/Infrastructure/19.png"
              alt="Science Lab 1"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative w-full h-[300px] md:h-[360px]">
            <Image
              src="/facility/Infrastructure/20.png"
              alt="Science Lab 2"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative w-full h-[300px] md:h-[360px]">
            <Image
              src="/facility/Infrastructure/21.png"
              alt="Science Lab 3"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-20 py-10 bg-[#0F1733]">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-white order-2 md:order-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Counselor Room
          </h2>
          <p className="text-xl font-semibold text-[#D0FF00] mb-6">
            “Here, differences are celebrated, strengths are nurtured."
          </p>
          <p className="leading-relaxed text-lg text-gray-300">
            A calm, private space just for students' well-being – here, students can talk
            freely, reflect, and get support. It also supports special education activities,
            helping students with different learning needs.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 order-1 md:order-2 mt-8 lg:mt-0 flex justify-center">
          <Image
            src="/facility/Infrastructure/22.png"
            alt="Counselor Room"
            width={900}
            height={600}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
