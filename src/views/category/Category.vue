<template>
  <div class="wrapper" ref="aaaa">
    <h2>分类</h2>

    <div>
      <button @click="btnClick">按钮</button>

      <div @click="divClick">呵呵呵呵</div>

      <ul class="content">
        <li>分类列表1</li>
        <li>分类列表2</li>
        <li>分类列表3</li>
        <li>分类列表4</li>
        <li>分类列表5</li>
        <li>分类列表6</li>
        <li>分类列表7</li>
        <li>分类列表8</li>
        <li>分类列表9</li>
        <li>分类列表10</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // console.log(this.$refs.aaaa);
    // console.log(document.querySelector(".wrapper"));
    this.scroll = new BScroll(this.$refs.aaaa, {
      // probeType: 3,
      // pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
  methods: {
    btnClick() {
      console.log("btnClick");
    },
    divClick() {
      console.log("divClick");
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;

  overflow: hidden;
  overflow-y: scroll;
}
</style>
