<template>
        <Navbar></Navbar>
        <div class="main">
        <div class="container-fluid">
            <h1 class="h3 mb-4 text-gray-800">Form Pelaporan</h1>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header justify-content-center"></div>
                        <div class="card-body">
                            <form @submit.prevent="store" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="Tanggal">Tanggal</label>
                                    <input type="date" name="Tanggal" class="form-control" id="Tanggal"
                                        placeholder="Tanggal" v-model="Pelaporan.tanggal" />
                                        <div v-if="validation.tanggal" class="mt-2 alert alert-danger">
                                            {{ validation.tanggal[0] }}
                                            </div>
                                </div>
                                <div class="form-group">
                                    <label for="Waktu">Waktu</label>
                                    <input type="time" name="Waktu" class="form-control" id="Waktu" placeholder="Waktu"
                                        v-model="Pelaporan.waktu" />
                                        <div v-if="validation.tanggal" class="mt-2 alert alert-danger">
                                            {{ validation.name[0] }}
                                            </div>
                                </div>
                                <div class="form-group">
                                    <label for="Tempat">Tempat</label>
                                    <input type="text" name="Tempat" class="form-control" id="Tempat" placeholder="Tempat"
                                        v-model="Pelaporan.tempat" />
                                </div>
                                <div class="form-group">
                                    <label for="Deskripsi">Deskripsi</label>
                                    <textarea rows="4" col="100" name="Deskripsi" class="form-control" id="Deskripsi"
                                        placeholder="Deskripsi" v-model="Pelaporan.deskripsi"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="bukti">bukti</label>
                                    <input type="file" ref="fileInput" name="bukti" class="form-control" id="bukti"
                                        placeholder="bukti" @change="handleFileUpload" />
                                </div>
                                <router-link :to="'/mahasiswa/Edukasi'" class="btn btn-danger">Tutup</router-link>
                                <button type="submit" name="tambah" class="btn btn-primary float-right">
                                    Submit
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
        const Pelaporan = reactive({
            tanggal: "",
            waktu: "",
            tempat: "",
            deskripsi: "",
            bukti: null,
        });
        const user = ref(null);
        user.value = JSON.parse(sessionStorage.getItem("user"));
        const validation = ref([]);
        const router = useRouter();
        function store() {
            let tanggal = Pelaporan.tanggal;
            let waktu = Pelaporan.waktu;
            let tempat = Pelaporan.tempat;
            let deskripsi = Pelaporan.deskripsi;
            let bukti = Pelaporan.bukti;
            let formData = new FormData();
            formData.append('tanggal', tanggal);
            formData.append('waktu', waktu);
            formData.append('tempat', tempat);
            formData.append('deskripsi', deskripsi);
            formData.append('bukti', bukti);
            formData.append('id_m', user.value.id);
            axios
                .post("https://ecowatchk10.000webhostapp.com/api/pelaporan", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(() => {
                    router.push({
                        name: "mahasiswa.Edukasi",
                    });
                })
                .catch((error) => {
                    validation.value = error.response.data;
                });
        }
        function handleFileUpload(event) {
            Pelaporan.bukti = event.target.files[0];
        }

        return {
            Pelaporan,
            validation,
            router,
            store,
            handleFileUpload,
            user,
        };
    },
};
</script>
