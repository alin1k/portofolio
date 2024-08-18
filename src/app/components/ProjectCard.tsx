"use client"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import {formatDistance} from "date-fns";
import { useEffect, useState } from 'react';

export default function ProjectCard({repo} : any) {

  const [isClient, setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true)
  }, [])

  return (
    <div className="font-text border-light rounded">
      <div className="flex flex-col flex-wrap">
        <p className="font-semibold text-lg">{repo.name}</p>
        <p className='text-sm text-light-dark mt-[-0.40rem]'>
          Last modified: {formatDistance(repo.pushed_at, new Date(), {addSuffix: true})}
        </p>
      </div>
      
      <p className="mt-2 leading-4 font-extralight">{repo.description}</p>
      <p className='mt-2 font-extralight'>Language: <span className='font-semibold'>{repo.language}</span></p>
      <div className="flex flex-row">
        <div className="flex flex-row flex-wrap hover:bg-primary-light rounded-2xl ms-[-0.5rem]">
          <a href={repo.html_url} target='_blank' className='p-2'>
            {isClient && <GitHubIcon className='size-5'/>}
          </a>
        </div>
        
        {repo.homepage && 
          <div className="flex flex-row flex-wrap hover:bg-primary-light rounded-2xl">
            <a href={repo.homepage} target='_blank' className='p-2'>
              {isClient && <LinkIcon className='size-6'/>}
            </a>
          </div>
        }
      </div>

      <hr className='border-primary-light mt-2'/>
    </div>
  )
}