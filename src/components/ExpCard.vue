<template>
  <div class="d-inline-flex flex-column">
    <div class="text-body-1 font-weight-medium">{{ title }}</div>
    <div class="text-caption font-weight-light">
      <v-icon size="small" icon="mdi-calendar-range" class="text-primary" />
      {{ timeline }}
    </div>

    <ul class="text-body-2">
      <li v-for="(line, index) in descLines" :key="index">{{ line }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  timeline: string;
  desc: string;
}

const props = defineProps<IProps>();

// Split the description into lines
const descLines = props.desc.split('\n').filter(line => line.trim() !== '');
</script>

<style scoped></style>
