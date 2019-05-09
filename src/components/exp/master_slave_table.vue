<template>
    <div>
        <div class="brand" >
            <breadcrumb :arrayName="brand" :hasIcon="hasIcon"></breadcrumb>
        </div>

        <div class="container">
            <el-row class="search">
              <div class="search-collapse">
                <!--普通搜索-->
                <el-input :placeholder="$t('mst.please_input_name')" v-model="nameOrAge" size="small" class="search-box"   ></el-input>
                <el-button size="small" @click="commonSearch" slot="append" icon="el-icon-search" class="btn-default search-btn"  ></el-button>
              </div>
              <!--折叠板-->
              <el-collapse class="search-collapse-content" @change="advanceSearch" v-model="activeName"  accordion>
                <el-collapse-item>
                  <template slot="title" class="search-collapse-title" >
                    <span class="vertical-bar"></span>&nbsp;&nbsp;
                    <span class="title-font" >{{$t(advSearch)}}</span>
                  </template>
                  <!-- 高级搜索具体内容 -->
                  <el-row :gutter="10" class="row-search" >
                    <el-col :span="2">
                      <label class="label-search">{{$t('mst.order_man')}}:</label><!--姓名-->
                    </el-col>
                    <el-col :span="6">
                      <el-input  class="input-small" v-model="name" size="small" ></el-input>
                    </el-col>

                    <el-col :span="2">
                      <label class="label-search">{{$t('mst.order_address')}}:</label><!--收货人地址-->
                    </el-col>
                    <el-col :span="6">
                      <el-input  class="input-small" v-model="address" size="small" ></el-input>
                    </el-col>

                    <el-col :span="2">
                      <label class="label-search">{{$t('mst.order_phone')}}:</label><!--联系电话-->
                    </el-col>
                    <el-col :span="6">
                      <el-input  class="input-small"  v-model="phone" size="small" ></el-input>
                    </el-col>
                  </el-row>

                  <el-row :gutter="10" class="row-search">
                    <el-col :span="2">
                      <label class="label-search">{{$t('mst.order_no')}}:</label><!--订单编号-->
                    </el-col>
                    <el-col :span="6">
                      <el-input  class="input-small" v-model="orderNo"  size="small" ></el-input>
                    </el-col>
                  </el-row>
                  <!--折叠板 高级搜索的两个按钮-->
                  <el-row :gutter="10" class="row-search">
                    <div class="btn-group-search" :class="{'btn-group-search-shrink': is_collapse}">
                      <el-col :span="2">&nbsp;</el-col>
                      <el-col :span="6">
                        <!--查询按钮-->
                        <el-button class="btn-default" @click="search" size="small">{{$t('cm.query')}}</el-button>
                        <!--重置按钮-->
                        <el-button class="btn-second" @click="resetData"  style="margin:0;"  size="small" >{{$t('cm.reset')}}</el-button>
                      </el-col>
                    </div>
                  </el-row>
                </el-collapse-item>

              </el-collapse>
            </el-row>

          <div class="under-line"></div>

          <!--表格部分-->
          <div>
            <el-row class="table-body">
              <el-table :data="tableData" border  ref="multipleSelection" @selection-change="handleSelectionChange" >
                <!--序号-->
                <el-table-column  type="selection" align="center"   width="55" ></el-table-column>
                <!--订单编号-->
                <el-table-column  prop="no" :label="$t('mst.order_no')"  ></el-table-column>
                <!--收货人姓名-->
                <el-table-column prop="name" :label="$t('mst.order_man')" sortable></el-table-column>
                <!--联系电话-->
                <el-table-column prop="phone" :label="$t('mst.order_phone')" sortable></el-table-column>
                <!--订单金额-->
                <el-table-column prop="price" :label="$t('mst.order_price')" sortable></el-table-column>
                <!--下单时间-->
                <el-table-column prop="time" :label="$t('mst.order_time')"></el-table-column>
                <!--操作-->
                <el-table-column  :label="$t('cm.operate')"  width="180px">
                  <template slot-scope="scope" >
                    <!--查看-->
                    <el-button  type="text" size="small"  @click="showDetails(scope.row)" >{{$t('cm.look')}}</el-button>
                    <!--编辑-->
                    <el-button  type="text" size="small" @click="editOrder(scope.row)" >{{$t('cm.edit')}}</el-button>
                    <!--删除-->
                    <el-button  type="text" size="small" class="el-button-del" @click="delOrder(scope.row)" >{{$t('cm.delete')}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-row>

            <el-row class="table-bottom" >
              <!--按钮-->
              <div class="table-bottom-btn-group" >
                <el-checkbox v-model="isSelected" @change="checkSelected"   ></el-checkbox>
                <!--删除-->
                <el-button type="danger" class="btn1"  @click="batchDel(tableData)"    size="small" >{{$t('cm.delete')}}</el-button>
                <!--添加-->
                <el-button class="btn-add btn2 "  @click="addOrder"  size="small"  >{{$t('cm.add')}}</el-button>
                <!--导出-->
                <el-button class="btn-default btn3" @click="exportOrder"  size="small">{{$t('cm.export')}}</el-button>
              </div>
              <!-- 翻页 -->
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                @prev-click="prePage"
                @next-click="nextPage"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                :pager-count="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pageCount">
              </el-pagination>
            </el-row>
          </div>

        </div>

      <!-- 引入类似modal的内容 以组件的形式   -->
      <el-dialog :title="$t('te.detail_page')" :class="changeCollapse?'dialog-open':'dialog-shrink'"   width="60%" :visible.sync="dialogDetailsOrder" >
        <tab  :noBreadcrumb="noBreadcrumb" :orderDetails1="orderDetails" ></tab>
      </el-dialog>





    </div>
</template>

<script>
    import master_slave_table from './js/master_slave_table.js'
    export default master_slave_table
</script>

<style scoped>

</style>
