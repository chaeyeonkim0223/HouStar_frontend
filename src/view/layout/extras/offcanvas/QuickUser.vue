<template>
  <div class="topbar-item text-start">
    <div
      id="kt_quick_user_toggle"
      class="btn btn-icon btn-hover-transparent-white align-items-center btn-lg px-md-2 w-md-auto"
    >
      <!-- 헤더에 달리는 버튼 UI -->
      <span class="symbol symbol-35">
        <div class="symbol-label">
          <v-icon color="white">mdi-account-circle</v-icon>
        </div>
      </span>
    </div>

    <div id="kt_quick_user" ref="kt_quick_user" class="offcanvas offcanvas-right p-10">
      <!--begin::Header-->
      <div class="offcanvas-header d-flex align-items-center justify-content-between pb-5">
        <h3 class="font-weight-bold m-0">내 정보</h3>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_user_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>
      <!--end::Header-->

      <!--begin::Content-->
      <perfect-scrollbar
        class="offcanvas-content pr-5 mr-n5 scroll"
        style="max-height: 90vh; position: relative"
      >
        <!--begin::Header-->
        <h2 style="color: black">😉 {{ currentUser.userid }}</h2>
        <div class="mt-3 d-flex align-items-center">
          <div class="symbol symbol-100 mr-5">
            <b-icon class="symbol-label" icon="person-fill"></b-icon>
            <i class="symbol-badge bg-success"></i>
          </div>
          <div class="d-flex flex-column">
            <a href="#" class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">
              {{ currentUser.name }}
            </a>
            <div class="text-muted mt-2">💗 {{ currentUser.tag | list }}</div>
            <div class="text-muted mt-2">💡 {{ currentUser.age_range | ageRange }}</div>
            <div class="text-muted mt-2">👩‍👧 {{ currentUser.family_type | familyType }}</div>
            <button class="mt-2 btn btn-light-primary btn-bold" @click="onLogout()">
              로그아웃
            </button>
          </div>
        </div>
        <!--end::Header-->
        <div class="separator separator-dashed mt-5 mb-5 pt-5">
          <div class="pt-5">
            <h5 style="color: black">📞 {{ currentUser.phone }}</h5>
          </div>
          <div class="pt-5">
            <h5 style="color: black">🏠 {{ currentUser.address }}</h5>
          </div>
        </div>
      </perfect-scrollbar>
      <!--end::Content-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#kt_quick_user {
  overflow: hidden;
}
.text-muted {
  font-size: 1.1em;
}
.symbol-label {
  // color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}
</style>

<script>
import { LOGOUT } from '@/core/services/store/auth.module';
import KTLayoutQuickUser from '@/assets/js/layout/extended/quick-user.js';
import KTOffcanvas from '@/assets/js/components/offcanvas.js';
import { mapGetters } from 'vuex';

export default {
  name: 'KTQuickUser',
  data() {
    return {};
  },
  mounted() {
    // Init Quick User Panel
    KTLayoutQuickUser.init(this.$refs['kt_quick_user']);
  },
  methods: {
    //로그아웃 버튼 클릭시 실행되는 함수
    onLogout() {
      this.$store.dispatch(LOGOUT).then(() => this.$router.push({ name: 'login' }));
    },
    closeOffcanvas() {
      new KTOffcanvas(KTLayoutQuickUser.getElement()).hide();
    },
  },
  computed: {
    ...mapGetters(['currentUser']),
    picture() {
      return process.env.BASE_URL + 'media/users/300_21.jpg';
    },
  },
  filters: {
    ageRange: function (ageRange) {
      if (!ageRange) return '연령대를 등록해주세요';
      if (ageRange == 'over') return '60대 이상';
      else return ageRange + '대';
    },
    familyType: function (type) {
      if (!type) return '가구형태를 등록해주세요';
      else return type;
    },
    list: function (list) {
      if (!list) return '';
      let str = '';
      for (let i = 0; i < list.length - 1; i++) {
        str += list[i] + '     |     ';
      }
      str += list[list.length - 1];
      return str;
    },
  },
};
</script>
