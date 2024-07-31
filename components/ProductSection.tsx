import Link from 'next/link';

const ProductSection = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Border Security System (BSS)</h3>
            <p className="mb-4">A smart IOT device for enhanced border security surveillance.</p>
            <Link href="/bss" className="text-blue-600 font-bold">Learn More</Link>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Smart Security Pole (SSP)</h3>
            <p className="mb-4">Multi-functional security solution for various applications.</p>
            <Link href="/ssp" className="text-blue-600 font-bold">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;