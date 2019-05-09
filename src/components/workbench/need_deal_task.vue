<template>
    <div>
        <div class="brand" style="height:40px;position:relative;background-color:#E5E9EC;">
            <breadcrumb :arrayName="brand" :hasIcon="hasIcon"></breadcrumb>
        </div>

        <div class="container">
           <el-row class="search">
               <div class="search-collapse">
                   <el-input :placeholder="$t('ndt.task_des')" size="small" class="search-box"  ></el-input>
                   <el-button size="small" slot="append" icon="el-icon-search" class="btn-default search-btn"    ></el-button>
               </div>
               <el-collapse class="search-collapse-content" @change="advanceSearch"  accordion>
                   <el-collapse-item>

                       <template slot="title" class="search-collapse-title" >
                           <span class="vertical-bar"></span>&nbsp;&nbsp;
                           <span class="title-font" >{{$t(advSearch)}}</span>
                       </template>

                       <!-- 高级搜索具体内容 -->
                       <el-row :gutter="10" class="row-search" >
                           <el-col :span="2">
                               <label class="label-search">{{$t('ndt.procedure_name')}}:</label>
                           </el-col>
                           <el-col :span="6">
                               <el-input  class="input-small"  size="small" ></el-input>
                           </el-col>

                           <el-col :span="2">
                               <label class="label-search">{{$t('ndt.task_des')}}:</label>
                           </el-col>
                           <el-col :span="6">
                               <el-input  class="input-small"  size="small" ></el-input>
                           </el-col>

                           <el-col :span="2">
                               <label class="label-search">{{$t('ndt.applicate_man')}}:</label>
                           </el-col>
                           <el-col :span="6">
                               <el-input  class="input-small"  size="small" ></el-input>
                           </el-col>
                       </el-row>

                       <el-row :gutter="10" class="row-search">
                           <el-col :span="2">
                               <label class="label-search">{{$t('ndt.applicate_time')}}:</label>
                           </el-col>
                           <el-col :span="6">
                               <el-date-picker
                                       class="input-small timeform"
                                       v-model="applicate_time"
                                       type="daterange"
                                       :range-separator="$t('ndt.to')"
                                       :start-placeholder="$t('ndt.begin_time')"
                                       :end-placeholder="$t('ndt.end_time')">
                               </el-date-picker>
                           </el-col>

                       </el-row>

                       <!-- 查询和重置按钮-->
                       <el-row :gutter="10" class="row-search">
                           <div class="btn-group-search">
                               <el-col :span="2">&nbsp;</el-col>
                               <el-col :span="6">
                                   <el-button class="btn-default"  size="small">{{$t('ndt.query')}}</el-button>
                                   <el-button class="btn-second" style="margin:0;"  size="small" >{{$t('ndt.reset')}}</el-button>
                               </el-col>

                           </div>
                       </el-row>
                   </el-collapse-item>

               </el-collapse>
           </el-row>

           <el-row class="btn-group" style="display:none;" >
               <el-col>
                   <el-button class="btn-default" size="small" >{{$t('ndt.add')}}</el-button>
                   <el-button class="btn-default" size="small" >{{$t('ndt.exports')}}</el-button>
                   <el-button class="btn-default" size="small"  >{{$t('ndt.selUser')}}</el-button>
                   <el-button class="btn-default" size="small">{{$t('ndt.batchDel')}}</el-button>
               </el-col>
           </el-row>

            <div style="height:15px;background-color:#F1F1F1;"></div>

            <el-row class="table-body">
                <el-table :data="tables" border  class="table-default" >
                    <el-table-column  :label="$t('ndt.task_des')"  >
                        <template slot-scope="scope" >
                            <a tips="111">{{scope.row.task_des}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column  prop="originator" :label="$t('ndt.originator')"  ></el-table-column>
                    <el-table-column  prop="launch_time" :label="$t('ndt.launch_time')"  ></el-table-column>
                    <el-table-column  prop="deal_man" :label="$t('ndt.deal_man')"  >
                        <template slot-scope="scope">
                            <a>{{scope.row.deal_man}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column  prop="deal_time" :label="$t('ndt.deal_time')"  ></el-table-column>
                    <el-table-column  prop="deal_des" :label="$t('ndt.deal_des')"  ></el-table-column>
                    <el-table-column  :label="$t('ndt.operate')">
                        <template slot-scope="scope" >
                                <el-button  type="text" size="small" >{{$t('ndt.modify')}}</el-button>
                                <el-button  type="text" size="small" >{{$t('ndt.delete')}}</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>

            <el-row class="table-bottom">
                <el-pagination
                        :current-page="nowPage"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="10"
                        :pager-count="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="76">
                </el-pagination>
            </el-row>



        </div>
    </div>

</template>

<script>
    import need_deal_task from './js/need_deal_task'
    export default need_deal_task
</script>

<style>




</style>