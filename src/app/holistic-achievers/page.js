import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function HolisticAchievers() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <PageHeader contentTitle={'Holistic Achievers'} />
      {/* Image Grid */}
      <div className="w-full flex justify-center py-12 bg-grid-dots">
        <div className="bg-white border-2 border-gray-300 rounded-full px-12 py-4 shadow-sm">
          <p className="text-red-600 font-bold text-xl text-center">
            “Where balanced growth creates extraordinary achievers.”
          </p>
        </div>
      </div>
      <div className="bg-darkBlue-100">
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
    </div>
  );
}
