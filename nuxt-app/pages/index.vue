<script lang="ts" setup>
  const info = useInfo()
  const a = useA()
  const md = mergeData(a, info)
</script>

<template>
  <div>
    <NuxtLink to="/about">
      <button>About</button>
    </NuxtLink>
    <div example="auto-imports/composables">
      <p>Named useInfo() export: {{ info }}</p>
      <p>Named useA() export: {{ a }}</p>
      <p>Named mergeData() export: {{ md }}</p>
    </div>
    <Card />
  </div>
</template>

<style scoped></style>
