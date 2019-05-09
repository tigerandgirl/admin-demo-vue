<template>
    <div>
        <div class="brand" >
            <breadcrumb :arrayName="brand" :hasIcon="hasIcon"></breadcrumb>
        </div>

        <div class="container"  style="margin:15px;" >
            <el-collapse  v-model="collapse"  accordion>
                <el-collapse-item  name="0">
                    <template slot="title" class="ele-collapse-temp">
                        <span class="ele-collapse-temp-span" style="margin:0;" ></span>
                        <font style="margin-left: 15px;font-weight: bold;">{{$t('po.purchase_order')}}</font>
                    </template>

                    <div style="margin-top:15px;">
                        <el-tabs v-model="activeName" @tab-click="tabSwitch" type="card">
                            <el-tab-pane :label="$t('po.orderDetails')" name="first" key="first">
                                <orderDetails  v-if="renderTab1"></orderDetails>
                            </el-tab-pane>
                            <el-tab-pane :label="$t('po.orderDetails1')" name="second" key="second"  ><orderTable v-if="renderTab2" @editOrder="toOrderDetail2" ></orderTable></el-tab-pane>
                            <el-tab-pane :label="$t('po.orderDetails2')" name="third" key="third" ><orderDetails v-if="renderTab3" :sendData="orderDetail" @tabSelect="toOrderDetail3" ></orderDetails  ></el-tab-pane>
                        </el-tabs>
                    </div>

                </el-collapse-item>

            </el-collapse>
        </div>


        <div v-if="showTable" class="container" style="padding-top:15px;" >
            <orderTable @editOrder="toOrderDetail2"></orderTable>
        </div>



    </div>
</template>

<script>
    import purchase_order from './js/purchase_order'

    export default purchase_order

</script>

<style>

</style>