import React from 'react';
import NewsCard from './NewsCard';

const Features = () => {
  const newsCards = [{
    src : "https://cdn.thenanobits.com/thumbnails/R0mDDDbVrNXqj1nR4WqX8IHSvdwu39pEszUXH2fW.webp",
    alt : "smallest.ai launches AWAAZ, a multi-lingual, multi-accent text-to-speech model for Indian languages, boasting advanced features like high Mean Opinion Score and 10+ accents",
    title : "Analytics India Magazine",
    credits : "AIM",
    tags : ["AI Applications","AI Startups","India"],
    description : "smallest.ai launches AWAAZ, a multi-lingual, multi-accent text-to-speech model for Indian languages, boasting advanced features like high Mean Opinion Score and 10+ accents"
  },
  {
    src : "https://cdn.thenanobits.com/thumbnails/0iTxcvTRMLyTpgrl7iNTGKomYePq1SHJXoiupVgR.webp",
    alt : "Facebook owner Meta seeks to train AI model on European data as it faces privacy concerns",
    title : "Associated Press",
    credits : "Meta",
    tags : ["Data Security and Privacy","Meta"],
    description : "Facebook owner Meta seeks to train AI model on European data as it faces privacy concerns"
  },
  {
    src : "https://cdn.thenanobits.com/thumbnails/LaKllpoDGgooiUAkBu0BZSy522BBnxVLGFPWgZbo.png",
    alt : "Apple integrates ChatGPT into Siri and other apps on iOS, iPadOS, and macOS, enhancing user interactions with AI-powered responses and content creation tools, debuting in late 2024",
    title : "TechCrunch",
    credits : "Apple",
    tags : ["Apple","ChatGpt","OpenAI"],
    description : "Apple integrates ChatGPT into Siri and other apps on iOS, iPadOS, and macOS, enhancing user interactions with AI-powered responses and content creation tools, debuting in late 2024"
  }]
  return (
    <>
    <div className="py-12">
      <div className="container mx-auto text-center">
        <h2 className='font-bold text-center custom-font-size:max-w-md md:text-[2.5rem] md:leading-[27px] mb-5'>Bite-Sized AI News</h2>
        <p className='mx-auto text-center max-w-[960px] text-xl font-light mb-4'>We bring the latest advancements in AI, from around
                the globe, and deliver it in concise, easy-to-understand pieces. No information overload! Now you can stay
                informed in just few minutes a day.</p>

        <div className='flex flex-row flex-wrap'>
          
            {newsCards.map((news,index)=>(
              <div className='mb-4 md:w-1/2 lg:w-1/3 px-3'>
              <NewsCard
              key={index}
              src={news.src}
              alt={news.alt}
              title={news.title}
              tags={news.tags}
              description={news.description}
              credit={news.credits}/>
              </div> 
            ))}
          
        </div>
        <div className='text-center'>
        <button className="bg-primary rounded-md text-white px-3 py-1.5 mx-auto mt-2"href="/newsletter">Read AI News</button>
        </div>
      </div>
    </div>
    <div className='py-12 bg-blackbg text-white text-center'>
            <div className='mx-auto my-12 py-12 max-w-[960px]'>
              <h2 className='font-bold text-[3.5rem] leading-[1.2] px-3'>
                Unlocking tomorrow with AI Today: Dive Deep into the World of Artificial Intelligence from a Single Spot
            </h2>
            </div>
    </div>
    <div className='text-white bg-custom-radial2'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap px-3 text-wrap'>
            <div className='py-12 my-12  md:w-[41.67%] flex-shrink-0 flex-grow-0 flex-basis-auto'>
              <h2 className='font-bold xl:text-[2.5rem] custom-font-size:max-w-xl mb-2 leading-[1.2]'>
                Tools in the world in Artificial Intelligence
              </h2>
              <p className='text-[1.25rem] font-light mb-4 '>
              Tools you can trust to simplify your personal & professional tasks.
              </p>
              <button className="bg-primary rounded-md text-white px-3 py-1.5 mx-auto"href="/newsletter">Explore AI Tools</button>
            </div>
            
            <div  className='md:w-[58.33%] flex-shrink-0 flex-grow-0 flex-basis-auto bg-cover bg-center' style={{ backgroundImage: 'url(https://cdn.thenanobits.com/illustrations/tool-slide.webp)' }}>

            </div>
        </div>
      </div>
    </div>

    <div className='py-12'>
      <div className='container'>
        <div className='flex flex-wrap items-center '>
          <div className='md:mb-4 md:w-[41.67%] px-3'>
            <h2 className='font-bold custom-font-size'>
            AI Newsletter - Your Knowledge Hub
            </h2>
            <p className='text-xl font-light mb-4 leading-[1.5]'>Stay updated with the latest trends and breakthroughs in artificial intelligence by
                        subscribing to our AI Newsletter.
                        Each issue is packed with insightful articles, expert opinions, and cutting-edge research, designed
                        to keep you informed and ahead in this rapidly evolving field.</p>
                        <button className="bg-primary rounded-md text-white px-3 py-1.5"href="/newsletter">Subscribe To Newsletter</button>
          </div>
          <div className='md:w-[58.33%] px-3'>
            <div className='max-w-[518px] mx-auto shadow-cardshadow border-[1px] rounded-md '>
            <img className='rounded-t-md' loading="lazy" src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/fd940632-2094-4318-91ec-d61ce72afa85/image.png" alt="Stock Market's Crystal Ball 🔮 : How AI is Predicting the Future of Finance 🤖 💰️" width="100%" height="auto" />
            <div className='p-4'>
              <div className='mb-2 custom-font-size3'>
              <a href="https://nanobits.beehiiv.com/p/stock-markets-crystal-ball-ai-predicting-future-finance" className='font-medium'>Stock Market's Crystal Ball 🔮 : How AI is Predicting the Future of Finance 🤖 💰️</a>
              </div>
              <p class="mb-0">Author: Paresh Khandelwal</p>
            </div>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Features;
