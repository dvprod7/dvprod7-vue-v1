<script setup>
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue';
import ProjectsCarousel from '@/components/ProjectsCarousel/ProjectsCarousel.vue';
import RotatingImages from '@/components/RotatingImages/RotatingImages.vue';
</script>
<template>
    <!-- Hero -->
    <section class="hero__container" id="hero-section">
        <div class="row center-content">
            <div class="col-12 col-md-6">
                <div class="name-txt__container">
                    <span>Hi, I’m</span>
                    <div class="name-txt__title">
                        <h2 class="name">DANIEL VALENZUELA</h2>
                        <h2 class="profession">FRONT END DEVELOPER</h2>
                    </div>
                </div>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <div class="call-to-action center-content start-content button-group">
                    <button class="ui-btn ui-btn--lg">Projects</button>
                    <button class="ui-btn dark-btn ui-btn--lg">Hire me 😎</button>
                </div>
                <SocialLinks />
            </div>
            <div class="col-12 col-md-6 center-content hero-img">
                <img src="../../assets/profile.jpg" alt="Temp" class="img-fluid">
            </div>
        </div>
    </section>
    <!-- About -->
    <section class="about__container" id="about-section">
        <div class="row center-content">
            <div class="col-12 col-md-6 imgs__container">
                <RotatingImages />
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
    <section class="projects__container" id="projects">
        <ProjectsCarousel />
    </section>
</template>

<style lang="scss">
@use '@/styles/grid';
@use './home';
</style>