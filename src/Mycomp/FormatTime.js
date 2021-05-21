export const FormatTime = (timer) => {
  const centiseconds = ("0" + (timer % 100)).slice(-2);
  const getSeconds = ("0" + Math.floor((timer / 100) % 60)).slice(-2);
  const getMinutes = ("0" + (Math.floor(timer / 6000) % 60)).slice(-2);
  const getHours = ("0" + Math.floor(timer / 360000)).slice(-2);
  return getHours + ":" + getMinutes + ":" + getSeconds + ":" + centiseconds;
};
