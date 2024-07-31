import Link from 'next/link';

const ProductSection = () => {
  return (
    <section id="products" className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Our Products</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow shadow-slate-900">
            <h3 className="text-2xl font-bold mb-4">Border Security System (BSS)</h3>
            <p className="mb-4">A smart IOT device for enhanced border security surveillance.</p>
            <Link href="/#bss" className="text-blue-600 font-bold hover:underline">Learn More</Link>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow shadow-slate-900">
            <h3 className="text-2xl font-bold mb-4">Smart Security Pole (SSP)</h3>
            <p className="mb-4">Multi-functional security solution for various applications.</p>
            <Link href="/#ssp" className="text-blue-600 font-bold hover:underline">Learn More</Link>
          </div>
      </div>
    </section>
  );
};

export default ProductSection;