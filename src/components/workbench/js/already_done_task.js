import breadcrumb from '../../common/breadcrumb'

export default {
    components:{
        breadcrumb
    },
    data(){
        return {
            brand:[
                {name:'lang.workbench'},
                {name:'lang.already_done_task'}
            ],
            hasIcon:false,
            advSearch:'adt.advance_search',
            tables:[
                {   taskDes:'请假实例描述',
                    flowName:'请假流程',
                    doneTask:'填写请假单',
                    launchTime:'2019-03-04',
                    activityName:'主管审批:[PXMWWIJ]吴英杰(正处理)'
                },
                {   taskDes:'请假实例描述2',
                    flowName:'请假流程1',
                    doneTask:'填写请假单1',
                    launchTime:'2019-03-14',
                    activityName:'主管审批:[PXMWWIJ]吴英杰(正处理)'
                }
            ],
        }
    },
    methods:{
        advanceSearch : function(){
            if(this.advSearch == "adt.advance_search"){
                this.advSearch = "adt.return";
            }else{
                this.advSearch = "adt.advance_search";
            }
        },
    }
}