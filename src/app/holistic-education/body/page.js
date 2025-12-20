import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function BodyActivities() {
  return (
    <div className="w-full font-sans bg-grid-dots">

      <PageHeader contentTitle={'Body'} />
      {/* ===================== MAIN CONTENT ===================== */}
      <section className="w-full  relative">

        {/* dotted background */}
        <div className="absolute inset-0 "></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16">

          {/* Title */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-16">
            <div className=" col-span-2">
              <h1 className="text-4xl font-bold text-[#0E1A47]">
                Activities for the Body
              </h1>

              {/* Description */}
              <p className="mt-6 text-gray-600 leading-loose">
                According to WHO, children who get 60 minutes of daily physical activity have
                better concentration and reduced anxiety. Active students also experience
                improved fitness and lower risks of obesity. Students build discipline,
                strength, teamwork, through
              </p>
            </div>
            <div className="flex justify-center">
              <Image src='/body/01.png' height={200} width={200} alt='no image found' />
            </div>
          </div>
          {/* B-Fit */}
          <h2 className="mt-10 text-2xl font-semibold text-[#B82025]">B-Fit</h2>

          <p className="mt-2 text-gray-500 ">
            Everyday B-fit classes using an exclusive curriculum.
          </p>

          {/* ===================== CARDS SECTION ===================== */}
          <div className="mt-12 relative ">
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-full h-60 rounded-lg overflow-hidden  flex items-center justify-center"
                >
                  <img
                    src={`/body/${i}.png`}
                    alt={`Image ${i}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          {/* Activities Section */}
          <section className="py-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-semibold text-[#B82025]">Activities</h2>

              <p className="mt-2 text-gray-500 ">
                After school activities foster mastery by building confidence in a supportive environment.
              </p>

              <div className="mt-8 relative">
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="w-full h-60 rounded-lg overflow-hidden flex items-center justify-center"
                    >
                      <Image
                        src={`/body/${i}.png`}
                        alt={`Activity ${i}`}
                        width={400}
                        height={240}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Aadukalam Section */}
          <section className="bg-darkBlue-100 text-white py-12 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold">Aadukalam</h2>

              <p className="mt-2 text-white ">
                The Annual Athletic Meet is a fun-filled day where students showcase their talents and skills.
              </p>

              {/* ===================== CARDS SECTION ===================== */}
              <div className="mt-8 relative">
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[7, 8, 9].map((i) => (
                    <div
                      key={i}
                      className="w-full h-60 rounded-lg overflow-hidden flex items-center justify-center"
                    >
                      <Image
                        src={`/body/${i}.png`}
                        alt={`Aadukalam ${i}`}
                        width={400}
                        height={240}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 ">
            <div className="max-w-5xl mx-auto px-6">

              {/* Section Title */}
              <h2 className="text-4xl font-medium text-[#1c1c50] mb-20">
                Skills and values Mapping
              </h2>

              {/* Row 1 : Image Left | Text Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 mb-32">

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src="/body/10.png"
                    alt="B-Fit Activity"
                    className="w-full max-w-md object-cover"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-3xl font-medium text-[#1c1c50] mb-4">
                    B-Fit
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                    The activity that stem out of taking care of well being of
                    body, mind and soul.
                  </p>
                </div>
              </div>

              {/* Row 2 : Text Left | Image Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

                {/* Text */}
                <div>
                  <h3 className="text-3xl font-medium text-[#1c1c50] mb-4">
                    Skills it develops
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                    Resilience, Self confidence, Self discipline, Independence,
                    Endurance, Collaboration, Adaptability, Conflict resolution
                    and Management, Problem solving, Decision making and so on..
                  </p>
                </div>

                {/* Image / Video Thumbnail */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md">
                    {/* Play Button */}
                    <div className="w-full flex justify-center">
                      <div className="w-full max-w-md">
                        <iframe
                          src="https://www.instagram.com/reel/DPYyrOKCXkD/embed"
                          className="w-full h-72 md:h-96 rounded-lg border-0"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

        </div>
      </section>

    </div>
  );
}
