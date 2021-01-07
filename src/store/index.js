import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            memories:[
                {
                    id: "m1",
                    image : "https://cdn11.bigcommerce.com/s-qmkmkpbc/images/stencil/1280x1280/products/9418/60177/GIBSON-LES-PAUL-SLASH-APPETITE-AMBER-BURST-207000339-angle-left__01119.1591033942.jpg?c=2",
                    title: "Gibson - 레스폴",
                    description: "Sounds Good",
                },
                {
                    id: "m2",
                    image : "https://canary.contestimg.wish.com/api/webimage/5e6929a45a2b18a5d247b2b1-large.jpg?cache_buster=be7c676c7a3a5322b255014d02afb895",
                    title: "Fender - 스트렛 ",
                    description: "It is a really nice trip",
                },
                {
                    id: "m3",
                    image : "https://canary.contestimg.wish.com/api/webimage/5e6929a45a2b18a5d247b2b1-large.jpg?cache_buster=be7c676c7a3a5322b255014d02afb895",
                    title: "Fender - 텔레",
                    description: "It is a really nice trip",
                },
            ]
        };
    },
    getters:{
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId)=>{
                return state.memories.find(memory => memory.id === memoryId);
            };
        }
    }
});

export default store;
