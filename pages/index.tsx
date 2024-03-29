import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, } from "react-icons/ai"
import { useState } from "react";
import Image from "next/image";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import coding from "../public/coding.jpg";
import weather from "../public/weather.png"
import bomba from "../public/bomba.png"
import martin from "../public/martin.png"
import iko from "../public/iko.png"
import chloe from "../public/chloe-landing.png"
import colors from "../public/colors.png"
import cerc from "../public/cerc.png"
import arzet from "../public/arzet-home.png"
import autentik from "../public/autentik.png"
import easylight from "../public/easy-light.png"
import lupitahvac from "../public/lupita-hvac.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <>
        <Head>
          <title>Midwest Development</title>
          <meta name="description" content="Midwest Development Professional Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='bg-white text-black px-10 dark:bg-gray-900 dark:text-white md:px-20 lg:px-40'>
          <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons'>Midwest Development</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /></li>
                <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="mailto:midwestdev.work@gmail.com">Contact</a></li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Web Development Solutions</h2>
              <h3 className='text-2xl py-2 md:text-3xl'>Streamlined Design</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-xl mx-auto'>Providing freelance services for programming and web design needs. Feel free to contact for an estimate!</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a href="https://twitter.com/midwestdevwork" rel="noreferrer" target="_blank"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/douglasmcgillivray/" rel="noreferrer" target="_blank"><AiFillLinkedin /></a>
              <a href="https://www.youtube.com/@midwestdevelopment" rel="noreferrer" target="_blank"><AiFillYoutube /></a>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
              <Image alt='developer 3d avatar figure' src={coding} layout="fill" objectFit="cover" />
            </div>
          </section>

          <section>
            <div>
              <h3 className='text-3xl py-1'>Services We Offer</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>We specialize in custom web development for small businesses and startups. Whether you need a simple brochure website or a complex web application, we have the expertise to bring your ideas to life.</p>
            </div>
            <div className='lg:flex gap-10'>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:mx-auto">
                <Image alt='3d icon of mountains' className='mx-auto' src={design} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p className='py-2'>Creating elegant designs suited for your needs.</p>
                <h4 className='py-4 text-teal-600'>Design tools we use</h4>
                <p className='text-gray-800 dark:text-white py-1'>Figma</p>
                <p className='text-gray-800 dark:text-white py-1'>Photoshop</p>
                <p className='text-gray-800 dark:text-white py-1'>Illustrator</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:mx-auto">
                <Image alt='hashtag symbol' className='mx-auto' src={code} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Content Management System Integration</h3>
                <p className='py-2'>Organizing, updating and managing your content.</p>
                <h4 className='py-4 text-teal-600'>CMS tools we use</h4>
                <p className='text-gray-800 dark:text-white py-1'>Wordpress</p>
                <p className='text-gray-800 dark:text-white py-1'>Drupal</p>
                <p className='text-gray-800 dark:text-white py-1'>Sanity</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:mx-auto">
                <Image alt='thumbs up symbol' className='mx-auto' src={consulting} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Maintenance and Support</h3>
                <p className='py-2'>Our availability and service.</p>
                <h4 className='py-4 text-teal-600'>What type of support we provide.</h4>
                <p className='text-gray-800 dark:text-white py-1'>24 hour support</p>
                <p className='text-gray-800 dark:text-white py-1'>Contact via phone and email</p>
                <p className='text-gray-800 dark:text-white py-1'>One on one consultation</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>A selection of some of our products.</p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://josh-bomba.vercel.app/', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 1' src={bomba} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://youtu.be/l0uvNZiE43U', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 2' src={weather} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://martinkralovec.netlify.app/', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 3' src={martin} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://ikoseveta.com/', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 4' src={iko} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://fascinating-jalebi-848979.netlify.app/', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 5' src={chloe} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://mcgidoug.github.io/palette-creator/', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 6' src={colors} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://arzethomeimprovement.com/index.html', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 7' src={arzet} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://autentik.ch/', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 8' src={autentik} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://easy-light.ch/', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 9' src={easylight} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://lupitas-hvac.netlify.app/', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 10' src={lupitahvac} /></div>
              <div className='basis-1/5 flex-1 image-container' onClick={() => window.open('https://mcgidoug.github.io/il-common-core-cerc-creator/', "_blank")}><Image width={parseFloat('100%')} height={parseFloat('100%')} layout="responsive" className='rounded-lg object-cover shadow-lg' alt='portfolio image 11' src={cerc} /></div>
            </div>
          </section>
        </main>
      </>
    </div>
  )
}
