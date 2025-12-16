import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Badminton() {
  return (
    <div className="bg-grid-dots">
      <PageHeader contentTitle={'Queen Mira Badminton Academy'} />
      <div className="flex justify-center px-20 py-12">
        <Image src="/facility/Badminton/1.png" height={1500} width={1200} alt="not found" />
      </div>
      <div className="w-full flex justify-center items-center pb-10 px-4">
        <p className="max-w-5xl text-center text-gray-500 text-md md:text-lg leading-loose font-normal">
          The Queen Mira Badminton Academy in association with Celebrate Sports Foundation mentored by Pullela Gopichand,
          offers exceptional coaching, elite infrastructure, and a champion's mindset to aspiring shuttlers. The facility features five
          high-performance Havoc courts with premium wooden sprung flooring, delivering ideal shock absorption and consistent shuttle bounce.
          Coaches from the Pullela Gopichand Academy lead students in a professional, yet spirited, environment that balances rigorous
          discipline with joyful play.
        </p>
      </div>
      <div className="flex justify-center pb-10 px-4">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/I-PoveBb9Go?si=SG85mZIIWDkd_SFW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </iframe>
      </div>
      <div className="flex justify-center py-10 px-5">
        <Image src="/facility/Badminton/2.png" height={500} width={500} alt="not found" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-20 py-10">
        <Image src="/facility/Badminton/3.png" height={400} width={400} alt="not found" />
        <Image src="/facility/Badminton/4.png" height={400} width={400} alt="not found" />
        <Image src="/facility/Badminton/5.png" height={400} width={400} alt="not found" />
      </div>
    </div>
  )
}
