<template>
  <div class="scene" ref="sceneRef">
    <div v-for="(image, i) in images" :key="i" ref="imageRefs" class="image-wrapper" :data-dragging="false">
      <img :src="image" alt="Image" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import gsap from 'gsap'

// Lista de imágenes
const images = [
  new URL('@/assets/profile-alt-dv-1.jpg', import.meta.url).href,
  new URL('@/assets/profile-alt-dv-2.jpg', import.meta.url).href,
  new URL('@/assets/profile-alt-dv-3.jpg', import.meta.url).href,
]

const imageRefs = ref([])
const sceneRef = ref(null)

const radius = 120
const speed = 0.001
const angles = images.map((_, i) => (i * 360) / images.length)

let centerX = 0
let centerY = 0
let animationFn
let resizeObserver

function updateCenter() {
  if (sceneRef.value) {
    centerX = sceneRef.value.offsetWidth / 2
    centerY = sceneRef.value.offsetHeight / 2
  }
}

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    updateCenter()
  }, 0)

  // Animación circular
  animationFn = () => {
    if (imageRefs.value.length !== images.length) return

    angles.forEach((angle, i) => {
      const el = imageRefs.value[i]
      if (!el || el.dataset.dragging === 'true') return

      const rad = (angle * Math.PI) / 180
      const x = centerX + radius * Math.cos(rad)
      const y = centerY + radius * Math.sin(rad)

      gsap.set(el, {
        left: `${x}px`,
        top: `${y}px`
      })

      angles[i] += speed * 60
    })
  }

  gsap.ticker.add(animationFn)
  resizeObserver = new ResizeObserver(updateCenter)
  resizeObserver.observe(sceneRef.value)
})

onUnmounted(() => {
  gsap.ticker.remove(animationFn)
  resizeObserver?.disconnect()
})
</script>

<style lang="scss">
@use '@/styles/grid';
@use './RotatingImages.scss';
</style>
