<template>
  <!-- Project Hero -->
  <div v-if="project">
    <section class="project-hero">
      <div class="row center-content">
        <div class="col-12 col-md-6">
          <h2 class="main-title">{{ project.title }}</h2>
          <div class="tech-pills">
            <span>{{ project.skills.name }}</span>
          </div>
          <p class="description">
            {{ project.description }}
          </p>
          <div class="call-to-action center-content start-content">
            <button class="ui-btn">View Demo</button>
            <button class="ui-btn">View Code</button>
            <button class="ui-btn dark-btn">Hire me 😎</button>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img src="../../assets/project-temp.jpg" alt="Temp">
        </div>
      </div>
    </section>
    <!-- Habilidades -->
    <section class="skills-main">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="skillcard"></div>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <p>Proyecto no encontrado</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import useI18n from '@/lang/useLang'

// Idioma activo
const { language } = useI18n()

// Capturar el ID desde la URL
const route = useRoute()
const projectId = route.params.id

// Importar los JSON
import projectsDataES from '@/data/projects_details.es.json'
import projectsDataEN from '@/data/projects_details.en.json'

// Computar los proyectos según el idioma
const selectedProjects = computed(() => {
  return language.value === 'es' ? projectsDataES : projectsDataEN
})

// Buscar el proyecto por ID
const project = computed(() =>
  selectedProjects.value.find(p => p.id === projectId)
)
</script>

<style lang="scss">
@use '@/styles/grid';
@use './ProjectDetail.scss';
</style>
