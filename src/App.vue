<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { setUserId } from './plugins/googleAnalyics.js'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created(){
    var randNum = parseInt(Math.random() * 100);
    setUserId(randNum);
  },

  watch:{
    '$route'(to,from){
      console.log(this.$route.path);
      var beforeUrl = from;
      var toUrl = to;

      console.log("BeforeURL : " + beforeUrl);
      console.log("ToURL : " + toUrl);
    }
  }
});
</script>