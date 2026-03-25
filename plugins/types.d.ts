/// <reference types="node" />

declare module "#app" {
  interface NuxtApp {
    $axios: {
      post<T = unknown>(
        url: string,
        data?: unknown,
        config?: unknown,
      ): Promise<{ data: T }>;
      get<T = unknown>(url: string, config?: unknown): Promise<{ data: T }>;
      put<T = unknown>(
        url: string,
        data?: unknown,
        config?: unknown,
      ): Promise<{ data: T }>;
      delete<T = unknown>(url: string, config?: unknown): Promise<{ data: T }>;
    };
    $toast: {
      success(message: string, duration?: number): void;
      error(message: string, duration?: number): void;
      warning(message: string, duration?: number): void;
      info(message: string, duration?: number): void;
      removeToast(id: number): void;
    };
  }
}

declare module "@vue/runtime-core" {
  interface NuxtApp {
    $axios: {
      post<T = unknown>(
        url: string,
        data?: unknown,
        config?: unknown,
      ): Promise<{ data: T }>;
      get<T = unknown>(url: string, config?: unknown): Promise<{ data: T }>;
      put<T = unknown>(
        url: string,
        data?: unknown,
        config?: unknown,
      ): Promise<{ data: T }>;
      delete<T = unknown>(url: string, config?: unknown): Promise<{ data: T }>;
    };
    $toast: {
      success(message: string, duration?: number): void;
      error(message: string, duration?: number): void;
      warning(message: string, duration?: number): void;
      info(message: string, duration?: number): void;
      removeToast(id: number): void;
    };
  }
  interface ComponentCustomProperties {
    $toast: {
      success(message: string, duration?: number): void;
      error(message: string, duration?: number): void;
      warning(message: string, duration?: number): void;
      info(message: string, duration?: number): void;
      removeToast(id: number): void;
    };
  }
}

// Process polyfill for Nuxt client-side
declare namespace process {
  const client: boolean;
  const server: boolean;
  const browser: boolean;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

declare module "vue-spinner/src/BeatLoader.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<
    {
      loading: boolean;
      color: string;
      size: string;
      radius: string;
    },
    object,
    unknown
  >;
  export default component;
}

declare module "vue-spinner/src/PulseLoader.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<
    {
      loading: boolean;
      color: string;
      size: string;
    },
    object,
    unknown
  >;
  export default component;
}

export {};
