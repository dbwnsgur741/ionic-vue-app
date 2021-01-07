<template>
    <base-layout page-title="Add a Memory" page-default-back-link="/MemoriesPage">
        <create-memory @save-memory="saveMemory"></create-memory>
    </base-layout>
</template>

<script>
import CreateMemory from "../components/memories/CreateMemory.vue";

export default {
    components:{
        CreateMemory
    },
    methods:{
        saveMemory(memoryData){
            this.$store.dispatch('addMemory', memoryData);
            this.$router.replace('/MemoriesPage'); // push
        }
    }
}
</script>