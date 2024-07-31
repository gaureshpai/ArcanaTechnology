import About from '@/components/About';
import Bss from '@/components/bss';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Ssp from '@/components/ssp';
import Section from '@/components/Section';

const Home = () => {
  return (
    <div>
      <Hero />
      <Section number="1" title="Products">
        <ProductSection />
      </Section>
      <Section number="2" title="About Us">
        <About />
      </Section>
      <Section number="3" title="BSS">
        <Bss />
      </Section>
      <Section number="4" title="SSP">
        <Ssp />
      </Section>
    </div>
  );
};

export default Home;
