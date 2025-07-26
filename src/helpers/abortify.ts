import { type Abortable } from '../abortable.js';

/**
 * Returns a Promise proxying `promise`, but rejected immediately as soon as `signal` is aborted.
 *
 * **NOTE**: the provided `promise`'s process continue to exists even when the `signal` is aborted,
 *   only, the returned promise rejects.
 *
 * @example
 *
 * The [permission API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query) does not support "abortion", thus, we may wrap it with `abortify`:
 *
 * ```ts
 * const status: PermissionStatus = await abortify(navigator.permissions.query({ name: 'geolocation' }), { signal });
 * ```
 */
export function abortify<GValue>(
  promise: PromiseLike<GValue>,
  { signal }: Abortable = {},
): Promise<GValue> {
  if (signal === undefined) {
    return promise instanceof Promise ? promise : Promise.try((): PromiseLike<GValue> => promise);
  } else {
    return new Promise<GValue>(
      (_resolve: (value: GValue) => void, _reject: (reason?: unknown) => void): void => {
        signal.throwIfAborted();

        const end = (): void => {
          signal.removeEventListener('abort', onAbort);
        };

        const resolve = (value: GValue): void => {
          end();
          _resolve(value);
        };

        const reject = (reason?: unknown): void => {
          end();
          _reject(reason);
        };

        const onAbort = (): void => {
          end();
          reject(signal.reason);
        };

        signal.addEventListener('abort', onAbort);

        promise.then(resolve, reject);
      },
    );
  }
}
