export type VoidFunction<T> = (arg: T) => void;

export type ReturnFunction<T> = () => T;

export type MetaData = {
  [key: string]: any;
};
export type QueueDataTypes = {
  type: 'event' | 'user';
  data: string | MetaData;
};
/**
 * Extra options
 */
export type BayanplusOptions = {
  projectId: string;
  /**
   * Whether you want events to be tracked from localhost
   */
  trackLocalhost?: boolean;
  /**
   * are you in development mode? (your data won't be tracked)
   */
  isDev?: boolean;
  /**
   * Exclude page you want
   */
  exclude?: string[];
};
export type Bayanplus = {
  init: VoidFunction<BayanplusOptions>;
  event: VoidFunction<string>;
  user: {
    set: VoidFunction<MetaData>;
    get: ReturnFunction<MetaData>;
  };
};
declare global {
  interface Window {
    bayanplus: Bayanplus;
  }
}
