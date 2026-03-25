<template>
  <div>
    <div class="text-dark w-full px-5 lg:px-36 mt-28">
      <div class="text-center">
        <h3 class="md:text-6xl text-4xl text-center font-semibold mb-4 w-full">
          We'd love to hear from you.
        </h3>
        <!-- <p class="w-full text-center leading-6">
          We (Zacrac) combine research, data and analytics, to help brands
          unlock insights and identify market opportunities.
        </p> -->
      </div>
      <div class="md:gap-20 md:flex mt-10 md:mt-16 mb-10">
        <div class="md:w-5/12 w-full mb-5">
          <p class="text-lg lg:text-xl text-left font-medium mb-6 w-full">
            Share your data-related business requirements with us, and we will
            discover the most suitable solution tailored to your needs.
          </p>
          <p class="mb-3">Zacrac is trusted by:</p>
          <div class="flex flex-wrap gap-8 items-center mb-10">
            <div class="">
              <img class="h-12" src="/logos/dragnet.png" alt="" />
            </div>
            <div class="">
              <img class="h-12" src="/logos/bimkaf.png" alt="" />
            </div>
            <div class="">
              <img class="h-12" src="/logos/chiken.png" alt="" />
            </div>

            <div class="">
              <img class="h-12" src="/logos/gidi.png" alt="" />
            </div>
            <div class="">
              <img class="h-12" src="/logos/porter.png" alt="" />
            </div>
            <div class="">
              <img class="max-w-[150px]" src="/logos/olu.png" alt="" />
            </div>
          </div>
        </div>
        <div class="md:w-5/12">
          <form
            @submit.prevent="submitForm"
            class="bg-white shadow-sm border border-[#DDDDDD] rounded-md"
          >
            <p class="text-left py-2 font-medium">
              For any questions, shoot us a message.
            </p>
            <div class="">
              <div class="form-input">
                <label for="fulllName">Full name</label>
                <input
                  class="w-full"
                  v-model="form.fullName"
                  type="text"
                  required
                  name="fulllName"
                  placeholder=""
                />
              </div>
            </div>
            <div class="">
              <div class="form-input">
                <label for="busEmail">Business email</label>
                <input
                  class="w-full"
                  v-model="form.businessEmail"
                  type="email"
                  required
                  name="busEmail"
                  placeholder=""
                />
              </div>
            </div>
            <div class="">
              <div class="form-input">
                <label for="hear">How did you hear about us</label>
                <input
                  class="w-full"
                  v-model="form.howDidYouHearAboutUs"
                  type="text"
                  required
                  name="hear"
                />
              </div>
            </div>
            <div class="">
              <div class="form-input">
                <label for="message">Message</label>
                <textarea
                  id=""
                  v-model="form.message"
                  name="message"
                  class="w-full"
                ></textarea>
              </div>
            </div>
            <div class="mt-10 mb-5">
              <button type="submit" class="btn-secondary w-full pt-4">
                <Spinner v-if="submitingForm" />
                <span v-show="!submitingForm">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="px-5 lg:px-20 py-16 w-full bg-[#FFF6F6]">
      <div class="text-dark md:w-9/12">
        <h2 class="text-2xl font-semibold">Connect with one of our offices</h2>
        <p class="py-4 mb-6">We have offices in three locations.</p>
      </div>
      <div class="flex flex-col md:flex-row gap-5 w-full">
        <div class="md:w-1/3">
          <div class="">
            <img class="w-full" src="/zacracUSA.png" alt="" />
          </div>
          <div class="mt-4">
            <div class="flex gap-3 items-center">
              <img src="/location.svg" alt="" />
              <p class="font-medium">United state</p>
            </div>
            <p class="py-2">123 Main Street, Austin, Texas, 78701.</p>
          </div>
        </div>
        <div class="md:w-1/3">
          <div class="">
            <img class="w-full" src="/zacracAkure.png" alt="" />
          </div>
          <div class="mt-4">
            <div class="flex gap-3 items-center">
              <img src="/location.svg" alt="" />
              <p class="font-medium">Akure, Ondo State</p>
            </div>
            <p class="py-2">
              2nd Floor, Sovereign Trust Insurance Building, Alagbaka.
            </p>
          </div>
        </div>
        <div class="md:w-1/3">
          <div class="">
            <img class="w-full" src="/zacracLagos.png" alt="" />
          </div>
          <div class="mt-4">
            <div class="flex gap-3 items-center">
              <img src="/location.svg" alt="" />
              <p class="font-medium">Lagos, State</p>
            </div>
            <p class="py-2">123 Main Street, Ikeja, Lagos Nigeria, 78701..</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Spinner from "~/components/Spinner.vue";
import axios from "axios";

interface ToastInterface {
  success(message: string, duration?: number): void;
  error(message: string, duration?: number): void;
  warning(message: string, duration?: number): void;
  info(message: string, duration?: number): void;
  remove(id: string): void;
}

const nuxtApp = useNuxtApp();
const $toast = nuxtApp.$toast as ToastInterface | undefined;

const submitingForm = ref(false);
const form = reactive({
  businessEmail: "",
  fullName: "",
  howDidYouHearAboutUs: "",
  message: "",
});

const submitForm = async () => {
  const url = "https://zacracapi.onrender.com/form/contact";
  submitingForm.value = true;
  try {
    await axios.post(url, form);
    // Use toast if available
    if ($toast) {
      $toast.success("Form submitted successfully. We'll be in touch.");
    }
    form.fullName = "";
    form.businessEmail = "";
    form.howDidYouHearAboutUs = "";
    form.message = "";
  } catch (err: any) {
    if ($toast) {
      $toast.error("Unable to submit form. Try again after an hour.");
    }
    console.log(err.response?.data?.message);
  } finally {
    submitingForm.value = false;
  }
};

useHead({
  title: "Contact us - Zacrac",
  meta: [
    {
      key: "description",
      name: "description",
      content:
        "Share your data-related business requirements with us, and we will discover the most suitable solution tailored to your needs.",
    },
    {
      key: "robots",
      name: "robots",
      content: "index,follow",
    },
    {
      key: "keywords",
      name: "keywords",
      content:
        "Data analysis, market research, training, Akure, Nigeria, Survey, polls, marketting",
    },
    {
      property: "og:title",
      content: "Contact us - Zacrac",
    },
    {
      property: "og:description",
      content:
        "Share your data-related business requirements with us, and we will discover the most suitable solution tailored to your needs.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://zacrac.com/contact-us",
    },
    {
      property: "og:image",
      content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
    },
    {
      property: "twitter:title",
      content: "Contact us - Zacrac",
    },
    {
      property: "twitter:description",
      content:
        "Share your data-related business requirements with us, and we will discover the most suitable solution tailored to your needs.",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: "https://zacrac.com/contact-us",
    },
  ],
});
</script>

<style scoped>
form {
  background: #fff;
  padding: 24px 24px;
}

form .form-input {
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
}

form .form-input input {
  border: 0.5px solid #161616;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 300;
  outline: none;
  padding: 0.5rem 5px;
}
form .form-input select {
  border: 0.5px solid #161616;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 300;
  outline: none;
  padding: 0.5rem 5px;
}
form .form-input textarea {
  border: 0.5px solid #161616;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 300;
  outline: none;
  padding: 1rem 5px;
}
form .form-input label {
  color: #161616;
  font-size: 16px;
  padding: 10px 0;
}
</style>
