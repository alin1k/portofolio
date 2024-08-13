import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import FolderIcon from '@mui/icons-material/Folder';
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Image from "next/image";

const getUserRepos = async ()=>{
  const res = await fetch('https://api.github.com/users/alin1k/repos'
    ,{
      cache: 'no-store'
    }
  );
  return res.json();
}

export default async function Home() {

  const pinnedRepos : string[] = ['SocialSpace', 'React-ToDoList', 'Weather-App', 'moviebase']
  let repos = await getUserRepos();
  repos = repos.filter((repo: any) => pinnedRepos.includes(repo.name))

  return (
    <div className="flex flex-col">
      <Header/>

      <div className="mt-16 font-text font-light">
        <div>
          <h2 className="text-xl font-heading font-semibold inline me-2">ABOUT ME</h2>
          <PersonIcon className="size-7 pb-1.5"/>
          <hr />
          <p className="mt-1 leading-4 font-extralight">I am a passionate programmer with interests in Full-Stack Development and Embedded Systems, focused on continuous development and constantly improving my skills</p>
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-heading font-semibold inline me-2">TECH STACK</h2>
          <ConstructionIcon className="size-7 pb-1.5"/>
          <hr />
          <div className="flex flex-row flex-wrap gap-3 mt-2">
            <Image src="/js.svg" alt="javascript-icon" width={35} height={35} className="rounded-lg"/>
            <Image src="/ts.svg" alt="typescript-icon" width={35} height={35} className="rounded-lg"/>
            <Image src="/react.svg" alt="react-icon" width={35} height={35}/>
            <Image src="/nextjs.svg" alt="nextjs-icon" width={35} height={35}/>
            <Image src="/node.svg" alt="node-icon" width={35} height={35}/>
            <Image src="/express.svg" alt="express-icon" width={35} height={35}/>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-heading font-semibold inline me-2">PROJECTS</h2>
          <FolderIcon className="size-7 pb-1.5"/>
          <hr />
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
