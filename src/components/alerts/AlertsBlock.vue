<template>

      <LeftAlert :alert="alert" />

</template>

<script>
import LeftAlert from "@/components/alerts/LeftAlert";
    export default {
        components: {
            LeftAlert,
        },
        props: {
            alert: {
                type: Object,
                required: true,
    },
        }
    }
</script>

<style lang="scss" scoped>
    v-row {
  margin: 0;
  padding: 0;
}
</style>