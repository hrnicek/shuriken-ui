import { useState } from "#app";

import type { BaseToastProps, BaseToastEmits } from '../components/Toast.vue'

type EmitsToProps<T> = {
  [K in keyof T as `on${Capitalize<string & K>}`]?: T[K] extends any[] ? (...args: T[K]) => void : never;
};


interface Toast extends Omit<BaseToastProps, 'as' | 'asChild'>, EmitsToProps<BaseToastEmits> {
  id: string;
}

export function useNuiToasts() {
  const toasts = useState<Toast[]>('nui-toasts', () => []);
  const max = useState('nui-toasts-max', () => 3);

  function add(options: Partial<Toast>): Toast {
    const id = Math.random().toString(36).substring(2, 9);
    const toast = {
      id,
      open: true,
      ...options
    }

    toasts.value.push(toast);

    const open = toasts.value.filter(t => t.open).length;
    if (open > max.value) {
      toasts.value.shift();
    }

    return toast
  }
  function remove(id: string) {
    const index = toasts.value.findIndex(t => t.id === id);
    if (index === -1) return;

    // delay removal to allow for animations
    toasts.value[index].open = false;

    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id);
    }, 200)
  }
  function clear() {
    toasts.value = [];
  }

  return {
    toasts,
    add,
    remove,
    clear,
  }
}
