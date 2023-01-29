import bayanplus from 'bayanplus-js';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const run = async () => {
  bayanplus.event('This is custom event');
  bayanplus.user.set({
    name: 'Salah',
    email: '',
  });
  console.log('before load, bayanplus.user.get(): ', bayanplus.user.get());
  bayanplus.init({
    projectId: 'xxxxxx',
    trackLocalhost: true,
    exclude: ['/exclude'],
    isDev: true,
  });
  await sleep(1000);
  console.log('after load bayanplus.user.get(): ', bayanplus.user.get());
};

(window as any).run = run;
