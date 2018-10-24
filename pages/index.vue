<template>
  <div>
    <!-- Hero (Parallax) and nav -->
    <HeroNavbar/>

    <!-- /Hero and nav -->
      <!-- Services section -->
    <section class="section section-feature-grey is-medium">
        <div class="container">
            <div class="columns services-cards is-minimal is-vcentered is-gapless is-multiline">
                <!-- Card -->
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered">
                        <div class="card-icon">
                            <i class="im im-icon-Two-Windows"></i>
                        </div>
                        <div class="card-title">
                            <h4>Full-stack development</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">We like all things JavaScript from front-end frameworks like React, Vue, and Angular to back-end with expertise in Node.js. PHP, Python, Go, and Java visibility.</span>
                        </div>
                    </div>
                </div>
                <!-- Card -->
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered">
                        <div class="card-icon">
                            <i class="im im-icon-Smartphone-4"></i>
                        </div>
                        <div class="card-title">
                            <h4>Mobile Applications</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">We're about building native mobile applications in Flutter or React Native.</span>
                        </div>
                    </div>
                </div>
                <!-- Card -->
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered">
                        <div class="card-icon">
                            <i class="im im-icon-Business-ManWoman"></i>
                        </div>
                        <div class="card-title">
                            <h4>Staffing</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">We supply well qualified front-end contract engineers for your company. Ask us for more details. <a href="#work-with-us" @click="workWithUs">Interested in developing with us?</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="has-text-centered mt-40 mb-40 is-title-reveal">
                <a class="button button-cta is-bold btn-align primary-btn btn-outlined rounded">Learn more</a>
            </div> -->
        </div>
    </section>
    <!-- /Services section -->

    <!-- Work with us section -->
    <section id="work-with-us" class="section section-feature-grey" v-if="openWorkSection">
        <div class="container">
            <div class="centered-title">
                <h2>Work With Us</h2>
                <div class="title-divider"></div>
                <div class="subheading">
                    We work for some of the largest companies in the world
                </div>
            </div>

            <div class="content-wrapper">
                <div class="columns">
                    <!-- Content -->
                    <div class="column is-6">
                        <div class="service-box">
                            <h2 class="service-title">A little more about us</h2>
                            <div class="title-divider"></div>
                            <p class="description">We started Marmt because we're really passionate, really hungry developers who think we can do things a little better than the competition. We've worked with agencies who go stagnant, and worked with headhunters who have no working concept of dev technology.</p>
                            <p class="description">We think we can do a better job than the competition because we're developers working with and for developers.</p>
                            <p class="description">If you want to get your foot in the door with great companies then we'll do what we can to get you there<sup>*</sup>.</p>
                            <p class="help"><sup>*</sup>At this time we can only employ U.S. citizens in the San Francisco bay area.</p>
                        </div>
                    </div>
                    <!-- Icons -->
                    <div class="column is-5 is-offset-1 is-block-info">
                        <p><strong>Are you ready to work for us? If so, reach out with the following:</strong></p>
                        <ul>
                            <li>Your top 3 skills</li>
                            <li>Your website &amp; Github if you have one</li>
                            <li>Where you see yourself in two years</li>
                            <li>Anything else you'd like to tell us</li>
                        </ul>
                        <div class="action">
                            <a class="button btn-align button-cta btn-outlined raised rounded primary-btn is-bold" href="mailto:admin@marmt.io?subject=I'd%20like%20to%20work%20with%20you" target="_top">Get in Touch</a>
                        </div>
                    </div>
                    <!-- /Icons -->
                </div>
            </div>
        </div>
    </section>
    <!-- /Work with us section -->

    <!-- Team section -->
    <section id="team" class="section is-medium huge-pb">
        <div class="container">
            <!-- Title -->
            <div class="centered-title">
                <h2>{{agency.team.title}}</h2>
                <div class="title-divider"></div>
                <div class="subheading">
                    {{agency.team.subtext}}
                </div>
            </div>
            <!-- Title -->

            <div class="content-wrapper">
                <div class="modern-team">
                    <!-- Team member -->
                    <article v-for="member in agency.team.members" :key="member.id" class="modern-team-item circle-mask zoom-effect">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img :src="member.avatar" class="member-avatar" alt="member avatar">
                            </div>
                            <div class="overlay-wrapper">
                                <div>
                                    <a class="social" :href="member.linkedin" target="_blank">
                                        <i class="social-icon fa fa-linkedin"></i>
                                    </a>
                                    <a class="social" :href="member.github" target="_blank">
                                        <i class="social-icon fa fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="member-info">
                            <h3 class="member-name">{{member.name}}</h3>
                            <span class="member-position">{{member.title}}</span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
    <!-- /Team section -->

    <!-- Process section -->
    <section id="process" class="section section-feature-grey is-medium huge-pb">
        <div class="container">
            <!-- Title -->
            <div class="centered-title">
                <h2>Our Process</h2>
                <div class="title-divider"></div>
                <div class="subheading">
                    Before development, there's thinking. Our process is sharp and let us craft the best quality.
                </div>
            </div>
            <!-- /Title -->

            <!-- Process steps -->
            <div class="content-wrapper">
                <div class="columns is-vcentered">
                    <!-- Process step -->
                    <div class="column is-4">
                        <div class="process-block">
                            <div class="process-icon is-icon-reveal">
                                <div class="icon-wrapper">
                                    <i class="im im-icon-File-Edit"></i>
                                    <div class="process-number">1</div>
                                </div>
                            </div>
                            <div class="process-info">
                                <div class="details">
                                    <div class="motto">Design</div>
                                    <p class="description">We begin our development architecture with a formal engineering design documentation phase.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Process step -->
                    <div class="column is-4">
                        <div class="process-block">
                            <div class="process-icon is-icon-reveal">
                                <div class="icon-wrapper">
                                    <i class="im im-icon-Code-Window"></i>
                                    <div class="process-number">2</div>
                                </div>
                            </div>
                            <div class="process-info">
                                <div class="details">
                                    <div class="motto">Develop</div>
                                    <p class="description">We develop with best in class tools, and we develop with these things in mind: user experience, scalability, readability, and maintainability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Process step -->
                    <div class="column is-4">
                        <div class="process-block">
                            <div class="process-icon is-icon-reveal">
                                <div class="icon-wrapper">
                                    <i class="im im-icon-Arrow-Refresh"></i>
                                    <div class="process-number">3</div>
                                </div>
                            </div>
                            <div class="process-info">
                                <div class="details">
                                    <div class="motto">Iterate</div>
                                    <p class="description">You know, the back and forth between the client and us to achieve a desireable end.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Process steps -->
        </div>
    </section>
    <!-- /Process section -->

    <!-- Clients grid -->
    <div id="clients" class="section is-medium huge-pb">
        <div class="container">
            <!-- Title -->
            <div class="centered-title">
                <h2>They Trust Us</h2>
                <div class="title-divider"></div>
                <div class="subheading">
                    Discover the meaning of code quality and hire our team. Let's work together.
                </div>
            </div>
            <!-- /Title -->

            <div class="content-wrapper">
                <div class="grid-clients four-grid">
                    <div class="columns is-vcentered">
                        <div class="column is-hidden-mobile"></div>
                        <!-- Client -->
                        <div class="column">
                            <a><img class="client" src="/images/logos/custom/google.svg" alt="Google logo"></a>
                        </div>
                        <!-- Client -->
                        <div class="column">
                            <a><img class="client" src="/images/logos/custom/apple.svg" alt="Apple logo"></a>
                        </div>
                        <!-- Client -->
                        <div class="column">
                            <a><img class="client" src="/images/logos/custom/cisco.svg" alt="Cisco logo"></a>
                        </div>
                        <!-- Client -->
                        <div class="column">
                            <a><img class="client" src="/images/logos/custom/pge.svg" alt="PGE logo"></a>
                        </div>
                        <div class="column is-hidden-mobile"></div>
                    </div>
                    <div class="columns is-vcentered is-separator">
                        <div class="column is-hidden-mobile"></div>
                        <!-- Client -->
                        <div class="column">
                            <a><img class="client" src="/images/logos/custom/schwab.svg" alt="Charles Schwab logo"></a>
                        </div>
                        <!-- Client -->
                        <div class="column">
                            <a><img class="client" src="/images/logos/custom/ibm.svg" alt="IBM logo"></a>
                        </div>
                        <!-- Client -->
                        <div class="column">
                            <a><img class="client" src="/images/logos/custom/servicenow.svg" alt="Servicenow logo"></a>
                        </div>
                        <!-- Client -->
                        <div class="column">
                            <a><img class="client" src="/images/logos/custom/fisher.png" alt="Fisher Investments logo"></a>
                        </div>
                        <div class="column is-hidden-mobile"></div>
                    </div>
                </div>

                <!-- <div class="pt-60 pb-60 has-text-centered">
                    <a class="button button-cta is-bold btn-align primary-btn btn-outlined rounded is-title-reveal">Start a project</a>
                </div> -->
            </div>
        </div>
    </div>
    <!-- Contact -->
    <Contact/>
    <!-- /Clients grid -->
    <DarkFooter/>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Contact from '~/components/Contact.vue'
