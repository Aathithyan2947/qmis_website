import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function ValueBasedEducation() {
  return (
    <>
      <PageHeader contentTitle={'Value Based Education'} />
      <Image className="object-cover h-[60vh] w-full" src='/value-based-education/1.png' height={500} width={500} alt="Image not found" />
      <div className="w-full py-36 bg-grid-dots">
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* MOBILE → stacked
        DESKTOP → 3 columns with vertical dividers */}
          <div className="flex flex-col md:flex-row md:divide-x md:divide-gray-500 gap-8 md:gap-10">

            {/* Column 1 */}
            <div className="text-gray-700 leading-relaxed text-lg space-y-4 md:px-6">
              <p>
                Values education is integrated through structured practices such as Circle Time, promoting reflection and character development.
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-gray-700 leading-relaxed text-lg space-y-4 md:px-6">
              <p>
                Thirukkural is recited and its meanings explained daily, fostering moral understanding and cultural grounding.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-gray-700 leading-relaxed text-lg space-y-4 md:px-6">
              <p>
                Core values are consistently woven into classroom learning, ensuring holistic and responsible student development.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
