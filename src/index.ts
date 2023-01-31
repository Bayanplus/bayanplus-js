import type {
  Bayanplus,
  BayanplusOptions,
  MetaData,
  QueueDataTypes,
} from './types';

const isBrowser: boolean = typeof window !== undefined;
const SCRIPT_URL: string = 'https://cdn.bayanplus.co/bp.js';
let queueData: Array<QueueDataTypes> = [];

const handleQueue = () => {
  if (isBrowser && !window.bayanplus) return;
  bayanplus.event = window.bayanplus.event;
  bayanplus.user = window.bayanplus.user;
  queueData.forEach(({ type, data }) => {
    if (type === 'event') {
      window.bayanplus.event(data as string);
    }
    if (type === 'user') {
      window.bayanplus.user.set(data as MetaData);
    }
  });
  queueData = [];
};
const createQueue =
  (type: QueueDataTypes['type']) => (data: QueueDataTypes['data']) => {
    queueData.push({ type, data });
    if (isBrowser && !window.bayanplus) return;
    handleQueue();
  };
const init = (options: BayanplusOptions): void => {
  if (!isBrowser || window.bayanplus) return;
  const script = document.createElement('script');
  script.defer = true;
  script.src = SCRIPT_URL;
  script.dataset.pid = options.projectId;
  if (options.trackLocalhost) {
    script.dataset.trackLocalhost = '';
  }
  if (options.isDev) {
    script.dataset.dev = '';
  }
  if (options.exclude) {
    script.dataset.exclude = options.exclude.join(', ');
  }
  script.onload = handleQueue;
  document.head.appendChild(script);
};

const getUser = (): MetaData => {
  if (isBrowser && !window.bayanplus) return {};
  return window.bayanplus?.user?.get;
};

const bayanplus: Bayanplus = {
  init,
  user: {
    set: createQueue('user'),
    get: getUser,
  },
  event: createQueue('event'),
};

export default bayanplus;
