const Hero = () => {
    return (
        <div className="relative bg-gray-900 h-[90vh] mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src="/images/hero-bg.jpg" alt="Hero background" />
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <div className="relative mx-auto py-24 pr-4 sm:py-32 sm:px-6 lg:px-8 flex items-end h-[80vh]">
                <div className="absolute bottom-8 left-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        EMPOWERING BORDERS AND PROTECTING NATIONS
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                        Introducing BSS: A smart, cost-effective, solar-powered IoT surveillance system designed to modernize border security.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
