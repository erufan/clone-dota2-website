const debounce = function <T>(fn: (...args: [T]) => void, delay: number) {
  let timeOut: NodeJS.Timeout | undefined;
  return (...args: [T]) => {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => fn(...args), delay);
  };
};

export default debounce;
