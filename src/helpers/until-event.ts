import type { Abortable } from '../abortable.js';

/**
 * Returns a Promise resolved when the first Event is received from `target.addEventListener(type, ...)`.
 */
export function untilEvent<GEvent extends Event>(
  target: Pick<EventTarget, 'addEventListener' | 'removeEventListener'>,
  type: string,
  { signal }: Abortable = {},
): Promise<GEvent> {
  return new Promise<GEvent>(
    (_resolve: (value: GEvent) => void, _reject: (reason?: unknown) => void): void => {
      signal?.throwIfAborted();

      const end = (): void => {
        signal?.removeEventListener('abort', onAbort);
        target.removeEventListener(type, onEvent);
      };

      const resolve = (value: GEvent): void => {
        end();
        _resolve(value);
      };

      const reject = (reason?: unknown): void => {
        end();
        _reject(reason);
      };

      const onAbort = (): void => {
        end();
        reject(signal!.reason);
      };

      const onEvent = (event: Event): void => {
        end();
        resolve(event as GEvent);
      };

      signal?.addEventListener('abort', onAbort);
      target.addEventListener(type, onEvent);
    },
  );
}
