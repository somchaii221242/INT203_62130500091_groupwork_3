const app = {
    data() {
        return {
            photos:[
                {img: 'images/g.jpg', alt:'gallardo', title: 'Lamboghini : Gallardo', done: false},
                {img: 'images/h.jpg', alt:'huracan',  title: 'Lamboghini : Huracan', done: false},
                {img: 'images/a.jpg', alt:'aventador', title: 'Lamboghini : Aventador', done: false}
            ]
    }
},
    computed: {
        totalphoto(){
            return this.photos.length
        }
    }
}
Vue.createApp(app).mount('#app')
