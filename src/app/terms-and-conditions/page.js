export default function TermsAndConditions() {
  return (
    <div className="w-full min-h-screen p-10 bg-grid-dots">
      <div className="max-w-4xl mx-auto p-10 bg-white/60 backdrop-blur-sm rounded-xl text-gray-900 leading-relaxed font-sans">

        <h1 className="text-3xl font-bold mb-3">Terms & Conditions</h1>

        <p className="text-sm text-gray-600 mb-6">
          Last updated on Sep 2nd 2024
        </p>

        <p className="text-base mb-5">
          For the purpose of these Terms and Conditions, the term “we”, “us”,
          “our” used anywhere on this page shall mean{" "}
          <strong>Queen Mira International School</strong>, whose
          registered/operational office is Sholavandhan Road, Melakkal Rd,
          Kochadai, Madurai, Tamil Nadu 625019. "you", "your", "user",
          "visitor" shall mean any natural or legal person who is visiting our
          website and/or agreed to purchase from us.
        </p>

        <p className="text-base font-semibold mb-5">
          Your use of the website and/or purchase from us are governed by
          following Terms and Conditions:
        </p>

        <ul className="list-disc ml-8 mb-6 space-y-3">
          <li>The content of the pages of this website is subject to change without notice.</li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee as
            to the accuracy, timeliness, performance, completeness or suitability
            of the information and materials found or offered on this website.
          </li>
          <li>
            Your use of any information or materials on our website is entirely
            at your own risk.
          </li>
          <li>
            Our website contains material which is owned by or licensed to us.
            This includes, but is not limited to, the design, layout, appearance
            and graphics.
          </li>
          <li>All trademarks reproduced on our website are acknowledged.</li>
          <li>
            Unauthorized use of information provided by us may give rise to a
            claim for damages and/or be a criminal offense.
          </li>
          <li>
            From time to time our website may include links to other websites
            for additional information.
          </li>
          <li>
            You may not create a link to our website without{" "}
            <strong>Queen Mira International School</strong>'s prior written
            consent.
          </li>
          <li>
            Any dispute shall be subject to the laws of India.
          </li>
          <li>
            We are not liable for any loss arising from the decline of
            authorization for any transaction.
          </li>
        </ul>

        {/* SECTIONS */}
        <SectionHeading title="MODIFICATIONS TO THE SERVICE AND PRICES" />
        <ul className="list-disc ml-8 mb-6 space-y-3">
          <li>Prices for our products are subject to change without notice.</li>
          <li>We reserve the right to modify or discontinue the Service at any time.</li>
          <li>
            We shall not be liable to you or any third-party for modifications or
            discontinuance of the Service.
          </li>
        </ul>

        <SectionHeading title="THIRD-PARTY LINKS" />
        <ul className="list-disc ml-8 mb-6 space-y-3">
          <li>Certain content may include material from third parties.</li>
          <li>Third-party links may direct you to websites not affiliated with us.</li>
          <li>
            We are not liable for damages related to the use of third-party goods
            or services. Review their policies before engaging.
          </li>
        </ul>

        <SectionHeading title="USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS" />
        <ul className="list-disc ml-8 mb-6 space-y-3">
          <li>
            If you submit comments or materials, you grant us unrestricted rights
            to use them.
          </li>
          <li>We may monitor or remove unlawful or objectionable content.</li>
          <li>
            Your comments must not violate third-party rights or contain malware.
          </li>
        </ul>

        <SectionHeading title="PERSONAL INFORMATION" />
        <p className="text-base mb-5">
          Your submission of personal information is governed by our Privacy
          Policy. Please refer to <strong>[PRIVACY POLICY]</strong>.
        </p>

        <SectionHeading title="ERRORS, INACCURACIES AND OMISSIONS" />
        <p className="text-base mb-5">
          Occasionally, the website may contain errors relating to product
          descriptions, pricing or availability. We reserve the right to make
          corrections at any time.
        </p>
        <p className="text-base mb-5">
          We undertake no obligation to update information except as required by
          law.
        </p>

        <SectionHeading title="CHANGES TO TERMS OF SERVICE" />
        <p className="text-base mb-5">
          You can review the most current Terms at any time. Continued use of
          the website constitutes acceptance of any changes.
        </p>

        <SectionHeading title="Contact Information" />
        <p className="text-base">
          Queen Mira International School <br />
          +91 96557 77000 <br />
          contact@queenmira.com <br />
          Sholavandhan Road, Melakkal Rd, Kochadai, <br />
          Madurai, Tamil Nadu 625019.
        </p>

      </div>
    </div>
  );
}

function SectionHeading({ title }) {
  return (
    <p className="text-base font-bold uppercase mt-8 mb-3">
      {title}
    </p>
  );
}
