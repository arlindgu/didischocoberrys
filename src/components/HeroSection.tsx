import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center mt-16">
            <div className='flex flex-col items-start justify-center'>
            <div>
                <h1 className=' w-full'>Schoko Erdbeeren</h1>
                <h2 className='opacity-75 w-full -mt-4'>Frisch. Fruchtig. Handgemacht.</h2>
                
                <p className='lg:max-w-1/2'>Entdecke unsere mit Liebe veredelten Erdbeeren, umhüllt von feinster Schokolade und verpackt mit Stil. Perfekt zum Geniessen oder Verschenken.</p>
                </div>
                <div className='flex flex-row gap-2 mt-4'>
                <Link href="/pricing"><button className='btn btn-primary'>Preisliste</button></Link>
                <Link href="/order"><button className='btn btn-secondary'>Bestellen</button></Link>
                </div>
            </div>
            <Image src="/1.jpg" alt="Erdbeeren" width={1000} height={1000} className='aspect-[16/9] object-cover rounded-xl hidden lg:block' />
        </div>
    );
}