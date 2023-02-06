<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import Header from "@/components/Header.vue";
import BaseModal from "@/components/BaseModal.vue";
import Item from "@/components/Item.vue";
import { useTodoList } from "@/composable/useTodoList";

const {
  termValue,
  todoItems,
  modalOpen,
  editTerm,
  handleAddItem,
  handleCheck,
  handleDeleteAll,
  handleDeleteAllDone,
  handleEditItem,
  handleDeleteItem,
  handleSaveItem,
} = useTodoList();
</script>

<template>
  <BaseModal v-model="modalOpen" @save="handleSaveItem">
    <template #body>
      <BaseInput v-model="editTerm" />
    </template>
  </BaseModal>
  <div class="bg-gray-100 w-full md:w-1/2 p-4 rounded flex flex-col gap-4">
    <Header
      @delete-all="handleDeleteAll"
      @delete-all-done="handleDeleteAllDone"
    />
    <div class="overflow-auto min-h-[300px] max-h-[300px] bg-white p-2 rounded">
      <div v-if="todoItems.length">
        <template v-for="(item, index) in todoItems" :key="item.id">
          <Item
            :item="item"
            @check="handleCheck(index)"
            @edit="handleEditItem(index)"
            @delete="handleDeleteItem(index)"
          />
          <!-- <div
            class="relative bg-white border mb-2 p-4 rounded flex items-center gap-2 group"
          >
            <input
              type="checkbox"
              :name="item.id.toString()"
              :id="item.id.toString()"
              :checked="item.completed"
              class="w-4 h-4"
              @change="handleCheck(index)"
            />

            <p
              class="truncate"
              :class="[item.completed ? 'text-gray-400 line-through' : '']"
            >
              {{ item?.title }}
            </p>

            <div
              class="absolute right-2 bg-white p-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <button @click="handleEditItem(index)">
                <BaseIcon name="editOutline" />
              </button>
              <button @click="handleDeleteItem(index)">
                <BaseIcon name="deleteOutline" />
              </button>
            </div>
          </div> -->
        </template>
      </div>
      <div
        v-else
        class="h-[284px] text-xl flex items-center justify-center text-gray-500"
      >
        <p>Your task list is empty</p>
      </div>
    </div>

    <form @submit.prevent="handleAddItem">
      <BaseInput v-model="termValue" add @add-click="handleAddItem" />
    </form>
  </div>
</template>
