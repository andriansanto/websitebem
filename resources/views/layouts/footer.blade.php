<!-- Footer Area Start -->
<footer class="footer-area bg-img bg-overlay-2 section-padding-80-0" style="background-color: #233e57; padding-bottom: 0;">
    <!-- Main Footer Area -->
    <div class="main-footer-area">
        <div class="container">
            <div class="row">
                <!-- Single Footer Widget Area -->
                <div class="col-12 col-md-4" style="padding-top: 20px;">
                    <div class="text-footer  mb-60 wow bounceInLeft">
                        <!-- Footer Logo -->
                        <h2 class="widget-title">CONTACT US</h2>
                        <p class="text-left">Multimedia Nusantara University</p>
                        <p class="text-left">Jl. Scientia Boulevard, Gading Serpong, Tangerang, Banten 15811</p>
                        <p class="text-left">BEM UMN<br>New Media Tower<br>(Gedung C), Lt. 5, Ruang 511</p>

                    </div>
                </div>
                <!-- Single Footer Widget Area -->
                <div class="col-6 col-md-3 text-center pt-4">
                    <div class="single-footer-widget mb-60 wow bounceInUp">
                        <!-- Widget Title -->
                      
                        <!-- Contact Area -->
                        <div class="text-footer" style="cursor:pointer;">
                            <p><a style="text-decoration: none;" href="http://www.instagram.com/bemumn"><i class="lni lni-instagram-original"></i> bemumn</a></p>
                            <p><a style="text-decoration: none;" href="http://line.me/ti/p/~@dmn8577"><i class="lni lni-line"></i> @dmn8577</a></p>
                            <p><a style="text-decoration: none;" href="mailto:bem@umn.ac.id?subject='Hallo BEM'"><i class="lni lni-envelope"></i> bem@umn.ac.id</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-2 text-center pt-4">
                    <div class="single-footer-widget mb-60 wow bounceInUp">
                        <!-- Contact Area -->
                        <div class="text-footer">
                            @foreach($contacts as $contact)
                            <p style="text-decoration: none; color:#9293BC; font-size: 15px;" class="lni lni-phone"> {{ $contact->name }}
                                {{ $contact->phone }}
                            </p>
                            @endforeach
                        </div>
                    </div>
                </div>
                <!-- Single Footer Widget Area -->
                <div class="col-12 col-md-3">
                    <div class="single-footer-widget mb-60 wow bounceInRight">
                        <!-- Widget Title -->
                        <h5 class="widget-title"></h5>

                        <!-- Footer Gallery -->
                        <div class="footer-gallery">
                            <div class="row justify-content-center" style="padding-top: 10px;">
                                <a href="#" class="footer-logo img-hover-zoom"><img class="mx-auto d-block" src="/assets/logobemwhite.png" alt="BEM Logo" width="100px"></a>
                                <!-- <div class="col-4" style="max-width:50px;">
                                    <a href="#"><img src="" alt=""></a>
                                </div> -->
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Copywrite Area -->
    <div style="background-color: #000033;">
        <div class="container">
            <div class="copywrite-content">
                <div class="row">
                    <!-- Copywrite Text -->
                    <div class="col-12">
                        <div class="copywrite-text text-center" style="color: white;">
                            <a href="{{ route('web-team') }}"> &copy; <?php echo date("Y"); ?> Website Team BEM UMN Gen X</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Footer Area End -->