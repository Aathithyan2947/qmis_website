import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const sections = [
  {
    title: "General Information",
    items: [
      { label: "General Information", href: "https://drive.google.com/file/d/18cKlGMCQvn0CBH_ANaxy_sQldojT-y-6/view" }
    ]
  },
  {
    title: "Documents and Information",
    items: [
      { label: "Copies of Affiliation Upgradation and Extension", href: "https://drive.google.com/file/d/1W4SzwwexfETp3hlcc2N8K_jQBQnp-QX6/view" },
      { label: "Copies of Societies Trust Company Registration", href: "https://drive.google.com/file/d/1cHFe5yDx8OKrHwg6sq-ai8jSEHvlEi2N/view" },
      { label: "NOC", href: "https://drive.google.com/file/d/1WuGQ63u3td5stEWluX4Dj9iIMoimAvC1/view" },
      { label: "Recognition Certificate", href: "https://drive.google.com/file/d/1pRKIkEFTBZ4fyk567SiCLMGubVweILPJ/view" },
      { label: "Valid Building Safety Certificate", href: "https://drive.google.com/file/d/1hbdCDOKyYmE8YSt0p7fHdKi5kHP0GAJu/view" },
      { label: "Valid Fire Safety Certificate", href: "https://drive.google.com/file/d/1XhCMrx6XMwX23FbVxLh3kEwwF-h___E7/view" },
      { label: "Self Certificate", href: "https://drive.google.com/file/d/1ZYMoDpWb6cSt6h0uShg8Wk7J13j_Tnml/view" },
      { label: "DEO Certificate", href: "https://drive.google.com/file/d/1Vu_GgHHGaiY__R7dNQprNGLifiRT8dyP/view" },
      { label: "Valid Water Health and Sanitation Certificate", href: "https://drive.google.com/file/d/11fXDAOj3POeWFaas0sWfjwjgGer81nYH/view" },
      { label: "Mandatory Disclosure Details SARAS 4.0", href: "https://drive.google.com/file/d/1ddEgdgH8dLrBj4DnEH6RIQTsLwmiETMX/view" },
    ]
  },
  {
    title: "Result and Academics",
    items: [
      { label: "Fee Structure of the School", href: "#" },
      { label: "Annual Academic Calendar", href: "https://drive.google.com/file/d/1trXX17D2VCPKNpFNOuI9k6QK9ZApWlmK/view" },
      { label: "List of SMC", href: "https://drive.google.com/file/d/1trXX17D2VCPKNpFNOuI9k6QK9ZApWlmK/view" },
      { label: "Last 3 Years Result of Board Examination", href: "https://drive.google.com/file/d/1_9tMWZdpjril0TR3SJ-Cvuz7h4tWFu6j/view" },
    ]
  },
  {
    title: "Staff Details",
    items: [
      { label: "Staff Details", href: "https://drive.google.com/file/d/1RSUKTDx0sTIonT-NJaN3WfRTLxRyeWem/view" }
    ]
  },
  {
    title: "School Infrastructure",
    items: [
      { label: "School Infrastructure", href: "https://drive.google.com/file/d/1q_a-ZC5ltF3b9YMquOoMmWT338sBi4J4/view" }
    ]
  },
  {
    title: "Mandatory Disclosure SARAS",
    items: [
      { label: "Link to PDF", href: "https://drive.google.com/file/d/1UTmjHDyEzKRFgacrouZyz4V7e9Ev-ymy/view" }
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
                  target="_blank"
                  rel="noopener noreferrer"
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
