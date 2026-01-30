import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const sections = [
  {
    title: "General Information",
    items: [
      { label: "General Information", href: "https://drive.google.com/file/d/1lmFhm91rSgdD_NYBdXSi95YZkS5_yIc7/view" }
    ]
  },
  {
    title: "Documents and Information",
    items: [
      { label: "Copies of Affiliation Upgradation and Extension", href: "https://drive.google.com/file/d/1CEHTzBFXM6teLJW2LTlhgrpdhUv7PjF7/view?usp=drive_link" },
      { label: "Copies of Societies Trust Company Registration", href: "https://drive.google.com/file/d/1ErgYcyNEPLQA579-NsmdGmKq4RrnFZBx/view?usp=drive_link" },
      { label: "NOC", href: "https://drive.google.com/file/d/1MLbwc1Vv2X8KNS4-LX_UWYjHto1nXe-V/view?usp=drive_link" },
      { label: "Recognition Certificate", href: "https://drive.google.com/file/d/1CjtRDvS9rE5CDUYLYc7on9uW3WAzj0hb/view?usp=drive_link" },
      { label: "Valid Building Safety Certificate", href: "https://drive.google.com/file/d/1NZGdOiINvAHm4n4fNGsl853xbPWnux7w/view?usp=drive_link" },
      { label: "Valid Fire Safety Certificate", href: "https://drive.google.com/file/d/1qYNkzf-TRYmllSSKq3tNN79HdGO22-sx/view?usp=drive_link" },
      { label: "DEO Certificate", href: "https://drive.google.com/file/d/1fyj8CHWFkHXww3LYzXsjIJI0AGDIf8Ln/view?usp=drive_link" },
      { label: "Valid Water Health and Sanitation Certificate", href: "https://drive.google.com/file/d/1Ir0xkdUJJT0WFZbNog8LV3raO2PZcDMo/view?usp=drive_link" },
    ]
  },
  {
    title: "Result and Academics",
    items: [
      { label: "Fee Structure of the School", href: "https://drive.google.com/file/d/1aS3LJPtUXzaRi6kv6pyTesZR1HkS7m17/view?usp=drive_link" },
      { label: "Annual Academic Calendar", href: "https://drive.google.com/file/d/1fY0-YZn2NbnAXler5U3IM1XYRmUonSEg/view?usp=drive_link" },
      { label: "List of SMC", href: "https://drive.google.com/file/d/1DzkxiAcfEB0TFTl5S_bLtN90mOZE59fn/view?usp=drive_link" },
      { label: "List of Parents Teachers Association (PTA) Members", href: "https://drive.google.com/file/d/1xTXWn4Sf3ZWtZvIivHSQ8sIxrghefF1Z/view?usp=drive_link" },
      { label: "Last 3 Years Result of Board Examination", href: "https://drive.google.com/file/d/1xTXWn4Sf3ZWtZvIivHSQ8sIxrghefF1Z/view?usp=drive_link" },
    ]
  },
  {
    title: "Staff Details",
    items: [
      { label: "Staff Details", href: "https://drive.google.com/file/d/1KvZoAf1A5dmy3_z0yZ7uViedWG2twvfa/view?usp=drive_link" }
    ]
  },
  {
    title: "School Infrastructure",
    items: [
      { label: "School Infrastructure", href: "https://drive.google.com/file/d/1HcO8E64pfHGG_0I_MxaVIjTucfF6mK4t/view?usp=drive_link" }
    ]
  },
];

export default function Disclosure() {
  return (
    <>
      <PageHeader contentTitle={"Disclosure"} />

      <div className="bg-grid-dots mx-auto w-full md:max-w-6xl px-10 py-10 text-gray-700">

        {/* <div className="bg-yellow-200 p-3 mb-4 rounded"> */}
        {/*   <p className="text-yellow-900 text-md"> */}
        {/*     Note: This page is currently under development. */}
        {/*   </p> */}
        {/* </div> */}

        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Section Title */}
            <h2 className="text-3xl font-semibold mb-6">
              {section.title}
            </h2>

            {/* Items List */}
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="border-y border-red-300 bg-[#f7f7f7] px-6 py-8 mb-5 flex justify-between items-center"
              >
                {/* Left Text */}
                <p className="text-[18px]">{item.label}</p>

                {/* View Button */}
                {item.label === "List of Parents Teachers Association (PTA) Members" ? (
                  <span className="px-6 py-2 text-gray-500 italic">
                    Not Available
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-gray-400 rounded hover:bg-gray-100 transition"
                  >
                    View
                  </Link>
                )}
              </div>
            ))}
          </div>
        ))}

      </div>
    </>
  );
}
