import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Straks komen hier de secties: 'Over ons', 'Diensten', 'Projecten' */}
    </main>
  );
}
