<template>
    <div>
        <div class="container " style="margin:15px;">
            <el-form :model="order"  :rules="orderRules"  ref="orderRules"  label-width="100px">
                <div class="div-form">

                    <el-row>
                        <el-col :span="12">
                            <el-form-item :label="$t('po.good_name')" prop="name">
                                <el-input v-model="order.name" class="form-input" size="small"  ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item :label="$t('po.good_no')"  prop="no">
                                <el-input v-model="order.no" size="small" class="form-input" ></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <el-form-item :label="$t('po.good_weight')" prop="weight">
                                <el-input v-model="order.weight" class="form-input" size="small" ></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="12">
                            <el-form-item :label="$t('po.good_product')" prop="product">
                                <el-input v-model="order.product" class="form-input" size="small" ></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                            <el-form-item :label="$t('po.good_desc')" prop="desc" >
                                <el-input :rows="4" v-model="order.desc"  type="textarea" class="form-input" size="small" ></el-input>
                            </el-form-item>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <el-form-item  >
                                <el-button size="small" class="btn-default" @click="save('orderRules')" >{{$t('po.save')}}</el-button>
                                <el-button size="small" class="btn-back" @click="reset" >{{$t('po.reset')}}</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>

            </el-form>
        </div>
    </div>
</template>

<script>
    import order_details from '../js/purchase_order/order_details.js'
    export default order_details
</script>

<style>

</style>