import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Promises() {
  return (
    <div>
      <PageHeader contentTitle={'Promises'} />
      {/* ================= SECTION 1 ================= */}
      <section className="bg-grid-dots py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center col-span-3">
              <Image
                src="/promises/1.png"
                alt="MD Promise"
                width={1020}
                height={820}
                priority
              />
            </div>
            {/* RIGHT QUOTE BOX */}
            <div className="relative flex justify-center col-span-2">
              {/* Quote Box Image */}
              <Image
                src="/promises/2.png"
                alt="Promise Quote Box"
                width={620}
                height={520}
                className="w-full max-w-[180px] sm:max-w-[260px] md:max-w-[350px] h-auto object-contain"
              />
              {/* Overlay Text - Now Centered */}
              <div className="absolute inset-0 flex items-center justify-center pt-8">
                <p className="text-[#0A0F3D] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-left">
                  A <br />
                  PROMISE <br />
                  NO ONE <br />
                  ELSE <br />
                  MAKES
                </p>
              </div>
            </div>
          </div>
          {/* Bottom Caption */}
          <div className="mt-5 mx-auto max-w-3xl text-start">
            <p className="text-gray-500 text-lg md:text-base">
              Life has successes and failures.
            </p>
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section className="w-full pb-20 px-4 md:px-10 bg-grid-dots">

        {/* TOP RED QUOTE */}
        <div className="relative flex justify-center mb-16">

          {/* Quote Image */}
          <Image
            src="/promises/3.png"
            alt="QMIS Promise Quote"
            width={560}
            height={360}
            className="h-auto object-contain"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-[620px]">
              <span className="block mb-2">
                But we guarantee that
              </span>
              <span className="font-semibold">
                every QMIS student will be successful in life-
              </span>
              <br />
              in thought, character, courage, skill, and purpose.
            </p>
          </div>
        </div>

        {/* TWO CONTENT BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">

          {/* LEFT BOX */}
          <div className="bg-[#F1F1F1] rounded-2xl p-8 text-center">
            <h3 className="font-semibold text-gray-700 mb-4">
              We go one step further:
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If your child completes the full journey with us and does not
              become successful in life,
              <br /><br />
              <span className="font-semibold">
                we openly promise to refund every rupee of the fees you paid.
              </span>
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="bg-[#F1F1F1] rounded-2xl p-8 text-center">
            <h3 className="font-semibold text-gray-700 mb-4">
              At the same time, we ask you a sincere question:
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are sure that our children will be successful.
              <br /><br />
              In such a situation, are you willing to contribute just
              <span className="font-semibold"> 1% of their future profit </span>
              back to the school?
            </p>
          </div>

        </div>

        {/* BOTTOM NOTE */}
        <p className="text-left text-gray-600 text-base max-w-3xl mx-auto">
          This is <span className="font-semibold">our open challenge</span> —
          because we believe in our philosophy and our children that strongly.
        </p>

      </section>
    </div>
  );
}
