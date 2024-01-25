<template>
      <Navbar></Navbar>
      <div class="main">
      <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Data Edukasi</h1>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header justify-content-center">
                Form Tambah Data Edukasi
              </div>
              <div class="card-body">
                <form @submit.prevent="store" enctype="multipart/form-data">
                  <div class="form-group">
                    <label for="judul">Judul Content</label>
                    <input
                      type="text"
                      name="judul"
                      class="form-control"
                      v-model="edukasi.judul"
                      placeholder="Judul Content"
                    />
                    <div
                      v-if="validation.judul"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation.judul[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="isi">Isi Content</label>
                    <textarea
                      type="text"
                      name="isi"
                      class="form-control"
                      v-model="edukasi.isi"
                      placeholder="Isi Content"
                    ></textarea>
                    <div v-if="validation.isi" class="mt-2 alert alert-danger">
                      {{ validation.isi[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="foto">bukti</label>
                    <input
                      type="file"
                      ref="fileInput"
                      name="foto"
                      class="form-control"
                      id="foto"
                      placeholder="foto"
                      @change="handleFileUpload($event)"
                    />
                  </div>
                  <a href="" class="btn btn-danger">Tutup</a>
                  <button
                    type="submit"
                    name="tambah"
                    class="btn btn-primary float-right"
                  >
                    Tambah Edukasi
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
    const edukasi = reactive({
      judul: "",
      isi: "",
      foto: null,
    });

    const validation = ref([]);
    const router = useRouter();

    function store() {
      let judul = edukasi.judul;
      let isi = edukasi.isi;
      let foto = edukasi.foto;
      let formData = new FormData();
      formData.append("judul", judul);
      formData.append("isi", isi);
      formData.append("foto", foto);
      axios
        .post("https://ecowatchk10.000webhostapp.com/api/edukasi", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          router.push({
            name: "data_edukasi",
          });
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
    }
    function handleFileUpload(event) {
      edukasi.foto = event.target.files[0];
    }
    return {
      edukasi,
      validation,
      router,
      store,
      handleFileUpload,
    };
  },
};
</script>

<style></style>
