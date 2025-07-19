import { ReactNode } from 'react';
import Image from 'next/image';

type PictureTextProps = {
  title: string;
  imageSrc: string;
  children?: ReactNode;
};


export default function PictureText({ children, title, imageSrc }: PictureTextProps) {



    return (
        <div className="flex flex-col p-4">
            <div className="relative w-76 h-76 mb-4 self-center">
            <Image src={imageSrc} alt={title} fill={true} className="mb-4 rounded-xl object-cover" />
            </div>
            <div className='w-76'>
            <h3>{title}</h3>
            <p>
                {children}
            </p>
            </div>
        </div>
    );
    }