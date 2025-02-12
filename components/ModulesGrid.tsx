"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Module {
    name: string;
    description: string;
    icon: React.ReactElement<any>;
}

interface ModulesGridProps {
    title: string;
    modules: Module[];
}

const ModulesGrid: React.FC<ModulesGridProps> = ({ title, modules }) => {
    return (
        <div className="px-4 max-w-7xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-4xl pb-6 text-center font-bold text-white relative z-10"
            >
                {title}
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {modules.map((module, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.3,
                            delay: index * 0.03,
                            ease: "easeOut"
                        }}
                        whileHover={{ 
                            y: -2,
                            transition: { duration: 0.2 }
                        }}
                        className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
                    >
                        <div className="flex items-start gap-3">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="flex-shrink-0 text-red-400 text-xl"
                            >
                                {React.cloneElement(module.icon, {
                                    className: 'w-6 h-6 transition-transform duration-300'
                                })}
                            </motion.div>
                            
                            <div className="flex flex-col min-w-0">
                                <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base break-words">
                                    {module.name}
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm line-clamp-3 break-words">
                                    {module.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ModulesGrid;