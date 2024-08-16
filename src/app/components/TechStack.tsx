"use client"

import Image from "next/image";
import { Tooltip } from 'react-tooltip';

export default function TechStack() {
  return (
    <div className="flex flex-row flex-wrap gap-3 mt-2">
      <Image data-tooltip-id='tooltip' data-tooltip-content="JavaScript" data-tooltip-place="bottom" src="/js.svg" alt="javascript icon" width={35} height={35} className="rounded-lg"/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="TypeScript" data-tooltip-place="bottom" src="/ts.svg" alt="typescript icon" width={35} height={35} className="rounded-lg"/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="React" data-tooltip-place="bottom" src="/react.svg" alt="react icon" width={35} height={35}/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="Next.JS" data-tooltip-place="bottom" src="/nextjs.svg" alt="nextjs icon" width={35} height={35}/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="Node" data-tooltip-place="bottom" src="/node.svg" alt="node icon" width={35} height={35}/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="Express" data-tooltip-place="bottom" src="/express.svg" alt="express icon" width={35} height={35}/>
      <Tooltip id='tooltip'/>
    </div>
  )
}

