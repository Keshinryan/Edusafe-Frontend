<template>
      <Navbar></Navbar>
      <div class="main">
      <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Data Pelaporan</h1>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header justify-content-center">
                Form Tambah Data Pelaporan
              </div>
              <div class="card-body">
                <form @submit.prevent="store">
                  <div class="form-group">
                    <label for="tanggal">Tanggal Kejadian</label>
                    <input
                      type="date"
                      name="tanggal"
                      class="form-control"
                      v-model="pelaporan.tanggal"
                      placeholder="Tanggal Kejadian"
                    />
                    <div
                      v-if="validation.tanggal"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="waktu">Waktu Kejadian</label>
                    <input
                      type="time"
                      name="waktu"
                      class="form-control"
                      v-model="pelaporan.waktu"
                      placeholder="Waktu Kejadian"
                    />
                    <div
                      v-if="validation.waktu"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="tempat">Tempat Kejadian</label>
                    <input
                      type="text"
                      name="tempat"
                      class="form-control"
                      v-model="pelaporan.tempat"
                      placeholder="Tempat Kejadian"
                    />
                    <div
                      v-if="validation.tempat"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="deskripsi">Deskripsi Kejadian</label>
                    <input
                      type="text"
                      name="deskripsi"
                      class="form-control"
                      v-model="pelaporan.deskripsi"
                      placeholder="Deskripsi Kejadian"
                    />
                    <div
                      v-if="validation.deskripsi"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="bukti">Bukti Kejadian</label>
                    <input
                      type="file"
                      name="bukti"
                      class="form-control"
                      placeholder="Bukti Kejadian"
                    />
                    <div
                      v-if="validation.bukti"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation[0] }}
                    </div>
                  </div>
                  <a href="" class="btn btn-danger">Tutup</a>
                  <button
                    type="submit"
                    name="tambah"
                    class="btn btn-primary float-right"
                  >
                    Tambah Pelaporan
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
    const pelaporan = reactive({
      tanggal: "",
      waktu: "",
      tempat: "",
      deskripsi: "",
      bukti: "",
    });

    const validation = ref([]);
    const router = useRouter();

    function store() {
      let tanggal = pelaporan.tanggal;
      let waktu = pelaporan.waktu;
      let tempat = pelaporan.tempat;
      let deskripsi = pelaporan.deskripsi;
      let bukti = pelaporan.bukti;

      axios
        .post("https://ecowatchk10.000webhostapp.com/api/pelaporan", {
          tanggal: tanggal,
          waktu: waktu,
          tempat: tempat,
          deskripsi: deskripsi,
          bukti: bukti,
        })
        .then(() => {
          router.push({
            name: "admin.data_pelaporan",
          });
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
    }
    return {
      pelaporan,
      validation,
      router,
      store,
    };
  },
};
</script>

<style></style>
