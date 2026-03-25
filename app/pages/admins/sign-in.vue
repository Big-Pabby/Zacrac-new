<template>
  <div class="flex justify-between w-full md:p-8 p-5 mt-12 body">
    <!-- Left Side - Decorative Panel -->
    <div class="image md:flex hidden w-5/12 flex flex-col justify-end p-6">
      <div class="w-full p-8 bg-[#ffffffde] rounded-xl">
        <div class="mb-6">
          <div
            class="w-16 h-16 bg-[#000462] rounded-lg flex items-center justify-center mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h4 class="mb-4 font-semibold text-xl text-[#000462]">
            Admin Portal
          </h4>
          <p class="text-[#555555]">
            Welcome back! Please sign in to access the admin dashboard and
            manage your content.
          </p>
        </div>
      </div>
    </div>

    <!-- Right Side - Sign In Form -->
    <div class="md:w-6/12 w-full md:px-8 flex flex-col justify-center">
      <div class="w-full flex items-center justify-between mb-4">
        <div
          @click="$router.go(-1)"
          class="flex items-center cursor-pointer text-[#555555] hover:text-[#000462] transition-colors"
        >
          <Icon name="uil:angle-left" class="text-2xl" />
          <p>Back</p>
        </div>
        <p class="text-[#555555]">
          <span class="md:inline hidden">Need help?</span>
          <span class="text-[#000462] font-semibold">
            <a href="mailto:support@zacrac.com">Contact Support</a></span
          >
        </p>
      </div>

      <form class="mt-4 md:w-8/12 w-full mx-auto">
        <div class="mb-2">
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-8 bg-[#000462] rounded-full"></div>
            <h4 class="text-3xl font-semibold text-[#000462]">Admin Sign In</h4>
          </div>
          <p class="text-[#555555] mb-6">
            Enter your credentials to access the admin panel
          </p>
        </div>

        <!-- Email Field -->
        <div class="mb-5">
          <label
            for="email"
            class="block text-sm font-medium text-[#404053] mb-2"
          >
            Email Address
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-[#999]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <input
              v-model="form.data.email"
              type="email"
              required
              name="email"
              placeholder="admin@zacrac.com"
              class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#ddd] focus:border-[#000462] focus:ring-2 focus:ring-[#000462]/20 outline-none transition-all"
            />
          </div>
        </div>

        <!-- Password Field -->
        <div class="mb-5">
          <label
            for="password"
            class="block text-sm font-medium text-[#404053] mb-2"
          >
            Password
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-[#999]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              v-model="form.data.password"
              :type="showPassword ? 'text' : 'password'"
              required
              name="password"
              placeholder="Enter your password"
              class="w-full pl-10 pr-12 py-3 rounded-lg border border-[#ddd] focus:border-[#000462] focus:ring-2 focus:ring-[#000462]/20 outline-none transition-all"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-[#999] hover:text-[#000462] transition-colors"
            >
              <svg
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex items-center justify-between mb-6">
          <label class="flex items-center cursor-pointer">
            <input
              type="checkbox"
              class="w-4 h-4 rounded border-[#ddd] text-[#000462] focus:ring-[#000462]"
            />
            <span class="ml-2 text-sm text-[#555555]">Remember me</span>
          </label>
          <a href="#" class="text-sm text-[#000462] hover:underline"
            >Forgot password?</a
          >
        </div>

        <!-- Submit Button -->
        <button
          type="button"
          :disabled="submitingForm"
          @click.prevent="adminLogin"
          class="btn-admin w-full py-3.5 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <span v-if="submitingForm" class="flex items-center gap-2">
            <svg
              class="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Signing in...
          </span>
          <span v-else class="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Sign In
          </span>
        </button>

        <!-- Security Notice -->
        <div
          class="mt-6 flex items-center justify-center gap-2 text-xs text-[#888]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span>Secure Admin Access Only</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
import axios from "axios";

interface ToastInterface {
  success(message: string, duration?: number): void;
  error(message: string, duration?: number): void;
  warning(message: string, duration?: number): void;
  info(message: string, duration?: number): void;
  remove(id: string): void;
}

const $toast = useNuxtApp().$toast as ToastInterface | undefined;

defineProps<{
  toggleForm?: string;
}>();

const submitingForm = ref(false);
const showPassword = ref(false);
const form = reactive({
  data: {
    email: null as string | null,
    password: "",
  },
});

const adminLogin = async () => {
  console.log("Attempting admin login with:", form.data);
  submitingForm.value = true;
  try {
    const response: any = await axios.post(
      "https://parrotapi.parrot.cx/auth/admin/login",
      form.data,
      { validateStatus: () => true },
    );

    if (
      response.status >= 200 &&
      response.status < 300 &&
      response.data.status === "success"
    ) {
      const { token, isAdmin } = response.data.data;

      if (import.meta.client) {
        localStorage.setItem("adminToken", token);
        localStorage.setItem("isAdmin", isAdmin);
        localStorage.setItem("auth._token.admin", `Bearer ${token}`);
      }

      if ($toast) {
        $toast.success(response.data.message || "Login successful!");
      }

      useRouter().push("/admins/posts");
    } else {
      if ($toast) {
        $toast.error(
          response.data.message || "Login failed. Please try again.",
        );
      }
    }
  } catch (err: any) {
    console.error("Login error:", err);
    let errorMessage = "Login failed. Please try again.";
    if (err.response?.data?.message) {
      errorMessage = err.response.data.message;
    } else if (err.request) {
      errorMessage = "Network error. Please check your connection.";
    }
    if ($toast) {
      $toast.error(errorMessage);
    }
  } finally {
    submitingForm.value = false;
    form.data.email = "";
    form.data.password = "";
  }
};

useHead({
  title: "Admin Sign In - Zacrac",
  meta: [
    {
      key: "description",
      name: "description",
      content: "Admin portal sign in - Zacrac Market Research",
    },
    {
      key: "robots",
      name: "robots",
      content: "noindex,follow",
    },
  ],
});
</script>

<style scoped>
.body {
  min-height: 100vh;
}

.image {
  background-image: url("/imageAuth.svg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
}

.btn-admin {
  background: linear-gradient(135deg, #000462 0%, #1a1a8a 100%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-admin:hover {
  background: linear-gradient(135deg, #1a1a8a 0%, #000462 100%);
}

/* Input focus states */
input:focus {
  box-shadow: 0 0 0 3px rgba(0, 4, 98, 0.1);
}

/* Smooth transitions */
* {
  transition: all 0.2s ease;
}
</style>
