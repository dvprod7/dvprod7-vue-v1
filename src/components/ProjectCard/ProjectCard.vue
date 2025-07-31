<template>
  <div class="project__card">
    <img :src="getImagePath(project.image)" alt="" />
    <div class="card__info">
      <h2 class="card__title">{{ project.title }}</h2>
      <div class="card__tech-badge">
        <span class="badge" v-for="(tag, i) in project.badge" :key="i">
          {{ tag }}
        </span>
      </div>
      <p class="card__excerpt">{{ project.excerpt }}</p>
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

const images = import.meta.glob('@/assets/*', { eager: true })

function getImagePath(filename) {
  const match = Object.entries(images).find(([path]) => path.includes(filename))
  return match ? match[1].default : ''
}

function viewProject() {
  console.log('Clic en proyecto:', props.project.id) // 👈🏼 DEBUG
  router.push(`/project/${props.project.id}`)
}
</script>