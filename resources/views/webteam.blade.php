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
  margin: 20px 80px;
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
  font-size: 18px;
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
                    <h1 class="heading">BEM UMN - Website Team GEN 10</h1>
                    
                    <div class="profiles">
                        <div class="profile">
                            <img src="/assets/profile/ask.jpg" class="profile-img">
                            
                            <h3 class="user-name">Andrian Santo</h3>
                            <h5>Front End & Responsive Developer</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet soluta hic sunt sit reprehenderit.</p>
                        </div>
                        
                        <div class="profile">
        <img src="/assets/profile/ask.jpg" class="profile-img">

        <h3 class="user-name">Alvin</h3>
        <h5>Backend Developer</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis sint quod.</p>
      </div>
      
      <div class="profile">
        <img src="/assets/profile/ask.jpg" class="profile-img">

        <h3 class="user-name">Steven Johan</h3>
        <h5>Front End Developer</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eveniet!</p>
      </div>

      
    </div>
  </div>

            </div>
        </div>
    <script type="text/javascript" src="../js/app.js"></script>
    @include('layouts.footer')
@endsection

