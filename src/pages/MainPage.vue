<template>
  <v-container fluid>
    <div class="container">
      <!-- <v-row class="mainContainer"> -->

      <div class="signalBlocksCommonWrapper">
       
        <div class="signalBlocks">
          <div class="signalColumn">
            <DescriptionBlock
              v-for="description in signalsDescription"
              :description="description"
            />
          </div>
          <div class="signalColumn">
            <SignalPairBlock
              v-for="signalPair in signalPairs"
              :signalPair="signalPair"
            />
          </div>

        </div>
      </div>

      <div class="column">
        <AlertsBlock v-for="alert in leftAlertsColumn" :alert="alert" />
      </div>
      <div class="column">
        <AlertsBlock v-for="alert in middleAlertsColumn" :alert="alert" />
      </div>
      <div class="column">
        <AlertsBlock v-for="alert in rightAlertsColumn" :alert="alert" />
      </div>
      <!-- </v-row> -->
    </div>
  </v-container>
</template>

<script>
import SignalPairBlock from "@/components/signals/SignalPairBlock";
import AlertsBlock from "@/components/alerts/AlertsBlock";
import DescriptionBlock from "@/components/description/DescriptionBlock";
import signalPairs from "@/assets/signalPairs.js";
import leftAlertsColumn from "@/assets/leftAlertsColumn.js";
import middleAlertsColumn from "@/assets/middleAlertsColumn.js";
import rightAlertsColumn from "@/assets/rightAlertsColumn.js";
import signalsDescription from "@/assets/signalsDescription.js";

export default {
  components: {
    SignalPairBlock,
    AlertsBlock,
    DescriptionBlock,
  },
  data: () => ({
    signalPairs,
    leftAlertsColumn,
    middleAlertsColumn,
    rightAlertsColumn,
    signalsDescription,
  }),
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: nowrap;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: start;
}

.signalColumn {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  //height: 1000px
  justify-content: end;
}
.container {
  display: flex;
  //flex-direction: column;
  justify-content: space-around;
  flex-wrap: nowrap;
  div:first {
    border: 1px solid black;
  }
}
.mainContainer {
  display: flex;
  flex-direction: row;
}
.signalBlocks {
  display: flex;
  //flex-wrap: nowrap;
  //align-self: flex-end;
}
.signalBlocksCommonWrapper {
  display: flex;
  flex-direction: column;
  align-items: end
}
</style>
