<template>
<div class="hero parallax is-cover is-relative is-default is-bold" data-background="" data-color="" data-color-opacity="">
    <nav class="navbar navbar-wrapper navbar-fade navbar-light is-transparent">
        <div class="container">
            <!-- Brand -->
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img class="light-logo" src="/images/logos/marmt-logo-light.svg" alt="Marmt logo light version">
                    <img class="dark-logo" src="/images/logos/marmt-logo.svg" alt="Marmt logo">
                </a>

                <!-- Sidebar Trigger -->
                <!-- <a id="navigation-trigger" class="navbar-item hamburger-btn" href="javascript:void(0);">
                    <span class="menu-toggle">	
                        <span class="icon-box-toggle"> 	
                            <span class="rotate">
                                <i class="icon-line-top"></i>
                                <i class="icon-line-center"></i>
                                <i class="icon-line-bottom"></i> 
                            </span>
                        </span>
                    </span>
                </a> -->

                <!-- Responsive toggle -->
                <!-- <div class="custom-burger" data-target="">
                    <a id="" class="responsive-btn" href="javascript:void(0);">
                        <span class="menu-toggle">	
                            <span class="icon-box-toggle"> 	
                                <span class="rotate">
                                    <i class="icon-line-top"></i>
                                    <i class="icon-line-center"></i>
                                    <i class="icon-line-bottom"></i> 
                                </span>
                            </span>
                        </span>
                    </a>
                </div> -->
                <!-- /Responsive toggle -->
            </div>

            <!-- Navbar menu -->
            <div class="navbar-menu">
                <!-- Navbar Start -->
                <div class="navbar-start">
                    <a v-for="item in nav.navItems" class="navbar-item is-slide" :key="item.id" v-bind:href="item.url" @click="scrollToDiv">
                        {{ item.link }}
                    </a>
                </div>

                <!-- Navbar end -->
                <div class="navbar-end">
                    <!-- Signup button -->
                    <div class="navbar-item">
                        <a href="#contact" class="button button-signup btn-outlined is-bold btn-align light-btn rounded raised" @click="scrollToDiv">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero image -->
    <div id="about" class="hero-body">
        <div class="container has-text-centered">
            <div class="columns">
                <div class="column is-8 has-text-centered is-header-caption">
                    <h1 class="title main-title subpage-title text-bold is-2">
                        {{nav.hero.title}}
                    </h1>
                    <h2 class="subtitle is-4 light-text pt-20">
                        {{nav.hero.subtext}}
                    </h2>
                    <br>
                </div>

            </div>
        </div>
    </div>
    <!-- /Hero image -->
</div>
<!-- /Hero and nav -->
</template>

<script>
    const data = {
        hero: {
            title: "We're Marmt",
            subtext: "Marmt (mar·mot) is a full-stack engineer led agency. We're a remote geographically dispersed team that provides leading edge enterprise level expertise."
        },
        navItems: [
            {link: 'About', url: '#about', id: 1},
            {link: "Our solutions", url: '#solutions', id: 2},
            {link: "Our process", url: '#process', id: 3},
            {link: "Meet the founder", url: '#team', id: 4},
            {link: "Clients", url: '#clients', id: 5}
        ]
    }

    export default {
        data() {
            return {
                nav: data
            }
        },

        methods: {
            scrollToDiv(event) {
                const target = event.target.hash
                this.$el.querySelector(target).scrollIntoView({
                    behavior: "smooth", 
                    block: "start", 
                    inline: "nearest"
                });
            }
        }
    }
</script>