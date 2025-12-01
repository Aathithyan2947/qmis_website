export default function alumni() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* ===================== HEADER ===================== */}
      <header className="bg-[#0E1A47] py-20 flex justify-center">
        <h1 className="text-white text-4xl font-semibold">Alumni</h1>
      </header>

    <div className="w-full min-h-screen bg-gray-50 px-4 md:px-10 py-10 font-sans">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Image */}
        <img
          src="/student.jpg"   // <-- replace with your image path
          alt="Student"
          className="w-full rounded-lg shadow-md"
        />

        {/* Right: Text */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Siva Bhagya S. E{" "}
            <span className="text-gray-500 text-lg">(Batch of 2022–2023)</span>
          </h1>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Final Year, B.Tech – Metallurgical & Materials Engineering <br />
            National Institute of Technology, Tiruchirappalli (NIT–Trichy)
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            QMIS played a transformative role in shaping my academic journey and 
            guiding me toward pursuing B.Tech at NIT Trichy, an institution ranked 
            9th in the NIRF. The school not only strengthened my academic foundation 
            but also provided countless opportunities to grow as an individual and 
            refine my personality.
          </p>
        </div>
      </div>

      {/* Bottom Paragraphs */}
      <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
        <p>
          The continuous support and mentorship of my teachers, especially Ms. Sujatha 
          and Mr. Abinath, have been instrumental in helping me become who I am today. 
          Their confidence in me, along with QMIS’s rich learning atmosphere, resources, 
          and value-based education, laid the strongest base for my future. For this, 
          I remain deeply grateful.
        </p>

        <p>
          During my time at QMIS, I authored a comprehensive book review on 
          <i>1 Chisel to Shine</i> by Dr. R. Thirunavukkarasu IPS, interacted with renowned 
          ISRO scientist Dr. Venkatraman, and interviewed Padma Bhushan awardee and former 
          ISRO Chairman Dr. K. Kasturirangan. I also served as the Student Sub-Editor of 
          the school magazine <i>YAGNA</i>. The evening extra classes during board exam 
          preparation not only helped academically but also created unforgettable memories 
          with my classmates.
        </p>

        <p>
          In college, I continued to follow the path QMIS helped pave. I crafted a compelling 
          TEDx presentation for Mr. K. T. Ravindran, famously known as the “Militant Architect,” 
          for TEDx NIT Trichy (IX Edition). As an active member of Toastmasters, I took up meeting 
          roles at the Colossus Toastmasters Meet and was honoured with the ‘Best Speaker’ award 
          during my Ice Breaker session.
        </p>
      </div>
    </div>
    
    <div className="w-full mt-12 px-4 md:px-10 font-sans">
      
      {/* Section Title */}
      <p className="text-gray-700 leading-relaxed">
        Today, I hold several positions of responsibility at NIT Trichy:
      </p>

      {/* Bullet List */}
      <ul className="mt-6 space-y-8">
        
        {/* Item 1 */}
        <li className="flex flex-col">
          <span className="font-semibold text-gray-900 text-lg flex items-center gap-2">
            <span className="text-xl">•</span> Joint Secretary
          </span>
          <p className="text-gray-700 ml-5 mt-1">
            Metallurgical and Materials Engineering Association (MMEA)
          </p>
        </li>

        {/* Item 2 */}
        <li className="flex flex-col">
          <span className="font-semibold text-gray-900 text-lg flex items-center gap-2">
            <span className="text-xl">•</span> Treasurer
          </span>
          <p className="text-gray-700 ml-5 mt-1">
            Colossus Toastmasters Club
          </p>
        </li>

        {/* Item 3 */}
        <li className="flex flex-col">
          <span className="font-semibold text-gray-900 text-lg flex items-center gap-2">
            <span className="text-xl">•</span> Media Manager
          </span>
          <p className="text-gray-700 ml-5 mt-1">
            Festember Media Relations Team (South India’s largest cultural fest)
          </p>
        </li>

        {/* Item 4 */}
        <li className="flex flex-col">
          <span className="font-semibold text-gray-900 text-lg flex items-center gap-2">
            <span className="text-xl">•</span> Speakers’ Liaison
          </span>
          <p className="text-gray-700 ml-5 mt-1">
            TEDx NIT Trichy
          </p>
        </li>

      </ul>

      {/* Paragraphs */}
      <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
        <p>
          These roles have strengthened my leadership, communication, teamwork, and 
          organisational skills. I have also contributed to various impactful initiatives—
          creating media marketing strategies, securing sponsorships, raising funds for 
          flagship events, and participating in donation drives through the Social Council. 
          Visiting orphanages and old-age homes further deepened my understanding of 
          service and empathy.
        </p>

        <p>
          My academic record includes receiving the 
          <span className="font-semibold"> Academic Excellence Award – 2022 </span>
          from Honorable Justice M. S. Ramesh for securing 
          <span className="font-semibold"> District 3rd Rank </span>
          and 
          <span className="font-semibold"> School 1st Rank in Grade 12 (CBSE)</span>, 
          and placing 
          <span className="font-semibold"> 13th at the school level in Grade 10 (ICSE)</span>. 
          I am also a Bharatanatyam dancer and an amateur keyboardist. I currently stand 
          among the <span className="font-semibold">Top 10%</span> in my department at NITT.
        </p>

        <p>
          QMIS has truly been the foundation on which I built my aspirations, confidence, 
          and character. The values and experiences I gained there continue to guide me 
          every day.”
        </p>
      </div>
    </div>
      </div>
  )}
