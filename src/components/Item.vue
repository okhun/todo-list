<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon.vue";

defineProps<{ item: { title: string; id: number; completed: boolean } }>();
defineEmits(["check", "edit", "delete"]);
</script>

<template>
  <div
    class="relative bg-white border mb-2 p-4 rounded flex items-center gap-2 group"
  >
    <input
      type="checkbox"
      :name="item.id.toString()"
      :id="item.id.toString()"
      :checked="item.completed"
      class="w-4 h-4"
      @change="$emit('check')"
    />

    <p
      class="truncate"
      :class="[item.completed ? 'text-gray-400 line-through' : '']"
    >
      {{ item.title }}
    </p>

    <div
      class="absolute right-2 bg-white p-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200"
    >
      <button @click="$emit('edit')">
        <BaseIcon name="editOutline" class="text-blue-500 w-5 h-5" />
      </button>
      <button @click="$emit('delete')">
        <BaseIcon name="deleteOutline" class="text-red-500 w-5 h-5" />
      </button>
    </div>
  </div>
</template>
