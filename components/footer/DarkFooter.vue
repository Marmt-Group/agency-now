<template>
<!-- Dark footer -->
<footer class="footer footer-dark">
    <div class="container">
        <div class="columns">
            <!-- <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3>Product</h3>
                    </div>
                    <ul class="link-list">
                        <li><a href="#">Discover features</a></li>
                        <li><a href="#">CMS integration</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Weekly sessions</a></li>
                        <li><a href="#">Free trials and demo</a></li>
                        <li><a href="#">What's next ?</a></li>
                    </ul>
                </div>
            </div> -->
            <!-- <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3>Company</h3>
                    </div>
                    <ul class="link-list">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">About security</a></li>
                        <li><a href="#">User guide</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Terms of website use</a></li>
                        <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>
            </div> -->
            <!-- <div class="column">
                <div class="footer-column">
                    <div class="footer-header">
                        <h3>Learning</h3>
                    </div>
                    <ul class="link-list">
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">API documentation</a></li>
                        <li><a href="#">Admin guide</a></li>
                    </ul>
                </div>
            </div> -->
            <div class="column">
                <div class="footer-column">
                    <div class="footer-logo">
                        <img src="/images/logos/marmt-logo-grey.svg" alt="Marmt logo grey version">
                    </div>
                    <!-- <div class="footer-header">
                        <nav class="level is-mobile">
                            <div class="level-left level-social">
                                <a href="#" class="level-item">
                                    <span class="icon"><i class="fa fa-facebook"></i></span>
                                </a>
                                <a href="#" class="level-item">
                                    <span class="icon"><i class="fa fa-twitter"></i></span>
                                </a>
                                <a href="#" class="level-item">
                                    <span class="icon"><i class="fa fa-linkedin"></i></span>
                                </a>
                                <a href="#" class="level-item">
                                    <span class="icon"><i class="fa fa-dribbble"></i></span>
                                </a>
                                <a href="#" class="level-item">
                                    <span class="icon"><i class="fa fa-github"></i></span>
                                </a>
                            </div>
                        </nav>
                    </div> -->
                    <div class="copyright">
                        <p>Marmt Group, LLC.</p>
                        <p>6937 Village Pkwy #2781</p>
                        <p>Dublin, CA 94568</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- /Dark footer -->
</template>

<script>
export default {
    data() {
        return {
            year: null
        }
    },
    mounted() {
        return this.year = (new Date()).getFullYear()
    }
}
</script>