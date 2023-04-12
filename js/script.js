const { createApp } = Vue;

createApp({
    data() {
        return {
            response: [],
            show: false

        }
    },
    methods: {
        showList() {
            if(this.response.length == 10){
                this.show = true;
            } else {
                this.show = false
            }
            
        },

        clear(){
            this.response = [];
            for (i = 0; i < 10; i++) {
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                        if(this.response.length < 10){
                        this.response.push(resp.data.response)
                        }
                        this.showList()
                    })           
        }
        }

        
    },
    mounted() {
        for (i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                this.response.push(resp.data.response)
            })
        }
    }

}).mount("#app")