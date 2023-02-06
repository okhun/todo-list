<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon.vue";

const emit = defineEmits(["deleteAll", "deleteAllDone"]);
</script>

<template>
  <div class="flex gap-2">
    <button
      @click="emit('deleteAll')"
      class="px-2 py-1 bg-red-500 text-white flex gap-1 rounded"
    >
      <BaseIcon name="deleteOutline" /> Tasks
    </button>
    <button
      @click="emit('deleteAllDone')"
      class="px-2 py-1 bg-red-500 text-white flex gap-1 rounded"
    >
      <BaseIcon name="deleteOutline" /> Tasks Done
    </button>
  </div>
</template>
