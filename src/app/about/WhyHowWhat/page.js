import DotGrid from "@/components/DotGrid";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function WhyHowWhat() {
  return (
    <div className="flex flex-col items-center">
      <PageHeader contentTitle='Why, How & What' />
      <div className="">
        <Image src="/Golden_Circle.png" height={120} width={120} alt="golden circle not found" />
      </div>
    </div>
  )
}
