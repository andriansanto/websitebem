@extends('layouts.admin')

@section('item')

<div class="container my-5 mx-4" style="padding-top:100px;">
    <h4>Tambah Contact</h4>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <form action="{{route('add.contact')}}" method="POST" enctype="multipart/form-data">
                                @csrf
                        
                        <div class="col pl-4 pr-5 pt-2">
                            <div class="form-group row">
                                <label for="name">{{ __('Nama') }}</label>
                                <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan nama" value="{{ old('name') }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group row">
                                <label for="name">{{ __('No. Telepon') }}</label>
                                <input type="text" name="phone" class="form-control @error('phone') is-invalid @enderror" placeholder="Masukkan no telepon" value="{{ old('phone') }}" />
                                @error('phone')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end px-3">
                <a href="/admin" class="btn btn-secondary mx-4">Batal</a>
                <input type="submit"  class="btn btn-primary" value="Tambahkan Contact" />     
                </form>
            </div>
        </div>
    </div>
</div>
</script>
@endsection