<template>
      <Navbar></Navbar>
      <div class="main">
      <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Data Kaprodi</h1>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header justify-content-center">
                Form Tambah Data Kaprodi
              </div>
              <div class="card-body">
                <form @submit.prevent="store">
                  <div class="form-group">
                    <label for="nama">Nama</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      v-model="kaprodi.name"
                      placeholder="Nama Kaprodi"
                    />
                    <div v-if="validation.name" class="mt-2 alert alert-danger">
                      {{ validation.name[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="nama">Password</label>
                    <input
                      type="password"
                      name="name"
                      class="form-control"
                      v-model="kaprodi.password"
                      placeholder="password"
                    />
                    <div v-if="validation.password" class="mt-2 alert alert-danger">
                      {{ validation.password[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="nip">NIP</label>
                    <input
                      type="text"
                      name="nip"
                      class="form-control"
                      v-model="kaprodi.nip"
                      placeholder="NIP Kaprodi"
                    />
                    <div v-if="validation.nip" class="mt-2 alert alert-danger">
                      {{ validation.nip[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="prodi">Prodi</label>
                    <input
                      type="text"
                      name="prodi"
                      class="form-control"
                      v-model="kaprodi.prodi"
                      placeholder="Prodi Yang di ketuai"
                    />
                    <div
                      v-if="validation.prodi"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation.prodi[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="NOHP">No HP</label>
                    <input
                      type="text"
                      name="NOHP"
                      class="form-control"
                      v-model="kaprodi.NOHP"
                      placeholder="No HP Kaprodi"
                    />
                    <div v-if="validation.NOHP" class="mt-2 alert alert-danger">
                      {{ validation.NOHP[0] }}
                    </div>
                  </div>
                  <router-link :to="{ name: 'data_kaprodi' }"  class="btn btn-danger" >Tutup</router-link>
                  <button
                    type="submit"
                    name="tambah"
                    class="btn btn-primary float-right"
                  >
                    Tambah Kaprodi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const kaprodi = reactive({
      name: "",
      password: "",
      nip: "",
      prodi: "",
      NOHP: "",
    });

    const validation = ref([]);
    const router = useRouter();

    function store() {
      let name = kaprodi.name;
      let password = kaprodi.password;
      let role ='kaprodi';
      let nip = kaprodi.nip;
      let prodi = kaprodi.prodi;
      let NOHP = kaprodi.NOHP;

      axios
        .post("https://ecowatchk10.000webhostapp.com/api/kaprodi", {
          name_k: name,
          password: password,
          role:role,
          nip: nip,
          prodi: prodi,
          NOHP: NOHP,
        })
        .then(() => {
          router.push({
            name: "data_kaprodi",
          });
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
      }
    return {
      kaprodi,
      validation,
      router,
      store,
    };
  },
};
</script>

<style></style>
