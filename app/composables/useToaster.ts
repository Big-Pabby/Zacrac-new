// Global reactive state for toaster
const toasterState = {
  toasts: [] as Array<{
    id: number;
    message: string;
    type: string;
    duration: number;
  }>,
  id: 0,

  addToast(message: string, type: string = "info", duration: number = 5000) {
    const id = ++this.id;
    this.toasts.push({ id, message, type, duration });

    if (duration > 0) {
      setTimeout(() => {
        this.removeToast(id);
      }, duration);
    }

    return id;
  },

  removeToast(id: number) {
    const index = this.toasts.findIndex((t) => t.id === id);
    if (index > -1) {
      this.toasts.splice(index, 1);
    }
  },

  success(message: string, duration?: number) {
    return this.addToast(message, "success", duration);
  },

  error(message: string, duration?: number) {
    return this.addToast(message, "error", duration);
  },

  warning(message: string, duration?: number) {
    return this.addToast(message, "warning", duration);
  },

  info(message: string, duration?: number) {
    return this.addToast(message, "info", duration);
  },
};

// Expose a reactive version for components
import { reactive, readonly } from "vue";

export const toaster = reactive({
  toasts: readonly(toasterState.toasts),
  success: (msg: string, duration?: number) =>
    toasterState.success(msg, duration),
  error: (msg: string, duration?: number) => toasterState.error(msg, duration),
  warning: (msg: string, duration?: number) =>
    toasterState.warning(msg, duration),
  info: (msg: string, duration?: number) => toasterState.info(msg, duration),
  removeToast: (id: number) => toasterState.removeToast(id),
});

export function useToaster() {
  return {
    toasts: readonly(toasterState.toasts),
    success: (msg: string, duration?: number) =>
      toasterState.success(msg, duration),
    error: (msg: string, duration?: number) =>
      toasterState.error(msg, duration),
    warning: (msg: string, duration?: number) =>
      toasterState.warning(msg, duration),
    info: (msg: string, duration?: number) => toasterState.info(msg, duration),
    removeToast: (id: number) => toasterState.removeToast(id),
  };
}
