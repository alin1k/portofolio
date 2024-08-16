import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import FolderIcon from '@mui/icons-material/Folder';
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import TechStack from './components/TechStack';
import Heading from './components/Heading';

const getUserRepos = async ()=>{
  const res = await fetch('https://api.github.com/users/alin1k/repos'
    ,{
      cache: 'no-store'
    }
  );
  return res.json();
}

export default async function Home() {

  let repos = await getUserRepos();
  repos = repos.filter((repo: any) => {
    return repo.topics.includes("featured-project")
  })

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
          <div className="flex flex-col mt-2 gap-4">
            {repos.map((repo: any, index: number)=>
              <ProjectCard key={index} repo={repo}/>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
