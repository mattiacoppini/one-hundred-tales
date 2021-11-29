<script lang="ts">
  export let fullWidth: boolean = true;

  let classname = ['table', 'table2'];

</script>

<table class={classname.join(' ')} class:full-width={fullWidth}>
  <slot></slot>
</table>

<style lang="less">
  table.table{
    &.full-width {
      width: 100%;
    }
    &.size-small{
      border-width: var(--size-small)
    }
  }
</style>