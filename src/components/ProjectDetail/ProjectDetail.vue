<template>
  <!-- Project Hero -->
  <section class="project-hero">
    <div class="row center-content">
      <div class="col-12 col-md-6">
        <h2 class="main-title">Dubtoast Ecommerce</h2>
        <div class="tech-pills">
          <span>Angular</span>
          <span>Django</span>
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
        <SkillCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillCard from '@/components/SkillCard/SkillCard.vue';
</script>

<style lang="scss">
@use '@/styles/grid';
@use './ProjectDetail.scss';
</style>
