import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const sections = [
  {
    title: "General Information",
    items: [
      { label: "General Information", href: "#" }
    ]
  },
  {
    title: "Documents and Information",
    items: [
      { label: "Copies of Affiliation Upgradation and Extension", href: "#" },
      { label: "Copies of Societies Trust Company Registration", href: "#" },
      { label: "NOC", href: "#" },
      { label: "Recognition Certificate", href: "#" },
      { label: "Valid Building Safety Certificate", href: "#" },
      { label: "Valid Fire Safety Certificate", href: "#" },
      { label: "Self Certificate", href: "#" },
      { label: "DEO Certificate", href: "#" },
      { label: "Valid Water Health and Sanitation Certificate", href: "#" },
      { label: "Mandatory Disclosure Details SARAS 4.0", href: "#" },
    ]
  },
  {
    title: "Result and Academics",
    items: [
      { label: "Fee Structure of the School", href: "#" },
      { label: "Annual Academic Calendar", href: "#" },
      { label: "List of SMC", href: "#" },
      { label: "Last 3 Years Result of Board Examination", href: "#" },
    ]
  },
  {
    title: "Staff Details",
    items: [
      { label: "Staff Deatils", href: "#" }
    ]
  },
  {
    title: "School Infrastructure",
    items: [
      { label: "School Infrastructure", href: "#" }
    ]
  },
  {
    title: "Mandatory Disclosure SARAS",
    items: [
      { label: "Link to PDF", href: "#" }
    ]
  },
];

export default function Disclosure() {
  return (
    <>
      <PageHeader contentTitle={"Disclosure"} />

      <div className="bg-grid-dots px-10 py-10 text-gray-700">

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
                <Link
                  href={item.href}
                  className="px-6 py-2 border border-gray-400 rounded hover:bg-gray-100 transition"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        ))}

      </div>
    </>
  );
}
