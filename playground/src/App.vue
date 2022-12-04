<script setup lang="ts">
import { concat, toUpper, isString } from '@monorepo/docs'
import { computed } from 'vue';

const arr1 = ['hi', 'hello'], arr2 = [true, false]

const arr3 = computed(() => concat(arr1, arr2))
</script>


<template>
  <ul>
    <li v-for="tmp in arr3">{{ isString(tmp) ? toUpper(tmp) : tmp }}</li>
  </ul>
</template>
