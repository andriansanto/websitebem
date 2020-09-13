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
    <h4>Ubah Himpunan</h4><br>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <form action="/admin/himpunan/{{ $himpunan->id }}" method="POST" enctype="multipart/form-data">
                                @method('patch')
                                @csrf
                            <div class="form-group row d-flex justify-content-center px-4 pt-3">
                                <img src="/assets/img/default-image.png" class="img-thumbnail" style="width:100%; object-fit: cover;" onclick="triggerClick()" id="display_photo"></img>
                            </div>
                            <div class="form-group row d-flex justify-content-center px-4">
                                <label for="photo">{{ __('Logo Himpunan') }}</label>
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
                            <div class="form-group row d-flex justify-content-center px-4">
                                <label for="photo">{{ __('Warna Himpunan') }}</label>
                                <div class="input-group mb-3">
                                    <div class="custom-file">
                                        <input type="file"  onchange="displayImage(this)" name="photobar" id="input_photo" class="custom-file-input @error('photobar') is-invalid @enderror" value="{{ old('photobar') }}">
                                        <label class="custom-file-label" for="input_photo">Choose file</label>
                                        @error('photobar')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col pl-4 pr-5 pt-2">
                            <div class="form-group row">
                                <label for="name">{{ __('Nama Himpunan') }}</label>
                                <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="Masukkan nama himpunan" value="{{ $himpunan->name }}"/>
                                @error('name')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                       
                                <label for="name">{{ __('Fakultas') }}</label>
                                <input type="text" name="fakultas" class="form-control @error('fakultas') is-invalid @enderror" placeholder="Masukkan nama himpunan" value="{{ $himpunan->fakultas }}" disabled/>
                                @error('fakultas')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                                <br></br>
                            </div>
                                <label for="name">{{ __('Deskripsi 1') }}</label>
                                <textarea type="text" name="info1" class="form-control @error('info1') is-invalid @enderror" placeholder="Masukkan deskripsi himpunan">{{ $himpunan->info1 }}</textarea>
                                @error('info1')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                     
                                <label for="name">{{ __('Deskripsi 2') }}</label>
                                <textarea type="text" name="info2" class="form-control @error('info2') is-invalid @enderror" placeholder="Masukkan deskripsi himpunan">{{ $himpunan->info2 }}</textarea>
                                @error('info2')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                         
                                <label for="name">{{ __('Instagram') }}</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    </div>
                                <input type="text" name="instagram" class="form-control @error('instagram') is-invalid @enderror" placeholder="Masukkan instagram himpunan" value="{{ $himpunan->ig }}"/>
                                </div>
                                @error('instagram')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                        
                                <label for="name">{{ __('Line') }}</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    </div>
                                <input type="text" name="line" class="form-control @error('line') is-invalid @enderror" placeholder="Masukkan line himpunan" value="{{ $himpunan->line }}"/>
                                </div>
                                @error('line')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end px-3">
                <a href="/admin/himpunan" class="btn btn-secondary mx-4">Batal</a>
                <input type="submit" class="btn btn-primary" value="Ubah Himpunan" />
                </form>
            </div>
        </div>
    </div>
</div>

<style>
input[type=radio] {
	position: relative;
    transform: scale(1);
    opacity: 100%;
}
</style>
@endsection