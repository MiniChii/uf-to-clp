
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const date = ref('')
//"https://mindicador.cl/api/uf/07-06-2023"
const API_URL = "https://mindicador.cl/api/uf"
const UFresponse = ref(null)
const formatedDate = ref()
formatedDate.value = '07-06-2023'


function onInput(e: any) {
  date.value = e.target.value;

  formatedDate.value = formatDate(e.target.value)
  console.log(formatedDate, date.value, e);
}


function formatDate(rawDate: String) {
  return rawDate.split("-").reverse().join('-');
}

watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  const url = `${API_URL}/${formatedDate.value}`
  console.log(url);
  UFresponse.value = await (await fetch(url)).json()

})

</script>

<template>
  <div class="date-section">
    <div class="input-group mb-3 row">
      <label class="fw-bold col-4">
        Elija una fecha:
      </label>
      <div class="col-8">
        <input type="date" class="form-control" placeholder="Username" aria-label="Username" :value="date"
          @input="onInput">
      </div>
    </div>
  </div>

  <div>Valor UF el {{ date }}: {{ UFresponse.serie[0].valor }}</div>
</template>

<style scoped></style>
