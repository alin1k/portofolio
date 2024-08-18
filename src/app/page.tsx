import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import FolderIcon from '@mui/icons-material/Folder';
import Header from "./components/Header";
import TechStack from './components/TechStack';
import Heading from './components/Heading';
import Projects from './components/Projects';
import LoadingProject from './components/LoadingProject';
import { Suspense } from 'react';


export default async function Home() {

  return (
    <div className="flex flex-col">
      <Header/>

      <div className="mt-16 font-text font-light flex flex-col gap-5">
        <div>
          <Heading Icon={PersonIcon}>ABOUT ME</Heading>
          <p className="mt-1 leading-4 font-extralight">I am an <span className='font-medium'>Electrical Engineering and Computer Science</span> student, passionate about programming with interests in <span className='font-medium'>Full-Stack Development</span> and <span className='font-medium'>Embedded Systems</span>, focused on continuous development and constantly improving my skills.</p>
        </div>
        <div>
          <Heading Icon={ConstructionIcon}>TECH STACK</Heading>
          <TechStack/>
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
