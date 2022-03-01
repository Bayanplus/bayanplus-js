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
   *
   */
};
export type Bayanplus = {
  track: (eventName: string) => void;
  init: (options: BayanplusOptions) => void;
};
