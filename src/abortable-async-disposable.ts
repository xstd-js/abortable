import { type Abortable } from './abortable.js';

export interface AbortableAsyncDisposable {
  [Symbol.asyncDispose](options?: Abortable): PromiseLike<void>;
}
