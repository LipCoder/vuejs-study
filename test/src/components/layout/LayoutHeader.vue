<!-- 
    템플릿: 컴포넌트가 사용하는 DOM 문서조각
        디렉티브, 데이터표시 등의 vue.js 기능을 제공 
-->
<template>
<div>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</div>
</template>

<!-- 
    컴포넌트: 각 웹 어플리케이션 UI를 구성하는 블록을 뜻한다. (각 UI를 모듈화한다)
            해당 부분은 가상 DOM 하나로서 해당 부분의 화면 작업을 수행한다.
            재사용성, 유지보수성 특징이 있다.

            컴포넌트는 다른 컴포넌트에서 사용할 수 있으며, 
            이를 통해 상위&하위 컴포넌트 구조를 구성할 수 있다.
-->
<script>
export default {
    name: 'LayoutHeader',
};
</script>
