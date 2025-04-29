<!-- src/views/ProjectDetail.vue -->
<template>
  <div v-if="project">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <!-- aquí pones más contenido si quieres -->
  </div>
  <div v-else>
    <p>Proyecto no encontrado</p>
  </div>
</template>

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