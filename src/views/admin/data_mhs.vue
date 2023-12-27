<template>
  <body id="page-top">
      <Navbar></Navbar>
      <div class="main">
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
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
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
                  <tr v-for="(mahasiswa,index) in mahasiswa" :key="index">
                    <td>{{ mahasiswa.name_m }}</td>
                    <td>{{ mahasiswa.nim }}</td>
                    <td>{{ mahasiswa.prodi }}</td>
                    <td>{{ mahasiswa.alamat }}</td>
                    <td>{{ mahasiswa.NOHP }}</td>
                    <td class="text-center">
                      <router-link
                        :to="{ name: 'edit_mhs', params: { id: mahasiswa.id} }"
                        class="btn btn-sm btn-primary mr-1"
                        >EDIT</router-link
                      >
                      <button
                        @click.prevent="mahasiswaDelete(mahasiswa.id, index)"
                        class="btn btn-sm btn-danger ml-1"
                      >
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

    onMounted(() => {
      axios
        .get("http://127.0.0.1:8000/api/mahasiswa")
        .then((response) => {
          mahasiswa.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    function mahasiswaDelete(id,index) {
      axios
        .delete(`http://127.0.0.1:8000/api/mahasiswa/${id}`)
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
