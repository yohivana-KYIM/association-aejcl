<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="w-full max-w-5xl">
      <div class="overflow-hidden bg-white shadow-2xl rounded-2xl">
        <div class="relative h-[400px] flex">
          <!-- Activités Section -->
          <div
            class="flex flex-col justify-center w-full p-8 bg-center bg-cover md:w-2/3"
            style="background-image: url('/arriereplan.jpg')"
          >
            <transition-group name="slide" tag="div">
              <div
                v-for="(activity, index) in activities"
                :key="activity.title"
                v-show="currentIndex === index"
                class="space-y-6 animate-fade-in"
              >
                <div class="flex items-center mb-4 space-x-4">
                  <span class="text-5xl">{{ activity.icon }}</span>
                  <h2 class="text-2xl font-semibold text-gray-700">
                    {{ activity.title }}
                  </h2>
                </div>

                <p class="text-lg font-bold leading-relaxed text-white">
                  {{ activity.description }}
                </p>

                <div class="flex mt-6 ml-auto space-x-4">
                  <button
                    @click="prevSlide"
                    class="p-3 text-white transition bg-green-600 rounded-full hover:bg-green-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    @click="nextSlide"
                    class="p-3 text-white transition bg-red-600 rounded-full hover:bg-red-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </transition-group>
          </div>

          <!-- Sidebar with Activity Indicators -->
          <div class="hidden w-1/3 p-6 bg-gray-100 md:block">
            <h3 class="mb-6 text-xl font-bold text-gray-800">
              Liste des Activités
            </h3>
            <div class="space-y-4">
              <div
                v-for="(activity, index) in activities"
                :key="activity.title"
                @click="setSlide(index)"
                class="p-4 transition duration-300 transform rounded-lg cursor-pointer hover:scale-105"
                :class="{
                  'bg-green-500 text-white': currentIndex === index,
                  'bg-white text-gray-700 hover:bg-gray-200':
                    currentIndex !== index,
                }"
              >
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">{{ activity.icon }}</span>
                  <span class="font-medium">{{ activity.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      activities: [
        {
          title: "Événements culturels",
          description:
            "Organisation de soirées, festivals et ateliers pour découvrir et célébrer la riche culture camerounaise. Venez partager des moments authentiques et découvrir les traditions de notre pays.",
          icon: "🎭",
          color: "#0A7303",
        },
        {
          title: "Soirées d'intégration",
          description:
            "Des moments conviviaux et chaleureux spécialement conçus pour accueillir et intégrer les nouveaux membres. Créez des liens, partagez des expériences et faites partie de notre grande famille.",
          icon: "👥",
          color: "#FF0303",
        },
        {
          title: "Soutien académique",
          description:
            "Un accompagnement personnalisé dans vos études. Partage de ressources, mentorat, groupes d'étude et conseils pour réussir académiquement. Ensemble, nous grandissons et progressons.",
          icon: "📚",
          color: "#FFFF02",
        },
        {
          title: "Rencontres sportives",
          description:
            "Promotion du bien-être et de l'esprit d'équipe à travers diverses activités sportives. Participez à des tournois, des entraînements et des compétitions amicales.",
          icon: "⚽",
          color: "#B7B0AB",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.activities.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.activities.length) %
        this.activities.length;
    },
    setSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@media (max-width: 767px) {
  .sidebar {
    display: none;
  }

  .main-content {
    width: 100%;
  }
}
</style>
