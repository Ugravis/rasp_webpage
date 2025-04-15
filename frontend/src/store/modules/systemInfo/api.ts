import { SystemInfo } from "./types"
import axios from "../../../config/axios"

export const fetchSystemInfo = async (): Promise<SystemInfo> => {
  try {
    const res = await axios.get<SystemInfo>('system-info')
    return res.data

  } catch (err) {
    console.error('Error during fetchSystemInfo: ', err)
    throw err
  }
}