<template>
    <div class="container">
        <div class="row mt-5">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Manajemen Lahan</h3>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tbody>
                    <tr>
                        <th>Kode Lahan</th>
                        <th>Jenis Cabai</th>
                        <th>Luas Lahan</th>
                        <th>Lokasi</th>
                        <th>Tanggal tanam</th>
                        <th>Total Pengeluaran</th>
                        <th>Action</th>
                  </tr>
                <!-- START PASANG LOOPING DATA DISINI -->
                  <tr>
                    <td>P12</td>
                    <td>Cabai Keriting</td>
                    <td>2 ha</td>
                    <td>Bogor</td>
                    <td>01-02-2020</td>
                    <td>2.000.000</td>
                    <td>
                        <a href="#">
                            <i class="fa fa-edit blue"></i>
                        </a>
                        /
                        <a href="#">
                            <i class="fa fa-trash red"></i>
                        </a>

                    </td>
                  </tr>
                  <tr>
                    <td>P11</td>
                    <td>Cabai Besar</td>
                    <td>10 ha</td>
                    <td>Garut</td>
                    <td>02-02-2020</td>
                    <td>2.030.000</td>
                    <td>
                        <a href="#">
                            <i class="fa fa-edit blue"></i>
                        </a>
                        /
                        <a href="#">
                            <i class="fa fa-trash red"></i>
                        </a>

                    </td>
                  </tr>
                  <tr>
                    <td>P90</td>
                    <td>Cabai Rawit</td>
                    <td>3 ha</td>
                    <td>Bekasi</td>
                    <td>09-02-2020</td>
                    <td>2.110.000</td>
                    <td>
                        <a href="#">
                            <i class="fa fa-edit blue"></i>
                        </a>
                        /
                        <a href="#">
                            <i class="fa fa-trash red"></i>
                        </a>

                    </td>
                  </tr>
                  <tr>
                    <td>P70</td>
                    <td>Cabai Rawit</td>
                    <td>3 ha</td>
                    <td>Cianjur</td>
                    <td>10-02-2020</td>
                    <td>6.000.000</td>
                    <td>
                        <a href="#">
                            <i class="fa fa-edit blue"></i>
                        </a>
                        /
                        <a href="#">
                            <i class="fa fa-trash red"></i>
                        </a>

                    </td>
                  </tr>
                  <tr>
                    <td>P29</td>
                    <td>Cabai Rawit</td>
                    <td>3 ha</td>
                    <td>Sukabumi</td>
                    <td>11-02-2020</td>
                    <td>2.230.000</td>
                    <td>
                        <a href="#">
                            <i class="fa fa-edit blue"></i>
                        </a>
                        /
                        <a href="#">
                            <i class="fa fa-trash red"></i>
                        </a>

                    </td>
                  </tr>
                <!-- END PASANG LOOPING DATA DISINI -->
                </tbody></table>

              </div>
              <div class="card-tools">
                    <button class="btn btn-success" @click="newModal">Tambahkan Pra produksi<i ></i></button>
                    <button class="btn btn-success" @click="newModal">Tambahkan Pengeluaran<i ></i></button>
                </div>
              </div>
            </div>
            <!-- /.card -->
          </div>
        </div>
    </div>

</template>
