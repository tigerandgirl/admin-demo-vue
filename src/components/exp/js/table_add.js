import breadcrumb from '../../common/breadcrumb'

export default {
    components:{
        breadcrumb
    },
    data(){
        return {
            showCollapse:'1',
            brand:[
                {name: 'lang.exp'},
                {name: 'lang.table'},
                {name: 'te.add'}
            ],
            hasIcon:false,
            user:{
                name:'',
                age:'',
                sex:'',
                phone:'',
                email:'',
                education:'',
                edu_date:'',
                principle:'',
                username:'',
                remark:'',
                personal_station:'',
                phone_type:'1',
                birth:'',
                go_time:'',
                hover:'',
                city:'',
                job:'',
                character:'',
                dream:'',
                special_skill:[],
                certificate:[],
                is_admin:'',
                job_title:''
            },
            jobs:[
              {"key":"金融","value":"金融"},
              {"key":"计算机","value":"计算机"},
              {"key":"互联网","value":"互联网"},
              {"key":"销售","value":"销售"},
              {"key":"服务","value":"服务"}
            ],
            characters:[
              {label:'开朗',value:'Optimistic'},
              {label:'内向',value:'Introvert'},
              {label:'活泼',value:'lively'}
            ],
            dreams:[
              {label:'科学家',value:'Scientist'},
              {label:'数学家',value:'Mathematician'},
              {label:'物理学家',value:'Physical scientist'},
              {label:'文学家',value:'Litterateur'},
              {label:'艺术家',value:'Artist'}
            ],
            loading: false,
        }
    },
    computed:{
        males:function(){
            return [
                {
                    label:this.$t('te.male'),
                    value:'1'
                },
                {
                    label:this.$t('te.female'),
                    value:'2'
                }
            ]
        },
        hobbys:function(){
            return [
              {
                label: this.$t('te.football'),
                value: this.$t('te.football'),
              },
              {
                label: this.$t('te.basketball'),
                value: this.$t('te.basketball'),
              },
              {
                label: this.$t('te.run'),
                value: this.$t('te.run'),
              }
            ]
          },
        groups:function(){
          return [{
            label: '热门城市',
            citys: [{
              value: 'Shanghai',
              label: '上海'
            }, {
              value: 'Beijing',
              label: '北京'
            }]
          }, {
            label: '城市名',
            citys: [{
              value: 'Chengdu',
              label: '成都'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }, {
              value: 'Guangzhou',
              label: '广州'
            }, {
              value: 'Dalian',
              label: '大连'
            }]
          }]
        },
        educations:function(){
            return [
                {
                    label: this.$t('te.high_school'),
                    value: this.$t('te.high_school')
                },
                {
                    label:this.$t('te.junior_college'),
                    value:this.$t('te.junior_college')
                },
                {
                    label:this.$t('te.undergraduate'),
                    value:this.$t('te.undergraduate')
                },
                {
                    label:this.$t('te.master'),
                    value:this.$t('te.master')
                }
            ]
        },
        userRules:function(){
            return {
                name:[
                    {required:true,message:this.$t('te.input_name'),trigger:'blur'}
                ],
                age:[
                    {required:true,message:this.$t('te.input_age'),trigger:'blur'}
                ],
                sex:[
                    {required:true,message:this.$t('te.input_sex'),trigger:'change'}
                ],
                phone:[
                    {required:true,message:this.$t('te.input_phone'),trigger:'blur'}
                ],
                email:[
                    {required:true,message:this.$t('te.input_email'),trigger:'blur'}
                ],
                education:[
                    {required:true,message:this.$t('te.input_education'),trigger:'change'}
                ]
            }
        }
    },

    methods:{
        back(){
            this.$router.push({path:'table_exp'});
        },
        addUser(formName){
            //首先要进行验证，验证成功后，执行跳转到列表页
            let _this = this;
          console.log(_this.user);
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.axios.post(this.URL.addUser,{user:_this.user}).then(function(response){
                        //console.log(response);
                        if(response.data.result == 1){
                            _this.$message({
                                type: 'success',
                                showClose: true,
                                message: _this.$t('te.add_success')
                            });
                            _this.$router.push({path:'table_exp'});
                        }else{
                        }
                    }).catch(function(error){
                        console.log(error);
                    })
                }else {
                    console.log('error submit!!');
            return false;
        }
        });
        },
      querySearch:function(queryString,cb){
        //jobs  应该是从后台获取的 但是 jobs数据过多的话 下拉框数据也多，那么请用另一种搜索模式，从后台去搜索数据
        var jobs = this.jobs;
        var results = queryString ? jobs.filter(this.createFilter(queryString)):jobs;
        cb(results);//调用callback 返回建议列表的数据
      },
      createFilter(queryString){
        return (jobs) =>{
          return (jobs.key.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        }
      },
      handleSelect(item){
        this.job = item.key;
      },
      remoteMethod:function(query){
        if(query !=''){
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.dreams = this.dreams.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          },200);
        }else{
          this.dreams = [];
        }
      }
    }
}
