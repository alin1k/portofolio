import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import FolderIcon from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';
import Header from "./components/Header";
import TechStack from './components/TechStack';
import Heading from './components/Heading';
import Projects from './components/Projects';
import LoadingProject from './components/LoadingProject';
import WorkExperience from './components/WorkExperience';
import { Suspense } from 'react';


export default async function Home() {

  return (
    <div className="flex flex-col">
      <Header/>

      <div className="mt-16 font-text font-light flex flex-col gap-5">
        <div>
          <Heading Icon={PersonIcon}>ABOUT ME</Heading>
          <p className="mt-1 leading-4 font-extralight">I am a full-stack <span className='font-bold'>Odoo</span> developer with experience in <span className='font-bold'>Python</span> and <span className='font-bold'>JavaScript</span>. I am also a second-year student at the Faculty of Electrical Engineering and Computer Science, where I study Information Technology. I am constantly learning new things and improving my skills as a software engineer. My professional approach is characterized by efficient problem-solving, which involves breaking big problems into smaller and more approachable ones.</p>
        </div>
        <div>
          <Heading Icon={ConstructionIcon}>TECH STACK</Heading>
          <TechStack/>
        </div>
        <div>
          <Heading Icon={WorkIcon}>WORK EXPERIENCE</Heading>
          <WorkExperience/>
        </div>
        <div>
          <Heading Icon={FolderIcon}>PROJECTS</Heading>
          <Suspense fallback={<LoadingProject/>}>
            <Projects/>
          </Suspense>
        </div>
      </div>
    </div>
  )
}
