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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        data-featured={featured ? "true" : "false"}
        className="plan-card h-full flex flex-col relative"
    >
        {badge && (
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                <span className="bg-orange-accent text-dark-primary text-[10px] font-bold px-2 py-1 uppercase tracking-widest">{badge}</span>
            </div>
        )}

        <div className="mb-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">{tier}</h3>
            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-heading font-bold text-white">{price}</span>
                {period && <span className="text-xs text-mid-gray font-mono">{period}</span>}
            </div>
            {description && <p className="text-mid-gray/80 text-sm font-mono leading-relaxed min-h-[40px]">{description}</p>}
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-mid-gray font-mono">
                    <span className={`mt-0.5 ${feature.startsWith('✓') ? 'text-orange-accent' : 'text-mid-gray/50'}`}>
                        {feature.startsWith('✗') ? '✕' : '✓'}
                    </span>
                    <span className="text-white/90">{feature.replace(/^[✓✗] /, '')}</span>
                </li>
            ))}
        </ul>

        <button className={`w-full py-3 px-4 text-xs font-bold tracking-widest uppercase transition-all duration-200 border ${featured
            ? 'bg-orange-accent border-orange-accent text-dark-primary hover:bg-white hover:border-white'
            : 'bg-transparent border-white/20 text-white hover:border-white hover:bg-white/5'
            }`}>
            {cta}
        </button>
    </motion.div>
);

const Pricing: React.FC = () => {
    return (
        <section className="py-24 bg-dark-primary relative" id="pricing">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <span className="text-xs font-bold text-mid-gray uppercase tracking-widest">MONTHLY</span>
                        <div className="w-8 h-4 bg-light-primary rounded-full relative cursor-pointer">
                            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-dark-primary rounded-full shadow-sm" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-light-primary uppercase tracking-widest">ANNUAL</span>
                            <span className="text-[10px] font-bold text-orange-accent border border-orange-accent px-1 py-0.5 rounded">-20%</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PricingCard
                        tier="GUEST"
                        price="$0"
                        description="Basic Protocols"
                        features={[
                            "✓ 250 Leads",
                            "✗ No Breakouts"
                        ]}
                        cta="SELECT_TIER"
                        delay={0}
                    />
                    <PricingCard
                        tier="USER"
                        price="$29"
                        period="/mo"
                        description=""
                        features={[
                            "✓ Unrestricted Events",
                            "✓ 5 Breakout Zones"
                        ]}
                        cta="SELECT_TIER"
                        delay={0.1}
                    />
                    <PricingCard
                        tier="ADMIN"
                        price="$99"
                        period="/mo"
                        badge="RECOMMENDED"
                        featured={true}
                        description=""
                        features={[
                            "✓ Everything in User",
                            "✓ Advanced AI Agents",
                            "✓ Unlimited Zones"
                        ]}
                        cta="UPGRADE_NOW"
                        delay={0.2}
                    />
                    <PricingCard
                        tier="ROOT"
                        price="Custom"
                        description="Dedicated resources for scaling."
                        features={[
                            "✓ Full Customization",
                            "✓ SLA & SSO"
                        ]}
                        cta="CONTACT_SYSADMIN"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
