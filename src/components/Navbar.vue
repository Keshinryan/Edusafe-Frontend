<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
      <div class="sidebar-brand-icon rotate-n-15"></div>
      <div class="sidebar-brand-text mx-3" style="font-size: 22px; text-align:center" v-if="user">Edusafe {{user.role}}</div>
      <div class="sidebar-brand-text mx-3" style="font-size: 22px; text-align:center" v-if="!user">Edusafe</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">
    <div class="mb-auto">
    <!-- Nav Item - Pages Collapse Menu -->
    <ul v-if="user && user.role === 'admin'" class="nav-item">
      <li >
        <router-link :to="{ name: 'data_mhs' }" class="nav-link collapsed" style="font-size: 30px">
          <font-awesome-icon icon="user" class="ml-1" />
          <span class="ml-3">Data Mahasiswa</span>
        </router-link>
      </li>
      <li >
        <router-link :to="{ name: 'data_kaprodi' }" class="nav-link collapsed" style="font-size: 28px">
          <font-awesome-icon icon="users" />
          <span class="ml-3">Data Kaprodi</span>
        </router-link>
      </li>
      <li >
        <router-link :to="{ name: 'data_edukasi' }" class="nav-link collapsed" style="font-size: 30px">
          <font-awesome-icon icon="newspaper" />
          <span class="ml-3">Data Edukasi</span>
        </router-link>
      </li>
      <li >
        <router-link :to="{ name: 'data_pelaporan' }" class="nav-link collapsed" style="font-size: 30px">
          <font-awesome-icon icon="flag" />
          <span class="ml-3">Data Pelaporan</span>
        </router-link>
      </li>
    </ul>
    <ul v-if="user && user.role === 'kaprodi'" class="nav-item">
      <li >
        <router-link :to="{ name: 'kaprodi.Edukasi' }" class="nav-link collapsed" style="font-size: 30px">
          <font-awesome-icon icon="newspaper" />
          <span class="ml-3">Edukasi</span>
        </router-link>
      </li>
      <li >
        <router-link :to="{ name: 'kaprodi.Pelaporan' }" class="nav-link collapsed" style="font-size: 30px">
          <font-awesome-icon icon="flag" />
          <span class="ml-3"> Pelaporan</span>
        </router-link>
      </li>
    </ul>
    <ul v-if="user && user.role === 'mahasiswa' || !user" class="nav-item">
      <li >
        <router-link :to="{ name: 'mahasiswa.Edukasi' }" class="nav-link collapsed" style="font-size: 30px">
          <font-awesome-icon icon="newspaper" v-if="user && user.role === 'mahasiswa' || !user"/>
          <span class="ml-3">Edukasi</span>
        </router-link>
      </li>
      <li >
        <button @click.once="pelaporan"  class="nav-link collapsed" style="font-size: 30px" >
          <font-awesome-icon icon="flag"/>
          <span class="ml-3"> Pelaporan</span>
        </button>
      </li>
    </ul>
    
  </div>
    <div class="mt-auto">
      <li class="nav-item" v-if="!user">
        <router-link :to="{ name:'auth.Login' }" class="nav-link collapsed" style="font-size: 30px">
          <font-awesome-icon icon="right-to-bracket" />
          <span class="ml-3">Login</span>
        </router-link>
      </li>
      <li class="nav-item" v-if="user">
        <button @click.prevent="logout" type="submit" class="nav-link collapsed" style="font-size: 30px">
          <font-awesome-icon icon="right-from-bracket" />
          <span class="ml-3">Logout</span>
        </button>
      </li>     
  </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Navbar",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const user = ref(null);
    let path=ref(null);
    const router = useRouter();
    function logout() {
      sessionStorage.removeItem("user");
      window.location.href = "/mahasiswa/Edukasi";
    }

    user.value = JSON.parse(sessionStorage.getItem("user"));
    function pelaporan() {
      if (user.value != null) {
        router.push({ name: "mahasiswa.TambahPelaporan" });
      } else {
        router.push({ name: "auth.Login" });
      }
    }
    return {
      user,
      logout,
      pelaporan,
      path,
    };
  },
};
</script>

<style>
.navbar-nav{
  position: fixed;
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  overflow-x: hidden; 
}
.nav-item {
  padding: 0px 0px 0px 0px;
}
.mt-nav{
  margin: 400px 0px 0px 0px;
}
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
}
</style>

<style src="../../public/assets/css/style.css"></style>
