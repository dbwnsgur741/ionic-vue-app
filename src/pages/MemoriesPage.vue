<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>All Memories</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-List>
                <ion-item>aa</ion-item>
                <ion-item>bb</ion-item>
                <ion-item>cc</ion-item>
                <ion-item>dd</ion-item>
            </ion-List>
        </ion-content>
    </ion-page>
</template>


<script>
import { IonPage, IonHeader, IonTitle, IonContent,IonToolbar,IonList, IonItem } from "@ionic/vue";

export default {
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        IonToolbar,
        IonList,
        IonItem
    }
}
</script>
