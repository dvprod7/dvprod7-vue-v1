<script setup>
// import { ref } from 'vue';  habilitar solo para cuando se necesiten estados reactivos
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue';
</script>

<template>
    <section class="contact" id="#contact">
        <div class="row center-content">
            <div class="col-12 col-md-8 col-lg-12">
                <h2 class="section-title">Contacto</h2>
            </div>
        </div>
        <div class="row form-section">
            <div class="col-12 col-md-6 col-lg-6">
                <h3>Let’s grab a coffe</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <h4>Follow me on social media!</h4>
                <SocialLinks />
            </div>
            <div class="col-12 col-md-6 col-lg-6">
                <form action="" class="contact-form">
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="Email">
                    <textarea name="Message" id="" placeholder="Message"></textarea>
                    <button class="ui-btn">Send</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '@/styles/grid';
@use './contact';
</style>