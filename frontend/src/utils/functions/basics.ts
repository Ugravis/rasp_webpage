// Timestamp

const timeStampFormat = (date: number, formatType: 'min' | 'full' = 'min') => {
  const formats = {
      s:   { min: 's', full: ' seconds' },
      min: { min: 'min', full: ' minutes' },
      h:   { min: 'h', full: ' hours' },
      d:   { min: 'd', full: ' days' },
      w:   { min: 'w', full: ' weeks' },
      m:   { min: 'm', full: ' months' },
      y:   { min: 'y', full: ' years' },
  };

  const seconds = Math.floor(date / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);
  const weeks   = Math.floor(days / 7);
  const months  = Math.floor(days / 30.5);
  const years   = Math.floor(days / 365);

  if(years >= 1) return `${years}${formats.y[formatType || 'min']}`;
  if(months >= 1) return `${months}${formats.m[formatType || 'min']}`;
  if(weeks >= 1) return `${weeks}${formats.w[formatType || 'min']}`;
  if(days >= 1) return `${days}${formats.d[formatType || 'min']}`;
  if(hours >= 1) return `${hours}${formats.h[formatType || 'min']}`;
  if(minutes >= 1) return `${minutes}${formats.min[formatType || 'min']}`;
  return `${seconds}${formats.s[formatType || 'min']}`;
};

export {
  timeStampFormat
}