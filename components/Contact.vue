<template>
<!-- Map and contact form section -->
<div id="contact" class="section no-padding">
    <div class="container is-fluid no-margin">
        <div class="columns is-gapless is-not-tablet-portrait">
            <!-- Contact form -->
            <div class="column is-6">
                <div class="contact-form-wrapper">
                    <div>
                        <h2 class="form-title has-text-centered">Say Hello !</h2>
                        <form id="contact-form" class="pl-20 pr-20" @submit.prevent="sendMail" @keyup.enter="sendMail">
                            <div class="columns">
                                <div class="column is-8 is-offset-2">
                                    <div class="columns is-vcentered">
                                        <div class="column is-4">
                                            <!-- Form field -->
                                            <div class="control-material is-primary">      
                                                <input id="name" class="material-input" name="name" type="text" required="" v-model="name">
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label for="name">Name *</label>
                                            </div>
                                            <!-- /Form field -->
                                        </div>
                                        <div class="column is-4">
                                            <!-- /Form field -->
                                            <div class="control-material is-primary">      
                                                <input id="email" class="material-input" name="email" type="email" required="" v-model="email">
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label for="email">Email *</label>
                                            </div>
                                            <!-- /Form field -->
                                        </div>
                                        <div class="column is-4">
                                            <!-- Form field -->
                                            <div class="control-material is-primary">      
                                                <input id="company" class="material-input" name="company" type="text" required="" v-model="company">
                                                <span class="material-highlight"></span>
                                                <span class="bar"></span>
                                                <label for="company">Company</label>
                                            </div>
                                            <!-- /Form field -->
                                        </div>
                                    </div>
                                    <!-- Form field -->
                                    <div class="control-material is-primary">  
                                        <textarea id="message" rows="2" name="message" required="" v-model="message" @focus="textShowHelp = true" @blur="textShowHelp = false"></textarea>
                                        <span class="material-highlight"></span>
                                        <span class="bar"></span>
                                        <span class="help" v-show="textShowHelp">Message needs to be at least 25 characters.</span>
                                        <label for="message">Message *</label>
                                    </div>
                                    <!-- /Form field -->
                                    <div class="mb-20">
                                        <!-- Form submit -->
                                        <button type="submit" id="submit" class="button button-cta btn-align primary-btn btn-outlined is-bold is-fullwidth rounded no-lh">Send message</button> 
                                        <!-- /Form submit -->
                                    </div>
                                    <div class="mb-20" v-if="isDanger">
                                        <div class="submit-error is-size-7 has-text-danger">We're sorry it didn't go through. Please try again later, or email the team at: <a href="mailto:admin@marmt.io" target="_top">admin@marmt.io</a></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- /Contact form -->

            <!-- Google map -->
            <div class="column">
                <div id="half-map" class="half-map"></div>
            </div>
            <!-- /Google map -->
        </div>
    </div>
</div>
<!-- /Map and contact form section -->
</template>

<script>
export default {

    data() {
        return {
            name: '',
            email: '',
            company: '',
            message: '',
            isLoading: false,
            isDanger: false,
            textShowHelp: false
        }
    },
    mounted() {
        const mountMap = () => {
            const mapDiv = this.$el.querySelector('.half-map')
            const dublin = {lat: 37.7098245, lng: -121.9418987}
            const icon = {
                path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
                fillColor: '#396aab',
                fillOpacity: .6,
                anchor: new google.maps.Point(0,0),
                strokeWeight: 0,
                scale: 1
            }
            // Set map
            const googMap = new this.$google.maps.Map(mapDiv,
                {
                    center: dublin,
                    zoom: 13,
                    mapType: 'roadmap',
                    draggable: false
                }
            )
            // Set map marker
            const marker = new this.$google.maps.Marker({
                position: dublin,
                map: googMap,
                icon: icon
            })
            // Set map style
            const styledMapType = new this.$google.maps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#616161"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#757575"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#ffffff"
                    }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#757575"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#dadada"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#616161"
                    }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                    ]
                }
            ],
            {name: 'Styled Map'});

            googMap.mapTypes.set('styled_map', styledMapType);
            googMap.setMapTypeId('styled_map');
        }
        // Fix for map not loading issue: https://github.com/WilliamDASILVA/nuxt-google-maps-module/issues/3
        if (this.$google) {
            mountMap();
        } else {
            const callback = () => {
                mountMap();
                window.removeEventListener('maps-module:loaded', callback)
            }
            window.addEventListener('maps-module:loaded', callback)
        }
    },
    methods: {
        clearForm() {
            this.name = ''
            this.email = ''
            this.company = ''
            this.message = ''
        },

        messageNotSubmitted() {
            const submit = this.$el.querySelector('#submit')
            submit.classList.remove('primary-btn', 'btn-outlined')
            submit.classList.add('is-danger')
        },

        messageSent() {
            this.$el.querySelector('#submit').innerText = 'Message sent!'
        },

        async sendMail(event) {
            this.isLoading = true;
            await this.$axios.$post('https://marmt.io/api/contact', {
                name: this.name,
                email: this.email,
                company: this.company,
                message: this.message
            })
            .then((response) => {
                console.log(response)
                this.isLoading = false
                this.messageSent()
            })
            .catch((error) => {
                console.log(error)
                this.isLoading = false
                this.isDanger = true
                this.messageNotSubmitted()
            })
            this.clearForm();
        }
    }
}
</script>