@extends('layouts.app')

@section('content')
<div class="d-flex align-items-stretch">
    <nav class="side-navbar" style="height:100vh;">
        <!-- Sidebar Header-->
        <div class="sidebar-header d-flex align-items-center pt-5 pb-3 ml-3 pl-4">
            <div class="title">
                <h1 class="h4">{{ Auth::user()->name }}</h1>
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
                <h6>Statistik</h6>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/hotelStat">
                    <i class="fas fa-chart-bar mr-2"></i>
                    Reports
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#dropdowm" aria-expanded="false" data-toggle="collapse">
                    <i class="fas fa-layer-group mr-2"></i>
                    Statistik Detail
                </a>
                <ul id="dropdowm" class="collapse nav flex-column px-4">
                    <li class="nav-item">
                        <a href="{{ route('admin.userStat') }}" class="nav-link">User</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('admin.hotelStat') }}" class="nav-link">Hotel</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('admin.orderStat') }}" class="nav-link">Order</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item px-3 pt-4">
                <h6>Hotel</h6>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/hotels">
                    <i class="fas fa-th-list mr-2"></i>
                    Lihat semua hotel
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/add-hotel">
                    <i class="fas fa-plus-circle mr-2"></i>
                    Tambah hotel
                </a>
            </li>
            <li class="nav-item px-3 pt-4">
                <h6>Ruangan</h6>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/rooms">
                    <i class="fas fa-th-list mr-2"></i>
                    Lihat semua ruangan
                </a>
            </li>
            <li class="nav-item px-3 pt-4">
                <h6>Order</h6>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/orderList">
                    <i class="fas fa-th-list mr-2"></i>
                    Pemesanan
                </a>
            </li>
        </ul>
    </nav>
    @yield('item')
</div>
@endsection
