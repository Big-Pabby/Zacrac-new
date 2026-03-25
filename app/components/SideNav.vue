<template>
  <div class="sidenav">
    <nav
      class="flex flex-col modal-scroll justify-between h-full overflow-y-scroll"
    >
      <div>
       <img class="-ml-6 mb-4 w-[200px]" src="/logo_blue.png" alt="" />
        <!-- <div
          v-if="
            $auth.user?.role &&
            ($auth.user?.role === 'SuperAdmin' ||
              $auth.user?.role[0] === 'Admin' ||
              $auth.user?.role[0] === 'OrderAdmin')
          "
          class="mb-4"
        >
          <nuxt-link class="flex gap-3 items-center" to="/dashboard">
            <div class="nav-dash"></div>
            <span>Dashboard</span>
          </nuxt-link>
        </div>
        <div
          class="mb-4"
          v-if="
            $auth.user?.role &&
            ($auth.user?.role === 'SuperAdmin' ||
              $auth.user?.role[0] === 'Admin' ||
              $auth.user?.role[0] === 'OrderAdmin')
          "
        >
          <nuxt-link class="flex gap-3 items-center" to="/admins/users">
            <div class="nav-account"></div>
            <span>Users</span>
          </nuxt-link>
        </div>
        <div class="mb-4" v-if="!$auth.user?.role">
          <div
            :class="{ active: accounts }"
            class="drop flex gap-3 items-center"
            @click="togglenav('accounts')"
          >
            <div class="nav-account"></div>
            <span>My Account</span>
            <i class="uil uil-angle-down text-lg"></i>
          </div>
          <div v-show="accounts">
            <nuxt-link
              class="sub-links"
              :to="{ name: 'my-account', hash: '#info' }"
            >
              Personal Information
            </nuxt-link>
            <nuxt-link
              class="sub-links"
              :to="{ name: 'my-account', hash: '#password' }"
            >
              Update Password
            </nuxt-link>
            <div
              v-if="!$auth.user?.enableTwoFactorAuth"
              id="twofa"
              class="cursor-pointer"
              @click="toggleLogout('twoFA')"
            >
              Enable 2FA
            </div>
            <div
              v-else
              id="twofa"
              class="cursor-pointer"
              @click="toggleLogout('twoFA')"
            >
              Disable 2FA
            </div>
          </div>
        </div>
        <div
          class="mb-4"
          v-if="
            $auth.user?.role &&
            ($auth.user?.role === 'SuperAdmin' ||
              $auth.user?.role[0] === 'Admin' ||
              $auth.user?.role[0] === 'OrderAdmin')
          "
        >
          <nuxt-link class="flex gap-3 items-center" to="/admins/projects">
            <div class="nav-project"></div>
            <span>Projects</span>
          </nuxt-link>
        </div>
        <div class="mb-4" v-if="!$auth.user?.role">
          <div
            :class="{ active: projects }"
            class="drop flex gap-3 items-center"
            @click="togglenav('projects')"
          >
            <div class="nav-project"></div>
            <span>My Projects</span>
            <i class="uil uil-angle-down text-lg"></i>
          </div>
          <div v-show="projects">
            <nuxt-link
              class="sub-links"
              :to="{ name: 'my-projects', query: { type: 'all' } }"
            >
              All Projects
            </nuxt-link>
            <nuxt-link
              class="sub-links"
              :to="{ name: 'my-projects', query: { type: 'Market Research' } }"
            >
              Market Research
            </nuxt-link>
            <nuxt-link
              class="sub-links"
              :to="{
                name: 'my-projects',
                query: { type: 'Analytics as a service' },
              }"
            >
              Analytics-as-a-Service
            </nuxt-link>
          </div>
        </div>
        <div
          class="mb-4"
          v-if="
            $auth.user?.role &&
            ($auth.user?.role === 'SuperAdmin' ||
              $auth.user?.role[0] === 'Admin' ||
              $auth.user?.role[0] === 'OrderAdmin')
          "
        >
          <nuxt-link
            class="flex gap-3 items-center"
            to="/admins/project-managers"
          >
            <div class="nav-projectManagers"></div>
            <span>Project Managers</span>
          </nuxt-link>
        </div> -->
        <div class="mb-4">
          <nuxt-link class="flex gap-3 items-center" to="/admins/posts">
            <div class="nav-blog"></div>
            <span>Posts</span>
          </nuxt-link>
        </div>
        <!-- <div class="mb-4" v-if="!$auth.user?.role">
          <nuxt-link class="flex gap-3 items-center" to="/payment">
            <div class="nav-payment"></div>
            <span>Payment</span>
          </nuxt-link>
        </div> -->
        <!-- <div class="mb-4">
          <div
            :class="{ active: supports }"
            class="drop flex gap-3 items-center"
            @click="togglenav('supports')"
          >
            <div class="nav-support"></div>
            <span>Support</span>
            <i class="uil uil-angle-down text-lg"></i>
          </div>
          <div v-show="supports">
            <nuxt-link class="sub-links" to="/my-projects/all">
              Live Chat
            </nuxt-link>
            <nuxt-link class="sub-links" to="/my-projects/password-security">
              Email
            </nuxt-link>
          </div>
        </div> -->
      </div>
      <div>
        <div class="mb-4">
          <nuxt-link class="flex gap-3 items-center" to="/admins/settings">
            <div class="nav-setting"></div>
            <span>Settings</span>
          </nuxt-link>
        </div>
        <div class="mb-4">
          <div
            @click="toggleLogout('Logout')"
            class="drop flex gap-3 items-center"
          >
            <div class="nav-logout"></div>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["toggleLogout"],
  data() {
    return {
      accounts: false,
      projects: false,
      supports: false,
      role: "admin",
    };
  },
  methods: {
    togglenav(value) {
      if (value === "accounts") {
        this.accounts = !this.accounts;
      } else if (value === "projects") {
        this.projects = !this.projects;
      } else if (value === "supports") {
        this.supports = !this.supports;
      }
    },
  },
};
</script>

