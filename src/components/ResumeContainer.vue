<template>
  <div class="resume-wrapper">
    <v-container>
      <v-row class="justify-end">
        <v-tooltip text="Download Resume" location="bottom">
          <template #activator="{ props }">
            <v-btn icon href="/resume.pdf" download="Zeel_Resume.pdf" class="ma-2" v-bind="props">
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </v-row>

      <v-row>
        <!-- Desktop View (md and up) -->
        <template v-if="!mobile">
          <!-- Left Column -->
          <v-col cols="12" md="8" class="d-flex flex-column ga-6">
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
          </v-col>

          <!-- Right Sidebar -->
          <v-col cols="12" md="4" class="d-flex flex-column align-center ga-4">
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
        </template>

        <!-- Mobile View -->
        <template v-else>
          <v-col cols="12" class="d-flex flex-column align-center ga-4">
            <v-img
              src="/profile-photo.jpg"
              alt="My Photo"
              width="180"
              height="180"
              class="rounded"
              contain
            />
          </v-col>
          <v-col cols="12" class="d-flex flex-column ga-6">
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <LanguagesSection />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useDisplay } from "vuetify";

import ExperienceSection from "./ExperienceSection.vue";
import LanguagesSection from "./LanguagesSection.vue";
import SkillsSection from "./SkillsSection.vue";
import EducationSection from "./EducationSection.vue";
import AboutSection from "./AboutSection.vue";
import { themeSettings } from "../config/resumeConfig";

const { mobile } = useDisplay({ mobileBreakpoint: 600 });

onMounted(() => {
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
.resume-wrapper {
  max-width: 850px;
  margin: 0 auto;
  padding: 24px;
}
</style>
