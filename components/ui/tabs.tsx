"use client";

import React, { useState } from 'react';

interface TabItem {
    label: string;
    content: React.ReactNode[]; // Update to accept an array of React nodes
}

interface TabProps {
    tabs: TabItem[];
}

export function Tab({ tabs }: TabProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="flex space-x-4 tabButton py-5 justify-center">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${index === activeTab
                            ? 'border-b-2 border-accent-color text-accent-color'
                            : 'text-base text-white'
                            } focus:outline-none uppercase text-base font-normal px-5`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabContainer flex pt-7">
                {tabs[activeTab].content.map(item => (
                    
                    <div className="tabCol w-1/3 p-4" key={item.key}>
                        <a href="#">
                            <canvas width="300" height="200" className="bg-slate-400 block w-full h-auto"></canvas>
                            {item.text}
                        </a>
                       
                    </div>
                   
                ))}
            </div>
        </div>
    );
}