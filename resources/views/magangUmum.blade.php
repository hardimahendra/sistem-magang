<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Magang | UNSIKA</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" rel="stylesheet" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body id="body-pd">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <script src="{{ asset('js/main.js') }}"></script>  

    <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <div class="tentang-mahasiswa">
                <p>Hardi Mahendra</p>
                <p>18002</p>
        </div>
        <div class="header_img" >
                <img src="img/hardi.jpg" alt="profil">
        </div>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> 
                <a href="{{ url('/') }}" class="nav_logo"> 
                    <img width="25" src="img/unsika-logo.png">
                    <span class="nav_logo-name">UNSIKA</span> 
                </a>
                <div class="nav_list">
                    <a href="{{ url('/') }}" class="nav_link active">
                        <i class='bx bx-grid-alt nav_icon'></i>
                        <span class="nav_name">Dashboard</span> 
                    </a>
                    <a href="{{ url('/laporan-magang') }}" class="nav_link">
                        <i class='bx bx-book-reader nav_icon'></i>
                        <span class="nav_name">Laporan Magang</span> 
                    </a>
                    <a href="{{ url('/magang') }}" class="nav_link">
                        <i class='bx bx-detail nav_icon'></i>
                        <span class="nav_name">Daftar Magang</span> 
                    </a>
                </div>
            </div> 
            <a href="#" class="nav_link"> 
                <i class='bx bx-log-out nav_icon'></i> 
                <span class="nav_name">SignOut</span> 
            </a>
        </nav>
    </div>
    <div class="container">
        <h4>Magang Umum</h4>
        <div class="content-magang">
            <div class="form-content">
                <div>
                    <h5>Magang Umum</h5>
                    <h6 class="fw-bold">Tahap Pendaftaran Magang</h6>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Form Permohonan Magang</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Form Plot Pembimbing</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Surat Protokol dan Pertanggung Jawaban Covid-19 Luring/Onsite/WFH</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Surat Protokol dan Pertanggung Jawaban Covid-19 Daring/WFH</a>
                    </div>
                </div>
                <div>
                    <h6 class="fw-bold">Tahap Persiapan Magang</h6>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Dokumen Kesepakatan Magang</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Dokumen Kecukupan Magang</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Dokumen Kelengkapan Magang</a>
                    </div>
                </div>
                <div>
                    <h6 class="fw-bold">Tahap Pelaksanaan Magang</h6>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Surat Perpanjangan Magang</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Surat Keterangan Selesai Magang</a>
                    </div>
                </div>
                <div>
                    <h6 class="fw-bold">Tahap Pelaporan Magang</h6>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Lembar Penilaian</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Ungguh Laporan Magang</a>
                    </div>
                </div>
            </div>
            <div class="form-content">
                <div>
                    <h5>Magang Kompetisi</h5>
                    <h6 class="fw-bold">Tahap Pendaftaran Magang Tipe Kompetisi</h6>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Form Permohonan Magang Tipe Kompetisi</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Form Plot Pembimbing Tipe Kompetisi</a>
                    </div>
                </div>
                <div>
                    <h6 class="fw-bold">Tahap Persiapan Magang Tipe Kompetisi</h6>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Kelengkapan Magang Tipe Kompetisi</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Surat Keterangan Selesai Magang Tipe Kompetisi</a>
                    </div>
                </div>
                <div>
                    <h6 class="fw-bold">Tahap Pelaksanaan Magang Tipe Kompetisi</h6>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Lembar Aktivitas Magang</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Lembar Bimbingan Magang</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Surat Keterangan Selesai Magang</a>
                    </div>
                </div>
                <div>
                    <h6 class="fw-bold">Tahap Pelaporan Magang</h6>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Form Unggah Laporan Magang</a>
                    </div>
                    <div>
                        <i class="bx bx-caret-right"></i>
                        <a href="#">Lembar Penilaian Magang</a>
                    </div>
                </div>
            </div>
        </div>


    </div>  
</body>
</html>