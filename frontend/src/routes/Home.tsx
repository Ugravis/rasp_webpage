import { JSX } from "react"
import SystemInfo from "../components/content/SystemInfo"

export default function Home(): JSX.Element {

  return (
    <>
      <div>
        <div className="flex justify-center">
          <img src="/images/logos/raspberry.png" alt="raspberry_logo" className="w-20" />
        </div>

        <h2 className="text-2xl text-center mt-[20px] mb-[40px]"><b>Raspberry pi</b></h2>
      </div>

      <div className="grow flex flex-col justify-center">
        <SystemInfo />
      </div>
    </>
  )
}