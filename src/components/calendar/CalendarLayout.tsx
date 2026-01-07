import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar as CalendarIcon, FileText, CheckSquare } from 'lucide-react';

interface CalendarLayoutProps {
    children: React.ReactNode;
}

const CalendarLayout = ({ children }: CalendarLayoutProps) => {
    return (
        <div className="flex h-screen bg-bg-primary text-text-primary overflow-hidden font-mono">
            {/* Sidebar */}
            <aside className="w-16 md:w-64 border-r border-[#333] flex flex-col bg-[#0a0a0a]">
                <div className="p-4 border-b border-[#333] flex items-center gap-2">
                    <Link to="/" className="text-sm hover:text-accent-orange transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden md:inline">Back</span>
                    </Link>
                </div>

                <div className="p-4">
                    <h2 className="hidden md:block text-xs uppercase tracking-widest text-text-secondary mb-4">Tools</h2>
                    <nav className="space-y-2">
                        <button className="w-full flex items-center gap-3 p-2 hover:bg-[#1a1a1a] rounded transition-colors text-left text-accent-orange bg-[#1a1a1a]">
                            <CalendarIcon className="w-4 h-4" />
                            <span className="hidden md:inline">Calendar</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-2 hover:bg-[#1a1a1a] rounded transition-colors text-left text-text-secondary">
                            <CheckSquare className="w-4 h-4" />
                            <span className="hidden md:inline">Tasks</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-2 hover:bg-[#1a1a1a] rounded transition-colors text-left text-text-secondary">
                            <FileText className="w-4 h-4" />
                            <span className="hidden md:inline">Notes</span>
                        </button>
                    </nav>
                </div>

                <div className="mt-auto p-4 border-t border-[#333]">
                    <div className="text-xs text-text-secondary hidden md:block">
                        LongBest OS v1.0
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-bg-primary relative">
                {children}
            </main>
        </div>
    );
};

export default CalendarLayout;
