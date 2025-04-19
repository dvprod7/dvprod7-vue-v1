<script setup>
// import { ref } from 'vue';  habilitar solo para cuando se necesiten estados reactivos
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue';
import ProjectsCarousel from '@/components/ProjectsCarousel/ProjectsCarousel.vue';
import ProjectDetail from '@/components/ProjectDetail/ProjectDetail.vue';
</script>
<template>
    <!-- Hero -->
    <section class="hero" id="hero-section">
        <div class="row center-content">
            <div class="col-12 col-md-6">
                <span>Hi, I’m</span>
                <h2 class="main-title">
                    <span class="name">DANIEL VALENZUELA</span>
                    <hr>
                    <span class="position">FRONT END DEVELOPER</span>
                </h2>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <div class="call-to-action center-content start-content">
                    <button class="ui-btn">Projects</button>
                    <button class="ui-btn dark-btn">Hire me 😎</button>
                </div>
                <SocialLinks />
            </div>
            <div class="col-12 col-md-6">
                <img src="../../assets/profile.jpg" alt="Temp">
            </div>
        </div>
    </section>
    <!-- About -->
    <section class="about" id="about-section">
        <div class="row center-content">
            <div class="col-12 col-md-6">
                <img src="../../assets/profile-alt-dv-1.jpg" alt="" style="position: absolute;left: 0;width: 250px;">
                <img src="../../assets/profile-alt-dv-2.jpg" alt="" style="position: absolute;left: 50px;width: 250px;">
                <img src="../../assets/profile-alt-dv-3.jpg" alt=""
                    style="position: absolute;left: 100px;width: 250px;">
            </div>
            <div class="col-12 col-md-6">
                <div class="about-txt">
                    <h2>About</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. <br><br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button class="ui-btn">Download CV</button>
                </div>
            </div>
        </div>
    </section>
    <!-- Projects -->
    <section id="projects">
        <ProjectsCarousel />
    </section>
    <ProjectDetail />
</template>

<style lang="scss">
@use '@/styles/grid';
@use './home';
</style>