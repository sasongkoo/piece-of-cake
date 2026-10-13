import { Events } from "@/components/Events";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { OrderForm } from "@/components/OrderForm";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <Events />
        <OrderForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
