b<?php

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

        $generasi = new App\Generasi;
        $generasi->name = "gen x";
        $generasi->photo = "assets/aboutus/au10.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen ix";
        $generasi->photo = "assets/aboutus/au9.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen viii";
        $generasi->photo = "assets/aboutus/au8.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen vii";
        $generasi->photo = "assets/aboutus/au7.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen vi";
        $generasi->photo = "assets/aboutus/au6.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen v";
        $generasi->photo = "assets/aboutus/au5.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen iv";
        $generasi->photo = "assets/aboutus/au4.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen iii";
        $generasi->photo = "assets/aboutus/au3.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen ii";
        $generasi->photo = "assets/aboutus/au2.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen i";
        $generasi->photo = "assets/aboutus/au1.png";
        $generasi->save();

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
    }
}
