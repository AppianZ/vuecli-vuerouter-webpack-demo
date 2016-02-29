<template>

    <div id="about页面的最外层容器">
        <div id="card" @click="testClick">我2是卡123片组件</div>
        <div id="water">{{ water }}</div>
        <pages></pages>
    </div>

</template>

<style>

</style>

<script>

    export default {
        data () {
            return {
                water : '我是水电费组件'
            }
        },
        methods : {
            testClick (){
                console.log('testclick');
            }
        }
    }
</script>
