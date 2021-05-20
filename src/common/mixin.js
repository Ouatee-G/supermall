import { debounce } from "../common/utils";
import BackTop from "components/content/backTop/BackTop";
import { BACK_POSITION } from "common/const";

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            refresh: null,
        }
    },
    mounted() {
        // 图片加载的事件监听
        this.refresh = debounce(this.$refs.scroll.refresh, 500);
        this.itemImgListener = () => {
            // this.$refs.scroll.refresh();
            this.refresh();
        };
        //检测图片加载完成
        this.$bus.$on("itemImageLoad", this.itemImgListener);
    }
}
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 300)
        },
        listenShowBackTop(position) {
            this.isShowBackTop = -position.y > BACK_POSITION
        }
    },
}