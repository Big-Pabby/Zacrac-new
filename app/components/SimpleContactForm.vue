<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] backdrop-blur-[12px]"
    @click="$emit('close')"
  >
    <div
      class="bg-white p-8 rounded-[10px] max-w-[500px] w-[90%] relative border border-[#dddddd]"
      @click.stop
    >
      <div
        class="flex justify-center items-center absolute top-[10px] right-[20px] w-[30px] h-[30px] rounded-full border border-orange cursor-pointer flex items-center justify-center"
        @click="$emit('close')"
      >
        <Icon name="uil:times" class="text-2xl text-orange" />
      </div>
      <div class="pt-4">
        <h2 class="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form
          @submit.prevent="handleSubmit"
          action="https://submit-form.com/ELZEK0CT3"
          class="space-y-4"
        >
          <input
            type="hidden"
            name="_redirect"
            value="https://zacrac.com/submitted"
          />
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Full Name</label
            >
            <input
              type="text"
              id="name"
              v-model="form.name"
              name="name"
              placeholder="Name"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="form.email"
              name="email"
              placeholder="Email"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phone"
              name="phone"
              v-model="form.phone"
              placeholder="Phone"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
          </div>
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700"
              >Company Name</label
            >
            <input
              type="text"
              id="company"
              v-model="form.company"
              name="company"
              placeholder="Company"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Tell us briefly about your business, project or what you're
              looking to achieve</label
            >
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              v-model="form.message"
              rows="4"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            ></textarea>
          </div>
          <button
            :disabled="loader"
            type="submit"
            class="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span
              v-if="loader"
              class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"
            ></span>
            <span>{{ loader ? "Sending..." : "Send" }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

defineProps<{
  visible: boolean;
}>();

defineEmits<{
  close: [];
}>();

const form = reactive<FormData>({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
});

const loader = ref(false);

const handleSubmit = async () => {
  const formData = new FormData();
  for (const key in form) {
    formData.append(key, form[key as keyof FormData]);
  }

  try {
    loader.value = true;
    const response = await fetch("https://submit-form.com/ELZEK0CT3", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // SSR-safe navigation - only navigate on client side
      if (import.meta.client) {
        try {
          const router = useRouter();
          router.push("/submitted");
        } catch (e) {
          // Fallback to window.location if router fails
          window.location.href = "/submitted";
        }
      }
      // Reset form
      form.name = "";
      form.email = "";
      form.phone = "";
      form.company = "";
      form.message = "";
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Submission failed. Please try again.");
  }
  loader.value = false;
};
</script>
