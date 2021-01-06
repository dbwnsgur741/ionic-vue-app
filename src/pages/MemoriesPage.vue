<template>
    <base-layout page-title="All Memories">
        <ion-List>
            <ion-item>A trip into the mountains</ion-item>
            <ion-item>Sunrise</ion-item>
            <ion-item>cc</ion-item>
            <ion-item>dd</ion-item>
        </ion-List>
    </base-layout>
</template>


<script>
    import {
        IonList,
        IonItem
    } from "@ionic/vue";

    export default {
        components: {
            IonList,
            IonItem
        }
    }
</script>