<script setup>
import { ref, computed } from 'vue';

const rub = ref(0);
const usdI = ref(1);
const eurI = ref(1);
const rbmI = ref(1);
const usd = computed(() => (rub.value / usdI.value).toFixed(2));
const eur = computed(() => (rub.value / eurI.value).toFixed(2));
const rbm = computed(() => (rub.value / rbmI.value).toFixed(2));
</script>

<template>
  <div class="container">
    <p>Конвертор валют</p>
    <div class="container-input-valut">
      <div class="cotainer-rub">
        <p>Введите сумму в рублях</p>
        <input v-model="rub" placeholder="Введите сумму в рублях" />
      </div>
      <div class="container-usd">
        <p>Введите курс доллара</p>
        <input v-model="usdI" placeholder="Введите курс доллара" />
      </div>
      <div class="container-eur">
        <p>Введите курс евро</p>
        <input v-model="eurI" placeholder="Введите курс евро" />
      </div>
      <div class="container-rbm">
        <p>Введите курс юани</p>
        <input v-model="rbmI" placeholder="Введите курс юани" />
      </div>
    </div>
    <div class="container-output-valut">
      <p id="resut">Результат:</p>
      <p>Сумма в долларах: ${{ usd }}</p>
      <p>Сумма в евро: €{{ eur }}</p>
      <p>Сумма в юани: ¥{{ rbm }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #008000;
  color: white;
  padding: 15px;
  border-radius: 15px;
}

.container p {
  font-size: 20px;
  font-weight: 1000;
}

.container-input-valut {
  padding: 10px;
}

.container-input-valut input {
  font-size: 15px;
  border-radius: 5px;
  border: 2px solid #adff2f;
}

.container-input-valut input:focus {
  outline: none;
  border: 2px solid #4a90e2;
}

.container-input-valut p {
  font-size: 10px;
  font-weight: 500;
}

.container-output-valut p {
  font-size: 15px;
}

#resut {
  font-size: 20px;
  font-weight: 1000;
}
</style>