import DarkFooter from '~/components/footer/DarkFooter.vue'
import HeroNavbar from '~/components/nav/HeroNavbar.vue'

const data = {
    team: {
        title: "Team Leads",
        subtext: "We're dedicated engineers with Fortune 500 Silicon Valley corporate experience and agency backgrounds.",
        members: [
            {
                name: "David Davis",
                title: "Co-Founder and Lead Full-Stack Developer",
                id: 1,
                linkedin: "https://www.linkedin.com/in/davidjamesdavis/",
                github: "https://github.com/david-j-davis",
                avatar: "/images/djd_headshot.jpg"
            },
            {
                name: "Justin Sorensen",
                title: "Co-Founder and Lead Front-End Developer",
                id: 2,
                linkedin: "https://www.linkedin.com/in/sorensenjg/",
                github: "https://github.com/sorensenjg",
                avatar: "/images/jsorensen_headshot.jpg"
            }
        ]
    }
}

export default {
    data() {
        return {
            agency: data,
            openWorkSection: false
        }
    },
    components: {
        AppLogo,
        Contact,
        DarkFooter,
        HeroNavbar,
    },
    mounted() {
        // mount parallax functionality
        const parentDiv = this.$el.querySelectorAll('.parallax')
        const div = document.createElement('div')
        div.classList.add('parallax-overlay')

        for (let element of parentDiv) {
        element.prepend(div)
        }

    },
    methods: {
        workWithUs(event) {
            const target = event.target.hash
            this.openWorkSection = true
            setTimeout(() => {
                this.$el.querySelector(target).scrollIntoView({
                    behavior: "smooth", 
                    block: "start", 
                    inline: "nearest"
                });
            }, 200)
        }
    }
}
</script>