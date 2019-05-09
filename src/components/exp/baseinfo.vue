<template>
  <div>
    <!--面包屑-->
    <div class="brand">
      <breadcrumb :arrayName="brand" :hasIcon="hasIcon"></breadcrumb>
    </div>

    <div class="container">
      <el-row>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              &nbsp;&nbsp;
              <b>项目基本信息</b>
            </template>
            <el-form   label-width="100px">
              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="项目编码" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="项目名称" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="项目简称" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="项目状态" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="在建类型" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="系统名称" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="项目简介" prop="email" >
                    <el-input style="width:76%;" type="textarea" :rows="5" size="small"  ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="项目类型" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="项目重要级别" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="技术专业" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="预算来源" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="工作量级别" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="项目周期级别" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="所属公司" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="实施方" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="甲方项目经理" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="乙方项目经理" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="用户代表" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="QA" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="项目提交人" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="立项审批" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

             </el-form>
           </el-collapse-item>
        </el-collapse>
      </el-row>

      <el-row style="margin-top:30px;">
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              &nbsp;&nbsp;
              <b>系统基本信息</b>
            </template>
            <el-form label-width="100px">
              <el-row>
              <el-col :span="12">
                <el-form-item style="margin-top:15px;margin-bottom:0px;" label="系统编码" prop="email" >
                  <el-input class="input-small" :disabled="true" size="small" ></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item style="margin-top:15px;margin-bottom:0px;" label="系统名称" prop="email" >
                  <el-input class="input-small" :disabled="true" size="small" ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="系统简称" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="目前系统状态" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="重要级别" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="系统类别" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="安全等级" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="所属板块" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="应用/服务" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="首次投产时间" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="中台授权状态" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="申请流水号" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="用户数量" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="运维经理" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="所属组织" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="最后修改人姓名" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="最后修改时间  " prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item style="margin-top:15px;margin-bottom:0px;" label="注册申请人" prop="email" >
                    <el-input class="input-small" :disabled="true" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-row>

    </div>

  </div>
</template>

<script>
  import baseinfo from  './js/baseinfo.js'
  export default baseinfo
</script>

<style>

</style>
