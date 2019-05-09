<template>
    <div>
        <div class="brand" style="height:40px;position:relative;background-color:#E5E9EC;">
            <breadcrumb :arrayName="brand"></breadcrumb>
        </div>

        <div class="container">
            <el-row class="search">
                <div class="search-collapse">
                    <el-input :placeholder="$t('adt.task_des')" size="small" class="search-box"  ></el-input>
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
                                <label class="label-search">{{$t('adt.procedure_name')}}:</label>
                            </el-col>
                            <el-col :span="6">
                                <el-input   class="input-small"  size="small" ></el-input>
                            </el-col>

                            <el-col :span="2">
                                <label class="label-search">{{$t('adt.task_des')}}:</label>
                            </el-col>
                            <el-col :span="6">
                                <el-input-number  class="input-number-right"  size="small" controls-position="right" ></el-input-number>
                            </el-col>

                            <el-col :span="2">
                                <label class="label-search">{{$t('adt.transacted_business')}}:</label>
                            </el-col>
                            <el-col :span="6">
                                <el-input   class="input-small"  size="small" ></el-input>
                            </el-col>
                        </el-row>

                        <el-row :gutter="10" class="row-search">
                            <el-col :span="2">
                                <label class="label-search">{{$t('adt.send_time')}}:</label>
                            </el-col>
                            <el-col :span="6">
                                <el-date-picker
                                        class="input-small timeform"

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
                                    <el-button class="btn-default"  size="small">{{$t('adt.query')}}</el-button>
                                    <el-button class="btn-second" style="margin:0;"  size="small" >{{$t('adt.reset')}}</el-button>
                                </el-col>

                            </div>
                        </el-row>
                    </el-collapse-item>

                </el-collapse>
            </el-row>

            <div style="height:15px;background-color:#F1F1F1;"></div>

            <el-row class="table-body">
                <el-table :data="tables"    class="no_line" fixed >
                    <el-table-column  prop="taskDes" :label="$t('adt.task_des')"  ></el-table-column>
                    <el-table-column  prop="flowName" :label="$t('adt.procedure_name')"  ></el-table-column>
                    <el-table-column  prop="doneTask" :label="$t('adt.transacted_business')"  ></el-table-column>
                    <el-table-column  prop="launchTime" :label="$t('adt.send_time')"  ></el-table-column>
                    <el-table-column  prop="activityName" :label="$t('adt.active_name')" width="230" show-overflow-tooltip  ></el-table-column>

                    <el-table-column  :label="$t('adt.operator')">
                        <template slot-scope="scope" >
                            <el-button  type="text" size="small" >{{$t('adt.modify')}}</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>

            <el-row class="table-bottom">
                <el-pagination
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
    import already_done_task from './js/already_done_task'
    export default already_done_task
</script>

<style>
    /*.container{
        background-color: #FFFFFF;
        border-bottom: 1px solid #ddd;
        margin-left:15px;
        margin-right:15px;
    }

    .search{
        margin-top:15px;
    }

    .search-collapse{
        background-color:#F1F1F1;
        height:0px;
    }

    .search-collapse-content{
        margin-left:5px;
    }
    .search-collapse-title{
        background-color: #F1F1F1;
    }

    .vertical-bar{
        margin-left: -5px;
        width:5px;
        background-color: #004a86;
        height:50px;
    }

    .title-font{
        font-family: "Microsoft YaHei";
        color: #004a86;
        cursor:pointer;
        position:relative;
        left: 280px;
        font-size:14px;
    }

    .search .search-collapse .search-box{
        width:220px;
        height:32px;
        position:relative;
        left:10px;
        top:10px;
    }

    .search-btn{
        position:relative;
        height:30px;
        left:5px;
        top:12px;
    }

    .btn-group-search{
        margin-top:15px;
        margin-left:2px;
        border-top: 1px solid #ddd;
        padding-top: 15px;
    }
*/
</style>