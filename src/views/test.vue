<script setup>
import { ref } from 'vue';
//import HelloWorld from './components/HelloWorld.vue'
const count = ref(0);
function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
const names = ref(['']);
const email = ref(['']);
const mobile = ref('');
const results = ref([]);
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
    <h1>Counter: {{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <input type="number" v-model="count">
  </div>
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
  <div class="container">
    <h2>Results:</h2>
    <ul>
      <li v-if="results.length === 0">No results yet.</li>
      <li v-for="(result, index) in results" :key="index">
        Names: <span v-for="(n, i) in result.names" :key="i">{{ n }}<span v-if="i < result.names.length - 1">, </span></span>,
        Email: <span v-for="(e, i) in result.email" :key="i">{{ e }}<span v-if="i < result.email.length - 1">, </span></span>, Mobile: {{ result.mobile }}
      </li>
    </ul>
  </div>
</template>
