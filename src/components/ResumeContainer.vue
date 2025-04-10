<template>
  <div class="resume-wrapper">
    <v-container class="container">
    <v-row class="justify-end">
  <v-tooltip text="Download Resume" location="bottom">
    <template #activator="{ props }">
      <v-btn
        icon
        href="/resume.pdf"
        download
        class="ma-2"
        v-bind="props"
      >
        <v-icon>mdi-download</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</v-row>

    <v-row>
  <!-- Left section: About info -->
  <v-col :cols="topColSpan" :order="topColOrders.info">
    <AboutSection />
  </v-col>

  <!-- Right section: Image -->
  <v-col cols="4" :order="topColOrders.image" class="d-flex justify-center align-center">
    <v-img
  src="/profile-photo.jpg"
  alt="My Photo"
  width="180"
  height="180"
  class="rounded"
  contain
/>
  </v-col>
</v-row>


    <!-- ********** -->

    <v-row>
  <!-- LEFT COLUMN: Full content area -->
  <v-col cols="8" class="d-flex flex-column ga-6">
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
  </v-col>

  <!-- RIGHT SIDEBAR: Photo + Skills + Languages -->
  <v-col cols="4" class="d-flex flex-column align-center ga-4">
    <v-img
      src="/profile-photo.jpg"
      alt="My Photo"
      width="180"
      height="180"
      class="rounded"
      contain
    />
    <SkillsSection />
    <LanguagesSection />
  </v-col>
</v-row>

  </v-container>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useDisplay } from "vuetify";

import ExperienceSection from "./ExperienceSection.vue";
import LanguagesSection from "./LanguagesSection.vue";
import SkillsSection from "./SkillsSection.vue";
import EducationSection from "./EducationSection.vue";
import AboutSection from "./AboutSection.vue";
import { themeSettings } from "../config/resumeConfig";

const { mobile } = useDisplay({ mobileBreakpoint: 600 });

const topColOrders = ref({ image: 2, info: 1 });

const DEFAULT_BOTTOM_COL_SPAN = 7;
const DEFAULT_TOP_COL_SPAN = 8;

const leftSectionColSpan = ref(DEFAULT_BOTTOM_COL_SPAN);
const topColSpan = ref(DEFAULT_TOP_COL_SPAN);

function syncScreenSizeDimensions(isMobile: boolean) {
  topColOrders.value = isMobile ? { image: 1, info: 2 } : { image: 2, info: 1 };
  leftSectionColSpan.value = isMobile ? 12 : DEFAULT_BOTTOM_COL_SPAN;
  topColSpan.value = isMobile ? 12 : DEFAULT_TOP_COL_SPAN;
}

// Dynamic avatar path based on config

// Done to ensure in Responsive mode, the image comes on TOP
watch(mobile, syncScreenSizeDimensions);
onMounted(() => {
  syncScreenSizeDimensions(mobile.value);

  // Apply theme settings
  document.documentElement.style.setProperty(
    "--primary-color",
    themeSettings.primaryColor
  );
  document.documentElement.style.setProperty(
    "--background-color",
    themeSettings.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--text-color",
    themeSettings.textColor
  );
  document.documentElement.style.setProperty(
    "--accent-color",
    themeSettings.accentColor
  );
});
</script>

<style scoped lang="scss">
.resume-container {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
