import FolderIcon from '@mui/icons-material/Folder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import {formatDistance} from "date-fns";

export default function ProjectCard({repo} : any) {
  return (
    <div className="font-sans p-3 py-2 border border-2 border-light rounded">
      <div className="flex flex-row flex-wrap content-start">
        <FolderIcon className='size-6 me-1'/>
        <p className="font-bold text-lg">{repo.name}</p>
      </div>
      <p className='text-sm text-light-dark'>
        Last modified: {formatDistance(repo.updated_at, new Date(), {addSuffix: true})}
      </p>
      
      <p className="mt-2 leading-4">{repo.description}</p>
      <p className='mt-2'>Language: <span className='font-bold'>{repo.language}</span></p>
      <div className="mt-4 flex flex-row gap-5">
        <div className="flex flex-row flex-wrap hover:bg-primary-light rounded-2xl p-2 ms-[-0.5rem]">
          <a href={repo.html_url} target='_blank' className='me-2 font-bold'>See GitHub repo</a>
          <GitHubIcon className='size-5'/>
        </div>
        
        {repo.homepage && 
          <div className="flex flex-row flex-wrap hover:bg-primary-light rounded-2xl p-2 ms-[-0.5rem]">
            <a href={repo.homepage} target='_blank' className='me-2 font-bold'>See live project</a>
            <LinkIcon className='size-6'/>
          </div>
        }
      </div>
    </div>
  )
}