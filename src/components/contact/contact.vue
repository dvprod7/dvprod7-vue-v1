<script setup>
import useI18n from '@/lang/useLang';
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue';
const { t } = useI18n();
</script>

<template>
    <section class="contact" id="contact">
        <div class="row center-content">
            <div class="col-12 col-md-8 col-lg-12">
                <h2 class="section-title">{{ t('contact.title') }}</h2>
            </div>
        </div>
        <div class="row form-section">
            <div class="col-12 col-md-6 col-lg-6">
                <h3>{{ t('contact.subtitle') }}</h3>
                <p v-html="t('contact.description')"></p>
                <h4>{{ t('contact.ctaTXT') }}</h4>
                <SocialLinks />
            </div>
            <div class="col-12 col-md-6 col-lg-6">
                <form action="" class="contact-form">
                    <input type="text" :placeholder="t('contact.form.name')">
                    <input type="email" :placeholder="t('contact.form.email')">
                    <textarea name="Message" id="" :placeholder="t('contact.form.message')"></textarea>
                    <button class="ui-btn">{{ t('contact.form.btn') }}</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '@/styles/grid';
@use './contact';
</style>