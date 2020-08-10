<template>
  <div class="container">
    <!-- <div style="text-align: center;">
      欢迎使用 egg-nuxt-ssr 框架
    </div>
    <el-row  class="ly_info_1">
        刘雨,QQ:313603503@qq.com
    </el-row> -->
    <el-collapse class="ly_content" v-model="activeNames" >
      <el-collapse-item title="项目介绍" name="1">
        <div>egg(nodejs)框架+nuxt.js整合而成，旨在快速开发ssr服务。框架内已集成 mysql(sequlize.js) + redis(egg-redis);可通过plugin和config配置完成开通。</div>
        <div>目前项目结构是egg与nuxt在同一个项目中，未分离。</div>
        <div>可提交信息测试新增查询功能</div>
      </el-collapse-item>
    </el-collapse>

    <el-card class="ly_content">
      <div slot="header" >
        <span>信息列表({{count}})</span>
        <el-button style="float: right; padding: 3px 0"  @click="dialogFormVisible = true" type="text">填写信息</el-button>
      </div>
      <div v-for="(_item,idx) in dataList" :key="_item.id" class="ly_for_text">
        <el-row>{{'名字：' + _item.name }}</el-row>
        <el-row>{{'电话：' + _item.tel }}</el-row>
        <el-row>{{'Q Q：' + _item.qq }}</el-row>
        <el-row>{{'职业：' + _item.jobs }}</el-row>
        <el-row>{{'描述：' + _item.desc }}</el-row>
        <el-divider v-if="idx+1 !==count" content-position="left" style="color: #ccc;">下一位</el-divider>
      </div>
    </el-card>
    <el-dialog title="基本信息" :visible.sync="dialogFormVisible" class="ly_d_1" width="90%">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="职业" :label-width="formLabelWidth">
          <el-input v-model="form.jobs" ></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.tel" ></el-input>
        </el-form-item>
        <el-form-item label="QQ" :label-width="formLabelWidth">
          <el-input v-model="form.qq" ></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc" ></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="myClickAdd">确 定</el-button>
      </div>
    </el-dialog>  
  </div>
</template>

<script>
import request from '@/public/request';
export default {
  components: {
  },
  data () {
    return {
        activeNames: [],
        dialogFormVisible: false,
        form: {
          name: '',
          jobs: '',
          tel: '',
          qq: '',
          desc: ''
        },
        formLabelWidth: '120px',
        dataList:[],
        count:0,
    }
  },
  head: {
    title: '刘雨',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '首页,软件' },
      { name: 'description', content: '微信小程序、微信公众号、APP、企业官网、ERP的研发' },
      { name: 'robots', content: 'all' },
      { name: 'author', content: 'Edwin' },
      { name: 'copyright', content: 'Edwin' },
      { name: 'renderer', content: 'webkit' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  created () {
    
  },
  mounted () {
     this.getUserInfo();
  },
   methods: {
    getUserInfo () {
      let _that = this;
      request
      .get('/user')
      .then(function(response) {
        console.log(response);
        _that.count = response.count;
        _that.dataList = response.rows || [];
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    myClickAdd () {
      let _that = this;
      let _d = new Date().getTime();
       console.log('myClickAdd',this.form);
      request
      .post('/user', {
        data:{
          name:this.form.name,
          qq:this.form.qq,
          jobs:this.form.jobs,
          tel:this.form.tel,
          desc:this.form.desc,
          created_at:new Date(),
          updated_at:new Date()
        }, 
        headers:{
          'x-csrf-token': _that.getCookie("csrfToken"), // 前后端不分离的情况加每次打开客户端，egg会直接在客户端的 Cookie 中写入密钥 ，密钥的 Key 就是 'scrfToken' 这个字段，所以直接获取就好了
        },
      })
      .then(function(response) {
        console.log(response);
        _that.dialogFormVisible = false;
        _that.getUserInfo();
      })
      .catch(function(error) {
        console.log(error);
      });
    },

    // 封装获取 cookie 的方法
    getCookie(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
        else
        return null;
    },
  }
}
</script>

<style>
.container {
  /* text-align: center; */
  width: 100%;
  margin-top: 50px;
  font-size: 24px;
  color: #ea6f5a;
  margin-bottom: 50px;
}
.ly_info_1{
  background-color: #fdf6ec;
    color: #E6A23C;
    text-align: center;
    margin-top:20px;
    padding: 16px 0;
    font-size: 14px;
}
.ly_content{
  margin: 5px 10px;
}
.ly_for_text{
  font-size: 14px;
  text-align: left;
  color: #e6a23c;
}
</style>
