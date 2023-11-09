import { ServerApplication } from './application/ServerApplication';

const runApp = async (): Promise<void> => {
  const serverApplication: ServerApplication = ServerApplication.new();
  await serverApplication.run();
};

(async (): Promise<void> => {
  await runApp();
})();
