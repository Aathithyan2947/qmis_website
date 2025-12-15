'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../public/loader.json';

export default function LoadingPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return (
      <div className="z-50 fixed inset-0 bg-darkBlue-100 flex items-center justify-center">
        <Lottie
          animationData={loadingAnimation}
          loop
          autoplay
          className="w-40 h-40"
        />
      </div>
    );
  }

  return null;
}
