<template>
  <div class="admin-layout">
    <SideNav :toggleLogout="handleLogout" />
    <div class="admin-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const handleLogout = () => {
  // Handle logout logic
  navigateTo("/admins/sign-in");
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
}

.admin-content {
  flex: 1;
  padding: 0;
  background: #f8f9fa;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .admin-content {
    margin-left: 0;
  }
}
</style>
