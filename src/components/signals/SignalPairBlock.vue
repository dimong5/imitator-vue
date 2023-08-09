<template>
  <div>
    <h3 v-if="signalPair.header !== undefined">ИМИТАЦИИ КОМАНД И СОСТОЯНИЙ</h3>
    <!-- <SignalBlock
      @sendMessage="sendMessage"
      :control="true"
      :data="signalPair.ie"
    /> -->
    <!-- <SignalBlock :data="signalPair.iv" /> -->

    <div
      plain
      class="switchWrapper"
      :class="signalPair.defaultButton ? 'bgBlue' : 'bgWhite'"
      v-else-if="signalPair.defaultButton"
    >
      <v-switch
        v-model="signalPair.defaultButton.value"
      >
      </v-switch>
      {{ signalPair.defaultButton.name }}
    </div>

    <div v-else>
    <div
      plain
      class="switchWrapper"
      :class="signalPair.ie.value ? 'bgBlue' : 'bgWhite'"
    >
      <v-switch @click="handleSwitchIE" v-model="signalPair.ie.value">
      </v-switch>
      {{ signalPair.ie.name }}
    </div>
    <div
      plain
      class="switchWrapper"
      :class="signalPair.iv.value ? 'bgBlue' : 'bgWhite'"
    >
      <v-switch
        :disabled="!signalPair.ie.value ? true : false"
        @click="handleSwitchIV"
        v-model="signalPair.iv.value"
      >
      </v-switch>
      {{ signalPair.iv.name }}
    </div>
  </div>
  </div>
</template>

<script>
import SignalBlock from "@/components/signals/SignalBlock";

export default {
  components: {
    SignalBlock,
  },
  // watch: {

  // },
  mounted() {
    this.sendAlert();
  },
  data: () => ({}),

  props: {
    signalPair: {
      type: Object,
      required: true,
    },
  },
  methods: {
    sendAlert() {
      const { ie } = this.signalPair;
      const { iv } = this.signalPair;
      console.log(ie.name, ie.value, iv.name, iv.value);
    },
    sendMessage(value, name) {
      const { ie } = this.signalPair;
      const { iv } = this.signalPair;
      console.log(
        { name: ie.name, value: ie.value },
        { name: iv.name, value: iv.value }
      );
    },
    handleSwitchIE() {
      const { ie } = this.signalPair;
      const { iv } = this.signalPair;
      if (!this.signalPair.ie.value) {
        this.signalPair.iv.value = false;
      }
      console.log(
        { name: ie.name, value: ie.value },
        { name: iv.name, value: iv.value }
      );
    },
    handleSwitchIV() {
      const { ie } = this.signalPair;
      const { iv } = this.signalPair;
      console.log(
        { name: ie.name, value: ie.value },
        { name: iv.name, value: iv.value }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  //flex-direction: row;
  width: 100%;

  justify-content: start;
}
h3 {
  display: block;
  display: flex;
  padding: 1vh;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  //width: 13vh;
  font-family: Roboto;
  font-size: 1rem;
  border-radius: 10px;
  margin: 5px;
}
.switchWrapper {
  display: flex;
  padding: 1vh;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  width: 13vh;
  font-family: Roboto;
  font-size: 1rem;
  border-radius: 10px;
  margin: 5px;
}
.bgBlue {
  background: #9dd2e0;
}
.bgWhite {
  background: #b9c4c7;
}
</style>
