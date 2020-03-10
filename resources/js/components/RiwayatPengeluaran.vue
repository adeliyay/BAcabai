<template>
    <div class="container">
        <div class="row mt-5">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Rincian Biaya Pengeluaran</h3>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tbody>
                    <tr>
                        <th>Kode Lahan</th>
                        <th>Jumlah Pengeluaran</th>
                        <th>Tanggal</th>
                        <th>Rincian</th>
                        <th>Action</th>
                  </tr>
                <!-- START PASANG LOOPING DATA DISINI -->
                  <tr>
                    <td>P12</td>
                    <td>1.000.000</td>
                    <td>03-02-2020</td>
                    <td>pembelian pupuk</td>
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
                    <td>P12</td>
                    <td>1.000.000</td>
                    <td>04-02-2020</td>
                    <td>pembelian pestisida</td>
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
                    <td>1.000.000</td>
                    <td>09-02-2020</td>
                    <td>pembelian Alat Tani</td>
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
                    <td>1.000.000</td>
                    <td>10-02-2020</td>
                    <td>Lainnya</td>
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
              </div>
            </div>
            <!-- /.card -->
          </div>
        </div>
    </div>

</template>
