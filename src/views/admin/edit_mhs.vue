<template>
      <Navbar></Navbar>
      <div class="main">
      <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Data Mahasiswa</h1>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header justify-content-center">
                Form Edit Data Mahasiswa
              </div>
              <div class="card-body">
                <form @submit.prevent="update">
                  <div class="form-group">
                    <label for="nama">Nama</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      v-model="mahasiswa.name"
                      placeholder="Nama Mahasiswa"
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
                      v-model="mahasiswa.password"
                      placeholder="password"
                    />
                    <div v-if="validation.password" class="mt-2 alert alert-danger">
                      {{ validation.password[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="nim">NIM</label>
                    <input
                      type="text"
                      name="nim"
                      class="form-control"
                      v-model="mahasiswa.nim"
                      placeholder="NIM Mahasiswa"
                    />
                    <div v-if="validation.nim" class="mt-2 alert alert-danger">
                      {{ validation.nim[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email">Prodi</label>
                    <input
                      type="text"
                      name="prodi"
                      class="form-control"
                      v-model="mahasiswa.prodi"
                      placeholder="Prodi Mahasiswa"
                    />
                    <div
                      v-if="validation.prodi"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation.prodi[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="asal_sekolah">Alamat</label>
                    <input
                      type="text"
                      name="alamat"
                      class="form-control"
                      v-model="mahasiswa.alamat"
                      placeholder="Alamat Mahasiswa"
                    />
                    <div
                      v-if="validation.alamat"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation.alamat[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="NOHP">No HP</label>
                    <input
                      type="text"
                      name="NOHP"
                      class="form-control"
                      v-model="mahasiswa.NOHP"
                      placeholder="No HP Mahasiswa"
                    />
                    <div v-if="validation.NOHP" class="mt-2 alert alert-danger">
                      {{ validation.NOHP[0] }}
                    </div>
                  </div>
                  
                  <router-link :to="{ name: 'data_mhs' }"  class="btn btn-danger" >Tutup</router-link>
                  <button type="submit" name="tambah" class="btn btn-primary float-right">
                    Simpan Perubahan
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
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const mahasiswa = reactive({
      name: "",
      password:"",
      nim: "",
      prodi: "",
      alamat: "",
      NOHP: "",
    });

    const route = useRoute();

    const validation = ref([]);
    const router = useRouter();

    onMounted(() => {
      axios
        .get(`https://ecowatchk10.000webhostapp.com/api/mahasiswa/${route.params.id}`)
        .then((response) => {
          mahasiswa.name = response.data.data.name_m;
          mahasiswa.nim = response.data.data.nim;
          mahasiswa.prodi = response.data.data.prodi;
          mahasiswa.alamat = response.data.data.alamat;
          mahasiswa.NOHP = response.data.data.NOHP;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    function update() {
      let name = mahasiswa.name;
      let password= mahasiswa.password;
      let nim = mahasiswa.nim;
      let prodi = mahasiswa.prodi;
      let alamat = mahasiswa.alamat;
      let NOHP = mahasiswa.NOHP;
      axios
        .put(`https://ecowatchk10.000webhostapp.com/api/mahasiswa/${route.params.id}`, {
          name_m: name,
          password: password,
          nim: nim,
          prodi: prodi,
          alamat: alamat,
          NOHP: NOHP,
        })
        .then(() => {
          router.push({
            name: "data_mhs",
          });
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
    }
    return {
      mahasiswa,
      validation,
      router,
      update,
    };
  },
};
</script>

<style></style>
