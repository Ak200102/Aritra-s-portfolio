import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    

   
    useGSAP(() =>{
        gsap.fromTo(
            sectionRef.current, 
            { opacity: 0}, 
            { opacity: 1, duration: 1.5}
        );
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
         projects.forEach((card, index) =>{
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
    });
    },[])
  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
            
            <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2Ref}>
                    {/* <div className='image-wrapper bg-[#ffefdb]'> */}
                        <div className='flex items-center justify-items-center pt-6 hover:scale-110 transition-all duration-500 ease-in-out'>
                            <a href='https://cloudcart-frontend.vercel.app/' target='_blank'>
                            <img src='/images/project1.png' alt='CloudCart Admin'/>
                            </a>
                        </div>
                    {/* </div> */}
                    <h2>On-Demand Purchasing Made Simple, User-Friendly E-Commerce website called CloudCart.</h2>
                </div>

                <div className='project' ref={project3Ref}>
                    {/* <div className='image-wrapper bg-[#ffe7eb]'> */}
                        <div className='flex items-center justify-items-center pt-6 hover:scale-110 transition-all duration-500 ease-in-out'>
                            <a href='https://ai-counsellor-one.vercel.app/' target='_blank'>
                            <img src='/images/project4.png' alt='Ai-counsellor'/>
                            </a>
                        </div>
                    {/* </div> */}
                    <h2>An advance Ai powered,User friendly,responsive study abroad counsellor.</h2>
                </div>
            </div>

            {/*Right */}
            <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2Ref}>
                    {/* <div className='image-wrapper bg-[#ffefdb]'> */}
                        <div className='flex items-center justify-items-center pt-6 hover:scale-110 transition-all duration-500 ease-in-out'>
                            <a href='https://cloudcart-admin.vercel.app/' target='_blank'>
                            <img src='/images/project2.png' alt='CloudCart Admin'/>
                            </a>
                        </div>
                    {/* </div> */}
                    <h2>A simple,powerful and User Friendly Imformative Admin Control Website Called CloudCart Admin.</h2>
                </div>

                <div className='project' ref={project3Ref}>
                    {/* <div className='image-wrapper bg-[#ffe7eb]'> */}
                        <div className='flex items-center justify-items-center pt-6 hover:scale-110 transition-all duration-500 ease-in-out'>
                            <a href='https://virtual-assistant-lilac.vercel.app/' target='_blank'>
                            <img src='/images/project3.png' alt='NewsHacks'/>
                            </a>
                        </div>
                    {/* </div> */}
                    <h2>A simple smart, userfriendly,responsive virtual voice assistant.</h2>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
