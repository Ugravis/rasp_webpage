import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <div className="flex justify-center">
      <p>
        <a 
          href="https://github.com/Ugravis" 
          target="_blank"
          className="mr-1.5 hover:underline"
        >
          Ugravis
        </a> 
        2025 ©
      </p>
    </div>
  )
}