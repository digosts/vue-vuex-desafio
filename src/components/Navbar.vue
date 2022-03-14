<template>
  <div class="nav">
    <div class="brand">
      <q-icon name="arrow_forward" size="sm" />
    </div>
    <div class="icons">
      <q-icon name="work" size="md" />
      <q-icon name="monetization_on" size="md" />
      <q-icon name="notifications" size="md" />

      <div class="menu-user">
        <img src="https://avatars.githubusercontent.com/u/23341542?s=96&v=4" />
        <span>Rodrigo</span>
        <q-icon name="expand_more" size="md">
          <q-menu auto-close>
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Perfil</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Sair</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px;
  box-shadow: 0 4px 2px -2px rgb(187, 187, 187);
}
.nav .brand {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #fff;
  border: 1px solid #3b4859;
  border-radius: 50%;
  margin-left: -25px;
}
.nav .icons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.nav .icons .q-icon {
  padding: 0 20px;
  color: #3b4859;
}
.nav .icons .menu-user {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
}
.nav .icons .menu-user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 0;
}
.nav .icons .menu-user span {
  font-size: 1rem;
  font-weight: 500;
  color: #3b4859;
}
</style>
