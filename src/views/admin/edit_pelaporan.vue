<template>
<<<<<<< HEAD
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
=======
      <Navbar></Navbar>
      <div class="main">
      <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Data Pelaporan</h1>
        <div class="row justify-content-center">
            <div class="col-md-8 ">
                <div class="card">
                    <div class="card-header justify-content-center">
                        Form Edit Data Pelaporan
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="update">
                          <div class="form-group">
                            <label for="tanggal">Tanggal Kejadian</label>
                            <input type="date" name="tanggal" class="form-control" id="tanggal" placeholder="Tanggal Kejadian">
                        </div>
                        <div class="form-group">
                            <label for="waktu">Waktu Kejadian</label>
                            <input type="time" name="waktu"  class="form-control" id="waktu" placeholder="Waktu Kejadian">
                        </div>
                        <div class="form-group">
                            <label for="tempat">Tempat Kejadian</label>
                            <input type="text" name="tempat" class="form-control" id="tempat" placeholder="Tempat Kejadian">
                        </div>
                        <div class="form-group">
                            <label for="deskripsi">Deskripsi Kejadian</label>
                            <input type="text" name="deskripsi"  class="form-control" id="deskripsi" placeholder="Deskripsi Kejadian">
                        </div>
                        <div class="form-group">
                            <label for="bukti">Bukti Kejadian</label>
                            <input type="file" name="bukti"  class="form-control" id="bukti" placeholder="Bukti Kejadian">
                        </div>
                        <a href="" class="btn btn-danger">Tutup</a>
                            <button type="submit" name="tambah" class="btn btn-primary float-right">Edit Pelaporan</button>
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
      const pelaporan = reactive({
        tanggal: "",
        waktu: "",
        tempat: "",
        deskripsi: "",
        bukti: "",
      });
      const route=useRoute()

      const validation = ref([]);
      const router = useRouter();

      onMounted(() => {
  
  axios.get(`https://ecowatchk10.000webhostapp.com/api/post/${route.params.id}`)
    .then(response => {
      pelaporan.tanggal = response.data.data.tanggal
      pelaporan.waktu = response.data.data.waktu
      pelaporan.tempat = response.data.data.tempat
      pelaporan.deskripsi = response.data.data.deskripsi
      pelaporan.bukti = response.data.data.bukti
    })
    .catch((error) => {
      console.log(error.response.data)
    });
})

function update() {
  let tanggal = pelaporan.tanggal;
  let waktu = pelaporan.waktu;
  let tempat = pelaporan.tempat;
  let deskripsi = pelaporan.deskripsi;
  let bukti = pelaporan.bukti;
  axios.put(`https://ecowatchk10.000webhostapp.com/api/post/${route.params.id}`, {
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
  update
};
},
};
  </script>
  
  <style></style>
  
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
