@extends('layouts.app')

@section('content')
        <div class="flex-center position-ref full-height">
        <!--    @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif-->
            <style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.profiles {
  display: flex;
  justify-content: space-around;
  margin: 20px 100px;
}

.profile {
  flex-basis: 260px;
}

.profile .profile-img {
  height: 260px;
  width: 260px;
  border-radius: 50%;
  filter: grayscale(100%);
  cursor: pointer;
  transition: 400ms;
}

.profile:hover .profile-img {
  filter: grayscale(0);
}

.user-name {
  margin-top: 30px;
  font-size: 35px;
}


.profile h5 {
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 3px;
  color: #ccc;
}

.profile p {
  font-size: 16px;
  margin-top: 20px;
  text-align: justify;
}

@media only screen and (max-width: 1150px) {
  .profiles {
    flex-direction: column;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile p {
    text-align: center;
    margin: 20px 60px 80px 60px;
    font-size: 20px;
  }
}

@media only screen and (max-width: 900px) {

  .heading span {
    font-size: 15px;
  }

  .profiles {
    margin: 20px 0;
  }

  .profile p {
    margin: 20px 10px 80px 10px;
  }
}
</style>
<br><br><br>
            <div class="content">
                <div class="container">
                    <h1 class="heading" style="font-weight: bold;font-family: 'Montserrat', sans-serif;padding-top: 20px;">BEM UMN - Website Team GEN 10</h1>

                    <div class="profiles">

                        <div class="profile">
                            <img src="/assets/profile/askp.png" class="profile-img">
                            
                            <h3 class="user-name">Andrian Santo</h3>
                            <h5>Front End & Responsive Developer</h5>
                            <p><a style="text-decoration: none; color:#9293BC;" href="http://www.instagram.com/andriansanto_24"><i class="lni lni-instagram-original"></i> andriansanto_24</a></p>
                        </div>
                        
                        <div class="profile">
                          <img src="/assets/profile/alvinp.png" class="profile-img">

                          <h3 class="user-name">Arsheldy Alvin</h3>
                          <h5>Backend Developer</h5>
                          <p><a style="text-decoration: none; color:#9293BC;" href="http://www.instagram.com/arsheldy"><i class="lni lni-instagram-original"></i> arsheldy</a></p>
                      </div>
      
                      <div class="profile">
                        <img src="/assets/profile/ajop.png" class="profile-img">

                        <h3 class="user-name">Steven Johan</h3>
                        <h5>Front End Developer</h5>
                        <p><a style="text-decoration: none; color:#9293BC;" href="http://www.linkedin.com/in/stevenjohan/"><i class="lni lni-linkedin-original"></i></i> Steven Johan</a></p>
                      </div>

                    </div>
                      
                    
                    <div class="profiles">
                      
                      <div class="profile">
                        <img src="/assets/profile/avep.png" class="profile-img">

                        <h3 class="user-name">Aveline Suryanto</h3>
                        <h5>Web Designer</h5>
                        <p><a style="text-decoration: none; color:#9293BC;" href="http://www.instagram.com/afutrash"><i class="lni lni-instagram-original"></i></i> afutrash</a></p>
                      </div>

                      <div class="profile">
                        <img src="/assets/profile/rachelp.png" class="profile-img">

                        <h3 class="user-name">Rachelle Irene</h3>
                        <h5>Web Designer</h5>
                        <p><a style="text-decoration: none; color:#9293BC;" href="http://www.instagram.com/rachelirn"><i class="lni lni-instagram-original"></i></i> rachelirn</a></p>
                      </div>

                      <div class="profile">
                        <img src="/assets/profile/amelp.png" class="profile-img">

                        <h3 class="user-name">Amelia Ivanka</h3>
                        <h5>Web Designer</h5>
                        <p><a style="text-decoration: none; color:#9293BC;" href="http://www.instagram.com/ameliaivankag"><i class="lni lni-instagram-original"></i></i> ameliaivankag</a></p>
                      </div>

                    </div>

                    <div class="profiles">
                        <div class="profile">
                          <img src="/assets/profile/vivip.png" class="profile-img">
  
                          <h3 class="user-name">Maria Viviane</h3>
                          <h5>Web Designer</h5>
                          <p><a style="text-decoration: none; color:#9293BC;" href="http://www.instagram.com/viviane309"><i class="lni lni-instagram-original"></i></i> viviane309</a></p>
                        </div>
                      </div>
                    
    </div>
  </div>

            </div>
        </div>
    <script type="text/javascript" src="../js/app.js"></script>
    @include('layouts.footer')
@endsection

