var app = new Vue({
    el: '#app',
    data: {
        arrayDischi: [],

    },
    mounted() {
        axios.get('http://localhost/php-ajax-dischi/api/')
            .then((response) => {

                this.arrayDischi = response.data
                console.log(this.arrayDischi)

            })
    },
    beforeUpdate() {

    },
    methods: {

    }
})