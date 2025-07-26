export type OptionalAbortSignal = AbortSignal | undefined | void;

export function mergeAbortSignals(signals: readonly OptionalAbortSignal[]): AbortSignal {
  return AbortSignal.any(
    signals.filter((signal: OptionalAbortSignal): signal is AbortSignal => {
      return signal !== undefined;
    }),
  );
}
