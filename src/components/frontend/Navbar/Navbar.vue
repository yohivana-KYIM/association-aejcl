<template>
  <header class="sticky top-0 z-50 bg-white shadow-md bg-pattern">
    <nav class="container flex items-center justify-between h-20 px-6 mx-auto lg:px-10">
      <!-- Logo Section with Advanced Interactions -->
      <div 
        class="flex items-center cursor-pointer group" 
        @click="goToHome"
        @mouseenter="logoHover = true"
        @mouseleave="logoHover = false"
      >
      <img 
  src="/logo-aejcl/lyon.png" 
  alt="AEJC Lyon Logo" 
  :class="[
    'mr-4 h-14 lg:h-16 transition-all duration-300',
    logoHover ? 'scale-105 rotate-3 drop-shadow-lg' : 'scale-100'
  ]"
/>

        <span class="text-xl lg:text-2xl font-extrabold text-[#0A7303]">AEJC Lyon</span>
      </div>

      <!-- Desktop Navigation -->
      <ul class="items-center hidden space-x-8 text-gray-700 lg:flex">
        <li 
          v-for="route in routes" 
          :key="route.path"
          class="relative group"
        >
          <router-link 
            :to="route.path" 
            class="nav-link relative inline-block group-hover:text-red-500 transition-colors duration-300"
          >
            {{ route.name }}
            <span 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            ></span>
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button
        class="lg:hidden text-[#0A7303] focus:outline-none transform transition-transform active:scale-95"
        @click="toggleMenu"
      >
        <svg
          class="w-8 h-8 transition-all duration-300 hover:rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu with Slide Transition -->
    <transition 
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-[-20px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-20px]"
    >
      <div
        v-if="isMenuOpen"
        class="absolute inset-x-0 z-40 bg-white shadow-md lg:hidden top-20"
      >
        <ul class="flex flex-col items-center py-4 space-y-4 text-gray-700">
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path" class="nav-link">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
      logoHover: false,
      routes: [
        { path: '/about', name: 'À propos' },
        { path: '/events', name: 'Événements' },
        { path: '/join', name: 'Rejoindre-nous' },
        { path: '/rules', name: 'Statuts et Règlement' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    goToHome() {
      this.$router.push('/');
    }
  },
  mounted() {
    // Close mobile menu when route changes
    this.$watch('$route', () => {
      this.isMenuOpen = false;
    });
  }
};
</script>

<style scoped>
/* Existing background pattern styles */
.bg-pattern {
  background-color: #fff;
  background-image: 
    linear-gradient(45deg, #ffff00 15%, transparent 15%),
    linear-gradient(-45deg, #ffff00 15%, transparent 15%),
    linear-gradient(45deg, transparent 85%, #ffff00 85%),
    linear-gradient(-45deg, transparent 85%, #ffff00 85%);
  background-size: 10px 10px;
  background-position: 0 0, 0 5px, 5px -5px, -5px 0;
}

/* Navigation links with refined hover effects */
.nav-link {
  @apply relative px-2 py-1 font-medium text-gray-800 
         transition-colors duration-300 
         hover:text-red-500;
}

/* Accessible focus states */
.nav-link:focus {
  @apply outline-none ring-2 ring-red-300 rounded;
}
</style>