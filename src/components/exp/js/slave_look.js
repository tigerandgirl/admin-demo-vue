export default {
  props:['goodDetails'],
  data(){
    return {

    }
  },
  methods:{
    closeWindow:function(){
      this.$emit("closeSlaveLook");
    }
  }
}
