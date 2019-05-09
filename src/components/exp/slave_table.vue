<template>
    <div>
        <el-row class="table-body">
            <el-table :data="tableData"  border   class="table-default" @row-dblclick="showGoodDetails"  ref="multipleSelection" @selection-change="handleSelectionChange"   >
                <!--多选框-->
                <el-table-column  type="selection" align="center" width="55"   ></el-table-column>
                <!--商品编号-->
                <el-table-column  prop="goodNo" :label="$t('mst.good_no')" ></el-table-column>
                <!--订单编号-->
                <el-table-column prop="orderNo" :label="$t('mst.good_date')" ></el-table-column>
                <!--商品单价-->
                <el-table-column prop="price" :label="$t('mst.good_price')" ></el-table-column>
                <!--商品数量-->
                <el-table-column prop="count" :label="$t('mst.good_count')" ></el-table-column>
                <!--销售商家-->
                <el-table-column prop="product" :label="$t('mst.good_product')"></el-table-column>
                <!--操作-->
                <el-table-column  :label="$t('cm.operate')"  width="180px">
                    <template slot-scope="scope" >
                        <!--查看-->
                        <el-button  type="text" size="small" @click="showGoodDetails(scope.row)" >{{$t('cm.look')}}</el-button>
                        <!--编辑-->
                        <el-button  type="text"  v-if="changeOperate && !lookHandler" size="small" @click="showGoodEdit(scope.row)" >{{$t('cm.edit')}}</el-button>
                        <el-button  type="text" v-else-if="!lookHandler" size="small" @click="showGoodEdit2(scope.row)" >{{$t('cm.edit')}}</el-button>
                        <!--删除-->
                        <el-button  type="text" size="small" v-if="!lookHandler" class="el-button-del" @click="delGood(scope.row)" >{{$t('cm.delete')}}</el-button>
                    </template>

                </el-table-column>
            </el-table>
        </el-row>

        <el-row class="table-bottom" >
            <!--按钮-->
            <div class="table-bottom-btn-group" v-if="!lookHandler" >
                <el-checkbox v-model="isSelected"   @change="checkSelected"  ></el-checkbox>
                <!--删除-->
                <el-button type="danger" class="btn1"  @click="delGoods(tableData)"  size="small" >{{$t('cm.delete')}}</el-button>
                <!--添加-->
                <el-button class="btn-add btn2 " @click="addGood" v-if="changeOperate" size="small"  >{{$t('cm.add')}}</el-button>
                <el-button class="btn-add btn2 " @click="addGood2" v-else  size="small"  >{{$t('cm.add')}}</el-button>
                <!--导出-->
                <el-button class="btn-default btn3"  size="small" @click="exportGood" >{{$t('cm.export')}}</el-button>
            </div>
            <div class="table-bottom-btn-group" v-else >
              <el-checkbox v-model="isSelected"   @change="checkSelected"  ></el-checkbox>
              <!--导出-->
              <el-button class="btn-default btn1"  size="small" @click="exportGood" >{{$t('cm.export')}}</el-button>
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

        <!-- 引入类似modal的内容 以组件的形式 -->
        <el-dialog :title="$t('te.detail_page')" :class="changeCollapse?'dialog-open':'dialog-shrink'"  append-to-body width="60%"  :visible.sync="good_dialog" >
            <slave_look :goodDetails="goodDetails" @closeSlaveLook="closeDialog"></slave_look>
        </el-dialog>

    </div>
</template>

<script>
    import slave_table from './js/slave_table.js'
    export default slave_table
</script>

<style scoped>

</style>
