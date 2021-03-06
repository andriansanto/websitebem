@extends('layouts.admin')

@section('item')
<div class="container mt-4 mx-5">
    <div class="row">
        <div class="col-12" style="padding-top:100px;">
            <h2 class="mt-3">Himpunan</h2><br>

            @foreach ($himps as $himp)
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="/{{ $himp->photo }}" class="card-img-top" alt="/{{ $himp->photo }}" style="height:100%; object-fit: cover;">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="col">
                                <h3 class="card-title">{{ $himp->name }}</h3>
                                <p class="card-title">{{ $himp->info1 }}</p>
                                <p class="card-title">{{ $himp->info2 }}</p>
                                <br></br>
                                <a class="card-title" href="{{$himp->linkig}}">Instagram : {{ $himp->ig }}</a>
                                <a class="card-title" href="{{$himp->linkline}}">Line : {{ $himp->line }}</a>
                                
                            </div>
                            <div class="col d-inline-flex justify-content-end">
                                <div>
                                    <a href="himpunan/{{ $himp->id }}/edit" class="btn btn-primary mx-3"><i class="fas fa-edit mr-2"></i>Ubah</a>
                                </div>
                                <form action="himpunan/{{ $himp->id }}" method="post" class="d-inline">
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