<template>
  <Navbar></Navbar>
  <div class="main">
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid mt-4">
          <div class="row">
            <div class="mt-4 mb-5">
              <h1>Edukasi</h1>
            </div>
            <div class="col-lg-11 ml-5">
              <!-- Basic Card Example -->
              <div
                class="card shadow mb-4"
                v-for="(edukasi, index) in edukasi"
                :key="index"
              >
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    {{ edukasi.judul }}
                  </h6>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-4">
                      <img
                        :src="getFileUrl(edukasi.foto)"
                        alt=""
                        v-if="edukasi.foto"
                        style="height: 150px"
                      />
                    </div>
                    <div class="col-lg-7">
                      {{ edukasi.isi.substring(0, 100) + "......" }}
                      <div>
                        <router-link
                          :to="{
                            name: 'mahasiswa.detail_edukasi',
                            params: { id: edukasi.id },
                          }"
                          >Tampilkan Lebih Banyak</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const edukasi = ref([]);
    onMounted(() => {
      axios
<<<<<<< HEAD
        .get("https://ecowatchk10.000webhostapp.com/api/edukasi")
=======
        .get("http://127.0.0.1:8000/api/edukasi")
>>>>>>> origin/test
        .then((response) => {
          edukasi.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    function getFileUrl(filename) {
<<<<<<< HEAD
      return `https://ecowatchk10.000webhostapp.com/api/file/${filename}/foto`;
=======
      return `http://127.0.0.1:8000/api/file/${filename}/foto`;
>>>>>>> origin/test
    }

    return {
      edukasi,
      getFileUrl,
    };
  },
};
</script>

<style src="../../../public/assets/css/style.css"></style>
