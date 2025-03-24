import React from 'react'
import { BiCircle, BiStar } from 'react-icons/bi'

function LatestWork() {

  const projects = [
    {
      projectImg: 'https://makeawebsitehub.com/wp-content/uploads/2017/03/missthrifty-1024x544.jpg',
      projectCode: 'https://github.com/tiwarisaurbh/blog',
      projectView: 'https://github.com/tiwarisaurbh/blog',
      projectTitle: 'Blog Application',
      projectDescription: 'A full-featured blog application built with MERN Stack. Users can create, read, update, and delete blog posts. Features include user authentication, rich text editing, and responsive design.'
    },
    {
      projectImg: 'https://colorlib.com/wp/wp-content/uploads/sites/2/jobboard2-free-template.jpg',
      projectCode: 'https://github.com/tiwarisaurbh/job-website-pgkrm',
      projectView: 'https://job-seeker-pgrkam-weiq.vercel.app/',
      projectTitle: 'Job Board',
      projectDescription: 'A modern job board platform where employers can post job listings and job seekers can search and apply for positions. Built with React.js and features advanced filtering and search capabilities.'
    },
    {
      projectImg: 'https://i.ytimg.com/vi/yl0s76H0oMc/maxresdefault.jpg',
      projectCode: 'https://github.com/tiwarisaurbh/portfolio',
      projectView: 'https://github.com/tiwarisaurbh/portfolio',
      projectTitle: 'Portfolio',
      projectDescription: 'A fully responsive portfolio built with React.js and Tailwind CSS. Showcases my latest projects and includes a section highlighting my skills.'
    },
    {
      projectImg: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      projectCode: 'https://github.com/tiwarisaurbh/crrypto-tracker',
      projectView: 'https://github.com/tiwarisaurbh/crrypto-tracker',
      projectTitle: 'Crypto Currency Tracker',
      projectDescription: 'A real-time cryptocurrency tracking application that displays current prices, market trends, and historical data for various cryptocurrencies. Built with React.js and integrated with crypto APIs.'
    },
  ];

  return (
    <div id='latestwork' div className=' relative m-auto mt-10 mb-2'>
      <div className='m-auto text-center relative'>
        <h1 className='text-3xl md:text-5xl font-semibold py-7'>Latest Work</h1>
        <BiStar className=' animate-spin text-2xl absolute bottom-0' />
      </div>
      <BiCircle className='text-5xl animate-pulse absolute bottom-0 right-10' />
      <BiCircle className='text-4xl animate-pulse absolute bottom-6 right-10' />

      <div className='h-full w-full xl:w-11/12 m-auto flex flex-wrap justify-between items-start ' >
        {
          projects.map((val, ind) => (
            <div key={ind} className='h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4 ' >
              <a href={val.projectView} className='h-[60%] w-full lg:h-60 lg:w-[80%] m-auto' >
                <img className='project h-[92%] w-11/12 m-auto duration-300 rounded-lg object-cover ' src={val.projectImg} />
              </a>
              <div className='h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2' >
                <h1 className='text-base font-semibold pb-1' >{val.projectTitle}</h1>
                <p>{val.projectDescription}</p>
                <div className='flex justify-start items-center my-2' >
                  <a href={val.projectCode} className='h-8 w-24 pt-1.5 text-sm text-center static z-10 bg-purple-700 btn rounded-full' >View Code</a>
                  <a href={val.projectView} className='h-8 w-24 pt-1.5 text-sm text-center static z-10 bg-purple-700 btn ml-2 rounded-full' >View Live</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LatestWork