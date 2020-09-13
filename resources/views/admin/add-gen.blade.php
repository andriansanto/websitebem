@extends('layouts.admin')

@section('item')
<script>
  function triggerClick(){
    document.querySelector('#input_photo').click();
  }

  function displayImage(e){
    if(e.files[0]){
      var reader = new FileReader();

      reader.onload = function(e){
        document.querySelector('#display_photo').setAttribute('src',e.target.result);
      }
      reader.readAsDataURL(e.files[0]);
    }
  }
</script>

<div class="container my-5 mx-4" style="padding-top:100px;">
    <h4>Tambah Generasi</h4>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <form action="{{route('add.gen')}}" method="POST" enctype="multipart/form-data">
                                @csrf
                            <div class="form-group row d-flex justify-content-center px-4 pt-3">
                                <img src="/assets/img/default-image.png" class="img-thumbnail" style="width:100%; object-fit: cover;" onclick="triggerClick()" id="display_photo"></img>
                            </div>
                            <div class="form-group row d-flex justify-content-center px-4">
                                <label for="photo">{{ __('Foto Generasi') }}</label>
                                <div class="input-group mb-3">
                                    <div class="custom-file">
                                        <input type="file"  onchange="displayImage(this)" name="photo" id="input_photo" class="custom-file-input @error('photo') is-invalid @enderror" value="{{ old('photo') }}">
                                        <label class="custom-file-label" for="input_photo">Choose file</label>
                                        @error('photo')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col pl-4 pr-5 pt-2">
                            <div class="form-group row">
                                <label for="name">{{ __('Nama Generasi') }}</label>
                                <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan nama generasi" value="{{ old('name') }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group row">
                                <label for="name">{{ __('Nama Ketua') }}</label>
                                <input type="text" name="ketua" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan nama ketua" value="{{ old('name') }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group row">
                                <label for="name">{{ __('Nama Wakil') }}</label>
                                <input type="text" name="wakil" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan nama wakil" value="{{ old('name') }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group row">
                                <label for="name">{{ __('Visi') }}</label>
                                <input type="text" name="visi" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan visi" value="{{ old('name') }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group row">
                                <label for="name">{{ __('Misi') }}</label>
                                <input type="text" name="misi" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan misi" value="{{ old('name') }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group row">
                                <label for="name">{{ __('Tagline') }}</label>
                                <input type="text" name="tagline" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan tagline" value="{{ old('name') }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end px-3">
                <a href="/admin" class="btn btn-secondary mx-4">Batal</a>
                <input type="submit"  class="btn btn-primary" value="Tambahkan Slide Show" />     
                </form>
            </div>
        </div>
    </div>
</div>
</script>
@endsection