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
            <table class="table table-bordered mt-3" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Nama Pelapor</th>
                  <th>NIM</th>
                  <th>Tanggal</th>
                  <th>Waktu</th>
                  <th>Tempat</th>
                  <th>Deskripsi</th>
                  <th>Bukti</th>
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
                  <td><img :src="getFileUrl(item.bukti)" alt="" v-if="item.bukti" style="width: 300px; ;"></td>
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
import axios from "axios";
import { onMounted, ref, computed } from "vue";

export default {
  setup() {
    const pelaporanData = ref([]);
    const mahasiswaData = ref([]);

    onMounted(() => {
      axios
        .get("https://ecowatchk10.000webhostapp.com/api/pelaporan")
        .then((response) => {
          pelaporanData.value = response.data.data;
          mahasiswaData.value = response.data.mahasiswa;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    function getFileUrl(filename){
      return `https://ecowatchk10.000webhostapp.com/api/file/${filename}/bukti`;
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
      getFileUrl,
    };
  },
};
</script>

<style src="../../../public/assets/css/style.css"></style>
