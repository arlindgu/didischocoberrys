import Image from 'next/image';

export default function AboutPage() {
    return (
<div className="flex flex-col items-start justify-center">
  <h1 className="text-4xl text-chocolate-950 mb-4">About Us</h1>
  <p className="text-chocolate-900 max-w-2xl mb-2">
    What started as a small kitchen hobby quickly turned into a true passion. One day, Didi dipped a few strawberries in smooth chocolate for a friend's birthday – decorated with care and a sprinkle of creativity. The response was overwhelming.
  </p>
  <p className="text-chocolate-900 max-w-2xl mb-2">
    Since then, she’s been creating homemade chocolate-covered strawberries for special moments like birthdays, Valentine's Day, or just because. Each berry is handcrafted with love and attention to detail – fresh, homemade, and from the heart.
  </p>
  <p className="text-chocolate-900 max-w-2xl">
    At Didis ChocoBerrys, it’s not just about chocolate and fruit – it’s about joy, flavor, and sharing little moments of happiness.
  </p>
  <br />
  <Image
    src="/signature.png"
    alt="Chocolate and Strawberries"
    width={200}
    height={200}
    className="mt-8"
    />
</div>
    );
}