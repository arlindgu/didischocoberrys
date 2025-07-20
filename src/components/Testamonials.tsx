import { motion } from "framer-motion"

export default function Testimonials() {

    const testimonials = [
        "Danke nomel sie het sich mega gfreut und sind au super fein gsi!",
        "bruuuutaaaal fein gsi! 😍😍 keis ish übrig bliibe.",
        "da ish doch guet zwüsse danke dir fürs brichte. mir hend gestern alli gesse und es ish so feeeein gsi würkli, ha dir voll vergesse kah shriebe. danke dir vielvieeel mal fürs mache, mach witter well du chash da so gueet mache 🤍 i wird zu 1000% namel bidir bstellee!!!",
        "dini erdbeeri sind superr, I danke dir nomel viel mol ❤️🥰",
        "Hoii liebs dankee viel mal ❤️ es sind scho ali gesse worde und sind mega fein gsi!",
        "Hee sie het emfall voll freud dra gha, isch megaa fein gsii und het wunderschön usgseh danke dir viel viel mol liebs 🩷🫶🏻",
        "heyy sie het sich mega kfreut und es ish mega fein ksi imfall i danke dir vo herzee liebs! 🩷",
        "Es isch mega, Erdbeeri richtig fein 😍",
        "Vielen dank nochmal 🙌🏻 hat super geschmeckt 👌🏻"
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-16 w-full">
            <h2 className="text-2xl font-bold mb-8">Was unsere Kunden sagen</h2>
            <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
            {testimonials.map((testimonial, index) => (
                <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25 * index, type: 'spring', stiffness: 100 }}
                key={index}
                className="self-center mx-auto"
                >
                <p className="text-brand-700 bg-white rounded-4xl p-4 text-center">{testimonial}</p>
                </motion.div>
            ))}
            </div>
        </div>
    );
}