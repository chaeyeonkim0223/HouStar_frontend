<template>
  <v-app>
    <div class="d-flex flex-column flex-root">
      <div
        class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
        :class="{
          'login-signin-on': this.state == 'signin',
          'login-signup-on': this.state == 'signup',
          'login-forgot-on': this.state == 'forgot',
        }"
        id="kt_login"
      >
        <!-- 왼쪽 화면 -->
        <!--begin::Aside-->
        <div class="login-aside d-flex flex-column flex-row-auto" style="background-color: #f2c98a">
          <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
            <a href="#" class="text-center mb-10">
              <img src="media/logos/logo-letter-1.png" class="max-h-70px" alt="" />
            </a>
            <h3
              class="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
              style="color: #986923"
            >
              HauStar <br /><br />내게 꼭 맞는 행복한 집
            </h3>
          </div>
          <div
            class="
              aside-img
              d-flex
              flex-row-fluid
              bgi-no-repeat bgi-position-y-bottom bgi-position-x-center
            "
            :style="{ backgroundImage: `url(${backgroundImage})` }"
          ></div>
        </div>
        <!--begin::Aside-->
        <!--begin::Content-->
        <div
          class="
            login-content
            flex-row-fluid
            d-flex
            flex-column
            justify-content-center
            position-relative
            overflow-hidden
            p-7
            mx-auto
          "
        >
          <div class="d-flex flex-column-fluid flex-center">
            <!--팝업 창 -->
            <v-overlay :absolute="true" :value="overlay_success" :opacity="0">
              <div class="mb-16 pb-16">
                <v-alert class="pa-10" @click="overlaySuccess(overlay_event)" type="success"
                  ><h2>{{ overlay_msg }}</h2></v-alert
                >
              </div>
            </v-overlay>
            <v-overlay :absolute="true" :value="overlay_fail" :opacity="0">
              <div class="mb-16 pb-16">
                <v-alert
                  class="pa-10"
                  @click="overlayFail(overlay_event)"
                  border="left"
                  type="warning"
                  ><h2>{{ overlay_msg }}</h2></v-alert
                >
              </div>
            </v-overlay>
            <!-- 로그인 화면 -->
            <!--begin::Signin-->
            <div class="login-form login-signin">
              <form class="form" novalidate="novalidate" id="kt_login_signin_form">
                <div class="pb-13 pt-lg-0 pt-5">
                  <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                    내게 꼭 맞는 동네를 찾아보세요!
                  </h3>
                  <span class="text-muted font-weight-bold font-size-h4"
                    >처음 오셨나요?
                    <a
                      id="kt_login_signup"
                      class="text-primary font-weight-bolder"
                      @click="showForm('signup')"
                      >회원가입! (●'◡'●)</a
                    ></span
                  >
                </div>
                <div class="form-group">
                  <label for="login_id" class="font-size-h6 font-weight-bolder text-dark">ID</label>
                  <div id="example-input-group-1" label="" label-for="example-input-1">
                    <input
                      class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                      type="text"
                      name="login_id"
                      ref="login_id"
                      v-model="login_form.id"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="d-flex justify-content-between mt-n5">
                    <label class="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
                    <a
                      class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                      id="kt_login_forgot"
                      @click="showForm('forgot')"
                      >비밀번호 찾기</a
                    >
                  </div>
                  <div id="example-input-group-2" label="" label-for="example-input-2">
                    <input
                      class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                      type="password"
                      name="login_password"
                      ref="login_password"
                      v-model="login_form.password"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="pb-lg-0 pb-5">
                  <button
                    ref="kt_login_signin_submit"
                    class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
                  >
                    로그인
                  </button>
                </div>
              </form>
            </div>
            <!--end::Signin-->

            <!-- 회원가입 화면 -->
            <!--begin::Signup-->
            <div class="login-form login-signup">
              <form class="form" novalidate="novalidate" id="kt_login_signup_form">
                <div class="pb-10 pt-lg-0 pt-5">
                  <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                    회원가입
                  </h3>
                </div>
                <b-badge
                  v-if="signup_userid != `` && id_isUnique"
                  class="mr-1 mb-2"
                  variant="success"
                  >사용 가능한 ID 입니다</b-badge
                >
                <b-badge
                  v-if="signup_userid != `` && !id_isUnique"
                  class="mr-1 mb-2"
                  variant="danger"
                  >중복 ID 입니다</b-badge
                >
                <v-row>
                  <v-col>
                    <div class="form-group">
                      <input
                        class="
                          form-control form-control-solid
                          h-auto
                          py-7
                          px-6
                          rounded-lg
                          font-size-h6
                        "
                        type="text"
                        placeholder="Id"
                        name="id"
                        v-model.lazy="signup_userid"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="
                          form-control form-control-solid
                          h-auto
                          py-7
                          px-6
                          rounded-lg
                          font-size-h6
                        "
                        type="password"
                        placeholder="Password"
                        name="password"
                        ref="rpassword"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="
                          form-control form-control-solid
                          h-auto
                          py-7
                          px-6
                          rounded-lg
                          font-size-h6
                        "
                        type="password"
                        placeholder="Confirm password"
                        name="cpassword"
                        ref="cpassword"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="
                          form-control form-control-solid
                          h-auto
                          py-7
                          px-6
                          rounded-lg
                          font-size-h6
                        "
                        type="text"
                        placeholder="Name"
                        name="name"
                        ref="name"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="
                          form-control form-control-solid
                          h-auto
                          py-7
                          px-6
                          rounded-lg
                          font-size-h6
                        "
                        type="text"
                        placeholder="Address"
                        name="address"
                        ref="address"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="
                          form-control form-control-solid
                          h-auto
                          py-7
                          px-6
                          rounded-lg
                          font-size-h6
                        "
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        ref="phone"
                        autocomplete="off"
                      />
                    </div>
                  </v-col>
                  <v-col>
                    <v-select
                      name="tag"
                      ref="tag"
                      v-model="tag_val"
                      :items="tags"
                      filled
                      chips
                      label="선호 태그"
                      multiple
                    ></v-select>
                    <v-select
                      v-model="familyType_val"
                      :items="familyTypes"
                      filled
                      label="가구 형태"
                    ></v-select>
                    <v-select
                      v-model="ageRange_val"
                      :items="ageRanges"
                      item-text="text"
                      item-value="value"
                      filled
                      label="연령대"
                    ></v-select>
                  </v-col>
                </v-row>
                <div class="form-group">
                  <label class="checkbox mb-0">
                    <input type="checkbox" name="agree" />
                  </label>
                </div>
                <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                  <button
                    ref="kt_login_signup_submit"
                    class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                    style="width: 150px"
                  >
                    가입
                  </button>
                  <button
                    type="button"
                    id="kt_login_signup_cancel"
                    class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                    @click="showForm('signin')"
                  >
                    취소
                  </button>
                </div>
              </form>
            </div>
            <!--end::Signup-->
            <!--begin::Forgot-->
            <div class="login-form login-forgot">
              <!--begin::Form-->
              <form
                class="form"
                novalidate="novalidate"
                id="kt_login_forgot_form"
                ref="kt_login_forgot_form"
              >
                <div class="pb-13 pt-lg-0 pt-5">
                  <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                    Forgotten Password ?
                  </h3>
                  <p class="text-muted font-weight-bold font-size-h4">
                    Enter your email to reset your password
                  </p>
                </div>
                <div class="form-group">
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div class="form-group d-flex flex-wrap pb-lg-0">
                  <button
                    type="button"
                    id="kt_login_forgot_submit"
                    class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    id="kt_login_forgot_cancel"
                    class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                    @click="showForm('signin')"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <!--end::Forgot-->
          </div>
        </div>
        <!--end::Content-->
      </div>
    </div>
  </v-app>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import '@/assets/sass/pages/login/login-1.scss';
