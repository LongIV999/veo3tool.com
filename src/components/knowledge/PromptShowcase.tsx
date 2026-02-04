import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { promptRecipes } from '../../data/knowledgeData';
import { DocumentIcon } from '../ui/icons';

const PromptShowcase: React.FC = () => {
    const [selectedSeries, setSelectedSeries] = useState<'Style Transfers' | 'Professional Polish'>('Style Transfers');

    const filteredRecipes = promptRecipes.filter(recipe => recipe.series === selectedSeries);

    const copyPrompt = (text: string) => {
        navigator.clipboard.writeText(text);
        // Could add toast here
    };

    return (
        <div className="prompt-showcase-container">
            {/* Series Toggles */}
            <div className="flex justify-center mb-12 gap-4">
                <button
                    onClick={() => setSelectedSeries('Style Transfers')}
                    className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${selectedSeries === 'Style Transfers'
                        ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]'
                        : 'bg-white/5 text-neutral-400 hover:bg-white/10'
                        }`}
                >
                    Style Transfers
                </button>
                <button
                    onClick={() => setSelectedSeries('Professional Polish')}
                    className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${selectedSeries === 'Professional Polish'
                        ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                        : 'bg-white/5 text-neutral-400 hover:bg-white/10'
                        }`}
                >
                    Professional Polish
                </button>
            </div>

            {/* Recipe Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredRecipes.map((recipe) => (
                        <motion.div
                            key={recipe.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group relative bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all hover:-translate-y-1"
                        >
                            {/* Visual Hook (Placeholder) */}
                            <div className="aspect-video bg-neutral-800 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
                                <div className="absolute inset-0 flex items-center justify-center text-neutral-600 opacity-30 group-hover:scale-105 transition-transform duration-500">
                                    <span className="text-4xl">🖼️</span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-white font-bold text-lg mb-1">{recipe.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {recipe.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <p className="text-neutral-400 text-sm mb-4 line-clamp-2 h-10">{recipe.description}</p>

                                <div className="bg-black/50 rounded-lg p-3 border border-white/5 mb-4 group-hover:border-purple-500/20 transition-colors">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">Secret Sauce</span>
                                        <button
                                            onClick={() => copyPrompt(recipe.prompt)}
                                            className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                                        >
                                            <DocumentIcon className="w-3 h-3" /> Copy
                                        </button>
                                    </div>
                                    <code className="block text-xs text-green-400 font-mono break-words">
                                        {recipe.prompt}
                                    </code>
                                </div>

                                <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 border-t border-white/5">
                                    <span>Best for: <span className="text-neutral-300">{recipe.bestFor}</span></span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PromptShowcase;
