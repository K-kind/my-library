<template>
  <div class="
    rounded-sm
    shadow
    bg-white
    text-current
  ">
    <div class="py-4 px-5 border-solid border-b border-gray-200" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="p-5">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    header: String
  }
})
</script>
