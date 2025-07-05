const loggerMiddleware = (message, data = null) => {
  const timestamp = new Date().toISOString();
  const log = {
    timestamp,
    message,
    ...(data && { data }),
  };

  // Instead of console.log, send logs to server or just show in UI
  document.dispatchEvent(new CustomEvent("customLog", { detail: log }));
};

export default loggerMiddleware;
