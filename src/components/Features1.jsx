import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import dashboard from "../assets/images/dashboard.jpg";

export const Features1 = () => {
  return (
    <section
      className='w-full bg-customDarkBg2 mb-8'
      id='features'>
      <motion.div
        initial={{ opacity: 0, y: 10, zIndex: 30 }}
        animate={{ opacity: 1, y: 0, zIndex: 30 }}
        transition={{ duration: 0.5, delay: 0.15 }}>
        <div className='w-screen flex flex-col justify-center items-center z-30 mb-20'>
          <h1 className='mt-16 lg:mt-36 mb-8 text-4xl lg:text-7xl text-white font-bold text-left mx-10 lg:mx-0'>
            Fast Forward Your Compliance.
          </h1>
          <img
            src={dashboard}
            alt='Dashboard'
            className='w-4/5 2xl:w-[1200px] mx-auto rounded-xl custom-border-gray hero-dashboard-border-gradient'
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <div className='flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16'>
          <div className='w-full lg:w-1/2 mb-12 lg:mb-0'>
            <div className='mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset'>
              <span className='custom-block-subtitle'>Embrace Ai</span>
              <h2 className='mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title'>
                Check Criteria in Minutes, not Hours.
              </h2>
              <p className='mb-10 text-customGrayText leading-loose'>
                Easily check your documents for compliance with our powerful
                AI-driven platform. ComplAi is the only solution you need to
                streamline your processes and positively impact your efficiency.
              </p>
              <ul className='mb-6 text-white'>
                <li className='mb-4 flex'>
                  <CheckArrowIcon />
                  <span>Fast Document Scan</span>
                </li>
                <li className='mb-4 flex'>
                  <CheckArrowIcon />
                  <span>Advanced predictions</span>
                </li>
                <li className='mb-4 flex'>
                  <CheckArrowIcon />
                  <span>Seamless Compliance</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8'>
            <div className='mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0'>
              <div className='mb-4 py-3 pl-3 pr-2 rounded'>
                <img
                  src='https://res.cloudinary.com/djr22sgp3/image/upload/v1689591557/chart-dynamic-color_pxxtx5.png'
                  alt='f1'
                  className='rounded-xl custom-border-gray mx-auto sm:mx-unset bg-customDarkBg3'
                />
              </div>
              <div className='py-3 pl-3 pr-2 rounded '>
                <img
                  src='https://res.cloudinary.com/djr22sgp3/image/upload/v1689591580/chat-dynamic-color_jzy7tb.png'
                  alt='f2'
                  className='rounded-xl  custom-border-gray mx-auto sm:mx-unset bg-customDarkBg3'
                />
              </div>
            </div>
            <div className='w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block'>
              <div className='mb-4 py-3 pl-3 pr-2 rounded-lg '>
                <img
                  src='https://res.cloudinary.com/djr22sgp3/image/upload/v1687888055/copy-dynamic-color_tjfi12.png'
                  alt='f3'
                  className='rounded-xl  custom-border-gray bg-customDarkBg3'
                />
              </div>
              <div className='py-3 pl-3 pr-2 rounded-lg '>
                <img
                  src='https://res.cloudinary.com/djr22sgp3/image/upload/v1689591603/folder-dynamic-color_sdm4bm.png'
                  alt='f4'
                  className='rounded-xl  custom-border-gray bg-customDarkBg3'
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
