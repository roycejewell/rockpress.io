import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Alternator from "../components/alternator"
import Outcome from "../components/outcome"
import Testimonials from "../components/testimonials"
import FAQs from "../components/faqs"
import CTA from "../components/cta"
import Convenience from "../components/convenience"
import Features from "../components/features"
import Pricing from "../components/pricing"
const slugify = require(`slugify`);



const Landing = ({ pageContext }) => {

    return (
        <Layout pageContext={pageContext}>
            <Seo
                description={pageContext.intro}
                title={pageContext.title}
                metaImage={pageContext.site.domain + pageContext.site.metaImage}
                favicon={pageContext.site.domain + pageContext.site.favicon}
                slug={pageContext.site.domain + '/' + pageContext.slug}
                datePublished={pageContext.site.published}
                dateModified={pageContext.site.modified}
            />
            <Hero
                title={pageContext.title}
                copy={pageContext.intro}
                cta={{ text: "Secure Your Spot", url: "#pricing" }}
                clients={[
                    { 
                        logo: { src: "/uplight.svg", alt: "Company 1" },
                        screenshot: "/uplight-screenshot.png"
                    },
                    { 
                        logo: { src: "/rytr.svg", alt: "Company 2" },
                        screenshot: "/rytr-screenshot.png"
                    },
                    { 
                        logo: { src: "/describely.svg", alt: "Company 3" },
                        screenshot: "/describely-screenshot.png"
                    },
                    {
                        logo: { src: "/copysmith.svg", alt: "Company 1" },
                        screenshot: "/copysmith-screenshot.png"
                    },
                ]}
            />

            <Alternator
                header="Hire A Rockstar Developer. Without Actually Hiring."
                copy="World class dev work with same day turnaround time and none of the in-house hiring risk."
                image={{ src: "/feature.svg", alt: "Our Expertise" }}
                isImageLeft={false}
            />

            <Alternator
                header="Simple Monthly Fee.<br/>No Contracts.</br>Pause Anytime."
                copy="Predictable cost, no agency back-office bullshit."
                image={{ src: "/monthly.svg", alt: "Cutting-Edge Technology" }}
                isImageLeft={true}
            />

            <Alternator
                header="Start Immediately.<br/>Chat Whenever.</br>Launch Often."
                copy="We join you on slack, and any project management tools you work with. Calls on an as-needed basis."
                image={{ src: "/convo.svg", alt: "Dedicated Support" }}
                isImageLeft={false}
            />
            <div className="max-w-5xl mx-auto px-[25px] lg:px-[0px] py-[75px]">
                <h2 className="h2 mb-[50px] mx-auto text-center">Some Recent Wins.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
                    <Outcome>
                        <img className="h-[30px] mb-[10px]" src="/rytr.svg" alt="Rytr" />
                        <span className="h3 !leading-[45px] !font-light text-stone-400">We saw a <strong className="text-lime-400 font-bold">7%</strong> increase in conversion after <strong className="text-lime-400 font-bold">A/B testing</strong> Rytr's homepage. This brought <strong className="text-lime-400 font-bold">+18,450</strong> more homepage conversions in a <strong className="text-lime-400 font-bold">single month</strong>.</span>
                    </Outcome>
                    <Outcome>
                        <img className="h-[30px] mb-[10px]" src="/uplight.svg" alt="Uplight" />
                        <span className="h3 !leading-[45px] !font-light text-stone-400">We developed a library of over <strong className="text-lime-400 font-bold">670 gated assets</strong>, which touched <strong className="text-lime-400 font-bold">1200+</strong> propspects, and influenced over <strong className="text-lime-400 font-bold">$10.3m</strong> in revenue for Uplight.</span>
                    </Outcome> 
                </div>
            </div>

            <Features
                header="Everything You Need to Grow."
                copy="From page builds, to daily maintenance, we ensure your site runs smoothly, looks great, and drives results."
                featureGroups={[
                    {
                        groupHeader: "Websites",
                        features: [
                            { header: "Custom Themes", copy: "Unique designs tailored to your brand", icon: { src: "wordpress.svg", alt: "Custom Theme" } },
                            { header: "Landing Pages", copy: "High-converting pages for campaigns", icon: { src: "jira.svg", alt: "Landing Pages" } },
                            { header: "Knowledgebases", copy: "Organized information resources", icon: { src: "jira.svg", alt: "Knowledgebases" } },
                            { header: "Microsites", copy: "Focused sites for specific campaigns", icon: { src: "jira.svg", alt: "Microsites" } },
                        ]
                    },
                    {
                        groupHeader: "Content Management",
                        features: [
                            { header: "Content Management", copy: "Easy-to-use systems for content", icon: { src: "jira.svg", alt: "Content Management" } },
                            { header: "Gated Content", copy: "Lead generation through valuable content", icon: { src: "jira.svg", alt: "Gated Content" } },
                            { header: "Asset Downloads", copy: "Secure file sharing solutions", icon: { src: "jira.svg", alt: "Asset Downloads" } },
                            { header: "Webinars & Events", copy: "Online event management systems", icon: { src: "jira.svg", alt: "Webinars & Events" } },
                        ]
                    },
                    {
                        groupHeader: "Integrations",
                        features: [
                            { header: "Marketing Integrations", copy: "Connect with your marketing tools", icon: { src: "jira.svg", alt: "Marketing Integrations" } },
                            { header: "Analytics Integrations", copy: "Data-driven insights for your site", icon: { src: "jira.svg", alt: "Analytics Integrations" } },
                            { header: "Sales Integrations", copy: "Connect WordPress with your CRM", icon: { src: "jira.svg", alt: "Sales Integrations" } },
                            { header: "SEO Integrations", copy: "Optimize your site for search engines", icon: { src: "jira.svg", alt: "SEO Integrations" } },
                        ]
                    },
                    {
                        groupHeader: "Optimization",
                        features: [
                            { header: "A/B Testing", copy: "Improve conversions with data-driven experiments", icon: { src: "ab.svg", alt: "A/B Testing" } },
                            { header: "Conversion Rate Optimization", copy: "Maximize your site's ability to turn visitors into customers", icon: { src: "cro.svg", alt: "Conversion Optimization" } },
                            { header: "Lighthouse Score", copy: "Enhance site performance for better user experience", icon: { src: "pagespeed.svg", alt: "Speed Optimization" } },
                            { header: "Search Engine Optimization", copy: "Boost your search engine rankings and visibility", icon: { src: "google.svg", alt: "SEO Optimization" } },
                        ]
                    },
                    {
                        groupHeader: "Maintenance",
                        features: [
                            { header: "Security", copy: "Protect your site from threats", icon: { src: "jira.svg", alt: "Security" } },
                            { header: "Backups & Updates", copy: "Keep your site secure and up-to-date with nightly updates", icon: { src: "wpengine.svg", alt: "Nightly Updates" } },
                            { header: "24/7 Support", copy: "Ongoing care for your WordPress site", icon: { src: "slack.png", alt: "support" } },
                            { header: "99% Uptime", copy: "Ensure your site is always available with 99% uptime guarantee", icon: { src: "cloudflare.svg", alt: "99% Uptime" } },
                        ]
                    }
                ]}
            />

            <Convenience
                header="Workflow Made Simple."
                copy="Our streamlined and adaptable workflow allows us to seamlessly integrate with your team's operations."
                items={[
                    { header: "Submit Tasks", copy: "We work within whatever project management and communication tools your team uses.", icon: ["/trello.svg", "monday.svg", "asana.svg", "jira.svg", "/slack.png"] },
                    { header: "We Get To Work", copy: "Chat with us anytime. 24/7 availability on Slack with calls as needed.", icon: "/keyboard.svg" },
                    { header: "Initial Delivery", copy: "You'll have something to look at pretty quickly. Same day turnaround for smaller tasks, and 1-5 days for the larger ones.", icon: "/draft.svg" },
                    { header: "QA & Updates", copy: "Review staged drafts for quality assurance, and request changes if necessary. We address all feedback until you're 100% happy.", icon: "/bug.svg" },
                    { header: "Launch", copy: "We push changes live after final approval, and you get a summary of what was changed.", icon: "/launch.svg" },
                    { header: "Rinse & Repeat", copy: "Keep feeding tasks to us, and we'll keep being your rockstar developers.", icon: "/cycle.svg" },
                ]}
                image={{ src: "/feature.svg", alt: "WordPress Made Easy" }}
            />

            <Testimonials
                header="Let the People Speak."
                testimonials={[
                    {
                        name: "Tom Marquis",
                        title: "Creative Director",
                        testimonial: "We've evolved from startup to industry leader, and Rockpress has been by our side through all of it. Their work has been integral to Uplight's marketing and brand success.",
                        image: "/tom.jpeg",
                        logo: "/uplight.svg"
                    },
                    {
                        name: "John Porrini",
                        title: "Head of Content",
                        testimonial: "Total game changer for our web & content team. Rockpress's efficiency in handling high-volume projects makes it a no-brainer compared to training an in-house team.",
                        image: "/john.png",
                        logo: "/describely.svg"
                    },
                    {
                        name: "Matt Hurley",
                        title: "General Manager",
                        testimonial: "Nothing compares to Rockpress in terms of speed, skill, and budget predictability. They have scaled with Rytr seamlessly.",
                        image: "/hurley.png",
                        logo: "/rytr.svg"
                    },
                ]}
            />

            <Pricing
              title="Secure Your Spot Now."
              copy="Or book a 15-minute intro call to learn more about how Rockpress works."
              ctaText="Book a call"    
              ctaLink="https://calendly.com/rockpress/30min"
              pricingOptions={[
                {
                  header: "Standard",
                  price: "$7,495",
                  description: "One Website. Pause or cancel anytime.",
                  listItems: [
                      "1 Website",
                      "Unlimited Requests",
                      "Avg 48 Hour Delivery",
                      "24/7 Slack Support",
                    "Calls as Needed"
                  ],
                  cta: { text: "Secure Your Spot", link: "#" },
                  secondaryCta: { text: "Book a Call", link: "#" },
                  icon: ``
                },
                {
                  header: "Pro",
                  price: "$9,995",
                  description: "Multiple Websites. Pause or cancel anytime.",
                  listItems: [
                      "Multiple Websites",
                      "Unlimited Requests",
                      "Avg 48 Hour Delivery",
                      "24/7 Slack Support",
                      "Calls as Needed"
                  ],
                  cta: { text: "Secure Your Spot", link: "#" },
                  secondaryCta: { text: "Book a Call", link: "#" },
                  icon: `<svg width="28" height="28" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.1666 37.6667H67.3333L29.8333 91.8333V54.3333H0.666626L38.1666 0.166664V37.6667Z" fill="currentColor"/>
                  </svg>`                
                },
              ]}
            />     

            <FAQs
                header="Questions? We'll Answer Them."
                faqs={[
                    {
                        question: "How is your subscription model more efficient than hiring an in-house team?",
                        answer: "We eliminate the time-consuming process of hiring, onboarding, and managing an in-house development team. Our developers integrate seamlessly with your workflow, providing same-day turnaround for smaller tasks and reliable ongoing support, without the long-term commitment or overhead costs."
                    },
                    {
                        question: "What if I have more than one website or project?",
                        answer: "Our Standard plan covers one website, but we can accommodate additional projects on a case-by-case basis or upgrade you to a custom plan that scales with your needs. Just let us know your requirements, and we’ll work with you on a tailored solution."
                    },
                    {
                        question: "How does your team handle high-priority or emergency tasks?",
                        answer: "We offer 24/7 availability via Slack, allowing you to submit urgent tasks anytime. Our team is accustomed to handling high-priority requests and can prioritize tasks based on your business’s immediate needs."
                    },
                    {
                        question: "What kind of turnaround time can I expect for larger projects?",
                        answer: "While smaller tasks are completed within 24 to 48 hours, larger projects such as complex page builds or complex integrations typically take 1 to 5 days. Our process includes constant communication, so you'll always know where your project stands."
                    },
                    {
                        question: "How does Rockpress integrate with our existing project management tools?",
                        answer: "We adapt to your current setup, whether it’s Slack, Trello, Asana, or another platform. This seamless integration ensures we work within your established processes without disrupting your team’s workflow."
                    },
                    {
                        question: "How does your team ensure security and maintenance of our WordPress site?",
                        answer: "Security is a top priority for us. We handle regular updates, backups, and proactive security measures to ensure your site remains secure and runs smoothly with minimal downtime. Our maintenance package includes 24/7 monitoring and support, so issues are resolved before they escalate."
                    },
                    {
                        question: "Can you help with conversion rate optimization (CRO) and A/B testing?",
                        answer: "Absolutely. We have extensive experience optimizing sites for performance and conversions. We regularly conduct A/B testing, Lighthouse score optimization, and other performance enhancements to ensure your website not only functions well but drives results."
                    },
                    {
                        question: "What level of customization do you offer for themes and integrations?",
                        answer: "Whether you need a completely custom theme, advanced integrations with third-party marketing tools, or custom plugins, we have the expertise to deliver. We work with you to build a solution that meets your exact requirements, tailored specifically to your business."
                    },
                    {
                        question: "How do I submit tasks, and what does your typical workflow look like?",
                        answer: "Submitting tasks is easy—just use Slack or your preferred project management tool to communicate directly with our team. Once tasks are submitted, we get to work immediately, providing initial deliverables quickly, and continue to refine the work until you’re completely satisfied."
                    },
                    {
                        question: "How do you handle scaling as our business grows?",
                        answer: "We specialize in scaling alongside our clients. Whether your website needs increase in complexity or volume, our team can adjust the level of service to accommodate your growth, providing the same high level of support and delivery speed as you expand."
                    }
                ]}
            />

            <CTA
                header="Hire A Rockstar Developer. Without Actually Hiring."
                copy="World class dev work with same day turnaround time and none of the in-house hiring risk."
                ctaText="Secure Your Spot"
            />
        </Layout>
    )

}

export default Landing

