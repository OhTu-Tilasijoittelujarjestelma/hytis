async function pingServer(): Promise<string> {
  const response = await fetch("http://localhost:3000/ping", {
    method: "GET",
  });

  return response.text();
}

export default pingServer;
