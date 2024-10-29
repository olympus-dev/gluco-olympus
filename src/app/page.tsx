import { HeroSection } from "@/components/hero";

export default function Home() {
  return (
    <main
      className="pt-16 text-white bg-cover bg-fixed"
      style={{ backgroundImage: 'url("bg.png")' }}
    >
      <div className="px-8 max-w-6xl mx-auto lg:px-0 relative drop-shadow-2xl">
        <HeroSection />
      </div>

      <div className="z-10">

      </div>
    </main>
  );
}
