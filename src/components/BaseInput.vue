<script setup lang="ts">
import { computed } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps<{ modelValue: string; add?: boolean }>();
const emit = defineEmits(["update:modelValue", "addClick"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const handleAddClick = () => {
  emit("addClick");
};
</script>

<template>
  <div class="relative w-full">
    <input
      class="w-full border focus:outline-none py-4 pl-4 pr-10 rounded-2xl focus:border-blue-900 focus:outline-2 focus:ring-2 focus:ring-offset-none focus:ring-blue-300"
      type="text"
      v-model="value"
    />
    <button
      v-if="add"
      @click="handleAddClick"
      class="absolute right-3 top-1/2 -translate-y-1/2"
    >
      <BaseIcon name="addCircleOutline" class="w-7 h-7 text-blue-500" />
    </button>
  </div>
</template>
