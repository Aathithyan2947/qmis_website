'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function SocialOutreach() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className='w-full overflow-x-hidden'>
      <PageHeader contentTitle={'Social Outreach'} />
      {/* ================= GLOBAL HONOUR ================= */}
      <section className='w-full py-16'>
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#1a2a5a]'>
            A Global Honour
          </h2>

          <p className='text-xl mt-2 text-red-600 font-semibold'>
            QMIS Student Anthem Recognized by UNICEF
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center'>
            <Image
              src='/social-outreach/7.png'
              alt='QMIS UNICEF Honour Event'
              width={800}
              height={600}
              className='w-full rounded-lg shadow-lg object-cover'
            />

            <div
              onClick={openModal}
              className='rounded-lg shadow-lg border border-yellow-500 p-4 cursor-pointer hover:scale-[1.02] transition'
            >
              <Image
                src='/social-outreach/8.png'
                alt='UNICEF Certificate'
                width={800}
                height={600}
                className='w-full object-contain'
              />
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-12 mt-16 items-center'>
            <div className='aspect-video rounded-xl overflow-hidden shadow-xl'>
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/0VDWMJ_IpQo'
                allowFullScreen
              />
            </div>

            <div className='text-gray-700 text-lg leading-loose space-y-4'>
              <p>
                Another remarkable initiative from the production house of Mr.
                Abinath is the QMIS Student Anthem, a powerful celebration of
                youth, hope, and global unity. Composed by Anil Srinivasan and
                written by Madhan Karky, the anthem resonated far beyond the
                school.
                <br />
                <br />
                At UNICEF's prestigious meet in Mumbai, the anthem was
                officially recognised and proclaimed as the Student Anthem for
                students worldwide a proud moment for QMIS and a sestament so
                our vision of inspiring global futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ISRO ================= */}
      <section className='w-full py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6 text-center md:px-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-6'>
            Visit to Indian Space Research Organisation
          </h2>

          <p className='text-gray-700 leading-loose text-justify max-w-4xl mx-auto mb-12'>
            At QMIS, giving back to the community means inspiring curiosity and
            aspiration — not just charity. Through our student-outreach program,
            we organised a fully funded trip for 187 underprivileged students
            from local government schools to ISRO’s Satish Dhawan Space Centre
            in Sriharikota. This was a first-of-its-kind visit, and the
            experience — from interacting with scientists to touring launch
            facilities — sparked dreams of space and science.
          </p>

          <div className='grid md:grid-cols-2 gap-10 items-center'>
            <Image
              src='/social-outreach/1.png'
              width={900}
              height={600}
              alt='ISRO Visit'
              className='w-full rounded-lg shadow-md object-cover'
            />

            <div className='text-gray-700  text-justify leading-relaxed'>
              <p className='mb-6'>
                Globally, while ISRO’s outreach initiatives are growing, only a
                handful of schools (especially in remote and underserved areas)
                typically get such exposure. In India, surveys show that only
                about 8% of students say they want to become scientists.
                <br />
                <br />
                Through this initiative, QMIS is helping close that aspiration
                gap — by giving students not just a visit, but the chance to
                dream bigger
              </p>
            </div>
          </div>
          <div className='text-gray-700 mt-8 text-center leading-relaxed'>
            <p>
              To honour the brilliance and dedication of India’s space heroes,
              QMIS also proudly produced an exclusive anthem dedicated to ISRO
              scientists
            </p>
          </div>
        </div>
      </section>

      {/* ================= VAANATHAI ================= */}
      <section className='w-full bg-[#0d1b3d] text-white py-20'>
        <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              “Vaanathai Vellaporom”
            </h2>
            <p className='text-lg mb-4'>
              A tribute of gratitude, hope, and inspiration.
              <br />
              At QMIS, we don’t just teach students to dream
            </p>

            <p className='text-2xl font-semibold'>
              We show students how high their dreams can fly.
            </p>
          </div>

          <div className='aspect-video rounded-xl overflow-hidden shadow-xl'>
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/wysPQ3DPkmE'
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ================= KARKO ================= */}
      <section className='w-full py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl text-center font-bold text-blue-900 mb-6'>
            KARKO: Learning with Heart
          </h2>

          <p className='max-w-4xl mx-auto text-lg  text-justify leading-relaxed text-center mb-12'>
            QMIS partners with the Chellamuthu Trust, led by Dr. C.
            Ramasubramanian, to introduce KARKO — a unique program where
            selected QMIS students collaborate with government school students
            to break learning barriers through shared experiences.
          </p>

          <div className='grid md:grid-cols-2 gap-12 items-center mb-12'>
            <Image
              src='/social-outreach/2.png'
              width={900}
              height={600}
              alt='KARKO Program'
              className='rounded-lg shadow-md object-cover w-full'
            />

            <p className='text-lg leading-loose text-justify'>
              Through this initiative, students learn together, support one
              another, and build genuine connections. KARKO nurtures empathy,
              emotional well-being, social awareness, and a deeper understanding
              of diverse learning environments — shaping compassionate,
              responsible young citizens.
            </p>
          </div>

          <ul className='max-w-5xl mx-auto list-disc pl-6 space-y-4 text-lg'>
            <li>
              School–community partnerships (involving mental health experts,
              organizations, NGOs) are shown to increase student engagement by
              up to 40%, and boost academic performance by 30%.
            </li>
            <li>
              Such partnerships provide critical emotional support to students,
              creating a support network that transcends classroom walls.
            </li>
          </ul>
        </div>
      </section>

      {/* ================= VALLUVAR ================= */}
      <section className='w-full py-16 bg-white'>
        <div className='bg-red-700 text-white py-8 text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-semibold'>
            “Valluvar Marai, Vairamuthu Urai”
          </h2>
        </div>

        <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-12'>
          <Image
            src='/social-outreach/3.png'
            width={506}
            height={359.67}
            className='rounded-lg shadow w-full object-cover'
            alt=''
          />
          <Image
            src='/social-outreach/4.png'
            width={506}
            height={359.67}
            className='rounded-lg shadow w-full object-cover'
            alt=''
          />
        </div>

        <div className='max-w-5xl mx-auto px-6'>
          <p className='text-lg leading-relaxed'>
            Another landmark initiative by Queen Mira was the extraordinary
            cultural exposure it created for 100 students from 10 Government
            schools across Madurai and Virudhunagar. These students were taken
            to Chennai to participate in “Valluvar Marai, Vairamuthu Urai,” an
            event hosted by the illustrious, award-winning Tamil poet and
            literary icon Kalaimamani Vairamuthu. The occasion was graced by the
            Hon’ble Chief Minister of Tamil Nadu, Thiru M.K. Stalin, and
            attended by distinguished Tamil scholars, revered cultural
            guardians, and passionate patriots who filled the hall with an
            atmosphere of pride and intellectual vibrance.This rare opportunity
            allowed young learners to witness Tamil heritage at its finest—an
            inspiring experience that deepened their cultural identity and
            broadened their aspirations.
          </p>
        </div>
      </section>

      {/* ================= IGCA ================= */}
      <section className="w-full bg-darkBlue-100 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            QMIS x IGCA: Empowering Tomorrow’s Global Citizens
          </h2>

          {/* Content Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

            {/* Left Image */}
            <div className="flex justify-center">
              <Image
                src="/social-outreach/Pic 10.png"
                alt="QMIS x IGCA Collaboration"
                width={500}
                height={350}
                className="rounded-md object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="text-lg leading-relaxed text-gray-200">
              <p>
                QMIS collaborates with IGCA to strengthen our commitment to
                nurturing socially responsible, globally aware learners. Through
                this partnership, students engage in meaningful projects aligned
                with global challenges, develop cultural intelligence, participate
                in international collaborations, and build essential values like
                empathy, leadership, and social responsibility.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DRUG AWARENESS ================= */}
      <section className='w-full py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
          <h2 className='text-3xl md:text-4xl font-semibold text-center text-[#1a2a5a] mb-10'>
            A Powerful Stand Against Drug Abuse
          </h2>

          <div className='flex justify-center mb-12'>
            <Image
              src='/social-outreach/6.png'
              width={1000}
              height={600}
              alt='Drug Awareness'
              className='w-full max-w-5xl rounded-lg shadow-md object-cover'
            />
          </div>

          <div className='grid md:grid-cols-2 gap-10 items-center'>
            <div className='text-gray-700 text-lg space-y-4'>
              <p>
                Queen Mirs, through the visionary production house of Mr.
                Abinath, created a compelling atlhem to raise awareness about
                the dangers of drug abuse. With soul-stirring music composed by
                Gerard Feliz and thought-provoking lyrics penned by Madhan
                Karky, the anthem delivers a strong message of hope, courage,
                and conscious choice.
              </p>
              <p>
                It reflects QMIS's unwavering commitment to shaping responsible,
                informed, and resilient young citizens.
              </p>
            </div>

            <div className='aspect-video rounded-xl overflow-hidden shadow-xl'>
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/GYlpQDrQt2Y'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center'>
          <button
            onClick={closeModal}
            className='absolute top-6 right-6 text-white'
          >
            <X size={32} />
          </button>

          <div className='bg-white p-6 rounded-xl max-w-4xl mx-auto'>
            <Image
              src='/social-outreach/8.png'
              width={1200}
              height={900}
              alt='UNICEF Certificate'
              className='w-full object-contain'
            />
          </div>
        </div>
      )}
    </div>
  );
}
