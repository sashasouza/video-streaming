<template>
    <div class="filter">
        <input type="text" placeholder="Type to Filter Videos" v-model="text" @keyup="$emit('filter-results', this.text)"
            name="filter" />
    </div>
</template>

<script>
export default {
    name: 'FilterComponent',
    data() {
        return {
            text: '',
        }
    }
}
</script>

<style scoped>
.filter {
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
}

input {
    width: 30%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}

@media only screen and (max-width: 785px) {
    input {
        width: 50%;
    }
}
</style>