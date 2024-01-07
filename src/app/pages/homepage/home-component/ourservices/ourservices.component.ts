import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {

  serviceData = [
    {
      title: "LINE Messenger",
      des: "แอพฯ ที่ช่วยให้คุณติดต่อสื่อสาร รับข้อมูลและบริการต่างๆ",
      type: "messenger",
      icon: "https://line.me/static/b83de682148ca1092750bd59456ca0d9/c0a13/329473e988bb3cab682a5b5bd46b47dc.png"
    },
    {
      title: "LINE MELODY",
      des: "บริการเสียงเรียกเข้า",
      type: "messenger",
      icon: "https://line.me/static/953ddbb233e324553d904ae1053566c3/c0a13/311eb11ae46c443427227ebd3f8226f1.png"
    },
    {
      title: "LINE STICKERS",
      des: "สติกเกอร์แทนความรู้สึก",
      type: "messenger",
      icon: "https://line.me/static/dc10ada3ef7dd5f8f87e959dccde3df7/c0a13/e8032b0711524958af4ac040a6a46bf9.png"
    },
    {
      title: "LINE STORE",
      des: "ร้านค้าออนไลน์ทางการของ LINE ที่จำหน่ายสติกเกอร์ อิโมจิ ธีม เมโลดี้ เกมไอเทม และบริการอื่นๆ ของ LINE",
      type: "messenger",
      icon: "https://line.me/static/2f3e110079921b26eea788ebef8ab463/c0a13/a8ba01b5e25383b37b8c1d3f047e5c67.png"
    },
    {
      title: "LINE OpenChat",
      des: "ออนไลน์แชทคอมมิวนิตี้ขนาดใหญ่ สำหรับพูดคุย แลกเปลี่ยนข้อมูลข่าวสาร",
      type: "messenger",
      icon: "https://line.me/static/aacb751b6776345aa33fd7564fab2601/c0a13/5cea53c8dc645bfe2116d5db34837828.png"
    },
    {
      title: "LINE WEBTOON",
      des: "แพลตฟอร์มอ่านเว็บตูนอันดับ 1 ของโลก รวบรวมเว็บตูนที่ดีที่สุด มาให้อ่านฟิน อินได้ฟรีๆ",
      type: "entertainment",
      icon: "https://line.me/static/3434ab4796f006d41b00ea8be5e20504/c0a13/e09664a22ca9565827333299f0430fd5.png"
    },
    {
      title: "LINE TODAY",
      des: "อัพเดทข่าวสาร สาระความรู้ให้คุณทันทุกสถานการณ์",
      type: "entertainment",
      icon: "https://line.me/static/a5bc9a96f57a2bc249197363d699cb58/c0a13/589f44e9813cc8afde9c579e35ecdd15.png"
    },
    {
      title: "LINE POD",
      des: "แพลตฟอร์มเกม PC ที่รวบรวมเกมออนไลน์มาไว้ในที่เดียว",
      type: "entertainment",
      icon: "https://line.me/static/0d06eb8e5b7cdea8bcbf3676abace8c5/c0a13/1f43aa4a1ffcd402b4e25720b4eb6463.png"
    },
    {
      title: "LINE SHOPPING",
      des: "แหล่งช้อปปิ้งที่รวมร้านค้าบนโซเชียล ช้อปสนุก แชทตรงกับพ่อค้าแม่ค้าผ่าน LINE ครบ จบที่เดียว",
      type: "shopping",
      icon: "https://line.me/static/b83ec6bd870bfde8232362dce54c8bc7/c0a13/650f4cd238cda4f60464a816117184b3.png"
    },
    {
      title: "LINE Giftshop",
      des: "บริการส่งของขวัญรูปแบบใหม่จาก LINE ที่ให้คุณสามารถซื้อสินค้าเพื่อส่งเป็นของขวัญให้กับตนเองและคนใกล้ชิด",
      type: "shopping",
      icon: "https://line.me/static/b2b60b4a2adbfeb591e0a18a9349ea42/c0a13/1c1c24fe37ab75c6176ac487e8a7623a.png"
    },
    {
      title: "LINE MAN",
      des: "LINE MAN ผู้ช่วยเบอร์หนึ่ง (ที่ตอบโจทย์ทุกความต้องการในชีวิตประจำวัน)",
      type: "shopping",
      icon: "https://line.me/static/1747e8acf6e9dccfb0079aaae70f90e1/31e55/2f67be12e972c1129632a8e6a29bcfc2.jpg"
    },
    {
      title: "Rabbit LINE Pay",
      des: "บริการกระเป๋าเงินอัจฉริยะ",
      type: "fintech",
      icon: "https://line.me/static/a9868812e01fd65c15fc3803596db87f/c0a13/ce0801203e0f369dedaa6d8d1b395daf.png"
    },
    {
      title: "LINE BK",
      des: "เรื่องเงินเรื่องง่ายใน LINE คุณ",
      type: "fintech",
      icon: "https://line.me/static/6096c2789aa35bd59f2441736970e867/c0a13/60cb61aa853f08ef9d2bcc7977dd3eca.png"
    },
    {
      title: "LINE POINTS",
      des: "ระบบสะสมพอยท์ที่ผู้ใช้สามารถใช้พอยท์ซื้อสติกเกอร์ ธีม LINE และสินค้าต่างๆ ผ่าน Rabbit LINE Pay",
      type: "fintech",
      icon: "https://line.me/static/0288db2e9fc3c5d6675ab72dc25d692d/c0a13/12c75e40fb94502d0868b1ccb39d78b8.png"
    },
  ];
  selectData: any;


  constructor() {
    this.selectData = this.serviceData;

  }

  ngOnInit(): void {
  }

  onClickSelectCategory(categoryType: string) {
    if (categoryType === 'all') {
      this.selectData = this.serviceData;  // แสดงทุกหมวดหมู่
    } else {
      this.selectData = this.serviceData.filter(service => service.type === categoryType);
    }
  }




}
