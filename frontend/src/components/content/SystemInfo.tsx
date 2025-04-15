import { useEffect } from "react"
import { useSystemInfoStore } from "../../store/useStore"
import { timeStampFormat } from "../../utils/functions/basics"

export default function Home() {
  const { data, loading, error, fetchSystemInfo } = useSystemInfoStore()

  useEffect(() => {
    fetchSystemInfo()
  }, [fetchSystemInfo])

  if(loading) return <div className="text-center">Loading...</div>
  if(error) return <div className="text-center">Une erreur est survenue</div>

  return (
    <div className="flex justify-center">
      <div className="flex gap-[50px]">
        <div className="flex flex-col gap-[40px]">
          <div>
          <p className="mb-[10px]"><u><b>General</b></u></p>
            <p>Name: <span className="text-yellow-400">{data?.hostname}</span></p>
            <p>Machine: <span className="text-yellow-400">{data?.platform}</span></p>
            <p>os: <span className="text-yellow-400">{data?.os}</span></p> 
            <p>Online for: <span className="text-cyan-400"><b>{data?.uptime !== undefined ? timeStampFormat(data.uptime, 'full') : 'N/A'}</b></span></p>
          </div>

          <div>
            <p className="mb-[10px]"><u><b>Memory</b></u></p>
            <p>Total: <span className="text-yellow-400">{data?.memory.total !== undefined ? `${(data.memory.total / (1024 * 1024 * 1024)).toFixed(2)} Go` : 'N/A'}</span></p>
            <p>Used: <span className="text-red-400"><b>{data?.memory.bytesUsed !== undefined ? `${(data.memory.bytesUsed / (1024 * 1024 * 1024)).toFixed(2)} Go` : 'N/A'} ({data?.memory.percentUsed}%)</b></span></p>
          </div>
        </div>

        <div className="flex flex-col gap-[40px]">
          <div className="h-[107.5px]">
            <p className="mb-[10px]"><u><b>GPU</b></u></p>
            <p>Machine: <span className="text-yellow-400">{data?.cpu} ({data?.cpuFreq}Hz)</span></p>
            <p>Temperature: <span className="text-yellow-400">{data && data.cpuTemperature ? `${data.cpuTemperature}°C` : 'N/A'}</span></p>
            <p>Used: <span className="text-red-400"><b>{data?.cpuPercentUsed}%</b></span></p>
          </div>

          <div>
            <p className="mb-[10px]"><u><b>Disk</b></u></p>
            <p>Total: <span className="text-yellow-400">{data?.disk.total !== undefined ? `${(data.disk.total / (1024 * 1024 * 1024)).toFixed(2)} Go` : 'N/A'}</span></p>
            <p>Used: <span className="text-red-400"><b>{data?.disk.bytesUsed !== undefined ? `${(data.disk.bytesUsed / (1024 * 1024 * 1024)).toFixed(2)} Go` : 'N/A'} ({data?.disk.percentUsed}%)</b></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}