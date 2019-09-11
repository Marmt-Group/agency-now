<template>
  <div>
    <!-- Hero (Parallax) and nav -->
    <HeroNavbar :company="company" :guest="guest" />

    <!-- /Hero and nav -->
      <!-- Services section -->
    <section id="solutions" class="section is-medium">
        <div class="container">
            <!-- Title -->
            <div class="centered-title">
                <h2 v-if="company">Our Solutions for {{company}}</h2>
                <h2 v-else>Our Solutions</h2>
                <div class="title-divider"></div>
            </div>
            <!-- /Title -->
            <div class="columns services-cards is-minimal is-vcentered is-gapless is-multiline">
                <!-- Card -->
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered">
                        <div class="card-icon">
                            <i class="im im-icon-Monitor-Analytics"></i>
                        </div>
                        <div class="card-title">
                            <h4>Marketing &amp; Research</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">We provide turn-key solutions like usability research, analytics, SEM and other "white hat" strategies. Ask us for more details. <!--a href="#work-with-us" @click="workWithUs">Interested in developing with us?</a--></span>
                        </div>
                    </div>
                </div>
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
                            <span class="">We strive to be tech agnostic utilizing frameworks like React, Vue, and Angular to back-end with expertise in Node.js, Golang and experience with Python and PHP.</span>
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
                            <span class="">We're about building mobile applications in Flutter or React Native.</span>
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

    <!-- Process section -->
    <section id="process" class="section section-feature-grey is-medium huge-pb">
        <div class="container">
            <!-- Title -->
            <div class="centered-title">
                <h2>{{agency.process.title}}</h2>
                <div class="title-divider"></div>
                <div class="subheading">{{agency.process.subtext}}</div>
            </div>
            <!-- /Title -->

            <!-- Process steps -->
            <div class="content-wrapper">
                <div class="columns">
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
                                    <p class="description">We begin our process with research on your perfect customer. We then formulate a design strategy, verified with useabilty testing. After that we begin formal designs.</p>
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
                                    <p class="description">We develop first with formal engineering design docs in collaboration with our team of developers. Of course we develop with best in class tools, and we develop with these things in mind: user experience, scalability, readability, and maintainability.</p>
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
                                    <p class="description">You know, the back and forth between the client and us to achieve a desirable end. We're not satisifed until you are absoultely happy with our product.</p>
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

    <!-- Team section -->
    <section id="team" class="section is-medium huge-pb">
        <div class="container">
            <!-- Title -->
            <div class="centered-title">
                <h2>A <span style="text-decoration: line-through;">Word</span> Tangent from the Founder</h2>
                <div class="title-divider"></div>
            </div>
            <!-- Title -->

            <div class="content-wrapper modern-team-wrapper">
                <div class="modern-team single">
                    <!-- Team member -->
                    <div v-for="member in agency.team.members" :key="member.id" class="modern-team-item circle-mask zoom-effect">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img :src="member.avatar" class="member-avatar" alt="member avatar">
                            </div>
                            <div class="overlay-wrapper">
                                <div>
                                    <a class="social" :href="member.linkedin" target="_blank">
                                        <i class="social-icon fa fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="member-info">
                            <h3 class="member-name">{{member.name}}</h3>
                            <span class="member-position">{{member.title}}</span>
                        </div> -->
                    </div>
                    <div class="modern-team-bio">
                        <div v-if="companyType === 'real_estate_company'" class="content">
                            <p>Marmt would like to provide our services to {{company}} because I'm the son of a construction company owner. Our family has purchased properties for years and have worked with several realators.</p>
                            <p>This asside, Marmt has built a web application for <a href="https://www.matthews.com/" target="_blank">Matthews</a>, one of the largest commercial real estate companies in the U.S. The application features all properties for purchase and was built from the ground up.</p>
                            <p>So what does this mean for you? We've got you covered, we can build you a custom website from the ground up or re-design, research and re-market your current website.</p> 
                            <p>Perhaps you want to take it a step further and build a custom application like a CRM for existing clients or agents in the field&mdash;no problem, we're hear to help you succeed with technology.</p>
                        </div>
                        <div v-else-if="companyType === 'tech_company'" class="content">
                            <p>Marmt would like to provide our services to {{company}} because most of our development experience is with tech companies, it's a space we love. I've worked for the top Fortune 50 companies, and many SMBs.</p>
                            <p>If you are looking for a nice forward facing website, or want to augment your talent with some of ours we're here to help! We often get asked to help work on some niche tech that developers in-house might not have expertise in.</p>
                            <p>Here are some websites we've worked on for tech companies:</p>
                            <ul>
                                <li><a href="https://store.google.com" target="_blank">Google Store</a></li>
                                <li><a href="https://fi.google.com/about/" target="_blank">Google Fi</a></li>
                                <li><a href="http://urciscoent.com/" target="_blank">Cisco Enterprise Department</a></li>
                                <li><a href="http://res.com/" target="_blank">Res, now Ivanti</a></li>
                                <li><a href="https://containerx.io/" target="_blank">Container X</a></li>
                                <li><a href="https://www.snowflake.com" target="_blank">Snowflake</a></li>
                                <li><a href="http://axcient.com" target="_blank">Axcient</a></li>
                            </ul>
                        </div>
                        <div v-else-if="companyType === 'construction_company'" class="content">
                            <p>Marmt would like to provide our services to {{company}} because I'm the son of a residential construction company owner. In fact I worked as a tile apprentice before going into web development.</p>
                            <p>A bit more about my passion for the construction industry&mdash;I'm developing a mobile application to help contractors read and estimate building plans more efficiently. Let me know if you'd like to hear more about that!</p>
                            <p>We've got you covered, we can build you a custom website from the ground up or re-design, research and re-market your current website.</p>
                        </div>
                        <div v-else class="content">
                            <p>Marmt exists because there are many digital agencies dying in the modern age that fail to evolve. We do things a bit different, but actually it’s quite simple—what the customer wants, and what the customer needs, they deserve to get.</p>
                            <p>Many agencies die technologically because developers fail to evolve themselves, and it’s easier to punch out the same technology that you know well and do it fast, but this serves the developer not the client.</p>
                            <p>Many designers don’t thrive because they’re not given freedom to be creative. They should work where they can be creative, maybe that's a museum, or library. That office open floor plan⁠—total distraction!</p>
                            <p>On that note we’re a remote first company, why? Because remote is the future. Millennials want this to happen, and as millennials replace Gen-Xers and Baby Boomers as heads of companies this will become a reality. Don’t believe me, well I made it a point to ask almost every designer and developer I worked with at Apple and Google if they prefer remote vs. on-site, and the overwhelming majority said on-site. People work best where they are comfortable and secondly life happens; being stuck in an office for 8 hours a day just doesn’t make sense.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Team section -->

    <!-- Clients grid -->
    <div id="clients" class="section section-feature-grey is-medium huge-pb">
        <div class="container">
            <!-- Title -->
            <div class="centered-title">
                <h2 v-if="guest">You Can Trust Us {{guest}}!</h2>
                <h2 v-else>{{agency.clients.title}}</h2>
                <div class="title-divider"></div>
                <div class="subheading">{{agency.clients.subtext}}</div>
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
    <Contact :companyProp="company" :guestProp="guest" :contactProp="contact" />
    <!-- /Clients grid -->
    <DarkFooter/>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Contact from '~/components/Contact.vue'
