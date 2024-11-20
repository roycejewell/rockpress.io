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
import ComparisonTable from "../components/table"
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
                title={'On-Demand Wordpress Development for Marketing Teams.'}
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
                header="Hire A Rockstar Dev. Without Even Hiring."
                copy="World class dev work with same day turnaround time and none of the in-house hiring risk."
                image={{ src: "/Frame8.png", alt: "Our Expertise" }}
                isImageLeft={false}
            />

            <Alternator
                header="Simple Monthly Fee.<br/>No Contracts.</br>Pause Anytime."
                copy="Simplicity only. Predictable cost. No lockins. No agency back-office bullshit."
                image={{ src: "/Frame9.png", alt: "Cutting-Edge Technology" }}
                isImageLeft={true}
            />

            <Alternator
                header="Start Immediately.<br/>Chat Whenever.</br>Launch Often."
                copy="We join you on slack, and any project management tools you work with. Calls on an as-needed basis."
                image={{ src: "/Frame10.png", alt: "Dedicated Support" }}
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

            <ComparisonTable />


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
                        name: "Tom",
                        title: "Creative Director",
                        testimonial: "We've evolved from startup to industry leader, and Rockpress has been by our side through all of it. Their work has been integral to Uplight's marketing and brand success.",
                        image: "/tom.jpeg",
                        logo: "/uplight.svg"
                    },
                    {
                        name: "John",
                        title: "Head of Content",
                        testimonial: "Total game changer for our web & content team. Rockpress's efficiency in handling high-volume projects makes it a no-brainer compared to training an in-house team.",
                        image: "/john.png",
                        logo: "/describely.svg"
                    }
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
                  price: "$9,995",
                  description: "/month",
                  listItems: [
                    "1 Task at a Time",
                    "Unlimited Requests",
                    "Avg 48 Hour Delivery",
                      "Unlimited Websites",
                      "24/7 Slack Support",
                      "Pause or Cancel Anytime"
                  ],
                  cta: { text: "Secure Your Spot", link: "#" },
                  secondaryCta: { text: "Book a Call", link: "#" },
                  icon: ``
                },
                {
                  header: "Pro",
                  price: "$11,995",
                  description: "/month",
                  listItems: [
                      "2 Tasks at a Time",
                      "Unlimited Requests",
                      "Avg 48 Hour Delivery",
                      "Unlimited Websites",
                      "24/7 Slack Support",
                      "Pause or Cancel Anytime"
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
                        question: "What types of development work do you handle?",
                        answer: "Everything WordPress for marketing teams: new site builds, rebuilds, ongoing maintenance, landing pages, microsites, integrations, optimization, and daily updates. Basically, if it's WordPress and marketing-related, we handle it."
                    },
                    {
                        question: "Do you build fresh sites or handle rebuilds?",
                        answer: "Both. We can build from scratch or rebuild your existing WordPress site. Either way, we guarantee a 30-day turnaround for standard marketing sites. 60 days for more complex builds. After launch, we handle all ongoing maintenance and new page builds."
                    },
                    {
                        question: "What's your tech stack?",
                        answer: "We build custom WordPress sites using modern development practices. That means custom themes with TailwindCSS, Advanced Custom Fields, and clean WordPress core. No page builders, no Elementor, no bloat. Everything's hosted on WPEngine for enterprise-grade performance."
                    },
                    {
                        question: "Why don't you use page builders like Elementor?",
                        answer: "Page builders add unnecessary bloat, slow down your site, and create technical debt. Our custom builds are faster, cleaner, and more maintainable. Plus, they're actually easier for marketing teams to update once set up properly."
                    },
                    {
                        question: "Can we keep our existing WordPress setup?",
                        answer: "Yes, but we'll likely recommend cleaning it up over time. We'll maintain your current site while gradually improving performance and removing unnecessary plugins and bloat."
                    },
                    {
                        question: "What's the difference between Standard and Pro?",
                        answer: "Standard ($9,995/mo) handles one task at a time. Pro ($11,995/mo) lets you run two tasks simultaneously. When teams scale up and need more bandwidth, they typically upgrade to Pro. Both plans include unlimited websites and requests."
                    },
                    {
                        question: "What if I need multiple websites?",
                        answer: "Both our Standard and Pro plans include unlimited websites. Most of our clients run multiple sites or microsites through us. If you find yourself needing faster turnaround as you add sites, you can upgrade from Standard (one task at a time) to Pro (two tasks at a time)."
                    },
                    {
                        question: "What counts as a task?",
                        answer: "A task could be anything from a quick update to a full page build. We work on one task at a time (or two for Pro plans) to maintain quality and quick turnaround. If you regularly have multiple urgent priorities, the Pro plan might be a better fit."
                    },
                    {
                        question: "How fast do you actually deliver?",
                        answer: "Small updates same day. New pages 1-2 days. Full site builds 30 days. Pro plan clients can have two tasks running simultaneously, which can speed things up when you're pushing multiple projects."
                    },
                    {
                        question: "How do you handle urgent fixes?",
                        answer: "We're available 24/7 on Slack. Critical fixes get immediate attention. No jumping through agency hoops or waiting for freelancers to respond."
                    },
                    {
                        question: "What about staging and QA processes?",
                        answer: "Every change gets tested on a staging site first. You can review and request changes before anything goes live. We follow this process whether it's a small update or a full site launch."
                    },
                    {
                        question: "What happens if we need changes or revisions?",
                        answer: "Revisions are included. We keep refining until you're happy with the result. Our goal is to nail your requirements, not nickel-and-dime you for changes."
                    },
                    {
                        question: "Do you work with designers or handle design changes?",
                        answer: "For new pages, we work best with Figma designs. We integrate seamlessly with your designers - whether they're in-house, agency, or freelance. For existing pages with strong design foundations, we can handle simple updates and changes without needing new designs - things like content updates, layout tweaks, and component reuse."
                    },
                    {
                        question: "How do you handle multiple stakeholders/teams?",
                        answer: "We're used to working with marketing teams, designers, and other stakeholders. We can join multiple Slack channels, handle different approval workflows, and adapt to your internal processes."
                    },
                    {
                        question: "Do you work with our existing tools?",
                        answer: "Yep. We join your Slack, project management tools, and workflow. We can integrate with any marketing tools you're using - analytics, CRM, marketing automation, whatever you need."
                    },
                    {
                        question: "What kind of integrations do you handle?",
                        answer: "Any marketing-related integrations: analytics (GA4, etc.), CRMs (Salesforce, HubSpot), marketing automation tools (Marketo, Pardot), heat mapping, form tools, chat widgets - you name it. We make sure everything plays nicely together."
                    },
                    {
                        question: "Do you handle forms and lead capture?",
                        answer: "Yes, we integrate with all major form tools and CRMs. Whether it's simple contact forms or complex multi-step lead capture, we make sure your data flows correctly to your marketing stack."
                    },
                    {
                        question: "Do you handle CRO and A/B testing?",
                        answer: "We implement A/B tests and optimize for conversion, but you drive the strategy. We've helped clients like Rytr increase conversion by 7% (+18,450 conversions in one month)."
                    },
                    {
                        question: "What about security and maintenance?",
                        answer: "All sites are hosted on WPEngine with automated backups, updates, and enterprise-grade security. We monitor 24/7 and fix issues before you notice them."
                    },
                    {
                        question: "Do you handle content updates?",
                        answer: "Yes, we handle all content updates - whether it's new pages, content refreshes, or bulk updates across multiple sites. Plus, we structure everything so you can easily make updates yourself. The CMS is intuitive, and we're happy to train your team on how to use it effectively."
                    },
                    {
                        question: "How do we work together day-to-day?",
                        answer: "Drop tasks in Slack or your project management tool. We pick them up immediately, show you progress within 24-48 hours, and refine until you're happy. Simple as that."
                    },
                    {
                        question: "What if we need to pause or cancel?",
                        answer: "You can pause or cancel anytime - no contracts or commitments. We earn your business month by month."
                    },
                    {
                        question: "Can you scale with us as we grow?",
                        answer: "Absolutely. Start with our Standard plan (one task at a time) and upgrade to Pro (two simultaneous tasks) when you need more bandwidth. Most clients scale up when their marketing operations expand. Either way, you get unlimited websites and requests."
                    },
                    {
                        question: "What happens if we need to move to a different solution later?",
                        answer: "Your site is built with clean, standard WordPress practices. No vendor lock-in. If you ever need to move to a different team or solution, everything will work as expected."
                    },
                    {
                        question: "What's not included in the service?",
                        answer: "We don't do design work, content writing, or complex web applications. We focus on what we do best: building and maintaining marketing WordPress sites."
                    }
                ]}
            />

            <div className="fixed z-[222] bottom-0 bg-blur w-full p-[15px] bg-black lg:hidden">
                <button
                    data-tally-open="nWYM8e"
                    data-tally-width="450"
                    data-tally-layout="modal"
                    data-tally-hide-title="1"
                    className="button h4 block !w-full !text-center"
                >
                    Book a call
                </button>
            </div>
        </Layout>
    )

}

export default Landing

