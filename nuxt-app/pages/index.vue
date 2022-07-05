<script lang="ts" setup>
  const info = useInfo()
  const a = useA()
  const md = mergeData(a, info)

  const countRef = ref(0)
  const incrementRef = () => {
    if(countRef.value === 10) return
    countRef.value++
  }
  const decrementRef = () => {
    if(countRef.value === 0) return
    countRef.value--
  }

  const countReactive = reactive({
    value: 0
  })
  const incrementReactive = () => {
    if(countReactive.value === 10) return
    countReactive.value++
  }
  const decrementReactive = () => {
    if(countReactive.value === 0) return
    countReactive.value--
  }
</script>

<template>
  <div>
    <div>
      REF:
      <h1>{{countRef}}</h1>
      <button @click="incrementRef"><h3>+</h3></button>
      <button @click="decrementRef"><h3>-</h3></button>
    </div>
    <hr>
    <div>
      REACTIVE
      <h1>{{countReactive.value}}</h1>
      <button @click="incrementReactive"><h3>+</h3></button>
      <button @click="decrementReactive"><h3>-</h3></button>
    </div>
    <hr>
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
