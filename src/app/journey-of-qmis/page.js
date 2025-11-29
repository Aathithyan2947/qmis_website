import Image from "next/image";

export default function JourneyOfQMIS() {
  return (
    <div>
      {/* Full-width header */}
      <div
        className="w-full py-20 flex items-center justify-center"
        style={{
          backgroundColor: "#11184C", // dark blue
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <h1 className="text-white text-3xl font-semibold">
          Journey of QMIS
        </h1>
      </div>

      {/* Image Section */}
      <div className="max-w-5xl mx-auto ">
        <Image
          src="/journey.jpg" // must be inside public/
          alt="Queen Mira International School"
          width={1200}
          height={600}
          className="rounded-lg mb-6 w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
