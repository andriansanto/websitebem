@extends('layouts.app')

@section('content')
<div class="d-flex align-items-stretch">
    <nav class="side-navbar" style="height:100vh;">
        <!-- Sidebar Header-->
        <div class="sidebar-header d-flex align-items-center pt-5 pb-3 ml-3 pl-4">
            <div class="title-umn">
                <h2>{{ Auth::user()->name }}</h2>
                <p>{{ Auth::user()->email }}</p>
            </div>
        </div>
        <!-- Sidebar Navidation Menus-->
        <ul class="nav flex-column pl-4">
            <li class="nav-item">
                <a class="nav-link active" href="/admin">
                    <i class="fas fa-home mr-2"></i>
                    Dashboard <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item px-3 pt-4">
                <h6>HOME</h6>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/add_slideshow">
                    <i class="fas fa-chart-bar mr-2"></i>
                    Tambah Slide Show
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/admin/slideshow">
                    <i class="fas fa-chart-bar mr-2"></i>
                    Edit Slide Show
                </a>
            </li>
            
            <li class="nav-item px-3 pt-4">
                <h6>SUFAK</h6>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/hotels">
                    <i class="fas fa-th-list mr-2"></i>
                    Lihat semua himpunan
                </a>
            </li>
            <li class="nav-item px-3 pt-4">
                <h6>SUKM</h6>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/rooms">
                    <i class="fas fa-th-list mr-2"></i>
                    Lihat semua UKM
                </a>
            </li>
            <li class="nav-item px-3 pt-4">
                <h6>SUKMA</h6>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/orderList">
                    <i class="fas fa-th-list mr-2"></i>
                    Kegiatan Mahasiswa
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/orderList">
                    <i class="fas fa-th-list mr-2"></i>
                    Lembaga Semi Otonom
                </a>
            </li>
        </ul>
    </nav>
    @yield('item')
</div>
@endsection
