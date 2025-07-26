export interface AbortablePromiseFactory<GValue> {
  (signal: AbortSignal): PromiseLike<GValue> | GValue;
}
