
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const date = ref('')
//"https://mindicador.cl/api/uf/07-06-2023"
const API_URL = "https://mindicador.cl/api/uf"
const UFresponse: any = ref(null)
const formatedDate = ref()
const today = new Date().toJSON().substring(0, 10);
date.value = today;
formatedDate.value = formatDate(today);



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
  //TODO: add loading
  const url = `${API_URL}/${formatedDate.value}`
  console.log(url);
  UFresponse.value = await (await fetch(url)).json()

})

</script>

<template>
  <div class="date-section">
    <div class="input-group mb-3 row">
      <label class="fw-bold col-5">
        Elija una fecha:
      </label>
      <div class="col-7">
        <input type="date" class="form-control" placeholder="Username" aria-label="Username" :value="date"
          @input="onInput">
      </div>
    </div>
  </div>

  <div class="mb-3 row">
    <p class="col-4"> Valor UF </p>
    <p class="col-4"> {{ UFresponse ? UFresponse.serie[0].valor + " CLP" : "" }}</p>
    <p class="col-4"> al {{ formatedDate }}</p>



  </div>
</template>

<style scoped>
.date-section {
  margin-top: 1em;

}
</style>
