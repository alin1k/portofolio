import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailIcon from '@mui/icons-material/Mail';

export default function Header() {
  return (
    <header className="border rounded flex flex-col md:flex-row font-heading font-light">
      <div className="w-full flex justify-center items-center relative p-5">
        <div className="text-center bg-primary" id="title">
          <h1 className="font-heading text-2xl xl:text-3xl font-semibold">OLTEANU ALIN</h1>
          <h2 className="font-heading text-sm md:text-lg xl:text-xl">ODOO DEVELOPER</h2>
        </div>
      </div>

      <div className="w-full p-3 md:p-5">

        <div className="text-start md:text-end">
          <a href="https://github.com/alin1k" target="_blank">
            <GitHubIcon className="size-9 hover:bg-gray-800 rounded p-1"/>
          </a>
          <a href="https://www.linkedin.com/in/alin-olteanu/" target="_blank">
            <LinkedInIcon className="size-9 hover:bg-gray-800 rounded"/>
          </a>
        </div>

        <div className="flex flex-col gap-1 mt-3 md:mt-10">
          <div>
            <PlaceIcon className="size-4 md:size-5"/>
            <p className="inline ms-2 text-xs md:text-base">Brasov, Romania</p>
          </div>

          <div>
            <PhoneEnabledIcon className="size-4 md:size-5"/>
            <p className="inline ms-2 text-xs md:text-base">+40787827007</p>
          </div>

          <div>
            <MailIcon className="size-4 md:size-5"/>
            <p className="inline ms-2 text-xs md:text-base">olteanualin1509@gmail.com</p>
          </div>
        </div>

      </div>
    </header>
  )
}

