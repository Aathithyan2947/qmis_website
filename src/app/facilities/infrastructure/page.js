import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import ImageCarousel from "@/components/ImageCarousel";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Infrastructure() {
  const firstCarousel = ['/facility/Infrastructure/1.png', '/facility/Infrastructure/2.png', '/facility/Infrastructure/3.png', '/facility/Infrastructure/Pic_4.png', '/facility/Infrastructure/Pic_5.png']
  const secondCarouselImages = [
    '/facility/Infrastructure/Pic_8.png',
    '/facility/Infrastructure/Pic_9.png',
    '/facility/Infrastructure/Pic_10.png',
    '/facility/Infrastructure/Pic_11.png',
  ]
  const thirdCarouselImages = [
    '/facility/Infrastructure/Pic_18.png',
    '/facility/Infrastructure/Pic_19.png',
    '/facility/Infrastructure/Pic_20.png',
  ]
  const fourthCarouselImages = [
    '/facility/Infrastructure/Pic_23.png',
    '/facility/Infrastructure/Pic_24.png',
  ]
  const fifthCarouselImages = [
    '/facility/Infrastructure/22.png',
    '/facility/Infrastructure/Pic_35.png',
  ]

  return (
    <div className="bg-grid-dots">
      <PageHeader contentTitle={'Infrastructure'} />
      {/* 1st section */}
      <div className="w-full flex justify-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-4xl w-full px-4">
          {/* Video Embed */}
          <div className="flex justify-center">
            <div className="w-full max-w-[560px] aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5cbMffL8PLw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Quote */}
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 leading-relaxed text-center">
              "Every corner,<br />
              a lesson.<br />
              Every space,<br />
              an opportunity."
            </h2>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <ActivitiesCarousel images={firstCarousel} />
      {/* 3rd section */}
      <div className="w-full py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

          {/* LEFT TEXT SECTION */}
          <div>
            <h2 className="text-2xl font-bold text-darkBlue-100 mb-4">
              Classrooms
            </h2>

            <p className="text-xl font-semibold text-maroon-100 mb-2 leading-snug">
              “More than four walls — a space to grow, explore, and create.”
            </p>

            <p className="text-lg text-gray-700 leading-loose">
              Calm, connected, and fully equipped—spaces that<br />
              inspire flexible learning every day.
            </p>
          </div>

          {/* RIGHT IMAGE + DOTS */}
          <div className="flex flex-col items-center">
            <ImageCarousel images={secondCarouselImages} />
          </div>
        </div>
      </div>
      {/* 4th section */}
      <div className="w-full bg-darkBlue-100 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

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
            <h2 className="text-3xl font-bold mb-4">
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
        <div className="max-w-6xl mx-auto text-start">

          {/* Title */}
          <h2 className="text-lg md:text-2xl font-bold text-darkBlue-300 mb-4">
            Nool Vanam (Library)
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl font-semibold text-maroon-100 mb-6">
            "A home for thinkers, dreamers, and learners."
          </p>

          {/* Description */}
          <p className="text-md text-gray-700 mb-12 leading-relaxed">
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
        <div className="max-w-5xl mx-auto text-center">

          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold text-darkBlue-100 mb-12">
            Enthiravanam (Robotics Lab)
          </h2>

          {/* Quote Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mb-16">

            {/* Quote 1 */}
            <div className="relative w-[280px] md:w-[320px]">
              <Image
                src="/facility/Infrastructure/15.png"
                alt="Quote Shape"
                width={320}
                height={240}
                className="w-full h-auto"
              />
              <p className="absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg font-semibold text-maroon-100 px-4">
                "Hands-on learning,<br />minds on innovation."
              </p>
            </div>

            {/* Quote 2 */}
            <div className="relative w-[280px] md:w-[320px]">
              <Image
                src="/facility/Infrastructure/14.png"
                alt="Quote Shape"
                width={320}
                height={240}
                className="w-full h-auto"
              />
              <p className="absolute top-[40%] md:top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-semibold text-maroon-100 px-4">
                "Where curiosity<br />sparks invention."
              </p>
            </div>

          </div>

          {/* Image + Description Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">

            {/* Robotics Lab Image */}
            <div>
              <ImageCarousel images={thirdCarouselImages} />
            </div>

            {/* Description Text */}
            <div className="text-left text-md md:text-lg leading-loose text-gray-700">
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
      <section className="bg-maroon-100 w-full py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Text Section */}
          <div className="text-white">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Cyber Studio
            </h2>

            <p className="text-lg md:text-xl font-semibold text-yellow-300 mb-6">
              "Pixels, programs, possibilities."
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              The Cyber Studio is our school’s computer lab – a place for students to
              dive deep into digital learning, explore emerging technologies, and build
              strong computing skills in a safe, supportive and well-equipped environment.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <ImageCarousel images={fourthCarouselImages} dotColor="#fde047" />
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-6 md:px-16">
        {/* Text */}
        <div className="max-w-5xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-darkBlue-100 mb-2">
            Music Studio
          </h2>

          <p className="text-lg md:text-xl font-semibold text-maroon-100 mb-4">
            "Strings, beats, and dreams."
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-loose">
            Acoustic, well-tuned, and equipped with modern instruments, our Music Studio
            provides students a soothing, creative space to practice, collaborate,
            and grow musically.
          </p>
        </div>

        {/* Image Row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="relative w-full h-[200px] md:h-[240px]">
            <Image
              src="/facility/Infrastructure/17.png"
              alt="Music Studio Image 1"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative w-full h-[200px] md:h-[240px]">
            <Image
              src="/facility/Infrastructure/18.png"
              alt="Music Studio Image 2"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative w-full h-[200px] md:h-[240px]">
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
        <div className="max-w-5xl mx-auto mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue-100">
            Science Laboratories
          </h2>

          <p className="text-lg md:text-xl font-semibold text-maroon-100 mt-2">
            "From test tube to breakthrough."
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-loose mt-4">
            Where curiosity meets discovery – our labs turn questions into experiments,
            and students into problem solvers.
          </p>
        </div>

        {/* Image Row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative w-full h-[200px] md:h-[260px]">
            <Image
              src="/facility/Infrastructure/19.png"
              alt="Science Lab 1"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative w-full h-[200px] md:h-[260px]">
            <Image
              src="/facility/Infrastructure/20.png"
              alt="Science Lab 2"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative w-full h-[200px] md:h-[260px]">
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
      <div className="w-full bg-darkBlue-100 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Text Section */}
            <div className="text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Counselor Room
              </h2>

              <p className="text-xl font-semibold text-yellow-300 mb-6">
                "Here, differences are celebrated, strengths are nurtured."
              </p>

              <p className="leading-loose text-lg text-gray-300">
                A calm, private space just for students' well-being – here, students can talk
                freely, reflect, and get support. It also supports special education activities,
                helping students with different learning needs.
              </p>
            </div>

            {/* Image Carousel Section */}
            <div className="flex justify-center">
              <ImageCarousel images={fifthCarouselImages} dotColor="#fde047" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
