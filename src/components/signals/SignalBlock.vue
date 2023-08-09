<template>
      <!-- <v-col flex-column> -->
        <div plain class="switchWrapper" :class="(data.value) ?'bgBlue':'bgWhite'">
                   <v-switch @click="handleSwitch" v-model=data.value> </v-switch>
        {{ data.name }}
        </div>
        

      <!-- </v-col> -->
  </template>
  
  <script>
  export default {
    // created: function() {
    //   console.log("Starting connection to Websocket")
    //   this.connection = new WebSocket("ws://localhost:8081");
    //   this.connection.onopen = function(event) {
    //     console.log(event);
    //     console.log("Successfully connnected to ws");
    //   }
    // },
    mounted: async function() {
      //this.handleButton()
      //this.sendMessage({ state: this.btnState });
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
        control: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data: () => ({
    //   name: this.data.name,
    //   value: this.data.value,
      switch1: false,
    }),

    methods: {
      handleSwitch () {
          //this.$emit('changeSignalValue', data)
          //this.sendMessage(this.switch1 );
          if (this.control) {
            this.$emit('sendMessage', this.data.value)
          }
      },
      sendMessage() {
        //console.log(this.connection);
        //this.connection.send('124123');
      },
    },
  
  };
  </script>
  
  <style lang="scss" scoped>
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
  