import { Component } from '@angular/core';


type userInfo = {
  name:string;
  des: string;
}


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})


export class MyProfileComponent {
  userInfo : userInfo[] = [
    {
      name: "Tên",
      des : "Doãn Thị Hồng Hạnh"
    },
    {
      name: "UserName",
      des : "hanhdoan1999"
    },
    {
      name: "Email",
      des : "doanhonghanh.1999@gmail.com"
    },
    {
      name: "Số điện thoại",
      des : "033354789520"
    },
    {
      name: "Địa chỉ",
      des : "Tòa nhà Mitec, Tầng 8 Dương Đình Nghệ, Yên Hoà, Cầu Giấy, Hà Nội"
    },
    
  ]
}
