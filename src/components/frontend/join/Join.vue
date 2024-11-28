<template>
  <div class="min-h-screen bg-gradient-to-br from-white to-gray-50">
    <!-- Hero Section -->
    <section class="relative h-[500px] overflow-hidden m-0">
      <div class="absolute inset-0 z-10 bg-black/40"></div>
      <img
        src="/Rejoignez-nous.jpg"
        alt="Rejoignez-nous"
        class="object-cover w-full h-full transition-transform duration-1000 transform scale-105"
      />
      <div class="absolute inset-0 z-20 flex items-center justify-center">
        <div class="space-y-4 text-center">
          <h1 class="mb-6 text-6xl font-bold text-white">Rejoignez-nous</h1>
          <div class="flex justify-center space-x-2">
            <div class="w-16 h-1 bg-[#0A7303]"></div>
            <div class="w-16 h-1 bg-[#FF0303]"></div>
            <div class="w-16 h-1 bg-[#FFFF02]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="relative z-30 max-w-6xl px-4 mx-auto -mt-20">
      <div class="grid gap-8 md:grid-cols-2">
        <!-- Horaires Card -->
        <div
          class="transition-all duration-300 transform bg-white backdrop-blur-lg bg-opacity-95 hover:shadow-xl hover:-translate-y-2"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <div class="p-8">
            <div class="flex items-center mb-6 space-x-4">
              <div class="p-3 rounded-full bg-[#0A7303] text-white">
                <Clock class="w-6 h-6" />
              </div>
              <h2 class="text-2xl font-bold text-gray-800">
                Horaires des Permanences
              </h2>
            </div>

            <div class="space-y-4">
              <div class="flex items-center space-x-3 text-gray-700">
                <Clock class="text-[#FF0303] h-5 w-5" />
                <p>Tous les mercredis de 14h à 17h</p>
              </div>
              <div class="flex items-center space-x-3 text-gray-700">
                <MapPin class="text-[#FF0303] h-5 w-5" />
                <p>Local associatif - Campus de Lyon</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Documents Card -->
        <div
          class="transition-all duration-300 transform bg-white backdrop-blur-lg bg-opacity-95 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="p-8">
            <div class="flex items-center mb-6 space-x-4">
              <div class="p-3 rounded-full bg-[#FFFF02]">
                <FileText class="w-6 h-6 text-gray-800" />
              </div>
              <h2 class="text-2xl font-bold text-gray-800">
                Documents Nécessaires
              </h2>
            </div>

            <ul class="space-y-4">
              <li class="flex items-center space-x-3 text-gray-700 group">
                <CheckCircle
                  class="text-[#0A7303] group-hover:scale-110 transition-transform h-5 w-5"
                />
                <span>Carte d'étudiant ou justificatif de résidence</span>
              </li>
              <li class="flex items-center space-x-3 text-gray-700 group">
                <CheckCircle
                  class="text-[#0A7303] group-hover:scale-110 transition-transform h-5 w-5"
                />
                <span>Pièce d'identité</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contact Button -->
      <div class="mt-12 text-center">
        <button
          class="group bg-[#0A7303] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0A7303]/90 active:bg-[#FFFF02] animate-bounce transition-all duration-300 flex items-center space-x-2 mx-auto"
        >
          <span>Nous Contacter</span>
          <ChevronRight
            class="w-5 h-5 transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Clock,
  MapPin,
  FileText,
  CheckCircle,
  ChevronRight,
} from "lucide-vue-next";

export default {
  components: {
    Clock,
    MapPin,
    FileText,
    CheckCircle,
    ChevronRight,
  },
  setup() {
    const isHovered = ref(false);

    return {
      isHovered,
    };
  },
};
</script>

<style scoped>
/* Ajoutez ici les styles supplémentaires si nécessaire */
</style>
