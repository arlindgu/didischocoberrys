import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex flex-col items-start justify-center lg:w-2/3 mb-32'>
                <h1 className='text-center w-full'>Schoko Erdbeeren</h1>
                <h2 className='opacity-75 text-center w-full -mt-4'>Frisch. Fruchtig. Handgemacht.</h2>
                <p className='text-center'>Entdecke unsere mit Liebe veredelten Erdbeeren, umhüllt von feinster Schokolade und verpackt mit Stil. Perfekt zum Geniessen oder Verschenken.</p>
                <div className='flex flex-row gap-2 mt-4 self-center'>
                <Link href="/pricing"><button className=''>Preisliste</button></Link>
                <Link href="/order"><button className='bg-background border-chocolate text-chocolate border-2'>Bestellen</button></Link>
                </div>
            </div>
            
        </div>
    );
}