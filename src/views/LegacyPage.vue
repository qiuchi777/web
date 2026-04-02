<template>
  <iframe :src="`/legacy/${file}`" class="frame" :title="title"></iframe>
</template>

<script>
export default {
  name: 'LegacyPage',
  props: {
    title: {
      type: String,
      required: true
    },
    file: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.frame {
  width: 100%;
  min-height: 100vh;
  border: 0;
  background: #fff;
}
</style>
