import { useEffect } from "react"
import { useSystemInfoStore } from "../store/useStore"

export default function Home() {
  const { data, loading, error, fetchSystemInfo } = useSystemInfoStore()

  useEffect(() => {
    fetchSystemInfo()
  }, [fetchSystemInfo])

  if(loading) return <div>Loading...</div>
  if(error) return <div>Une erreur est survenue</div>

  return (
    <>
      <h2 className="text-2xl">Raspberry pi 4</h2>
      <p>os: {data?.os}</p>
    </>
  )
}