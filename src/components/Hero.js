import React from "react";
import Card from "./Card";

const cardData = [
  {
    src: 'https://cdn.thenanobits.com/illustrations/jobs.webp',
    alt: 'AI Job Board',
    title: 'AI Job board',
    description: 'One place to find all new AI Jobs in India and across the globe.',
    link: 'https://thenanobits.com/jobs',
  },
  {
    src: 'https://cdn.thenanobits.com/illustrations/news.webp',
    alt: 'Bite Size News Insights',
    title: 'Bite Size News Insights',
    description: 'News snippets for people who are always on the go. Crisp. Concise. Complete.',
    link: 'https://thenanobits.com/news',
  },
  {
    src: 'https://cdn.thenanobits.com/illustrations/tools.webp',
    alt: 'Tools in AI',
    title: 'Tools in AI',
    description: 'Tools you can trust to simplify your personal & professional tasks.',
    link: 'https://thenanobits.com/tools',
  },
  {
    src: 'https://cdn.thenanobits.com/illustrations/newsletter.webp',
    alt: 'AI Newsletter',
    title: 'AI Newsletter',
    description: 'Stay Ahead with all that’s happening in the AI Sphere: Analytical, Engaging Summaries',
    link: 'https://nanobits.beehiiv.com/',
  },
];

const Hero = () => {
  return (
    <div className="bg-custom-radial">
      <div className="container text-center text-white py-[48px]">
        <a
          href="https://www.producthunt.com/posts/nanobits?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-nanobits"
          
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=456644&amp;theme=light"
            alt="Nanobits - Unlock the future with 3x AI insights a week | Product Hunt"
            class="mx-auto w-[200px] h-12"
          />
        </a>

        <h1 class="text-[64px] leading-[76.5px] font-bold mx-auto max-w-screen-md mt-0.5 mb-2">
          Experience the Power of Artificial Intelligence
        </h1>

        <p class="text-xl mx-auto max-w-[960px] leading-[30px] font-thin mb-4">
          Get the latest AI advancements from around the globe in concise,
          easy-to-understand pieces. Stay informed in just a few minutes a day.
        </p>
      </div>

      <div className="container pb-3">
      <div className="flex flex-wrap mx-2">
      {cardData.map((card, index) => (
        <Card
          key={index}
          src={card.src}
          alt={card.alt}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
      </div>
    </div>
  );
};

export default Hero;
