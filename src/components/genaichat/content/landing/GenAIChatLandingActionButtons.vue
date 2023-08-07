<template>
  <div class="action-button-container">
    <div class="action-button-head">
      <img :src="popularDataSkill.icon" alt="" />
      <span>{{ popularDataSkill.title }}</span>
    </div>

    <div class="action-button-list">
      <div
        class="skill-card"
        v-for="skill in popularDataSkill.dataSkills"
        :key="skill?.title"
        @click="skill?.clickFun"
      >
        <div
          class="skill-icon"
          :style="{ background: skill?.iconBackgroundColor }"
        >
          <span
            class="material-icons iconSize"
            :style="{ color: `${skill?.color}` }"
          >
            {{ skill?.icon }}
          </span>
        </div>
        <div class="skill-info">
          <span>{{ skill?.title }}</span>
          <div class="route-icon">
            <span
              class="material-icons iconSize"
              :style="{
                color: '#25282E',
              }"
            >
              chevron_right
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenAIChatLandingActionButtons",
  data() {
    return {
      popularDataSkill: {
        useTemplate: true,
        title: "Start Exploring Popular Data Skills",
        icon: "./assets/icons/bolt.svg",
        arrowIcon: "chevron_right",
        showPopularDataSkill: true,
        dataSkills: [
          {
            icon: "question_mark",
            iconBackgroundColor: "#E6F3F1",
            color: "#389D91",
            title: "General Insights Questions",
            clickFun: this.AnalyticsReportMutation,
          },
          {
            icon: "search",
            iconBackgroundColor: "#FBF0FF",
            color: "#C261FF",
            title: "Explore and Run Diagnostics",
          },
          {
            icon: "call_made",
            iconBackgroundColor: "#FAEDE6",
            color: "#D67139",
            title: "Future and “What if” Scenarios",
          },
        ],
      },
    };
  },
  methods: {
    AnalyticsReportMutation() {
      return this.$store.dispatch(
        "storedata/sentAnalytics",
        "chart represtation "
      );
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";

.action-button-container {
  margin-bottom: 20px;
}
.action-button-container .action-button-head {
  background: var(--hds-chatbox-action-button-head-background);
  display: flex;
  align-items: center;
  padding: var(--hds-chatbox-action-button-head-padding);
  gap: var(--hds-chatbox-action-button-head-gap);
  border: var(--hds-chatbox-action-button-head-border);
  border-radius: var(--hds-chatbox-action-button-head-border-radius);
}

.action-button-container .action-button-head span {
  font-size: var(--hds-chatbox-action-button-head-font-size);
  font-weight: var(--hds-chatbox-action-button-head-font-weight);
}

.action-button-container .action-button-list {
  padding: var(--hds-chatbox-action-button-list-padding);
  background: var(--hds-chatbox-action-button-list-background);
  display: flex;
  flex-direction: column;
  gap: var(--hds-chatbox-action-button-list-gap);
}

.action-button-container .action-button-list .skill-card {
  padding: var(--hds-chatbox-action-button-card-padding);
  display: grid;
  cursor: pointer;
  grid-template-columns: var(
    --hds-chatbox-action-button-card-grid-template-columns
  );
  gap: var(--hds-chatbox-action-button-card-gap);
  border: var(--hds-chatbox-action-button-card-border);
  border-radius: var(--hds-chatbox-action-button-card-border-radius);
}

.action-button-container .action-button-list .skill-card .skill-icon {
  height: var(--hds-chatbox-action-button-card-icon-height);
  width: var(--hds-chatbox-action-button-card-icon-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--hds-chatbox-action-button-card-icon-border-radius);
}
.skill-info {
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 17px;
  align-items: center;
  font-weight: 600;
}
</style>
