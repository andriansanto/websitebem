@extends('layouts.admin')

@section('item')

<div class="container my-5 mx-4" style="padding-top:100px;">
    <h4>Edit Contact</h4><br>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <form action="/admin/contact/{{ $contact->id }}" method="POST" enctype="multipart/form-data">
                                @method('patch')
                                @csrf
                            
                        <div class="col pl-4 pr-5 pt-2">
                            <div class="form-group row">
                                <label for="name">{{ __('Nama') }}</label>
                                <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan nama" value="{{ $contact->name }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group row">
                                <label for="phone">{{ __('No. Telepon') }}</label>
                                <input type="text" name="phone" class="form-control @error('phone') is-invalid @enderror" placeholder="Masukkan nomor telepon" value="{{ $contact->phone }}" />
                                @error('phone')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end px-3">
                <a href="/admin/contact" class="btn btn-secondary mx-4">Batal</a>
                <input type="submit" class="btn btn-primary" value="Ubah Contact" />
                </form>
            </div>
        </div>
    </div>
</div>
@endsection