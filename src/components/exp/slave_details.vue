<template>
  <div>
    <div class="container " style="margin:15px;">
      <el-form label-width="100px" :model="good" :rules="goodRules"  ref="goodRules" >
        <div class="div-form">

          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('mst.good_no')" prop="goodNo">
                <el-input v-model="good.goodNo" class="form-input" size="small"  ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('mst.good_date')"  prop="orderNo">
                <el-input v-model="good.orderNo"  size="small" class="form-input" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('mst.good_price')" prop="price">
                <el-input v-model="good.price"  class="form-input" size="small" ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item :label="$t('mst.good_count')" prop="count">
                <el-input v-model="good.count"  class="form-input" size="small" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('mst.good_product')" prop="product" >
                <el-input v-model="good.product"  class="form-input" size="small" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item v-if="addOperate"  >
                <el-button size="small"  class="btn-default" @click="addGood('goodRules')" >{{$t('cm.save')}}</el-button>
                <el-button size="small" class="btn-back" @click="resetGood" >{{$t('cm.reset')}}</el-button>
              </el-form-item>
              <el-form-item v-else  >
                <el-button size="small"  class="btn-default" @click="editGood('goodRules')"  >{{$t('cm.save')}}</el-button>
                <el-button size="small" class="btn-back" @click="returnGood" >{{$t('cm.reset')}}</el-button>
                <!--<el-button size="small" class="btn-back" @click="returnGood" >{{$t('cm.return')}}</el-button>-->
              </el-form-item>

            </el-col>
          </el-row>
        </div>

      </el-form>
    </div>
  </div>
</template>

<script>
  import slave_details from './js/slave_details.js'
  export default slave_details
</script>

<style>

</style>
