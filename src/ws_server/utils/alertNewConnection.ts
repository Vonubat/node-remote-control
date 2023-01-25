export const alertNewConnection = (remotePort: number | undefined, size: number): void => {
  console.log(
    `\n\x1b[33mNew connection established on the remote port: ${remotePort}. Clients connected: ${size}\x1b[0m`,
  );
};
