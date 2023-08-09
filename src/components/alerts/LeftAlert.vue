<template>
  <!-- <v-col> -->
  <!-- <v-alert color="red" elevation="4" type="success"> -->
<div>
    <v-alert v-if="!alert.state" class="alert" :class="alert.name ? 'visible' : 'notVisible'">
    {{ alert.info ? `${alert.name}: ${alert.info}` : "" }}
  </v-alert>
  <v-alert v-if="alert.state" class="alert active">
    {{ alert.info ? `${alert.name}: ${alert.info}` : "" }}
  </v-alert>
</div>


  <!-- </v-alert> -->
  <!-- </v-col> -->
</template>

<script>
export default {
  props: {
    alert: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.alert {
  /* background: #e9e9e9; */
  display: flex;
  padding: 1vh;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  width: 240px;
  font-family: Roboto;
  font-size: 0.63rem;
  line-height: 0.61rem;
  border-radius: 10px;
  margin: 5px;
}
.notVisible {
  background: white;
}
.visible {
  background: #e9e9e9;
}
.active {
  background: #f43336;
  color: #fff;
}

</style>
