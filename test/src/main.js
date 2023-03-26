import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// 인스턴스: 컴포넌트 생성 및, 부트스트래핑(템플릿 & 데이터 연결, 이벤트 메소드 구성 등) 작업을 한다.
//       - 각 인스턴스는 독립적으로 작용한다.
//       - 여기서 생성한 옵션은 전역 속성을 지닌다고 할 수 있겠다.
new Vue({
  router,
  render: h => h(App),
})
// .component()  // 전역 컴포넌트 선언
.$mount('#app')
