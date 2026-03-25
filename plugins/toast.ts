import { toaster } from "~/composables/useToaster";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast: {
        success: (msg: string, duration?: number) =>
          toaster.success(msg, duration),
        error: (msg: string, duration?: number) => toaster.error(msg, duration),
        warning: (msg: string, duration?: number) =>
          toaster.warning(msg, duration),
        info: (msg: string, duration?: number) => toaster.info(msg, duration),
        removeToast: (id: number) => toaster.removeToast(id),
      },
    },
  };
});
