<template>
  <div v-if="project">
    <!-- hero -->
    <section class="project-hero__container">
      <div class="row center-content">
        <div class="col-12 col-md-6 order-1 order-sm-2">
          <h2>{{ project.title }}</h2>
          <p v-html="project.description"></p>
          <div class="project-hero__cta">
            <a :href="project.deployURL" class="ui-btn">{{ project.ctaTXTdeploy }}</a>
            <a :href="project.codeUrl" class="ui-btn blue-btn">{{ project.ctaTXTcode }}</a>
            <a href="#contact" class="ui-btn dark-btn">{{ project.ctaTXThireme }}</a>
          </div>
        </div>
        <div class="col-12 col-md-6 order-2 order-sm-1 center-content hero-img">
          <img :src="getImagePath(project.image)" alt="Temp" class="img-fluid">
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <p>Proyecto no encontrado</p>
  </div>
</template>

<style lang="scss">
@use '@/styles/grid';
@use './ProjectDetail';
</style>

<script setup>
import { computed, watch, onMounted, nextTick, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import useI18n from '@/lang/useLang'
import projectsDataEs from '@/data/projects.es.json'
import projectsDataEn from '@/data/projects.en.json'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const route = useRoute()
const { language } = useI18n()
const slug = route.params.slug
const images = import.meta.glob('@/assets/*', { eager: true })

// Decidir cuál lista de proyectos usar según el idioma
const selectedProjects = computed(() => {
  return language.value === 'es' ? projectsDataEs : projectsDataEn
})

// Buscamos el proyecto por slug en la lista correcta
const project = computed(() => {
  return selectedProjects.value.find(p => p.slug === slug)
})

function getImagePath(filename) {
  const match = Object.entries(images).find(([path]) => path.includes(filename))
  return match ? match[1].default : ''
}

const scrollToTop = () => {
  nextTick(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

// 🔹 Al montar el componente (cuando entras directo desde otra ruta)
onMounted(() => {
  scrollToTop()
})

// 🔹 Cuando cambia el ID del proyecto (navegación interna)
watch(() => route.params.slug, () => {
  scrollToTop()
})
</script>