<template>
  <NoSideLayout>
    <div class="page-bar">
        bar(无侧边栏)
    </div>
  </NoSideLayout>
</template>
<script>
import NoSideLayout from '../components/no-side-layout'

export default {
    name: 'bar',
    components:{
      NoSideLayout
    },
    data() {
        return {

        }
    },
}
</script>
<style lang="less" scoped>

</style>
