import React from 'react'

const NewsCard = ({src,alt,credit,title,description,tags}) => {
  return (
    <div className='h-full relative flex text-wrap bg-white flex-col border rounded-md border-cardborder'>
        <div className='relative overflow-hidden h-[150px] w-full'>
            <img loading='lazy' src={src} alt={alt} className='w-full h-[150px] object-cover rounded-t-md'/>
            <div className='leading-5 text-[11px] bottom-0 right-0 absolute pt-[1px] px-[16px] text-muted/100 bg-white opacity-[0.75]'>Image Credits: {credit}</div>
        </div>
        <div className='flex-1 p-4'>
          <p className='mb-[2px] flex justify-between items-center mt-0'>
            <span className='text-sm leading-5 text-muted/70'>{title}</span>
            <span className='text-muted/70 text-right leading-5 ml-1 flex-shrink-0'>
            <svg className='inline mr-1' height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g>
                            <path fill="currentColor" d="M21 7a.8.8 0 0 0 0-.21.6.6 0 0 0-.05-.17 1 1 0 0 0-.09-.14.8.8 0 0 0-.14-.17l-.12-.07a.7.7 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34 4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0z"></path>
                        </g>
                    </svg>
              <span>Trending</span>
            </span>
          </p>
          <h2 className='text-2xl mb-5 font-medium leading-7 block text-wrap text-left'>
            <a href='/' >{description}</a>
          </h2>
          <p className='mb-0 block text-left'>
              {tags.map((tag,index)=>(
                <a key={index} className='border rounded font-normal inline-block py-1 px-2 mr-2 text-customblue mb-2'>{tag}</a>
              ))}
          </p>
        </div>
    </div>
  )
}

export default NewsCard