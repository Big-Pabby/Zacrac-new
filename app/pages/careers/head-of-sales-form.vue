<template>
  <div>
    <div>
      <div class="px-5 md:px-36 mt-32 mb-20">
        <div
          class="bg-[#EEEFFF] text-primary flex items-center justify-center rounded-2xl w-20 h-10 py-2"
        >
          Career
        </div>
        <div class="flex justify-between items-center py-3">
          <h2 class="text-2xl md:text-4xl font-semibold">
            Head of Sales.
          </h2>
          <button
            class="bg-secondary text-white px-4 flex items-center rounded-md py-3"
          >
            Apply
          </button>
        </div>
        <p class="font-light mt-2">
          We hold the belief that achieving economic prosperity is within reach,
          alongside the conviction that successful entrepreneurship in emerging
          markets can thrive without unnecessary barriers. <br />

          Our core mission revolves around ensuring widespread access to
          economic prosperity. In pursuit of this mission, we are actively
          seeking individuals who are not only the best in their fields but also
          deeply aligned with our purpose, as they play a crucial role in our
          journey to accomplish this goal.
        </p>
        <form class="my-10 md:w-8/12">
          <div class="">
            <div class="form-input">
              <label for="name">Name</label>
              <input
                class="w-full"
                v-model="form.data.name"
                type="text"
                required
                name="name"
                placeholder=""
              />
            </div>
          </div>
          <div class="">
            <div class="form-input">
              <label for="email">Email address</label>
              <input
                class="w-full"
                v-model="form.data.email"
                type="email"
                required
                name="email"
                placeholder=""
              />
            </div>
          </div>
          <div class="">
            <div class="form-input">
              <label for="phone">Phone number</label>
              <input
                class="w-full"
                v-model="form.data.phone"
                type="text"
                required
                name="phone"
              />
            </div>
          </div>
          <div class="">
            <div class="form-input">
              <label for="Linkedin">Linkedin profile</label>
              <input
                type="url"
                v-model="form.data.Linkedin"
                name="Linkedin"
                id=""
              />
            </div>
          </div>
          <div class="">
            <div class="form-input">
              <label for="other">Other information </label>
              <input type="url" v-model="form.data.other" name="other" id="" />
            </div>
          </div>
          <div class="">
            <div class="form-input">
              <label for="other">Resume / CV</label>
              <div class="" v-if="!form.data.resumeFile">
                <label
                  htmlFor="resume"
                  className="upload-resume-doc p-2 my-4 text-white"
                >
                  <input
                    type="file"
                    required
                    :value="form.data.resumeFile"
                    accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf"
                    @change="uploadResume"
                    name="resume"
                    id="resume"
                    class="resume-input"
                  />
                  <div
                    class="flex gap-3 bg-[#767c89] text-white w-36 rounded-xl py-2 items-center px-2"
                  >
                    <div class="">
                      <img src="/company/attachment.svg" alt="" />
                    </div>
                    <div class="self-center">
                      <span class="font-light">Attach file</span>
                    </div>
                  </div>
                </label>
              </div>
              <div
                v-else
                class="flex border border-[#DDDDDD] mt-4 rounded-md gap-4 items-center"
              >
                <div
                  @click="form.data.resumeFile = ''"
                  class="bg-[#E9E9E9] flex justify-center items-center h-20 w-24"
                >
                  <img src="/company/article-fill.png" alt="" />
                </div>
                <!-- <button  class="">
                  <i class="fa-solid fa-paperclip"></i>
                </button> -->
                <span class="">
                  {{ form.data.resumeFile.name }}
                </span>
              </div>
            </div>
          </div>
          <div class="mt-10 mb-5 flex w-40">
            <button type="submit" class="btn-secondary pt-4">
          
              <span v-show="!submitingForm">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  

  data() {
    return {
      submitingForm: false,
      form: {
        data: {
          email: null,
          name: "",
          Linkedin: "",
          phone: "",
          other: "",
          resumeFile: null,
        },
      },
    };
  },
  methods: {
    uploadResume(input) {
      let files = input.target.files;
      this.form.data.resumeFile = files[0];
      console.log(this.form.data.resumeFile);
    },
  },
  head() {
    return {
      title: "Zacrac - Head of Sales Application form",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Join the dynamic team at Zacrac as the Head of Sales and play a pivotal role in driving our revenue growth and market expansion.",
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
            "Join the dynamic team at Zacrac as the Head of Sales and play a pivotal role in driving our revenue growth and market expansion.",
        },
        {
          property: "og:title",
          content: "Zacrac - Market research and data science company",
          vmid: "og:title",
        },
        {
          property: "og:descrition",
          content:
            "Join the dynamic team at Zacrac as the Head of Sales and play a pivotal role in driving our revenue growth and market expansion.",
          vmid: "og:description",
        },
        {
          property: "og:type",
          content: "website",
          vmid: "og:type",
        },
        {
          property: "og:url",
          content: "https://zacrac.com/",
          vmid: "og:url",
        },
        {
          property: "og:image",
          content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
          vmid: "og:image",
        },
        {
          property: "twitter:title",
          content: "Zacrac - Market research and data science company",
          vmid: "og:title",
        },
        {
          property: "twitter:descrition",
          content:
            "Join the dynamic team at Zacrac as the Head of Sales and play a pivotal role in driving our revenue growth and market expansion.",
          vmid: "og:description",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
          vmid: "og:type",
        },
        {
          property: "twitter:url",
          content: "https://zacrac.com/",
          vmid: "og:url",
        },
        {
          property: "og:image",
          content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
          vmid: "og:image",
        },
      ],
    };
  },
};
</script>

<style scoped>
form {
  background: #fff;
}

form .form-input {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

form .form-input input {
  border: 1px solid #dddddd;
  border-radius: 10px;
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
  padding: 1.5rem 5px;
}
form .form-input label {
  color: #161616;
  font-size: 16px;
  padding: 10px 0;
}
.resume-input {
  display: none;
}
</style>
