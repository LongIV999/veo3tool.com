import React from 'react';
import { motion } from 'framer-motion';

const PricingCard: React.FC<{
    tier: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    cta: string;
    featured?: boolean;
    delay: number;
    badge?: string;
}> = ({ tier, price, period, description, features, cta, featured, delay, badge }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        data-featured={featured ? "true" : "false"}
        className={`relative h-full flex flex-col p-8 rounded-3xl transition-all duration-500 overflow-hidden group
            ${featured
                ? 'glass-card border-transparent bg-white/5 shadow-[0_0_40px_rgba(99,102,241,0.2)]'
                : 'glass-card border-white/5 hover:border-white/10 hover:bg-white/5'
            }`}
    >
        {featured && (
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-clip-border border border-transparent p-[1px] [-webkit-mask-image:linear-gradient(white,white)] [-webkit-mask-content-box:content-box,linear-gradient(white,white)]" style={{ maskComposite: 'exclude' }}>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-ai-purple to-transparent animate-border-beam opacity-80" />
                </div>
            </div>
        )}

        {badge && (
            <div className="absolute top-0 right-0 p-4">
                <span className="bg-gradient-to-r from-ai-purple to-aurora-magenta text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-ai-purple/20">
                    {badge}
                </span>
            </div>
        )}

        <div className="mb-8 relative z-10">
            <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${featured ? 'text-ai-glow' : 'text-slate-400'}`}>
                {tier}
            </h3>
            <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-heading font-bold text-white tracking-tight">{price}</span>
                {period && <span className="text-sm text-slate-400 font-body">{period}</span>}
            </div>
            {description && (
                <p className="text-slate-400 text-sm leading-relaxed min-h-[40px] font-body">
                    {description}
                </p>
            )}
        </div>

        <ul className="space-y-4 mb-8 flex-grow relative z-10">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className={`mt-0.5 flex-shrink-0 ${feature.startsWith('✓') ? 'text-aurora-cyan' : 'text-slate-600'}`}>
                        {feature.startsWith('✗') ? (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </span>
                    <span className="font-body text-slate-300">{feature.replace(/^[✓✗] /, '')}</span>
                </li>
            ))}
        </ul>

        <button className={`w-full py-4 px-6 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-xl relative overflow-hidden group/btn font-heading
            ${featured
                ? 'bg-ai-purple text-white shadow-lg shadow-ai-purple/25 hover:shadow-ai-purple/50'
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20'
            }`}>
            {featured && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            )}
            <span className="relative z-10">{cta.replace('_', ' ')}</span>
        </button>
    </motion.div>
);

const Pricing: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-aurora-dark" id="pricing">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-aurora-purple/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-aurora-cyan/10 blur-[100px] rounded-full opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Simple, Transparent <span className="gradient-text-aurora">Pricing</span>
                    </h2>

                    <div className="flex justify-center items-center gap-4 mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">MONTHLY</span>
                        <div className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer border border-white/5 p-1 transition-colors hover:bg-white/15">
                            <div className="w-4 h-4 bg-ai-purple rounded-full shadow-lg shadow-ai-purple/50" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white uppercase tracking-widest">ANNUAL</span>
                            <span className="text-[10px] font-bold text-ai-purple bg-ai-purple/10 border border-ai-purple/20 px-2 py-0.5 rounded-full">-20%</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <PricingCard
                        tier="GUEST"
                        price="$0"
                        description="For trying out the basic protocols."
                        features={[
                            "✓ 250 AI Actions",
                            "✗ No Private Zones",
                            "✓ Community Support"
                        ]}
                        cta="START_FREE"
                        delay={0}
                    />
                    <PricingCard
                        tier="CREATOR"
                        price="$29"
                        period="/mo"
                        description="Perfect for individual creators."
                        features={[
                            "✓ Unlimited Actions",
                            "✓ 5 Private Zones",
                            "✓ Priority Support",
                            "✓ 4K Generation"
                        ]}
                        cta="GET_STARTED"
                        delay={0.1}
                    />
                    <PricingCard
                        tier="PRO"
                        price="$99"
                        period="/mo"
                        badge="MOST POPULAR"
                        featured={true}
                        description="For power users and small teams."
                        features={[
                            "✓ Everything in Creator",
                            "✓ Advanced AI Agents",
                            "✓ Unlimited Zones",
                            "✓ API Access",
                            "✓ 24/7 Support"
                        ]}
                        cta="UPGRADE_NOW"
                        delay={0.2}
                    />
                    <PricingCard
                        tier="ENTERPRISE"
                        price="Custom"
                        description="Dedicated resources for scaling."
                        features={[
                            "✓ Full Customization",
                            "✓ SLA & SSO",
                            "✓ Dedicated Success Mgr",
                            "✓ Custom Models"
                        ]}
                        cta="CONTACT_SALES"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
