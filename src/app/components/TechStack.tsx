"use client"

import Image from "next/image";
import { Tooltip } from 'react-tooltip';

export default function TechStack() {

  const size = 35;

  return (
    <div className="flex flex-row flex-wrap gap-3 mt-2">
      <Image data-tooltip-id='tooltip' data-tooltip-content="JavaScript" data-tooltip-place="bottom" src="/js.svg" alt="javascript icon" width={size} height={size} className="rounded-lg"/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="Python" data-tooltip-place="bottom" src="/python.svg" alt="python icon" width={size} height={size}/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="TypeScript" data-tooltip-place="bottom" src="/ts.svg" alt="typescript icon" width={size} height={size} className="rounded-lg"/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="React" data-tooltip-place="bottom" src="/react.svg" alt="react icon" width={size} height={size}/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="NextJS" data-tooltip-place="bottom" src="/nextjs.svg" alt="nextjs icon" width={size} height={size}/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="NodeJS" data-tooltip-place="bottom" src="/node.svg" alt="node icon" width={size} height={size}/>
      <Image data-tooltip-id='tooltip' data-tooltip-content="Express" data-tooltip-place="bottom" src="/express.svg" alt="express icon" width={size} height={size}/>
      <Tooltip id='tooltip'/>
    </div>
  )
}

