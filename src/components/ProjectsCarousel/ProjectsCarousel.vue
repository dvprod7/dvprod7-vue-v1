<template>
  <section class="projects-main">
    <div class="row center-content">
      <div class="col-10">
        <h2>{{ t('projects.title') }}</h2>
      </div>
      <div class="col-2">
        <div class="carousel-nav-container">
          <button class="carousel-arrow left" @click="prevSlide">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17.1783" cy="17.1783" r="17.1783" fill="#F5F749" />
              <path d="M21.0286 8.88538L12.4395 17.4745L21.0286 26.0637" stroke="#0D160B" />
            </svg>
          </button>
          <button class="carousel-arrow right" @click="nextSlide">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17.8217" cy="17.1783" r="17.1783" fill="#F5F749" />
              <path d="M13.527 8.58911L22.1162 17.1783L13.527 25.7675" stroke="#0D160B" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="row carousel-wrapper center-content">
      <!-- Carrusel -->
      <div class="carousel-inner">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="slide" v-for="(group, index) in groupedProjects" :key="index">
            <div class="row">
              <div class="card__container" :class="isMobile ? 'col-12' : 'col-md-4'" v-for="(project, idx) in group"
                :key="idx">
                <ProjectCard :key="project.id" :project="project" @view-detail="goToDetail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use '@/styles/grid';
@use './ProjectsCarousel';
</style>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/ProjectCard/ProjectCard.vue'
import useI18n from '@/lang/useLang'

const { language, t } = useI18n()

const currentSlide = ref(0)
const projects = ref([])
const isMobile = ref(false)

function handleResize() {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

function loadProjects(lang) {
  if (lang === 'es') {
    import('@/data/projects.es.json').then((module) => {
      projects.value = module.default
    })
  } else {
    import('@/data/projects.en.json').then((module) => {
      projects.value = module.default
    })
  }
}

// Cargar proyectos inicialmente según el idioma actual
loadProjects(language.value)

// Observar cambios en el idioma
watch(language, (newLang) => {
  loadProjects(newLang)
})

const groupedProjects = computed(() => {
  const size = isMobile.value ? 1 : 3
  const chunks = []
  for (let i = 0; i < projects.value.length; i += size) {
    chunks.push(projects.value.slice(i, i + size))
  }
  return chunks
})

function nextSlide() {
  if (currentSlide.value < groupedProjects.value.length - 1) {
    currentSlide.value++
  }
}

function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const router = useRouter()

function goToDetail(id) {
  console.log('ID recibido:', id)
  router.push(`/project/${id}`)
}
</script>
