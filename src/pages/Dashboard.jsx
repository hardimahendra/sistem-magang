import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
const Dashboard = () => {
  return (
    <>
    <SideBar/>
    <Navbar/>
    <Outlet/>
    <Footer/>
      {/* 
      <div className="container">
        <div className="content-dashboard">
          <div className="riwayat-magang">
            <h5 className="fw-bold pb-2">Riwayat Magang</h5>
            <div className="info-waktu">
              <p className="waktu">01-08-21 - 01-09-2021</p>
              <div className="info-lokasi">
                <p>PT. Daekyoung Indah Heavy Industri</p>
                <p>Kota Cilegon, Banten - Indonesia</p>
              </div>
            </div>
            <div className="info-waktu">
              <p className="waktu">01-10-2021 - 01-12-2021</p>
              <div className="info-lokasi">
                <p>Universitas Singaperbangsa Karawang</p>
                <p>Karawang, Jawa Barat - Indonesia</p>
              </div>
            </div>
            <div className="info-detail">
              <a href="#" className="btn btn-primary">
                Detail
              </a>
            </div>
          </div> 
          <div className="laporan-magang">
            <h5 className="fw-bold pb-2">Laporan Magang</h5>
            <div className="pdf-file">
              <p className="waktu">01-08-21 - 01-09-20211</p>
              <a href="#">
                <i className="bx bxs-file-pdf"></i>
              </a>
            </div>
            <div className="pdf-file">
              <p className="waktu">01-10-2021 - 01-12-2021</p>
              <a href="#">
                <i className="bx bxs-file-pdf"></i>
              </a>
            </div>
            <div className="info-detail">
              <a href="/laporan" className="btn btn-primary">
                Detail
              </a>
            </div>
          </div>
           <div className="form-content">
            <div>
              <h5>Magang Umum</h5>
              <h6 className="fw-bold">Tahap Pendaftaran Magang</h6>
              <div>
                <i className="bx bx-caret-right"></i>
                <a href="#">Form Permohonan Magang</a>
              </div>
              <div>
                <i className="bx bx-caret-right"></i>
                <a href="#">Form Plot Pembimbing</a>
              </div>
              <div>
                <i className="bx bx-caret-right"></i>
                <a href="#">Surat Protokol dan Pertanggung Jawaban Covid-19 Luring/Onsite/WFH</a>
              </div>
              <div>
                <i className="bx bx-caret-right"></i>
                <a href="#">Surat Protokol dan Pertanggung Jawaban Covid-19 Daring/WFH</a>
              </div>
            </div>
            <div>
              <h5>Magang Kompetisi</h5>
              <h6 className="fw-bold">Tahap Pendaftaran Magang Tipe Kompetisi</h6>
              <div>
                <i className="bx bx-caret-right"></i>
                <a href="#">Form Permohonan Magang Tipe Kompetisi</a>
              </div>
              <div>
                <i className="bx bx-caret-right"></i>
                <a href="#">Form Plot Pembimbing Tipe Kompetisi</a>
              </div>
            </div>
            <div className="info-detail">
              <a href="/daftar" className="btn btn-primary">
                Detail
              </a>
                <Link to="/daftar" className="btn btn-primary">Detail</Link>
            </div>
          </div>
        </div>
      </div>
           */}
    </>
  );
};
export default Dashboard;