</style>

<script>
import http from '@/core/services/http-common';

import formValidation from '@/assets/plugins/formvalidation/dist/es6/core/Core';
// FormValidation plugins
import Trigger from '@/assets/plugins/formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from '@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap';
import SubmitButton from '@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton';
import KTUtil from '@/assets/js/components/util';
import { mapGetters, mapState } from 'vuex';
import { LOGIN, LOGOUT, REGISTER } from '@/core/services/store/auth.module';
import Swal from 'sweetalert2';
import VuetifyVue from '../../vuetify/Vuetify.vue';
export default {
  name: 'login-1',
  data() {
    return {
      //아이디 중복 체크용
      signup_userid: '',
      id_isUnique: true,
      //팝업 용
      overlay_success: false,
      overlay_fail: false,
      //팝업창에 띄울 메시지
      overlay_msg: '',
      //팝업창 클릭시 발생할 이벤트 종류
      overlay_event: '',

      state: 'signin',
      // Remove this dummy login info
      login_form: {
        id: '',
        password: '',
      },
      //선호태그 목록 (멀티선택)
      tag_val: [],
      tags: ['인프라', '대중교통', '안전', '건강', '학군', '환경'],
      //가구 형태 목록 (1선택)
      familyType_val: null,
      familyTypes: ['자취생', '직장인', '신혼부부', '일반가족'],
      //연령대 목록 (1선택)
      // ageRange_val: null,
      ageRange_val: null,
      ageRanges: [
        { text: '10대', value: 10 },
        { text: '20대', value: 20 },
        { text: '30대', value: 30 },
        { text: '40대', value: 40 },
        { text: '50대', value: 50 },
        { text: '그 이상', value: 'over' },
      ],
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    ...mapGetters(['isLogin', 'currentUser']),

    backgroundImage() {
      return process.env.BASE_URL + 'media/svg/illustrations/login-visual-1.svg';
    },
  },
  mounted() {
    const signin_form = KTUtil.getById('kt_login_signin_form');
    const signup_form = KTUtil.getById('kt_login_signup_form');
    const forgot_form = KTUtil.getById('kt_login_forgot_form');

    this.fv = formValidation(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: 'Username is required',
            },
          },
        },
        password: {
          validators: {
            notEmpty: {
              message: 'Password is required',
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });

    //회원가입 유효성 검사
    this.fv1 = formValidation(signup_form, {
      fields: {
        id: {
          validators: {
            notEmpty: {
              message: 'ID를 입력해주세요',
            },
          },
        },
        password: {
          validators: {
            notEmpty: {
              message: '비밀번호를 입력해주세요',
            },
          },
        },
        cpassword: {
          validators: {
            notEmpty: {
              message: '비밀번호를 재확인 해주세요',
            },
            identical: {
              compare: function () {
                return signup_form.querySelector('[name="password"]').value;
              },
              message: '비밀번호 재확인이 일치하지 않습니다.',
            },
          },
        },
        name: {
          validators: {
            notEmpty: {
              message: '이름을 입력해주세요',
            },
          },
        },
        address: {
          validators: {
            notEmpty: {
              message: '주소를 입력해주세요',
            },
          },
        },
        phone: {
          validators: {
            notEmpty: {
              message: '핸드폰 번호를 입력해주세요',
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });

    //비밀번호 찾기 유효성 검사
    this.fv2 = formValidation(forgot_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: 'Email is required',
            },
            emailAddress: {
              message: 'The value is not a valid email address',
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });

    // 로그인 유효성 검사 통과 후 로그인 시도 부분
    this.fv.on('core.form.valid', () => {
      var id = this.login_form.id;
      var password = this.login_form.password;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs['kt_login_signin_submit'];
      submitButton.classList.add('spinner', 'spinner-light', 'spinner-right');

      // // dummy delay
      setTimeout(() => {
        // send login request
        this.$store
          .dispatch(LOGIN, { id, password })
          // 로그인 성공
          .then(() => {
            // console.log(sessionStorage.getItem('currentUser'));
            // console.log('로그인 : ' + this.isLogin);
            this.$router.push({ name: 'home' });
          })
          //로그인 실패
          .catch(() => {
            this.overlay_fail = true;
            this.overlay_msg = 'ID, PASSWORD를 확인해주세요';
            this.overlay_event = 'login';
          });
        // this.$router.push({ name: 'home' });
        submitButton.classList.remove('spinner', 'spinner-light', 'spinner-right');
      }, 500);
    });

    this.fv.on('core.form.invalid', () => {
      Swal.fire({
        title: '',
        text: '다시 한 번 확인해주세요!',
        icon: 'error',
        confirmButtonClass: 'btn btn-secondary',
        heightAuto: false,
      });
    });

    //회원가입 처리
    this.fv1.on('core.form.valid', () => {
      console.log('회원가입 시도');
      const user = {
        userid: this.signup_userid,
        pwd: this.$refs.rpassword.value,
        name: this.$refs.name.value,
        address: this.$refs.address.value,
        phone: this.$refs.phone.value,
        tag: this.tag_val,
        family_type: this.familyType_val,
        age_range: this.ageRange_val,
      };
      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs['kt_login_signup_submit'];
      submitButton.classList.add('spinner', 'spinner-light', 'spinner-right');

      // dummy delay
      setTimeout(() => {
        // send register request
        //배열을 ,로 분리된 문자열로 변환
        let tag = '';
        user.tag.forEach((t) => {
          tag += t + ',';
        });
        //마지막 쉼표는 제거
        tag = tag.substr(0, tag.length - 1);
        user.tag = tag;
        console.log(JSON.stringify(user));
        http
          .post('/user', user)
          .then(({ data }) => {
            console.log(data);
            if (data == true) {
              this.overlay_success = true;
              this.overlay_event = 'regist';
              this.overlay_msg = '회원가입 성공! 반가워요╰(*°▽°*)╯';
            }
          })
          .catch(({ response }) => {
            this.overlay_fail = true;
            this.overlay_event = 'regist';
            this.overlay_msg = '회원가입 실패!';
            console.log(response);
          });

        submitButton.classList.remove('spinner', 'spinner-light', 'spinner-right');
      }, 500);
    });

    this.fv1.on('core.form.invalid', () => {
      Swal.fire({
        title: '',
        text: '다시 한 번 확인해주세요!',
        icon: 'error',
        confirmButtonClass: 'btn btn-secondary',
        heightAuto: false,
      });
    });
  },
  methods: {
    //성공 팝업창을 클릭했을 때 실행할 함수
    overlaySuccess(event) {
      this.overlay_success = false;
      if (event == 'regist') {
        if (!this.id_isUnique) return;
        this.overlay_success = false;
        this.signup_userid = '';
        this.$refs.cpassword.value = '';
        this.$refs.rpassword.value = '';
        this.$refs.name.value = '';
        this.$refs.address.value = '';
        this.$refs.phone.value = '';
        this.tag_val = [];
        this.familyType_val = null;
        this.ageRange_val = null;
        this.showForm('signin');
      }
    },
    //실패 팝업창을 클릭했을 때 실행할 함수
    overlayFail(event) {
      this.overlay_fail = false;
    },
    showForm(form) {
      this.state = form;
      var form_name = 'kt_login_' + form + '_form';
      KTUtil.animateClass(KTUtil.getById(form_name), 'animate__animated animate__backInUp');
    },
  },
  watch: {
    signup_userid: function (userid) {
      http.get('/user/' + userid).then((response) => {
        if (response.data != '') {
          this.id_isUnique = false;
        } else {
          this.id_isUnique = true;
        }
      });
    },
  },
};
</script>
