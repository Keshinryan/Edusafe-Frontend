<template>
  <div class="container">
    <center>
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5 col-lg-6">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user" @submit.prevent="store">
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control form-control-user"
                      id="name"
                      placeholder="Nama Mahasiswa"
                      v-model="Register.name"
                    />
                    <div v-if="validation.name" class="mt-2 alert alert-danger">
                      {{ validation.name[0] }}
                      </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="nim"
                      class="form-control form-control-user"
                      id="nim"
                      placeholder="nim"
                      v-model="Register.nim"
                    />
                    <div v-if="validation.nim" class="mt-2 alert alert-danger">
                      {{ validation.nim[0] }}
                      </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="prodi"
                      class="form-control form-control-user"
                      id="prodi"
                      placeholder="Program Studi"
                      v-model="Register.prodi"
                    />
                    <div v-if="validation.prodi" class="mt-2 alert alert-danger">
                      {{ validation.prodi[0] }}
                      </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="alamat"
                      class="form-control form-control-user"
                      id="alamat"
                      placeholder="Alamat"
                      v-model="Register.alamat"
                    />
                    <div v-if="validation.alamat" class="mt-2 alert alert-danger">
                      {{ validation.alamat[0] }}
                      </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="NOHP"
                      placeholder="NO HP"
                      v-model="Register.NOHP"
                    />
                    <div v-if="validation.NOHP" class="mt-2 alert alert-danger">
                      {{ validation.NOHP[0] }}
                      </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      name="password"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                      v-model="Register.password"
                    />
                    <div v-if="validation.password" class="mt-2 alert alert-danger">
                      {{ validation.password[0] }}
                      </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-user btn-block">
                    Register Account
                  </button>
                </form>
                <div class="text-center">
                  <a class="small" href="">Forgot Password?</a>
                </div>
                <div class="text-center">
                  <router-link
                    :to="{ name: 'auth.Login' }"
                    class="small"
                    >Already have an account? Login!</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const Register = reactive({
      password: "",
      name: "",
      nim: "",
      prodi: "",
      alamat: "",
      NOHP: "",
      role:"mahasiswa"
    });
    const validation = ref([]);
    const router = useRouter();

    function store() {
      let name = Register.name;
      let password = Register.password;
      let nim = Register.nim;
      let prodi = Register.prodi;
      let alamat = Register.alamat;
      let NOHP = Register.NOHP;
      let role= Register.role;

      axios
<<<<<<< HEAD
        .post("https://ecowatchk10.000webhostapp.com/api/register", {
=======
        .post("http://localhost:8000/api/register", {
>>>>>>> origin/test
          name: name,
          password:password,
          name_m:name,
          nim: nim,
          prodi: prodi,
          alamat: alamat,
          NOHP: NOHP,
          role:role,
        })
        .then(() => {
          router.push({
            name: "auth.Login",
          });
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
    }
    return {
      Register,
      validation,
      router,
      store,
    };
  },
};
</script>
