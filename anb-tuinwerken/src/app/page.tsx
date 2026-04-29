import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About"; // Vergeet deze niet

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
    </main>
  );
}