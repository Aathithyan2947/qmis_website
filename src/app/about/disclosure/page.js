import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const sections = [
  {
    title: "General Information",
    items: [
      { label: "General Information", href: "https://drive.google.com/file/d/1YNQsRREOh3Uef48btRxYgKIc3KSz7t0_/view?usp=drive_link" }
    ]
  },
  {
    title: "Documents and Information",
    items: [
      { label: "Copies of Affiliation Upgradation and Extension", href: "https://drive.google.com/file/d/1b1L6HEb6ZZTgGrNO_WbG7-vuCRqIkIzC/view?usp=drive_link" },
      { label: "Copies of Societies Trust Company Registration", href: "https://drive.google.com/file/d/1FG-cDHhjD-LcmAF48sXOrlaHy052R6Yk/view?usp=drive_link" },
      { label: "NOC", href: "https://drive.google.com/file/d/1UqnnRVl0-9jTP5nFUqMoCAEdKu2qWoFW/view?usp=drive_link" },
      { label: "Recognition Certificate", href: "https://drive.google.com/file/d/1kt1B_0TcC_n4CdmndBuYnHDW2evhJmg2/view?usp=drive_link" },
      { label: "Valid Building Safety Certificate", href: "https://drive.google.com/file/d/1acd96rki3M6-BYafgHnwQzM6aohX7O2o/view?usp=drive_link" },
      { label: "Valid Fire Safety Certificate", href: "https://drive.google.com/file/d/1c_quTtZE6HU5F9zTeJFoWktyUKFmT39R/view?usp=drive_link" },
      { label: "DEO Certificate", href: "https://drive.google.com/file/d/143BQcdTE-7eLZLU2P1iLkErzrTY538-H/view?usp=drive_link" },
      { label: "Valid Water Health and Sanitation Certificate", href: "https://drive.google.com/file/d/1amUIzIGE_OKPqhIUurEpUIv1loKBYpp_/view?usp=drive_link" },
    ]
  },
  {
    title: "Result and Academics",
    items: [
      { label: "Fee Structure of the School", href: "https://drive.google.com/file/d/1dWKLx5CEgX2bdP1TCdlE8J-g9A32jYdu/view?usp=drive_link" },
      { label: "Annual Academic Calendar", href: "https://drive.google.com/file/d/1JDqQjxaJ2nwIYWpn2NLhTTwWFWd2QiSe/view?usp=drive_link" },
      { label: "List of SMC", href: "https://drive.google.com/file/d/1zycWO00RusmasfW5NNonOE8t1jWzC4am/view?usp=drive_link" },
      { label: "List of Parents Teachers Association (PTA) Members", href: "https://drive.google.com/file/d/1xTXWn4Sf3ZWtZvIivHSQ8sIxrghefF1Z/view?usp=drive_link" },
      { label: "Last 3 Years Result of Board Examination", href: "https://drive.google.com/file/d/1ro54Uv8f-DFDdkFVF-uwY_pjOhgfyYun/view?usp=drive_link" },
    ]
  },
  {
    title: "Staff Details",
    items: [
      { label: "Staff Details", href: "https://drive.google.com/file/d/1od5_GC_ojgyW2TYBSk9AQXaKnzPgaGli/view?usp=drive_link" }
    ]
  },
  {
    title: "School Infrastructure",
    items: [
      { label: "School Infrastructure", href: "https://drive.google.com/file/d/1kW3LwHMXPNVR_yZMb4PtHn40Fr0NdfxF/view?usp=drive_link" }
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
