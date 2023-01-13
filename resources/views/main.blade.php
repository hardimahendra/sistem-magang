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
        <h4>Dashboard</h4>
        <div class="content-dashboard">
        <div class="riwayat-magang">
            <h5 class="fw-bold pb-2">Riwayat Magang</h5>
            <div class="info-waktu">
                <p class="waktu">01-08-21 - 01-09-2021</p>
                <div class="info-lokasi">
                    <p>PT. Daekyoung Indah Heavy Industri</p>
                    <p>Kota Cilegon, Banten - Indonesia</p>
                </div>
            </div>
            <div class="info-waktu">
                <p class="waktu">01-10-2021 - 01-12-2021</p>
               <div class="info-lokasi">
               <p>Universitas Singaperbangsa Karawang</p>
               <p>Karawang, Jawa Barat - Indonesia</p>
              </div>
            </div>
            <div class="info-detail">
                <a href="#" class="btn btn-primary">Detail</a>
            </div>
        </div>
        <div class="laporan-magang">
            <h5 class="fw-bold pb-2">Laporan Magang</h5>
            <div class="pdf-file">
                <p class="waktu">01-08-21 - 01-09-20211</p>
                <a href="#">
                    <i class="bx bxs-file-pdf"></i>
                </a>
            </div>
            <div class="pdf-file">
                <p class="waktu">01-10-2021 - 01-12-2021</p>
                <a href="#">
                    <i class="bx bxs-file-pdf"></i>
                </a>
            </div>
            <div class="info-detail">
                <a href="{{ url('/laporan-magang') }}" class="btn btn-primary">Detail</a>
            </div>
        </div>
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
            <div class="info-detail">
                <a href="{{ url('/magang') }}" class="btn btn-primary">Detail</a>
            </div>
        </div>
        </div>
    </div>  
</body>
</html>