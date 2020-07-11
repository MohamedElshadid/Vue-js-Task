<template>
    <div>
        <toolbar></toolbar>
        <router-view></router-view>
    </div>
</template>

<script>
import toolbar from './components/layouts/Navbar';
export default {
components:{toolbar}
}
</script>

<style>

</style>