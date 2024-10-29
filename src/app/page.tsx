import { HeroSection } from "@/components/hero";

export default function Home() {
  return (
    <main className="pt-16 text-white bg-repeat" style={{ backgroundImage: 'url("bg.png")' }}>
      <div className="px-8">
        <HeroSection/>
      </div>
    </main>
  );
}
