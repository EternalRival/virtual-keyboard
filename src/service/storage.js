export const prefix = '[er-virtual-keyboard]';

export class StorageService {
  static prefix = prefix;

  static set(key, value) {
    localStorage[this.prefix + key] = JSON.stringify({ value });
  }

  static get(key, defaultValue) {
    const data = localStorage[this.prefix + key];
    if (data) return JSON.parse(data).value;
    if (defaultValue) return defaultValue;
    return null;
  }
}
