import React from 'react'
import ProjectCard from "./ProjectCard";

const getUserRepos = async ()=>{
  const res = await fetch('https://api.github.com/users/alin1k/repos'
    ,{
      cache: 'no-store'
    }
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
}

export default async function Projects() {

  let repos = await getUserRepos();
  repos = repos.filter((repo: any) => {
    return repo.topics.includes("featured-project")
  })

  return (
    <div className="flex flex-col mt-2 gap-4">
      {repos.map((repo: any, index: number)=>
        <ProjectCard key={index} repo={repo}/>
      )}
    </div>
  )
}