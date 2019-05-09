<template>
  <div class="container  content-line">
    <div class="div-row">
      <el-form :model="order" :rules="orderRules" ref="orderRules" label-width="100px">
        <el-row >
          <el-col :span="12">
            <el-form-item :label="$t('mst.order_no')" prop="no" >
              <el-input v-model="order.no" style="width:75%;" :disabled="orderLookHandle" size="small" class="input-small" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('mst.order_man')" prop="name" >
              <el-input v-model="order.name" style="width:75%;" :disabled="orderLookHandle" size="small" class="input-small"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('mst.order_phone')" prop="phone">
              <el-input v-model="order.phone" style="width:75%;" :disabled="orderLookHandle" size="small" class="input-small"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item :label="$t('mst.order_price')" prop="price">
              <el-input v-model="order.price" style="width:75%;"  :disabled="orderLookHandle" size="small" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('mst.order_time')" prop="time" >
              <el-input v-model="order.time" style="width:75%;"  :disabled="orderLookHandle" size="small" ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

          </el-col>
        </el-row>

        <el-form-item style="margin-bottom:10px;" v-if="orderAddHandle">
          <el-button size="small" class="btn-default" @click="save('orderRules')">{{$t('cm.save')}}</el-button>
          <el-button size="small" class="btn-second" @click="back">{{$t('cm.return')}}</el-button>
        </el-form-item>
        <el-form-item style="margin-bottom:10px;" v-else-if="orderEditHandle">
          <el-button size="small" class="btn-default" @click="edit('orderRules')">{{$t('cm.save')}}</el-button>
          <el-button size="small" class="btn-second" @click="back">{{$t('cm.return')}}</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
  import master_details from './js/master_details.js'
  export default master_details
</script>

<style>

</style>
