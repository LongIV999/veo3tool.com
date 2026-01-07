import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-primary text-light-primary/70 py-20 px-6 border-t border-mid-gray/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Product */}
                    <div className="space-y-6">
                        <h5 className="font-display font-bold text-fg-primary tracking-wider uppercase text-sm">Product</h5>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#features" className="hover:text-accent-orange transition-colors">Features</a></li>
                            <li><a href="#pricing" className="hover:text-accent-orange transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Changelog</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Roadmap</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Resources */}
                    <div className="space-y-6">
                        <h5 className="font-display font-bold text-fg-primary tracking-wider uppercase text-sm">Resources</h5>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Video Tutorials</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">API Docs</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Templates Library</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div className="space-y-6">
                        <h5 className="font-display font-bold text-fg-primary tracking-wider uppercase text-sm">Support</h5>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Contact Support</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Status Page</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Community Discord</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className="space-y-6">
                        <h5 className="font-display font-bold text-fg-primary tracking-wider uppercase text-sm">Company</h5>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-accent-orange transition-colors">About Long Best</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Affiliate Program</a></li>
                            <li><a href="#" className="hover:text-accent-orange transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xs uppercase tracking-widest text-fg-tertiary">
                        © 2025 Long Best AI. Made with ❤️ in Vietnam.
                    </div>
                    <div className="flex gap-6 text-xl text-fg-tertiary">
                        <a href="#" className="hover:text-accent-orange transition-colors" aria-label="Facebook">FB</a>
                        <a href="#" className="hover:text-accent-orange transition-colors" aria-label="YouTube">YT</a>
                        <a href="#" className="hover:text-accent-orange transition-colors" aria-label="TikTok">TT</a>
                        <a href="#" className="hover:text-accent-orange transition-colors" aria-label="Discord">DC</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
