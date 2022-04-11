import type {  Bayanplus, BayanplusOptions } from './types';

declare global {
  interface Window {
     bayanplus: (eventName: string) => void;
  }
}
const isBrowser = typeof window !== undefined

const init = (options: BayanplusOptions): void => {
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cdn.bayanplus.co/bp.js';
  script.dataset.pid = options.projectId;
  if (options.trackLocalhost){
    script.dataset.trackLocalhost = '';
  }
  if(options.exclude){
    script.dataset.exclude = options.exclude.join(', ');
  }
  document.head.appendChild(script)
};   


let events : Array<string> = []
const track  = (eventName: string) : void => {
  events.push(eventName)
  if(isBrowser && !window.bayanplus) return
  events.forEach(window.bayanplus)
  events = []
}
const bayanplus : Bayanplus = {
  init,
  track
}

export default bayanplus

