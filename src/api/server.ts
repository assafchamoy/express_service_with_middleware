import express, { json } from 'express';
import { default as problematicExplorer } from  '@map-colonies/storage-explorer-middleware-problematic';
import { default as fixedStorageExplorer } from  '@map-colonies/storage-explorer-middleware-fixed';

const app = express();
const port = 4000;

const mountDirs = [
    {
      physical: '../../MOCKS/first_mount_dir',
      displayName: '\\First_mount_dir',
    },
    {
      physical: '../../MOCKS/second_mount_dir',
      displayName: '\\Second_mount_dir',
    },
    {
      physical: '../../MOCKS/third_mount_dir',
      displayName: '\\Third_mount_dir',
    },
  ];

app.use(problematicExplorer(mountDirs, console as unknown as Record<string, unknown>));
// app.use(fixedStorageExplorer(mountDirs, console as unknown as Record<string, unknown>));

app.use(json());
const server = app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

export { app, server };