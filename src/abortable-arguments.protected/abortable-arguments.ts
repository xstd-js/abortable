import { type Abortable } from '../abortable.js';

/**
 * @deprecated
 */
export type AbortableArguments<GArguments extends readonly any[]> = [
  ...GArguments,
] extends readonly [...args: infer GArgs, last?: infer GLast]
  ? GLast extends Abortable
    ? GArguments
    : [...args: GArgs, options?: Abortable]
  : never;