import DarkFooter from '~/components/footer/DarkFooter.vue'
import HeroNavbar from '~/components/nav/HeroNavbar.vue'
import utmStripper from '~/utils/utmstrip'

const data = {
    process: {
        title: "Our Process",
        subtext: "Before development, there's thinking. Our process is sharp and lets us craft the best quality."
    },
    team: {
        subtext: "David is a dedicated engineer with Fortune 500 Silicon Valley corporate experience and an agency background.",
        members: [
            {
                name: "David Davis",
                title: "Founder and Lead Application Developer",
                id: 1,
                linkedin: "https://www.linkedin.com/in/davidjamesdavis/",
                avatar: "/images/djd_headshot.jpg"
            }
        ],
    },
    clients: {
        title: "They Trust Us",
        subtext: "We're lucky to have worked with some of the best companies in the world, however the majority of our clients are small to medium sized businesses; our prices are competitive—and lower than most of our competitors in northern California. Let's work together!"
    }
}

export default {
    data() {
        return {
            agency: data,
            openWorkSection: false,
            company: '',
            companyType: '',
            guest: '',
            contact: ''
        }
    },
    components: {
        AppLogo,
        Contact,
        DarkFooter,
        HeroNavbar,
    },
    async asyncData ({params}) {
        // called every time before loading the component
        return { params: params }
    },
    mounted() {
        // mount parallax functionality
        const parentDiv = this.$el.querySelectorAll('.parallax')
        const div = document.createElement('div')
        div.classList.add('parallax-overlay')

        for (let element of parentDiv) {
            element.prepend(div)
        }

        // get query params from UTM if exists
        if (this.$route.query) {
            const company = this.$route.query.company
            const companyType = this.$route.query.utm_campaign
            const guest = this.$route.query.guest
            const email = this.$route.query.email

            this.company = company ? company : ''
            this.companyType = companyType ? companyType : ''
            this.guest = guest ? guest : ''
            this.contact = email ? email : ''
        }
        // strip all utms (and all params for now)
        utmStripper()

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
    },
  
}
</script>