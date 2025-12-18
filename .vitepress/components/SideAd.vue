<template>
  <div class="side-ad-container">
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-8622741211890473"
      data-ad-slot="7591576132"
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
.side-ad-container {
  margin-top: 1rem;
  width: 100%;
}
</style>
