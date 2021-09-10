
<template>
  <div class="common-layout">
    <el-container>
      <el-header style="height: 50px">Frontend Web</el-header>
      <el-container>
        <el-aside style="width: 35%; height: 600px">
          <h3 style="padding-top: 100px; padding-left: 30px">工作管理</h3>
          <span style="padding-left: 30px; font-size: 13px"
            >系统已为你创建并部署如下组件：</span
          >

          <ul class="list-group">
            <li>
              <div class="demo-image">
                <div class="block" v-for="fit in fits" :key="fit">
                  <el-image
                    style="width: 20px; height: 30px; padding-left: 10px"
                    :src="url"
                    :fit="fit"
                  ></el-image>
                  <span style="padding-left: 20px; font-size: 13px">
                    弹性负载均衡ELB</span
                  >
                </div>
              </div>
            </li>
            <li>
              <div class="demo-image">
                <div class="block" v-for="fit in fits" :key="fit">
                  <el-image
                    style="width: 20px; height: 30px; padding-left: 10px"
                    :src="url"
                    :fit="fit"
                  ></el-image>
                  <span style="padding-left: 20px; font-size: 13px">
                    Backend</span
                  >
                </div>
              </div>
            </li>
            <li>
              <div class="demo-image">
                <div class="block" v-for="fit in fits" :key="fit">
                  <el-image
                    style="width: 20px; height: 30px; padding-left: 10px"
                    :src="url"
                    :fit="fit"
                  ></el-image>
                  <span style="padding-left: 20px; font-size: 13px">
                    Frontend</span
                  >
                </div>
              </div>
            </li>
            <li>
              <div class="demo-image">
                <div class="block" v-for="fit in fits" :key="fit">
                  <el-image
                    style="width: 20px; height: 30px; padding-left: 10px"
                    :src="url"
                    :fit="fit"
                  ></el-image>
                  <span style="padding-left: 20px; font-size: 13px"> RDS</span>
                </div>
              </div>
            </li>
          </ul>
          <h4 style="padding-left: 30px">弹性伸缩响应方式</h4>
          <p style="padding-left: 30px; font-size: 13px; font-family: 微软雅黑">
            系统已为您藏剑并部署后端组件，您可以配置弹性伸缩策略，默认为您配置参数。当你点击“Client
            Request
            Test“按钮到达一个什么标准，系统会为您自动扩容，多长时间以后，为您进行扩容操作。
          </p>
          <div style="padding-left: 30px">
            <el-link href="https://element.eleme.io" target="_blank"
              >更多入门指南</el-link
            >
          </div>
          <div style="padding-top: 50px; padding-left: 30px">
            <el-row>
              <el-button style="background: black" @click="ConsumeCpu()"
                >Client Request Test</el-button
              >
            </el-row>
          </div>
        </el-aside>
        <el-main>
          <div style="text-align: center">Hello World</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
ul li {
  list-style: none;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: left;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
}

body > .el-container {
  margin-bottom: 20px;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>

  
<script>
import { getUserData, getTotalScanNum, consumeCpu } from "../request/api";
//import axios from "axios"
export default {
  data() {
    return {
      ress: "",
      totalsdata: "",
      fits: ["cover"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },

  methods: {
    GetUserData: function () {
      getUserData({
        user: this.user,
        total: this.total, // 需要传递的参数
      }).then((res) => {
        console.log(res), console.log(res.user), console.log(res.total);
        console.log("查询成功");
        this.ress = res;
        this.GetTotalScanNum();
      });
    },

    GetTotalScanNum: function () {
      getTotalScanNum({}).then((response) => {
        console.log(response);
        this.totalsdata = response;
      });
    },
    ConsumeCpu: function () {
      consumeCpu({}).then((resp) => {
        console.log(resp);
      });
    },
  },

  created() {
    this.GetUserData();
  },
};
</script>


