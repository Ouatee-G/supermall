<template>
  <div>
    <h2>分类</h2>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import { backTopMixin } from "common/mixin";

export default {
  components: { BackTop },
  name: "Category",
  mixins: [backTopMixin],

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
