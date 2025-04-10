<template>
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
  <v-col :cols="leftSectionColSpan" class="d-flex flex-column ga-4">
    <ExperienceSection />
    <EducationSection />
  </v-col>

  <v-col class="d-flex flex-column ga-4">
    <SkillsSection />
    <LanguagesSection />
  </v-col>
</v-row>
  </v-container>
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
.container {
  background-color: var(--background-color, #fff);
  color: var(--text-color, #000);
  max-width: 960px;
  min-height: 1123px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  border: 1px solid #e0e0e0;
  border-radius: 8px;

  padding: 3rem 2.5rem;

  @media (max-width: 600px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
}

  }
}
</style>
