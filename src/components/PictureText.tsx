import { ReactNode } from 'react';
import Image from 'next/image';

type PictureTextProps = {
    title: string;
    src: string;
    children?: ReactNode;
};

export default function PictureText({ children, title, src }: PictureTextProps) {
    return (
        <div className="relative flex flex-col p-4 mt-16 items-center justify-center w-full h-full">
            <h4 className='text-center font-medium text-brand-50'>{title}</h4>
            <p className='text-center text-brand-50'>{children}</p>
            <Image src={src} alt={title} fill={true} className="object-cover mt-4 -z-1 rounded-lg" />
        </div>
    );
}
