import setupPocketBase from './lib/tools/pb';

export async function getContext({ params }) {
  const pb = await setupPocketBase();
  return {
    locals: {
      pb,
    },
  };
}