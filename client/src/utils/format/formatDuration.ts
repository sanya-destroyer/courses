export function formatDuration(duration: number): string {
  const maxDuration = 9000;

  if (duration <= 0) return '00:00';
  if (duration > maxDuration ) return ">150:00";
  if (duration % 1 !== 0 ) duration = Math.trunc(duration);

  const minutesInHour = 60;

  const hours = Math.floor((duration / minutesInHour));
  const minutes = duration - hours * minutesInHour;

  return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}`;
}
