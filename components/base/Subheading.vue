<template>
  <component :is="tag" class="text-h4 base-subheading mb-3 font-weight-light">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseSubheading',

  props: {
    tag: {
      type: String,
      default: 'h2',
    },
  },
}
</script>

<style scoped>
.base-subheading {
  word-break: break-word;
}
</style>
