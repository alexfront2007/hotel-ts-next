'use client'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { ExperienceCard } from '.'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className='text-center'>What I have done so far</p>
        <h2 className='head-text text-center'>Work Experience.</h2>
      </motion.div>

      <div className='time-line'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
