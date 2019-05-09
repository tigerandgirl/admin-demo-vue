<template>
  <div class="container  content-line">
    <div class="div-row">
      <el-form   label-width="100px">
        <el-row >
          <el-col :span="12">
            <el-form-item :label="$t('mst.good_no')"  >
              <el-input v-model="goodDetails.goodNo"  :disabled="true" size="small" class="input-small" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('mst.good_product')"  >
              <el-input v-model="goodDetails.orderNo"  :disabled="true" size="small" class="input-small"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('mst.good_price')" >
              <el-input v-model="goodDetails.price" :disabled="true" size="small" class="input-small"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item :label="$t('mst.good_count')" prop="phone">
              <el-input v-model="goodDetails.count" class="input-small" :disabled="true" size="small"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('mst.good_product')" >
              <el-input v-model="goodDetails.product" class="input-small" :disabled="true" size="small" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item style="text-align: center;margin-right:10%;">
          <el-button size="small" class="btn-second" @click="closeWindow">{{$t('cm.return')}}</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
  import slave_look from './js/slave_look'

  export default slave_look
</script>

<style>
</style>
