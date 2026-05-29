import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HotJobs from "@/components/HotJobs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <HotJobs />
        <WhyChooseUs />
        <Destinations />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

