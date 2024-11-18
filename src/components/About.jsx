import React from 'react'
import { AiOutlineAim } from "react-icons/ai";
import { FaGift } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
function About() {
  return (
    <div>
      <div className='text-3xl mt-3 font-semibold flex items-center justify-center'><p>About us</p></div>
      <div className='sm:px-10 px-6 flex flex-col gap-4 py-6 sm:py-8'>
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex p-3 border-l-4 items-center gap-2 border-gray-500'>
            <AiOutlineAim size={32} />
            <p className='text-3xl font-medium '>Our mission</p>

          </div>

          <p className='text-sm font-normal'>The mission of GitHub Tracker is to provide developers with a seamless platform to monitor, manage, and collaborate on GitHub repositories efficiently. It aims to streamline workflows by tracking pull requests, issues, commits, and contributions, fostering productivity and collaboration within open-source and team projects.</p>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex p-3 border-l-4 items-center gap-2 border-gray-500'>
            <FaGift size={32} />
            <p className='text-3xl font-medium '>What we offer</p>

          </div>

          <p className='text-sm font-normal'>
            <ul className='list-disc list-inside space-y-2 pl-4'>
              <li><span className='font-semibold'>Pull Request Management:</span> Easily track, review, and merge pull requests.</li>
              <li><span className='font-semibold'>Issue Tracking:</span> Stay updated on project issues and prioritize tasks effectively.</li>
              <li><span className='font-semibold'>Commit History Insights:</span> Monitor code changes and contribution activity.</li>
              <li><span className='font-semibold'>Collaboration Tools:</span> Foster seamless teamwork with streamlined workflows.</li>
              <li><span className='font-semibold'>Progress Analytics:</span> Gain insights into repository activity and project milestones.</li>
            </ul>
          </p>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex p-3 border-l-4 items-center gap-2 border-gray-500'>
            <IoSettingsSharp size={32} />
            <p className='text-3xl font-medium '>How it works</p>

          </div>

          <p className='text-sm font-normal'>GitHub Tracker simplifies project management by integrating with your GitHub repositories. It provides real-time updates on pull requests, issues, and commits while enabling seamless collaboration through task assignments and code reviews. With progress tracking and insightful reports, it helps teams stay organized, focused, and productive.</p>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex p-3 border-l-4 items-center gap-2 border-gray-500'>
            <FaHeart size={32} />
            <p className='text-3xl font-medium '>Values</p>

          </div>

          <p className='text-sm font-normal'>
            <ul className='list-disc list-inside space-y-2 pl-4'>
              <li><span className='font-semibold'>Transparency:</span> We maintain clear communication and openness in all aspects of the project.</li>
              <li><span className='font-semibold'>Collaboration:</span> We encourage teamwork and value contributions from all community members.</li>
              <li><span className='font-semibold'>Continuous Learning:</span> We embrace growth and encourage knowledge-sharing and skill development.</li>
              <li><span className='font-semibold'>Respect:</span> We foster a respectful environment where all voices are heard and valued.</li>

            </ul>
          </p>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex p-3 border-l-4 items-center gap-2 border-gray-500'>
            <RiTeamFill size={32} />
            <p className='text-3xl font-medium '>Our team</p>

          </div>

          <p className='text-sm font-normal'>Our team is a diverse group of passionate individuals committed to building something meaningful. With a blend of skills in development, design, and problem-solving, we work collaboratively to bring innovative solutions to life. Each member brings unique expertise, and together we focus on delivering high-quality results while supporting each other’s growth. We are united by a shared vision and the drive to create impactful, user-centered projects.

          </p>
        </div>

      </div>
    </div>
  )
}

export default About