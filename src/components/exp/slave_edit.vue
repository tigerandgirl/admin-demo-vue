<template>
  <div>
    <div class="brand" >
      <breadcrumb :arrayName="brand" :hasIcon="hasIcon"></breadcrumb>
    </div>

    <div class="container slave-container " >
      <el-form :model="good" :rules="goodRules"  ref="goodRules"  label-width="100px">
        <el-collapse v-model="showCollapse" accordion>
          <el-collapse-item name="1" class="search-collapse-title">
            <template slot="title">
              <span class="vertical-bar" style="margin:0;" ></span>
              <font  class="collapse-content" >{{$t('cm.update')}}( <font >*</font> {{$t('te.must_fill')}})</font>
            </template>
            <div class="div-form">

              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('mst.good_no')" prop="goodNo">
                    <el-input v-model="good.goodNo" class="form-input" size="small"  ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('mst.good_date')"  prop="orderNo">
                    <el-input v-model="good.orderNo" size="small" class="form-input" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('mst.good_price')" prop="price">
                    <el-input v-model="good.price" size="small" class="form-input" ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item :label="$t('mst.good_count')" prop="count">
                    <el-input class="form-input" size="small" v-model="good.count"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('mst.good_product')" prop="product" >
                    <el-input class="form-input" size="small" v-model="good.product"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
        </el-collapse>
        <el-form-item class="form-btn-group" >
          <el-button  class="btn-default"  size="small" @click="save('goodRules')"  >{{$t('cm.save')}}</el-button>
          <el-button size="small" class="btn-back" @click="back()" >{{$t('cm.return')}}</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
  import slave_edit from './js/slave_edit'
  export default slave_edit
</script>

<style>
</style>
