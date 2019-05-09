<template>
    <div>
        <div class="brand" v-show="showBreadcrumb" >
          <breadcrumb :arrayName="brand"  key="master" :hasIcon="hasIcon"></breadcrumb>
        </div>

        <div class="container">
            <el-row  :style="showBreadcrumb== true? 'margin-top:15px;padding-top:15px;':''">
                <el-tabs  v-model="activeName" @tab-click="tabClick" type="card" >
                    <el-tab-pane :label="$t('mst.order_details')" name="tab1">
                      <master_details v-if="showTab1" key="tab1" :orderLookHandles="orderLookHandle" :orderDetails="orderDetails"></master_details>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('mst.good_list1')" name="tab2">
                      <slave_table v-if="showTab2" key="tab2" ></slave_table>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('mst.good_list2')" v-if="!orderLookHandle" name="tab3">
                      <slave_details v-if="showTab3" @trigger="clickAddButton" :operate="operate" :goods="goodDetails"  key="tab3"></slave_details>
                      <slave_details v-else-if="showDetails" @trigger="clickAddButton"  :operate="operate" :goods="goodDetails"  key="tab4"></slave_details>
                    </el-tab-pane>
                </el-tabs>
            </el-row>
        </div>

        <div class="container">
          <div v-if="showSubTable" class="tab-bottom-table"  >
            <slave_table  key="1"  :changed="changeOperate" @add="addGood" @edit="editGood"  ></slave_table>
          </div>
        </div>


    </div>
</template>


<script>
  import tab from './js/tab.js'
  export default tab

</script>

<style>

</style>
