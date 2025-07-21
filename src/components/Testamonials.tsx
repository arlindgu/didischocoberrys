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

    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="flex items-center overflow-hidden mt-16">
            <motion.div
                className="flex gap-4 items-center"
                animate={{ 
                    x: [0, -((300 + 16) * testimonials.length)] // 300px card width + 16px gap
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: testimonials.length * 3, // Adjust speed here
                    ease: "linear"
                }}
            >
                {duplicatedTestimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="text-brand-700 bg-brand-50 rounded-4xl p-4 text-center min-w-[300px] max-w-[300px]"
                    >
                        {testimonial}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}