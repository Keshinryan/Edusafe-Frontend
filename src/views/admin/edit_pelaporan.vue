<template>
  <Navbar />
  <div class="main">
    <div class="container-fluid">
      <h1 class="h3 mb-4 text-gray-800">Data Pelaporan</h1>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header justify-content-center">
              Form Edit Data Pelaporan
            </div>
            <div class="card-body">
              <form @submit.prevent="update">
                <BaseInput label="Tanggal Kejadian" type="date" id="tanggal" name="tanggal"
                  v-model="pelaporan.tanggal" />
                <BaseInput label="Waktu Kejadian" type="time" id="waktu" name="waktu" v-model="pelaporan.waktu" />
                <BaseInput label="Tempat Kejadian" type="text" id="tempat" name="tempat" placeholder="Tempat Kejadian"
                  v-model="pelaporan.tempat" />
                <BaseInput label="Deskripsi Kejadian" type="text" id="deskripsi" name="deskripsi"
                  placeholder="Deskripsi Kejadian" v-model="pelaporan.deskripsi" />
                <BaseInput label="Bukti Kejadian" type="file" id="bukti" name="bukti" accept="image/*"
                  v-model="pelaporan.bukti" />

                <a href="" class="btn btn-danger">Tutup</a>
                <button type="submit" name="tambah" class="btn btn-primary float-right">
                  Edit Pelaporan
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
import BaseInput from "@/components/BaseInput.vue";

export default {
  components: {
    BaseInput,
  },
  setup() {
    const pelaporan = reactive({
      tanggal: "",
      waktu: "",
      tempat: "",
      deskripsi: "",
      bukti: "",
    });
    const route = useRoute();
    const validation = ref([]);
    const router = useRouter();

    onMounted(() => {
      axios
        .get(`http://127.0.0.1:8000/api/post/${route.params.id}`)
        .then((response) => {
          pelaporan.tanggal = response.data.data.tanggal;
          pelaporan.waktu = response.data.data.waktu;
          pelaporan.tempat = response.data.data.tempat;
          pelaporan.deskripsi = response.data.data.deskripsi;
          pelaporan.bukti = response.data.data.bukti;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    function update() {
      axios
        .put(`http://127.0.0.1:8000/api/post/${route.params.id}`, pelaporan)
        .then(() => {
          router.push({ name: "admin.data_pelaporan" });
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
    }

    return {
      pelaporan,
      validation,
      router,
      update,
    };
  },
};
</script>
