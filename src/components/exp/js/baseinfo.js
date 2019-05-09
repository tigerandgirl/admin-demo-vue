import  breadcrumb from '@/components/common/breadcrumb'

export default {
  components:{
    breadcrumb
  },
  data(){
    return {
      brand:[
        {name: '示例'},
        {name: '基本信息'}
      ],
      hasIcon:false
    }
  }
}
