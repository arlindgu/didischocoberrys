"use client";

import HeroSection from '@/components/HeroSection';
import PictureText from '@/components/PictureText';
import { FloatingParticles } from '@/components/Strawberrys';

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
      <div className='w-full flex flex-col justify-center items-center mt-10 h-screen'>
        <div className='h-1/2'>
        <h3>Kaufe jetzt deine!</h3>
        <p>Versüsse dein Leben mit unseren frischen Erdbeeren!</p>
        <button>
          <a href="/order" className="">
            Jetzt bestellen!
          </a>
        </button>
        </div>
      </div>
    </div>
  );
}
