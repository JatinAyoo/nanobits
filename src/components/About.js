import React from 'react';

const About = () => {
  return (
    <div className='py-12'>
      <div className='container'>
        <div className='flex items-center flex-wrap'>
          <div className="w-[41.67%] px-3">
            <h2 className="font-bold text-2xl md:text-[40px] leading-[50px]">Careers in AI Around the Globe</h2>
            <p className="text-xl font-light leading-7 mt-3 mb-3 md:mb-4">
              Stay ahead in your career by exploring AI job opportunities and finding the perfect role for you. The
              opportunities in AI are vast and varied, providing a dynamic landscape for innovation and growth. Don’t miss
              out on your chance to be part of the future.
            </p>
            <button className="bg-primary rounded-md text-white px-3 py-1.5 hidden lg:block"href="/newsletter">Find AI Jobs</button>
          </div>
          <div className=" md:w-auto mx-auto flex justify-center w-full">
            <div className="w-full leading-6 max-w-[620px] shadow-cardshadow rounded-md border-cardborder border-[1px] overflow-hidden">
              <img
                src="https://cdn.thenanobits.com/illustrations/jobs-card.webp"
                alt="Jobs Preview"
                width="100%"
                height="auto"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
