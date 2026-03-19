import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/image.png"
        alt="bg"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">

        {/* TOP IMAGE */}
        <Image
          src="/image.png"
          alt="top"
          width={120}
          height={120}
          className="rounded-full max-h-32 max-w-32 object-cover shadow-2xl border-4 border-white/30"
        />

        <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
          Işık Nida <br className="md:hidden"/> & <br className="md:hidden"/> Yunus Özdemir
          <span className="block text-pink-400 mt-4 text-3xl md:text-5xl">
            2026 Barışma
          </span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-4">

          <Link
            href={`https://wa.me/905304294656?text=Evet`}
            target="_blank"
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Evet 💖
          </Link>

          <Link
            href={`https://wa.me/905304294656?text=Kesinlikle`}
            target="_blank"
            className="px-10 py-4 rounded-2xl bg-white/10 border border-white/30 text-white font-semibold text-lg backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            Kesinlikle 😌
          </Link>

        </div>

      </div>

      {/* Footer Text */}
      <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-xs tracking-wider opacity-60">
        Bir Taha Tan Ürünüdür
      </p>

    </div>
  );
}