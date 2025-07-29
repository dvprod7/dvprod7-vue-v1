<template>
  <div v-if="project">
    <!-- Hero -->
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
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import useI18n from '@/lang/useLang'
import projectsDataEs from '@/data/projects_details.es.json'
import projectsDataEn from '@/data/projects_details.en.json'

const route = useRoute()
const { language } = useI18n()

// Decidir cuál lista de proyectos usar según el idioma
const selectedProjects = computed(() => {
  return language.value === 'es' ? projectsDataEs : projectsDataEn
})

// Capturamos el ID desde la URL y lo convertimos a número
const projectId = computed(() => Number(route.params.id))

// Buscamos el proyecto por id en la lista correcta
const project = computed(() => {
  return selectedProjects.value.find(p => p.id === projectId.value)
})

// Solo para debug
watch(project, (val) => {
  console.log('Proyecto encontrado:', val)
})
</script>