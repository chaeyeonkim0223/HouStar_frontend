<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <!--begin: Search -->
    <b-dropdown
      v-if="false"
      size="sm"
      id="kt_quick_search_toggle"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div class="btn btn-icon btn-hover-transparent-white btn-lg btn-dropdown mr-1">
          <span class="svg-icon svg-icon-xl">
            <inline-svg src="media/svg/icons/General/Search.svg" />
          </span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <KTSearchDefault></KTSearchDefault>
      </b-dropdown-text>
    </b-dropdown>
    <!--end: Search -->

    <!--begin: Notifications -->
    <b-dropdown
      v-show="false"
      size="sm"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div
          class="
            btn btn-icon btn-hover-transparent-white btn-dropdown btn-lg
            mr-1
            pulse pulse-primary
          "
        >
          <span class="svg-icon svg-icon-xl">
            <inline-svg src="media/svg/icons/Code/Compiling.svg" />
          </span>
          <span class="pulse-ring"></span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <form>
          <!-- 지우면 메뉴바가 깨짐 -->
          <KTDropdownNotification></KTDropdownNotification>
        </form>
      </b-dropdown-text>
    </b-dropdown>
    <!--end: Notifications -->

    <!--begin: User Bar -->
    <KTQuickUser></KTQuickUser>
    <!--end: User Bar -->
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import KTSearchDefault from '@/view/layout/extras/dropdown/SearchDefault.vue';
import KTQuickUser from '@/view/layout/extras/offcanvas/QuickUser.vue';
//지우면 메뉴바가 깨짐
import KTDropdownNotification from '@/view/layout/extras/dropdown/DropdownNotification.vue';
import i18nService from '@/core/services/i18n.service.js';

export default {
  name: 'KTTopbar',
  data() {
    return {
      languageFlag: '',
      languages: i18nService.languages,
    };
  },
  components: {
    KTSearchDefault,
    KTQuickUser,
    //지우면 메뉴바가 깨짐
    KTDropdownNotification,
  },
  methods: {
    onLanguageChanged() {
      this.languageFlag = this.languages.find((val) => {
        return val.lang === i18nService.getActiveLanguage();
      }).flag;
    },
  },
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    },
  },
};
</script>
