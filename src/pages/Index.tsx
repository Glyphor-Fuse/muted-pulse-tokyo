import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import TechnicalDetails from "@/components/TechnicalDetails";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background relative pb-10">
      <Navbar />
      <Hero />
      <ProductGrid />
      <TechnicalDetails />
      <Footer />
      <Ticker />
    </main>
  );
}