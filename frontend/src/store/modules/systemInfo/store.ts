import { create } from "zustand";
import { fetchSystemInfo } from "./api";
import { SystemInfo } from "./types"

interface SystemInfoState {
  data: SystemInfo | null
  loading: boolean
  error: string | null
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setData: (data: SystemInfo) => void
  reset: () => void
  fetchSystemInfo: () => Promise<SystemInfo>
}

export const useSystemInfoStore = create<SystemInfoState>((set, get) => ({
  data: null,
  loading: false,
  error: null,
  
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setData: (data) => set({ data }),
  reset: () => set({ data: null, loading: false, error: null }),

  fetchSystemInfo: async () => {
    const { setLoading, setError, setData } = get()
    setLoading(true)
    setError(null)

    try {
      const data: SystemInfo = await fetchSystemInfo()
      setData(data)
      return data

    } catch (err: unknown) {
      const errMsg = "Error during fetchSystemInfo" 
      console.error(errMsg, err)
      setError(errMsg)
      throw err

    } finally {
      setLoading(false)
    }
  }
}))