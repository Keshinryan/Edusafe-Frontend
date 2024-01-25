<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <center>
          <div class="card o-hidden border-0 shadow-lg my-5 col-lg-6">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" @submit.prevent="Auth">
                    <div class="form-group">
                      <input type="Username]" class="form-control form-control-user" id="exampleInputUsername]"
                        aria-describedby="Username]Help" placeholder="Enter Username..." v-model="Login.name" />
                      <div v-if="validation.name" class="mt-2 alert alert-danger">
                        {{ validation.name[0] }}
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user" id="exampleInputPassword"
                        placeholder="Password" v-model="Login.password" />
                      <div v-if="validation.password" class="mt-2 alert alert-danger">
                        {{ validation.password[0] }}
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-user btn-block">
                      Login
                    </button>
                  </form>
                  <div class="text-center">
                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div class="text-center">
                    <router-link :to="{ name: 'auth.Register' }" class="small">Create an Account!</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
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
    const Login = reactive({
      password: "",
      name: "",
    });
    const user = ref(null);
    const validation = ref([]);
    const router = useRouter();
    const isAuthenticated = ref(sessionStorage.getItem("user") !== null);
    function Auth() {
      let name = Login.name;
      let password = Login.password;
<<<<<<< HEAD
      let formData = new FormData();
      formData.append('name', name);
      formData.append('password', password);
      axios
        .post("http://127.0.0.1:8000/api/login", formData,{headers: {
                        'Content-Type': 'multipart/form-data'
          }})
=======
      axios
        .post("https://ecowatchk10.000webhostapp.com/api/login", {
          name: name,
          password: password,
        })
>>>>>>> origin/test
        .then((response) => {
          if (response.data.data) {
            sessionStorage.setItem("user", JSON.stringify(response.data.data));
            user.value = JSON.parse(sessionStorage.getItem("user"));
            isAuthenticated.value = true;
            if(user.value.role === 'mahasiswa'){
            router.push({ name: "mahasiswa.Edukasi" });
            }else if(user.value.role === 'kaprodi'){
              router.push({ name: "dashboard" });
            }else if(user.value.role === 'admin'){
              router.push({ name: "dashboard" });
            }
          } else {
            // Handle unexpected response structure
            console.error("Unexpected response:", response);
          }
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            validation.value = error.response.data;
          } else {
            // Handle other errors
            console.error("Error:", error);
          }
        });
    }

    return {
      Login,
      validation,
      router,
      Auth,
      isAuthenticated,
      user,
    };
  },
};
</script>
<style src="../../../public/assets/css/sb-admin-2.min.css"></style>
