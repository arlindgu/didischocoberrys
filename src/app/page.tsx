"use client";

import HeroSection from '@/components/HeroSection';
import PictureText from '@/components/PictureText';
import { FloatingParticles } from '@/components/Strawberrys';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center">
      <FloatingParticles />
      <HeroSection />
      <div className='flex flex-col lg:flex-row'>
        <PictureText title="Erdbeeren mit Schokolade" imageSrc="/picturetext/1.png">
          Gereifte Erdbeeren übergossen mit einer feinen Schokoladenglasur, die den süßen Geschmack der Beeren perfekt ergänzt.
        </PictureText>
                <PictureText title="Bereit fürs verschenken" imageSrc="/picturetext/2.png">
          Unsere Erdbeeren sind nicht nur ein Genuss für den Gaumen, sondern auch ein perfektes Geschenk für jeden Anlass.
        </PictureText>
        <PictureText title="Frische Erdbeeren" imageSrc="/picturetext/3.png">
          Frische Erdbeeren, die direkt vom Feld kommen und voller Geschmack sind.
        </PictureText>
      </div>
      <div className='w-full flex flex-col justify-center items-center mt-4 h-screen'>
        <div className='relative flex flex-col justify-center items-center p-4 h-2/3 w-full'>
        <Image
          src="/picturetext/bg.png"
          alt="Erdbeere"
          fill={true}
          className="object-cover -z-2 bg-chocolate rounded-xl"
        />
        <h3 className='text-white'>Kaufe jetzt deine!</h3>
        <p className='text-white mb-4'>Versüsse dein Leben mit unseren frischen Erdbeeren!</p>
        <button className='bg-white'>
          <a href="/order" className="text-chocolate">
            Jetzt bestellen!
          </a>
        </button>
        </div>
      </div>
    </div>
  );
}
