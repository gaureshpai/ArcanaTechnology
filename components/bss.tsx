import React from "react";

const Bss = () => {
    return (
        <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8" id="bss">
            <h1 className="text-3xl font-extrabold text-gray-900">Border Security System (BSS)</h1>
            <div className="mt-6 text-lg text-gray-500 space-y-6">
                <p>
                    The BSS is a comprehensive security solution consisting of a pole and an electrified metal fence. The poles are divided into sectors, each equipped with 360-degree AI cameras and powered by solar panels. For robust connectivity, the poles are linked with optic fibre cables, and the system is both Bluetooth and Wi-Fi enabled.
                </p>
                <p>
                    It can be monitored and controlled via an encrypted mobile application called "BSS COMPANION," ensuring that only authorized defense personnel can access it. This project presents a cost-effective, solar-powered, and IoT-based surveillance system designed to monitor our national borders with utmost precision.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mt-8">Advanced Sensor Integration</h2>
                <p>
                    Each pole is a technological powerhouse, equipped with:
                </p>
                <ul className="list-disc ml-8 space-y-2 mt-4">
                    <li>LIDAR and SONAR for detecting underground movements and tunnels.</li>
                    <li>PIR motion sensors and distance sensors.</li>
                    <li>A 360-degree AI camera for complete visual coverage.</li>
                    <li>GPS module for precise location tracking.</li>
                    <li>Temperature and humidity sensors for environmental monitoring.</li>
                    <li>An IoT controller (like Raspberry Pi or ESP boards) for data processing.</li>
                </ul>
                <p>
                    All components are powered by solar panels and backed with a lithium-ion battery. Data is transmitted in real-time via 5G LTE or optic fibre cables to a centralized dashboard.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mt-8">Key Features & Benefits</h2>
                <ul className="list-disc ml-8 space-y-2 mt-4">
                    <li><strong>24/7 Surveillance:</strong> The modular, weatherproof poles offer continuous surveillance with features like motion detection, object recognition, real-time alerts, and edge AI processing.</li>
                    <li><strong>Reduced Human Patrol:</strong> The system significantly reduces the need for human patrols, provides rapid alerts, and operates independently in remote and challenging terrains.</li>
                    <li><strong>Intelligent Alerts:</strong> If anyone tries to break or cut the electrified fence, an alert is immediately sent to the app. The poles are interconnected via Bluetooth, so if any pole stops working or is damaged, a nearby pole will detect the issue and send an alert.</li>
                    <li><strong>Cost Reduction:</strong> With the Indian government spending $3.3 billion on border maintenance, BSS offers a significant cost reduction while enhancing protection.</li>
                    <li><strong>Enhanced Soldier Safety:</strong> Our plan is not to replace soldiers but to reduce their burden, allowing them to rest while being better protected.</li>
                    <li><strong>Scalability:</strong> Beyond border security, this solution can be extended to civilian use cases like forest protection, agriculture, and infrastructure safety.</li>
                </ul>
                <p className="font-semibold text-gray-700 mt-8">
                    With the support of organizations like DRDO, we can implement this smart protection in our borders. As the saying goes, “PREVENTION IS BETTER THAN CURE.”
                </p>
                <p>
                    You can view the 3D design of the BSS here: <a href="https://www.tinkercad.com/things/hnt4QVpLSNV-bss?sharecode=buoQAkULEdM-THl1gEd1hMmGiIa7lfF6hnFylOHb7bo" className="text-blue-600 hover:underline">BSS 3D Design</a>
                </p>
            </div>
        </div>
    );
};

export default Bss;
