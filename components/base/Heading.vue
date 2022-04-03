<template>
  <component
    :is="tag"
    class="text-h3 text-md-h2 base-heading mb-3 font-weight-light"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseHeading',

  props: {
    tag: {
      type: String,
      default: 'h1',
    },
  },
}
</script>

<style scoped>
.base-heading {
  word-break: break-word;
}
</style>
