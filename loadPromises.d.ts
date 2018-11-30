declare module 'load-promises' {
  export function DOMContentLoaded(): Promise<void>;
  export function windowLoad(): Promise<void>;
}
