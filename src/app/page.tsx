import ProjectCard from "./components/ProjectCard";

const getUserRepos = async ()=>{
  const res = await fetch('https://api.github.com/users/alin1k/repos');

  return res.json();
}

export default async function Home() {

  const pinnedRepos : string[] = ['SocialSpace', 'React-ToDoList', 'Weather-App', 'moviebase']

  let repos = await getUserRepos();

  repos = repos.filter((repo: any) => pinnedRepos.includes(repo.name))

  return (
    <div className="flex flex-col gap-3">
      {repos?.map((repo : any, index : number)=>
        <ProjectCard key={index} repo={repo} />
      )}
    </div>
  )
}
