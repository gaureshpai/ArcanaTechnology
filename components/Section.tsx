import React from 'react';

interface SectionProps {
    number: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ number, title, children }) => {
    return (
        <div className="py-8">
            <div className="flex items-center mb-4">
                <h2 className="ml-4 text-base font-bold">[{number}] {title} ___</h2>
            </div>  
            {children}
        </div>
    );
};

export default Section;
