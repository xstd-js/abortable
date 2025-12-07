import { AbortableArguments } from './abortable-arguments.js';

/**
 * @deprecated
 */
export function inspectAbortableArguments<GArguments extends AbortableArguments<GArguments>>(
  args: GArguments,
): [args: GArguments, signal: AbortSignal | undefined] {
  return (
    args.length > 0 && args[args.length - 1] instanceof AbortSignal
      ? [args.slice(0, -1), args[args.length - 1]]
      : [args, undefined]
  ) as any;
}
