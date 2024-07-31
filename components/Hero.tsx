const Hero = () => {
    return (
        <div className="relative bg-gray-900">
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src="/images/hero-bg.jpg" alt="Hero background" />
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Securing Borders, Empowering Nations
                </h1>
                <p className="mt-6 max-w-3xl text-xl text-gray-300">
                    Arcana Technology: Innovative solutions for modern border security challenges.
                </p>
            </div>
        </div>
    );
};

export default Hero;