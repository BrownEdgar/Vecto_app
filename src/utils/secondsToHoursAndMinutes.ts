export const secondsToHoursAndMinutes = (seconds: string) => {
  const hours = Math.floor(parseInt(seconds) / 3600);
  const minutes = Math.floor((parseInt(seconds) % 3600) / 60);

  return `${hours}h ${minutes}m`;
}
