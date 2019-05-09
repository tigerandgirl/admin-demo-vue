<template>
    <div>
        <el-row class="table-body">
            <el-table :data="tableData1"  class="no_line table-default"  ref="multipleSelection" @selection-change="handleSelectionChange"   @row-dblclick="openDetail" >
                <!--多选框-->
                <el-table-column  type="selection" align="center" width="55"   ></el-table-column>
                <!--商品名称-->
                <el-table-column  prop="name" :label="$t('po.good_name')" >
                    <template slot-scope="scope" >
                        <a  style="text-decoration: underline;" @click="showDetails(scope.row)">{{scope.row.name}}</a>
                    </template>
                </el-table-column>
                <!--商品编号-->
                <el-table-column prop="no" :label="$t('po.good_no')" ></el-table-column>
                <!--商品毛重-->
                <el-table-column prop="weight" :label="$t('po.good_weight')" ></el-table-column>
                <!--商品产地-->
                <el-table-column prop="product" :label="$t('po.good_product')" ></el-table-column>
                <!--生产日期-->
                <el-table-column prop="date" :label="$t('po.product_date')"></el-table-column>
                <!--操作-->
                <el-table-column  :label="$t('po.operate')"  width="180px">
                    <template slot-scope="scope" >
                        <!--查看-->
                        <el-button @click="showDetails(scope.row)" type="text" size="small" >{{$t('te.look')}}</el-button>
                        <!--编辑-->
                        <el-button @click="editOrder(scope.row)" type="text" size="small" >{{$t('te.modify')}}</el-button>
                        <!--删除-->
                        <el-button @click="delClick(scope.row)" type="text" size="small" class="el-button-del" >{{$t('te.delete')}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>

        <el-row class="table-bottom" >
            <!--按钮-->
            <div class="table-bottom-btn-group" >
                <el-checkbox v-model="isSelected" @change="checkSelected" ></el-checkbox>
                <!--删除-->
                <el-button type="danger" class="btn1"  @click="batchDel(tableData1)"  size="small" >{{$t('te.delete')}}</el-button>
                <!--添加-->
                <el-button class="btn-add btn2 "   size="small" @click="addUser" >{{$t('te.add')}}</el-button>
                <!--导出-->
                <el-button class="btn-default btn3"  size="small" @click="exportExcel">{{$t('te.exports')}}</el-button>
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



</template>

<script>
    import master_table from './js/master_table.js'
    export default master_table
</script>

<style scoped>

</style>