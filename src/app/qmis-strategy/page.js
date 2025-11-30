import Image from "next/image";

export default function MdLetter() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="w-full py-20 flex items-center justify-center"
        style={{
          backgroundColor: "#11184C",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <h1 className="text-white text-3xl font-semibold">
          QMIS Strategy
        </h1>
      </div>

      {/* Full Width Image */}
      <div className="w-full">
        <Image
          src="/md3.jpg"
          alt="Queen Mira International School"
          width={1920}      // large width
          height={1080}     // large height
          className="w-full h-auto" // full width responsive
          priority
        />
      </div>
       
    </div>
  );
}
