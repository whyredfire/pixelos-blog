<template>
  <div class="google-ad-container">
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-8622741211890473"
      data-ad-slot="2707324239"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error('AdSense Error:', e);
  }
});
</script>

<style scoped>
.google-ad-container {
  margin: 2rem 0;
  min-height: 280px; /* Reserve space to reduce CLS */
}
</style>
