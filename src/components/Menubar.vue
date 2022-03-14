<template>
  <div class="menu">
    <div class="rowmenu selected">
      <q-icon name="home" size="md" />
    </div>
    <div class="rowmenu">
      <q-icon name="shopping_cart" size="md" />
    </div>
    <div class="rowmenu">
      <q-icon name="monetization_on" size="md" />
    </div>
    <div class="rowmenu">
      <q-icon name="playlist_add_check" size="md" />
    </div>
    <div class="rowmenu">
      <q-icon name="help" size="md" />
    </div>
    <div class="rowmenu">
      <q-icon name="logout" size="md" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Menubar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  width: 5%;
  background: #2b2b2b;
  height: 100vh;
  padding-top: 70px;
  position: absolute;
}
.menu .rowmenu {
  padding: 10px 0;
  text-align: center;
  margin-bottom: 20px;
  border-left: 3px solid #2b2b2b;
}
.menu .rowmenu .q-icon {
  color: #6a6f76;
}
.menu .rowmenu.selected {
  border-left: 3px solid #fff;
}
.menu .rowmenu.selected .q-icon {
  color: #fff;
}

/** Hovers */
.menu .rowmenu:hover {
  border-left: 3px solid #f2f2f2;
}
.menu .rowmenu .q-icon:hover {
  cursor: pointer;
  color: #f2f2f2;
}
</style>
