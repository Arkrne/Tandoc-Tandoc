import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualEngine from "@/components/DualEngine";
import Competencies from "@/components/Competencies";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import HoverFooter from "@/components/HoverFooter";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main className="bg-surface pt-[82px] md:pt-[114px]">
      <Navbar />
      <Hero />
      <Divider />
      <DualEngine />
      <Divider />
      <Competencies />
      <Divider />
      <Leadership />
      <Divider />
      <Contact />
      <HoverFooter />
    </main>
  );
}
