import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="flex flex-col justify-center items-center">
                        <div>
                <Image
                    src="/heropictures/ok.png"
                    alt="Chocolate and Strawberries"
                    width={250}
                    height={250}
                    className=""
                />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl text-chocolate-950'>Herzlich Willkommen!</h1>
                <p>Willkommen im Strawberry Schokoladen Paradies, wo handgemachte Schokoladenträume wahr werden. Jede Praline ein kleines Meisterwerk, liebevoll verfeinert mit sonnengereiften Erdbeeren mit einer extra Portion Herz. Perfekt zum Verschenken oder Selbstvernaschen.</p>
            </div>

        </div>
    );
}