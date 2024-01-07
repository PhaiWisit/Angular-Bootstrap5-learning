import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messengerapp',
  templateUrl: './messengerapp.component.html',
  styleUrls: ['./messengerapp.component.css'],
})
export class MessengerappComponent implements OnInit {
  constructor() {}

  cardsData = [
    {
      title: 'ส่งข้อความ รูป วิดีโอโทรด้วยเสียงและวิดีโอคอล',
      content:
        'สามารถส่งข้อความส่วนตัวแบบ 1:1 สนทนาแบบกลุ่ม โทรด้วยเสียงและวิดิโอกับเพื่อนของคุณได้',
      image: 'https://img.freepik.com/free-vector/new-message-concept-landing-page_52683-24771.jpg?w=740&t=st=1704428826~exp=1704429426~hmac=deb1f2a09cb9511e6e36dfd58e227ed1b3815022b9c086b29ff4267dadba0eb2',
    },
    {
      title: 'สติกเกอร์ อิโมจิ ธีม',
      content:
        'สื่อสารความรู้สึกของคุณด้วยสติกเกอร์ อิโมจิ หรือสามารถเปลี่ยนธีมในแอพให้มีสีสันสดใสยิ่งขึ้น',
      image: 'https://img.freepik.com/free-vector/great-job-good-job-sticker-collection_52683-61137.jpg?w=740&t=st=1704428877~exp=1704429477~hmac=b675dd8b7bc370e7e0ef9369f9184888d6de87a55fe90f4038d282243c44d380',
    },
    {
      title: 'LINE VOOM',
      content: 'พบคอนเทนต์ใหม่ๆ และผู้คนที่น่าสนใจได้ที่แท็บ "แนะนำ"',
      image: 'https://img.freepik.com/free-vector/comic-zoom-rays-focus-lines-background-design_1017-27461.jpg?w=740&t=st=1704428914~exp=1704429514~hmac=d0110745325325a127577c8e9d743df619d49a70ff6d151ed6f4b7a633a71f70',
    },
    {
      title: 'หน้าหลัก',
      content:
        'คุณสามารถเข้าถึงบริการอื่นๆ จากหน้าหลักเพื่อเลือกบริการที่คุณต้องการ เช่นเพิ่มเพื่อน ตั้งค่า รายการโปรด กลุ่ม เพื่อนหรือบริการอื่นๆ ของ LINE',
      image: 'https://img.freepik.com/free-vector/real-estate-business-landing-page-template_23-2149871888.jpg?w=900&t=st=1704428947~exp=1704429547~hmac=db807a40c191c40d0fa69e852720aad05dfb7893d4e53656f77e5fde31adc976',
    },
    {
      title: 'เพิ่มบริการที่คุณสนใจ',
      content:
        'กด + เพิ่มบริการที่คุณชื่นชอบไว้ในหน้าหลัก ให้คุณได้เข้าถีงบริการต่างๆ ของ LINE ที่คุณใช้บ่อยได้ง่ายมากขึ้น',
      image: 'https://img.freepik.com/free-vector/customer-service-week-flat-design-illustration_23-2149652433.jpg?w=740&t=st=1704429006~exp=1704429606~hmac=2a1efa312878939b7113c7fe1fa30f740a2c8dd9878f6e8c4276d35f51c87ec3',
    },
    {
      title: 'Wallet',
      content:
        'ช่องทางการชำระเงิน เติมเงิน ผ่าน "Rabbit LINE Pay" หรือคุณจะเลือกช้อปปิ้ง ซื้อของ ซื้อสินค้าและบริการต่างๆ ที่เชื่อมต่อกับบริการอื่นๆ ของ LINE',
      image: 'https://img.freepik.com/free-vector/wallet-money-cartoon_138676-2086.jpg?w=740&t=st=1704429038~exp=1704429638~hmac=31ac7c9780e643c406fbd0e9db8d8968444b2bce292604c6ab224e3814e9deab',
    },
  ];

  ngOnInit(): void {}
}
