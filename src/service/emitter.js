export const emitter = {
  events: new Map(),

  on(name, callback) {
    const listeners = this.events.get(name) ?? [];
    this.events.set(name, [...listeners, callback]);
  },

  emit(name, ...args) {
    this.events.get(name)?.forEach((listener) => listener(...args));
  },
};
