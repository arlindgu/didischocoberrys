import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="flex flex-row items-center justify-center w-full h-screen">
            <div className='grid grid-cols-3 grid-rows-2 gap-4 p-4 min-w-5xl min-h-5xl'>
                <div className="relative col-span-2 h-60">
                    <Image
                        src="/heropictures/1.jpg"
                        alt="Hero Image"
                        fill={true}
                        className="object-cover rounded-xl"
                    />
                </div>
                <div className="relative h-60">
                    <Image
                        src="/heropictures/2.jpg"
                        alt="Hero Image"
                        fill={true}
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="relative h-60">
                    <Image
                        src="/heropictures/3.jpg"
                        alt="Hero Image"
                        fill={true}
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="relative col-span-2 h-60">
                    <Image
                        src="/heropictures/4.jpg"
                        alt="Hero Image"
                        fill={true}
                        className="object-cover rounded-lg"
                    />
                </div>

            </div>
        </div>
    );
}