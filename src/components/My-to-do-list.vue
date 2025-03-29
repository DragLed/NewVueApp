<script setup>
import { ref, onMounted } from 'vue';

const tasks = ref([]);
const taskInput = ref('');

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
};

const createTask = () => {
    if (taskInput.value.trim() !== "") {
        tasks.value.push({ text: taskInput.value });
        taskInput.value = '';
        saveTasks();
    } else {
        alert("Заполните все поля");
    }
};

const deleteTask = (index) => {
    tasks.value.splice(index, 1);
    saveTasks();
};

onMounted(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.value = savedTasks;
});
</script>

<template>
  <div class="container">
    <div class="To-Do-Container">
      <h1>📝 My To-Do List</h1>
      <div class="Input">
        <input type="text" v-model="taskInput" placeholder="Новая задача" @keydown.enter="createTask">
        <button @click="createTask">добавить задачу</button>
      </div>
      <div id="taskList">
        <div v-for="(task, index) in tasks" :key="index" class="Note">
          <p>{{ task.text }}</p>
          <button @click="deleteTask(index)">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2C2C2C;
    color: #FFFFFF;
    padding-bottom: 150px;
}

.To-Do-Container h1 {
    display: flex;
    justify-content: center;
    color: #4A90E2;
}

.To-Do-Container {
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6);
    padding: 5vh;
    width: 400px;
    background-color: #3E3E3E;
}

.Input {
    margin: 30px 0;
    display: flex;
    justify-content: center;
}

.Input input {
    height: 45px;
    font-size: 20px;
    border: 2px solid #888888;
    border-radius: 25px;
    padding-left: 15px;
    background-color: #4A4A4A;
    color: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.Input input:hover {
    box-shadow: 0px 4px 12px rgba(74, 144, 226, 0.4);
}

.Input input:focus {
    outline: none;
    border: 2px solid #4A90E2;
}

.Input button {
    height: 45px;
    margin-left: 20px;
    border: None;
    font-size: 18px;
    border-radius: 25px;
    background-color: #357ABD;
    color: #ffffff;
    box-shadow: 0px 4px 10px rgba(74, 144, 226, 0.3);
}

.Input button:hover {
    opacity: 0.85;
    background-color: #3B7D8C;
}

.Note {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    border: 2px solid #555555;
    background-color: #4A4A4A;
    border-radius: 25px;
    padding: 15px 20px;
}

.Note p {
    color: #E5E5E5;
    margin-left: 10px;
}

.Note button {
    background-color: #D73636;
    color: #ffffff;
    border: None;
    border-radius: 5px;
    height: 35px;
    font-size: 18px;
}

.Note button:hover {
    opacity: 0.7;
    background-color: #C12828;
}

</style>