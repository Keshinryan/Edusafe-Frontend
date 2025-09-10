/* eslint-disable */
<template>
  <Navbar></Navbar>
  <div class="main">
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid mt-4">
          <div class="row">
            <div class="mt-4 mb-5">
              <h1>Detail Edukasi</h1>
            </div>
            <div class="col-lg-11 ml-5">
              <!-- Basic Card Example -->
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary" align="center">
                    {{ edukasi.judul }}
                  </h6>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="row-lg-4" align="center">
                      <img :src="getFileUrl(edukasi.foto)" alt="" v-if="edukasi.foto" style="height: 300px" />
                    </div>
                    <hr>
                    <div class="row-lg-7">
                      <p v-for="(isi, index) in formattedIsi" :key="index">{{ isi }}</p>
                    </div>
                    <div class="col-lg-3">
                      <router-link :to="{ name: 'mahasiswa.Edukasi' }" class="btn btn-danger float-left">Tutup</router-link>
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
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

export default {
  computed: {
    formattedIsi() {
      return this.edukasi.isi.split("\n"); // Memisahkan isi menjadi beberapa paragraf berdasarkan karakter baris baru (\n)
    },
  },

  setup() {
    const edukasi = reactive({
      judul: "",
      isi: "",
      foto: "",
    });

    const route = useRoute();

    const validation = ref([]);
    const router = useRouter();
    // This function fetches the details of a specific edukasi item from the API when the component is mounted
    // and stores it in the `edukasi` reactive variable.
    onMounted(() => {
      axios
        .get(`http://127.0.0.1:8000/api/edukasi/${route.params.id}`)
        .then((response) => {
          edukasi.judul = response.data.data.judul;
          edukasi.isi = response.data.data.isi;
          edukasi.foto = response.data.data.Foto;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    // This function constructs the URL for the file based on the filename passed as an argument
    function getFileUrl(filename) {
      return `http://127.0.0.1:8000/api/file/${filename}/foto`;
    }

    return {
      edukasi,
      validation,
      router,
      getFileUrl,
    };
  },
};
</script>

<style></style>
