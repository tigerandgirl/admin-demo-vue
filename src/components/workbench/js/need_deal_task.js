import breadcrumb from '../../common/breadcrumb'

export default {
    components:{
        breadcrumb
    },
    data(){
        return {
            brand:[
                {name: 'lang.workbench'},
                {name: 'lang.need_deal_task'}
            ],
            hasIcon:true,
            tables:[
                {task_des:'任务的描述',originator:'pxmwmm',launch_time:'2019-03-04',deal_man:'pxmwcc',deal_time:'2019-03-04',deal_des:'暂无'}
            ],
            nowPage: 1,
            applicate_time:'',
            advSearch: 'ndt.advance_search'

        }
    },
    methods:{
        advanceSearch : function(){
            if(this.advSearch == "ndt.advance_search"){
                this.advSearch = "ndt.return";
            }else{
                this.advSearch = "ndt.advance_search";
            }

        },
    }

}