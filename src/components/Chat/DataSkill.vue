<template>
  <div class="data-skills">
    <div class="data-skill-head">
      <img :src="popularDataSkill.icon" alt="" />
      <span>{{ popularDataSkill.title }}</span>
    </div>

    <div class="data-skill-list">
      <div
        class="skill-card"
        v-for="skill in popularDataSkill.dataSkills"
        :key="skill?.title"
      >
        <div
          class="skill-icon"
          :style="{ background: skill?.iconBackgroundColor }"
        >
          <img :src="skill?.icon" alt="" />
        </div>
        <div class="skill-info">
          <span>{{ skill?.title }}</span>
          <div class="route-icon">
            <img :src="popularDataSkill.arrowIcon" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataSkill",
  props: ["popularDataSkill"],
};
</script>

<style>
@import "../../css/variable.css";

.data-skills {
  margin-bottom: 20px;
}
.data-skills .data-skill-head {
  background: var(--hds-chatbox-data-skill-head-background);
  display: flex;
  align-items: center;
  padding: var(--hds-chatbox-data-skill-head-padding);
  gap: var(--hds-chatbox-data-skill-head-gap);
  border: var(--hds-chatbox-data-skill-head-border);
  border-radius: var(--hds-chatbox-data-skill-head-border-radius);
}

.data-skills .data-skill-head span {
  font-size: var(--hds-chatbox-data-skill-head-font-size);
  font-weight: var(--hds-chatbox-data-skill-head-font-weight);
}

.data-skills .data-skill-list {
  padding: var(--hds-chatbox-data-skill-list-padding);
  background: var(--hds-chatbox-data-skill-list-background);
  display: flex;
  flex-direction: column;
  gap: var(--hds-chatbox-data-skill-list-gap);
}

.data-skills .data-skill-list .skill-card {
  padding: var(--hds-chatbox-data-skill-card-padding);
  display: grid;
  grid-template-columns: var(
    --hds-chatbox-data-skill-card-grid-template-columns
  );
  gap: var(--hds-chatbox-data-skill-card-gap);
  border: var(--hds-chatbox-data-skill-card-border);
  border-radius: var(--hds-chatbox-data-skill-card-border-radius);
}

.data-skills .data-skill-list .skill-card .skill-icon {
  height: var(--hds-chatbox-data-skill-card-icon-height);
  width: var(--hds-chatbox-data-skill-card-icon-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--hds-chatbox-data-skill-card-icon-border-radius);
}
.skill-info {
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 17px;
  align-items: center;
  font-weight: 600;
}
</style>
