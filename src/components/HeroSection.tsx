import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="flex flex-col">
                        <div>
                <Image
                    src="/heropictures/picture.png"
                    alt="Chocolate and Strawberries"
                    width={500}
                    height={500}
                    className=""
                />
            </div>
            <div>
                <h1 className='text-4xl text-chocolate-950'>Welcome</h1>
                <p>Where Chocolate meets delicious fresh strawberries</p>
            </div>

        </div>
    );
}