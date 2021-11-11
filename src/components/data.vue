<template>
  <div class="new-page">
    <div class="title">CAE Hello World</div>
    <div class="title-desc">
      <ul>
        <li>
          <span class="li-doc">·</span>
          <span class="li-text">上云简单</span>
        </li>
        <li>
          <span class="li-doc">·</span>
          <span class="li-text">运行高效</span>
        </li>
        <li>
          <span class="li-doc">·</span>
          <span class="li-text">安全可信</span>
        </li>
      </ul>
    </div>
    <div class="title-btn">
    <el-button type="danger" :plain="true" class="btn" @click="ConsumeCpu()">Client Request Test</el-button>
    </div>
    <div class="content">a
      <img alt="" src="../assets/backgroundImg.png">
    </div>
  </div>
</template>

<style>
.title {
  text-align: center;
  margin-top: 50px;
  font-size: 36px;
  font-weight: bold;
}
.title-desc {
  display: flex;
  justify-content: space-around;
}
ul {
  padding: 0;
}
ul li {
  list-style: none;
  float: left;
  display: flex;
  margin: 0 10px;
}
.li-doc {
    width: 32px;
    height: 32px;
    background-color: #00FFFF;
    display: inline-block;
    border-radius: 50%;
    transform: scale(0.4, 0.4);
}
.li-text {
  font-size: 24px;
}
.title-btn {
  display: flex;
  justify-content: center;
}
.btn {
  background-color: red;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  background-color: #DC143C;
}
.btn:active {
  background-color: #8B0000;
}
.content {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 275px;
  position: relative;
}
.request-msg {
  transform: translateX(70%)!important;
}
</style>

  
<script>
import { consumeCpu } from "../request/api";
export default {
  data() {
    return {
      list:[{
        id: 0,
        value: '请求成功1！',
      }, {
        id: 1,
        value: '请求成功2！',
      }, {
        id: 2,
        value: '请求成功3！',
      }] 
    };
  },
  methods: {
    ConsumeCpu: function () {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        customClass: 'request-msg'
      });
      consumeCpu({}).then((resp) => {
        console.log(resp);
      });
    },
  }
}
</script>


