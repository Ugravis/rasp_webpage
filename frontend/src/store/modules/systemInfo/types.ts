export interface SystemInfo {
  
  hostname: string
  platform: string
  os: string
  architecture: string
  machine: string
  cpu: string
  spuTemperature: number | null
  cpuPercentUsed: number
  cpuFreq: number,
  uptime: number

  memory: {
    percentUsed: number
    bytesUsed: number
    total: number
  }

  disk: {
    percentUsed: number
    bytesUsed: number
    total: number
  }
}