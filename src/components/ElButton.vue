<template>
  <button :class="{ primary: type === 'primary' }" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  components: {},
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>
<style lang="scss" scoped>
button {
  cursor: pointer;
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 2px;
  background-color: rgba(#fff, 0.6);
  border-color: #555;
  color: #555;
  user-select: none;
}
.primary {
  background-color: #0088f5;
  color: white;
  border-color: #0088f5;
}
</style>
