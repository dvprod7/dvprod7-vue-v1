<template>
  <div v-if="project">
    <section class="project-hero__container">
      <div class="row center-content">
        <div class="col-12 col-md-6">
          <h2>{{ project.title }}</h2>
          <p v-html="project.description"></p>
        </div>
        <div class="col-12 col-md-6 center-content hero-img">
          <img src="../../assets/profile.jpg" alt="Temp" class="img-fluid">
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
import { computed, watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import useI18n from '@/lang/useLang'
import projectsDataEs from '@/data/projects.es.json'
import projectsDataEn from '@/data/projects.en.json'

const route = useRoute()
const { language } = useI18n()
const slug = route.params.slug

// Decidir cuál lista de proyectos usar según el idioma
const selectedProjects = computed(() => {
  return language.value === 'es' ? projectsDataEs : projectsDataEn
})

// Capturamos el slug 
/* const projectId = computed(() => Number(route.params.id)) */

// Buscamos el proyecto por slug en la lista correcta
const project = computed(() => {
  return selectedProjects.value.find(p => p.slug === slug)
})

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
watch(() => route.params.id, () => {
  scrollToTop()
})
</script>