import { ReactNode, ReactElement } from 'react';

type PictureTextProps = {
    title: string;
    icon: ReactElement;
    children?: ReactNode;
};

export default function PictureText({ children, title, icon }: PictureTextProps) {
    return (
        <div className="flex flex-col p-8 rounded-xl bg-white">
            <div className="mb-2 self-center bg-accent p-2 rounded-full text-white">{icon}</div>
            <h4 className='text-center font-medium'>{title}</h4>
            <p className='text-center'>{children}</p>
        </div>
    );
}
