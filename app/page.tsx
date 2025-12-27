import Image from "next/image";
import Hero from "./components/Hero";
import Order from "./components/Order";
import Location from "./components/Location";
import OurStory from "./components/OurStory";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
    <Hero />
    <Order />
    <Location />
    <OurStory />
    <ContactUs />
    </>
  );
}
