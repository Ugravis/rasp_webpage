import { create } from "zustand";
import { fetchSystemInfo } from "./api";
import { SystemInfo } from "./types"
import { useGlobalStore } from "../../useStore";

interface SystemInfoState {
  data: SystemInfo | null
  fetchSystemInfo: () => Promise<SystemInfo>
}

export const useSystemInfoStore = create<SystemInfoState>((set) => ({
  data: null,

  fetchSystemInfo: async () => {
    const { setLoading, setError } = useGlobalStore.getState()
    setLoading(true)
    setError(null)

    try {
      const data: SystemInfo = await fetchSystemInfo()
      set({ data })
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