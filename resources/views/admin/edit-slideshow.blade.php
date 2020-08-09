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
    <h4>Ubah Slide Show</h4><br>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <form action="/admin/slideshow/{{ $slideshow->id }}" method="POST" enctype="multipart/form-data">
                                @method('patch')
                                @csrf
                            <div class="form-group row d-flex justify-content-center px-4 pt-3">
                                <img src="{{ $slideshow->photo }}" class="img-thumbnail" style="width:70%; object-fit: cover;" onclick="triggerClick()" id="display_photo"></img>
                            <div class="form-group row d-flex justify-content-center px-4">
                                <label for="photo">{{ __('Foto Slide Show') }}</label>
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
                        </div>
                        <div class="col pl-4 pr-5 pt-2">
                            <div class="form-group row">
                                <label for="name">{{ __('Nama Slide Show') }}</label>
                                <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan nama slide show" value="{{ $slideshow->name }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end px-3">
                <a href="/admin/slideshow" class="btn btn-secondary mx-4">Batal</a>
                <input type="submit" class="btn btn-primary" value="Ubah Slide Show" />
                </form>
            </div>
        </div>
    </div>
</div>
@endsection