<script setup>
import useI18n from '@/lang/useLang';
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue';
import ProjectsCarousel from '@/components/ProjectsCarousel/ProjectsCarousel.vue';
import RotatingImages from '@/components/RotatingImages/RotatingImages.vue';
const { t } = useI18n();
</script>
<template>
    <!-- Hero -->
    <section class="hero__container" id="hero-section">
        <div class="row center-content">
            <div class="col-12 col-md-6">
                <div class="name-txt__container">
                    <span>{{ t('hero.greeting') }}</span>
                    <div class="name-txt__title">
                        <h2 class="name">DANIEL VALENZUELA</h2>
                        <h2 class="profession">FRONT END DEVELOPER</h2>
                    </div>
                </div>
                <p class="description" v-html="t('hero.description')"></p>
                <div class="call-to-action center-content start-content button-group">
                    <button class="ui-btn ui-btn--lg">{{ t('hero.projectsTXT') }}</button>
                    <button class="ui-btn dark-btn ui-btn--lg">{{ t('hero.hiremeTXT') }}</button>
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
                    <h2>{{ t('about.title') }}</h2>
                    <p v-html="t('about.description')"></p>
                    <button class="ui-btn">{{ t('about.cvbtnTXT') }}</button>
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