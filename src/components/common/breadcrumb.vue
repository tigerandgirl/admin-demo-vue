<template>
    <el-breadcrumb class="common-brand" separator-class="el-icon-arrow-right">
        <template v-for="(item,index) in arrayName" >
            <el-breadcrumb-item  v-if="(arrayName.length == index+1)&& hasIcon == true" >
                <el-badge :value="1" class="brand-icon" >
                    {{$t(item.name)}}
                </el-badge>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-else >
                {{$t(item.name)}}
            </el-breadcrumb-item>
        </template>

    </el-breadcrumb>
</template>

<script>
    export default {
        props:{
            arrayName:Array,
            hasIcon:Boolean
        },
        data(){
            return {

            }
        }

    }
</script>

<style>


</style>