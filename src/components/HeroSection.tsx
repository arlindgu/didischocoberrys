import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="flex flex-row justify-center items-center">

            <div className='flex flex-col items-start justify-center lg:w-2/3'>
                <h1 className='text-4xl font-inter font-black text-chocolate-950'>Frisch. Fruchtig. Handgemacht.</h1>
                <p className='text-sm'>Entdecke unsere mit Liebe veredelten Erdbeeren, umhüllt von feinster Schokolade und verpackt mit Stil. Perfekt zum Geniessen oder Verschenken.</p>
                <div className='flex flex-row gap-2 mt-4'>
                <Link href="/pricing"><button className=''>Preisliste</button></Link>
                <Link href="/order"><button className='bg-background border-chocolate text-chocolate border-2'>Bestellen</button></Link>
                </div>
            </div>
            <div className='hidden lg:block'>
                <Image
                    src="/heropictures/ok.png"
                    alt="Erdbeeren in Schokolade"
                    width={400}
                    height={400}
                />
                </div>
        </div>
    );
}