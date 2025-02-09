<template>
    <div class="hero-container">
        <div class="container">
            <div class="flex flex-col md:flex-row lg:flex-row">
                <div class="basis-full md:basis-6/12 lg:basis-6/12 my-3 flex align-middle items-center">
                    <div class="w-full">
                        <h2 class="pb-6">{{ t('about.title') }}</h2>
                        <h4 class="pb-4">{{ t('about.subtitle') }}</h4>
                        <p class="pb-5">{{ t('about.text') }}</p>
                        <button class="buttons-dv-green w-full max-w-[100%]">{{ t('about.ctatxt') }}</button>
                    </div>
                </div>
                <div class="basis-full md:basis-6/12 lg:basis-6/12 my-3 pl-6 flex align-middle items-center">
                    <div class="about-code w-full">
                        <h2>HTML</h2>
                        <h2>CSS</h2>
                        <h2>SASS</h2>
                        <h2>Javascript</h2>
                        <h2>PHP</h2>
                        <h2>Angular</h2>
                        <h2>Typescript</h2>
                        <h2>React</h2>
                        <h2>Vue</h2>
                        <h2>Django</h2>
                        <h2>WordPress</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  }
}

</script>