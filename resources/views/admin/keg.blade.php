@extends('layouts.admin')

@section('item')
<div class="container mt-4 mx-5">
    <div class="row">
        <div class="col-12" style="padding-top:100px;">
            <h2 class="mt-3">Kegiatan Mahasiswa</h2><br>

            @foreach ($kegs as $keg)
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="/{{ $keg->photo }}" class="card-img-top" alt="/{{ $keg->photo }}" style="height:100%; object-fit: cover;">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="col">
                                <h3 class="card-title">{{ $keg->name }}</h3>
                                <p class="card-title">{{ $keg->info }}</p>
                                <br></br>
                                <a class="card-title" href="{{$keg->link}}">Instagram : {{ $keg->ig }}</a>
                            </div>
                            <div class="col d-inline-flex justify-content-end">
                                <div>
                                    <a href="kegiatan/{{ $keg->id }}/edit" class="btn btn-primary mx-3"><i class="fas fa-edit mr-2"></i>Ubah</a>
                                </div>
                                <form action="kegiatan/{{ $keg->id }}" method="post" class="d-inline">
                                    @method('delete')
                                    @csrf
                                    <button type="submit" class="btn btn-secondary mx-3"><i class="fas fa-trash-alt mr-2"></i>Hapus</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            @endforeach
            <a href="/admin" class="btn btn-primary my-3"><i class="fas fa-chevron-left mr-2"></i>Kembali</a>
        </div>
    </div>
</div>
@endsection