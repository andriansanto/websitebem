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
    <h4>Ubah UKM</h4><br>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <form action="/admin/ukm/{{ $ukm->id }}" method="POST" enctype="multipart/form-data">
                                @method('patch')
                                @csrf
                            <div class="form-group row d-flex justify-content-center px-4 pt-3">
                                <img src="/{{ $ukm->photo }}" class="img-thumbnail" style="width:70%; object-fit: cover;" onclick="triggerClick()" id="display_photo"></img>
                            <div class="form-group row d-flex justify-content-center px-4">
                                <label for="photo">{{ __('Logo UKM') }}</label>
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
                                <label for="name">{{ __('Nama UKM') }}</label>
                                <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan nama UKM" value="{{ $ukm->name }}" />
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                                <br></br>
                                <label for="name">{{ __('Deskripsi') }}</label>
                                <textarea type="text" name="info" class="form-control @error('info') is-invalid @enderror" placeholder="Masukkan deskripsi UKM">{{ $ukm->info }}</textarea>
                                @error('info')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                                <br></br>
                                <label for="name">{{ __('Hari') }}</label>
                                <input type="text" name="hari" class="form-control @error('hari') is-invalid @enderror" placeholder="Masukkan hari UKM" value="{{ $ukm->hari }}" />
                                @error('hari')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                                <br></br>
                                <label for="name">{{ __('Waktu') }}</label>
                                <input type="text" name="waktu" class="form-control @error('waktu') is-invalid @enderror" placeholder="Masukkan waktu UKM [format: 17.00-20.00 WIB *(disesuaikan perdivisi)]"value="{{ $ukm->jam }}" />
                                @error('waktu')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                                <br></br>
                                <label for="name">{{ __('Username Instagram') }}</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    </div>
                                <input type="text" name="instagram" class="form-control @error('instagram') is-invalid @enderror" placeholder="Masukkan instagram UKM" value="{{ $ukm->ig }}" />
                                </div>
                                @error('instagram')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                                <br></br>
                                <label for="name">{{ __('Tagline') }}</label>
                                <input type="text" name="tagline" class="form-control @error('tagline') is-invalid @enderror" placeholder="Masukkan tagline UKM"value="{{ $ukm->tagline }}" />
                                @error('tagline')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end px-3">
                <a href="/admin/ukm" class="btn btn-secondary mx-4">Batal</a>
                <input type="submit" class="btn btn-primary" value="Ubah UKM" />
                </form>
            </div>
        </div>
    </div>
</div>

@endsection