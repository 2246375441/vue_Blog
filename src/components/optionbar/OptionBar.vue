<template>
  <div class="OptionBar">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script>
export default {
  name:"OptionBar"
}
</script>

<style scoped>
.OptionBar{
  position: fixed;
  right: 0;
  bottom: 0;

  height: 150px;
  width: 140px;
  background-color: orange;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

</style>