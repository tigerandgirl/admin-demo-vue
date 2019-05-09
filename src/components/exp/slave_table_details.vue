<template>
    <div class="container  content-line">
        <div class="div-row">
            <el-form :model="order"  label-width="100px">
                <el-row >
                    <el-col :span="12">
                        <el-form-item :label="$t('po.good_name')" prop="name" >
                            <el-input v-model="sendData.name" :disabled="true" size="small" class="input-small" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item :label="$t('po.good_no')" prop="no" >
                            <el-input v-model="sendData.no" :disabled="true" size="small" class="input-small"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item :label="$t('po.good_weight')" prop="weight">
                            <el-input class="input-small" :disabled="true" size="small" v-model="sendData.weight"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item :label="$t('po.good_product')" prop="product">
                            <el-input class="input-small" :disabled="true" size="small" v-model="sendData.product"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item :label="$t('po.product_date')" prop="date" >
                            <el-input class="input-small" :disabled="true" size="small" v-model="sendData.date"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-form-item :label="$t('po.good_desc')" prop="desc">
                        <el-input :rows="4" v-model="sendData.desc" style="width:92%;" :disabled="true" type="textarea"  size="small" ></el-input>
                    </el-form-item>
                </el-row>

                <el-form-item style="text-align: center;margin-right:10%;">
                    <el-button size="small" class="btn-second" @click="closeWindow('dalian')">{{$t('te.return')}}</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
    import slave_table_details from './js/slave_table_details.js'
    export default slave_table_details
</script>

<style>

</style>