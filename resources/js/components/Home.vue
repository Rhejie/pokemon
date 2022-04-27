<template>
    <div>

    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            pokemons: []
        }
    },
    created() {
        this.getPoks()
    },
    methods: {
        async getPokemons() {
            await this.$API.PokemonApi.getPokemons()
                .then(res => {
                    console.log(res.data);
                }).catch(err => {
                    console.log('Error in getting pokemons -->', err);
                })
        },
        async getPoks() {
            await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                .then(res => {
                    if(res.ok) {
                        return res.json()
                    }
                }).then(res => {
                    console.log('====================================');
                    console.log(res);
                    console.log('====================================');
                })
                .catch(err => {
                    console.log('Error in getting pokemons: ', err);
                })
        }
    },
}
</script>
