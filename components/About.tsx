import React from "react";

const About = () => {
    return (
        <div className="bg-white mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8" id="about">
            <div className="mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900">About Arcana Technology</h1>
                <div className="mt-8 text-lg text-gray-500 space-y-6">
                    <p>
                        At Arcana Technology, our vision and mission are clear: to revolutionize our nation's border security. Our prime concern is to empower our borders by applying modern technology and new tactics to enhance security effectively and affordably. In an era of 5G and AI, where advancements like UPI have transformed our nation, we believe our border fencing should not be left behind.
                    </p>
                    <p>
                        India, the 4th most powerful military in the world, faces complex challenges across its 15,200 km of borders. From ceasefire violations and cross-border terrorism on the LOC with Pakistan to undefined borders and military standoffs on the LAC with China, the need for a modern solution is critical. Events like the tragic Pahalgam attack highlight the vulnerabilities of our current infrastructure. In response, my teammates and I have developed a game-changing solution: the BORDER SECURITY SYSTEM (BSS).
                    </p>
                    <p>
                        BSS is more than just a fence; it's a smart IoT device for comprehensive security surveillance. It is designed to be a cheaper, stronger, and smarter security solution, with the primary goal of saving the lives of our soldiers at the borders.
                    </p>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
                        <ul className="list-disc ml-5 mt-2 space-y-2">
                            <li>Founder and CEO: Vivek Pai & Krishna</li>
                            <li>CO-Founders: Parikshith M & Anush N</li>
                        </ul>
                    </div>
                    <p>
                        We would like to acknowledge our gratitude to each and everyone for their guidance and constant support. Special thanks go to our mentor – Mr. Vivek Pai.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
