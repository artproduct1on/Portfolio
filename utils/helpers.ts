export function timeCalculationHelper(date: string) {
  const start = new Date(date);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();
  const days = now.getDate() - start.getDate();

  return { years, months, days };
}

export function timeRemainingHelper(date: string) {
  const lastSentTime = new Date(date);
  const nextAttemptTime = new Date(lastSentTime.getTime() + 24 * 60 * 60 * 1000);
  const timeLeftInMs = nextAttemptTime.getTime() - Date.now();
  const hours = Math.floor(timeLeftInMs / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeftInMs % (1000 * 60 * 60)) / (1000 * 60));

  return { hours, minutes };
}