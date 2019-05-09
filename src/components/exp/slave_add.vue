<template>
  <div>
    <div class="brand">
      <breadcrumb :arrayName="brand"  key="sub" :hasIcon="hasIcon"></breadcrumb>
    </div>
    <div class="container slave-container" >
      <el-form  :model="good" :rules="goodRules"  ref="goodRules"   label-width="100px">
        <el-collapse v-model="showCollapse" accordion>
          <el-collapse-item name="1">
            <template slot="title" class="ele-collapse-temp">
              <span class="ele-collapse-temp-span" style="margin:0;" ></span>
              <font class="collapse-content">{{$t('cm.add')}}( <font color="red">*</font> {{$t('te.must_fill')}})</font>
            </template>

            <div class="div-form">

              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('mst.good_no')" prop="goodNo">
                    <el-input  v-model="good.goodNo" size="small" style="width:75%;"  ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('mst.good_date')" prop="orderNo">
                    <el-input v-model="good.orderNo" size="small" style="width:75%;"  ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item  :label="$t('mst.good_price')" prop="price">
                    <el-input v-model="good.price" size="small" style="width:75%;"  ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item :label="$t('mst.good_count')" prop="count">
                    <el-input v-model="good.count" style="width:75%;" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('mst.good_product')" prop="product" >
                    <el-input v-model="good.product" style="width:75%;" size="small" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
        </el-collapse>
        <el-form-item class="form-btn-group">
          <el-button type="primary" class="btn-add" size="small" @click="addGood('goodRules')" >{{$t('cm.add')}}</el-button>
          <el-button size="small" class="btn-back" @click="goBack" >{{$t('cm.return')}}</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
  import slave_add from './js/slave_add'
  export default slave_add
</script>

<style>
</style>
