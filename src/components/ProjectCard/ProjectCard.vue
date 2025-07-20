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
        <button @click="viewProject" class="ui-btn">View Project</button>
        <button :href="project.codeUrl" class="ui-btn">View Code</button>
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