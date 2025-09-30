---
title: Home
client_logos:
  - name: "Customer 1"
    logo: "/images/logos/customer-1.png"
  - name: "Customer 2"
    logo: "/images/logos/customer-2.png"
  - name: "Customer 3"
    logo: "/images/logos/customer-3.png"
  - name: "Customer 4"
    logo: "/images/logos/customer-4.png"
  - name: "Customer 5"
    logo: "/images/logos/customer-5.png"
testimonials:
  - name: "John Smith"
    title: "CTO at TechStartup"
    avatar: "/images/testimonial-1.svg"
    quote: "We built our SaaS website in record time. The performance is incredible, and our users love the modern, clean design."
  - name: "Sarah Johnson"
    title: "Founder at WebFlow"
    avatar: "/images/testimonial-1.svg"
    quote: "The combination of Hugo and TailwindCSS delivers lightning-fast performance. Our website loads instantly, which has significantly improved our conversion rates."
  - name: "Michael Chen"
    title: "Lead Developer at CloudTech"
    avatar: "/images/testimonial-1.svg"
    quote: "This theme made it easy to create a professional SaaS website. The build times are incredibly fast, and the code is clean and maintainable."
---

{{< hero 
    headline="Build Your SaaS Website"
    sub_headline="Create stunning, responsive websites that load instantly. Built with Hugo and TailwindCSS for maximum performance and flexibility."
    primary_button_text="Get Started Free"
    primary_button_url="#"
    secondary_button_text="View Demo"
    secondary_button_url="#"
    hero_image="/images/hero-dashboard2.jpg"
    gradient-from="#dbeafe"
    gradient-to="#f3e8ff"
    gradient-angle="180"
>}}

{{< client-logos animate="true" >}}

{{< video-showcase 
    title="Nossos Templates de Vídeo" 
    description="Passe o mouse sobre um template para ver a animação. Clique para começar a usar." 
>}}

    {{< video-item 
        src="/videos/template-intro.mp4" 
        poster="/images/posters/template-intro-poster.jpg" 
        title="Intro Corporativa" 
        description="Abertura limpa e profissional para seus vídeos."
        link="/templates/intro-corporativa/" 
    >}}

    {{< video-item 
        src="/videos/template-social.mp4" 
        poster="/images/posters/template-social-poster.jpg" 
        title="Post para Redes Sociais" 
        description="Template dinâmico otimizado para stories e feeds."
        link="/templates/post-social/" 
    >}}

    {{< video-more-mask
        src="/videos/template-lower-third.mp4" 
        poster="/images/posters/template-lower-third-poster.jpg" 
        title="" 
        link="/templates/"
    >}}

{{< /video-showcase >}}

{{< testimonials 
    title="Trusted by Modern Web Teams"
    description="See how teams are building better websites with our theme."
    animate="true"
    background-color="#f1f5f9"
>}}


{{< pricing-table-1 >}}
{
    "title": "Designed for business teams like yours",
    "description": "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    "plans": [
        {
            "name": "Starter",
            "price": "29",
            "description": "Best option for personal use & for your next project.",
            "features": [
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 1 developer",
                "Premium support: 6 months",
                "Free updates: 6 months"
            ],
            "button": {
                "text": "Get started",
                "url": "#"
            }
        },
        {
            "name": "Company",
            "price": "99",
            "description": "Relevant for multiple users, extended & premium support.",
            "featured": true,
            "features": [
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 10 developers",
                "Premium support: 24 months",
                "Free updates: 24 months"
            ],
            "button": {
                "text": "Get started",
                "url": "#"
            }
        },
        {
            "name": "Enterprise",
            "price": "499",
            "description": "Best for large scale uses and extended redistribution rights.",
            "features": [
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 100+ developers",
                "Premium support: 36 months",
                "Free updates: 36 months"
            ],
            "button": {
                "text": "Get started",
                "url": "#"
            }
        }
    ]
}
{{< /pricing-table-1 >}}

<div class="mt-16"></div>

{{< pricing-table-2 >}}
{
    "title": "Alternative Pricing Options",
    "description": "Choose a plan that best suits your business needs with our flexible pricing options.",
    "plans": [
        {
            "name": "Basic",
            "price": "19",
            "description": "Perfect for freelancers and solo developers.",
            "features": [
                "Core features included",
                "Community support",
                "Team size: 1 developer",
                "Basic analytics",
                "Monthly updates"
            ],
            "button": {
                "text": "Choose Basic",
                "url": "#"
            }
        },
        {
            "name": "Professional",
            "price": "79",
            "description": "Ideal for growing development teams.",
            "featured": true,
            "features": [
                "All Basic features",
                "Priority support",
                "Team size: up to 5 developers",
                "Advanced analytics",
                "CI/CD integration"
            ],
            "button": {
                "text": "Choose Pro",
                "url": "#"
            }
        },
        {
            "name": "Business",
            "price": "299",
            "description": "For large organizations and enterprises.",
            "features": [
                "All Pro features",
                "24/7 dedicated support",
                "Unlimited team size",
                "Custom integrations",
                "SLA guarantee"
            ],
            "button": {
                "text": "Choose Business",
                "url": "#"
            }
        }
    ]
}
{{< /pricing-table-2 >}}

{{< faq >}}
{
    "title": "Common Questions",
    "description": "Find answers to frequently asked questions about our pricing plans and features.",
    "questions": [
        {
            "question": "What type of payment do you accept?",
            "answer": "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment providers."
        },
        {
            "question": "Do you offer custom pricing for larger teams?",
            "answer": "Yes! If you have specific needs or a larger team, please contact our sales team for custom pricing tailored to your requirements."
        },
        {
            "question": "What's included in the free updates?",
            "answer": "Free updates include all new features, improvements, and bug fixes released during your subscription period. You'll always have access to the latest version."
        },
        {
            "question": "What kind of support is included?",
            "answer": "All plans include technical support, with varying response times based on your plan level. Enterprise customers get priority support with dedicated account managers."
        },
        {
            "question": "Can I upgrade or downgrade my plan?",
            "answer": "Yes, you can change your plan at any time. When upgrading, you'll be prorated for the remainder of your billing period. When downgrading, changes take effect at the next billing cycle."
        }
    ]
}
{{< /faq >}}