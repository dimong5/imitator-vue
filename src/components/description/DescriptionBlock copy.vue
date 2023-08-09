<template>
  <div>
      <v-banner v-if="description.info" color="secondary" rounded class="description" outlined>
    {{ description.info }}
  </v-banner>
  <v-banner  v-else shaped  class="description" >
  </v-banner>
  </div>

</template>

<script>
export default {
  props: {
    description: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.description {
  /* background: #e9e9e9; */
  display: flex;
  padding: 1vh;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  width: 240px;
  font-family: Roboto;
  font-size: 0.8rem;
  line-height: 0.61rem;
  border-radius: 10px;
  margin: 5px;
}
</style>
