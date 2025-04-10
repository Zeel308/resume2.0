<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div class="section-title">EXPERIENCE</div>

    <div class="d-flex flex-column justify-start ga-2">
      <div
        class="d-flex flex-column"
        v-for="(section, index) in experience.sections"
        :key="index"
      >
        <div class="d-flex flex-column">
          <div class="company-name">
            {{ section.company }}
          </div>
          <div class="company-summary">
            {{ section.summary }}
          </div>
        </div>

        <div class="d-flex flex-column ga-2">
          <ExpCard
            v-for="pos in section.positions"
            :key="pos.title"
            :title="pos.title"
            :timeline="pos.timeline"
            :desc="pos.desc"
          />
        </div>

        <v-divider v-if="index < experience.sections.length - 1" class="my-2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpCard from "./ExpCard.vue";
import { experience } from "../config/resumeConfig";
</script>

<style lang="scss" scoped>
.custom-timeline {
  row-gap: 10px !important;
}

.section-title {
  font-weight: 800; // heavier bold
  font-size: 1.4rem; // slightly larger
  border-bottom: 2px solid black;
  padding-bottom: 4px;
  margin-bottom: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
}
</style>
