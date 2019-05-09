<template>
    <div>
        <div class="brand">
            <breadcrumb :arrayName="brand" :hasIcon="hasIcon" ></breadcrumb>
        </div>
        <div class="container " style="margin:15px;">
            <el-form :model="order"  :rules="orderRules"  ref="orderRules"  label-width="100px">
                <el-collapse v-model="showCollapse" accordion>
                    <el-collapse-item name="1">
                        <template slot="title" class="ele-collapse-temp">
                            <span class="ele-collapse-temp-span" style="margin:0;" ></span>
                            <font style="margin-left: 15px;font-weight: bold;">{{$t('te.add')}}( <font color="red">*</font> {{$t('te.must_fill')}} )</font>
                        </template>

                        <div style="margin-top:15px;">

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

                        </div>
                    </el-collapse-item>
                </el-collapse>

                <el-form-item style="margin-bottom:10px;border-top:1px solid #ddd;padding-top:15px;">
                    <el-button type="primary" class="btn-add" size="small" @click="addOrder('orderRules')" >{{$t('po.add')}}</el-button>
                    <el-button size="small" class="btn-back" @click="back">{{$t('po.return')}}</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
    import order_add from '../js/purchase_order/order_add.js'

    export default order_add
</script>

<style></style>