<<<<<<< HEAD
/* eslint-disable */
=======
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
<template>
  <Navbar></Navbar>
  <div class="main">
    <div class="container-fluid">
      <div class="card shadow mb-4 mt-5">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary mt-3 mb-3">
            DataTable Pelaporan
          </h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered mt-3"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Nama Pelapor</th>
                  <th>NIM</th>
                  <th>Tanggal</th>
                  <th>Waktu</th>
                  <th>Tempat</th>
                  <th>Deskripsi</th>
                  <th>Bukti</th>
                  <td>Status</td>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in mergedData" :key="index">
                  <td>{{ item.name_m }}</td>
                  <td>{{ item.nim }}</td>
                  <td>{{ item.tanggal }}</td>
                  <td>{{ item.waktu }}</td>
                  <td>{{ item.tempat }}</td>
                  <td>{{ item.deskripsi }}</td>
                  <td>
                    <img
                      :src="getFileUrl(item.bukti)"
                      alt=""
                      v-if="item.bukti"
                      style="width: 300px"
                    />
                  </td>
                  <td>{{ item.status }}</td>
                  <td class="text-center">
                    <button
                      @click.prevent="update(item.bukti)"
                      class="btn btn-sm btn-success ml-1"
                    >
                      Process
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
</template>

<script>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
export default {
  setup() {
    const pelaporanData = ref([]);
    const mahasiswaData = ref([]);
<<<<<<< HEAD
    // This function fetches the list of pelaporan and mahasiswa from the API when the component is mounted
    // and stores them in the pelaporanData and mahasiswaData variables, respectively.
    onMounted(() => {
      axios
        .get("http://127.0.0.1:8000/api/pelaporan")
=======

    onMounted(() => {
      axios
        .get("https://ecowatchk10.000webhostapp.com/api/pelaporan")
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
        .then((response) => {
          pelaporanData.value = response.data.data;
          mahasiswaData.value = response.data.mahasiswa;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    const validation = ref([]);
<<<<<<< HEAD
    // This Function updates the status of a pelaporan entry in the API and reloads the page to reflect the changes.
    // It takes the bukti (proof) of the pelaporan as an argument, finds the corresponding id, and sends a PUT request to update the status.
=======
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
    function update(bukti) {
      let status = "dalam proses";
      let idp = pelaporanData.value.find((item) => item.bukti === bukti).id;
      axios
<<<<<<< HEAD
        .put(`http://127.0.0.1:8000/api/pelaporan/${idp}`, {
=======
        .put(`https://ecowatchk10.000webhostapp.com/api/pelaporan/${idp}`, {
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
          status: status,
        })
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
    }
<<<<<<< HEAD
    // This function constructs the URL for the file based on the filename passed to it.
    function getFileUrl(filename) {
      return `http://127.0.0.1:8000/api/file/${filename}/bukti`;
=======
    function getFileUrl(filename) {
      return `https://ecowatchk10.000webhostapp.com/api/file/${filename}/bukti`;
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
    }
    const mergedData = computed(() => {
      return pelaporanData.value.map((pelaporan) => {
        const mahasiswa = mahasiswaData.value.find(
          (m) => m.id === pelaporan.id_m
        );
        return {
          ...pelaporan,
          ...mahasiswa,
        };
      });
    });

    return {
      mergedData,
      update,
      getFileUrl,
    };
  },
};
</script>

<style src="../../../public/assets/css/style.css"></style>
