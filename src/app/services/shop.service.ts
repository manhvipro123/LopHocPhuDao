import { Injectable } from '@angular/core';
import {SanPhamModel} from "../models/sanpham.model";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  danhSachSanPham: SanPhamModel[] = [];

  gioHang: SanPhamModel[] = [];

  tongTien: number = 0;

  constructor() { }

  themSanPham(sanPham: SanPhamModel){
    this.danhSachSanPham.push(sanPham);
    console.log(this.danhSachSanPham);
  }

  xoaSanPham(index:number){
    this.danhSachSanPham.splice(index,1);
  }

  boGioHang(sanPham: SanPhamModel){
    this.gioHang.push(sanPham);
  }

  thanhToan(){
    this.tongTien = 0;
    this.gioHang.forEach(sp => {
      this.tongTien += ( sp.gia * sp.soLuong);
    });
    this.gioHang = [];
  }

}
