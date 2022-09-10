<template>
  <Story title="Hi" :layout="{ type: 'grid', width: 500 }">
    <Variant title="Default">
      <Hi />
    </Variant>
    <Variant title="Squared">
      <Hi class="p-2 border-2" />
    </Variant>
    <Variant title="Rounded">
      <Hi class="p-2 border-2 rounded-lg" />
    </Variant>
  </Story>
</template>
