<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = new App\User;
        $user->name = "BEM UMN";
        $user->email = "bem@umn.ac.id";
        $user->password = Hash::make("@dedicatetocreategen10");
        $user->save();

        $slideshow = new App\SlideShow;
        $slideshow->name = "photo1";
        $slideshow->photo = "assets/img/img1.jpg";
        $slideshow->save();

        $slideshow = new App\SlideShow;
        $slideshow->name = "photo2";
        $slideshow->photo = "assets/img/img2.jpg";
        $slideshow->save();

        $slideshow = new App\SlideShow;
        $slideshow->name = "photo3";
        $slideshow->photo = "assets/img/img3.jpg";
        $slideshow->save();

        /**ABOUT US GENERASI */

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen X";
        // $generasi->photo = "assets/aboutus/au10.png";
        // $generasi->ketua = "Kemal Roushdy";
        // $generasi->wakil = "Jane Suwanto";
        // $generasi->visi = "Visi BEM gen X adalah menjadikan BEM UMN sebagai Lembaga yang dapat diandalkan untuk mengembangkan organisasi naungan BEM dengan dedikasi dan inovasi.";
        // $generasi->misi = "Misi BEM gen X adalah menegaskan dan mengoptimalkan peran BEM dan mengkoordinasikan program kerja organisasi di bawah naungan BEM.";
        // $generasi->tagline = "#DedicateToCreate";
        // $generasi->save();

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen IX";
        // $generasi->photo = "assets/aboutus/au9.png";
        // $generasi->ketua = "Matthew Everaldo";
        // $generasi->wakil = "Michelle Alexandra";
        // $generasi->visi = "Visi BEM gen IX adalah menjadikan BEM UMN sebagai lembaga yang dapat dipercaya sehingga mampu untuk berkolaborasi dalam berinovasi untuk mencapai sinergi.";
        // $generasi->misi = "Misi BEM gen IX adalah menjalin relasi serta mengoptimalkan jalur koordinasi dengan seluruh organisasi yang bersinggungan dengan BEM. Mewujudkan keterbukaan dalam menjalankan setiap program kerja BEM.";
        // $generasi->tagline = "#CollaborateAsOne";
        // $generasi->save();

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen VIII";
        // $generasi->photo = "assets/aboutus/au8.png";
        // $generasi->ketua = "Julian Rizki";
        // $generasi->wakil = "Rosemarie Vania";
        // $generasi->visi = "Visi BEM gen VIII adalah menciptakan BEM UMN sebagai lembaga yang memiliki kekuatan dan sikap bertanggung jawab untuk menerapkan inovasi dengan pemikiran yang kritis.";
        // $generasi->misi = "Misi BEM gen VIII adalah memperjelas landasan kerja BEM UMN sebagai badan eksekutif tertinggi di kampus UMN. Mempertegas keberadaan BEM UMN di mata mahasiswa UMN.";
        // $generasi->tagline = "#PowerToInspire";
        // $generasi->save();

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen VII";
        // $generasi->photo = "assets/aboutus/au7.png";
        // $generasi->ketua = "Tri Nita";
        // $generasi->wakil = "Suci Fransiska";
        // $generasi->visi = "Visi BEM gen VII adalah membangun BEM yang bekerja berdasarkan intelegensi, integritas, dan energi.";
        // $generasi->misi = "Misi BEM gen VII adalah mewujudkan supervisi yang mempertemukan kepentingan organisasi mahasiswa dengan kebijakan rektorat. Mewujudkan sistem kerja yang koordinatif dan komunikatif. Menjalin hubungan dengan media kampus.";
        // $generasi->tagline = "#ActWithIntegrity";
        // $generasi->save();

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen VI";
        // $generasi->photo = "assets/aboutus/au6.png";
        // $generasi->ketua = "Christian Wijasa";
        // $generasi->wakil = "Priscillia Yosephine";
        // $generasi->visi = "Visi BEM gen VI adalah menjadikan BEM yang menerapkan 3K (Keterbukaan, Kooperatif, dan Konstruktif).";
        // $generasi->misi = "Misi BEM gen VI adalah membangun BEM yang bekerja nyata serta evaluatif. Bersama dengan seluruh organisasi dan mahasiswa untuk saling bersinergi dalam meningkatkan softskill.";
        // $generasi->tagline = "#TogetherGrowStronger";
        // $generasi->save();

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen V";
        // $generasi->photo = "assets/aboutus/au5.png";
        // $generasi->ketua = "Ricky Jiandy";
        // $generasi->wakil = "Bernadetta Novia";
        // $generasi->visi = "Visi BEM gen V adalah BEM bersatu dengan mahasiswa untuk saling bersinergi dalam memberikan karya terbaik, untuk almamater, persada, dan sesama.";
        // $generasi->misi = "Misi BEM gen V adalah bekerja nyata dalam menjalin komunikasi dengan seluruh organisasi maupun kegiatan mahasiswa di UMN.";
        // $generasi->tagline = "#WeWorkWithYou";
        // $generasi->save();

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen IV";
        // $generasi->photo = "assets/aboutus/au4.png";
        // $generasi->ketua = "Nicholaus Adi Prasetyo";
        // $generasi->wakil = "Fifiani Lugito";
        // $generasi->visi = "BEM generasi IV lebih banyak melanjutkan apa yang sudah dilaksanakan oleh BEM generasi III, seperti OMB dan Miss UMN. Dalam masa jabatan ini pula, Liga Futsal UMN berubah menjadi Ultima Futsal Championship (UFC).";
        // $generasi->misi = "";
        // $generasi->tagline = "";
        // $generasi->save();

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen III";
        // $generasi->photo = "assets/aboutus/au3.png";
        // $generasi->ketua = "Kevin Hartanto";
        // $generasi->wakil = "Gabriella Imelda";
        // $generasi->visi = "Pada BEM generasi III, divisi Supervisi Fakultas dibentuk untuk mengayomi Himpunan Mahasiswa Fakultas/ Jurusan. Selain itu juga dibentuk kegiatan baru, yaitu Miss UMN, JUMBA, dan Koperasi Mahasiswa.";
        // $generasi->misi = "";
        // $generasi->tagline = "";
        // $generasi->save();

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen II";
        // $generasi->photo = "assets/aboutus/au2.png";
        // $generasi->ketua = "Preva Dimas";
        // $generasi->wakil = "Nesya";
        // $generasi->visi = "Pada BEM generasi II, susunan struktur organisasi mulai diperjelas dan dirapikan. Kegiatan OMB juga lebih dimatangkan dan mempunyai suatu gebrakan yang cukup signifikan.";
        // $generasi->misi = "";
        // $generasi->tagline = "";
        // $generasi->save();

        // $generasi = new App\Generasi;
        // $generasi->name = "Gen I";
        // $generasi->photo = "assets/aboutus/au1.png";
        // $generasi->ketua = "Bonaventura Aditya";
        // $generasi->wakil = "Pieter Sanjaya";
        // $generasi->visi = 'BEM generasi I melakukan perintisan pembukaan jalan bagi mahasiswa UMN yang ingin mengikuti kegiatan organisasi. Pada generasi ini pula, UKM juga sudah mulai ditindaklanjuti.';
        // $generasi->misi = 'BEM generasi I juga ingin meminimalisir penyalahgunaan kekuasaan dari mahasiswa/i di luar BEM, maka dibentuklah Keluarga Besar Mahasiswa Universitas Multimedia Nusantara (KBM UMN). Tidak hanya itu, BEM generasi I juga memperjelas fungsi BEM sebagai "jembatan antara mahasiswa/i dengan rektorat"';
        // $generasi->tagline = "";
        // $generasi->save();

        $ukm = new App\Ukm;
        $ukm->name = "Ultima Sonora";
        $ukm->photo = "assets/ukmnobg/senbud/ulsonbg.png";
        $ukm->info = "Ultima Sonora merupakan Paduan Suara Mahasiswa Universitas Multimedia Nusantara sejak tahun 2007. Dalam menjaga eksistensinya, Ultima Sonora aktif dalam mengadakan berbagai konser, seperti konser Inagurasi yang diadakan rutin setiap tahunnya";
        $ukm->ig = "UltimaSonora";
        $ukm->link = "http://www.instagram.com/UltimaSonora";
        $ukm->hari = "Selasa & Jumat";
        $ukm->jam = "17.00-20.00 WIB";
        $ukm->tagline = "#SingWithUS";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Teater KataK";
        $ukm->photo = "assets/ukmnobg/senbud/katakbg.png";
        $ukm->info = "Komunitas Anak Teater Kampus (KataK) didirikan sebagai wadah berseni peran di UMN. KataK berkembang menjadi fasilitator bagi mereka yang ingin belajar ilmu teater.Puluhan produksi sudah diselenggarakan baik di dalam maupun di luar universitas.";
        $ukm->ig = "teaterkatak";
        $ukm->link = "http://www.instagram.com/teaterkatak";
        $ukm->hari = "Selasa, Rabu,& Kamis";
        $ukm->jam = "17.00-21.00 WIB";
        $ukm->tagline = "“Berani Melompat Lebih Tinggi Melewati Batasan Yang Ada”";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "UMN Symphony Orchestra";
        $ukm->photo = "assets/ukmnobg/senbud/usobg.png";
        $ukm->info = "UMN Symphony Orchestra berdiri sejak 2015 dan resmi menjadi ukm pada tahun 2016. Melalui tagline ‘Viva La Musica’  kami tidak hanya sekedar bermain musik, tetapi juga menghidupkan rasa dalam setiap individu, sehingga seluruh permainan musik yang kami hasilkan dapat tersampaikan dengan baik dan dirasakan";
        $ukm->ig = "umnsymphonyorchestra";
        $ukm->link = "http://www.instagram.com/umnsymphonyorchestra";
        $ukm->hari = "Selasa & Kamis";
        $ukm->jam = "17.00-20.00 WIB";
        $ukm->tagline = "Viva La Musica!";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Qorie";
        $ukm->photo = "assets/ukmnobg/senbud/qoriebg.png";
        $ukm->info = "Qorie merupakan sebuah UKM seni dan budaya yang berfokus pada kebudayaan Korea Selatan. Qorie juga menjadi sarana untuk mempelajari tata bahasa korea serta menjadi tempat bagi mahasiswa/i untuk menunjukan bakat dan minat mereka dalam seni tari dan musik korea.";
        $ukm->ig = "qorie_umn";
        $ukm->link = "http://www.instagram.com/qorie_umn";
        $ukm->hari = "Senin s/d Jumat";
        $ukm->jam = "17.00-20.00 WIB *(disesuaikan perdivisi)";
        $ukm->tagline = "Qorie, Saranghaja!";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Jcafe";
        $ukm->photo = "assets/ukmnobg/senbud/jcafebg.png";
        $ukm->info = "Jcafe adalah Unit Kegiatan Mahasiswa (UKM) yang beranggotakan para penggemar budaya Jepang di UMN. Jcafe memberikan wadah kepada para mahasiswa untuk mengembangkan minat & bakat serta passion mereka terhadap seni dan budaya berbasis jepang.";
        $ukm->ig = "jcafe_umn";
        $ukm->link = "http://www.instagram.com/jcafe_umn";
        $ukm->hari = "Senin s/d Jumat";
        $ukm->jam = "17.00-19.00 WIB *(disesuaikan perdivisi)";
        $ukm->tagline = "Jcafe, Express Your Japanese Passion!";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Mufomic";
        $ukm->photo = "assets/ukmnobg/senbud/mufomicbg.png";
        $ukm->info = "Multimedia Face of Music (MUFOMIC) merupakan salah satu Unit Kegiatan Mahasiswa (UKM) di Universitas Multimedia Nusantara yang bergerak di bidang seni dan budaya, yaitu musik dalam format band.";
        $ukm->ig = "mufomic";
        $ukm->link = "http://www.instagram.com/mufomic";
        $ukm->hari = "Selasa";
        $ukm->jam = "17.00-22.00 WIB";
        $ukm->tagline = "Mufomic - ORKES";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Obscura";
        $ukm->photo = "assets/ukmnobg/senbud/obscurabg.png";
        $ukm->info = "Obscura merupakan Unit Kegiatan Mahasiswa (UKM) yang bergerak di bidang fotografi dibawah naungan UMN.Obscura bertujuan untuk mempertemukan para pecinta fotografi di kalangan mahasiswa UMN. Obscura memegang erat motto “Together We Learn” karena mengedepankan kebersamaan dalam belajar.";
        $ukm->ig = "obscuratwl";
        $ukm->link = "http://www.instagram.com/obscuratwl";
        $ukm->hari = "Rabu";
        $ukm->jam = "17.00-22.00 WIB";
        $ukm->tagline = "Together We Learn!";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Tracce";
        $ukm->photo = "assets/ukmnobg/senbud/traccebg.png";
        $ukm->info = "Traditional dance atau yang akrab disebut dengan TRACCE merupakan Unit Kegiatan Mahasiswa di Universitas Multimedia Nusantara yang memberi wadah bagi mahasiswa yang ingin menyalurkan bakat dan minatnya dalam seni tradisional yang berasal dari Indonesia.";
        $ukm->ig = "tracceumn";
        $ukm->link = "http://www.instagram.com/tracceumn";
        $ukm->hari = "Selasa, Rabu,& Kamis";
        $ukm->jam = "17.30-20.00 WIB";
        $ukm->tagline = "“Nari terus, nari terus, nari terus!”";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Ultima Toys";
        $ukm->photo = "assets/ukmnobg/senbud/utoysbg.png";
        $ukm->info = "Ultima Toys adalah Unit Kegiatan Mahasiswa sebagai tempat belajar juga sarana untuk berbagi ide dan kreativitas yang berkaitan dengan fotografi mainan";
        $ukm->ig = "ultimatoys";
        $ukm->link = "http://www.instagram.com/ultimatoys";
        $ukm->hari = "Kamis";
        $ukm->jam = "17.00-19.00 WIB";
        $ukm->tagline = "Where Toys Come to Life";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Street Dance";
        $ukm->photo = "assets/ukmnobg/senbud/sdbg.png";
        $ukm->info = "Let’s Dance (LDNC) adalah Unit Kegiatan Mahasiswa (UKM) yang berfokus di bidang tari. LDNC sendiri biasa dikenal dengan UKM street dance. Tujuan dibentuknya LDNC adalah menjadi tempat atau wadah untuk mahasiswa UMN yang tertarik dengan dunia tari, ada berbagai macam style yang akan dipelajari seperti: b-boy, locking, hip-hop, ladies, popping, dll";
        $ukm->ig = "streetdanceumn";
        $ukm->link = "http://www.instagram.com/streetdanceumn";
        $ukm->hari = "Kamis";
        $ukm->jam = "19.00-21.00 WIB";
        $ukm->tagline = "Dance to Your Own Beat";
        $ukm->bidang = "senbud";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "UMN Programming Club";
        $ukm->photo = "assets/ukmnobg/sainsos/umnpcbg.png";
        $ukm->info = "UMN PC (UMN Programming Club) adalah UKM yang melatih kemampuan CP (Competitive Programming) dengan tujuan mengasah logika dan daya pikir delchipier. Delchipier melakukan CP bersama-sama setiap minggunya dengan materi yang disusun untuk mengembangkan skill CP secara mendalam.";
        $ukm->ig = "umnprogrammingclub";
        $ukm->link = "http://www.instagram.com/umnprogrammingclub";
        $ukm->hari = "Senin & Kamis";
        $ukm->jam = "17.00-21.00 WIB";
        $ukm->tagline = "We Code The Future, Future Starts With Us";
        $ukm->bidang = "sainsos";
        $ukm->save();
        
        $ukm = new App\Ukm;
        $ukm->name = "UESC";
        $ukm->photo = "assets/ukmnobg/sainsos/uescbg.png";
        $ukm->info = "UESC (UMN English Student Council) sebagai salah satu UKM UMN berbahasa Inggris, ingin mengembangkan kemampuan berbahasa Inggris anggotanya. Dengan keempat divisi UESC yaitu Scrabble, Speech, Spelling Bee, dan Debate, banyak variasi keterampilan yang dapat kita semua asah.";
        $ukm->ig = "uesc_umn";
        $ukm->link = "http://www.instagram.com/uesc_umn";
        $ukm->hari = "Kamis";
        $ukm->jam = "17.00-21.00 WIB";
        $ukm->tagline = "So, You Think We ain't Fun?";
        $ukm->bidang = "sainsos";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Rencang";
        $ukm->photo = "assets/ukmnobg/sainsos/rencangbg.png";
        $ukm->info = "Rencang merupakan komunitas sosial yang menjadi wadah bagi mahasiswa/i UMN untuk dapat berdampak bagi masyarakat yang membutuhkan. Banyak program-program yang dilakukan untuk mencapai tujuan tersebut, seperti donor darah, kampanye sosial, berbagi kebahagiaan dengan orang yang membutuhkan, dan berbagai kegiatan yang mengakrabkan sesama anggota.";
        $ukm->ig = "rencangaye";
        $ukm->link = "http://www.instagram.com/rencangaye";
        $ukm->hari = "Selasa";
        $ukm->jam = "17.00-21.00 WIB";
        $ukm->tagline = "Unite as a Family to Manifest Love and Sincerity";
        $ukm->bidang = "sainsos";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Mapala";
        $ukm->photo = "assets/ukmnobg/sainsos/mapalabig.png";
        $ukm->info = "Mapala UMN merupakan organisasi yang berasaskan kekeluargaan, persaudaraan, persamaan, kemerdekaan, dan gotong royong, yang didasari oleh semangat kemanusiaan yang adil dan beradab. Mapala UMN bertujuan untuk memberikan wadah kepada Mahasiswa UMN yang berminat terhadap kegiatan alam yang keanggotaannya diatur dalam Anggaran Rumah Tangga.";
        $ukm->ig = "mapalaumn";
        $ukm->link = "http://www.instagram.com/mapalaumn";
        $ukm->hari = "Jumat";
        $ukm->jam = "17.00-21.00 WIB";
        $ukm->tagline = "Salam Lestari!";
        $ukm->bidang = "sainsos";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "GDC";
        $ukm->photo = "assets/ukmnobg/sainsos/gdcbg.png";
        $ukm->info = "Game Development Club adalah UKM yang merangkul mahasiswa yang berminat terhadap game development. Disini, mahasiswa dapat mengisi waktu mereka untuk mempelajari lebih dalam mengenai proses pembuatan game.";
        $ukm->ig = "gdcumn";
        $ukm->link = "http://www.instagram.com/gdcumn";
        $ukm->hari = "Rabu";
        $ukm->jam = "17.00-19.00 WIB";
        $ukm->tagline = "We Make Great Games! ";
        $ukm->bidang = "sainsos";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Lions Basket";
        $ukm->photo = "assets/ukmnobg/olahraga/basketbg.png";
        $ukm->info = "UMN Lions Basketball merupakan salah satu UKM yang berada di UMN, yang bergerak di bidang olahraga khususnya olahraga bola basket. Lions basketball ini sudah berdiri sejak 2010. Lions basketball ini memiliki tujuan sebagai wadah bagi para mahasiswa dan mahasiswi untuk dapat menunjukan potensi dan bakat mereka dalam bidang olahraga basket.";
        $ukm->ig = "umn_lions";
        $ukm->link = "http://www.instagram.com/umn_lions";
        $ukm->hari = "Senin, Rabu,& Jumat";
        $ukm->jam = "17.00-21.00 WIB";
        $ukm->tagline = "UMN Lions Jaya Jaya Luar Biasa";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Lions Badminton";
        $ukm->photo = "assets/ukmnobg/olahraga/badminbg.png";
        $ukm->info = "Lions badminton merupakan UKM di kampus UMN yang bergerak di bidang olahraga. Lions Badminton juga menjadi wadah bagi setiap mahasiswa/i untuk mengembangkan minat dan bakat mereka khususnya di bidang bulutangkis.";
        $ukm->ig = "lionsbadmintonumn";
        $ukm->link = "http://www.instagram.com/lionsbadmintonumn";
        $ukm->hari = "Rabu & Kamis";
        $ukm->jam = "18.00-22.00 WIB";
        $ukm->tagline = "Lions Badminton!";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Capoeira";
        $ukm->photo = "assets/ukmnobg/olahraga/capoeirabg.png";
        $ukm->info = "Di Capoeira UMN kami belajar bersama dan bermain bersama dengan santai.Capoeira UMN menerapkan Mix Method dimana kami belajar capoeira dicampur dengan tricking, yoga, akrobatik dan sebagainya.";
        $ukm->ig = "capoeiraumn";
        $ukm->link = "http://www.instagram.com/capoeiraumn";
        $ukm->hari = "Kamis";
        $ukm->jam = "17.30-21.00 WIB";
        $ukm->tagline = "É vou jogar!";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Fortius e-Sports";
        $ukm->photo = "assets/ukmnobg/olahraga/fortiusbg.png";
        $ukm->info = "Fortius E-Sport merupakan Unit Kegiatan Mahasiswa (UKM) yang ada di UMN yang ditujukan untuk mahasiswa/i dengan cabang olahraga E-Sport. Fortius berasal dari kata latin, dengan memiliki arti Sangat kuat.";
        $ukm->ig = "fortiusesports";
        $ukm->link = "http://www.instagram.com/fortiusesports";
        $ukm->hari = "Senin, Rabu, & Jumat";
        $ukm->jam = "19.00-21.00 WIB";
        $ukm->tagline = "Fight.Dominate.Win";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Lions Futsal";
        $ukm->photo = "assets/ukmnobg/olahraga/futsalbg.png";
        $ukm->info = "Lions Futsal adalah UKM olahraga futsal di UMN yang mewadahi mahasiswa ataupun mahasiswi untuk menyalurkan bakat atau hobi yang dimiliki.  Lions futsal juga aktif mengikuti kompetisi tingkat universitas. Lions Futsal pernah menjuarai beberapa kejuaraan baik internal maupun eksternal.";
        $ukm->ig = "lionsfutsal_umn";
        $ukm->link = "http://www.instagram.com/lionsfutsal_umn";
        $ukm->hari = "Senin & Jumat";
        $ukm->jam = "17.00-21.00 WIB";
        $ukm->tagline = "Lions Futsal UMN, Victory";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Tenis Meja";
        $ukm->photo = "assets/ukmnobg/olahraga/pingpongbg.png";
        $ukm->info = "UKM Tenis Meja adalah UKM yang ditujukan untuk mahasiswa/i yang tertarik untuk mempelajari tenis meja dan mengembangkan kemampuan untuk mengikuti kompetisi.";
        $ukm->ig = "ukmtenismeja.umn";
        $ukm->link = "http://www.instagram.com/ukmtenismeja.umn";
        $ukm->hari = "Selasan & Rabu";
        $ukm->jam = "17.00-19.00 WIB";
        $ukm->tagline = "Tenis Meja UMN!";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Softball";
        $ukm->photo = "assets/ukmnobg/olahraga/softballbg.png";
        $ukm->info = "Softball adalah unit kegiatan mahasiswa yang bergerak dalam bidang softball";
        $ukm->ig = "softballumn";
        $ukm->link = "http://www.instagram.com/softballumn";
        $ukm->hari = "Selasa & Rabu";
        $ukm->jam = "17.30-20.00 WIB";
        $ukm->tagline = "Softball UMN!";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Spectre";
        $ukm->photo = "assets/ukmnobg/olahraga/spectrebg.png";
        $ukm->info = "Spectre adalah UKM yang berfokus di bidang stunt action untuk dunia perfilman. Tujuan dari UKM ini adalah mengasah ilmu yang dibutuhkan oleh para anggota untuk berperforma di dunia perfilman dengan tingkat standar profesional. Ilmu tersebut terdiri dari teknik gerakan menyerang, jatuhan, aksi reaksi dan gun handling yang dicakup dari berbagai macam beladiri.";
        $ukm->ig = "usfxspectre";
        $ukm->link = "http://www.instagram.com/usfxspectre";
        $ukm->hari = "Rabu & Jumat";
        $ukm->jam = "17.00-21.00 WIB";
        $ukm->tagline = "USF ACTION!!!";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Lions Voli";
        $ukm->photo = "assets/ukmnobg/olahraga/volibg.png";
        $ukm->info = "Lions Volleyball merupakan salah satu UKM yang diselenggarakan oleh Universitas Multimedia Nusantara dalam cabang olahraga bola voli.Lions Volleyball sendiri mempunyai tagline 'Hustle Hit, Never Quit', dapat bisa diartikan dalam permainan ini, setiap pukulan yang didapat harus tetap bersikap rendah tetapi tidak menyerah.";
        $ukm->ig = "umnlionsvolleyball";
        $ukm->link = "http://www.instagram.com/umnlionsvolleyball";
        $ukm->hari = "Senin & Rabu";
        $ukm->jam = "17.00-21.00 WIB";
        $ukm->tagline = "Hustle Hit, Never Quit";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $ukm = new App\Ukm;
        $ukm->name = "Taekwondo UMN";
        $ukm->photo = "assets/ukmnobg/olahraga/taekwonbg.png";
        $ukm->info = "Taekwondo UMN merupakan Unit Kegiatan Mahasiswa yang mendukung mahasiswa UMN dalam melakukan bela diri Taekwondo. Taekwondo UMN juga  menghasilkan juara juara bertarung di berbagai tingkatan";
        $ukm->ig = "taekwondo_umn";
        $ukm->link = "http://www.instagram.com/taekwondo_umn";
        $ukm->hari = "Selasa & Kamis";
        $ukm->jam = "18.00-21.00 WIB";
        $ukm->tagline = "If You Worry About How , You Will Never Start";
        $ukm->bidang = "olahraga";
        $ukm->save();

        $kegiatan = new App\Kegiatan;
        $kegiatan->name = "U-FEST";
        $kegiatan->photo = "assets/kegiatan/logoufestbig.png";
        $kegiatan->info = "UMN Festival atau U-Fest adalah kegiatan mahasiswa di bawah naungan BEM UMN yang bertujuan untuk meningkatkan ikatan antar seluruh mahasiswa dari setiap jurusan dan angkatan lewat bidang olahraga, sosial, dan seni.";
        $kegiatan->ig = "umnfestival";
        $kegiatan->link = "http://www.instagram.com/umnfestival";
        $kegiatan->save();

        $kegiatan = new App\Kegiatan;
        $kegiatan->name = "MAXIMA";
        $kegiatan->photo = "assets/kegiatan/logomaximabig.png";
        $kegiatan->info = "MAXIMA atau Malam Ekspresi Mahasiswa adalah kegiatan dibawah naungan BEM UMN yang ditujukan untuk meningkatkan kesadaran dan partisipasi aktif mahasiswa serta menjalin hubungan, dikemas dalam wujud pementasan, pameran, uji coba UKM, dan pentas seni.";
        $kegiatan->ig = "maximaumn";
        $kegiatan->link = "http://www.instagram.com/maximaumn";
        $kegiatan->save();

        $kegiatan = new App\Kegiatan;
        $kegiatan->name = "MR. & MS. UMN";
        $kegiatan->photo = "assets/kegiatan/logomrmsbig.png";
        $kegiatan->info = "Mr. & Ms. UMN merupakan kegiatan mahasiswa yang berada dibawah naungan BEM UMN dengan tujuan untuk mencari duta bagi Universitas Multimedia Nusantara.";
        $kegiatan->ig = "mrmsumn";
        $kegiatan->link = "http://www.instagram.com/mrmsumn";
        $kegiatan->save();

        $kegiatan = new App\Kegiatan;
        $kegiatan->name = "STARLIGHT";
        $kegiatan->photo = "assets/kegiatan/logostarlightbig.png";
        $kegiatan->info = "Starlight merupakan salah satu program kerja dari BEM UMN dimana para pelajar baik internal maupun eksternal UMN dapat berkompetisi dengan menunjukkan kebolehannya untuk menampilkan bakat mereka di kegiatan ini.";
        $kegiatan->ig = "starlightumn";
        $kegiatan->link = "http://www.instagram.com/starlightumn";
        $kegiatan->save();

        $kegiatan = new App\Kegiatan;
        $kegiatan->name = "BANK SAMPAH";
        $kegiatan->photo = "assets/kegiatan/logobanksampahbig.png";
        $kegiatan->info = "Bank Sampah adalah kegiatan mahasiswa di bawah naungan BEM UMN yang bertujuan untuk membangun kesadaran mahasiswa akan pentingnya lingkungan yang sehat dan bebas dari sampah.";
        $kegiatan->ig = "banksampah_umn";
        $kegiatan->link = "http://www.instagram.com/banksampah_umn";
        $kegiatan->save();

        $kegiatan = new App\Kegiatan;
        $kegiatan->name = "OMB UMN";
        $kegiatan->photo = "assets/kegiatan/logoombbig.png";
        $kegiatan->info = "Orientasi Mahasiswa Baru Universitas Multimedia Nusantara atau OMB UMN adalah kegiatan mahasiswa dibawah naungan BEM UMN yang bertujuan memberi bekal untuk masa pendidikan mahasiswa baru Universitas Multimedia Nusantara.";
        $kegiatan->ig = "ombumn";
        $kegiatan->link = "http://www.instagram.com/ombumn";
        $kegiatan->save();

        $lso = new App\Lso;
        $lso->name = "RUMPIN";
        $lso->photo = "assets/lso/logorumpinbig.png";
        $lso->info1 = "Rumpin merupakan sebuah LSO yang bergerak pada bidang sosial dan berfokus pada pendidikan. Dengan tagline “Together, Inspire for the Future”, kami percaya bahwa pendidikan dapat membantu mengubah masa depan. Tujuan utama Rumpin saat ini adalah memberikan bantuan untuk anak-anak yang masih belum mendapatkan pengetahuan dan edukasi yang layak. Kami juga mau menjadi wadah bagi mahasiswa Universitas Multimedia Nusantara untuk menyalurkan jiwa social mereka kepada anak-anak yang membutuhkan.";
        $lso->info2 = "Rumpin juga telah melaksanakan beberapa kegiatan sosial yang melibatkan mahasiswa Universitas Multimedia Nusantara sendiri dan menyalurkan bantuan ke beberapa lembaga, panti asuhan dan sekolah yang membutuhkan.";
        $lso->info3 = "";
        $lso->ig = "rumpin_umn";
        $lso->link = "http://www.instagram.com/rumpin_umn";
        $lso->save();

        $lso = new App\Lso;
        $lso->name = "U-BIZ";
        $lso->photo = "assets/lso/logoubizbig.png";
        $lso->info1 = "U-BIZ adalah organisasi bisnis dari mahasiswa untuk mahasiswa yang bertujuan meningkatkan jiwa kewirausahaan mahasiswa. Adapun U-BIZ UMN memiliki dua departemen.";
        $lso->info2 = "Pertama, Departemen U-BIZ Walkneat sebagai salah satu unit bisnis yang dimiliki oleh organisasi Ubiz. Memberikan mahasiswa kesempatan untuk mencoba terjun ke dunia bisnis secara langsung dengan menjalankan bisnis dalam bidang pelayanan cuci sepatu.";      
        $lso->info3 = "Kedua, Departemen Komunitas sebagai wadah mahasiswa untuk mengembangkan potensi diri dalam dunia bisnis dengan bantuan pengetahuan, sharing dan konsultasi dari Organisasi Ubiz.";      
        $lso->ig = "ubizumn";
        $lso->link = "http://www.instagram.com/ubizumn";
        $lso->save();

        $lso = new App\Lso;
        $lso->name = "DUTA ANTI NARKOBA";
        $lso->photo = "assets/lso/logodunarbig.png";
        $lso->info1 = "Duta Anti Narkoba atau Dunar merupakan Lembaga Semi Otonom yang berada dibawah naungan Badan Eksekutif Mahasiswa. Dunar dibentuk tahun 2016 dan  berhasil mempertahankan eksistensinya sampai saat ini dengan mewujudkan peraturan kampus yang menentang segala bentuk penyalahgunaan narkoba di lingkungan kampus UMN. Kegiatan internal Dunar berupa Seminar, Anti Narkoba Week, HANI, Awarding Night serta beberapa kegiatan kecil lainnya.";
        $lso->info2 = "Selain itu, kegiatan eksternal Dunar berupa kerjasama dengan berbagai organisasi luar seperti Fornasmapan dan Artipena. Dunar bertujuan untuk memberikan edukasi, membuat program - program menarik sepanjang tahun serta membagikan pengalaman berkesan bagi mahasiswa/i UMN.";      
        $lso->info3 = "";      
        $lso->ig = "dutaantinarkoba.umn";
        $lso->link = "http://www.instagram.com/dutaantinarkoba.umn";
        $lso->save();

        $lso = new App\Lso;
        $lso->name = "UMN MEDIC";
        $lso->photo = "assets/lso/logomedicbig.png";
        $lso->info1 = "UMN Medical Center merupakan suatu lembaga semi otonom yang berdiri di bawah pengawasan BEM dan bergerak di bidang kesehatan. Saat ini UMN medical Center sudah memiliki VI generasi yang sekarang dijalankan oleh generasi ke VI.";
        $lso->info2 = "Dengan tagline “Spread Health through Happiness”, UMN Medical Center mengajak seluruh Civitas akademika UMN untuk menjaga kesehatan dengan memberikan pertolongan pertama dan edukasi kepada civitas akademika UMN mengenai pentingnya menjaga kesehatan dan peduli kepada sesama melalui kampanye - kampanye interaktif serta seminar mengenai kesehatan. Selain itu, UMN Medical Center juga belajar mengenai kekeluargaan melalui berbagai kegiatan yang menyenangkan.";      
        $lso->info3 = "";      
        $lso->ig = "umnmedicalcenter";
        $lso->link = "http://www.instagram.com/umnmedicalcenter";
        $lso->save();

        $lso = new App\Lso;
        $lso->name = "KOMPAS CORNER";
        $lso->photo = "assets/lso/logokomcorbig.png";
        $lso->info1 = "Kompas Corner merupakan Lembaga Semi Otonom (LSO) yang telah berdiri selama 7 tahun sejak Mei 2013 dan berada di bawah direct supervision dari Harian Kompas. Kegiatan yang dijalankan oleh Kompas Corner antara lain, melakukan media visit, membuat podcast dan webseries, menyelenggarakan event di bawah naungan Harian Kompas serta menjadi media partner.";
        $lso->info2 = "Kompas Corner juga memiliki ruangan yang dapat diakses setiap hari Senin - Kamis pukul 09.00 - 17.00 dan 09.00 - 15.00 di hari Jumat oleh seluruh mahasiswa Universitas Multimedia Nusantara dan dapat dijadikan wadah untuk berdiskusi, bermain, membaca buku, hingga mengakses Kompas Data.";      
        $lso->info3 = "";      
        $lso->ig = "kompascorner";
        $lso->link = "http://www.instagram.com/kompascorner";
        $lso->save();

        $lso = new App\Lso;
        $lso->name = "U-STORE";
        $lso->photo = "assets/lso/logoustorebig.png";
        $lso->info1 = "U-Store merupakan koperasi mahasiswa berbadan hukum, beroperasi sejak tahun 2015 dan terletak di Gedung C lantai 1 Universitas Multimedia Nusantara. U-Store menyediakan berbagai kebutuhan untuk menunjang kegiatan perkuliahan dan gaya hidup sehari-hari.";
        $lso->info2 = "U-Store menjual produk otentik yang berciri khas Universitas Multimedia Nusantara seperti kaos, hoodie, lanyard, pin, dll. U-Store juga menyediakan jasa vendor bagi organisasi ataupun mahasiswa yang membutuhkan. Jasa ini dapat digunakan untuk memproduksi barang-barang keperluan organisasi. Selain itu, U-Store juga menyediakan jasa penyewaan Handie Talkie (HT) bagi organisasi maupun mahasiswa. U-Store selalu membuka kepengurusan baru setiap tahunnya untuk menghadirkan berbagai inovasi di masa yang akan datang.";      
        $lso->info3 = "";      
        $lso->ig = "kopmaustore";
        $lso->link = "http://www.instagram.com/kopmaustore";
        $lso->save();

        $contact = new App\Contact;
        $contact->name = "Herlan Apriyano";
        $contact->phone = "081316000414";
        $contact->save();

        $contact = new App\Contact;
        $contact->name = "Hanna Christine K";
        $contact->phone = "082192369813";
        $contact->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "I'M KOM";
    //     $himp->photo = "assets/himp/logo/imkom.svg";
    //     $himp->fakultas = "Ilkom";
    //     $himp->info1 = "I’M KOM merupakan himpunan mahasiswa yang berada di bawah naungan Fakultas Ilmu Komunikasi yang secara langsung membawahi dua program studi, Strategic Communication dan Multimedia Journalism, I’M KOM menjadi satu-satunya himpunan mahasiswa di tingkat fakultas. I'M KOM berperan aktif dalam perkuliahan untuk membantu menjadi jembatan penghubung mahasiswa dengan pihak Program Studi.";
    //     $himp->info2 = "I'M KOM terus memberikan yang terbaik sehingga berdampak nyata dalam kehidupan perkuliahan dengan melaksanakan berbagai macam kegiatan seperti Communication Festival, PRIDE, COMMPRESS, FIKOM NIGHT, OMB Konten Prodi Ilmu Komunikasi, dan lainnya. Dengan rangkaian kegiatan yang diadakan, mahasiswa diharapkan mendapatkan pengalaman dalam berorganisasi yang dibutuhkan dalam dunia kerja.";
    //     $himp->ig = "IMKOM UMN";
    //     $himp->linkig = "http://www.instagram.com/imkom_umn";
    //     $himp->line = "@nkj4600e";
    //     $himp->linkline = "http://line.me/ti/p/~@nkj4600e";
    //     $himp->web = "imkom.umn.ac.id";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "HMDKV";
    //     $himp->photo = "assets/himp/logo/hmdkv.svg";
    //     $himp->fakultas = "FSD";
    //     $himp->info1 = "Himpunan Desain Komunikasi Visual Universitas Multimedia Nusantara
    //     (HMDKV UMN) merupakan organisasi yang beranggotakan seluruh
    //     mahasiswa DKV UMN. Asal mula HMDKV berawal dari HMFSD
    //     (Himpunan Fakultas Seni dan Desain) yang terpecah menjadi 3
    //     himpunan
    //     dari masing-masing jurusan pada Fakultas Seni dan Desain pada tahun
    //     2017, yaitu HMDKV (Desain Komunikasi Visual), HMFILM (Film dan
    //     Televisi), dan HIMARS (Arsitektur). ";
    //     $himp->info2 = "HMDKV UMN menjadi wadah untuk
    //     menghimpun mahasiswa Desain Komunikasi Visual Universitas
    //     Multimedia Nusantara dan menjadi jembatan dalam pengembangan
    //     kepentingan akademik dan non akademik yang bertujuan untuk
    //     meningkatkan prestasi, mendukung ekspresi, serta kesejahteraan
    //     mahasiswa DKV UMN.";
    //     $himp->ig = "hmdkv_umn";
    //     $himp->linkig = "http://www.instagram.com/hmdkv_umn";
    //     $himp->line = "@ybc1316s";
    //     $himp->linkline = "http://line.me/ti/p/~@ybc1316s";
    //     $himp->web = "-";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "HMFILM";
    //     $himp->photo = "assets/himp/logo/hmftv.svg";
    //     $himp->fakultas = "FSD";
    //     $himp->info1 = "Himpunan Mahasiswa Film atau akrab disebut dengan HMFilm
    //     merupakan organisasi yang menjadi penghubung antar mahasiswa, dosen
    //     program studi dan kemahasiswaan sehingga dapat terjalin hubungan yang baik.
    //     HMFilm ini terbentuk pada tanggal 5 Desember 2017. Pada tahun 2020, HMFilm
    //     memasuki generasi kedua sebagai organisasi dalam Prodi Film.";
    //     $himp->info2 = "Tugas HMFilm adalah menyediakan forum bagi mahasiswa Film dalam
    //     menuangkan aspirasi dan mengembangkan potensi berdasarkan minat yang
    //     sama. Selain itu, HMFilm juga berperan dalam mendekatkan hubungan antar
    //     mahasiswa, memperluas koneksi, dan melaksanakan kegiatan kemahasiswaan
    //     yang menjunjung tanggung jawab dan kebersamaan.";
    //     $himp->ig = "hmfilm_umn";
    //     $himp->linkig = "http://www.instagram.com/hmfilm_umn";
    //     $himp->line = "@msn8043i";
    //     $himp->linkline = "http://line.me/ti/p/~@msn8043i";
    //     $himp->web = "-";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "HIMARS";
    //     $himp->photo = "assets/himp/logo/himars.svg";
    //     $himp->fakultas = "FSD";
    //     $himp->info1 = "Himpunan Mahasiswa Arsitektur Universitas Multimedia Nusantara (HIMARS) adalah organisasi kemahasiswaan yang mewadahi dan menggerakkan kreativitas serta aktivitas mahasiswa. HIMARS diresmikan pada 5 Desember 2018. ";
    //     $himp->info2 = " HIMARS memiliki visi mahasiswa arsitektur UMN dapat proaktif di berbagai bidang dalam lingkup internal dan eksternal kampus serta membangun solidaritas antar sesama mahasiswa. Misi HIMARS adalah sarana yang menyalurkan aspirasi mahasiswa arsitektur UMN, memperluas hubungan baik internal maupun eksternal, serta meningkatkan kemampuan dalam berorganisasi yang dikemas dalam seluruh Program kerja HIMARS.";
    //     $himp->ig = "himars_umn";
    //     $himp->linkig = "http://www.instagram.com/himars_umn";
    //     $himp->line = "@daj7387i";
    //     $himp->linkline = "http://line.me/ti/p/~@daj7387i";
    //     $himp->web = "-";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "HIMFERA";
    //     $himp->photo = "assets/himp/logo/himfera.svg";
    //     $himp->fakultas = "FTI";
    //     $himp->info1 = "Himpunan Mahasiswa Teknik Fisika dan Teknik Elektro Universitas Multimedia Nusantara (HIMFERA) merupakan organisasi yang menampung aspirasi dan menjalankan program kerja bagi seluruh mahasiswa Teknik Fisika dan Teknik Elektro di UMN. HIMFERA Generasi 0 dibentuk pada 5 Desember 2017. ";
    //     $himp->info2 = "HIMFERA Gen 2 terdiri dari Badan Pengurus Harian, Divisi Akademik, Divisi Non Akademik, Divisi Humas, dan Divisi Desain Visual. Setiap divis mengurus program kerja sesuai dengan bidangnya. Program kerja dibuat berdasarkan kebutuhan dan aspirasi mahasiswa Teknik Fisika dan Teknik Elektro.";
    //     $himp->ig = "himfera_umn";
    //     $himp->linkig = "http://www.instagram.com/himfera_umn";
    //     $himp->line = "@636jllsn";
    //     $himp->linkline = "http://line.me/ti/p/~@636jllsn";
    //     $himp->web = "-";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "HMIF";
    //     $himp->photo = "assets/himp/logo/hmif.svg";
    //     $himp->fakultas = "FTI";
    //     $himp->info1 = "Himpunan Mahasiswa Informatika Universitas Multimedia Nusantara (HMIF) merupakan organisasi resmi kemahasiswaan pada tingkat program studi sebagai eksekutor yang bernaung di bawah Wakil Rektor III Bidang kemahasiswaan Universitas Multimedia Nusantara. ";
    //     $himp->info2 = "HMIF bersifat mandiri, kekeluargaan, adil, aspiratif, partisipatif, representatif, efektif, efisien, beserta transparan. HMIF diselenggarakan berdasarkan prinsip dari, oleh, dan untuk mahasiswa Informatika dengan memberi peranan serta keleluasaan lebih kepada mahasiswa.";
    //     $himp->ig = "hmif.umn";
    //     $himp->linkig = "http://www.instagram.com/hmif.umn";
    //     $himp->line = "@hmif.umn";
    //     $himp->linkline = "http://line.me/ti/p/~@hmif.umn";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "ACES";
    //     $himp->photo = "assets/himp/logo/aces.svg";
    //     $himp->fakultas = "FTI";
    //     $himp->info1 = "ACES (Association of Computer Engineering Students) adalah himpunan mahasiswa Teknik Komputer UMN, dibentuk pada tanggal 8 Desember 2007. Tugas dan Kewajiban ACES adalah melayani dan membantu kendala-kendala yang dimiliki oleh anggota-anggota ACES. ";
    //     $himp->info2 = "Pada gen 9, nama ACES berubah dari Himasikom (Himpunan Mahasiswa Sistem Komputer) dengan alasan Himasikom program studi kami juga mengalami perubahan nama dari Sistem Komputer menjadi Teknik Komputer. ACES juga mengadakan beberapa proker yang diharapkan bisa membantu memberikan gambaran mengenai kehidupan perkuliahan di prodi Teknik Komputer.";
    //     $himp->ig = "acesumn";
    //     $himp->linkig = "http://www.instagram.com/acesumn";
    //     $himp->line = "@acesumn";
    //     $himp->linkline = "http://line.me/ti/p/~@acesumn";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "HIMSI";
    //     $himp->photo = "assets/himp/logo/himsi.svg";
    //     $himp->fakultas = "FTI";
    //     $himp->info1 = "Himpunan Mahasiswa Sistem Informasi Universitas Multimedia Nusantara (HIMSI) didirikan pada tahun 2007, yaitu pada saat angka pertama mahasiswa Universitas Multimedia Nusantara dengan nama D'Information System Community. DISC merupakan HMJ Sistem Informasi "Generasi Nol".";
    //     $himp->info2 = "Pada tahun 2010, DISC mengalami perubahan sebutan menjadi HIMSI. HIMSI Generasi 10 beranggotakan 16 orang orang mahasiswa sistem informasi terpilih untuk bertugas mengabdi kepada keluarga besar mahasiswa sistem informasi berdasarkan asas kekeluargaan.";
    //     $himp->ig = "umn_si";
    //     $himp->linkig = "http://www.instagram.com/umn_si";
    //     $himp->line = "@umn_si";
    //     $himp->linkline = "http://line.me/ti/p/~@umn_si";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "";
    //     $himp->photo = "";
    //     $himp->fakultas = "";
    //     $himp->info1 = "";
    //     $himp->info2 = "";
    //     $himp->ig = "";
    //     $himp->linkig = "";
    //     $himp->line = "";
    //     $himp->linkline = "";
    //     $himp->web = "";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "";
    //     $himp->photo = "";
    //     $himp->fakultas = "";
    //     $himp->info1 = "";
    //     $himp->info2 = "";
    //     $himp->ig = "";
    //     $himp->linkig = "";
    //     $himp->line = "";
    //     $himp->linkline = "";
    //     $himp->web = "";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "";
    //     $himp->photo = "";
    //     $himp->fakultas = "";
    //     $himp->info1 = "";
    //     $himp->info2 = "";
    //     $himp->ig = "";
    //     $himp->linkig = "";
    //     $himp->line = "";
    //     $himp->linkline = "";
    //     $himp->web = "";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "";
    //     $himp->photo = "";
    //     $himp->fakultas = "";
    //     $himp->info1 = "";
    //     $himp->info2 = "";
    //     $himp->ig = "";
    //     $himp->linkig = "";
    //     $himp->line = "";
    //     $himp->linkline = "";
    //     $himp->web = "";
    //     $himp->save();

    //     $himp = new App\Himpunan;
    //     $himp->name = "";
    //     $himp->photo = "";
    //     $himp->fakultas = "";
    //     $himp->info1 = "";
    //     $himp->info2 = "";
    //     $himp->ig = "";
    //     $himp->linkig = "";
    //     $himp->line = "";
    //     $himp->linkline = "";
    //     $himp->web = "";
    //     $himp->save();

    }
}
