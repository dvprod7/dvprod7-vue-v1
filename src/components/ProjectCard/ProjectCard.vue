<template>
  <div class="project__card">
    <img :src="project.image" alt="" />
    <div class="card__info">
      <h2 class="card__title">{{ project.title }}</h2>
      <div class="card__tech-badge">
        <span class="badge" v-for="(tag, i) in project.tags" :key="i">
          {{ tag }}
        </span>
      </div>
      <p class="card__excerpt">{{ project.description }}</p>
      <div class="card__cta">
        <router-link :to="`/project/${project.id}`" class="ui-btn card__btn">View Project</router-link>
        <a :href="project.codeUrl" target="_blank" class="ui-btn card__btn">View Code</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/styles/grid';
@use './ProjectCard';
</style>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const router = useRouter()

function viewProject() {
  console.log('Clic en proyecto:', props.project.id) // 👈🏼 DEBUG
  router.push(`/project/${props.project.id}`)
}
</script>