<style scoped>
.sidenav {
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 90;
  width: 220px;
  height: 100vh;
  overflow: hidden;
  padding-bottom: 20px;
}

.sidenav .modal-scroll::-webkit-scrollbar {
  display: none;
}

.sidenav a {
  width: 100%;
  padding: 10px 24px;
  color: #404053;
  transition: all 400ms ease-in-out;
}

.sidenav a .nav-dash {
  background: url("/user/dashboard1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a .nav-account {
  background: url("/user/user-tick1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a .nav-setting {
  background: url("/user/setting1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a .nav-blog {
  background: url("/user/book2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a .nav-projectManagers {
  background: url("/user/people.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a .nav-payment {
  background: url("/user/moneys1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a .nav-project {
  background: url("/user/folder-open2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}

.sidenav a:hover {
  background: #000066;
  color: #fff;
}

.sidenav a:hover .nav-dash {
  background: url("/user/dashboard2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a:hover .nav-projectManagers {
  background: url("/user/people2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a:hover .nav-blog {
  background: url("/user/book.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a:hover .nav-account {
  background: url("/user/user-tick2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a:hover .nav-setting {
  background: url("/user/setting2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a:hover .nav-payment {
  background: url("/user/moneys2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a:hover .nav-project {
  background: url("/user/folder-open1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}

.sidenav a.nuxt-link-exact-active {
  background: #000066;
  color: #fff;
}

.sidenav a.nuxt-link-exact-active .nav-dash {
  background: url("/user/dashboard2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a.nuxt-link-exact-active .nav-projectManagers {
  background: url("/user/people2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a.nuxt-link-exact-active .nav-blog {
  background: url("/user/book.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a.nuxt-link-exact-active .nav-project {
  background: url("/user/folder-open1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a.nuxt-link-exact-active .nav-account {
  background: url("/user/user-tick2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a.nuxt-link-exact-active .nav-logout {
  background: url("/user/logout2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a.nuxt-link-exact-active .nav-setting {
  background: url("/user/setting2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav a.nuxt-link-exact-active .nav-payment {
  background: url("/user/moneys2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}

.sidenav .drop {
  width: 100%;
  padding: 10px 24px;
  cursor: pointer;
  color: #404053;
  transition: all 400ms ease-in-out;
}

.sidenav .drop .nav-account {
  background: url("/user/user-tick1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav .drop .nav-logout {
  background: url("/user/logout1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav .drop .nav-project {
  background: url("/user/folder-open2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav .drop .nav-support {
  background: url("/user/message-question1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}

.sidenav .drop:hover {
  background: #000066;
  color: #fff;
}

.sidenav .drop:hover .nav-account {
  background: url("/user/user-tick2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav .drop:hover .nav-logout {
  background: url("/user/logout2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav .drop:hover .nav-support {
  background: url("/user/message-question2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
.sidenav .drop:hover .nav-project {
  background: url("/user/folder-open1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
}
</style>
