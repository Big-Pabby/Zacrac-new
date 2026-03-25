<template>
  <div>
    <header
      id="main-header"
      class="w-full z-[999] flex justify-between items-center fixed top-0 bg-white left-0 lg:px-20 px-5"
    >
      <div class="lg:-ml-8">
        <nuxt-link to="/">
          <img class="logo2" src="/logo_blue.png" alt="Zacrac Logo" />
        </nuxt-link>
      </div>
      <div
        @click="toggleMenu"
        :class="{ open: isOpen }"
        class="menu-backdrop"
      ></div>
      <div
        :class="{ open: isOpen }"
        class="header-nav menu md:flex hidden flex-row items-center"
      >
        <nav
          class="flex px-4 py-1 flex-row gap-2 rounded-lg bg-white flex-nowrap items-center"
        >
          <!-- <a href="#">About Us</a> -->
          <div
            class="has-drop flex items-center relative"
            @click.prevent="toggleShowDropDown"
          >
            <p class="like-link hover:text-secondary">
              Services
              <Icon name="uil:angle-down" class="text-xl" />
            </p>
            <use-case-menu :links="ServicesLink" />
          </div>
          <div
            class="has-drop flex items-center relative"
            @click.prevent="toggleShowDropDown"
          >
            <p class="like-link hover:text-secondary">
              Process
              <Icon name="uil:angle-down" class="text-xl" />
            </p>
            <use-case-menu :links="process_links" />
          </div>
          <!-- <nuxt-link to="/pricing">Pricing</nuxt-link> -->
          <div
            class="has-drop flex items-center relative"
            @click.prevent="toggleShowDropDown"
          >
            <p class="like-link hover:text-secondary">
              Use Cases
              <Icon name="uil:angle-down" class="text-xl" />
            </p>
            <process-menu />
          </div>
          <div
            class="has-drop flex items-center relative"
            @click.prevent="toggleShowDropDown"
          >
            <p class="like-link hover:text-secondary">
              Resources
              <Icon name="uil:angle-down" class="text-xl" />
            </p>
            <use-case-menu :links="resource_links" />
          </div>
          <div
            class="has-drop flex items-center relative"
            @click.prevent="toggleShowDropDown"
          >
            <p class="like-link hover:text-secondary">
              Company <Icon name="uil:angle-down" class="text-xl" />
            </p>
            <use-case-menu :links="company_links" />
          </div>

          <!-- <a href="#">Resources</a> -->

          <!-- <div
            class="has-drop flex items-center relative"
            @click.prevent="toggleShowDropDown"
          >
            <p class="like-link">
              Resources <Icon name="uil:angle-down" class="text-primary text-xl" />
            </p>
            <ResourceMenu />
          </div> -->
        </nav>
      </div>
      <div class="lg:block hidden">
        <nuxt-link to="/contact-us" class="py-2 px-4 btn-secondary inline-block"
          >Contact Us</nuxt-link
        >
      </div>
      <div
        id="menu-btn"
        class="hamburger"
        :class="{ open: !hidden }"
        @click="openbtn"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </div>
    </header>
    <div :class="{ hidden: hidden }">
      <div id="menu" class="menu-hidden">
        <div
          class="mobile-menu px-4 py-6 min-h-screen animate__animated animate__fadeInLeft"
        >
          <div class="w-full flex items-center justify-between mb-8">
            <span>
              <nuxt-link to="/" @click="closebtn">
                <img
                  class="footer-logo"
                  src="/whitelogo-01-2.svg"
                  alt="Zacrac Logo"
                />
              </nuxt-link>
            </span>
            <button @click="closebtn" class="text-white p-2">
              <img src="/closeIcon.svg" alt="Close Menu" class="w-6 h-6" />
            </button>
          </div>
          <div class="mobile-nav mt-8">
            <!-- <div class="w-full border-white py-4 border-b-2">
                <div class="flex items-center w-full justify-between">
                  <div @click="closebtn">
                    <a href="#" class="text-white" @click="closebtn"
                      >About Us</a
                    >
                  </div>
                </div>
              </div> -->
            <div class="nav w-full border-white py-4 border-b-2">
              <div
                @click="mobilenavDrop('services')"
                class="flex items-center w-full justify-between"
              >
                <p class="text-white">Services</p>
                <Icon name="uil:angle-down" class="text-white text-xl" />
              </div>
              <div class="ml-2 mt-2 flex flex-col gap-2" v-show="services">
                <div
                  v-for="(item, index) in ServicesLink"
                  :key="index"
                  @click="closebtn"
                >
                  <nuxt-link :to="item.link" class="text-white font-normal p-3">
                    {{ item.name }}
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="nav w-full border-white py-4 border-b-2">
              <div
                @click="mobilenavDrop('solutions')"
                class="flex items-center w-full justify-between"
              >
                <p class="text-white">Process</p>
                <Icon name="uil:angle-down" class="text-white text-xl" />
              </div>
              <div class="ml-2 mt-2 flex flex-col gap-2" v-show="solutions">
                <div
                  v-for="(item, index) in process_links"
                  :key="index"
                  @click="closebtn"
                >
                  <nuxt-link :to="item.link" class="text-white font-normal p-3">
                    {{ item.name }}
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="nav w-full border-white py-4 border-b-2">
              <div
                @click="mobilenavDrop('forYou')"
                class="flex items-center w-full justify-between"
              >
                <p class="text-white">Company</p>
                <Icon name="uil:angle-down" class="text-white text-xl" />
              </div>
              <div class="ml-2 mt-2 flex flex-col gap-2" v-show="forYou">
                <div
                  v-for="(item, index) in company_links"
                  :key="index"
                  @click="closebtn"
                >
                  <nuxt-link :to="item.link" class="text-white font-normal p-3">
                    {{ item.name }}
                  </nuxt-link>
                </div>
              </div>
            </div>
            <!-- <div class="nav w-full border-white py-4 border-b-2">
              <div
                @click="mobilenavDrop('products')"
                class="flex items-center w-full justify-between"
              >
                <p class="text-white">Resources</p>
                <Icon name="uil:angle-down" class="text-white text-xl" />
              </div>
              <div class="ml-2 mt-2 flex flex-col gap-2" v-show="products">
                <div @click="closebtn">
                  <nuxt-link to="/blog" class="text-white font-normal">
                    Blog
                  </nuxt-link>
                </div>
                <div @click="closebtn">
                  <nuxt-link to="/blog" class="text-white font-normal">
                    Case Studies
                  </nuxt-link>
                </div>
                <div @click="closebtn">
                  <nuxt-link to="/blog" class="text-white font-normal">
                    Sample Reports
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="nav w-full border-white py-4 border-b-2">
              <div class="flex items-center w-full justify-between">
                <div @click="closebtn">
                  <nuxt-link to="/pricing" class="text-white font-normal"
                    >Pricing</nuxt-link
                  >
                </div>
              </div>
            </div> -->
            <div class="nav w-full border-white py-4 border-b-2">
              <div
                @click="mobilenavDrop('use-cases')"
                class="flex items-center w-full justify-between"
              >
                <p class="text-white">Use Cases</p>
                <Icon name="uil:angle-down" class="text-white text-xl" />
              </div>
              <div class="ml-2 mt-2 flex flex-col gap-2" v-show="useCase">
                <div
                  v-for="(item, index) in use_cases"
                  :key="index"
                  class="text-white font-normal"
                >
                  <p>{{ item.name }}</p>
                  <ul
                    v-for="(ite, index) in item.links"
                    :key="index"
                    @click="closebtn"
                  >
                    <li class="list-disc ml-8">
                      <nuxt-link
                        :to="ite.link"
                        class="text-white font-normal p-3"
                      >
                        {{ ite.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface LinkItem {
  name: string;
  link: string;
  icon: string;
}

interface UseCaseItem {
  name: string;
  links: LinkItem[];
}

defineProps<{
  isOpen: boolean;
  navBar?: boolean;
  showDropDown?: boolean;
  hidden: boolean;
  services: boolean;
  solutions: boolean;
  forYou: boolean;
  products: boolean;
  useCase: boolean;
  toggleMenu: () => void;
  mobilenavDrop: (type: string) => void;
  toggleShowDropDown: () => void;
  openbtn: () => void;
  closebtn: () => void;
}>();

const showFormModal = ref(false);

const ServicesLink: LinkItem[] = [
  {
    name: "Market Research",
    link: "/market-research",
    icon: "/nav-icons/marketeq_research_black.svg",
  },
  {
    name: "Market Intelligence ",
    link: "/market-intelligence",
    icon: "/nav-icons/mingcute_apple-intelligence-line.svg",
  },
  {
    name: "Analytics-as-a-Service",
    link: "/analytics-as-a-service",
    icon: "/nav-icons/hugeicons_analytics-up.svg",
  },
  {
    name: "Customer Reviews and Intelligence ",
    link: "/customer-reviews",
    icon: "/nav-icons/carbon_customer.svg",
  },
  {
    name: "Data Strategy ",
    link: "/data-strategy",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
];

const company_links: LinkItem[] = [
  {
    name: "About Us",
    link: "/about-us",
    icon: "/nav-icons/marketeq_research_black.svg",
  },
  {
    name: "Our Coverage",
    link: "/our-coverage",
    icon: "/nav-icons/mingcute_apple-intelligence-line.svg",
  },
  {
    name: "PartnerShip",
    link: "/partnership",
    icon: "/nav-icons/hugeicons_analytics-up.svg",
  },
  {
    name: "Career",
    link: "/careers",
    icon: "/nav-icons/carbon_customer.svg",
  },
  {
    name: "Contact",
    link: "/contact-us",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
];

const process_links: LinkItem[] = [
  {
    name: "Need Assessment",
    link: "/need-assessment",
    icon: "/nav-icons/fluent_data-area-20-filled.svg",
  },
  {
    name: "Questionnaire Design",
    link: "/questionnaire-design",
    icon: "/nav-icons/fluent-mdl2_questionnaire.svg",
  },
  {
    name: "Participant Recruitment ",
    link: "/participant-recruitment",
    icon: "/nav-icons/fluent-mdl2_recruitment-management.svg",
  },
  {
    name: " Fieldwork and Data Collection",
    link: "/data-collection",
    icon: "/nav-icons/carbon_customer.svg",
  },
  {
    name: "Data Analysis",
    link: "/data-analysis",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
];

const resource_links: LinkItem[] = [
  {
    name: "Blogs",
    link: "/blog",
    icon: "/nav-icons/fluent_data-area-20-filled.svg",
  },
];

const use_cases: UseCaseItem[] = [
  {
    name: "Use Cases",
    links: [
      {
        name: "Starting a New Business",
        link: "/starting-a-new-business",
        icon: "/nav-icons/material-symbols-light_business-chip-outline.svg",
      },
      {
        name: "Market Entry Strategy",
        link: "/market-entry-strategy",
        icon: "/nav-icons/fluent-mdl2_market.svg",
      },
      {
        name: "Customer Satisfaction & Loyalty",
        link: "/customer-satisfaction-and-loyalty",
        icon: "/nav-icons/ix_customer.svg",
      },
      {
        name: "Brand Positioning & Messaging",
        link: "/brand-positioning-and-messaging/",
        icon: "/nav-icons/carbon_database-messaging.svg",
      },
      {
        name: "Competition Analysis ",
        link: "/competition-analysis",
        icon: "/nav-icons/fluent_data-area-20-regular.svg",
      },
    ],
  },
  {
    name: "Market Intelligence",
    links: [
      {
        name: "Competition Monitoring",
        link: "/competition-monitoring",
        icon: "/nav-icons/material-symbols-light_business-chip-outline.svg",
      },
      {
        name: "Industry Trend Analysis",
        link: "/industry-trend-analysis",
        icon: "/nav-icons/fluent-mdl2_market.svg",
      },
      {
        name: "Risk Management",
        link: "/risk-management",
        icon: "/nav-icons/ix_customer.svg",
      },
      {
        name: "Strategic Planning",
        link: "/strategic-planning",
        icon: "/nav-icons/carbon_database-messaging.svg",
      },
    ],
  },
  {
    name: "Analytics-as-a-Service",
    links: [
      {
        name: "Business Intelligence and Reporting",
        link: "/business-intelligence-and-reporting",
        icon: "/nav-icons/material-symbols-light_business-chip-outline.svg",
      },
      {
        name: "Sales Performance Analysis",
        link: "/sales-performance-analysis",
        icon: "/nav-icons/fluent-mdl2_market.svg",
      },
      {
        name: "Customer Segmentation and Targeting",
        link: "/customer-segmentation-and-targeting",
        icon: "/nav-icons/ix_customer.svg",
      },
      {
        name: "Supply Chain Optimization",
        link: "/supply-chain-optimization",
        icon: "/nav-icons/carbon_database-messaging.svg",
      },
      {
        name: "Operational Efficiency ",
        link: "/operational-efficiency",
        icon: "/nav-icons/fluent_data-area-20-regular.svg",
      },
      {
        name: "Employee Performance ",
        link: "/employee-performance",
        icon: "/nav-icons/fluent_data-area-20-regular.svg",
      },
    ],
  },
  {
    name: "Case Studies",
    links: [
      {
        name: "Logistics",
        link: "/case-studies/logistic",
        icon: "/nav-icons/material-symbols-light_business-chip-outline.svg",
      },
      {
        name: "FinTech",
        link: "/case-studies/fintech",
        icon: "/nav-icons/ix_customer.svg",
      },
      {
        name: "Transportation",
        link: "/case-studies/transportation",
        icon: "/nav-icons/carbon_database-messaging.svg",
      },
      {
        name: "HealthCare",
        link: "/case-studies/healthcare",
        icon: "/nav-icons/fluent_data-area-20-regular.svg",
      },
      {
        name: "Auditing",
        link: "/case-studies/auditing",
        icon: "/nav-icons/fluent_data-area-20-regular.svg",
      },
      {
        name: "Remittance",
        link: "/case-studies/remittance",
        icon: "/nav-icons/fluent_data-area-20-regular.svg",
      },
      {
        name: "Consumer Preference",
        link: "/case-studies/consumer-preference",
        icon: "/nav-icons/fluent_data-area-20-regular.svg",
      },
      {
        name: "Breverage",
        link: "/case-studies/breverage-industry",
        icon: "/nav-icons/fluent_data-area-20-regular.svg",
      },
    ],
  },
];

const handleClick = () => {
  showFormModal.value = true;
};
</script>

<style scoped>
/* Logo styles */
.logo2 {
  width: 200px;
  object-fit: contain;
}

/* Dropdown hover effects - these need custom CSS */
.has-drop:hover .drop-down-holder {
  display: flex;
}
.has-drop:hover .menu-backdrop {
  display: block;
  position: fixed;
  top: 57px;
  z-index: 9999999999;
}

/* Link styles */
.like-link {
  display: flex;
  color: #1e1e26;
  font-weight: 600;
  align-items: center;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
}

/* Hamburger hidden by default */
.hamburger {
  display: none;
}

/* Mobile styles */
@media screen and (max-width: 720px) {
  .hamburger {
    display: block;
    cursor: pointer;
    width: 24px;
    padding: 10px 0;
    height: 24px;
    transition: all 0.25s;
    position: relative;
  }

  .hamburger-top,
  .hamburger-middle,
  .hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #000;
    transform: rotate(0);
    transition: all 0.5s;
  }
  .hamburger-middle {
    transform: translateY(7px);
  }

  .hamburger-bottom {
    transform: translateY(14px);
  }
  .hide {
    display: block;
  }
  .nav a:hover {
    color: #dd6e20;
    background: rgba(255, 255, 255, 0.25);
  }
  .nav a.nuxt-link-exact-active {
    color: #dd6e20;
    background: rgba(255, 255, 255, 0.25);
  }
  .mobile-menu {
    height: 100vh;
    overflow-y: auto;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    background: #000066;
  }
  .nav a {
    display: block;
    width: 100%;
  }
}
</style>
