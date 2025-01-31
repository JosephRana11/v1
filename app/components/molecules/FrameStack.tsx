'use client';
import { ReactLenis } from 'lenis/dist/lenis-react';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { ProjectCard } from '../oraganisms/cards/ProjectCard';
import { IProject } from 'app/constants';
export default function index({ projects }: { projects: IProject[] }): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main ref={container}>
        <section className='text-white w-full' /* bg-slate-950 */> 
           {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <ProjectCard
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                renderTitle={i==0}
                stack={project?.stack || []}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
