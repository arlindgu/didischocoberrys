"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PricingPage() {

    const Products = [
        {
            name: 'Erdbeerboxen',
            description: 'Unsere handveredelten Premium-Erdbeeren sind ein echter Blickfang – perfekt für besondere Anlässe wie Geburtstage, Jubiläen oder als edles Geschenk. Frische Erdbeeren werden mit feinster weisser Schokolade überzogen und kunstvoll mit goldenen Zuckerrosen und Ziermustern dekoriert. Die hochwertige Geschenkverpackung mit Sichtfenster rundet das exklusive Erlebnis ab.',
            picture: '/products/strawberrybox.svg',
            options: [
                { size: '15 Stück', price: 'CHF 45.00' },
                { size: '35 Stück', price: 'CHF 80.00' },
            ],
        },
        {
            name: 'I 🤎 Boxen',
            description: 'Diese luxuriöse Herzbox ist gefüllt mit frisch getauchten Erdbeeren in zarter Vollmilch- und rosa Schokolade, liebevoll dekoriert mit essbarem Glitzer, feinen Verzierungen und frischen Himbeeren. Die funkelnde Herzverpackung mit Sichtfenster sorgt für den Wow-Effekt – ideal für romantische Anlässe wie Valentinstag, Jahrestage oder einfach als süsse Überraschung.',
            picture: '/products/ilubox.svg',
            options: [
                { size: 'Box', price: 'CHF 50.00' },
                { size: '+ Rosen', price: '+ CHF 10.00' },
            ],
        },
        {
            name: 'Berry-Bag',
            description: 'Ein eleganter Rundkorb voller tiefromantischer, frischer roter Rosen, kombiniert mit zartem Schleierkraut und veredelt mit handgemachten Schoko-Dekoren in Herz- und Kugelform. Die Farbtöne in Rot und Rosa schaffen ein luxuriöses Gesamtbild – ideal für besondere Momente wie Valentinstag, Geburtstage oder als liebevolle Überraschung.',
            picture: '/products/berrybag.svg',
            options: [
                { size: 'Bag', price: 'CHF 70.00' },
            ],
        },
    ];

    return (
        <div className="flex flex-col gap-8 mt-16 max-w-7xl px-4 mx-auto">
            <div>

            {Products.map((product, idx) => (
                <motion.div
                    key={product.name}
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.05 + idx * 0.25, type: 'spring', stiffness: 100 }}
                    className="flex flex-col p-8 lg:flex-row gap-8 bg-white rounded-4xl mb-4"
                >
                    <div className="w-full lg:w-1/3">
                        <h2>{product.name}</h2>
                        <p className=''>{product.description}</p>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h3>Preise</h3>
                        <table className="w-full">
                            <thead className="border-b-2">
                                <tr>
                                    <th className="text-left"></th>
                                    <th className="text-right">Preis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.options.map((option, optionIdx) => (
                                    <tr key={optionIdx}>
                                        <td className="text-left">{option.size}</td>
                                        <td className="text-right">{option.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center items-center self-center aspect-square w-full lg:w-1/3 md:w-2/3">
                        <Image
                            src={product.picture}
                            alt={product.name}
                            height={500}
                            width={500}
                            className="object-cover h-full w-full"
                        />
                    </div>
                </motion.div>
            ))}
            </div>
        </div>
    )
}