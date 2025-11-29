import Image from "next/image";

export default function HolisticAchievers() {
  const imageNumbers = [1, 2, 3,4,5,6,7,8,9, 10, 11, 12];

  return (
    <div>
      {/* Full-width header */}
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
          Holistic Achievers
        </h1>
      </div>

      {/* Image Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {imageNumbers.map((num) => (
          <div key={num} className="w-full">
            <Image
              src={`/holistic-achievers/${num.toString().padStart(2, "0")}.jpg`}
              alt={`Holistic Achievers Image ${num}`}
              width={400}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
