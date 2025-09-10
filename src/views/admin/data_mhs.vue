<template>
<<<<<<< HEAD

  <body id="page-top">
    <Navbar></Navbar>
    <div class="main">
=======
  <body id="page-top">
      <Navbar></Navbar>
      <div class="main">
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
      <div class="container-fluid">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Mahasiswa
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <hr />
              <router-link :to="{ name: 'tambah_mhs' }">
                <button class="btn btn-sm btn-success">Tambah Data</button>
              </router-link>
              <hr />
<<<<<<< HEAD
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
=======
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
                <thead>
                  <tr>
                    <th>Nama Lengkap</th>
                    <th>NIM</th>
                    <th>Prodi</th>
                    <th>Alamat</th>
                    <th>Nomor Handphone</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
<<<<<<< HEAD
                  <tr v-for="(mahasiswa, index) in mahasiswa" :key="index">
=======
                  <tr v-for="(mahasiswa,index) in mahasiswa" :key="index">
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
                    <td>{{ mahasiswa.name_m }}</td>
                    <td>{{ mahasiswa.nim }}</td>
                    <td>{{ mahasiswa.prodi }}</td>
                    <td>{{ mahasiswa.alamat }}</td>
                    <td>{{ mahasiswa.NOHP }}</td>
                    <td class="text-center">
<<<<<<< HEAD
                      <router-link :to="{ name: 'edit_mhs', params: { id: mahasiswa.id } }"
                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                      <button @click.prevent="mahasiswaDelete(mahasiswa.id, index)" class="btn btn-sm btn-danger ml-1">
=======
                      <router-link
                        :to="{ name: 'edit_mhs', params: { id: mahasiswa.id} }"
                        class="btn btn-sm btn-primary mr-1"
                        >EDIT</router-link
                      >
                      <button
                        @click.prevent="mahasiswaDelete(mahasiswa.id, index)"
                        class="btn btn-sm btn-danger ml-1"
                      >
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
                        DELETE
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </body>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    let mahasiswa = ref([]);
<<<<<<< HEAD
    // This function fetches the list of mahasiswa from the API when the component is mounted
    onMounted(() => {
      axios
        .get("http://localhost:8000/api/mahasiswa")
=======

    onMounted(() => {
      axios
        .get("https://ecowatchk10.000webhostapp.com/api/mahasiswa")
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
        .then((response) => {
          mahasiswa.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
<<<<<<< HEAD
    // This function deletes a mahasiswa entry from the API and removes it from the local list
    function mahasiswaDelete(id, index) {
      axios
        .delete(`http://localhost:8000/api/mahasiswa/${id}`)
=======
    function mahasiswaDelete(id,index) {
      axios
        .delete(`https://ecowatchk10.000webhostapp.com/api/mahasiswa/${id}`)
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
        .then(() => {
          mahasiswa.value.splice(index, 1);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    return {
      mahasiswa,
      mahasiswaDelete,
    };
  },
};
</script>

<style src="../../../public/assets/css/style.css"></style>
