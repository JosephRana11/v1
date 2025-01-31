import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    i: number;
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    renderTitle?: boolean;
    stack? : string[]
  }
  export const ProjectCard: React.FC<ProjectCardProps> = ({
    i,
    title,
    description,
    src,
    url,
    color,
    progress,
    range,
    targetScale,
    renderTitle = false,
    stack,
  }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'start start'],
    });
  
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
  
    return (
      <div
        ref={container}
        className='h-screen flex items-center justify-center sticky top-0'
      >
        {
          renderTitle && (
            <h1 className='absolute top-10 left-0 custom-subheading'>Projects</h1>)
        }
        <motion.div
          style={{
            backgroundColor: color,
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className={`flex flex-col relative -top-[25%] h-[450px] w-[80%] rounded-md p-10 origin-top`}
        >
          <h2 className='text-2xl text-center font-semibold'>{title}</h2>
          <div className={`flex h-full mt-5 gap-10 overflow-clip`}>
            <div className={`w-[40%] relative top-[10%]`}>
              <p className='text-sm'>{description}</p>
              <p className='flex flex-wrap gap-2 mt-2 w-full overflow-auto'>
              {
                stack?.map((item , index)=> <span className='text-xs border border-gray-200 rounded-full px-2 py-1' key={index}>{item}</span>)
              }
              </p>
              <span className='flex items-center gap-2 pt-2'>
                <Link
                  href={src}
                  target='_blank'
                  className='underline cursor-pointer'
                >
                  See more
                </Link>
                <svg
                  width='22'
                  height='12'
                  viewBox='0 0 22 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                    fill='black'
                  />
                </svg>
              </span>
            </div>
  
            <div
              className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
            >
              <motion.div
                className={`w-full h-full`}
                style={{ scale: imageScale }}
              >
                <Image fill src={url} alt='image' className='object-contain' />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };