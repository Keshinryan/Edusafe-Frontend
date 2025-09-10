import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/admin/dashboard.vue')
  },
  // Other routes...

  // Routes for admin role
  {
    path: '/data_mhs',
    name: 'data_mhs',
    component: () => import('@/views/admin/data_mhs.vue'),
    meta: { requiresAuth: true, role: 'admin' }
  },
  {
    path: '/tambah_mhs',
    name: 'tambah_mhs',
    component: () => import('@/views/admin/tambah_mhs.vue'),
    meta: { requiresAuth: true, role: 'admin' }
  },
  {
    path: '/edit_mhs',
    name: 'edit_mhs',
    component: () => import('@/views/admin/edit_mhs.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
  {
    path: '/data_kaprodi',
    name: 'data_kaprodi',
    component: () => import('@/views/admin/data_kaprodi.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
{
    path: '/tambah_kaprodi',
    name: 'tambah_kaprodi',
    component: () => import('@/views/admin/tambah_kaprodi.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
  {
    path: '/edit_kaprodi',
    name: 'edit_kaprodi',
    component: () => import('@/views/admin/edit_kaprodi.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
{
    path: '/data_edukasi',
    name: 'data_edukasi',
    component: () => import('@/views/admin/data_edukasi.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
{
    path: '/tambah_edukasi',
    name: 'tambah_edukasi',
    component: () => import('@/views/admin/tambah_edukasi.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
{
    path: '/edit_edukasi',
    name: 'edit_edukasi',
    component: () => import('@/views/admin/edit_edukasi.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
{
    path: '/data_pelaporan',
    name: 'data_pelaporan',
    component: () => import('@/views/admin/data_pelaporan.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
{
    path: '/tambah_pelaporan',
    name: 'tambah_pelaporan',
    component: () => import('@/views/admin/tambah_pelaporan.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
{
    path: '/edit_pelaporan',
    name: 'edit_pelaporan',
    component: () => import('@/views/admin/edit_pelaporan.vue'),
    meta: { requiresAuth: true, role: 'admin' }
},
  // Other admin-specific routes...

  // Routes for kaprodi role
  {
    path: '/kaprodi/Pelaporan',
    name: 'kaprodi.Pelaporan',
    component: () => import('@/views/kaprodi/Pelaporan.vue'),
    meta: { requiresAuth: true, role: 'kaprodi' }
  },
  {
    path: '/kaprodi/Edukasi',
    name: 'kaprodi.Edukasi',
    component: () => import('@/views/kaprodi/Edukasi.vue'),
    meta: { requiresAuth: true, role: 'kaprodi' }
  },
  {
<<<<<<< HEAD
    path: '/detail_edukasi/:id',
=======
    path: '/detail_edukasi',
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
    name: 'kaprodi.detail_edukasi',
    component: () => import('@/views/kaprodi/Detail_edukasi.vue'),
    meta: { requiresAuth: true, role: 'kaprodi' }
},
  // Other kaprodi-specific routes...

  // Routes for mahasiswa role
  {
    path: '/mahasiswa/Pelaporan',
    name: 'mahasiswa.TambahPelaporan',
    component: () => import('@/views/mahasiswa/TambahPelaporan.vue'),
    meta: { requiresAuth: true, role: 'mahasiswa' }
  },
  // Other mahasiswa-specific routes...

  // Common authentication routes
  
  {
    path: '/mahasiswa/Edukasi',
    name: 'mahasiswa.Edukasi',
    component: () => import('@/views/mahasiswa/Edukasi.vue'),
  },
  {
<<<<<<< HEAD
    path: '/detail_edukasi/:id',
=======
    path: '/detail_edukasi',
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
    name: 'mahasiswa.detail_edukasi',
    component: () => import('@/views/mahasiswa/Detail_edukasi.vue'),
},
  {
    path: '/auth/Login',
    name: 'auth.Login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/auth/Register',
    name: 'auth.Register',
    component: () => import('@/views/auth/Register.vue')
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const role = to.meta.role;

  if (requiresAuth && !user) {
    next({ name: 'auth.Login' });
  } else if (requiresAuth && user && !role.includes(user.role)) {
    next({ name: 'mahasiswa.Edukasi' });
  } else  {
    next();
  }
});

export default router;
