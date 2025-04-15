import psutil
import platform
import time

def get_system_info():
  mem = psutil.virtual_memory()
  disk = psutil.disk_usage('/')

  try:
    with open("/sys/class/thermal/thermal_zone0/temp", "r") as f:
      cpu_temperature = round(int(f.readline()) / 1000, 1)
  except FileNotFoundError:
    cpu_temperature = None

  return {
    "hostname": platform.node(),
    "platform": platform.platform(),
    "os": platform.system(),
    "architecture": platform.architecture(),
    "machine": platform.machine(),
    "cpu": platform.processor(),
    "cpuTemperature": cpu_temperature,
    "cpuPercentUsed": psutil.cpu_percent(interval=1),
    "cpuFreq": psutil.cpu_freq().current,
    "memory": {
      "percentUsed": mem.percent,
      "bytesUsed": mem.used,
      "total": mem.total
    },
    "disk": {
      "percentUsed": disk.percent,
      "bytesUsed": disk.used,
      "total": disk.total
    },
    "uptime": int(time.time() - psutil.boot_time()),
  }