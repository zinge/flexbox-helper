<template>
  <div class="constructor__item__actions">
    <ActionButton action="add" title="add child"/>
    <ActionButton action="edit" title="change name"/>
    <ActionButton action="del" title="del this"/>
  </div>
</template>
<script>
import ActionButton from './ActionButton'
export default {
  name: 'ItemActions',

  components: {
    ActionButton
  }
}
</script>
<style>
  .constructor__item__actions {
    display: flex;
  }
</style>
