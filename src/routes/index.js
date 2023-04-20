import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home' //연결할 페이지를 가져온다.
import About from './About' 

export default createRouter({    //내보내기를 해서 최상단 main.js 에 적용을 한다.
  //hash, history 모드로 구분 할 수 있다.
  //hash 모드를 사용할거다 ex) https://google.com/#/~~
  history: createWebHashHistory(),
  //pages
  routes: [
    {
      path: '/',     // '/' 같은 경우는 메인페이지로 보면 된다. 그 메인 페이지에 연결할 페이지를 compoent 의 명시를 한다.
      component: Home 
    },
    {
      path: '/about',
      component: About
    }
  ]
})