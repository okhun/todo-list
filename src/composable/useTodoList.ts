import { ref, watch } from "vue";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export const useTodoList = () => {
  const termValue = ref("");
  const editTerm = ref("");
  const itemIndex = ref(-1);
  const modalOpen = ref(false);

  const todoItems = ref<TodoItem[]>(initTodoList());

  watch(todoItems.value, (newItems) => {
    localStorage.setItem("todoItems", JSON.stringify(newItems));
  });

  function initTodoList() {
    const local = localStorage.getItem("todoItems");
    if (local) {
      const storage = JSON.parse(local);
      if (Array.isArray(storage)) {
        return storage;
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  const handleAddItem = () => {
    if (termValue.value) {
      let id = 1;
      if (todoItems.value.length) {
        id = todoItems.value[todoItems.value.length - 1].id + 1;
      }

      todoItems.value.push({
        title: termValue.value,
        completed: false,
        id: id,
      });

      termValue.value = "";
    }
  };

  const handleCheck = (index: number) => {
    todoItems.value[index].completed = !todoItems.value[index].completed;
  };

  const handleDeleteAll = () => {
    todoItems.value = [];
    localStorage.setItem("todoItems", JSON.stringify([]));
  };

  const handleDeleteAllDone = () => {
    todoItems.value = todoItems.value.filter((item) => !item.completed);
    localStorage.setItem("todoItems", JSON.stringify(todoItems.value));
  };

  const handleEditItem = (index: number) => {
    itemIndex.value = index;
    editTerm.value = todoItems.value[index].title;
    modalOpen.value = true;
  };

  const handleDeleteItem = (index: number) => {
    todoItems.value.splice(index, 1);
  };

  const handleSaveItem = () => {
    if (itemIndex.value >= 0) {
      todoItems.value[itemIndex.value].title = editTerm.value;
    }
  };

  return {
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
  };
};
