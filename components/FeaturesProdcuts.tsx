import Link from 'next/link';

const FeaturedProducts = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Our Products</h2>
                <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Border Security System (BSS)</h3>
                        <p className="mt-3 text-base text-gray-500">
                            A smart IOT device for enhanced border security surveillance.
                        </p>
                        <Link href="/products/bss" className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Learn more <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Smart Security Pole (SSP)</h3>
                        <p className="mt-3 text-base text-gray-500">
                            Multi-functional security solution for various applications.
                        </p>
                        <Link href="/products/ssp" className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Learn more <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;