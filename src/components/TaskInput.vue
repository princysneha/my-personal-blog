<script setup>
import { ref } from 'vue';
const names = ref(['']);
const email = ref(['']);
const mobile = ref('');
const results = ref([]);
defineEmits(['submit']);
function submitForm() {
  console.log('Names:', names.value);
  console.log('Email:', email.value);
  console.log('Mobile:', mobile.value);
  results.value.push({ names: [...names.value], email: [...email.value], mobile: mobile.value });
}
function addMoreName() {
  names.value.push('');
}
function removeName(index) {
  if (names.value.length > 1) {
    names.value.splice(index, 1);
  }
}
function addMoreEmail(){
  email.value.push('');
}
function removeEmail(index){
  if(email.value.length > 1){
    email.value.splice(index, 1);
  }
}
</script> 
<template>
    <div class="container">
    <div v-for="(name, idx) in names" :key="idx" style="margin-bottom: 4px;">
      <input type="text" v-model="names[idx]">
      <span class="plus" @click="addMoreName" style="cursor:pointer;">+</span>
      <span v-if="names.length > 1" class="minus" @click="removeName(idx)" style="cursor:pointer; color:red; margin-left:4px;">-</span>
    </div>
    <div v-for="(e, idx) in email" :key="idx" style="margin-bottom: 4px;">
      <input type="text" v-model="email[idx]">
      <span class="plus" @click="addMoreEmail" style="cursor:pointer;">+</span>
      <span v-if="email.length > 1" class="minus" @click="removeEmail(idx)" style="cursor:pointer; color:red; margin-left:4px;">-</span>
    </div>
    <input type="text" v-model="mobile"><br>
    <button @click="submitForm">Submit</button>  
  </div>
</template>     