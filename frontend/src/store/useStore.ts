import { create } from "zustand"

interface GlobalState {
  loading: boolean
  error: string | null
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}
 
export const useGlobalStore = create<GlobalState>((set) => ({
  loading: false,
  error: null,
  setLoading: (loading) => set({ loading }),
  setError: (error) =>({ error })
}))