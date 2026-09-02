document.addEventListener("DOMContentLoaded", function () {

  // ==============================
  // ข้อมูลทุนการศึกษา
  // ==============================

  const scholarships = [
    {
      id: 1,
      name: "ทุนรัฐบาลเกาหลี GKS",
      level: "ปริญญาตรี",
      country: "เกาหลีใต้",
      type: "ทุนเต็มจำนวน",
      deadline: "ตรวจสอบตามประกาศประจำปี",
      description:
        "ทุนรัฐบาลเกาหลีสำหรับนักศึกษาต่างชาติ ครอบคลุมค่าเล่าเรียน ค่าเดินทาง ค่าครองชีพ และการสนับสนุนด้านการศึกษา",
      icon: "🇰🇷",
      link: "https://www.studyinkorea.go.kr/"
    },

    {
      id: 2,
      name: "ทุนรัฐบาลญี่ปุ่น MEXT",
      level: "ปริญญาตรี",
      country: "ญี่ปุ่น",
      type: "ทุนเต็มจำนวน",
      deadline: "ตรวจสอบตามประกาศประจำปี",
      description:
        "ทุนรัฐบาลญี่ปุ่นสำหรับนักศึกษาต่างชาติ มีหลายระดับการศึกษาและหลายสาขาวิชา",
      icon: "🇯🇵",
      link: "https://www.studyinjapan.go.jp/"
    },

    {
      id: 3,
      name: "ทุนรัฐบาลจีน CSC",
      level: "ปริญญาตรี",
      country: "จีน",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามมหาวิทยาลัย",
      description:
        "ทุนรัฐบาลจีนสำหรับนักศึกษาต่างชาติ มีทั้งระดับปริญญาตรี ปริญญาโท และปริญญาเอก",
      icon: "🇨🇳",
      link: "https://www.campuschina.org/"
    },

    {
      id: 4,
      name: "ทุน Erasmus Mundus",
      level: "ปริญญาโท",
      country: "ยุโรป",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามหลักสูตร",
      description:
        "ทุนสำหรับศึกษาต่อระดับปริญญาโทในหลายประเทศของยุโรป โดยสามารถเรียนในหลายมหาวิทยาลัยตามหลักสูตร",
      icon: "🇪🇺",
      link: "https://erasmus-plus.ec.europa.eu/"
    },

    {
      id: 5,
      name: "ทุน Chevening",
      level: "ปริญญาโท",
      country: "สหราชอาณาจักร",
      type: "ทุนเต็มจำนวน",
      deadline: "ตรวจสอบรอบการสมัครล่าสุด",
      description:
        "ทุนรัฐบาลสหราชอาณาจักรสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
      icon: "🇬🇧",
      link: "https://www.chevening.org/"
    },

    {
      id: 6,
      name: "ทุน Australia Awards",
      level: "ปริญญาโท",
      country: "ออสเตรเลีย",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามประเทศ",
      description:
        "ทุนรัฐบาลออสเตรเลียสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการ",
      icon: "🇦🇺",
      link: "https://www.australiaawards.gov.au/"
    },

    {
      id: 7,
      name: "ทุน DAAD",
      level: "ปริญญาโท",
      country: "เยอรมนี",
      type: "ทุนการศึกษา",
      deadline: "แตกต่างตามโครงการ",
      description:
        "แหล่งทุนการศึกษาสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในประเทศเยอรมนี",
      icon: "🇩🇪",
      link: "https://www.daad.de/"
    },

    {
      id: 8,
      name: "ทุนรัฐบาลสิงคโปร์ SINGA",
      level: "ปริญญาเอก",
      country: "สิงคโปร์",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามรอบสมัคร",
      description:
        "ทุนสำหรับผู้ที่ต้องการศึกษาต่อระดับปริญญาเอกด้านวิทยาศาสตร์และสาขาที่เกี่ยวข้องในสิงคโปร์",
      icon: "🇸🇬",
      link: "https://www.a-star.edu.sg/"
    },

    {
      id: 9,
      name: "ทุน Fulbright",
      level: "ปริญญาโท",
      country: "สหรัฐอเมริกา",
      type: "ทุนเต็มจำนวน",
      deadline: "แตกต่างตามประเทศ",
      description:
        "โครงการทุนการศึกษานานาชาติสำหรับนักศึกษา นักวิจัย และผู้เชี่ยวชาญ",
      icon: "🇺🇸",
      link: "https://foreign.fulbrightonline.org/"
    },

    {
      id: 10,
      name: "ทุนสำหรับนักเรียนมัธยม",
      level: "ม.ปลาย",
      country: "ไทย",
      type: "ทุนการศึกษา",
      deadline: "แตกต่างตามหน่วยงาน",
      description:
        "ทุนสำหรับนักเรียนระดับมัธยมศึกษาตอนปลายที่ต้องการศึกษาต่อและพัฒนาศักยภาพ",
      icon: "🏫",
      link: "https://www.moe.go.th/"
    },

    {
      id: 11,
      name: "ทุนปริญญาตรีนานาชาติ",
      level: "ปริญญาตรี",
      country: "หลายประเทศ",
      type: "ทุนบางส่วน",
      deadline: "แตกต่างตามมหาวิทยาลัย",
      description:
        "รวมโอกาสทุนสำหรับผู้สมัครระดับปริญญาตรีจากต่างประเทศ",
      icon: "🎓",
      link: "https://www.educations.com/"
    },

    {
      id: 12,
      name: "ทุนวิจัยระดับปริญญาเอก",
      level: "ปริญญาเอก",
      country: "หลายประเทศ",
      type: "ทุนวิจัย",
      deadline: "แตกต่างตามโครงการ",
      description:
        "โอกาสสำหรับผู้ที่ต้องการทำวิจัยและศึกษาต่อระดับปริญญาเอกในต่างประเทศ",
      icon: "🔬",
      link: "https://www.findaphd.com/"
     },

     {
  id: 13,
  name: "ทุนเล่าเรียนหลวง",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "10–30 ต.ค. 2568 (รอบปี 2569 ปิดรับสมัครแล้ว)",
  description: "ทุนรัฐบาลสำหรับนักเรียนชั้น ม.6 ที่มีผลการเรียนดี เพื่อศึกษาต่อต่างประเทศ",
  icon: "🇹🇭",
  link: "https://www.ocsc.go.th/?p=113800&post_type=scholarship"
     },

     {
  id: 14,
  name: "ทุนรัฐบาลด้านวิทยาศาสตร์และเทคโนโลยี",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนรัฐบาลสำหรับนักเรียน ม.ปลายที่มีศักยภาพด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://stscholar.nstda.or.th/"
    },

    {
  id: 15,
  name: "ทุนกระทรวงการต่างประเทศ",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนรัฐบาลที่จัดสรรผ่านกระทรวงการต่างประเทศสำหรับนักเรียนระดับมัธยมศึกษาตอนปลาย",
  icon: "🌏",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
    },

    {
  id: 16,
  name: "ทุนวิวัฒนไชยานุสรณ์",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "10–30 ต.ค. 2568 (รอบปี 2569 ปิดรับสมัครแล้ว)",
  description: "ทุนรัฐบาลระดับมัธยมศึกษาตอนปลายสำหรับผู้มีคุณสมบัติตามประกาศ",
  icon: "🎓",
  link: "https://www.ocsc.go.th/?p=113826&post_type=scholarship"
      },

      {
  id: 17,
  name: "ทุน ODOS ระดับมัธยมศึกษาตอนปลายและ ปวช.",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่า",
  deadline: "ตรวจสอบรอบการคัดเลือก",
  description: "โครงการทุนการศึกษาเพื่อขยายโอกาสและพัฒนาประเทศ สำหรับนักเรียนที่เข้าเกณฑ์",
  icon: "⭐",
  link: "https://www.moe.go.th/odos2568/"
     },

     {
  id: 18,
  name: "ทุนก้าวเพื่อน้อง",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนการศึกษา",
  deadline: "20 ก.พ.–20 มี.ค. 2569 (รอบปี 2569)",
  description: "ทุนสำหรับนักเรียนที่ขาดแคลนทุนทรัพย์หรือด้อยโอกาส เพื่อศึกษาต่อระดับ ม.ปลายหรือ ปวช.",
  icon: "❤️",
  link: "https://kaopueanong.eef.or.th/"
     },

     {
  id: 19,
  name: "ทุนการศึกษากองทุนวารี–สังวรณ์",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่า",
  deadline: "ตรวจสอบกับสถานศึกษา/หน่วยงานต้นสังกัด",
  description: "ทุนสำหรับนักเรียนที่เรียนดี มีความประพฤติดี และขาดแคลนทุนทรัพย์",
  icon: "📚",
  link: "https://www.obec.go.th/"
      },

      {
  id: 20,
  name: "ทุนการศึกษามูลนิธิศึกษาวิจัยและพัฒนาเพื่อสังคมวิทยาศาสตร์และเทคโนโลยี",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนต่อเนื่อง",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนและนักศึกษาที่ขาดแคลนทุนทรัพย์และมีความมุ่งมั่นในการศึกษา",
  icon: "🧪",
  link: "https://findstudentship.eef.or.th/"
      },
    
      {
  id: 21,
  name: "MEXT Scholarship",
  level: "ม.ปลาย/ปริญญาตรี/โท/เอก",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเภทและรอบสมัคร",
  description: "ทุนรัฐบาลญี่ปุ่นสำหรับนักศึกษาต่างชาติ มีหลายประเภทตั้งแต่ระดับปริญญาตรีจนถึงบัณฑิตศึกษา",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/th/planning/scholarships/mext-scholarships/"
     },

     {
  id: 22,
  name: "GKS (Global Korea Scholarship)",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามระดับและรอบสมัคร",
  description: "ทุนรัฐบาลเกาหลีใต้สำหรับนักศึกษาต่างชาติ ครอบคลุมทั้งระดับปริญญาตรีและบัณฑิตศึกษา",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/ko/plan/scholarship.do?tab=gks-tab1"
     },

     {
  id: 23,
  name: "Chevening Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลสหราชอาณาจักรสำหรับหลักสูตรปริญญาโท 1 ปี",
  icon: "🇬🇧",
  link: "https://www.chevening.org/scholarships/"
     },

     {
  id: 24,
  name: "GREAT Scholarships",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนรัฐบาล/มหาวิทยาลัย",
  deadline: "แตกต่างตามมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการเพื่อศึกษาหลักสูตรปริญญาโทในสหราชอาณาจักร",
  icon: "🇬🇧",
  link: "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships"
     },

     {
  id: 25,
  name: "Australia Awards Scholarships",
  level: "ปริญญาตรี/โท/เอก ตามประเทศ",
  country: "ออสเตรเลีย",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุนรัฐบาลออสเตรเลียสำหรับผู้สมัครจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇦🇺",
link:"https://www.education.gov.au/international-education/financial-assistance-international-students"
    },

    {
  id: 26,
  name: "Türkiye Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ตุรกี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบสมัคร",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่าง. ชาติ ครอบคลุมหลายระดับการศึกษา",
  icon: "🇹🇷",
  link:"https://turkiyeburslari.gov.tr/"
   },

{
  id: 27,
  name: "Stipendium Hungaricum",
  level: "ปริญญาตรี/โท/เอก",
  country: "ฮังการี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบสมัคร",
  description: "ทุนรัฐบาลฮังการีสำหรับนักศึกษาต่างชาติ มีหลักสูตรหลายสาขา",
  icon: "🇭🇺",
link:"https://stipendiumhungaricum.hu/"
},
{
  id: 28,
  name: "Brunei Darussalam Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "บรูไน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศรอบล่าสุด",
  description: "ทุนรัฐบาลบรูไนสำหรับนักศึกษาต่างชาติไปศึกษาต่อในบรูไน",
  icon: "🇧🇳",
  link: "https://www.moe.gov.bn/SitePages/Department%20of%20Scholarship%20Management.aspx"
},{
  id: 29,
  name: "ทุนการศึกษามูลนิธิวิชัย ศรีวัฒนประภา",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่า",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่กำลังศึกษาหรือต้องการศึกษาต่อ ม.4 และขาดแคลนทุนทรัพย์ โดยทุนสามารถต่อเนื่องจนจบปริญญาตรีตามเงื่อนไข",
  icon: "🇹🇭",
  link: "https://vichaisrivaddhanaprabha.com/scholarship-th/"
},

{
  id: 30,
  name: "ทุนมูลนิธิเกื้อฝันเด็ก",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่าต่อเนื่อง",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนที่ขาดแคลนทุนทรัพย์ มีความประพฤติดี และมุ่งมั่นศึกษาต่อ",
  icon: "🇹🇭",
  link: "https://www.childsdream.org/"
},

{
  id: 31,
  name: "ทุนมูลนิธิศึกษาวิจัยและพัฒนาเพื่อสังคมวิทยาศาสตร์และเทคโนโลยี",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนต่อเนื่อง",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนและนักศึกษาที่ขาดแคลนทุนทรัพย์และมีความมุ่งมั่นตั้งใจศึกษา โดยมีทุนตั้งแต่ ม.ต้น ถึงปริญญาตรี",
  icon: "🇹🇭",
  link: "https://findstudentship.eef.or.th/"
},

{
  id: 32,
  name: "ทุนรัฐบาลด้านวิทยาศาสตร์และเทคโนโลยี",
  level: "ม.ปลาย",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "รอบปี 2569 ปิดรับสมัครแล้ว",
  description: "ทุนรัฐบาลระดับมัธยมศึกษาตอนปลายด้านวิทยาศาสตร์และเทคโนโลยี มี 17 หน่วยทุนในปีงบประมาณ 2569",
  icon: "🔬",
  link: "https://stscholar.nstda.or.th/"
},

{
  id: 33,
  name: "ทุนเล่าเรียนหลวง",
  level: "ม.6",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "รอบปี 2569 ปิดรับสมัครแล้ว",
  description: "ทุนรัฐบาลสำหรับนักเรียนมัธยมศึกษาชั้นปีสุดท้าย โดยปีงบประมาณ 2569 มี 9 ทุน",
  icon: "🎓",
  link: "https://www.ocsc.go.th/?p=113800&post_type=scholarship"
},

{
  id: 34,
  name: "ทุนรัฐบาลตามความต้องการของกระทรวงการต่างประเทศ",
  level: "ม.6",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "รอบปี 2569 ปิดรับสมัครแล้ว",
  description: "ทุนรัฐบาลสำหรับนักเรียนมัธยมศึกษาชั้นปีสุดท้าย โดยปีงบประมาณ 2569 มี 5 ทุน",
  icon: "🌏",
  link: "https://www.ocsc.go.th/?p=113809&post_type=scholarship"
},

{
  id: 35,
  name: "ทุนการศึกษาปีการศึกษา 2569 มูลนิธิทวี บุณยเกตุ",
  level: "ม.ปลาย/ปวช.",
  country: "ประเทศไทย",
  type: "ทุนให้เปล่า",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักเรียนมัธยมศึกษาและสายอาชีพที่เรียนดี ประพฤติดี และขาดแคลนทุนทรัพย์",
  icon: "📚",
  link: "https://findstudentship.eef.or.th/"
},{
  id: 36,
  name: "Eiffel Excellence Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ฝรั่งเศส",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบสมัคร",
  description: "ทุนรัฐบาลฝรั่งเศสสำหรับนักศึกษาต่างชาติ",
  icon: "🇫🇷",
  link: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
},
{
  id: 37,
  name: "Chinese Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "จีน",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศและมหาวิทยาลัย",
  description: "ทุนรัฐบาลจีนสำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇳",
  link: "https://www.campuschina.org/"
},
{
  id: 38,
  name: "Brunei Government Scholarship",
  level: "ปริญญาตรี/โท",
  country: "บรูไน",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามปี",
  description: "ทุนรัฐบาลบรูไนสำหรับนักศึกษาต่างชาติ",
  icon: "🇧🇳",
  link: "https://www.moe.gov.bn/"
},
{
  id: 39,
  name: "New Zealand Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "นิวซีแลนด์",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุนการศึกษาของรัฐบาลนิวซีแลนด์สำหรับผู้สมัครจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇳🇿",
  link: "https://www.nzscholarships.govt.nz/"
},
{
  id: 40,
  name: "Erasmus Mundus Joint Masters",
  level: "ปริญญาโท",
  country: "สหภาพยุโรป",
  type: "ทุนสหภาพยุโรป",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตรปริญญาโทนานาชาติที่เรียนในหลายประเทศ",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/"
},
{
  id: 41,
  name: "Thailand Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ประเทศไทย",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามมหาวิทยาลัยและโครงการ",
  description: "โครงการทุนการศึกษาสำหรับนักศึกษาต่างชาติในประเทศไทย",
  icon: "🇹🇭",
  link: "https://www.ops.go.th/en/"
},
{
  id: 42,
  name: "Swiss Government Excellence Scholarships",
  level: "โท/เอก/วิจัย",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุนรัฐบาลสวิตเซอร์แลนด์สำหรับนักศึกษาต่างชาติและนักวิจัย",
  icon: "🇨🇭",
  link: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html"
},
{
  id: 43,
  name: "Italy Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "อิตาลี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามปี",
  description: "ทุนรัฐบาลอิตาลีสำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇹",
  link: "https://studyinitaly.esteri.it/"
},
{
  id: 44,
  name: "Azerbaijan Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "อาเซอร์ไบจาน",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามปี",
  description: "ทุนรัฐบาลอาเซอร์ไบจานสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇿",
  link: "https://studyinazerbaijan.edu.az/"
},
{
  id: 45,
  name: "Poland Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "โปแลนด์",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุนและโครงการสนับสนุนการศึกษาสำหรับนักศึกษาต่างชาติ",
  icon: "🇵🇱",
  link: "https://study.gov.pl/"
},
{
  id: 46,
  name: "Czech Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "สาธารณรัฐเช็ก",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุนรัฐบาลสาธารณรัฐเช็กสำหรับนักศึกษาจากประเทศที่กำหนด",
  icon: "🇨🇿",
  link: "https://www.studyin.cz/"
},
{
  id: 47,
  name: "Finnish Scholarships",
  level: "ปริญญาโท/เอก",
  country: "ฟินแลนด์",
  type: "ทุนรัฐบาล/มหาวิทยาลัย",
  deadline: "แตกต่างตามโครงการ",
  description: "ทุนและทุนสนับสนุนสำหรับนักศึกษาต่างชาติในฟินแลนด์",
  icon: "🇫🇮",
  link: "https://www.studyinfinland.fi/"
},
{
  id: 48,
  name: "Swedish Institute Scholarships",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามรอบสมัคร",
  description: "ทุน Swedish Institute สำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇸🇪",
  link: "https://si.se/en/apply/scholarships/"
},
{
  id: 49,
  name: "ทุนรัฐบาลสหราชอาณาจักร Chevening",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อระดับปริญญาโทในสหราชอาณาจักร",
  icon: "🇬🇧",
  link: "https://www.chevening.org/"
},
{
  id: 50,
  name: "ทุนรัฐบาลตุรกี Türkiye Scholarships",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ตุรกี",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่างชาติ",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 51,
  name: "ทุนรัฐบาลจีน CSC",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "จีน",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลจีนสำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇳",
  link: "https://www.campuschina.org/"
},
{
  id: 52,
  name: "ทุน Stipendium Hungaricum",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ฮังการี",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลฮังการีสำหรับนักศึกษาต่างชาติ",
  icon: "🇭🇺",
  link: "https://stipendiumhungaricum.hu/"
},
{
  id: 53,
  name: "ทุน Erasmus Mundus",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "ทุนเต็มจำนวน",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนระดับปริญญาโทที่เปิดโอกาสให้เรียนในหลายประเทศของยุโรป",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/"
},
{
  id: 54,
  name: "ทุนรัฐบาลออสเตรเลีย Australia Awards",
  level: "ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลออสเตรเลียสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇦🇺",
  link: "https://www.australiaawards.gov.au/"
},
{
  id: 55,
  name: "ทุนรัฐบาลนิวซีแลนด์ Manaaki",
  level: "ปริญญาโท",
  country: "นิวซีแลนด์",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลนิวซีแลนด์สำหรับนักศึกษาต่างชาติ",
  icon: "🇳🇿",
  link: "https://www.nzscholarships.govt.nz/"
},
{
  id: 56,
  name: "ทุนรัฐบาลสวีเดน SI Scholarship",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อระดับปริญญาโทในสวีเดน",
  icon: "🇸🇪",
  link: "https://si.se/en/apply/scholarships/"
},
{
  id: 57,
  name: "ทุนรัฐบาลสวิตเซอร์แลนด์",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลสวิตเซอร์แลนด์สำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇭",
  link: "https://www.sbfi.admin.ch/"
},
{
  id: 58,
  name: "ทุนรัฐบาลไอร์แลนด์",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในประเทศไอร์แลนด์",
  icon: "🇮🇪",
  link: "https://hea.ie/"
},
{
  id: 59,
  name: "ทุน Fulbright Foreign Student Program",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สหรัฐอเมริกา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "โครงการทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในสหรัฐอเมริกา",
  icon: "🇺🇸",
  link: "https://foreign.fulbrightonline.org/"
},
{
  id: 60,
  name: "ทุนรัฐบาลแคนาดา Vanier",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาระดับปริญญาเอกและนักวิจัยที่มีศักยภาพ",
  icon: "🇨🇦",
  link: "https://vanier.gc.ca/"
},
{
  id: 61,
  name: "ทุน Ontario Trillium Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามมหาวิทยาลัย",
  description: "ทุนระดับปริญญาเอกสำหรับนักศึกษาต่างชาติในรัฐออนแทรีโอ",
  icon: "🇨🇦",
  link: "https://www.ontario.ca/"
},
{
  id: 62,
  name: "ทุน McCall MacBain Scholarship",
  level: "ปริญญาโท",
  country: "แคนาดา",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับผู้สมัครระดับบัณฑิตศึกษาที่ McGill University",
  icon: "🇨🇦",
  link: "https://mccallmacbainscholars.org/"
},
{
  id: 63,
  name: "ทุน Lester B. Pearson",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่สมัครเข้า University of Toronto",
  icon: "🇨🇦",
  link: "https://future.utoronto.ca/"
},
{
  id: 64,
  name: "ทุน UBC International Scholars",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาระดับปริญญาตรีที่ UBC",
  icon: "🇨🇦",
  link: "https://you.ubc.ca/financial-planning/scholarships/"
},
{
  id: 65,
  name: "ทุน Monash International Leadership Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนค่าเล่าเรียน",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Monash University",
  icon: "🇦🇺",
  link: "https://www.monash.edu/study/fees-scholarships/scholarships"
},
{
  id: 66,
  name: "ทุน Melbourne International Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรีของ University of Melbourne",
  icon: "🇦🇺",
  link: "https://study.unimelb.edu.au/how-to-apply/scholarships"
},
{
  id: 67,
  name: "ทุน ANU Chancellor's International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนค่าเล่าเรียน",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Australian National University",
  icon: "🇦🇺",
  link: "https://study.anu.edu.au/scholarships"
},
{
  id: 68,
  name: "ทุน University of Sydney International Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇦🇺",
  link: "https://www.sydney.edu.au/scholarships/"
},
{
  id: 69,
  name: "ทุน UQ International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University of Queensland",
  icon: "🇦🇺",
  link: "https://scholarships.uq.edu.au/"
},
{
  id: 70,
  name: "ทุน University of Auckland International Student Excellence",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "นิวซีแลนด์",
  type: "ทุนค่าเล่าเรียน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ University of Auckland",
  icon: "🇳🇿",
  link: "https://www.auckland.ac.nz/"
},
{
  id: 71,
  name: "ทุน ADB-Japan Scholarship Program",
  level: "ปริญญาโท",
  country: "ญี่ปุ่น / เอเชีย",
  type: "ทุนเต็มจำนวน",
  deadline: "แตกต่างกันตามสถาบัน",
  description: "ทุนสำหรับนักศึกษาจากประเทศสมาชิก ADB ที่เข้าเกณฑ์",
  icon: "🌏",
  link: "https://www.adb.org/work-with-us/careers/japan-scholarship-program"
},
{
  id: 72,
  name: "ทุน Japanese Government MEXT Research",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุน MEXT สำหรับนักศึกษาต่างชาติในสายวิจัยและระดับบัณฑิตศึกษา",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/"
},
{
  id: 73,
  name: "ทุน JASSO",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ญี่ปุ่น",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "โครงการสนับสนุนด้านทุนสำหรับนักศึกษาต่างชาติในญี่ปุ่น",
  icon: "🇯🇵",
  link: "https://www.jasso.go.jp/en/"
},
{
  id: 74,
  name: "ทุน University of Tokyo Fellowship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนและการสนับสนุนสำหรับนักศึกษาระดับบัณฑิตศึกษาของ University of Tokyo",
  icon: "🇯🇵",
  link: "https://www.u-tokyo.ac.jp/en/"
},
{
  id: 75,
  name: "ทุน Kyoto University International",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนและโครงการสนับสนุนสำหรับนักศึกษาต่างชาติของ Kyoto University",
  icon: "🇯🇵",
  link: "https://www.kyoto-u.ac.jp/en"
},
{
  id: 76,
  name: "ทุน KAIST International Student",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ KAIST",
  icon: "🇰🇷",
  link: "https://www.kaist.ac.kr/en/"
},
{
  id: 77,
  name: "ทุน Seoul National University",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Seoul National University",
  icon: "🇰🇷",
  link: "https://en.snu.ac.kr/"
},
{
  id: 78,
  name: "ทุน Yonsei University International",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามหลักสูตร",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Yonsei University",
  icon: "🇰🇷",
  link: "https://www.yonsei.ac.kr/en_sc/"
},
{
  id: 79,
  name: "ทุน National Taiwan University",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ไต้หวัน",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนและโครงการสนับสนุนนักศึกษาต่างชาติของ National Taiwan University",
  icon: "🇹🇼",
  link: "https://www.ntu.edu.tw/english/"
},
{
  id: 80,
  name: "ทุน TaiwanICDF",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ไต้หวัน",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนการศึกษาสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇹🇼",
  link: "https://www.icdf.org.tw/"
},
{
  id: 81,
  name: "ทุน Singapore International Graduate Award SINGA",
  level: "ปริญญาเอก",
  country: "สิงคโปร์",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศของโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาเอกในสิงคโปร์",
  icon: "🇸🇬",
  link: "https://www.a-star.edu.sg/singa-scholarship"
},
{
  id: 82,
  name: "ทุน NUS International Scholarships",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "สิงคโปร์",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนและโครงการสนับสนุนนักศึกษาต่างชาติของ National University of Singapore",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/"
},
{
  id: 83,
  name: "ทุน NTU International Scholarships",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "สิงคโปร์",
  type: "ทุนการศึกษา",
  deadline: "แตกต่างกันตามโครงการ",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Nanyang Technological University",
  icon: "🇸🇬",
  link: "https://www.ntu.edu.sg/"
},
{
  id: 84,
  name: "ทุนรัฐบาลมาเลเซีย MTCP",
  level: "ปริญญาโท",
  country: "มาเลเซีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการความร่วมมือของมาเลเซีย",
  icon: "🇲🇾",
  link: "https://mtcp.kln.gov.my/"
},
{
  id: 85,
  name: "ทุน Brunei Darussalam Government Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "บรูไน",
  type: "ทุนเต็มจำนวน",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลบรูไนสำหรับนักศึกษาต่างชาติ",
  icon: "🇧🇳",
  link: "https://www.mfa.gov.bn/"
},
{
  id: 86,
  name: "ทุนรัฐบาลอินเดีย ICCR",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "อินเดีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนการศึกษาสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในอินเดีย",
  icon: "🇮🇳",
  link: "https://a2ascholarships.iccr.gov.in/"
},
{
  id: 87,
  name: "ทุน Ireland Government of Ireland",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇮🇪",
  link: "https://hea.ie/"
},
{
  id: 88,
  name: "ทุน Eiffel Excellence Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ฝรั่งเศส",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลฝรั่งเศสสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇫🇷",
  link: "https://www.campusfrance.org/en/eiffel-scholarship-program"
},
{
  id: 89,
  name: "ทุน Charpak Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ฝรั่งเศส",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในฝรั่งเศส",
  icon: "🇫🇷",
  link: "https://www.inde.campusfrance.org/"
},
{
  id: 90,
  name: "ทุน Swiss Government Excellence",
  level: "ปริญญาโท / ปริญญาเอก / นักวิจัย",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลสวิตเซอร์แลนด์สำหรับนักศึกษาต่างชาติและนักวิจัย",
  icon: "🇨🇭",
  link: "https://www.sbfi.admin.ch/"
},
{
  id: 91,
  name: "ทุน Italian Government Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "อิตาลี",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลอิตาลีสำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇹",
  link: "https://studyinitaly.esteri.it/"
},
{
  id: 92,
  name: "ทุน Romanian Government Scholarship",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "โรมาเนีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลโรมาเนียสำหรับนักศึกษาต่างชาติ",
  icon: "🇷🇴",
  link: "https://studyinromania.gov.ro/"
},
{
  id: 93,
  name: "ทุน Czech Government Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เช็ก",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนรัฐบาลเช็กสำหรับนักศึกษาจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇨🇿",
  link: "https://www.studyin.cz/"
},
{
  id: 94,
  name: "ทุน Government of Poland NAWA",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "โปแลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนและโครงการแลกเปลี่ยนสำหรับนักศึกษาต่างชาติในโปแลนด์",
  icon: "🇵🇱",
  link: "https://nawa.gov.pl/en"
},
{
  id: 95,
  name: "ทุน Türkiye Scholarships Success",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ตุรกี",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "โครงการสนับสนุนนักศึกษาต่างชาติที่กำลังศึกษาในตุรกีตามเงื่อนไขโครงการ",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 96,
  name: "ทุนรัฐบาลอียิปต์",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "อียิปต์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนและโครงการสนับสนุนนักศึกษาต่างชาติในประเทศอียิปต์",
  icon: "🇪🇬",
  link: "https://study-in-egypt.gov.eg/"
},
{
  id: 97,
  name: "ทุนรัฐบาลบราซิล PEC-PG",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "บราซิล",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศโครงการ",
  description: "โครงการทุนสำหรับนักศึกษาต่างชาติจากประเทศกำลังพัฒนา",
  icon: "🇧🇷",
  link: "https://www.gov.br/capes/"
},
{
  id: 98,
  name: "ทุนรัฐบาลเม็กซิโกสำหรับนักศึกษาต่างชาติ",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เม็กซิโก",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในเม็กซิโก",
  icon: "🇲🇽",
  link: "https://www.gob.mx/amexcid"
},
{
  id: 99,
  name: "ทุนรัฐบาลรัสเซีย",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "รัสเซีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศรายปี",
  description: "โครงการทุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในรัสเซีย",
  icon: "🇷🇺",
  link: "https://education-in-russia.com/"
},
{
  id: 100,
  name: "ทุนรัฐบาลฟินแลนด์",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ฟินแลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบตามประกาศของมหาวิทยาลัย",
  description: "ทุนและโครงการสนับสนุนสำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในฟินแลนด์",
  icon: "🇫🇮",
  link: "https://www.studyinfinland.fi/"
},// ===============================
// SCHOLARSHIPS 101 - 200
// ===============================

{
  id: 101,
  name: "Erasmus Mundus Joint Masters",
  level: "ปริญญาโท",
  country: "ยุโรป / หลายประเทศ",
  type: "ทุนรัฐบาล",
  deadline: "โดยทั่วไป ต.ค.–ม.ค.",
  description: "ทุนปริญญาโทร่วมของมหาวิทยาลัยหลายประเทศในยุโรป",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 102,
  name: "Chevening Scholarships",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลสหราชอาณาจักรสำหรับปริญญาโท 1 ปี",
  icon: "🇬🇧",
  link: "https://www.chevening.org/scholarships/"
},
{
  id: 103,
  name: "GREAT Scholarships",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย/รัฐบาล",
  deadline: "แตกต่างตามมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติจากประเทศที่เข้าร่วม",
  icon: "🇬🇧",
  link: "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships"
},
{
  id: 104,
  name: "Commonwealth Master's Scholarships",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Commonwealth สำหรับผู้สมัครจากประเทศที่มีสิทธิ์",
  icon: "🇬🇧",
  link: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-masters-scholarships/"
},
{
  id: 105,
  name: "Commonwealth PhD Scholarships",
  level: "ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนปริญญาเอกภายใต้ Commonwealth",
  icon: "🇬🇧",
  link: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-phd-scholarships/"
},
{
  id: 106,
  name: "Clarendon Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ธ.ค.–ม.ค. โดยประมาณ",
  description: "ทุนเต็มจำนวนของ University of Oxford",
  icon: "🎓",
  link: "https://www.ox.ac.uk/clarendon"
},
{
  id: 107,
  name: "Rhodes Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนมูลนิธิ",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุนสำหรับศึกษาที่ University of Oxford",
  icon: "🎓",
  link: "https://www.rhodeshouse.ox.ac.uk/scholarships/"
},
{
  id: 108,
  name: "Gates Cambridge Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนมูลนิธิ",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุนเต็มจำนวนสำหรับนักศึกษาต่างชาติที่ Cambridge",
  icon: "🎓",
  link: "https://www.gatescambridge.org/apply/"
},
{
  id: 109,
  name: "Cambridge Trust Scholarships",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุนและเงินสนับสนุนสำหรับนักศึกษาต่างชาติ Cambridge",
  icon: "🎓",
  link: "https://www.cambridgetrust.org/scholarships/"
},
{
  id: 110,
  name: "Imperial President's PhD Scholarship",
  level: "ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "แตกต่างตามรอบ",
  description: "ทุนปริญญาเอกของ Imperial College London",
  icon: "🎓",
  link: "https://www.imperial.ac.uk/study/fees-and-funding/postgraduate-doctoral/president-phd-scholarships/"
},
{
  id: 111,
  name: "UCL Global Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🎓",
  link: "https://www.ucl.ac.uk/prospective-students/scholarships/ucl-global-scholarships"
},
{
  id: 112,
  name: "UCL Global Master's Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติจากภูมิหลังรายได้น้อย",
  icon: "🎓",
  link: "https://www.ucl.ac.uk/scholarships/ucl-global-masters-scholarship"
},
{
  id: 113,
  name: "UCL Humanitarian Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับผู้ได้รับผลกระทบจากวิกฤตและสถานการณ์ด้านมนุษยธรรม",
  icon: "🎓",
  link: "https://www.ucl.ac.uk/scholarships/"
},
{
  id: 114,
  name: "Warwick Chancellor's International Scholarship",
  level: "ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยระดับปริญญาเอกสำหรับนักศึกษาต่างชาติ",
  icon: "🎓",
  link: "https://warwick.ac.uk/services/dc/schols_fund/"
},
{
  id: 115,
  name: "Bristol Think Big Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Bristol",
  icon: "🎓",
  link: "https://www.bristol.ac.uk/students/fees-funding/scholarships/"
},
{
  id: 116,
  name: "Edinburgh Global Scholarships",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ University of Edinburgh",
  icon: "🎓",
  link: "https://www.ed.ac.uk/student-funding/postgraduate/international"
},
{
  id: 117,
  name: "University of Manchester President's Doctoral Scholar Award",
  level: "ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยระดับปริญญาเอก",
  icon: "🎓",
  link: "https://www.manchester.ac.uk/study/postgraduate-research/funding/"
},
{
  id: 118,
  name: "University of Nottingham Developing Solutions Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาจากประเทศกำลังพัฒนา",
  icon: "🎓",
  link: "https://www.nottingham.ac.uk/studywithus/scholarships/"
},
{
  id: 119,
  name: "University of Sussex Chancellor's International Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🎓",
  link: "https://www.sussex.ac.uk/study/fees-funding/scholarships"
},
{
  id: 120,
  name: "University of Glasgow World Changers Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ",
  icon: "🎓",
  link: "https://www.gla.ac.uk/scholarships/"
},

{
  id: 121,
  name: "MEXT Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต",
  description: "ทุนรัฐบาลญี่ปุ่นสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇯🇵",
  link: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/1373820.htm"
},
{
  id: 122,
  name: "MEXT Research Students Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต",
  description: "ทุนรัฐบาลญี่ปุ่นสำหรับนักวิจัยและนักศึกษาระดับบัณฑิตศึกษา",
  icon: "🇯🇵",
  link: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/1373820.htm"
},
{
  id: 123,
  name: "MEXT Japanese Studies Students",
  level: "ปริญญาตรี / แลกเปลี่ยน",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต",
  description: "ทุนสำหรับนักศึกษาที่ศึกษาด้านภาษาหรือวัฒนธรรมญี่ปุ่น",
  icon: "🇯🇵",
  link: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/1373820.htm"
},
{
  id: 124,
  name: "MEXT Teacher Training Students",
  level: "อบรม / ปริญญาโท",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต",
  description: "ทุนสำหรับครูต่างชาติไปอบรมและศึกษาต่อในญี่ปุ่น",
  icon: "🇯🇵",
  link: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/1373820.htm"
},
{
  id: 125,
  name: "MEXT College of Technology Students",
  level: "ประกาศนียบัตร / เทคนิค",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต",
  description: "ทุนรัฐบาลญี่ปุ่นสำหรับวิทยาลัยเทคโนโลยี",
  icon: "🇯🇵",
  link: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/1373820.htm"
},
{
  id: 126,
  name: "MEXT Specialized Training College Students",
  level: "ประกาศนียบัตรวิชาชีพ",
  country: "ญี่ปุ่น",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต",
  description: "ทุนรัฐบาลญี่ปุ่นสำหรับวิทยาลัยอาชีวศึกษาเฉพาะทาง",
  icon: "🇯🇵",
  link: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/1373820.htm"
},
{
  id: 127,
  name: "Honjo International Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนมูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇯🇵",
  link: "https://entry.hisf.or.jp/"
},
{
  id: 128,
  name: "ADB-Japan Scholarship Program",
  level: "ปริญญาโท",
  country: "ญี่ปุ่น / เอเชียแปซิฟิก",
  type: "ทุนรัฐบาล/องค์การระหว่างประเทศ",
  deadline: "แตกต่างตามมหาวิทยาลัย",
  description: "ทุนสำหรับผู้สมัครจากประเทศสมาชิกกำลังพัฒนา",
  icon: "🌏",
  link: "https://www.adb.org/work-with-us/careers/japan-scholarship-program"
},
{
  id: 129,
  name: "University of Tokyo Fellowship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนมหาวิทยาลัย",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุนสำหรับนักศึกษาระดับบัณฑิตศึกษา University of Tokyo",
  icon: "🇯🇵",
  link: "https://www.u-tokyo.ac.jp/en/prospective-students/scholarships.html"
},
{
  id: 130,
  name: "OIST Graduate School Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและการสนับสนุนสำหรับนักศึกษาบัณฑิตศึกษา OIST",
  icon: "🇯🇵",
  link: "https://admissions.oist.jp/"
},

{
  id: 131,
  name: "Global Korea Scholarship Undergraduate",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต/มหาวิทยาลัย",
  description: "ทุนรัฐบาลเกาหลีสำหรับนักศึกษาระดับปริญญาตรี",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/"
},
{
  id: 132,
  name: "Global Korea Scholarship Graduate",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามสถานทูต/มหาวิทยาลัย",
  description: "ทุนรัฐบาลเกาหลีสำหรับระดับบัณฑิตศึกษา",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/"
},
{
  id: 133,
  name: "KAIST International Student Scholarship",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇰🇷",
  link: "https://admission.kaist.ac.kr/intl-undergraduate/"
},
{
  id: 134,
  name: "KAIST Graduate Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษาต่างชาติ",
  icon: "🇰🇷",
  link: "https://admission.kaist.ac.kr/intl-graduate/"
},
{
  id: 135,
  name: "Seoul National University Global Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ SNU",
  icon: "🇰🇷",
  link: "https://en.snu.ac.kr/"
},
{
  id: 136,
  name: "Yonsei University International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Yonsei",
  icon: "🇰🇷",
  link: "https://www.yonsei.ac.kr/en_sc/"
},
{
  id: 137,
  name: "Korea University Global KU Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Korea University",
  icon: "🇰🇷",
  link: "https://www.korea.edu/mbshome/mbs/en/"
},

{
  id: 138,
  name: "Stipendium Hungaricum Scholarship",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ฮังการี",
  type: "ทุนรัฐบาล",
  deadline: "โดยทั่วไป ม.ค.",
  description: "ทุนรัฐบาลฮังการีสำหรับนักศึกษาต่างชาติ",
  icon: "🇭🇺",
  link: "https://stipendiumhungaricum.hu/study-finder/"
},
{
  id: 139,
  name: "Türkiye Scholarships",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ตุรกี",
  type: "ทุนรัฐบาล",
  deadline: "โดยทั่วไป ก.พ.",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่างชาติ",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 140,
  name: "Türkiye Scholarships Research Scholarship",
  level: "วิจัย / ปริญญาเอก",
  country: "ตุรกี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยภายใต้ Türkiye Scholarships",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},

{
  id: 141,
  name: "Swedish Institute Scholarship for Global Professionals",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลสวีเดนสำหรับผู้สมัครจากประเทศที่มีสิทธิ์",
  icon: "🇸🇪",
  link: "https://apply-scholarships.si.se/"
},
{
  id: 142,
  name: "SI Pioneering Women in STEM",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับผู้สมัครหญิงในสาขา STEM จากประเทศที่กำหนด",
  icon: "🇸🇪",
  link: "https://apply-scholarships.si.se/"
},
{
  id: 143,
  name: "DAAD EPOS Scholarships",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุน DAAD สำหรับหลักสูตรที่เกี่ยวข้องกับการพัฒนา",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
},
{
  id: 144,
  name: "DAAD Development-Related Postgraduate Courses",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุนสำหรับหลักสูตรระดับบัณฑิตศึกษาที่เกี่ยวข้องกับการพัฒนา",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
},
{
  id: 145,
  name: "Humboldt Research Fellowship",
  level: "ปริญญาเอก / นักวิจัย",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "เปิดรับหลายช่วง",
  description: "ทุนวิจัยสำหรับนักวิจัยต่างชาติ",
  icon: "🇩🇪",
  link: "https://www.humboldt-foundation.de/en/apply/sponsorship-programmes/humboldt-research-fellowship"
},
{
  id: 146,
  name: "Friedrich Ebert Stiftung Scholarship",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนมูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสนับสนุนนักศึกษาต่างชาติในเยอรมนี",
  icon: "🇩🇪",
  link: "https://www.fes.de/studienfoerderung"
},
{
  id: 147,
  name: "Heinrich Böll Foundation Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เยอรมนี",
  type: "ทุนมูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇩🇪",
  link: "https://www.boell.de/en/foundation/scholarships"
},

{
  id: 148,
  name: "Australia Awards Scholarships",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามประเทศ",
  description: "ทุนรัฐบาลออสเตรเลียสำหรับประเทศที่เข้าร่วม",
  icon: "🇦🇺",
  link: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships"
},
{
  id: 149,
  name: "Australia for ASEAN Scholarships",
  level: "ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลออสเตรเลียสำหรับผู้นำจากประเทศอาเซียน",
  icon: "🇦🇺",
  link: "https://www.dfat.gov.au/people-to-people/australia-awards"
},
{
  id: 150,
  name: "Research Training Program (RTP)",
  level: "ปริญญาโทวิจัย / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามมหาวิทยาลัย",
  description: "ทุนวิจัยระดับบัณฑิตศึกษาของรัฐบาลออสเตรเลีย",
  icon: "🇦🇺",
  link: "https://www.education.gov.au/research-training-program"
},
{
  id: 151,
  name: "ANU Chancellor's International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ Australian National University",
  icon: "🇦🇺",
  link: "https://study.anu.edu.au/scholarships/find-scholarship/anu-chancellors-international-scholarship"
},
{
  id: 152,
  name: "Monash International Leadership Scholarship",
  level: "ปริญญาตรี",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนค่าเล่าเรียนเต็มจำนวนสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://www.monash.edu/study/fees-scholarships/scholarships/find-a-scholarship"
},
{
  id: 153,
  name: "Monash International Merit Scholarship",
  level: "ปริญญาตรี",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนดี",
  icon: "🇦🇺",
  link: "https://www.monash.edu/study/fees-scholarships/scholarships/find-a-scholarship"
},
{
  id: 154,
  name: "Monash Thailand Award",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาจากประเทศไทย",
  icon: "🇦🇺",
  link: "https://www.monash.edu/study/fees-scholarships/scholarships/find-a-scholarship"
},
{
  id: 155,
  name: "Melbourne Research Scholarship",
  level: "ปริญญาโทวิจัย / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "พิจารณาอัตโนมัติ",
  description: "ทุนวิจัยสำหรับนักศึกษาต่างชาติและในประเทศ",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/awards/melbourne-research-scholarship"
},
{
  id: 156,
  name: "Graduate Research Scholarships – University of Melbourne",
  level: "ปริญญาโทวิจัย / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยระดับบัณฑิตศึกษาของ University of Melbourne",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships"
},
{
  id: 157,
  name: "UNSW International Scientia Coursework Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนค่าเล่าเรียนสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://www.scholarships.unsw.edu.au/scholarships/id/1988/7272"
},
{
  id: 158,
  name: "UNSW International Student Award",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ส่วนลดค่าเล่าเรียนสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://www.scholarships.unsw.edu.au/international-student-award"
},
{
  id: 159,
  name: "UQ International Onshore Merit Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "พิจารณาอัตโนมัติ",
  description: "ทุนลดค่าเล่าเรียนสำหรับนักศึกษาต่างชาติที่มีคุณสมบัติ",
  icon: "🇦🇺",
  link: "https://scholarships.uq.edu.au/scholarship/international-onshore-merit-scholarship"
},
{
  id: 160,
  name: "University of Adelaide Global Citizens Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนลดค่าเล่าเรียนสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://international.adelaide.edu.au/admissions/scholarships/global-citizens-scholarships.html"
},

{
  id: 161,
  name: "University of Adelaide Global Academic Excellence Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับผู้สมัครที่มีผลการเรียนโดดเด่น",
  icon: "🇦🇺",
  link: "https://international.adelaide.edu.au/admissions/scholarships/global-academic-excellence-scholarship"
},
{
  id: 162,
  name: "University of Adelaide Alumni Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับศิษย์เก่าที่ศึกษาต่อ",
  icon: "🇦🇺",
  link: "https://international.adelaide.edu.au/admissions/scholarships/alumni-scholarships"
},
{
  id: 163,
  name: "University of Adelaide Family Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาที่มีสมาชิกครอบครัวเกี่ยวข้องกับมหาวิทยาลัย",
  icon: "🇦🇺",
  link: "https://international.adelaide.edu.au/admissions/scholarships/family-scholarships"
},
{
  id: 164,
  name: "University of Adelaide College International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "เปิดตามรอบการรับสมัคร",
  description: "ทุนสำหรับผู้สำเร็จการศึกษาจาก University of Adelaide College",
  icon: "🇦🇺",
  link: "https://international.adelaide.edu.au/admissions/scholarships/the-university-of-adelaide-college-international-scholarship"
},
{
  id: 165,
  name: "Sydney School of Health Sciences Dean's International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติด้าน Health Sciences",
  icon: "🇦🇺",
  link: "https://www.sydney.edu.au/scholarships/c/deans-international-scholarship.html"
},
{
  id: 166,
  name: "Human Rights Scholarship – University of Melbourne",
  level: "ปริญญาโทวิจัย / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยด้านสิทธิมนุษยชน",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/awards/human-rights-scholarship"
},
{
  id: 167,
  name: "Norman Macgeorge Scholarship",
  level: "ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาวิจัยด้านศิลปะและมนุษยศาสตร์บางสาขา",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/awards/norman-macgeorge-scholarship"
},
{
  id: 168,
  name: "Hugh Noel Puckle Scholarship",
  level: "ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาวิจัยด้านจักษุวิทยาและโสตศอนาสิก",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/awards/the-hugh-noel-puckle-scholarship"
},
{
  id: 169,
  name: "Gordon and Isabel Humphrey Scholarship",
  level: "ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยระดับปริญญาเอกด้านวิศวกรรม",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/awards/gordon-and-isabel-humphrey-scholarship"
},
{
  id: 170,
  name: "Dr Jim Desmarchelier Scholarship",
  level: "ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาวิจัยด้านเคมี",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/awards/dr-jim-desmarchelier-scholarship"
},

{
  id: 171,
  name: "NUS ASEAN Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบสมัคร NUS",
  description: "ทุนสำหรับนักเรียนจากประเทศอาเซียน",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/oam/scholarships/important-dates-and-application"
},
{
  id: 172,
  name: "NUS Science & Technology Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบสมัคร NUS",
  description: "ทุนสำหรับนักศึกษาต่างชาติในสาขาวิทยาศาสตร์และเทคโนโลยี",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/oam/scholarships/important-dates-and-application"
},
{
  id: 173,
  name: "NUS International Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบสมัคร NUS",
  description: "ทุนสำหรับนักศึกษาต่างชาติทุกประเทศยกเว้นสิงคโปร์",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/oam/scholarships/scholarships-for-freshmen-international-students/nus-international-undergraduate-scholarship"
},
{
  id: 174,
  name: "Goh Keng Swee Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนภาคเอกชน",
  deadline: "ตามรอบสมัคร",
  description: "ทุนสำหรับนักศึกษาจากประเทศในเอเชียที่กำหนด",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/oam/scholarships/important-dates-and-application"
},
{
  id: 175,
  name: "NTU Nanyang Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนและศักยภาพโดดเด่น",
  icon: "🇸🇬",
  link: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships"
},
{
  id: 176,
  name: "NTU ASEAN Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักเรียนจากประเทศอาเซียน",
  icon: "🇸🇬",
  link: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships"
},
{
  id: 177,
  name: "SMU International Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Singapore Management University",
  icon: "🇸🇬",
  link: "https://admissions.smu.edu.sg/financial-aid/scholarships"
},

{
  id: 178,
  name: "Lester B. Pearson International Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ University of Toronto",
  icon: "🇨🇦",
  link: "https://future.utoronto.ca/finances/scholarships/"
},
{
  id: 179,
  name: "UBC International Scholars Program",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนและภาวะผู้นำโดดเด่น",
  icon: "🇨🇦",
  link: "https://you.ubc.ca/financial-planning/scholarships-awards-international/"
},
{
  id: 180,
  name: "UBC International Major Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าเรียน UBC",
  icon: "🇨🇦",
  link: "https://you.ubc.ca/financial-planning/scholarships-awards-international/"
},
{
  id: 181,
  name: "McGill Entrance Bursary Program",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ความช่วยเหลือด้านการเงินสำหรับนักศึกษาที่เข้าใหม่",
  icon: "🇨🇦",
  link: "https://www.mcgill.ca/studentaid/"
},
{
  id: 182,
  name: "McGill International Student Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและความช่วยเหลือสำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇦",
  link: "https://www.mcgill.ca/studentaid/"
},
{
  id: 183,
  name: "University of Waterloo International Student Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าใหม่",
  icon: "🇨🇦",
  link: "https://uwaterloo.ca/future-students/financing/scholarships"
},
{
  id: 184,
  name: "York University International Student Scholarship of Excellence",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนดี",
  icon: "🇨🇦",
  link: "https://futurestudents.yorku.ca/financialsupport"
},
{
  id: 185,
  name: "University of Alberta International Admission Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่สมัครเข้า University of Alberta",
  icon: "🇨🇦",
  link: "https://www.ualberta.ca/en/admissions/international/tuition-and-scholarships/index.html"
},
{
  id: 186,
  name: "University of Calgary International Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇨🇦",
  link: "https://www.ucalgary.ca/registrar/awards"
},
{
  id: 187,
  name: "Dalhousie Harmonized Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุนสำหรับนักศึกษาระดับบัณฑิตศึกษา",
  icon: "🇨🇦",
  link: "https://www.dal.ca/faculty/gradstudies/funding/scholarships.html"
},
{
  id: 188,
  name: "Ontario Graduate Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนรัฐบาลจังหวัด",
  deadline: "แตกต่างตามมหาวิทยาลัย",
  description: "ทุนระดับบัณฑิตศึกษาของ Ontario",
  icon: "🇨🇦",
  link: "https://osap.gov.on.ca/"
},
{
  id: 189,
  name: "Ontario Trillium Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนรัฐบาลจังหวัด",
  deadline: "แตกต่างตามมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาเอกใน Ontario",
  icon: "🇨🇦",
  link: "https://www.ontario.ca/page/ontario-trillium-scholarship"
},
{
  id: 190,
  name: "Vanier Canada Graduate Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนปริญญาเอกระดับประเทศของแคนาดา",
  icon: "🇨🇦",
  link: "https://vanier.gc.ca/en/home-accueil.html"
},

{
  id: 191,
  name: "Pierre Elliott Trudeau Foundation Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนมูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนปริญญาเอกด้านสังคมศาสตร์และมนุษยศาสตร์",
  icon: "🇨🇦",
  link: "https://www.trudeaufoundation.ca/scholarship"
},
{
  id: 192,
  name: "Concordia Presidential Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนโดดเด่น",
  icon: "🇨🇦",
  link: "https://www.concordia.ca/students/financial-support/scholarships-awards.html"
},
{
  id: 193,
  name: "SFU International Undergraduate Scholars Award",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇨🇦",
  link: "https://www.sfu.ca/students/financialaid/undergrad.html"
},
{
  id: 194,
  name: "University of Ottawa President's Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนโดดเด่น",
  icon: "🇨🇦",
  link: "https://www.uottawa.ca/study/fees-financial-support/scholarships"
},
{
  id: 195,
  name: "Queen's University Principal Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนโดดเด่น",
  icon: "🇨🇦",
  link: "https://www.queensu.ca/admission/financial-aid"
},
{
  id: 196,
  name: "Western International President's Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ตามรอบรับสมัคร",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้า Western University",
  icon: "🇨🇦",
  link: "https://welcome.uwo.ca/money_matters/scholarships.html"
},
{
  id: 197,
  name: "University of British Columbia Graduate Global Leadership Fellowship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนมหาวิทยาลัย",
  deadline: "แตกต่างตามหลักสูตร",
  description: "ทุนสำหรับนักศึกษาระดับบัณฑิตศึกษาจากประเทศกำลังพัฒนา",
  icon: "🇨🇦",
  link: "https://www.grad.ubc.ca/awards/graduate-global-leadership-fellowship"
},
{
  id: 198,
  name: "Thailand Scholarships",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "แตกต่างตามมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษาต่างชาติในมหาวิทยาลัยไทย",
  icon: "🇹🇭",
  link: "https://www.ops.go.th/en/inter-news-announcement/inter-announcement/item/14130-thailand-scholarships-year-2026-group-2-all-nationalities"
},
{
  id: 199,
  name: "Thailand International Postgraduate Programme Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนรัฐบาล/มหาวิทยาลัย",
  deadline: "แตกต่างตามสถาบัน",
  description: "โอกาสทุนสำหรับนักศึกษาต่างชาติในประเทศไทย",
  icon: "🇹🇭",
  link: "https://www.ops.go.th/en/inter-news-announcement"
},
{
  id: 200,
  name: "ทุนรัฐบาลไทยสำหรับนักศึกษาต่างชาติ",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศประจำปี",
  description: "ทุนและโครงการสนับสนุนนักศึกษาต่างชาติจากหน่วยงานรัฐบาลไทยและสถาบันที่เข้าร่วม",
  icon: "🇹🇭",
  link: "https://www.ops.go.th/en/inter-news-announcement"
},{
  id: 201,
  name: "Thailand Scholarships 2026 Group 2",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลไทยสำหรับนักศึกษาต่างชาติหลายสัญชาติ",
  icon: "🇹🇭",
  link: "https://www.ops.go.th/th/inter-news-announcement/inter-announcement/research-and-scholarships/item/14130-thailand-scholarships-year-2026-group-2-all-nationalities"
},
{
  id: 202,
  name: "Thailand Scholarships 2026 Group 1",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับผู้สมัครจากกัมพูชา ลาว เมียนมา และเวียดนาม",
  icon: "🇹🇭",
  link: "https://are.eco.ku.ac.th/wp-content/uploads/2026/01/thailand-scholarships-2026-group-1-clmv-1.pdf"
},
{
  id: 203,
  name: "Chula LINK Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ได้รับการตอบรับจากจุฬาลงกรณ์มหาวิทยาลัย",
  icon: "🇹🇭",
  link: "https://www.inter.chula.ac.th/funding-opportunity/37857/"
},
{
  id: 204,
  name: "Mahidol Postgraduate Scholarships for International Students",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษามหาวิทยาลัยมหิดล",
  icon: "🇹🇭",
  link: "https://graduate.mahidol.ac.th/inter/prospective-students/?p=scholarship&scholarship=mahidol-postgraduate-scholarships-international-2026"
},
{
  id: 205,
  name: "Ubon Ratchathani University International Graduate Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับบัณฑิตศึกษาสำหรับนักศึกษาต่างชาติ",
  icon: "🇹🇭",
  link: "https://www.ubu.ac.th/web/ubuenglish/content/University%20Scholarship/"
},
{
  id: 206,
  name: "SEARCA–Kasetsart University Scholarship",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาจากเอเชียตะวันออกเฉียงใต้ด้านเกษตรและเศรษฐศาสตร์ทรัพยากร",
  icon: "🇹🇭",
  link: "https://kuic.ku.ac.th/scholarships/"
},
{
  id: 207,
  name: "Kasetsart University Graduate Scholarship for International Students",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับบัณฑิตศึกษาสำหรับนักศึกษาต่างชาติ",
  icon: "🇹🇭",
  link: "https://www.grad.ku.ac.th/en/scholarships/"
},
{
  id: 208,
  name: "Royal Thai Government Science and Technology Scholarship",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลไทยด้านวิทยาศาสตร์และเทคโนโลยีสำหรับศึกษาต่อในและต่างประเทศ",
  icon: "🇹🇭",
  link: "https://stscholar.nstda.or.th/en-home/"
},
{
  id: 209,
  name: "MUIC Scholarship for Asian Students from Low-Income Countries",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักเรียนเอเชียจากประเทศรายได้ต่ำที่เข้าเรียน MUIC",
  icon: "🇹🇭",
  link: "https://muic.mahidol.ac.th/en/study-at-muic/scholarships-financial-aid/muic-scholarships/"
},
{
  id: 210,
  name: "DAAD-SEARCA In-Country/In-Region Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เอเชียตะวันออกเฉียงใต้",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับการศึกษาระดับบัณฑิตศึกษาในภูมิภาคเอเชียตะวันออกเฉียงใต้",
  icon: "🌏",
  link: "https://www.searca.org/scholarships"
},
{
  id: 211,
  name: "Erasmus+ International Credit Mobility",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ยุโรป",
  type: "ทุนแลกเปลี่ยน",
  deadline: "ตรวจสอบมหาวิทยาลัยต้นสังกัด",
  description: "ทุนสนับสนุนการแลกเปลี่ยนนักศึกษาระหว่างมหาวิทยาลัย",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/"
},
{
  id: 212,
  name: "Erasmus Mundus Joint Masters",
  level: "ปริญญาโท",
  country: "ยุโรป / หลายประเทศ",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบแต่ละหลักสูตร",
  description: "ทุนปริญญาโทร่วมหลายมหาวิทยาลัยในยุโรป",
  icon: "🇪🇺",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 213,
  name: "Chevening Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลสหราชอาณาจักรสำหรับปริญญาโทแบบเต็มเวลา",
  icon: "🇬🇧",
  link: "https://www.chevening.org/scholarships/"
},
{
  id: 214,
  name: "Australia Awards Scholarships",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลออสเตรเลียสำหรับผู้สมัครจากประเทศที่เข้าร่วมโครงการ",
  icon: "🇦🇺",
  link: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships"
},
{
  id: 215,
  name: "Swedish Institute Scholarship for Global Professionals",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลสวีเดนสำหรับผู้สมัครระดับปริญญาโท",
  icon: "🇸🇪",
  link: "https://apply-scholarships.si.se/"
},
{
  id: 216,
  name: "SI Pioneering Women in STEM",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับผู้หญิงจากประเทศที่มีสิทธิ์ในสาขา STEM",
  icon: "🇸🇪",
  link: "https://apply-scholarships.si.se/"
},
{
  id: 217,
  name: "Stipendium Hungaricum",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ฮังการี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลฮังการีสำหรับนักศึกษาต่างชาติ",
  icon: "🇭🇺",
  link: "https://stipendiumhungaricum.hu/"
},
{
  id: 218,
  name: "DAAD Study Scholarship",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุน DAAD สำหรับนักศึกษาต่างชาติที่ต้องการศึกษาต่อในเยอรมนี",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
},
{
  id: 219,
  name: "DAAD Research Grants",
  level: "ปริญญาเอก / นักวิจัย",
  country: "เยอรมนี",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนการวิจัยและการศึกษาระดับปริญญาเอก",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
},
{
  id: 220,
  name: "Eiffel Excellence Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ฝรั่งเศส",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลฝรั่งเศสสำหรับนักศึกษาต่างชาติ",
  icon: "🇫🇷",
  link: "https://www.campusfrance.org/en/eiffel-scholarship-program"
},
{
  id: 221,
  name: "Swiss Government Excellence Scholarships",
  level: "ปริญญาโท / ปริญญาเอก / วิจัย",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลสวิตเซอร์แลนด์สำหรับนักศึกษาและนักวิจัยต่างชาติ",
  icon: "🇨🇭",
  link: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html"
},
{
  id: 222,
  name: "VLIR-UOS Scholarships",
  level: "ปริญญาโท",
  country: "เบลเยียม",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับผู้สมัครจากประเทศกำลังพัฒนาที่เข้าร่วมโครงการ",
  icon: "🇧🇪",
  link: "https://www.vliruos.be/en/scholarships"
},
{
  id: 223,
  name: "ARES Scholarships",
  level: "ปริญญาโท",
  country: "เบลเยียม",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับหลักสูตรระดับปริญญาโทและการฝึกอบรม",
  icon: "🇧🇪",
  link: "https://www.ares-ac.be/en/cooperation-au-developpement/bourses"
},
{
  id: 224,
  name: "NL Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "เนเธอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบมหาวิทยาลัย",
  description: "ทุนสำหรับนักศึกษานอกเขต European Economic Area",
  icon: "🇳🇱",
  link: "https://www.studyinnl.org/finances/nl-scholarship"
},
{
  id: 225,
  name: "Italian Government Scholarships",
  level: "ปริญญาโท / ปริญญาเอก / วิจัย",
  country: "อิตาลี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลอิตาลีสำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇹",
  link: "https://studyinitaly.esteri.it/"
},
{
  id: 226,
  name: "Türkiye Scholarships",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ตุรกี",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่างชาติ",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 227,
  name: "Romanian Government Scholarship",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "โรมาเนีย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลโรมาเนียสำหรับนักศึกษาต่างชาติ",
  icon: "🇷🇴",
  link: "https://studyinromania.gov.ro/scholarships"
},
{
  id: 228,
  name: "Banach Scholarship Programme",
  level: "ปริญญาโท",
  country: "โปแลนด์",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลโปแลนด์สำหรับนักศึกษาจากประเทศที่เข้าร่วม",
  icon: "🇵🇱",
  link: "https://nawa.gov.pl/en/students/foreign-students/the-banach-scholarship-programme"
},
{
  id: 229,
  name: "Clarendon Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตามกำหนดสมัครหลักสูตร Oxford",
  description: "ทุนระดับบัณฑิตศึกษาของ University of Oxford",
  icon: "🇬🇧",
  link: "https://www.ox.ac.uk/admissions/graduate/fees-and-funding/funding/clarendon/applicants"
},
{
  id: 230,
  name: "Rhodes Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบเขตประเทศ",
  description: "ทุนสำหรับศึกษาต่อที่ University of Oxford",
  icon: "🇬🇧",
  link: "https://www.rhodeshouse.ox.ac.uk/scholarships/"
},
{
  id: 231,
  name: "Gates Cambridge Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตามกำหนดสมัคร Cambridge",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇬🇧",
  link: "https://www.cam.ac.uk/stories/gates-scholars-2026"
},
{
  id: 232,
  name: "GREAT Scholarships",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบแต่ละมหาวิทยาลัย",
  description: "ทุนร่วมระหว่าง British Council และมหาวิทยาลัยในสหราชอาณาจักร",
  icon: "🇬🇧",
  link: "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships"
},
{
  id: 233,
  name: "University of Warwick Chancellor's Scholarship",
  level: "ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับปริญญาเอกสำหรับนักศึกษาต่างชาติ",
  icon: "🇬🇧",
  link: "https://warwick.ac.uk/services/dc/schols_fund/scholarships_and_funding/chancellors/"
},
{
  id: 234,
  name: "Bristol Think Big Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University of Bristol",
  icon: "🇬🇧",
  link: "https://www.bristol.ac.uk/students/fees-funding/international/think-big/"
},
{
  id: 235,
  name: "University of Edinburgh Global Undergraduate Mathematics Scholarship",
  level: "ปริญญาตรี",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติในสาขาคณิตศาสตร์",
  icon: "🇬🇧",
  link: "https://www.ed.ac.uk/student-funding/undergraduate/international"
},
{
  id: 236,
  name: "University of Edinburgh Global Research Scholarship",
  level: "ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนวิจัยสำหรับนักศึกษาต่างชาติระดับปริญญาเอก",
  icon: "🇬🇧",
  link: "https://www.ed.ac.uk/student-funding/postgraduate/international"
},
{
  id: 237,
  name: "Nottingham Developing Solutions Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาจากประเทศกำลังพัฒนา",
  icon: "🇬🇧",
  link: "https://www.nottingham.ac.uk/fees-and-funding/scholarships/index.aspx"
},
{
  id: 238,
  name: "Sussex Chancellor's International Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇬🇧",
  link: "https://www.sussex.ac.uk/study/fees-funding/scholarships"
},
{
  id: 239,
  name: "University of Glasgow Global Excellence Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนดี",
  icon: "🇬🇧",
  link: "https://www.gla.ac.uk/scholarships/"
},
{
  id: 240,
  name: "Loughborough International Scholarships",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Loughborough University",
  icon: "🇬🇧",
  link: "https://www.lboro.ac.uk/study/undergraduate/fees-funding/scholarships-bursaries/"
},
{
  id: 241,
  name: "Leeds International Excellence Scholarship",
  level: "ปริญญาตรี",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇬🇧",
  link: "https://www.leeds.ac.uk/undergraduate-fees-funding"
},
{
  id: 242,
  name: "Birmingham Global Masters Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇬🇧",
  link: "https://www.birmingham.ac.uk/study/fees-and-funding/scholarships"
},
{
  id: 243,
  name: "Queen Mary Global Talent Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇬🇧",
  link: "https://www.qmul.ac.uk/scholarships/"
},
{
  id: 244,
  name: "St Andrews International Excellence Scholarship",
  level: "ปริญญาตรี",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนโดดเด่น",
  icon: "🇬🇧",
  link: "https://www.st-andrews.ac.uk/study/fees-and-funding/scholarships/"
},
{
  id: 245,
  name: "Newcastle University Vice-Chancellor's Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Newcastle University",
  icon: "🇬🇧",
  link: "https://www.ncl.ac.uk/study/international/fees-funding/scholarships/"
},
{
  id: 246,
  name: "University of Exeter Global Excellence Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนดี",
  icon: "🇬🇧",
  link: "https://www.exeter.ac.uk/study/fees/scholarships/"
},
{
  id: 247,
  name: "University of Bath Global Leaders Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇬🇧",
  link: "https://www.bath.ac.uk/courses/postgraduate-2026/taught-postgraduate-scholarships/"
},
{
  id: 248,
  name: "Imperial President's PhD Scholarship",
  level: "ปริญญาเอก",
  country: "สหราชอาณาจักร",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนปริญญาเอกของ Imperial College London",
  icon: "🇬🇧",
  link: "https://www.imperial.ac.uk/study/fees-and-funding/postgraduate-doctoral/doctoral-scholarships/"
},
{
  id: 249,
  name: "LSE Graduate Support Scheme",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนค่าใช้จ่ายสำหรับนักศึกษาระดับบัณฑิตศึกษา",
  icon: "🇬🇧",
  link: "https://www.lse.ac.uk/study-at-lse/Graduate/fees-and-funding"
},
{
  id: 250,
  name: "UCL Global Masters Scholarship",
  level: "ปริญญาโท",
  country: "สหราชอาณาจักร",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติจากประเทศรายได้ต่ำ",
  icon: "🇬🇧",
  link: "https://www.ucl.ac.uk/scholarships/ucl-global-masters-scholarship"
},{
  id: 251,
  name: "Knight-Hennessy Scholars",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สหรัฐอเมริกา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับบัณฑิตศึกษาสำหรับนักศึกษาต่างชาติที่ Stanford University",
  icon: "🇺🇸",
  link: "https://knight-hennessy.stanford.edu/"
},
{
  id: 252,
  name: "Schwarzman Scholars",
  level: "ปริญญาโท",
  country: "จีน",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนปริญญาโทด้าน Global Affairs ที่ Tsinghua University",
  icon: "🇨🇳",
  link: "https://www.schwarzmanscholars.org/"
},
{
  id: 253,
  name: "Fulbright Foreign Student Program",
  level: "ปริญญาโท / ปริญญาเอก / วิจัย",
  country: "สหรัฐอเมริกา",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุน Fulbright สำหรับนักศึกษาต่างชาติที่ต้องการศึกษาหรือทำวิจัยในสหรัฐฯ",
  icon: "🇺🇸",
  link: "https://foreign.fulbrightonline.org/"
},
{
  id: 254,
  name: "Hubert H. Humphrey Fellowship Program",
  level: "ระดับบัณฑิตศึกษา / ฝึกอบรม",
  country: "สหรัฐอเมริกา",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "โครงการทุนและฝึกอบรมสำหรับผู้เชี่ยวชาญจากประเทศต่าง ๆ",
  icon: "🇺🇸",
  link: "https://www.humphreyfellowship.org/"
},
{
  id: 255,
  name: "Berea College International Student Scholarship",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าเรียนระดับปริญญาตรี",
  icon: "🇺🇸",
  link: "https://www.berea.edu/admissions/international-students/"
},
{
  id: 256,
  name: "Yale Young Global Scholars",
  level: "มัธยมปลาย",
  country: "สหรัฐอเมริกา",
  type: "โครงการการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "โครงการศึกษาภาคฤดูร้อนสำหรับนักเรียนมัธยมจากทั่วโลก",
  icon: "🇺🇸",
  link: "https://globalscholars.yale.edu/"
},
{
  id: 257,
  name: "Lester B. Pearson International Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี University of Toronto",
  icon: "🇨🇦",
  link: "https://future.utoronto.ca/pearson/about/"
},
{
  id: 258,
  name: "UBC International Scholars Program",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนและศักยภาพโดดเด่น",
  icon: "🇨🇦",
  link: "https://you.ubc.ca/financial-planning/scholarships-international-students/"
},
{
  id: 259,
  name: "UBC International Leader of Tomorrow Award",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี University of British Columbia",
  icon: "🇨🇦",
  link: "https://you.ubc.ca/financial-planning/scholarships-international-students/"
},
{
  id: 260,
  name: "UBC Donald A. Wehrung International Student Award",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มาจากสภาพเศรษฐกิจที่ยากลำบาก",
  icon: "🇨🇦",
  link: "https://you.ubc.ca/financial-planning/scholarships-international-students/"
},
{
  id: 261,
  name: "Vanier Canada Graduate Scholarships",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลแคนาดาสำหรับนักศึกษาปริญญาเอก",
  icon: "🇨🇦",
  link: "https://vanier.gc.ca/en/home-accueil.html"
},
{
  id: 262,
  name: "Pierre Elliott Trudeau Foundation Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนปริญญาเอกสำหรับผู้ทำวิจัยด้านสังคมศาสตร์และมนุษยศาสตร์",
  icon: "🇨🇦",
  link: "https://www.trudeaufoundation.ca/scholarship"
},
{
  id: 263,
  name: "University of Waterloo International Student Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าศึกษาระดับปริญญาตรี",
  icon: "🇨🇦",
  link: "https://uwaterloo.ca/future-students/financing/scholarships"
},
{
  id: 264,
  name: "York University International Student Scholarship of Excellence",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนโดดเด่น",
  icon: "🇨🇦",
  link: "https://futurestudents.yorku.ca/financialsupport"
},
{
  id: 265,
  name: "University of Alberta International Admission Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่สมัครเข้า University of Alberta",
  icon: "🇨🇦",
  link: "https://www.ualberta.ca/en/admissions/international/admissions-information/international-scholarships.html"
},
{
  id: 266,
  name: "University of Calgary International Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เริ่มเรียนระดับปริญญาตรี",
  icon: "🇨🇦",
  link: "https://www.ucalgary.ca/registrar/awards/scholarships"
},
{
  id: 267,
  name: "Dalhousie Harmonized Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับบัณฑิตศึกษาของ Dalhousie University",
  icon: "🇨🇦",
  link: "https://www.dal.ca/faculty/gradstudies/funding/scholarships.html"
},
{
  id: 268,
  name: "Ontario Trillium Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับปริญญาเอกสำหรับนักศึกษาต่างชาติใน Ontario",
  icon: "🇨🇦",
  link: "https://www.ontario.ca/page/ontario-trillium-scholarship"
},
{
  id: 269,
  name: "Monash International Leadership Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีศักยภาพด้านภาวะผู้นำ",
  icon: "🇦🇺",
  link: "https://www.monash.edu/study/fees-scholarships/scholarships/find-a-scholarship"
},
{
  id: 270,
  name: "Monash International Merit Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนดี",
  icon: "🇦🇺",
  link: "https://www.monash.edu/study/fees-scholarships/scholarships/find-a-scholarship"
},
{
  id: 271,
  name: "Monash Thailand Award",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนส่วนลดค่าเล่าเรียนสำหรับนักศึกษาจากประเทศไทย",
  icon: "🇦🇺",
  link: "https://www.monash.edu/study/fees-scholarships/scholarships/find-a-scholarship"
},
{
  id: 272,
  name: "Macquarie University International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Macquarie University",
  icon: "🇦🇺",
  link: "https://www.mq.edu.au/study/admissions-and-entry/scholarships/international"
},
{
  id: 273,
  name: "Macquarie University International Research Scholarship",
  level: "ปริญญาโทวิจัย / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ต้องการทำวิจัยระดับบัณฑิตศึกษา",
  icon: "🇦🇺",
  link: "https://www.mq.edu.au/research/phd-and-research-degrees/how-to-apply/scholarship-opportunities"
},
{
  id: 274,
  name: "University of Melbourne Graduate Research Scholarship",
  level: "ปริญญาโทวิจัย / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนวิจัยสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships"
},
{
  id: 275,
  name: "University of Melbourne Human Rights Scholarship",
  level: "ปริญญาโทวิจัย / ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนวิจัยสำหรับผู้ศึกษาด้านสิทธิมนุษยชน",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/awards/human-rights-scholarship"
},
{
  id: 276,
  name: "UQ International Onshore Merit Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีคุณสมบัติตามเกณฑ์ของ UQ",
  icon: "🇦🇺",
  link: "https://scholarships.uq.edu.au/scholarship/international-onshore-merit-scholarship"
},
{
  id: 277,
  name: "UNSW International Scientia Coursework Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับ coursework",
  icon: "🇦🇺",
  link: "https://www.scholarships.unsw.edu.au/scholarships/id/1988/7272"
},
{
  id: 278,
  name: "UNSW International Student Award",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนค่าเล่าเรียนสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://www.scholarships.unsw.edu.au/international-student-award"
},
{
  id: 279,
  name: "University of Sydney Dean's International Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University of Sydney",
  icon: "🇦🇺",
  link: "https://www.sydney.edu.au/scholarships/c/deans-international-scholarship.html"
},
{
  id: 280,
  name: "University of Adelaide Global Citizens Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรีและปริญญาโท",
  icon: "🇦🇺",
  link: "https://international.adelaide.edu.au/admissions/scholarships/the-university-of-adelaide-global-citizens-scholarship"
},
{
  id: 281,
  name: "University of Adelaide Global Academic Excellence Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "ออสเตรเลีย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนโดดเด่น",
  icon: "🇦🇺",
  link: "https://international.adelaide.edu.au/admissions/scholarships/global-academic-excellence-scholarship"
},
{
  id: 282,
  name: "University of Auckland International Student Excellence Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "นิวซีแลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนดี",
  icon: "🇳🇿",
  link: "https://www.auckland.ac.nz/en/study/scholarships-and-awards/find-a-scholarship/university-of-auckland-international-student-excellence-scholarship-844-all.html"
},
{
  id: 283,
  name: "University of Otago International Master's Research Scholarship",
  level: "ปริญญาโทวิจัย",
  country: "นิวซีแลนด์",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโทวิจัย",
  icon: "🇳🇿",
  link: "https://www.otago.ac.nz/study/scholarships/university-of-otago-international-masters-research-scholarship"
},
{
  id: 284,
  name: "University of Otago Global Master's Scholarship",
  level: "ปริญญาโท",
  country: "นิวซีแลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇳🇿",
  link: "https://www.otago.ac.nz/international/future-students/fees-scholarships/international-scholarships"
},
{
  id: 285,
  name: "NUS International Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี National University of Singapore",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/oam/scholarships/scholarships-for-freshmen-international-students/nus-international-undergraduate-scholarship"
},
{
  id: 286,
  name: "NUS ASEAN Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาจากประเทศสมาชิกอาเซียน",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/oam/scholarships/scholarships-for-freshmen-international-students"
},
{
  id: 287,
  name: "NUS Science & Technology Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติในสาขาวิทยาศาสตร์และเทคโนโลยี",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/oam/scholarships/scholarships-for-freshmen-international-students"
},
{
  id: 288,
  name: "NUS Graduate Scholarships",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "สิงคโปร์",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาระดับบัณฑิตศึกษาของ NUS",
  icon: "🇸🇬",
  link: "https://nus.edu.sg/graduate-school/scholarships"
},
{
  id: 289,
  name: "KAIST International Student Scholarship",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าเรียน KAIST",
  icon: "🇰🇷",
  link: "https://admission.kaist.ac.kr/intl-undergraduate/financial-support/"
},
{
  id: 290,
  name: "Seoul National University Global Korea Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุน GKS สำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇰🇷",
  link: "https://en.snu.ac.kr/admission/graduate"
},
{
  id: 291,
  name: "POSTECH International Student Scholarship",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าเรียน POSTECH",
  icon: "🇰🇷",
  link: "https://adm-u.postech.ac.kr/"
},
{
  id: 292,
  name: "Korea University Global KU Scholarship",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Korea University",
  icon: "🇰🇷",
  link: "https://oia.korea.ac.kr/"
},
{
  id: 293,
  name: "Yonsei University International Student Scholarship",
  level: "ปริญญาตรี / ปริญญาโท",
  country: "เกาหลีใต้",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Yonsei University",
  icon: "🇰🇷",
  link: "https://oia.yonsei.ac.kr/"
},
{
  id: 294,
  name: "ETH Zurich Excellence Scholarship & Opportunity Programme",
  level: "ปริญญาโท",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาปริญญาโทที่มีผลการเรียนโดดเด่น",
  icon: "🇨🇭",
  link: "https://ethz.ch/students/en/studies/financial/scholarships/excellencescholarship.html"
},
{
  id: 295,
  name: "EPFL Excellence Fellowships",
  level: "ปริญญาโท",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาปริญญาโทของ EPFL",
  icon: "🇨🇭",
  link: "https://www.epfl.ch/education/studies/en/financing-study/scholarships/"
},
{
  id: 296,
  name: "University of Geneva Excellence Master Fellowship",
  level: "ปริญญาโท",
  country: "สวิตเซอร์แลนด์",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาปริญญาโทที่มีผลการเรียนดี",
  icon: "🇨🇭",
  link: "https://www.unige.ch/sciences/masters/en/financial-support/excellence-fellowships/"
},
{
  id: 297,
  name: "Lund University Global Scholarship",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇸🇪",
  link: "https://www.lunduniversity.lu.se/study/admissions/scholarships"
},
{
  id: 298,
  name: "Uppsala University Global Scholarship",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇸🇪",
  link: "https://www.uu.se/en/study/masters-studies/scholarships"
},
{
  id: 299,
  name: "KTH Scholarship",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโทที่ KTH",
  icon: "🇸🇪",
  link: "https://www.kth.se/en/studies/master/general/scholarships"
},
{
  id: 300,
  name: "Chalmers IPOET Scholarship",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโทของ Chalmers University",
  icon: "🇸🇪",
  link: "https://www.chalmers.se/en/education/studying-at-chalmers/tuition-fees-and-scholarships/"
},{
  id: 301,
  name: "ทุนเล่าเรียนหลวง",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลสำหรับนักเรียนมัธยมศึกษาตอนปลายที่มีผลการเรียนและคุณสมบัติตามเกณฑ์",
  icon: "🇹🇭",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
},
{
  id: 302,
  name: "ทุนรัฐบาลด้านวิทยาศาสตร์และเทคโนโลยี",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลสำหรับนักเรียนที่มีความสนใจด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
},
{
  id: 303,
  name: "ทุนกระทรวงการต่างประเทศ",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลสำหรับนักเรียนมัธยมศึกษาตอนปลายตามโครงการของกระทรวงการต่างประเทศ",
  icon: "🇹🇭",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
},
{
  id: 304,
  name: "ทุนวิวัฒนไชยานุสรณ์",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักเรียนระดับมัธยมศึกษาตอนปลาย",
  icon: "🎓",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
},
{
  id: 305,
  name: "โครงการ ODOS",
  level: "มัธยมศึกษาตอนปลาย / ปวช.",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "โครงการทุนการศึกษาเพื่อขยายโอกาสและพัฒนาประเทศสำหรับนักเรียนและนักศึกษา",
  icon: "🇹🇭",
  link: "https://www.eef.or.th/odos-scholarship/"
},
{
  id: 306,
  name: "ทุนเสมอภาค",
  level: "ประถมศึกษา / มัธยมศึกษา",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "เงินอุดหนุนสำหรับนักเรียนที่ขาดแคลนทุนทรัพย์ผ่านกองทุนเพื่อความเสมอภาคทางการศึกษา",
  icon: "🎒",
  link: "https://www.eef.or.th/fund/support-poor-students/"
},
{
  id: 307,
  name: "ทุนการศึกษามหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษามหาวิทยาลัยมหิดลที่ขาดแคลนทุนทรัพย์",
  icon: "🇹🇭",
  link: "https://op.mahidol.ac.th/sa/scholarship-mu/"
},
{
  id: 308,
  name: "ทุนภูมิพล มหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาที่เรียนดี ขาดแคลนทุนทรัพย์ และมีผลงานกิจกรรม",
  icon: "👑",
  link: "https://mahidol.ac.th/th/new-current-student/scholarship/"
},
{
  id: 309,
  name: "ทุนฉุกเฉินมหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนช่วยเหลือ",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "เงินช่วยเหลือนักศึกษาที่ประสบเหตุการณ์ร้ายแรงหรือปัญหาครอบครัว",
  icon: "🆘",
  link: "https://mahidol.ac.th/th/new-current-student/scholarship/"
},
{
  id: 310,
  name: "ทุนช่วยเหลือพิเศษ มูลนิธิมหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนช่วยเหลือ",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนช่วยเหลือพิเศษสำหรับนักศึกษามหาวิทยาลัยมหิดล",
  icon: "❤️",
  link: "https://op.mahidol.ac.th/sa/scholarship/"
},
{
  id: 311,
  name: "ทุนสมาคมศิษย์เก่ามหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนการศึกษาจากสมาคมศิษย์เก่ามหาวิทยาลัยมหิดล",
  icon: "🎓",
  link: "https://op.mahidol.ac.th/sa/scholarship/"
},
{
  id: 312,
  name: "ทุนนักศึกษาช่วยงาน มหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนทำงาน",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนสำหรับนักศึกษาที่ช่วยปฏิบัติงานภายในมหาวิทยาลัย",
  icon: "💼",
  link: "https://op.mahidol.ac.th/sa/scholarship/"
},
{
  id: 313,
  name: "ทุนการศึกษาสำหรับนักศึกษาพิการ มหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนค่าใช้จ่ายทางการศึกษาสำหรับนักศึกษาพิการ",
  icon: "♿",
  link: "https://op.mahidol.ac.th/sa/scholarship/"
},
{
  id: 314,
  name: "ทุนมหิดลวิทยาจารย์",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนค่าเล่าเรียน ค่าครองชีพ และงานวิจัยสำหรับนักศึกษาระดับปริญญาเอก",
  icon: "🔬",
  link: "https://op.mahidol.ac.th/sa/scholarmsp/"
},
{
  id: 315,
  name: "ทุนบัณฑิตวิทยาลัย มหาวิทยาลัยมหิดล",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาระดับบัณฑิตศึกษาของมหาวิทยาลัยมหิดล",
  icon: "🎓",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship"
},
{
  id: 316,
  name: "ทุนช่วยเหลือนักศึกษาพิการระดับบัณฑิตศึกษา มหิดล",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาพิการระดับบัณฑิตศึกษา",
  icon: "♿",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship"
},
{
  id: 317,
  name: "ทุนการศึกษานักศึกษาระดับบัณฑิตศึกษา ประเภทนักศึกษาผู้ทำกิจกรรม",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษาที่มีผลงานด้านกิจกรรม",
  icon: "🏆",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship"
},
{
  id: 318,
  name: "ทุนวิทยานิพนธ์ดีเด่น มหาวิทยาลัยมหิดล",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "รางวัลการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "รางวัลสำหรับผลงานวิทยานิพนธ์ที่มีคุณภาพโดดเด่น",
  icon: "🏆",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship"
},
{
  id: 319,
  name: "ทุนอุดหนุนการศึกษาจุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนช่วยเหลือค่าเล่าเรียนและค่าใช้จ่ายสำหรับนิสิตจุฬาฯ",
  icon: "🎓",
  link: "https://www.sa.chula.ac.th/fund/scholarship/"
},
{
  id: 320,
  name: "ทุนภูมิพล จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนิสิตที่เรียนดีและนิสิตที่มีผลการเรียนดีแต่ขาดแคลนทุนทรัพย์",
  icon: "👑",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 321,
  name: "ทุนสร้างชื่อเสียงและทำคุณประโยชน์ จุฬาฯ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนรางวัล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนิสิตที่มีผลงานโดดเด่นด้านกีฬา วิชาการ ศิลปวัฒนธรรม หรือกิจกรรมเพื่อสังคม",
  icon: "🏆",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 322,
  name: "ทุนจุฬาฯ ชนบท",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนนักเรียนจากพื้นที่ชนบทที่มีศักยภาพทางการศึกษา",
  icon: "🏡",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 323,
  name: "ทุนอุดหนุนการศึกษาสำหรับนิสิตพิการ จุฬาฯ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนค่าใช้จ่ายทางการศึกษาสำหรับนิสิตพิการ",
  icon: "♿",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 324,
  name: "ทุนอุดหนุนการศึกษาระดับบัณฑิตศึกษา จุฬาฯ",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนการศึกษาสำหรับนิสิตระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 325,
  name: "ทุน 100 ปีจุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนการศึกษาระดับปริญญาเอกของจุฬาลงกรณ์มหาวิทยาลัย",
  icon: "🎓",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 326,
  name: "CU-NSTDA Doctoral Scholarship",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับปริญญาเอกที่เกี่ยวข้องกับจุฬาลงกรณ์มหาวิทยาลัยและ สวทช.",
  icon: "🔬",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 327,
  name: "Chulalongkorn University Overseas Students Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🌏",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 328,
  name: "Chulalongkorn University Teaching Assistant Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนผู้ช่วยสอน",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนิสิตระดับบัณฑิตศึกษาที่ทำหน้าที่ช่วยสอน",
  icon: "👨‍🏫",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 329,
  name: "Chulalongkorn University Research Assistant Scholarship",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนิสิตระดับบัณฑิตศึกษาที่ทำงานวิจัย",
  icon: "🔬",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 330,
  name: "ทุน 90 ปีจุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนงานวิจัยสำหรับนิสิตระดับบัณฑิตศึกษา",
  icon: "🔬",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 331,
  name: "Overseas Research Experience Scholarship จุฬาฯ",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย / ต่างประเทศ",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนประสบการณ์วิจัยในต่างประเทศสำหรับนิสิตบัณฑิตศึกษา",
  icon: "✈️",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 332,
  name: "Overseas Academic Presentation Scholarship จุฬาฯ",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย / ต่างประเทศ",
  type: "ทุนวิชาการ",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนการนำเสนอผลงานวิชาการในต่างประเทศ",
  icon: "🌎",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 333,
  name: "Graduate Scholarship Program for ASEAN and Non-ASEAN Countries",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับบัณฑิตศึกษาสำหรับนักศึกษาต่างชาติจาก ASEAN และประเทศอื่น ๆ",
  icon: "🌏",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 334,
  name: "The Second Century FUND (C2F) PhD Scholarship",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนปริญญาเอกและงานวิจัยของจุฬาลงกรณ์มหาวิทยาลัย",
  icon: "🔬",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 335,
  name: "ทุนส่วนกลางมหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่ที่ขาดแคลนทุนทรัพย์",
  icon: "🐘",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},
{
  id: 336,
  name: "ทุนการศึกษาคณะ มหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี / ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนที่จัดสรรโดยคณะและวิทยาลัยต่าง ๆ ของมหาวิทยาลัยเชียงใหม่",
  icon: "🐘",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},
{
  id: 337,
  name: "ทุนการศึกษาเตรียมความพร้อมเป็นนักศึกษา มช.",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักเรียนที่ได้รับคัดเลือกเข้าเรียนมหาวิทยาลัยเชียงใหม่",
  icon: "🎓",
  link: "https://www.cmu.ac.th/th/firstyear/Scholarships"
},
{
  id: 338,
  name: "ทุนการศึกษาสำหรับนักศึกษาชั้นปีที่ 1 มช.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนส่วนกลางสำหรับนักศึกษาชั้นปีที่ 1 มหาวิทยาลัยเชียงใหม่",
  icon: "🐘",
  link: "https://www.cmu.ac.th/th/firstyear/UniversityScholarships"
},
{
  id: 339,
  name: "ทุนการศึกษานักศึกษาทุกชั้นปี มช.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนส่วนกลางสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่ทุกชั้นปี",
  icon: "🐘",
  link: "https://www.cmu.ac.th/th/firstyear/UniversityScholarships"
},
{
  id: 340,
  name: "ทุนผู้ช่วยสอน มหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนผู้ช่วยสอน",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนสำหรับนิสิตบัณฑิตศึกษาที่ทำหน้าที่ช่วยสอน",
  icon: "👨‍🏫",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},
{
  id: 341,
  name: "Kasetsart University Presidential Graduate Scholarship Initiative",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับบัณฑิตศึกษาของมหาวิทยาลัยเกษตรศาสตร์",
  icon: "🌾",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},
{
  id: 342,
  name: "Graduate Scholarship for International Students Under Double or Joint Degree Programs",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติภายใต้หลักสูตร Double Degree หรือ Joint Degree",
  icon: "🌏",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},
{
  id: 343,
  name: "ทุนอุดหนุนการศึกษาประเภท ข มหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนการศึกษาสำหรับนิสิตมหาวิทยาลัยเกษตรศาสตร์",
  icon: "🌾",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},
{
  id: 344,
  name: "ทุนน้องใหม่ลูกพระจอมเกล้า",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาใหม่ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  icon: "🎓",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 345,
  name: "ทุนขาดแคลนทุนทรัพย์ คณะศิลปศาสตร์ สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาคณะศิลปศาสตร์ที่ขาดแคลนทุนทรัพย์",
  icon: "📚",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 346,
  name: "ทุนผู้ทำคุณประโยชน์ให้แก่สถาบัน สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนรางวัล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสำหรับนักศึกษาที่สร้างประโยชน์ให้แก่สถาบัน",
  icon: "🏆",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 347,
  name: "ทุนการศึกษาเพชรพระจอมเกล้ามหาบัณฑิต",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนระดับมหาบัณฑิตของมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  icon: "💎",
  link: "https://www.kmutt.ac.th/sfa/"
},
{
  id: 348,
  name: "ทุนการศึกษาแสดเหลืองเรืองรุ่ง",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  icon: "🎓",
  link: "https://www.kmutt.ac.th/sfa/"
},
{
  id: 349,
  name: "ทุนเพื่อประสบการณ์วิจัยและการเรียนรู้ประยุกต์ Applied Learning",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนประสบการณ์",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนสนับสนุนประสบการณ์วิจัยและการเรียนรู้ผ่านการทำงาน",
  icon: "🔬",
  link: "https://www.kmutt.ac.th/sfa/"
},// ==================== ทุนไทย 351-650 ====================

{
  id: 351,
  name: "ทุนผู้ยากจน มหาวิทยาลัยอุบลราชธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีฐานะยากจนและขาดแคลนทุนทรัพย์",
  icon: "🇹🇭",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 352,
  name: "ทุนสนับสนุนการศึกษา มหาวิทยาลัยอุบลราชธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนค่าใช้จ่ายทางการศึกษาสำหรับนักศึกษามหาวิทยาลัยอุบลราชธานี",
  icon: "🎓",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 353,
  name: "ทุนการศึกษามูลนิธินายห้างโรงปูนผู้หนึ่ง",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ติดตามประกาศ",
  description: "ทุนบริจาคสำหรับนักศึกษามหาวิทยาลัยอุบลราชธานี",
  icon: "🏆",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 354,
  name: "ทุนการศึกษาประเภททุนต่อเนื่อง มหาวิทยาลัยอุบลราชธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนต่อเนื่อง",
  deadline: "ติดตามประกาศ",
  description: "ทุนที่สนับสนุนต่อเนื่องจนสำเร็จการศึกษาตามเงื่อนไข",
  icon: "📚",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 355,
  name: "ทุนสนับสนุนการศึกษา คณะรัฐศาสตร์ มหาวิทยาลัยอุบลราชธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนคณะ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาคณะรัฐศาสตร์",
  icon: "🏛️",
  link: "https://scholarship.ubu.ac.th/"
},

{
  id: 356,
  name: "ทุนอุดหนุนการศึกษาประเภท ก สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนอุดหนุนการศึกษาสำหรับนักศึกษาชั้นปีที่ 1",
  icon: "🎓",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 357,
  name: "ทุนอุดหนุนการศึกษาประเภท ข สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนอุดหนุนการศึกษาสำหรับนักศึกษาชั้นปีที่ 2 ขึ้นไป",
  icon: "🎓",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 358,
  name: "ทุนขาดแคลนทุนทรัพย์ คณะศิลปศาสตร์ สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาคณะศิลปศาสตร์ที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 359,
  name: "ทุนน้องใหม่ลูกพระจอม สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาใหม่ของสถาบัน",
  icon: "🌟",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 360,
  name: "ทุนผู้ทำคุณประโยชน์ให้แก่สถาบัน สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนคุณประโยชน์",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานหรือสร้างประโยชน์ให้แก่สถาบัน",
  icon: "🏅",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 361,
  name: "ทุนมูลนิธิป่อเต็กตึ๊งสำหรับนักศึกษาชั้นปีสุดท้าย สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ติดตามประกาศ",
  description: "ทุนจากมูลนิธิป่อเต็กตึ๊งสำหรับนักศึกษาชั้นปีสุดท้าย",
  icon: "🏆",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 362,
  name: "ทุนมูลนิธิชิน โสภณพนิช",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ติดตามประกาศ",
  description: "ทุนเพื่อส่งเสริมโอกาสทางการศึกษา",
  icon: "🎓",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 363,
  name: "ทุนวิจิตรพงศ์พันธุ์เพื่อส่งเสริมศาสนา การศึกษา และสังคม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาและกิจกรรมเพื่อสังคม",
  icon: "🌱",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},

{
  id: 364,
  name: "ทุนการศึกษามหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยมหิดล",
  icon: "🎓",
  link: "https://op.mahidol.ac.th/sa/scholarship-mu/"
},
{
  id: 365,
  name: "ทุนการศึกษาเฉลิมพระเกียรติพระบาทสมเด็จพระบรมชนกาธิเบศร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยมหิดล",
  icon: "👑",
  link: "https://mahidol.ac.th/th/new-current-student/scholarship/"
},
{
  id: 366,
  name: "ทุนฉุกเฉินมหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนช่วยเหลือฉุกเฉิน",
  deadline: "ติดตามประกาศ",
  description: "ความช่วยเหลือสำหรับนักศึกษาที่ประสบปัญหาทางการเงินฉุกเฉิน",
  icon: "🆘",
  link: "https://mahidol.ac.th/th/new-current-student/scholarship/"
},
{
  id: 367,
  name: "ทุนสมาคมศิษย์เก่ามหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนศิษย์เก่า",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาจากสมาคมศิษย์เก่า",
  icon: "🎓",
  link: "https://mahidol.ac.th/th/new-current-student/scholarship/"
},
{
  id: 368,
  name: "ทุนทำงานระหว่างเรียน มหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนทำงานระหว่างเรียน",
  deadline: "ติดตามประกาศ",
  description: "โครงการสนับสนุนนักศึกษาที่ทำงานระหว่างเรียน",
  icon: "💼",
  link: "https://mahidol.ac.th/th/new-current-student/scholarship/"
},
{
  id: 369,
  name: "ทุนช่วยเหลือนักศึกษาพิการ มหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับผู้พิการ",
  deadline: "ติดตามประกาศ",
  description: "ทุนและความช่วยเหลือด้านการศึกษาสำหรับนักศึกษาพิการ",
  icon: "♿",
  link: "https://mahidol.ac.th/th/new-current-student/scholarship/"
},
{
  id: 370,
  name: "ทุนบัณฑิตวิทยาลัย มหาวิทยาลัยมหิดล",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาแรกเข้าระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship"
},
{
  id: 371,
  name: "ทุนบัณฑิตวิทยาลัย มหาวิทยาลัยมหิดล ระดับปริญญาเอก",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาระดับปริญญาเอก",
  icon: "🔬",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship"
},
{
  id: 372,
  name: "ทุนสนับสนุนการทำวิทยานิพนธ์ มหาวิทยาลัยมหิดล",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนและรางวัลสนับสนุนการทำวิทยานิพนธ์",
  icon: "📖",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship"
},
{
  id: 373,
  name: "ทุนสนับสนุนการทำวิทยานิพนธ์ระดับปริญญาเอก มหิดล",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนงานวิจัยและวิทยานิพนธ์ระดับปริญญาเอก",
  icon: "🔬",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship"
},
{
  id: 374,
  name: "ทุนรางวัลนักศึกษาบัณฑิตศึกษา มหาวิทยาลัยมหิดล",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "รางวัลการศึกษา",
  deadline: "ติดตามประกาศ",
  description: "รางวัลสำหรับนักศึกษาระดับบัณฑิตศึกษาที่มีผลงานโดดเด่น",
  icon: "🏆",
  link: "https://graduate.mahidol.ac.th/thai/?p=scholarship"
},

{
  id: 375,
  name: "ทุนการศึกษาจุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนิสิตจุฬาลงกรณ์มหาวิทยาลัย",
  icon: "🎓",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 376,
  name: "ทุนการศึกษาประเภท ก จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนิสิตที่มีความต้องการด้านทุนทรัพย์",
  icon: "💙",
  link: "https://www.sa.chula.ac.th/fund/scholarship/"
},
{
  id: 377,
  name: "ทุนการศึกษาประเภท ข จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนิสิตตามเกณฑ์ของมหาวิทยาลัย",
  icon: "💙",
  link: "https://www.sa.chula.ac.th/fund/scholarship/"
},
{
  id: 378,
  name: "ทุนการศึกษาประเภท ค จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสนับสนุน",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนิสิตตามเงื่อนไขของมหาวิทยาลัย",
  icon: "🎓",
  link: "https://www.sa.chula.ac.th/fund/scholarship/"
},
{
  id: 379,
  name: "ทุนภูมิพล จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาสำหรับนิสิตจุฬาลงกรณ์มหาวิทยาลัย",
  icon: "👑",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 380,
  name: "ทุนจุฬาฯ ชนบท",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเพื่อโอกาสทางการศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนิสิตจากพื้นที่ชนบทและผู้ขาดโอกาส",
  icon: "🌾",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 381,
  name: "ทุนช่วยเหลือนิสิตพิการ จุฬาฯ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับผู้พิการ",
  deadline: "ติดตามประกาศ",
  description: "ทุนและการสนับสนุนสำหรับนิสิตพิการ",
  icon: "♿",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 382,
  name: "ทุนการศึกษาระดับบัณฑิตศึกษา จุฬาฯ",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 383,
  name: "ทุน 100 ปี จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาและการวิจัยระดับบัณฑิตศึกษา",
  icon: "💯",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 384,
  name: "ทุน CU-NSTDA Doctoral Scholarship",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนระดับปริญญาเอกด้านการวิจัยร่วมกับหน่วยงานด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 385,
  name: "ทุนผู้ช่วยสอน จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "Teaching Assistant",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนสำหรับนักศึกษาบัณฑิตศึกษาที่ทำหน้าที่ผู้ช่วยสอน",
  icon: "👨‍🏫",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 386,
  name: "ทุนผู้ช่วยวิจัย จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "Research Assistant",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาที่ทำงานวิจัย",
  icon: "🔬",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 387,
  name: "ทุน C2F จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาปริญญาเอกและงานวิจัย",
  icon: "🧪",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},

{
  id: 388,
  name: "ทุนกลางมหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาจากมหาวิทยาลัยเชียงใหม่สำหรับนักศึกษา",
  icon: "🎓",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},
{
  id: 389,
  name: "ทุนคณะ มหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนคณะ",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาจากคณะต่าง ๆ ของมหาวิทยาลัยเชียงใหม่",
  icon: "🏫",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},
{
  id: 390,
  name: "ทุนเตรียมความพร้อมนักศึกษาใหม่ มหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาใหม่ของมหาวิทยาลัยเชียงใหม่",
  icon: "🌟",
  link: "https://www.cmu.ac.th/th/firstyear/Scholarships"
},
{
  id: 391,
  name: "ทุนกลางสำหรับนักศึกษาใหม่ มหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่จากมหาวิทยาลัย",
  icon: "🎓",
  link: "https://www.cmu.ac.th/th/firstyear/UniversityScholarships"
},
{
  id: 392,
  name: "ทุนสำหรับนักศึกษาทุกชั้นปี มหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาสำหรับนักศึกษาหลายชั้นปี",
  icon: "📚",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},

{
  id: 393,
  name: "ทุนผู้ช่วยสอน มหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "Teaching Assistant",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาบัณฑิตศึกษาที่ปฏิบัติงานด้านการสอน",
  icon: "👨‍🏫",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},
{
  id: 394,
  name: "ทุนบัณฑิตศึกษามหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},
{
  id: 395,
  name: "ทุน Presidential Graduate Scholarship Initiative",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนบัณฑิตศึกษาภายใต้โครงการของมหาวิทยาลัยเกษตรศาสตร์",
  icon: "👑",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},
{
  id: 396,
  name: "ทุน Double/Joint Degree มหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนร่วมหลักสูตร",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาต่างประเทศและหลักสูตรสองปริญญา/ร่วมปริญญา",
  icon: "🌏",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},

{
  id: 397,
  name: "ทุนแสดเหลืองเรืองรุ่ง มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  icon: "🌟",
  link: "https://www.kmutt.ac.th/sfa/"
},
{
  id: 398,
  name: "ทุนเพชรพระจอมเกล้ามหาบัณฑิต",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาระดับปริญญาโท",
  icon: "💎",
  link: "https://www.kmutt.ac.th/sfa/"
},
{
  id: 399,
  name: "ทุน Applied Learning มจธ.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนประสบการณ์",
  deadline: "ติดตามประกาศ",
  description: "การสนับสนุนการทำงาน การวิจัย และประสบการณ์จากการเรียนรู้จริง",
  icon: "💼",
  link: "https://www.kmutt.ac.th/sfa/"
},

{
  id: 400,
  name: "ทุนรัฐบาลไทยสำหรับนักเรียนมัธยมศึกษาตอนปลาย",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ติดตามประกาศ",
  description: "ทุนรัฐบาลสำหรับนักเรียนระดับมัธยมศึกษาตอนปลาย",
  icon: "🇹🇭",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
},
{
  id: 401,
  name: "ทุนเล่าเรียนหลวง",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ติดตามประกาศ",
  description: "ทุนรัฐบาลสำหรับนักเรียนมัธยมศึกษาตอนปลาย",
  icon: "👑",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
},
{
  id: 402,
  name: "ทุนวิทยาศาสตร์และเทคโนโลยีสำหรับนักเรียนมัธยมปลาย",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ติดตามประกาศ",
  description: "ทุนรัฐบาลด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
},
{
  id: 403,
  name: "ทุนกระทรวงการต่างประเทศสำหรับนักเรียนมัธยมปลาย",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ติดตามประกาศ",
  description: "ทุนรัฐบาลภายใต้กระทรวงการต่างประเทศ",
  icon: "🌏",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
},
{
  id: 404,
  name: "ทุนวิวัฒนไชยานุสรณ์",
  level: "มัธยมศึกษาตอนปลาย",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ติดตามประกาศ",
  description: "ทุนรัฐบาลสำหรับนักเรียนมัธยมศึกษาตอนปลาย",
  icon: "🏅",
  link: "https://www.ocsc.go.th/scholarships/highschool-scholarships/"
},
{
  id: 405,
  name: "ทุน ODOS",
  level: "มัธยมศึกษาตอนปลาย/ปวช.",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ติดตามประกาศ",
  description: "โครงการทุนเพื่อสร้างโอกาสทางการศึกษาสำหรับเยาวชน",
  icon: "🌏",
  link: "https://www.eef.or.th/odos-scholarship/"
},
{
  id: 406,
  name: "ทุนเสมอภาค",
  level: "อนุบาล-มัธยมศึกษา",
  country: "ไทย",
  type: "ทุนช่วยเหลือผู้ขาดแคลน",
  deadline: "ติดตามประกาศ",
  description: "ความช่วยเหลือทางการศึกษาสำหรับนักเรียนที่มีความยากจน",
  icon: "💙",
  link: "https://www.eef.or.th/fund/support-poor-students/"
},
{
  id: 407,
  name: "ทุนการศึกษากองทุนเพื่อความเสมอภาคทางการศึกษา",
  level: "มัธยมศึกษา",
  country: "ไทย",
  type: "ทุนการศึกษา",
  deadline: "ติดตามประกาศ",
  description: "สนับสนุนเด็กและเยาวชนที่ขาดโอกาสทางการศึกษา",
  icon: "📚",
  link: "https://findstudentship.eef.or.th/scholarship"
},

// มหาวิทยาลัยและทุนคณะต่าง ๆ

{
  id: 408,
  name: "ทุนการศึกษามหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยธรรมศาสตร์",
  icon: "🎓",
  link: "https://www.tu.ac.th/"
},
{
  id: 409,
  name: "ทุนช่วยเหลือนักศึกษาขาดแคลน มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีปัญหาด้านค่าใช้จ่าย",
  icon: "💙",
  link: "https://www.tu.ac.th/"
},
{
  id: 410,
  name: "ทุนคณะเศรษฐศาสตร์ มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนคณะ",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาสำหรับนักศึกษาคณะเศรษฐศาสตร์",
  icon: "📊",
  link: "https://grants.econ.tu.ac.th/"
},
{
  id: 411,
  name: "ทุนเรียนดี มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนโดดเด่น",
  icon: "🏅",
  link: "https://www.tu.ac.th/"
},
{
  id: 412,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานด้านกิจกรรม",
  icon: "⭐",
  link: "https://www.tu.ac.th/"
},

{
  id: 413,
  name: "ทุนการศึกษามหาวิทยาลัยศิลปากร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยศิลปากร",
  icon: "🎨",
  link: "https://www.su.ac.th/"
},
{
  id: 414,
  name: "ทุนเรียนดี มหาวิทยาลัยศิลปากร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏅",
  link: "https://www.su.ac.th/"
},
{
  id: 415,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยศิลปากร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีความต้องการด้านการเงิน",
  icon: "💙",
  link: "https://www.su.ac.th/"
},

{
  id: 416,
  name: "ทุนการศึกษามหาวิทยาลัยขอนแก่น",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยขอนแก่น",
  icon: "🎓",
  link: "https://www.kku.ac.th/"
},
{
  id: 417,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยขอนแก่น",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.kku.ac.th/"
},
{
  id: 418,
  name: "ทุนเรียนดี มหาวิทยาลัยขอนแก่น",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.kku.ac.th/"
},
{
  id: 419,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยขอนแก่น",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาที่มีผลงานกิจกรรม",
  icon: "⭐",
  link: "https://www.kku.ac.th/"
},

{
  id: 420,
  name: "ทุนการศึกษามหาวิทยาลัยมหาสารคาม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.msu.ac.th/"
},
{
  id: 421,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยมหาสารคาม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีฐานะยากจน",
  icon: "💙",
  link: "https://www.msu.ac.th/"
},
{
  id: 422,
  name: "ทุนเรียนดี มหาวิทยาลัยมหาสารคาม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนโดดเด่น",
  icon: "🏅",
  link: "https://www.msu.ac.th/"
},

{
  id: 423,
  name: "ทุนการศึกษามหาวิทยาลัยนเรศวร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยนเรศวร",
  icon: "🎓",
  link: "https://www.nu.ac.th/"
},
{
  id: 424,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยนเรศวร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ประสบปัญหาทางการเงิน",
  icon: "💙",
  link: "https://www.nu.ac.th/"
},
{
  id: 425,
  name: "ทุนเรียนดี มหาวิทยาลัยนเรศวร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.nu.ac.th/"
},

{
  id: 426,
  name: "ทุนการศึกษามหาวิทยาลัยบูรพา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยบูรพา",
  icon: "🎓",
  link: "https://www.buu.ac.th/"
},
{
  id: 427,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยบูรพา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.buu.ac.th/"
},
{
  id: 428,
  name: "ทุนเรียนดี มหาวิทยาลัยบูรพา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏅",
  link: "https://www.buu.ac.th/"
},

{
  id: 429,
  name: "ทุนการศึกษามหาวิทยาลัยศรีนครินทรวิโรฒ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนิสิตมหาวิทยาลัยศรีนครินทรวิโรฒ",
  icon: "🎓",
  link: "https://www.swu.ac.th/"
},
{
  id: 430,
  name: "ทุนขาดแคลนทุนทรัพย์ มศว",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนิสิตที่มีข้อจำกัดด้านการเงิน",
  icon: "💙",
  link: "https://www.swu.ac.th/"
},
{
  id: 431,
  name: "ทุนเรียนดี มศว",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนิสิตที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.swu.ac.th/"
},

{
  id: 432,
  name: "ทุนการศึกษามหาวิทยาลัยศรีปทุม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนและส่วนลดการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.spu.ac.th/"
},
{
  id: 433,
  name: "ทุนเรียนดี มหาวิทยาลัยศรีปทุม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนโดดเด่น",
  icon: "🏅",
  link: "https://www.spu.ac.th/"
},

{
  id: 434,
  name: "ทุนการศึกษามหาวิทยาลัยรังสิต",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยรังสิต",
  icon: "🎓",
  link: "https://www.rsu.ac.th/"
},
{
  id: 435,
  name: "ทุนเรียนดี มหาวิทยาลัยรังสิต",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับผู้มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.rsu.ac.th/"
},

{
  id: 436,
  name: "ทุนการศึกษามหาวิทยาลัยกรุงเทพ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.bu.ac.th/"
},
{
  id: 437,
  name: "ทุนความสามารถพิเศษ มหาวิทยาลัยกรุงเทพ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนความสามารถพิเศษ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับผู้มีความสามารถหรือผลงานโดดเด่น",
  icon: "⭐",
  link: "https://www.bu.ac.th/"
},

{
  id: 438,
  name: "ทุนการศึกษามหาวิทยาลัยหอการค้าไทย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.utcc.ac.th/"
},
{
  id: 439,
  name: "ทุนเรียนดีมหาวิทยาลัยหอการค้าไทย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏅",
  link: "https://www.utcc.ac.th/"
},

{
  id: 440,
  name: "ทุนการศึกษามหาวิทยาลัยอัสสัมชัญ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยอัสสัมชัญ",
  icon: "🎓",
  link: "https://www.au.edu/"
},
{
  id: 441,
  name: "ทุนความสามารถพิเศษ มหาวิทยาลัยอัสสัมชัญ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนความสามารถพิเศษ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับผู้มีความสามารถและผลงานโดดเด่น",
  icon: "⭐",
  link: "https://www.au.edu/"
},

{
  id: 442,
  name: "ทุนการศึกษามหาวิทยาลัยแม่ฟ้าหลวง",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยแม่ฟ้าหลวง",
  icon: "🎓",
  link: "https://www.mfu.ac.th/"
},
{
  id: 443,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยแม่ฟ้าหลวง",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.mfu.ac.th/"
},

{
  id: 444,
  name: "ทุนการศึกษามหาวิทยาลัยพะเยา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยพะเยา",
  icon: "🎓",
  link: "https://www.up.ac.th/"
},
{
  id: 445,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยพะเยา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีความต้องการทางการเงิน",
  icon: "💙",
  link: "https://www.up.ac.th/"
},

{
  id: 446,
  name: "ทุนการศึกษามหาวิทยาลัยวลัยลักษณ์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยวลัยลักษณ์",
  icon: "🎓",
  link: "https://www.wu.ac.th/"
},
{
  id: 447,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยวลัยลักษณ์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.wu.ac.th/"
},

{
  id: 448,
  name: "ทุนการศึกษามหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยสงขลานครินทร์",
  icon: "🎓",
  link: "https://www.psu.ac.th/"
},
{
  id: 449,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.psu.ac.th/"
},
{
  id: 450,
  name: "ทุนเรียนดี มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.psu.ac.th/"
},

{
  id: 451,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีสุรนารี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.sut.ac.th/"
},
{
  id: 452,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยเทคโนโลยีสุรนารี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.sut.ac.th/"
},
{
  id: 453,
  name: "ทุนการศึกษามหาวิทยาลัยแม่โจ้",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษามหาวิทยาลัยแม่โจ้",
  icon: "🌱",
  link: "https://www.mju.ac.th/"
},
{
  id: 454,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยแม่โจ้",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ประสบปัญหาด้านการเงิน",
  icon: "💙",
  link: "https://www.mju.ac.th/"
},
{
  id: 455,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.cmru.ac.th/"
},
{
  id: 456,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยราชภัฏเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีความต้องการด้านการเงิน",
  icon: "💙",
  link: "https://www.cmru.ac.th/"
},
{
  id: 457,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสวนสุนันทา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://ssru.ac.th/"
},
{
  id: 458,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยราชภัฏสวนสุนันทา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://ssru.ac.th/"
},
{
  id: 459,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสวนดุสิต",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.dusit.ac.th/"
},
{
  id: 460,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเชียงราย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.crru.ac.th/"
},

// 461-500

{
  id: 461,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏลำปาง",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.lpru.ac.th/"
},
{
  id: 462,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏอุตรดิตถ์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.uru.ac.th/"
},
{
  id: 463,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเพชรบุรี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.pbru.ac.th/"
},
{
  id: 464,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏนครปฐม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.npru.ac.th/"
},
{
  id: 465,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏพระนคร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.pnru.ac.th/"
},
{
  id: 466,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏพระนครศรีอยุธยา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.aru.ac.th/"
},
{
  id: 467,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏนครราชสีมา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.nrru.ac.th/"
},
{
  id: 468,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏอุบลราชธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.ubru.ac.th/"
},
{
  id: 469,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏร้อยเอ็ด",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.reru.ac.th/"
},
{
  id: 470,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏบุรีรัมย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.bru.ac.th/"
},
{
  id: 471,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสุรินทร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.srru.ac.th/"
},
{
  id: 472,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏศรีสะเกษ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.sskru.ac.th/"
},
{
  id: 473,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏชัยภูมิ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.cpru.ac.th/"
},
{
  id: 474,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏนครสวรรค์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.nsru.ac.th/"
},
{
  id: 475,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏกำแพงเพชร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.kpru.ac.th/"
},
{
  id: 476,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเพชรบูรณ์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.pcru.ac.th/"
},
{
  id: 477,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเลย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.lru.ac.th/"
},
{
  id: 478,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสกลนคร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.snru.ac.th/"
},
{
  id: 479,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏอุดรธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.udru.ac.th/"
},
{
  id: 480,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏมหาสารคาม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmu.ac.th/"
},

// 481-520

{
  id: 481,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏกาญจนบุรี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.kru.ac.th/"
},
{
  id: 482,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏหมู่บ้านจอมบึง",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.mcru.ac.th/"
},
{
  id: 483,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏนครศรีธรรมราช",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.nstru.ac.th/"
},
{
  id: 484,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏภูเก็ต",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.pkru.ac.th/"
},
{
  id: 485,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสุราษฎร์ธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.sru.ac.th/"
},
{
  id: 486,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏยะลา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.yru.ac.th/"
},
{
  id: 487,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสงขลา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.skru.ac.th/"
},
{
  id: 488,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏพระนครศรีอยุธยา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.aru.ac.th/"
},
{
  id: 489,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏธนบุรี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.dru.ac.th/"
},
{
  id: 490,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏบ้านสมเด็จเจ้าพระยา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.bsru.ac.th/"
},

{
  id: 491,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏวไลยอลงกรณ์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.vru.ac.th/"
},
{
  id: 492,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏจันทรเกษม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.chandra.ac.th/"
},
{
  id: 493,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏรำไพพรรณี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rbru.ac.th/"
},
{
  id: 494,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเพชรบุรี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.pbru.ac.th/"
},
{
  id: 495,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเทพสตรี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.tru.ac.th/"
},
{
  id: 496,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏพระนคร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.pnru.ac.th/"
},
{
  id: 497,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสวนสุนันทา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://ssru.ac.th/"
},
{
  id: 498,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสวนดุสิต",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.dusit.ac.th/"
},
{
  id: 499,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏพระนครศรีอยุธยา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.aru.ac.th/"
},
{
  id: 500,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏนครปฐม",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.npru.ac.th/"
},

// 501-550

{
  id: 501,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutt.ac.th/"
},
{
  id: 502,
  name: "ทุนขาดแคลนทุนทรัพย์ มทร.ธัญบุรี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.rmutt.ac.th/"
},
{
  id: 503,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutk.ac.th/"
},
{
  id: 504,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutp.ac.th/"
},
{
  id: 505,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutl.ac.th/"
},
{
  id: 506,
  name: "ทุนขาดแคลนทุนทรัพย์ มทร.ล้านนา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีข้อจำกัดทางการเงิน",
  icon: "💙",
  link: "https://www.rmutl.ac.th/"
},
{
  id: 507,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmuti.ac.th/"
},
{
  id: 508,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutsv.ac.th/"
},
{
  id: 509,
  name: "ทุนขาดแคลนทุนทรัพย์ มทร.ศรีวิชัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.rmutsv.ac.th/"
},
{
  id: 510,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutsb.ac.th/"
},

{
  id: 511,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutto.ac.th/"
},
{
  id: 512,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutr.ac.th/"
},
{
  id: 513,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรีสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.rmutt.ac.th/"
},
{
  id: 514,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.kmutnb.ac.th/"
},
{
  id: 515,
  name: "ทุนขาดแคลนทุนทรัพย์ มจพ.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.kmutnb.ac.th/"
},

{
  id: 516,
  name: "ทุนการศึกษามหาวิทยาลัยสวนดุสิต",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.dusit.ac.th/"
},
{
  id: 517,
  name: "ทุนการศึกษามหาวิทยาลัยเกษตรศาสตร์สำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌱",
  link: "https://www.ku.ac.th/"
},
{
  id: 518,
  name: "ทุนการศึกษามหาวิทยาลัยมหิดลสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาใหม่ที่มีคุณสมบัติตามเกณฑ์",
  icon: "🌟",
  link: "https://op.mahidol.ac.th/sa/scholarship-mu/"
},
{
  id: 519,
  name: "ทุนการศึกษาจุฬาฯ สำหรับนิสิตใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนิสิตใหม่ของจุฬาลงกรณ์มหาวิทยาลัย",
  icon: "🌟",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 520,
  name: "ทุนการศึกษามหาวิทยาลัยธรรมศาสตร์สำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาใหม่ของมหาวิทยาลัยธรรมศาสตร์",
  icon: "🌟",
  link: "https://www.tu.ac.th/"
},

// 521-570

{
  id: 521,
  name: "ทุนการศึกษามหาวิทยาลัยเชียงใหม่สำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.cmu.ac.th/th/firstyear/Scholarships"
},
{
  id: 522,
  name: "ทุนการศึกษามหาวิทยาลัยขอนแก่นสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.kku.ac.th/"
},
{
  id: 523,
  name: "ทุนการศึกษามหาวิทยาลัยสงขลานครินทร์สำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.psu.ac.th/"
},
{
  id: 524,
  name: "ทุนการศึกษามหาวิทยาลัยนเรศวรสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.nu.ac.th/"
},
{
  id: 525,
  name: "ทุนการศึกษามหาวิทยาลัยบูรพาสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.buu.ac.th/"
},
{
  id: 526,
  name: "ทุนการศึกษามหาวิทยาลัยแม่ฟ้าหลวงสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.mfu.ac.th/"
},
{
  id: 527,
  name: "ทุนการศึกษามหาวิทยาลัยพะเยาสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.up.ac.th/"
},
{
  id: 528,
  name: "ทุนการศึกษามหาวิทยาลัยวลัยลักษณ์สำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.wu.ac.th/"
},
{
  id: 529,
  name: "ทุนการศึกษามหาวิทยาลัยแม่โจ้สำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.mju.ac.th/"
},
{
  id: 530,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีสุรนารีสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.sut.ac.th/"
},

{
  id: 531,
  name: "ทุนเรียนดี มหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏅",
  link: "https://www.ku.ac.th/"
},
{
  id: 532,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาที่มีผลงานด้านกิจกรรม",
  icon: "⭐",
  link: "https://www.ku.ac.th/"
},
{
  id: 533,
  name: "ทุนขาดแคลนทุนทรัพย์ มหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีข้อจำกัดทางการเงิน",
  icon: "💙",
  link: "https://www.ku.ac.th/"
},
{
  id: 534,
  name: "ทุนเรียนดี มหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาที่มีผลการเรียนโดดเด่น",
  icon: "🏆",
  link: "https://mahidol.ac.th/th/new-current-student/scholarship/"
},
{
  id: 535,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยมหิดล",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนหรือรางวัลสำหรับนักศึกษาที่มีผลงานกิจกรรม",
  icon: "⭐",
  link: "https://mahidol.ac.th/th/new-current-student/scholarship/"
},
{
  id: 536,
  name: "ทุนเรียนดี จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนิสิตที่มีผลการเรียนโดดเด่น",
  icon: "🏆",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 537,
  name: "ทุนกิจกรรมนิสิต จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนิสิตที่มีผลงานกิจกรรม",
  icon: "⭐",
  link: "https://www.chula.ac.th/academics/admissions/scholarships/"
},
{
  id: 538,
  name: "ทุนเรียนดี มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.tu.ac.th/"
},
{
  id: 539,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยธรรมศาสตร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานกิจกรรม",
  icon: "⭐",
  link: "https://www.tu.ac.th/"
},
{
  id: 540,
  name: "ทุนเรียนดี มหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},

// 541-600

{
  id: 541,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานกิจกรรม",
  icon: "⭐",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},
{
  id: 542,
  name: "ทุนเรียนดี มหาวิทยาลัยขอนแก่น",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.kku.ac.th/"
},
{
  id: 543,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยขอนแก่น",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานกิจกรรม",
  icon: "⭐",
  link: "https://www.kku.ac.th/"
},
{
  id: 544,
  name: "ทุนเรียนดี มหาวิทยาลัยนเรศวร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.nu.ac.th/"
},
{
  id: 545,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยนเรศวร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานกิจกรรม",
  icon: "⭐",
  link: "https://www.nu.ac.th/"
},
{
  id: 546,
  name: "ทุนเรียนดี มหาวิทยาลัยบูรพา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.buu.ac.th/"
},
{
  id: 547,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยบูรพา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานกิจกรรม",
  icon: "⭐",
  link: "https://www.buu.ac.th/"
},
{
  id: 548,
  name: "ทุนเรียนดี มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.psu.ac.th/"
},
{
  id: 549,
  name: "ทุนกิจกรรมนักศึกษา มหาวิทยาลัยสงขลานครินทร์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนกิจกรรม",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลงานกิจกรรม",
  icon: "⭐",
  link: "https://www.psu.ac.th/"
},
{
  id: 550,
  name: "ทุนเรียนดี มหาวิทยาลัยแม่ฟ้าหลวง",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนเรียนดี",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนดี",
  icon: "🏆",
  link: "https://www.mfu.ac.th/"
},

{
  id: 551,
  name: "ทุนการศึกษาจากมูลนิธิป่อเต็กตึ๊ง",
  level: "มัธยมศึกษา/ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับเยาวชนไทย",
  icon: "🏆",
  link: "https://findstudentship.eef.or.th/scholarship"
},
{
  id: 552,
  name: "ทุนการศึกษามูลนิธิชิน โสภณพนิช",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://findstudentship.eef.or.th/scholarship"
},
{
  id: 553,
  name: "ทุนวิจิตรพงศ์พันธุ์เพื่อการศึกษา",
  level: "มัธยมศึกษา/ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ติดตามประกาศ",
  description: "ทุนเพื่อส่งเสริมโอกาสทางการศึกษา",
  icon: "📚",
  link: "https://findstudentship.eef.or.th/scholarship"
},
{
  id: 554,
  name: "ทุนมูลนิธิการศึกษาสำหรับเด็กยากจน",
  level: "ประถมศึกษา/มัธยมศึกษา",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับเด็กและเยาวชนที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://findstudentship.eef.or.th/scholarship"
},
{
  id: 555,
  name: "ทุนการศึกษามูลนิธิเพื่อเด็กและเยาวชน",
  level: "มัธยมศึกษา",
  country: "ไทย",
  type: "ทุนมูลนิธิ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนเด็กและเยาวชนที่ขาดโอกาส",
  icon: "🌱",
  link: "https://findstudentship.eef.or.th/scholarship"
},

{
  id: 556,
  name: "ทุนสนับสนุนจากกองทุนเพื่อความเสมอภาคทางการศึกษา",
  level: "มัธยมศึกษา",
  country: "ไทย",
  type: "ทุนความเสมอภาค",
  deadline: "ติดตามประกาศ",
  description: "การสนับสนุนสำหรับนักเรียนที่มีฐานะยากจน",
  icon: "💙",
  link: "https://findstudentship.eef.or.th/scholarship"
},
{
  id: 557,
  name: "ทุนการศึกษาสำหรับนักเรียนยากจนพิเศษ",
  level: "ประถมศึกษา/มัธยมศึกษา",
  country: "ไทย",
  type: "ทุนความเสมอภาค",
  deadline: "ติดตามประกาศ",
  description: "การช่วยเหลือด้านการศึกษาสำหรับนักเรียนยากจนพิเศษ",
  icon: "💙",
  link: "https://www.eef.or.th/fund/support-poor-students/"
},
{
  id: 558,
  name: "ทุนช่วยเหลือนักเรียนด้อยโอกาส",
  level: "ประถมศึกษา/มัธยมศึกษา",
  country: "ไทย",
  type: "ทุนช่วยเหลือ",
  deadline: "ติดตามประกาศ",
  description: "สนับสนุนการศึกษาสำหรับเด็กด้อยโอกาส",
  icon: "🤝",
  link: "https://findstudentship.eef.or.th/scholarship"
},
{
  id: 559,
  name: "ทุนการศึกษาจากภาคเอกชนผ่านระบบ EEF",
  level: "มัธยมศึกษา/ปริญญาตรี",
  country: "ไทย",
  type: "ทุนภาคเอกชน",
  deadline: "ติดตามประกาศ",
  description: "รวมโอกาสทุนจากองค์กรและบริษัทที่เข้าร่วมระบบ",
  icon: "🏢",
  link: "https://findstudentship.eef.or.th/scholarship"
},
{
  id: 560,
  name: "ทุนการศึกษาจากโรงพยาบาลผ่านระบบ EEF",
  level: "มัธยมศึกษา/ปริญญาตรี",
  country: "ไทย",
  type: "ทุนภายนอก",
  deadline: "ติดตามประกาศ",
  description: "ทุนจากหน่วยงานด้านสุขภาพและโรงพยาบาล",
  icon: "🏥",
  link: "https://findstudentship.eef.or.th/scholarship"
},

// 561-600
{
  id: 561,
  name: "ทุนการศึกษาต่อเนื่อง กรุงเทพมหานคร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนหน่วยงานรัฐ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาต่อเนื่องของกรุงเทพมหานคร",
  icon: "🏙️",
  link: "https://webportal.bangkok.go.th/"
},
{
  id: 562,
  name: "ทุนการศึกษาสำหรับบุตรข้าราชการกรุงเทพมหานคร",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสวัสดิการ",
  deadline: "ติดตามประกาศ",
  description: "ทุนตามสิทธิและสวัสดิการของหน่วยงาน",
  icon: "🎓",
  link: "https://webportal.bangkok.go.th/"
},
{
  id: 563,
  name: "ทุนการศึกษาจังหวัดเชียงใหม่",
  level: "ปวส./ปริญญาตรี",
  country: "ไทย",
  type: "ทุนท้องถิ่น",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนด้านการศึกษาสำหรับผู้มีภูมิลำเนาในเชียงใหม่",
  icon: "🏔️",
  link: "https://edu.chiangmaipao.go.th/edufundcmpao69/"
},
{
  id: 564,
  name: "ทุนช่วยเหลือนักเรียน อบจ.เชียงใหม่",
  level: "อนุบาล-มัธยมศึกษา/ปวช.",
  country: "ไทย",
  type: "ทุนท้องถิ่น",
  deadline: "ติดตามประกาศ",
  description: "เงินช่วยเหลือด้านการศึกษาสำหรับนักเรียนในจังหวัดเชียงใหม่",
  icon: "🏔️",
  link: "https://edu.chiangmaipao.go.th/edufundcmpao69/"
},
{
  id: 565,
  name: "ทุนการศึกษาสำหรับนักศึกษา อบจ.เชียงใหม่",
  level: "ปวส./ปริญญาตรี",
  country: "ไทย",
  type: "ทุนท้องถิ่น",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่มีภูมิลำเนาในจังหวัดเชียงใหม่",
  icon: "🎓",
  link: "https://edu.chiangmaipao.go.th/edufundcmpao69/"
},

{
  id: 566,
  name: "ทุนระดับปริญญาโทสำหรับครูและบุคลากรทางการศึกษา",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนวิชาชีพครู",
  deadline: "ติดตามประกาศ",
  description: "ทุนศึกษาต่อระดับปริญญาโทสำหรับครูและบุคลากรทางการศึกษา",
  icon: "👨‍🏫",
  link: "https://www.otep.go.th/benefits/category/483a4c47-4790-4e08-8613-52d18a17b7ba"
},
{
  id: 567,
  name: "ทุนระดับปริญญาเอกสำหรับครูและบุคลากรทางการศึกษา",
  level: "ปริญญาเอก",
  country: "ไทย",
  type: "ทุนวิชาชีพครู",
  deadline: "ติดตามประกาศ",
  description: "ทุนศึกษาต่อระดับปริญญาเอกสำหรับครูและบุคลากรทางการศึกษา",
  icon: "🔬",
  link: "https://www.otep.go.th/benefits/category/483a4c47-4790-4e08-8613-52d18a17b7ba"
},
{
  id: 568,
  name: "ทุนวิจัยด้านการบริหารการศึกษา สกสค.",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับการศึกษาวิจัยด้านการบริหารการศึกษา",
  icon: "📚",
  link: "https://www.otep.go.th/benefits/category/483a4c47-4790-4e08-8613-52d18a17b7ba"
},

{
  id: 569,
  name: "ทุนรัฐบาลสำหรับบุคลากรภาครัฐ",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ติดตามประกาศ",
  description: "ทุนพัฒนาบุคลากรภาครัฐสำหรับศึกษาต่อหรือฝึกอบรม",
  icon: "🏛️",
  link: "https://www.ocsc.go.th/scholarships/government-personnel-scholarships/scholarships-for-study-program/"
},
{
  id: 570,
  name: "ทุนพัฒนาทักษะและสมรรถนะบุคลากรภาครัฐ",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนรัฐบาล",
  deadline: "ติดตามประกาศ",
  description: "ทุนพัฒนาทักษะและสมรรถนะที่จำเป็นต่อการทำงาน",
  icon: "🏛️",
  link: "https://www.ocsc.go.th/scholarships/government-personnel-scholarships/scholarships-for-study-program/"
},

// 571-650
{
  id: 571,
  name: "ทุนการศึกษามหาวิทยาลัยอุบลราชธานีสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาใหม่ของมหาวิทยาลัยอุบลราชธานี",
  icon: "🌟",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 572,
  name: "ทุนต่อเนื่องมหาวิทยาลัยอุบลราชธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนต่อเนื่อง",
  deadline: "ติดตามประกาศ",
  description: "ทุนที่ให้การสนับสนุนต่อเนื่องตามเงื่อนไข",
  icon: "📚",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 573,
  name: "ทุนรายปีมหาวิทยาลัยอุบลราชธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนรายปี",
  deadline: "ติดตามประกาศ",
  description: "ทุนการศึกษาที่จัดสรรเป็นรายปีการศึกษา",
  icon: "🎓",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 574,
  name: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษาปริญญาตรี ม.อุบลราชธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสนับสนุน",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือค่าใช้จ่ายทางการศึกษา",
  icon: "💙",
  link: "https://scholarship.ubu.ac.th/"
},
{
  id: 575,
  name: "ทุนการศึกษาจากผู้บริจาค มหาวิทยาลัยอุบลราชธานี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนบริจาค",
  deadline: "ติดตามประกาศ",
  description: "ทุนจากผู้บริจาคเพื่อสนับสนุนนักศึกษา",
  icon: "🎁",
  link: "https://scholarship.ubu.ac.th/"
},

{
  id: 576,
  name: "ทุนการศึกษาระดับบัณฑิตศึกษา มหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},
{
  id: 577,
  name: "ทุนวิจัยระดับบัณฑิตศึกษา มหาวิทยาลัยเชียงใหม่",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการทำวิจัยของนักศึกษาบัณฑิตศึกษา",
  icon: "🔬",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},
{
  id: 578,
  name: "ทุนการศึกษาระดับบัณฑิตศึกษา มหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาโท",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},
{
  id: 579,
  name: "ทุนวิจัยระดับบัณฑิตศึกษา มหาวิทยาลัยเกษตรศาสตร์",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการวิจัยระดับบัณฑิตศึกษา",
  icon: "🔬",
  link: "https://www.grad.ku.ac.th/student/scholarship/"
},
{
  id: 580,
  name: "ทุนการศึกษาระดับบัณฑิตศึกษา จุฬาลงกรณ์มหาวิทยาลัย",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},

{
  id: 581,
  name: "ทุนวิจัยสำหรับนิสิตบัณฑิตศึกษา จุฬาฯ",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการทำวิจัยและวิทยานิพนธ์",
  icon: "🔬",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 582,
  name: "ทุนเสนอผลงานวิชาการต่างประเทศ จุฬาฯ",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนเดินทางวิชาการ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการนำเสนอผลงานทางวิชาการในต่างประเทศ",
  icon: "✈️",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 583,
  name: "ทุนวิจัยต่างประเทศ จุฬาฯ",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนประสบการณ์วิจัยในต่างประเทศ",
  icon: "🌏",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 584,
  name: "ทุน ASEAN Graduate Scholarship จุฬาฯ",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนระดับบัณฑิตศึกษาสำหรับผู้สมัครจากกลุ่มประเทศอาเซียน",
  icon: "🌏",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},
{
  id: 585,
  name: "ทุน Non-ASEAN Graduate Scholarship จุฬาฯ",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนระดับบัณฑิตศึกษาสำหรับผู้สมัครจากนอกอาเซียน",
  icon: "🌎",
  link: "https://www.reg.chula.ac.th/admissions/english/"
},

{
  id: 586,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.kmutt.ac.th/sfa/"
},
{
  id: 587,
  name: "ทุนขาดแคลนทุนทรัพย์ มจธ.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.kmutt.ac.th/sfa/"
},
{
  id: 588,
  name: "ทุนการศึกษาระดับบัณฑิตศึกษา มจธ.",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนบัณฑิตศึกษา",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://www.kmutt.ac.th/sfa/"
},
{
  id: 589,
  name: "ทุนวิจัยระดับบัณฑิตศึกษา มจธ.",
  level: "ปริญญาโท/เอก",
  country: "ไทย",
  type: "ทุนวิจัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนงานวิจัยระดับบัณฑิตศึกษา",
  icon: "🔬",
  link: "https://www.kmutt.ac.th/sfa/"
},
{
  id: 590,
  name: "ทุนประสบการณ์ทำงาน Applied Learning มจธ.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนประสบการณ์",
  deadline: "ติดตามประกาศ",
  description: "สนับสนุนการทำงานและประสบการณ์จากการเรียนรู้จริง",
  icon: "💼",
  link: "https://www.kmutt.ac.th/sfa/"
},

{
  id: 591,
  name: "ทุนการศึกษาสถาบันเทคโนโลยีพระจอมเกล้าลาดกระบัง",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 592,
  name: "ทุนอุดหนุนการศึกษาสถาบันเทคโนโลยีพระจอมเกล้าลาดกระบัง",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนอุดหนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 593,
  name: "ทุนขาดแคลนทุนทรัพย์ สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 594,
  name: "ทุนผู้ทำคุณประโยชน์ให้แก่สถาบัน สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนคุณประโยชน์",
  deadline: "ติดตามประกาศ",
  description: "ทุนสำหรับนักศึกษาที่สร้างผลงานหรือประโยชน์แก่สถาบัน",
  icon: "🏅",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},
{
  id: 595,
  name: "ทุนภายนอกสำหรับนักศึกษา สจล.",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนภายนอก",
  deadline: "ติดตามประกาศ",
  description: "รวมทุนจากมูลนิธิและองค์กรภายนอกที่เปิดรับนักศึกษา",
  icon: "🏢",
  link: "https://scholarship.kmitl.ac.th/scholarships"
},

{
  id: 596,
  name: "ทุนการศึกษามหาวิทยาลัยมหาสารคามสำหรับนักศึกษาใหม่",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนสำหรับนักศึกษาใหม่",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาใหม่",
  icon: "🌟",
  link: "https://www.msu.ac.th/"
},
{
  id: 597,
  name: "ทุนการศึกษามหาวิทยาลัยนเรศวรสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีความต้องการด้านการเงิน",
  icon: "💙",
  link: "https://www.nu.ac.th/"
},
{
  id: 598,
  name: "ทุนการศึกษามหาวิทยาลัยขอนแก่นสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.kku.ac.th/"
},
{
  id: 599,
  name: "ทุนการศึกษามหาวิทยาลัยเชียงใหม่สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://sdd.oop.cmu.ac.th/service/scholarship"
},
{
  id: 600,
  name: "ทุนการศึกษามหาวิทยาลัยมหิดลสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาที่มีความต้องการด้านทุนทรัพย์",
  icon: "💙",
  link: "https://op.mahidol.ac.th/sa/scholarship-mu/"
},

{
  id: 601,
  name: "ทุนการศึกษามหาวิทยาลัยสงขลานครินทร์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.psu.ac.th/"
},
{
  id: 602,
  name: "ทุนการศึกษามหาวิทยาลัยแม่ฟ้าหลวงสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.mfu.ac.th/"
},
{
  id: 603,
  name: "ทุนการศึกษามหาวิทยาลัยพะเยาสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.up.ac.th/"
},
{
  id: 604,
  name: "ทุนการศึกษามหาวิทยาลัยวลัยลักษณ์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.wu.ac.th/"
},
{
  id: 605,
  name: "ทุนการศึกษามหาวิทยาลัยแม่โจ้สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.mju.ac.th/"
},

{
  id: 606,
  name: "ทุนการศึกษามหาวิทยาลัยศรีนครินทรวิโรฒสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนิสิตที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.swu.ac.th/"
},
{
  id: 607,
  name: "ทุนการศึกษามหาวิทยาลัยบูรพาสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.buu.ac.th/"
},
{
  id: 608,
  name: "ทุนการศึกษามหาวิทยาลัยเกษตรศาสตร์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีข้อจำกัดด้านการเงิน",
  icon: "💙",
  link: "https://www.ku.ac.th/"
},
{
  id: 609,
  name: "ทุนการศึกษามหาวิทยาลัยธรรมศาสตร์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีความต้องการด้านทุนทรัพย์",
  icon: "💙",
  link: "https://www.tu.ac.th/"
},
{
  id: 610,
  name: "ทุนการศึกษาจุฬาลงกรณ์มหาวิทยาลัยสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนิสิตที่มีความต้องการด้านทุนทรัพย์",
  icon: "💙",
  link: "https://www.sa.chula.ac.th/fund/scholarship/"
},

{
  id: 611,
  name: "ทุนการศึกษามหาวิทยาลัยศิลปากรสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีปัญหาด้านการเงิน",
  icon: "💙",
  link: "https://www.su.ac.th/"
},
{
  id: 612,
  name: "ทุนการศึกษามหาวิทยาลัยรังสิตสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนช่วยเหลือ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนค่าใช้จ่ายสำหรับนักศึกษา",
  icon: "💙",
  link: "https://www.rsu.ac.th/"
},
{
  id: 613,
  name: "ทุนการศึกษามหาวิทยาลัยกรุงเทพสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนช่วยเหลือ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาที่มีความต้องการทางการเงิน",
  icon: "💙",
  link: "https://www.bu.ac.th/"
},
{
  id: 614,
  name: "ทุนการศึกษามหาวิทยาลัยหอการค้าไทยสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนช่วยเหลือ",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีข้อจำกัดด้านการเงิน",
  icon: "💙",
  link: "https://www.utcc.ac.th/"
},
{
  id: 615,
  name: "ทุนการศึกษามหาวิทยาลัยอัสสัมชัญสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนช่วยเหลือ",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนนักศึกษาที่มีความต้องการด้านทุนทรัพย์",
  icon: "💙",
  link: "https://www.au.edu/"
},

{
  id: 616,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีสุรนารีสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.sut.ac.th/"
},
{
  id: 617,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutl.ac.th/"
},
{
  id: 618,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmuti.ac.th/"
},
{
  id: 619,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutsv.ac.th/"
},
{
  id: 620,
  name: "ทุนการศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนมหาวิทยาลัย",
  deadline: "ติดตามประกาศ",
  description: "ทุนสนับสนุนการศึกษาสำหรับนักศึกษา",
  icon: "🎓",
  link: "https://www.rmutto.ac.th/"
},

{
  id: 621,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเชียงใหม่สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีปัญหาด้านการเงิน",
  icon: "💙",
  link: "https://www.cmru.ac.th/"
},
{
  id: 622,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเชียงรายสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.crru.ac.th/"
},
{
  id: 623,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏลำปางสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่มีข้อจำกัดทางการเงิน",
  icon: "💙",
  link: "https://www.lpru.ac.th/"
},
{
  id: 624,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏอุตรดิตถ์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.uru.ac.th/"
},
{
  id: 625,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏนครราชสีมาสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.nrru.ac.th/"
},

{
  id: 626,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏอุบลราชธานีสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.ubru.ac.th/"
},
{
  id: 627,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏบุรีรัมย์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.bru.ac.th/"
},
{
  id: 628,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสุรินทร์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.srru.ac.th/"
},
{
  id: 629,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏศรีสะเกษสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.sskru.ac.th/"
},
{
  id: 630,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏชัยภูมิสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.cpru.ac.th/"
},

{
  id: 631,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏนครสวรรค์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.nsru.ac.th/"
},
{
  id: 632,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏกำแพงเพชรสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.kpru.ac.th/"
},
{
  id: 633,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเพชรบูรณ์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.pcru.ac.th/"
},
{
  id: 634,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเลยสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.lru.ac.th/"
},
{
  id: 635,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสกลนครสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.snru.ac.th/"
},

{
  id: 636,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏอุดรธานีสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.udru.ac.th/"
},
{
  id: 637,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏมหาสารคามสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.rmu.ac.th/"
},
{
  id: 638,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏกาญจนบุรีสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.kru.ac.th/"
},
{
  id: 639,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏนครศรีธรรมราชสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.nstru.ac.th/"
},
{
  id: 640,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏภูเก็ตสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.pkru.ac.th/"
},

{
  id: 641,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสุราษฎร์ธานีสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.sru.ac.th/"
},
{
  id: 642,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏยะลาสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.yru.ac.th/"
},
{
  id: 643,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏสงขลาสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.skru.ac.th/"
},
{
  id: 644,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏธนบุรีสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.dru.ac.th/"
},
{
  id: 645,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏบ้านสมเด็จเจ้าพระยาสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.bsru.ac.th/"
},
{
  id: 646,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏวไลยอลงกรณ์สำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.vru.ac.th/"
},
{
  id: 647,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏจันทรเกษมสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.chandra.ac.th/"
},
{
  id: 648,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏรำไพพรรณีสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.rbru.ac.th/"
},
{
  id: 649,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเทพสตรีสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.tru.ac.th/"
},
{
  id: 650,
  name: "ทุนการศึกษามหาวิทยาลัยราชภัฏเพชรบุรีสำหรับผู้ขาดแคลนทุนทรัพย์",
  level: "ปริญญาตรี",
  country: "ไทย",
  type: "ทุนขาดแคลนทุนทรัพย์",
  deadline: "ติดตามประกาศ",
  description: "ทุนช่วยเหลือนักศึกษาที่ขาดแคลนทุนทรัพย์",
  icon: "💙",
  link: "https://www.pbru.ac.th/"
},
{
  id: 651,
  name: "Chinese Government Scholarship (CSC)",
  level: "ปริญญาโท/ปริญญาเอก",
  country: "จีน",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลจีนสำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇳",
  link: "https://www.campuschina.org/"
},
{
  id: 652,
  name: "Shanghai Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "จีน",
  type: "รัฐบาลท้องถิ่น",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลนครเซี่ยงไฮ้สำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇳",
  link: "https://study.edu.sh.gov.cn/"
},
{
  id: 653,
  name: "Beijing Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "จีน",
  type: "รัฐบาลท้องถิ่น",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ศึกษาในกรุงปักกิ่ง",
  icon: "🇨🇳",
  link: "https://english.beijing.gov.cn/"
},
{
  id: 654,
  name: "Zhejiang Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "จีน",
  type: "รัฐบาลท้องถิ่น",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลมณฑลเจ้อเจียง",
  icon: "🇨🇳",
  link: "https://www.zj.gov.cn/"
},
{
  id: 655,
  name: "Jiangsu Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "จีน",
  type: "รัฐบาลท้องถิ่น",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลมณฑลเจียงซูสำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇳",
  link: "https://english.jsjyt.edu.cn/"
},
{
  id: 656,
  name: "Taiwan Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลไต้หวันสำหรับนักศึกษาต่างชาติ",
  icon: "🇹🇼",
  link: "https://english.moe.gov.tw/"
},
{
  id: 657,
  name: "TaiwanICDF Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน TaiwanICDF สำหรับนักศึกษาจากประเทศพันธมิตร",
  icon: "🇹🇼",
  link: "https://www.icdf.org.tw/"
},
{
  id: 658,
  name: "MOFA Taiwan Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนกระทรวงการต่างประเทศไต้หวัน",
  icon: "🇹🇼",
  link: "https://en.mofa.gov.tw/"
},
{
  id: 659,
  name: "GKS Undergraduate",
  level: "ปริญญาตรี",
  country: "เกาหลีใต้",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลเกาหลีสำหรับระดับปริญญาตรี",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/"
},
{
  id: 660,
  name: "GKS Graduate",
  level: "ปริญญาโท/ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลเกาหลีสำหรับระดับบัณฑิตศึกษา",
  icon: "🇰🇷",
  link: "https://www.studyinkorea.go.kr/"
},
{
  id: 661,
  name: "KAIST International Student Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ KAIST",
  icon: "🇰🇷",
  link: "https://admission.kaist.ac.kr/"
},
{
  id: 662,
  name: "SNU Global Scholarship",
  level: "ปริญญาโท/ปริญญาเอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Seoul National University",
  icon: "🇰🇷",
  link: "https://en.snu.ac.kr/"
},
{
  id: 663,
  name: "Yonsei University International Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Yonsei University",
  icon: "🇰🇷",
  link: "https://www.yonsei.ac.kr/en_sc/"
},
{
  id: 664,
  name: "POSTECH International Student Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ POSTECH",
  icon: "🇰🇷",
  link: "https://www.postech.ac.kr/eng/"
},
{
  id: 665,
  name: "SINGA",
  level: "ปริญญาเอก",
  country: "สิงคโปร์",
  type: "โครงการนานาชาติ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยระดับปริญญาเอกในสิงคโปร์",
  icon: "🇸🇬",
  link: "https://www.a-star.edu.sg/singa-scholarship"
},
{
  id: 666,
  name: "NUS International Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ NUS",
  icon: "🇸🇬",
  link: "https://www.nus.edu.sg/oam/scholarships/scholarships-for-freshmen-international-students/nus-international-undergraduate-scholarship"
},
{
  id: 667,
  name: "NTU Nanyang Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนเต็ม/ทุนสนับสนุนสำหรับนักศึกษาต่างชาติ NTU",
  icon: "🇸🇬",
  link: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships"
},
{
  id: 668,
  name: "NTU Research Scholarship",
  level: "ปริญญาโท/ปริญญาเอก",
  country: "สิงคโปร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยระดับบัณฑิตศึกษาของ NTU",
  icon: "🇸🇬",
  link: "https://www.ntu.edu.sg/graduate-college/"
},
{
  id: 669,
  name: "Hong Kong PhD Fellowship Scheme",
  level: "ปริญญาเอก",
  country: "ฮ่องกง",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนปริญญาเอกสำหรับนักศึกษาต่างชาติในฮ่องกง",
  icon: "🇭🇰",
  link: "https://cerg1.ugc.edu.hk/hkpfs/"
},
{
  id: 670,
  name: "HKU Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "ฮ่องกง",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University of Hong Kong",
  icon: "🇭🇰",
  link: "https://admissions.hku.hk/"
},
{
  id: 671,
  name: "HKUST International Scholarships",
  level: "ปริญญาตรี",
  country: "ฮ่องกง",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ HKUST",
  icon: "🇭🇰",
  link: "https://join.ust.hk/"
},
{
  id: 672,
  name: "CUHK Vice-Chancellor's Scholarships",
  level: "ปริญญาตรี",
  country: "ฮ่องกง",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ CUHK",
  icon: "🇭🇰",
  link: "https://admission.cuhk.edu.hk/"
},
{
  id: 673,
  name: "Japan MEXT Research Scholarship",
  level: "ปริญญาโท/ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน MEXT สำหรับนักศึกษาวิจัยและบัณฑิตศึกษา",
  icon: "🇯🇵",
  link: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
},
{
  id: 674,
  name: "JASSO Honors Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ญี่ปุ่น",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสนับสนุนนักศึกษาต่างชาติในญี่ปุ่น",
  icon: "🇯🇵",
  link: "https://www.jasso.go.jp/en/"
},
{
  id: 675,
  name: "University of Tokyo Fellowship",
  level: "ปริญญาโท/ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาระดับบัณฑิตศึกษาของ University of Tokyo",
  icon: "🇯🇵",
  link: "https://www.u-tokyo.ac.jp/en/"
},
{
  id: 676,
  name: "Kyoto University International Scholarships",
  level: "ปริญญาโท/ปริญญาเอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Kyoto University",
  icon: "🇯🇵",
  link: "https://www.kyoto-u.ac.jp/en"
},
{
  id: 677,
  name: "Waseda University Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Waseda",
  icon: "🇯🇵",
  link: "https://www.waseda.jp/top/en/"
},
{
  id: 678,
  name: "Swiss Government Excellence Scholarships",
  level: "ปริญญาโท/เอก/วิจัย",
  country: "สวิตเซอร์แลนด์",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลสวิตเซอร์แลนด์สำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇭",
  link: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html"
},
{
  id: 679,
  name: "ETH Excellence Scholarship",
  level: "ปริญญาโท",
  country: "สวิตเซอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Excellence สำหรับนักศึกษาปริญญาโท ETH Zurich",
  icon: "🇨🇭",
  link: "https://ethz.ch/students/en/studies/financial/scholarships/excellencescholarship.html"
},
{
  id: 680,
  name: "EPFL Excellence Fellowship",
  level: "ปริญญาโท",
  country: "สวิตเซอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาปริญญาโท EPFL",
  icon: "🇨🇭",
  link: "https://www.epfl.ch/education/studies/en/financing-study/scholarships/"
},
{
  id: 681,
  name: "UNIL Master's Grants",
  level: "ปริญญาโท",
  country: "สวิตเซอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนปริญญาโทสำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇭",
  link: "https://www.unil.ch/central/home.html"
},
{
  id: 682,
  name: "Geneva Excellence Master Fellowship",
  level: "ปริญญาโท",
  country: "สวิตเซอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Excellence ระดับปริญญาโทของ University of Geneva",
  icon: "🇨🇭",
  link: "https://www.unige.ch/en/"
},
{
  id: 683,
  name: "Swedish Institute Scholarships for Global Professionals",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลสวีเดนสำหรับนักศึกษาต่างชาติ",
  icon: "🇸🇪",
  link: "https://apply-scholarships.si.se/"
},
{
  id: 684,
  name: "KTH Scholarship",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาปริญญาโท KTH",
  icon: "🇸🇪",
  link: "https://www.kth.se/en/studies/master/general/scholarships"
},
{
  id: 685,
  name: "Uppsala University Global Scholarship",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Uppsala University",
  icon: "🇸🇪",
  link: "https://www.uu.se/en/study/masters-studies/scholarships"
},
{
  id: 686,
  name: "Chalmers IPOET Scholarship",
  level: "ปริญญาโท",
  country: "สวีเดน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนค่าเล่าเรียนสำหรับนักศึกษาต่างชาติ Chalmers",
  icon: "🇸🇪",
  link: "https://www.chalmers.se/en/education/studying-at-chalmers/tuition-fees-and-scholarships/"
},
{
  id: 687,
  name: "Lund University Global Scholarship",
  level: "ปริญญาตรี/โท",
  country: "สวีเดน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Lund University",
  icon: "🇸🇪",
  link: "https://www.lunduniversity.lu.se/"
},
{
  id: 688,
  name: "Finland Government Scholarship",
  level: "ปริญญาโท/เอก/วิจัย",
  country: "ฟินแลนด์",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและเงินสนับสนุนสำหรับนักศึกษาต่างชาติในฟินแลนด์",
  icon: "🇫🇮",
  link: "https://www.studyinfinland.fi/"
},
{
  id: 689,
  name: "University of Helsinki Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาปริญญาโทต่างชาติ",
  icon: "🇫🇮",
  link: "https://www.helsinki.fi/en/admissions-and-education/apply-bachelors-and-masters-programmes/scholarships"
},
{
  id: 690,
  name: "Aalto University Excellence Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Excellence สำหรับนักศึกษาต่างชาติ Aalto",
  icon: "🇫🇮",
  link: "https://www.aalto.fi/en/study-at-aalto/scholarships-and-tuition-fees"
},
{
  id: 691,
  name: "Tampere University Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Tampere University",
  icon: "🇫🇮",
  link: "https://www.tuni.fi/en/study-with-us/scholarships"
},
{
  id: 692,
  name: "University of Turku Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Turku",
  icon: "🇫🇮",
  link: "https://www.utu.fi/en/study-at-utu/scholarships"
},
{
  id: 693,
  name: "Danish Government Scholarship",
  level: "ปริญญาโท",
  country: "เดนมาร์ก",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลเดนมาร์กสำหรับนักศึกษาต่างชาติ",
  icon: "🇩🇰",
  link: "https://studyindenmark.dk/"
},
{
  id: 694,
  name: "DTU Tuition Fee Waiver",
  level: "ปริญญาโท",
  country: "เดนมาร์ก",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนยกเว้นค่าเล่าเรียนสำหรับนักศึกษาต่างชาติ",
  icon: "🇩🇰",
  link: "https://www.dtu.dk/english/education/graduate/fees-and-funding"
},
{
  id: 695,
  name: "Aarhus University Danish State Scholarship",
  level: "ปริญญาโท",
  country: "เดนมาร์ก",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลเดนมาร์กผ่าน Aarhus University",
  icon: "🇩🇰",
  link: "https://masters.au.dk/"
},
{
  id: 696,
  name: "Danish Government Scholarships at University of Copenhagen",
  level: "ปริญญาโท",
  country: "เดนมาร์ก",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Copenhagen",
  icon: "🇩🇰",
  link: "https://studies.ku.dk/masters/"
},
{
  id: 697,
  name: "NL Scholarship",
  level: "ปริญญาตรี/โท",
  country: "เนเธอร์แลนด์",
  type: "รัฐบาล/มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษานอกเขต EEA ที่ต้องการเรียนเนเธอร์แลนด์",
  icon: "🇳🇱",
  link: "https://www.studyinnl.org/finances/nl-scholarship"
},
{
  id: 698,
  name: "TU Delft Justus & Louise van Effen Scholarship",
  level: "ปริญญาโท",
  country: "เนเธอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนเต็มรูปแบบสำหรับนักศึกษาปริญญาโท TU Delft",
  icon: "🇳🇱",
  link: "https://www.tudelft.nl/en/education/practical-matters/scholarships"
},
{
  id: 699,
  name: "Leiden University Excellence Scholarship",
  level: "ปริญญาโท",
  country: "เนเธอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Excellence สำหรับนักศึกษาต่างชาติ Leiden University",
  icon: "🇳🇱",
  link: "https://www.universiteitleiden.nl/en/education/study-programmes/master"
},
{
  id: 700,
  name: "Radboud Scholarship Programme",
  level: "ปริญญาโท",
  country: "เนเธอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาปริญญาโทต่างชาติ Radboud University",
  icon: "🇳🇱",
  link: "https://www.ru.nl/en/education/scholarships"
},
{
  id: 350,
  name: "ทุนรัฐบาลสำหรับบุคคลทั่วไประดับปริญญา",
  level: "ปริญญาโท / ปริญญาเอก",
  country: "ไทย / ต่างประเทศ",
  type: "ทุนรัฐบาล",
  deadline: "ตรวจสอบประกาศล่าสุด",
  description: "ทุนรัฐบาลผ่านสำนักงาน ก.พ. สำหรับผู้สมัครระดับปริญญาโทและปริญญาเอก",
  icon: "🇹🇭",
  link: "https://www.ocsc.go.th/scholarships/degree-scholarships/"
},// ==================== ทุนทั่วโลก 701-750 ====================

{
  id: 701,
  name: "University of Groningen Eric Bleumink Fund",
  level: "ปริญญาโท",
  country: "เนเธอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇳🇱",
  link: "https://www.rug.nl/education/master/international-students/financial-matters/scholarships/"
},
{
  id: 702,
  name: "VU Fellowship Programme",
  level: "ปริญญาโท",
  country: "เนเธอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Vrije Universiteit Amsterdam",
  icon: "🇳🇱",
  link: "https://vu.nl/en/education/more-about/scholarships"
},
{
  id: 703,
  name: "University of Twente Scholarship",
  level: "ปริญญาโท",
  country: "เนเธอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาปริญญาโทที่ University of Twente",
  icon: "🇳🇱",
  link: "https://www.utwente.nl/en/education/scholarship/"
},
{
  id: 704,
  name: "Maastricht University NL-High Potential Scholarship",
  level: "ปริญญาโท",
  country: "เนเธอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีผลการเรียนโดดเด่น",
  icon: "🇳🇱",
  link: "https://www.maastrichtuniversity.nl/education/financing-your-studies/scholarships"
},
{
  id: 705,
  name: "Wageningen University Scholarship Programme",
  level: "ปริญญาโท",
  country: "เนเธอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติด้านอาหาร เกษตร และสิ่งแวดล้อม",
  icon: "🌱",
  link: "https://www.wur.nl/en/education-programmes/master/scholarships.htm"
},
{
  id: 706,
  name: "DAAD EPOS Scholarship",
  level: "ปริญญาโท/เอก",
  country: "เยอรมนี",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน DAAD สำหรับหลักสูตรด้านการพัฒนา",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/studying-in-germany/universities/all-degree-programmes/"
},
{
  id: 707,
  name: "DAAD Research Grants",
  level: "ปริญญาเอก/วิจัย",
  country: "เยอรมนี",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยสำหรับนักวิจัยและนักศึกษาระดับปริญญาเอก",
  icon: "🔬",
  link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
},
{
  id: 708,
  name: "DAAD Helmut-Schmidt Programme",
  level: "ปริญญาโท",
  country: "เยอรมนี",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านนโยบายสาธารณะและธรรมาภิบาล",
  icon: "🇩🇪",
  link: "https://www.daad.de/en/studying-in-germany/universities/all-degree-programmes/"
},
{
  id: 709,
  name: "Heinrich Böll Foundation Scholarship",
  level: "ปริญญาโท/เอก",
  country: "เยอรมนี",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🌿",
  link: "https://www.boell.de/en/foundation/scholarships"
},
{
  id: 710,
  name: "Konrad-Adenauer-Stiftung Scholarship",
  level: "ปริญญาโท/เอก",
  country: "เยอรมนี",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ศึกษาในเยอรมนี",
  icon: "🎓",
  link: "https://www.kas.de/en/web/begabtenfoerderung-und-kultur/scholarships"
},
{
  id: 711,
  name: "Friedrich Ebert Foundation Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เยอรมนี",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสนับสนุนนักศึกษาต่างชาติในเยอรมนี",
  icon: "🇩🇪",
  link: "https://www.fes.de/studienfoerderung"
},
{
  id: 712,
  name: "Rosa Luxemburg Foundation Scholarship",
  level: "ปริญญาโท/เอก",
  country: "เยอรมนี",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "📚",
  link: "https://www.rosalux.de/en/foundation/studienwerk"
},
{
  id: 713,
  name: "Friedrich Naumann Foundation Scholarship",
  level: "ปริญญาโท/เอก",
  country: "เยอรมนี",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ศึกษาในเยอรมนี",
  icon: "🎓",
  link: "https://www.freiheit.org/scholarship"
},
{
  id: 714,
  name: "Humboldt Research Fellowship",
  level: "วิจัย/หลังปริญญาเอก",
  country: "เยอรมนี",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยสำหรับนักวิจัยจากต่างประเทศ",
  icon: "🔬",
  link: "https://www.humboldt-foundation.de/en/apply/sponsorship-programmes/humboldt-research-fellowship"
},
{
  id: 715,
  name: "Humboldt Georg Forster Research Fellowship",
  level: "วิจัย/หลังปริญญาเอก",
  country: "เยอรมนี",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยสำหรับนักวิจัยจากประเทศกำลังพัฒนา",
  icon: "🌍",
  link: "https://www.humboldt-foundation.de/en/apply/sponsorship-programmes/georg-forster-research-fellowship"
},
{
  id: 716,
  name: "Deutschlandstipendium",
  level: "ปริญญาตรี/โท",
  country: "เยอรมนี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสนับสนุนนักศึกษาที่มหาวิทยาลัยเยอรมนี",
  icon: "🇩🇪",
  link: "https://www.deutschlandstipendium.de/deutschlandstipendium/en/home/home_node.html"
},
{
  id: 717,
  name: "Eiffel Excellence Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ฝรั่งเศส",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลฝรั่งเศสสำหรับนักศึกษาต่างชาติ",
  icon: "🇫🇷",
  link: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
},
{
  id: 718,
  name: "Paris-Saclay International Master's Scholarship",
  level: "ปริญญาโท",
  country: "ฝรั่งเศส",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Université Paris-Saclay",
  icon: "🇫🇷",
  link: "https://www.universite-paris-saclay.fr/en/admission/bourses-et-aides-financieres"
},
{
  id: 719,
  name: "Émile Boutmy Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ฝรั่งเศส",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษานอกสหภาพยุโรปที่ Sciences Po",
  icon: "🇫🇷",
  link: "https://www.sciencespo.fr/students/en/financing/scholarships/"
},
{
  id: 720,
  name: "ENS International Selection Scholarship",
  level: "ปริญญาโท",
  country: "ฝรั่งเศส",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ École Normale Supérieure",
  icon: "🎓",
  link: "https://www.ens.psl.eu/en/academics/admissions"
},
{
  id: 721,
  name: "Ampère Excellence Scholarship",
  level: "ปริญญาโท",
  country: "ฝรั่งเศส",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนระดับปริญญาโทของ ENS de Lyon",
  icon: "🇫🇷",
  link: "https://www.ens-lyon.fr/en/"
},
{
  id: 722,
  name: "Université Paris Cité Scholarship",
  level: "ปริญญาโท",
  country: "ฝรั่งเศส",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Université Paris Cité",
  icon: "🎓",
  link: "https://u-paris.fr/en/"
},
{
  id: 723,
  name: "Grenoble Alpes Excellence Scholarship",
  level: "ปริญญาโท",
  country: "ฝรั่งเศส",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนความเป็นเลิศสำหรับนักศึกษาต่างชาติ",
  icon: "🇫🇷",
  link: "https://www.univ-grenoble-alpes.fr/"
},
{
  id: 724,
  name: "Italian Government Scholarships",
  level: "ปริญญาโท/เอก/วิจัย",
  country: "อิตาลี",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลอิตาลีสำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇹",
  link: "https://studyinitaly.esteri.it/"
},
{
  id: 725,
  name: "Invest Your Talent in Italy",
  level: "ปริญญาโท",
  country: "อิตาลี",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการทุนสำหรับนักศึกษาต่างชาติในสาขาเทคโนโลยีและธุรกิจ",
  icon: "🇮🇹",
  link: "https://investyourtalent.esteri.it/"
},
{
  id: 726,
  name: "Bocconi International Awards",
  level: "ปริญญาตรี/โท",
  country: "อิตาลี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ Bocconi University",
  icon: "🇮🇹",
  link: "https://www.unibocconi.it/en"
},
{
  id: 727,
  name: "Politecnico di Milano Merit Scholarships",
  level: "ปริญญาโท",
  country: "อิตาลี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Merit สำหรับนักศึกษาต่างชาติ",
  icon: "🏗️",
  link: "https://www.polimi.it/en/prospective-students"
},
{
  id: 728,
  name: "Politecnico di Torino Scholarships",
  level: "ปริญญาตรี/โท",
  country: "อิตาลี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ Politecnico di Torino",
  icon: "🇮🇹",
  link: "https://www.polito.it/en/education/fees-and-scholarships"
},
{
  id: 729,
  name: "Padua International Excellence Scholarship",
  level: "ปริญญาตรี/โท",
  country: "อิตาลี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Excellence สำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇹",
  link: "https://www.unipd.it/en/scholarships"
},
{
  id: 730,
  name: "Bologna International Talents Scholarship",
  level: "ปริญญาโท",
  country: "อิตาลี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ University of Bologna",
  icon: "🎓",
  link: "https://www.unibo.it/en/study/studying-at-unibo/scholarships-and-subsidies"
},
{
  id: 731,
  name: "Ca' Foscari International Scholarships",
  level: "ปริญญาตรี/โท",
  country: "อิตาลี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ Ca' Foscari",
  icon: "🇮🇹",
  link: "https://www.unive.it/"
},
{
  id: 732,
  name: "Sapienza International Scholarships",
  level: "ปริญญาตรี/โท",
  country: "อิตาลี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Sapienza University",
  icon: "🇮🇹",
  link: "https://www.uniroma1.it/en/pagina/scholarships"
},
{
  id: 733,
  name: "University of Pisa DSU Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "อิตาลี",
  type: "ภูมิภาค/มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและสวัสดิการสำหรับนักศึกษามหาวิทยาลัยในแคว้น Tuscany",
  icon: "🇮🇹",
  link: "https://www.unipi.it/index.php/tuition-fees-and-financial-aid"
},
{
  id: 734,
  name: "University of Milan Excellence Scholarship",
  level: "ปริญญาโท",
  country: "อิตาลี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนความเป็นเลิศสำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇹",
  link: "https://www.unimi.it/en/study/financial-support"
},
{
  id: 735,
  name: "Government of Ireland International Education Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ไอร์แลนด์",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลไอร์แลนด์สำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇪",
  link: "https://hea.ie/policy/internationalisation/goi-ies/"
},
{
  id: 736,
  name: "Trinity College Dublin Global Excellence Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ไอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่ Trinity College Dublin",
  icon: "🇮🇪",
  link: "https://www.tcd.ie/study/international/scholarships/"
},
{
  id: 737,
  name: "UCD Global Excellence Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ไอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University College Dublin",
  icon: "🇮🇪",
  link: "https://www.ucd.ie/global/scholarships/"
},
{
  id: 738,
  name: "University of Galway International Scholarships",
  level: "ปริญญาตรี/โท",
  country: "ไอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Galway",
  icon: "🇮🇪",
  link: "https://www.universityofgalway.ie/international-students/feesfunding/"
},
{
  id: 739,
  name: "University College Cork Excellence Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ไอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ UCC",
  icon: "🇮🇪",
  link: "https://www.ucc.ie/en/study/scholarships/"
},
{
  id: 740,
  name: "Government of Flanders Master Mind Scholarship",
  level: "ปริญญาโท",
  country: "เบลเยียม",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาล Flanders สำหรับนักศึกษาต่างชาติ",
  icon: "🇧🇪",
  link: "https://www.studyinflanders.be/scholarship-programmes/master-mind-scholarships"
},
{
  id: 741,
  name: "VLIR-UOS Training and Master's Scholarships",
  level: "ปริญญาโท/อบรม",
  country: "เบลเยียม",
  type: "รัฐบาล/องค์กร",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนเพื่อการพัฒนาสำหรับประเทศคู่ความร่วมมือ",
  icon: "🌍",
  link: "https://www.vliruos.be/"
},
{
  id: 742,
  name: "ARES Scholarships",
  level: "ปริญญาโท/อบรม",
  country: "เบลเยียม",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาและอบรมของ Wallonia-Brussels",
  icon: "🇧🇪",
  link: "https://www.ares-ac.be/en/cooperation-au-developpement/scholarships-and-training-programmes"
},
{
  id: 743,
  name: "KU Leuven Science@Leuven Scholarship",
  level: "ปริญญาโท",
  country: "เบลเยียม",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติด้านวิทยาศาสตร์",
  icon: "🔬",
  link: "https://wet.kuleuven.be/english/studying/science-at-leuven-scholarship"
},
{
  id: 744,
  name: "Ghent University Top-up Grant",
  level: "ปริญญาโท",
  country: "เบลเยียม",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสนับสนุนนักศึกษาจากประเทศกำลังพัฒนา",
  icon: "🇧🇪",
  link: "https://www.ugent.be/en/education/study-options/scholarships"
},
{
  id: 745,
  name: "University of Luxembourg Scholarships",
  level: "ปริญญาตรี/โท",
  country: "ลักเซมเบิร์ก",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Luxembourg",
  icon: "🇱🇺",
  link: "https://www.uni.lu/en/admissions/scholarships/"
},
{
  id: 746,
  name: "OeAD Ernst Mach Grant",
  level: "ปริญญาโท/เอก/วิจัย",
  country: "ออสเตรีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลออสเตรียสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇹",
  link: "https://grants.at/en/"
},
{
  id: 747,
  name: "Austrian Government Scholarships",
  level: "หลายระดับ",
  country: "ออสเตรีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาของรัฐบาลออสเตรีย",
  icon: "🇦🇹",
  link: "https://grants.at/en/"
},
{
  id: 748,
  name: "University of Vienna Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ออสเตรีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาของ University of Vienna",
  icon: "🇦🇹",
  link: "https://www.univie.ac.at/en/"
},
{
  id: 749,
  name: "TU Wien Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ออสเตรีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาด้านเทคโนโลยีและวิศวกรรม",
  icon: "🇦🇹",
  link: "https://www.tuwien.at/en/students/scholarships"
},
{
  id: 750,
  name: "University of Helsinki International Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇫🇮",
  link: "https://www.helsinki.fi/en/admissions-and-education/apply-bachelors-and-masters-programmes/scholarships"
},

// ==================== ทุนทั่วโลก 751-800 ====================

{
  id: 751,
  name: "LUT University Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ LUT University",
  icon: "🇫🇮",
  link: "https://www.lut.fi/en/studies/scholarships-and-tuition-fees"
},
{
  id: 752,
  name: "University of Oulu International Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Oulu",
  icon: "🇫🇮",
  link: "https://www.oulu.fi/en/apply/scholarships"
},
{
  id: 753,
  name: "Åbo Akademi University Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Åbo Akademi",
  icon: "🇫🇮",
  link: "https://www.abo.fi/en/study/scholarships/"
},
{
  id: 754,
  name: "Hanken GBS Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติด้านธุรกิจ",
  icon: "💼",
  link: "https://www.hanken.fi/en/apply/scholarships"
},
{
  id: 755,
  name: "University of Eastern Finland Scholarship",
  level: "ปริญญาโท",
  country: "ฟินแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇫🇮",
  link: "https://www.uef.fi/en/study-at-uef/tuition-fees-and-scholarships"
},
{
  id: 756,
  name: "University of Oslo Scholarships",
  level: "ปริญญาโท/เอก",
  country: "นอร์เวย์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ข้อมูลทุนและโอกาสทางการเงินของ University of Oslo",
  icon: "🇳🇴",
  link: "https://www.uio.no/english/studies/"
},
{
  id: 757,
  name: "BI Presidential Scholarship",
  level: "ปริญญาโท",
  country: "นอร์เวย์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ BI Norwegian Business School",
  icon: "🇳🇴",
  link: "https://www.bi.no/en/programmes-and-individual-courses/scholarships/"
},
{
  id: 758,
  name: "NTNU Scholarships",
  level: "ปริญญาโท/เอก",
  country: "นอร์เวย์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโอกาสด้านการวิจัยของ NTNU",
  icon: "🔬",
  link: "https://www.ntnu.edu/studies"
},
{
  id: 759,
  name: "University of Bergen Scholarships",
  level: "ปริญญาโท/เอก",
  country: "นอร์เวย์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและตำแหน่งวิจัยสำหรับนักศึกษาต่างชาติ",
  icon: "🇳🇴",
  link: "https://www.uib.no/en"
},
{
  id: 760,
  name: "Erasmus Mundus Master in Public Health",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "โครงการนานาชาติ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "หลักสูตร Erasmus Mundus ด้านสาธารณสุข",
  icon: "🌍",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 761,
  name: "Erasmus Mundus Data Science Scholarship",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "โครงการนานาชาติ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โอกาสทุนสำหรับหลักสูตร Erasmus Mundus ด้านข้อมูล",
  icon: "💻",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 762,
  name: "Erasmus Mundus Environmental Studies",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "โครงการนานาชาติ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนในหลักสูตรร่วมด้านสิ่งแวดล้อม",
  icon: "🌱",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 763,
  name: "Erasmus Mundus Engineering Programme",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "โครงการนานาชาติ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนหลักสูตรร่วมด้านวิศวกรรม",
  icon: "⚙️",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 764,
  name: "Erasmus Mundus Economics Programme",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "โครงการนานาชาติ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนหลักสูตรร่วมด้านเศรษฐศาสตร์",
  icon: "📈",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 765,
  name: "Erasmus Mundus International Relations",
  level: "ปริญญาโท",
  country: "ยุโรป",
  type: "โครงการนานาชาติ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนหลักสูตรร่วมด้านความสัมพันธ์ระหว่างประเทศ",
  icon: "🌍",
  link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
},
{
  id: 766,
  name: "Türkiye Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ตุรกี",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลตุรกีสำหรับนักศึกษาต่างชาติ",
  icon: "🇹🇷",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 767,
  name: "Türkiye Research Scholarship",
  level: "วิจัย",
  country: "ตุรกี",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยสำหรับนักวิจัยต่างชาติ",
  icon: "🔬",
  link: "https://www.turkiyeburslari.gov.tr/"
},
{
  id: 768,
  name: "Open Doors Russian Scholarship",
  level: "ปริญญาโท/เอก",
  country: "รัสเซีย",
  type: "โครงการนานาชาติ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการทุนสำหรับนักศึกษาต่างชาติในรัสเซีย",
  icon: "🇷🇺",
  link: "https://od.globaluni.ru/"
},
{
  id: 769,
  name: "Russian Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "รัสเซีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลรัสเซียสำหรับนักศึกษาต่างชาติ",
  icon: "🇷🇺",
  link: "https://education-in-russia.com/"
},
{
  id: 770,
  name: "Poland Banach Scholarship",
  level: "ปริญญาโท",
  country: "โปแลนด์",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน NAWA สำหรับนักศึกษาจากประเทศคู่ความร่วมมือ",
  icon: "🇵🇱",
  link: "https://nawa.gov.pl/en/students/foreign-students"
},
{
  id: 771,
  name: "Poland My First Choice Scholarship",
  level: "ปริญญาโท",
  country: "โปแลนด์",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาโท",
  icon: "🇵🇱",
  link: "https://nawa.gov.pl/en/"
},
{
  id: 772,
  name: "Polish Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "โปแลนด์",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลโปแลนด์สำหรับนักศึกษาต่างชาติ",
  icon: "🇵🇱",
  link: "https://www.gov.pl/web/nawa-en"
},
{
  id: 773,
  name: "University of Warsaw Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "โปแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Warsaw",
  icon: "🇵🇱",
  link: "https://www.uw.edu.pl/en/"
},
{
  id: 774,
  name: "Jagiellonian University Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "โปแลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติใน Krakow",
  icon: "🇵🇱",
  link: "https://en.uj.edu.pl/"
},
{
  id: 775,
  name: "Czech Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "เช็ก",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลสาธารณรัฐเช็กสำหรับนักศึกษาต่างชาติ",
  icon: "🇨🇿",
  link: "https://www.dzs.cz/en/program/government-scholarships-developing-countries"
},
{
  id: 776,
  name: "Charles University Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "เช็ก",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Charles University",
  icon: "🇨🇿",
  link: "https://cuni.cz/UKEN-1.html"
},
{
  id: 777,
  name: "Masaryk University Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "เช็ก",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Masaryk University",
  icon: "🇨🇿",
  link: "https://www.muni.cz/en/students/scholarships"
},
{
  id: 778,
  name: "Slovak National Scholarship Programme",
  level: "โท/เอก/วิจัย",
  country: "สโลวาเกีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลสโลวาเกียสำหรับนักศึกษาต่างชาติ",
  icon: "🇸🇰",
  link: "https://www.scholarships.sk/"
},
{
  id: 779,
  name: "Romanian Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "โรมาเนีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลโรมาเนียสำหรับนักศึกษาต่างชาติ",
  icon: "🇷🇴",
  link: "https://www.studyinromania.gov.ro/"
},
{
  id: 780,
  name: "Greek State Scholarships Foundation",
  level: "ปริญญาตรี/โท/เอก/วิจัย",
  country: "กรีซ",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนของรัฐกรีซสำหรับนักศึกษาต่างชาติ",
  icon: "🇬🇷",
  link: "https://www.iky.gr/en/"
},
{
  id: 781,
  name: "Croatian Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "โครเอเชีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลโครเอเชียสำหรับนักศึกษาต่างชาติ",
  icon: "🇭🇷",
  link: "https://mzom.gov.hr/"
},
{
  id: 782,
  name: "Slovenian Government Scholarships",
  level: "ปริญญาโท/เอก",
  country: "สโลวีเนีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโครงการแลกเปลี่ยนของรัฐบาลสโลวีเนีย",
  icon: "🇸🇮",
  link: "https://studyinslovenia.si/"
},
{
  id: 783,
  name: "University of Ljubljana Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "สโลวีเนีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University of Ljubljana",
  icon: "🇸🇮",
  link: "https://www.uni-lj.si/en/"
},
{
  id: 784,
  name: "University of Zagreb Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "โครเอเชีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University of Zagreb",
  icon: "🇭🇷",
  link: "https://www.unizg.hr/homepage/"
},
{
  id: 785,
  name: "University of Tartu Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "เอสโตเนีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University of Tartu",
  icon: "🇪🇪",
  link: "https://ut.ee/en"
},
{
  id: 786,
  name: "Estonian Government Scholarships",
  level: "ปริญญาโท/เอก/วิจัย",
  country: "เอสโตเนีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลเอสโตเนียสำหรับนักศึกษาต่างชาติ",
  icon: "🇪🇪",
  link: "https://harno.ee/en/scholarships"
},
{
  id: 787,
  name: "University of Latvia Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ลัตเวีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Latvia",
  icon: "🇱🇻",
  link: "https://www.lu.lv/en/"
},
{
  id: 788,
  name: "Lithuanian State Scholarships",
  level: "ปริญญาโท/เอก/วิจัย",
  country: "ลิทัวเนีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลลิทัวเนียสำหรับนักศึกษาต่างชาติ",
  icon: "🇱🇹",
  link: "https://studyin.lt/"
},
{
  id: 789,
  name: "Vilnius University Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ลิทัวเนีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Vilnius University",
  icon: "🇱🇹",
  link: "https://www.vu.lt/en/"
},
{
  id: 790,
  name: "Latvian State Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ลัตเวีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลลัตเวียสำหรับนักศึกษาต่างชาติ",
  icon: "🇱🇻",
  link: "https://www.viaa.gov.lv/en"
},
{
  id: 791,
  name: "Icelandic Government Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ไอซ์แลนด์",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลไอซ์แลนด์สำหรับผู้สมัครที่เข้าเกณฑ์",
  icon: "🇮🇸",
  link: "https://study.iceland.is/"
},
{
  id: 792,
  name: "University of Iceland Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไอซ์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโอกาสการศึกษาของ University of Iceland",
  icon: "🇮🇸",
  link: "https://english.hi.is/"
},
{
  id: 793,
  name: "Reykjavik University Scholarships",
  level: "ปริญญาตรี/โท",
  country: "ไอซ์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Reykjavik University",
  icon: "🇮🇸",
  link: "https://en.ru.is/"
},
{
  id: 794,
  name: "Portugal Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "โปรตุเกส",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโครงการการศึกษาของรัฐบาลโปรตุเกส",
  icon: "🇵🇹",
  link: "https://www.dges.gov.pt/en"
},
{
  id: 795,
  name: "University of Porto Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "โปรตุเกส",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Porto",
  icon: "🇵🇹",
  link: "https://www.up.pt/portal/en/"
},
{
  id: 796,
  name: "University of Coimbra Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "โปรตุเกส",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Coimbra",
  icon: "🇵🇹",
  link: "https://www.uc.pt/en/"
},
{
  id: 797,
  name: "Nova SBE Scholarships",
  level: "ปริญญาตรี/โท",
  country: "โปรตุเกส",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาด้านเศรษฐศาสตร์และธุรกิจ",
  icon: "💼",
  link: "https://www.novasbe.unl.pt/en/"
},
{
  id: 798,
  name: "Spanish Government MAEC-AECID Scholarships",
  level: "ปริญญาโท/เอก/วิจัย",
  country: "สเปน",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโครงการความร่วมมือของสเปน",
  icon: "🇪🇸",
  link: "https://www.aecid.es/"
},
{
  id: 799,
  name: "Barcelona School of Economics Scholarships",
  level: "ปริญญาโท",
  country: "สเปน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติด้านเศรษฐศาสตร์",
  icon: "📈",
  link: "https://www.bse.eu/study/financial-aid"
},
{
  id: 800,
  name: "IE University Scholarships",
  level: "ปริญญาตรี/โท",
  country: "สเปน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ IE University",
  icon: "🎓",
  link: "https://www.ie.edu/financial-aid/"
},

// ==================== ทุนทั่วโลก 801-850 ====================

{
  id: 801,
  name: "La Caixa Foundation Postgraduate Scholarships",
  level: "ปริญญาโท/เอก",
  country: "สเปน",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสนับสนุนการศึกษาระดับบัณฑิตศึกษา",
  icon: "🎓",
  link: "https://fundacionlacaixa.org/en/scholarships"
},
{
  id: 802,
  name: "UC3M Excellence Scholarship",
  level: "ปริญญาตรี/โท",
  country: "สเปน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนความเป็นเลิศของ Carlos III University",
  icon: "🇪🇸",
  link: "https://www.uc3m.es/"
},
{
  id: 803,
  name: "University of Valencia Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "สเปน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและความช่วยเหลือสำหรับนักศึกษาต่างชาติ",
  icon: "🇪🇸",
  link: "https://www.uv.es/uvweb/college/en/college-1285846945191.html"
},
{
  id: 804,
  name: "University of Barcelona Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "สเปน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ University of Barcelona",
  icon: "🇪🇸",
  link: "https://www.ub.edu/web/portal/en/"
},
{
  id: 805,
  name: "IE Foundation Scholarships",
  level: "ปริญญาตรี/โท",
  country: "สเปน",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสนับสนุนนักศึกษาของ IE",
  icon: "🎓",
  link: "https://www.ie.edu/financial-aid/"
},
{
  id: 806,
  name: "Swiss National Science Foundation Grants",
  level: "ปริญญาเอก/วิจัย",
  country: "สวิตเซอร์แลนด์",
  type: "องค์กรวิจัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโครงการสนับสนุนงานวิจัย",
  icon: "🔬",
  link: "https://www.snf.ch/en"
},
{
  id: 807,
  name: "University of Zurich Scholarships",
  level: "ปริญญาโท/เอก",
  country: "สวิตเซอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Zurich",
  icon: "🇨🇭",
  link: "https://www.uzh.ch/en.html"
},
{
  id: 808,
  name: "University of St Gallen Scholarships",
  level: "ปริญญาตรี/โท",
  country: "สวิตเซอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาด้านธุรกิจและเศรษฐศาสตร์",
  icon: "💼",
  link: "https://www.unisg.ch/en/"
},
{
  id: 809,
  name: "USI Scholarships",
  level: "ปริญญาโท",
  country: "สวิตเซอร์แลนด์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Università della Svizzera italiana",
  icon: "🇨🇭",
  link: "https://www.usi.ch/en"
},
{
  id: 810,
  name: "Monash International Leadership Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนผู้นำระดับนานาชาติของ Monash University",
  icon: "🇦🇺",
  link: "https://www.monash.edu/study/fees-scholarships/scholarships"
},
{
  id: 811,
  name: "University of Melbourne Graduate Research Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยระดับบัณฑิตศึกษาของ University of Melbourne",
  icon: "🔬",
  link: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships"
},
{
  id: 812,
  name: "University of Sydney International Research Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://www.sydney.edu.au/scholarships/"
},
{
  id: 813,
  name: "ANU Chancellor's International Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Australian National University",
  icon: "🇦🇺",
  link: "https://study.anu.edu.au/scholarships"
},
{
  id: 814,
  name: "UNSW Scientia PhD Scholarship",
  level: "ปริญญาเอก",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนปริญญาเอกด้านการวิจัยของ UNSW",
  icon: "🔬",
  link: "https://www.scholarships.unsw.edu.au/scholarships/id/1988/7272"
},
{
  id: 815,
  name: "UQ International Onshore Merit Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Merit สำหรับนักศึกษาต่างชาติ University of Queensland",
  icon: "🇦🇺",
  link: "https://scholarships.uq.edu.au/"
},
{
  id: 816,
  name: "Macquarie University International Scholarships",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Macquarie University",
  icon: "🇦🇺",
  link: "https://www.mq.edu.au/study/admissions-and-entry/scholarships"
},
{
  id: 817,
  name: "Adelaide Global Citizens Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Adelaide",
  icon: "🇦🇺",
  link: "https://international.adelaide.edu.au/admissions/scholarships"
},
{
  id: 818,
  name: "Deakin Vice-Chancellor's International Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีศักยภาพสูง",
  icon: "🇦🇺",
  link: "https://www.deakin.edu.au/study/fees-and-scholarships/scholarships"
},
{
  id: 819,
  name: "La Trobe International Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ La Trobe University",
  icon: "🇦🇺",
  link: "https://www.latrobe.edu.au/study/fees-and-scholarships/scholarships"
},
{
  id: 820,
  name: "RMIT International Excellence Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนความเป็นเลิศสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://www.rmit.edu.au/students/support-services/scholarships"
},
{
  id: 821,
  name: "Western Sydney University Vice-Chancellor Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Western Sydney University",
  icon: "🇦🇺",
  link: "https://www.westernsydney.edu.au/future/study/how-to-apply/scholarships"
},
{
  id: 822,
  name: "Curtin International Research Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยสำหรับนักศึกษาต่างชาติ",
  icon: "🔬",
  link: "https://www.curtin.edu.au/study/fees-and-scholarships/scholarships/"
},
{
  id: 823,
  name: "Flinders University Research Training Program",
  level: "ปริญญาโท/เอก",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยระดับบัณฑิตศึกษา",
  icon: "🔬",
  link: "https://www.flinders.edu.au/study/scholarships"
},
{
  id: 824,
  name: "University of Newcastle International Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Newcastle",
  icon: "🇦🇺",
  link: "https://www.newcastle.edu.au/study/fees-and-scholarships/scholarships"
},
{
  id: 825,
  name: "University of Wollongong International Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Wollongong",
  icon: "🇦🇺",
  link: "https://www.uow.edu.au/study/scholarships/"
},
{
  id: 826,
  name: "QUT International Merit Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Merit สำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://www.qut.edu.au/study/fees-and-scholarships/scholarships"
},
{
  id: 827,
  name: "Swinburne International Excellence Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนความเป็นเลิศสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://www.swinburne.edu.au/study/scholarships/"
},
{
  id: 828,
  name: "James Cook University International Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ James Cook University",
  icon: "🇦🇺",
  link: "https://www.jcu.edu.au/scholarships"
},
{
  id: 829,
  name: "Bond University International Leadership Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านผู้นำสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇺",
  link: "https://bond.edu.au/study/fees-and-scholarships/scholarships"
},
{
  id: 830,
  name: "University of Tasmania International Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Tasmania",
  icon: "🇦🇺",
  link: "https://www.utas.edu.au/scholarships"
},
{
  id: 831,
  name: "University of British Columbia International Scholars",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่มีศักยภาพสูง",
  icon: "🇨🇦",
  link: "https://you.ubc.ca/financial-planning/scholarships-international-students/"
},
{
  id: 832,
  name: "Vanier Canada Graduate Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนปริญญาเอกระดับประเทศของแคนาดา",
  icon: "🇨🇦",
  link: "https://vanier.gc.ca/en/home-accueil.html"
},
{
  id: 833,
  name: "Pierre Elliott Trudeau Foundation Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนปริญญาเอกด้านสังคมศาสตร์และมนุษยศาสตร์",
  icon: "🇨🇦",
  link: "https://www.trudeaufoundation.ca/scholarship"
},
{
  id: 834,
  name: "Lester B. Pearson International Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Toronto",
  icon: "🇨🇦",
  link: "https://future.utoronto.ca/finances/scholarships/"
},
{
  id: 835,
  name: "University of Toronto International Scholarships",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇨🇦",
  link: "https://future.utoronto.ca/finances/"
},
{
  id: 836,
  name: "McGill University Entrance Scholarships",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาใหม่ของ McGill University",
  icon: "🇨🇦",
  link: "https://www.mcgill.ca/studentaid/scholarships-aid"
},
{
  id: 837,
  name: "Ontario Trillium Scholarship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "รัฐบาลท้องถิ่น",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนปริญญาเอกสำหรับนักศึกษาต่างชาติใน Ontario",
  icon: "🇨🇦",
  link: "https://www.ontario.ca/page/ontario-trillium-scholarship"
},
{
  id: 838,
  name: "Ontario Graduate Scholarship",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "รัฐบาลท้องถิ่น",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนระดับบัณฑิตศึกษาใน Ontario",
  icon: "🇨🇦",
  link: "https://www.ontario.ca/page/ontario-graduate-scholarship"
},
{
  id: 839,
  name: "University of Alberta Graduate Excellence Scholarship",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษา University of Alberta",
  icon: "🇨🇦",
  link: "https://www.ualberta.ca/graduate-studies/awards-and-funding/index.html"
},
{
  id: 840,
  name: "University of Calgary International Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าใหม่",
  icon: "🇨🇦",
  link: "https://www.ucalgary.ca/registrar/awards"
},
{
  id: 841,
  name: "University of Waterloo International Master's Award",
  level: "ปริญญาโท",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาปริญญาโทต่างชาติ",
  icon: "🇨🇦",
  link: "https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/funding"
},
{
  id: 842,
  name: "Western University International Admission Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าใหม่",
  icon: "🇨🇦",
  link: "https://welcome.uwo.ca/finances/scholarships.html"
},
{
  id: 843,
  name: "Queen's University International Admission Award",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇨🇦",
  link: "https://www.queensu.ca/admission/financial-aid"
},
{
  id: 844,
  name: "Dalhousie University Graduate Scholarship",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษา",
  icon: "🇨🇦",
  link: "https://www.dal.ca/academics/graduate-programs/funding.html"
},
{
  id: 845,
  name: "McMaster International Excellence Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ McMaster University",
  icon: "🇨🇦",
  link: "https://future.mcmaster.ca/financing/"
},
{
  id: 846,
  name: "Simon Fraser University International Scholarships",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ SFU",
  icon: "🇨🇦",
  link: "https://www.sfu.ca/students/financialaid.html"
},
{
  id: 847,
  name: "University of Manitoba Graduate Fellowship",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนบัณฑิตศึกษาของ University of Manitoba",
  icon: "🇨🇦",
  link: "https://umanitoba.ca/graduate-studies/funding-awards"
},
{
  id: 848,
  name: "University of Saskatchewan International Excellence Award",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇨🇦",
  link: "https://students.usask.ca/money/scholarships.php"
},
{
  id: 849,
  name: "Memorial University International Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าใหม่",
  icon: "🇨🇦",
  link: "https://www.mun.ca/scholarships/"
},
{
  id: 850,
  name: "Carleton University Prestige Scholarships",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนโดดเด่น",
  icon: "🇨🇦",
  link: "https://carleton.ca/awards/"
},

// ==================== ทุนทั่วโลก 851-900 ====================

{
  id: 851,
  name: "Fulbright Foreign Student Program",
  level: "ปริญญาโท/เอก",
  country: "สหรัฐอเมริกา",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Fulbright สำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://foreign.fulbrightonline.org/"
},
{
  id: 852,
  name: "Hubert H. Humphrey Fellowship",
  level: "อบรม/วิจัย",
  country: "สหรัฐอเมริกา",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนพัฒนาวิชาชีพสำหรับผู้นำจากประเทศต่าง ๆ",
  icon: "🇺🇸",
  link: "https://www.humphreyfellowship.org/"
},
{
  id: 853,
  name: "Knight-Hennessy Scholars",
  level: "ปริญญาโท/เอก",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนบัณฑิตศึกษาที่ Stanford University",
  icon: "🎓",
  link: "https://knight-hennessy.stanford.edu/"
},
{
  id: 854,
  name: "Yale Young Global Scholars",
  level: "มัธยม",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการพัฒนาผู้นำสำหรับนักเรียนมัธยมจากทั่วโลก",
  icon: "🌎",
  link: "https://globalscholars.yale.edu/"
},
{
  id: 855,
  name: "Schwarzman Scholars",
  level: "ปริญญาโท",
  country: "จีน",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนผู้นำระดับโลกสำหรับศึกษาที่ Tsinghua University",
  icon: "🌏",
  link: "https://www.schwarzmanscholars.org/"
},
{
  id: 856,
  name: "Berea College International Scholarship",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนช่วยเหลือนักศึกษาต่างชาติของ Berea College",
  icon: "🇺🇸",
  link: "https://www.berea.edu/admissions/international-students/"
},
{
  id: 857,
  name: "Amherst College International Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือทางการเงินสำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://www.amherst.edu/admission/"
},
{
  id: 858,
  name: "Duke University Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือด้านการเงินสำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://admissions.duke.edu/financial-aid/"
},
{
  id: 859,
  name: "Emory Scholars Program",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาที่มีความเป็นเลิศ",
  icon: "🎓",
  link: "https://www.emory.edu/home/admission/"
},
{
  id: 860,
  name: "Vanderbilt Merit Scholarships",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Merit สำหรับนักศึกษาระดับปริญญาตรี",
  icon: "🇺🇸",
  link: "https://www.vanderbilt.edu/scholarships/"
},
{
  id: 861,
  name: "University of Chicago International Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือทางการเงินสำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://college.uchicago.edu/financial-aid"
},
{
  id: 862,
  name: "Princeton University Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ระบบ financial aid สำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://finaid.princeton.edu/"
},
{
  id: 863,
  name: "MIT Undergraduate Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือทางการเงินสำหรับนักศึกษาระดับปริญญาตรี",
  icon: "🇺🇸",
  link: "https://sfs.mit.edu/"
},
{
  id: 864,
  name: "Harvard College Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือทางการเงินสำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://college.harvard.edu/financial-aid"
},
{
  id: 865,
  name: "AAUW International Fellowships",
  level: "ปริญญาโท/เอก/วิจัย",
  country: "สหรัฐอเมริกา",
  type: "องค์กร",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับผู้หญิงจากนานาชาติที่ศึกษาในสหรัฐฯ",
  icon: "👩‍🎓",
  link: "https://www.aauw.org/resources/programs/fellowships-grants/current-opportunities/international/"
},
{
  id: 866,
  name: "Rotary Peace Fellowship",
  level: "ปริญญาโท",
  country: "หลายประเทศ",
  type: "องค์กร",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านสันติภาพและการแก้ไขความขัดแย้ง",
  icon: "☮️",
  link: "https://www.rotary.org/en/our-programs/peace-fellowships"
},
{
  id: 867,
  name: "Joint Japan World Bank Scholarship",
  level: "ปริญญาโท",
  country: "หลายประเทศ",
  type: "องค์กรระหว่างประเทศ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน World Bank สำหรับหลักสูตรพัฒนาระหว่างประเทศ",
  icon: "🌍",
  link: "https://www.worldbank.org/en/programs/scholarships"
},
{
  id: 868,
  name: "Mastercard Foundation Scholars Program",
  level: "ปริญญาตรี/โท",
  country: "หลายประเทศ",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการทุนผ่านมหาวิทยาลัยพันธมิตรทั่วโลก",
  icon: "🌍",
  link: "https://mastercardfdn.org/all/scholars/"
},
{
  id: 869,
  name: "OAS Academic Scholarship Program",
  level: "ปริญญาโท/เอก",
  country: "ทวีปอเมริกา",
  type: "องค์กรระหว่างประเทศ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาขององค์การรัฐอเมริกัน",
  icon: "🌎",
  link: "https://www.oas.org/en/scholarships/"
},
{
  id: 870,
  name: "McCall MacBain Scholarship",
  level: "ปริญญาโท",
  country: "แคนาดา",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนผู้นำระดับบัณฑิตศึกษาที่ McGill University",
  icon: "🇨🇦",
  link: "https://mccallmacbainscholars.org/"
},
{
  id: 871,
  name: "NYU Wagner International Scholarships",
  level: "ปริญญาโท",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านนโยบายสาธารณะและการบริหาร",
  icon: "🇺🇸",
  link: "https://wagner.nyu.edu/financial-aid/scholarships"
},
{
  id: 872,
  name: "Columbia University International Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและความช่วยเหลือสำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://www.columbia.edu/"
},
{
  id: 873,
  name: "Cornell University International Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือทางการเงินสำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://finaid.cornell.edu/"
},
{
  id: 874,
  name: "Brown University International Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือทางการเงินสำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://finaid.brown.edu/"
},
{
  id: 875,
  name: "Dartmouth International Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและ financial aid สำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://financialaid.dartmouth.edu/"
},
{
  id: 876,
  name: "University of Pennsylvania Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือทางการเงินสำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://srfs.upenn.edu/financial-aid"
},
{
  id: 877,
  name: "Northwestern University Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือด้านการเงินสำหรับนักศึกษาต่างชาติ",
  icon: "🇺🇸",
  link: "https://undergradaid.northwestern.edu/"
},
{
  id: 878,
  name: "University of Southern California Scholarships",
  level: "ปริญญาตรี/โท",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ USC",
  icon: "🇺🇸",
  link: "https://admission.usc.edu/learn/costs-and-financial-aid/"
},
{
  id: 879,
  name: "Boston University Trustee Scholarship",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนระดับสูงสำหรับนักศึกษาปริญญาตรี",
  icon: "🇺🇸",
  link: "https://www.bu.edu/admissions/tuition-aid/scholarships/"
},
{
  id: 880,
  name: "University of Miami Stamps Scholarship",
  level: "ปริญญาตรี",
  country: "สหรัฐอเมริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนเต็มรูปแบบสำหรับนักศึกษาที่มีศักยภาพสูง",
  icon: "🌴",
  link: "https://admissions.miami.edu/undergraduate/financial-aid/scholarships/"
},
{
  id: 881,
  name: "University of Toronto Graduate Funding",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและ funding สำหรับนักศึกษาบัณฑิตศึกษา",
  icon: "🇨🇦",
  link: "https://www.sgs.utoronto.ca/awards/"
},
{
  id: 882,
  name: "UBC Graduate Global Leadership Fellowship",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษาจากประเทศกำลังพัฒนา",
  icon: "🇨🇦",
  link: "https://www.grad.ubc.ca/awards"
},
{
  id: 883,
  name: "McGill Graduate Funding",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและเงินสนับสนุนสำหรับนักศึกษาบัณฑิตศึกษา",
  icon: "🇨🇦",
  link: "https://www.mcgill.ca/gps/funding"
},
{
  id: 884,
  name: "University of Ottawa International Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Ottawa",
  icon: "🇨🇦",
  link: "https://www.uottawa.ca/study/fees-financial-support/scholarships"
},
{
  id: 885,
  name: "Concordia University Presidential Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาที่มีผลการเรียนโดดเด่น",
  icon: "🇨🇦",
  link: "https://www.concordia.ca/students/financial-support/scholarships.html"
},
{
  id: 886,
  name: "HEC Montréal Scholarships",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาด้านธุรกิจและการจัดการ",
  icon: "💼",
  link: "https://www.hec.ca/en/students/scholarships/"
},
{
  id: 887,
  name: "Université Laval Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Université Laval",
  icon: "🇨🇦",
  link: "https://www.ulaval.ca/en/studies/scholarships-and-financial-aid"
},
{
  id: 888,
  name: "York University International Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าใหม่",
  icon: "🇨🇦",
  link: "https://futurestudents.yorku.ca/financialsupport"
},
{
  id: 889,
  name: "University of Victoria International Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Victoria",
  icon: "🇨🇦",
  link: "https://www.uvic.ca/undergraduate/finances/scholarships/"
},
{
  id: 890,
  name: "University of Guelph International Scholarships",
  level: "ปริญญาตรี/โท",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Guelph",
  icon: "🇨🇦",
  link: "https://www.uoguelph.ca/registrar/studentfinance/scholarships"
},
{
  id: 891,
  name: "University of Waterloo International Student Scholarships",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇨🇦",
  link: "https://uwaterloo.ca/future-students/financing/scholarships"
},
{
  id: 892,
  name: "University of Calgary Graduate Awards",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษา",
  icon: "🇨🇦",
  link: "https://grad.ucalgary.ca/awards"
},
{
  id: 893,
  name: "Memorial University Graduate Funding",
  level: "ปริญญาโท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและ funding สำหรับนักศึกษาบัณฑิตศึกษา",
  icon: "🇨🇦",
  link: "https://www.mun.ca/sgs/funding/"
},
{
  id: 894,
  name: "University of Regina International Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติที่เข้าใหม่",
  icon: "🇨🇦",
  link: "https://www.uregina.ca/awards/"
},
{
  id: 895,
  name: "University of Windsor Open Entrance Scholarship",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาใหม่ที่มีผลการเรียนดี",
  icon: "🇨🇦",
  link: "https://www.uwindsor.ca/awards/"
},
{
  id: 896,
  name: "Toronto Metropolitan University International Scholarships",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ TMU",
  icon: "🇨🇦",
  link: "https://www.torontomu.ca/admissions/scholarships/"
},
{
  id: 897,
  name: "University of British Columbia Four Year Doctoral Fellowship",
  level: "ปริญญาเอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสนับสนุนการศึกษาระดับปริญญาเอก",
  icon: "🔬",
  link: "https://www.grad.ubc.ca/awards"
},
{
  id: 898,
  name: "University of Alberta International Scholarships",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับปริญญาตรี",
  icon: "🇨🇦",
  link: "https://www.ualberta.ca/admissions/undergraduate/tuition-and-costs/scholarships-and-awards/index.html"
},
{
  id: 899,
  name: "University of Manitoba International Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Manitoba",
  icon: "🇨🇦",
  link: "https://umanitoba.ca/financial-aid-and-awards/"
},
{
  id: 900,
  name: "Bishop's University International Scholarships",
  level: "ปริญญาตรี",
  country: "แคนาดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติของ Bishop's University",
  icon: "🇨🇦",
  link: "https://www.ubishops.ca/future-students/scholarships/"
},

// ==================== ทุนทั่วโลก 901-950 ====================

{
  id: 901,
  name: "KAUST Fellowship",
  level: "ปริญญาโท/เอก",
  country: "ซาอุดีอาระเบีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนเต็มรูปแบบด้านวิทยาศาสตร์และวิศวกรรม",
  icon: "🇸🇦",
  link: "https://www.kaust.edu.sa/en/study"
},
{
  id: 902,
  name: "King Fahd University Graduate Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ซาอุดีอาระเบีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษาต่างชาติ",
  icon: "🇸🇦",
  link: "https://www.kfupm.edu.sa/"
},
{
  id: 903,
  name: "Saudi Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ซาอุดีอาระเบีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลซาอุดีอาระเบียสำหรับนักศึกษาต่างชาติ",
  icon: "🇸🇦",
  link: "https://studyinsaudi.moe.gov.sa/"
},
{
  id: 904,
  name: "MBZUAI Scholarship",
  level: "ปริญญาโท/เอก",
  country: "สหรัฐอาหรับเอมิเรตส์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านปัญญาประดิษฐ์ของ MBZUAI",
  icon: "🤖",
  link: "https://mbzuai.ac.ae/study/"
},
{
  id: 905,
  name: "Khalifa University Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "สหรัฐอาหรับเอมิเรตส์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านวิทยาศาสตร์ วิศวกรรม และเทคโนโลยี",
  icon: "🇦🇪",
  link: "https://www.ku.ac.ae/"
},
{
  id: 906,
  name: "UAE University Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "สหรัฐอาหรับเอมิเรตส์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ UAE University",
  icon: "🇦🇪",
  link: "https://www.uaeu.ac.ae/en/"
},
{
  id: 907,
  name: "NYU Abu Dhabi Financial Aid",
  level: "ปริญญาตรี",
  country: "สหรัฐอาหรับเอมิเรตส์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ความช่วยเหลือทางการเงินสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇪",
  link: "https://nyuad.nyu.edu/en/admissions/financial-aid.html"
},
{
  id: 908,
  name: "Qatar University International Scholarship",
  level: "ปริญญาตรี",
  country: "กาตาร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Qatar University",
  icon: "🇶🇦",
  link: "https://www.qu.edu.qa/students/admission/undergraduate/scholarships"
},
{
  id: 909,
  name: "Hamad Bin Khalifa University Scholarship",
  level: "ปริญญาโท/เอก",
  country: "กาตาร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษาของ HBKU",
  icon: "🇶🇦",
  link: "https://www.hbku.edu.qa/en/admissions"
},
{
  id: 910,
  name: "Kuwait Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "คูเวต",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาของรัฐบาลคูเวต",
  icon: "🇰🇼",
  link: "https://www.mohe.edu.kw/"
},
{
  id: 911,
  name: "Oman Government Scholarships",
  level: "ปริญญาตรี/โท",
  country: "โอมาน",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโครงการศึกษาของรัฐบาลโอมาน",
  icon: "🇴🇲",
  link: "https://www.moheri.gov.om/"
},
{
  id: 912,
  name: "Brunei Darussalam Government Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "บรูไน",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลบรูไนสำหรับนักศึกษาต่างชาติ",
  icon: "🇧🇳",
  link: "https://www.mfa.gov.bn/"
},
{
  id: 913,
  name: "ASEAN Undergraduate Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาจากประเทศสมาชิกอาเซียน",
  icon: "🌏",
  link: "https://www.nus.edu.sg/oam/scholarships"
},
{
  id: 914,
  name: "ASEAN Scholarships for Thailand",
  level: "มัธยม",
  country: "สิงคโปร์",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาสำหรับนักเรียนจากประเทศไทยและอาเซียน",
  icon: "🇸🇬",
  link: "https://www.moe.gov.sg/financial-matters/awards-scholarships"
},
{
  id: 915,
  name: "SUTD Global Excellence Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ SUTD",
  icon: "🇸🇬",
  link: "https://www.sutd.edu.sg/Admissions/Undergraduate/Financing-Your-Studies"
},
{
  id: 916,
  name: "SMU Global Impact Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาที่มีศักยภาพด้านผู้นำและผลกระทบต่อสังคม",
  icon: "🇸🇬",
  link: "https://admissions.smu.edu.sg/financial-aid/scholarships"
},
{
  id: 917,
  name: "NTU College Scholarship",
  level: "ปริญญาตรี",
  country: "สิงคโปร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาระดับปริญญาตรี NTU",
  icon: "🇸🇬",
  link: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships"
},
{
  id: 918,
  name: "NUS Research Scholarship",
  level: "ปริญญาโท/เอก",
  country: "สิงคโปร์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยระดับบัณฑิตศึกษาของ NUS",
  icon: "🔬",
  link: "https://www.nus.edu.sg/graduate-school/"
},
{
  id: 919,
  name: "Hong Kong Baptist University International Scholarship",
  level: "ปริญญาตรี",
  country: "ฮ่องกง",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ HKBU",
  icon: "🇭🇰",
  link: "https://admissions.hkbu.edu.hk/"
},
{
  id: 920,
  name: "Hong Kong Polytechnic University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ฮ่องกง",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ PolyU",
  icon: "🇭🇰",
  link: "https://www.polyu.edu.hk/study/"
},
{
  id: 921,
  name: "City University of Hong Kong Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ฮ่องกง",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ CityU",
  icon: "🇭🇰",
  link: "https://www.cityu.edu.hk/"
},
{
  id: 922,
  name: "Hong Kong University of Science and Technology Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ฮ่องกง",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://hkust.edu.hk/"
},
{
  id: 923,
  name: "Kyoto University International Education Scholarships",
  level: "ปริญญาโท/เอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและเงินสนับสนุนนักศึกษาต่างชาติ",
  icon: "🇯🇵",
  link: "https://www.kyoto-u.ac.jp/en/education-campus/tuition-fees/scholarships"
},
{
  id: 924,
  name: "Osaka University International Scholarships",
  level: "ปริญญาโท/เอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Osaka University",
  icon: "🇯🇵",
  link: "https://www.osaka-u.ac.jp/en"
},
{
  id: 925,
  name: "Tohoku University President Fellowship",
  level: "ปริญญาโท/เอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇯🇵",
  link: "https://www.tohoku.ac.jp/en/"
},
{
  id: 926,
  name: "Keio University Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Keio University",
  icon: "🇯🇵",
  link: "https://www.keio.ac.jp/en/"
},
{
  id: 927,
  name: "Hitotsubashi University Scholarships",
  level: "ปริญญาโท/เอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติด้านธุรกิจและสังคมศาสตร์",
  icon: "🇯🇵",
  link: "https://www.hit-u.ac.jp/eng/"
},
{
  id: 928,
  name: "Tokyo Institute of Technology Scholarships",
  level: "ปริญญาโท/เอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาด้านวิทยาศาสตร์และวิศวกรรม",
  icon: "🔬",
  link: "https://www.isct.ac.jp/en"
},
{
  id: 929,
  name: "Nagoya University Scholarships",
  level: "ปริญญาโท/เอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Nagoya University",
  icon: "🇯🇵",
  link: "https://www.nagoya-u.ac.jp/en/"
},
{
  id: 930,
  name: "Hokkaido University Scholarships",
  level: "ปริญญาโท/เอก",
  country: "ญี่ปุ่น",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Hokkaido University",
  icon: "🇯🇵",
  link: "https://www.global.hokudai.ac.jp/"
},
{
  id: 931,
  name: "Taipei Medical University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติด้านการแพทย์",
  icon: "🇹🇼",
  link: "https://www.tmu.edu.tw/en/"
},
{
  id: 932,
  name: "National Taiwan University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ NTU",
  icon: "🇹🇼",
  link: "https://admissions.ntu.edu.tw/"
},
{
  id: 933,
  name: "National Tsing Hua University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ NTHU",
  icon: "🇹🇼",
  link: "https://nthu-en.site.nthu.edu.tw/"
},
{
  id: 934,
  name: "National Cheng Kung University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ NCKU",
  icon: "🇹🇼",
  link: "https://web.ncku.edu.tw/"
},
{
  id: 935,
  name: "National Taiwan University of Science and Technology Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติด้านเทคโนโลยี",
  icon: "🔬",
  link: "https://www.ntust.edu.tw/"
},
{
  id: 936,
  name: "National Chengchi University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ NCCU",
  icon: "🇹🇼",
  link: "https://www.nccu.edu.tw/"
},
{
  id: 937,
  name: "Taiwan Tech International Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ไต้หวัน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านวิศวกรรมและเทคโนโลยี",
  icon: "💻",
  link: "https://www.ntust.edu.tw/"
},
{
  id: 938,
  name: "National Sun Yat-sen University Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ไต้หวัน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ NSYSU",
  icon: "🇹🇼",
  link: "https://www.nsysu.edu.tw/"
},
{
  id: 939,
  name: "National Yang Ming Chiao Tung University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "ไต้หวัน",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://www.nycu.edu.tw/"
},
{
  id: 940,
  name: "Korea University International Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Korea University",
  icon: "🇰🇷",
  link: "https://www.korea.edu/mbshome/mbs/en/index.do"
},
{
  id: 941,
  name: "Sungkyunkwan University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ SKKU",
  icon: "🇰🇷",
  link: "https://www.skku.edu/eng/"
},
{
  id: 942,
  name: "Hanyang University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Hanyang University",
  icon: "🇰🇷",
  link: "https://www.hanyang.ac.kr/web/eng"
},
{
  id: 943,
  name: "Ewha Womans University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Ewha",
  icon: "🇰🇷",
  link: "https://www.ewha.ac.kr/ewhaen/index.do"
},
{
  id: 944,
  name: "Sogang University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Sogang University",
  icon: "🇰🇷",
  link: "https://www.sogang.ac.kr/en/"
},
{
  id: 945,
  name: "Kyung Hee University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Kyung Hee",
  icon: "🇰🇷",
  link: "https://www.khu.ac.kr/eng/main/index.do"
},
{
  id: 946,
  name: "UNIST International Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://www.unist.ac.kr/"
},
{
  id: 947,
  name: "Gwangju Institute of Science and Technology Scholarship",
  level: "ปริญญาโท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านวิทยาศาสตร์และเทคโนโลยี GIST",
  icon: "🔬",
  link: "https://www.gist.ac.kr/en/"
},
{
  id: 948,
  name: "Daegu Gyeongbuk Institute of Science Scholarship",
  level: "ปริญญาโท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนด้านวิทยาศาสตร์และเทคโนโลยี",
  icon: "🔬",
  link: "https://www.dgist.ac.kr/en/"
},
{
  id: 949,
  name: "Chung-Ang University International Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Chung-Ang University",
  icon: "🇰🇷",
  link: "https://neweng.cau.ac.kr/"
},
{
  id: 950,
  name: "Pusan National University Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "เกาหลีใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ Pusan National University",
  icon: "🇰🇷",
  link: "https://www.pusan.ac.kr/eng/Main.do"
},

// ==================== ทุนทั่วโลก 951-1000 ====================

{
  id: 951,
  name: "ICCR Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "อินเดีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลอินเดียสำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇳",
  link: "https://a2ascholarships.iccr.gov.in/"
},
{
  id: 952,
  name: "Study in India Scholarship",
  level: "ปริญญาตรี/โท/เอก",
  country: "อินเดีย",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการสนับสนุนนักศึกษาต่างชาติในอินเดีย",
  icon: "🇮🇳",
  link: "https://studyinindia.gov.in/"
},
{
  id: 953,
  name: "IIT Delhi International Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "อินเดีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ IIT Delhi",
  icon: "🇮🇳",
  link: "https://home.iitd.ac.in/"
},
{
  id: 954,
  name: "IIT Bombay International Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "อินเดีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและเงินสนับสนุนสำหรับนักศึกษาต่างชาติ",
  icon: "🇮🇳",
  link: "https://www.iitb.ac.in/"
},
{
  id: 955,
  name: "IIT Madras International Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "อินเดีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ IIT Madras",
  icon: "🇮🇳",
  link: "https://www.iitm.ac.in/"
},
{
  id: 956,
  name: "University of Delhi Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "อินเดีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและความช่วยเหลือสำหรับนักศึกษา",
  icon: "🇮🇳",
  link: "https://www.du.ac.in/"
},
{
  id: 957,
  name: "University of Mumbai Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "อินเดีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาของ University of Mumbai",
  icon: "🇮🇳",
  link: "https://mu.ac.in/"
},
{
  id: 958,
  name: "Brazil PEC-PG Scholarship",
  level: "ปริญญาโท/เอก",
  country: "บราซิล",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลบราซิลสำหรับนักศึกษาต่างชาติระดับบัณฑิตศึกษา",
  icon: "🇧🇷",
  link: "https://www.gov.br/capes/pt-br"
},
{
  id: 959,
  name: "GCUB-Mob Scholarship",
  level: "ปริญญาโท/เอก",
  country: "บราซิล",
  type: "องค์กรนานาชาติ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการทุนบัณฑิตศึกษาสำหรับนักศึกษาต่างชาติ",
  icon: "🇧🇷",
  link: "https://www.gcub.org.br/"
},
{
  id: 960,
  name: "Brazil Government Exchange Scholarships",
  level: "ปริญญาโท/เอก",
  country: "บราซิล",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโครงการแลกเปลี่ยนของรัฐบาลบราซิล",
  icon: "🇧🇷",
  link: "https://www.gov.br/mre/pt-br"
},
{
  id: 961,
  name: "Argentina Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "อาร์เจนตินา",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโครงการการศึกษาสำหรับนักศึกษาต่างชาติ",
  icon: "🇦🇷",
  link: "https://www.argentina.gob.ar/educacion"
},
{
  id: 962,
  name: "Chile Nelson Mandela Scholarship",
  level: "ปริญญาโท",
  country: "ชิลี",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลชิลีสำหรับนักศึกษาจากประเทศคู่ความร่วมมือ",
  icon: "🇨🇱",
  link: "https://www.agcid.gob.cl/"
},
{
  id: 963,
  name: "AGCID Chile Scholarships",
  level: "ปริญญาโท/อบรม",
  country: "ชิลี",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและหลักสูตรอบรมของรัฐบาลชิลี",
  icon: "🇨🇱",
  link: "https://www.agcid.gob.cl/"
},
{
  id: 964,
  name: "Mexican Government Scholarships for Foreigners",
  level: "ปริญญาโท/เอก/วิจัย",
  country: "เม็กซิโก",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลเม็กซิโกสำหรับนักศึกษาต่างชาติ",
  icon: "🇲🇽",
  link: "https://www.gob.mx/amexcid"
},
{
  id: 965,
  name: "AMEXCID Excellence Scholarship",
  level: "ปริญญาโท/เอก",
  country: "เม็กซิโก",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนความเป็นเลิศของเม็กซิโก",
  icon: "🇲🇽",
  link: "https://www.gob.mx/amexcid"
},
{
  id: 966,
  name: "University of São Paulo Scholarships",
  level: "ปริญญาโท/เอก",
  country: "บราซิล",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of São Paulo",
  icon: "🇧🇷",
  link: "https://www5.usp.br/"
},
{
  id: 967,
  name: "University of Campinas Scholarships",
  level: "ปริญญาโท/เอก",
  country: "บราซิล",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษา UNICAMP",
  icon: "🇧🇷",
  link: "https://www.unicamp.br/unicamp/"
},
{
  id: 968,
  name: "University of Chile Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ชิลี",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Chile",
  icon: "🇨🇱",
  link: "https://uchile.cl/english"
},
{
  id: 969,
  name: "University of Buenos Aires Scholarships",
  level: "ปริญญาโท/เอก",
  country: "อาร์เจนตินา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโอกาสวิจัยของ University of Buenos Aires",
  icon: "🇦🇷",
  link: "https://www.uba.ar/"
},
{
  id: 970,
  name: "University of Costa Rica Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "คอสตาริกา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติในคอสตาริกา",
  icon: "🇨🇷",
  link: "https://www.ucr.ac.cr/"
},
{
  id: 971,
  name: "OAS Educational Scholarships",
  level: "ปริญญาโท/เอก",
  country: "อเมริกา",
  type: "องค์กรระหว่างประเทศ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาสำหรับประเทศสมาชิก OAS",
  icon: "🌎",
  link: "https://www.oas.org/en/scholarships/"
},
{
  id: 972,
  name: "CARICOM Scholarships",
  level: "ปริญญาตรี/โท",
  country: "แคริบเบียน",
  type: "องค์กรระหว่างประเทศ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการทุนการศึกษาภายในภูมิภาคแคริบเบียน",
  icon: "🌴",
  link: "https://caricom.org/"
},
{
  id: 973,
  name: "African Union Scholarships",
  level: "ปริญญาโท/เอก",
  country: "แอฟริกา",
  type: "องค์กรระหว่างประเทศ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการทุนและการพัฒนาบุคลากรของ African Union",
  icon: "🌍",
  link: "https://au.int/"
},
{
  id: 974,
  name: "Mandela Rhodes Scholarship",
  level: "ปริญญาโท",
  country: "แอฟริกาใต้",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนผู้นำสำหรับผู้สมัครจากประเทศแอฟริกา",
  icon: "🇿🇦",
  link: "https://www.mandelarhodes.org/"
},
{
  id: 975,
  name: "Mastercard Foundation Scholars at UCT",
  level: "ปริญญาตรี/โท",
  country: "แอฟริกาใต้",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Mastercard Foundation ผ่าน University of Cape Town",
  icon: "🇿🇦",
  link: "https://www.uct.ac.za/"
},
{
  id: 976,
  name: "University of Cape Town Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "แอฟริกาใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ UCT",
  icon: "🇿🇦",
  link: "https://www.uct.ac.za/"
},
{
  id: 977,
  name: "University of the Witwatersrand Scholarships",
  level: "ปริญญาโท/เอก",
  country: "แอฟริกาใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษา Wits",
  icon: "🇿🇦",
  link: "https://www.wits.ac.za/"
},
{
  id: 978,
  name: "University of Pretoria Scholarships",
  level: "ปริญญาโท/เอก",
  country: "แอฟริกาใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโอกาสวิจัย University of Pretoria",
  icon: "🇿🇦",
  link: "https://www.up.ac.za/"
},
{
  id: 979,
  name: "Stellenbosch University Scholarships",
  level: "ปริญญาโท/เอก",
  country: "แอฟริกาใต้",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาบัณฑิตศึกษา",
  icon: "🇿🇦",
  link: "https://www.sun.ac.za/english"
},
{
  id: 980,
  name: "University of Ghana Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "กานา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Ghana",
  icon: "🇬🇭",
  link: "https://www.ug.edu.gh/"
},
{
  id: 981,
  name: "KNUST Mastercard Foundation Scholars",
  level: "ปริญญาตรี/โท",
  country: "กานา",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Mastercard Foundation ที่ KNUST",
  icon: "🇬🇭",
  link: "https://www.knust.edu.gh/"
},
{
  id: 982,
  name: "Ashesi University Mastercard Scholarship",
  level: "ปริญญาตรี",
  country: "กานา",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาจากแอฟริกา",
  icon: "🇬🇭",
  link: "https://www.ashesi.edu.gh/"
},
{
  id: 983,
  name: "University of Nairobi Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "เคนยา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโอกาสวิจัย University of Nairobi",
  icon: "🇰🇪",
  link: "https://www.uonbi.ac.ke/"
},
{
  id: 984,
  name: "Makerere University Mastercard Scholars",
  level: "ปริญญาตรี/โท",
  country: "ยูกันดา",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Mastercard Foundation ที่ Makerere University",
  icon: "🇺🇬",
  link: "https://www.mak.ac.ug/"
},
{
  id: 985,
  name: "African Leadership University Mastercard Scholars",
  level: "ปริญญาตรี",
  country: "รวันดา",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาผู้นำจากแอฟริกา",
  icon: "🌍",
  link: "https://www.alueducation.com/"
},
{
  id: 986,
  name: "University of Rwanda Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "รวันดา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Rwanda",
  icon: "🇷🇼",
  link: "https://ur.ac.rw/"
},
{
  id: 987,
  name: "University of Botswana Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "บอตสวานา",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Botswana",
  icon: "🇧🇼",
  link: "https://www.ub.bw/"
},
{
  id: 988,
  name: "University of Mauritius Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "มอริเชียส",
  type: "รัฐบาล/มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนและโครงการศึกษาสำหรับนักศึกษาต่างชาติ",
  icon: "🇲🇺",
  link: "https://www.uom.ac.mu/"
},
{
  id: 989,
  name: "Mauritius-Africa Scholarship Scheme",
  level: "ปริญญาตรี/โท/เอก",
  country: "มอริเชียส",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนรัฐบาลมอริเชียสสำหรับผู้สมัครจากแอฟริกา",
  icon: "🌍",
  link: "https://education.govmu.org/"
},
{
  id: 990,
  name: "Egypt Government Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "อียิปต์",
  type: "รัฐบาล",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนการศึกษาของรัฐบาลอียิปต์",
  icon: "🇪🇬",
  link: "https://www.mohe.gov.eg/"
},
{
  id: 991,
  name: "American University in Cairo Scholarships",
  level: "ปริญญาตรี/โท",
  country: "อียิปต์",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ AUC",
  icon: "🇪🇬",
  link: "https://www.aucegypt.edu/admissions/undergraduate/financial-aid"
},
{
  id: 992,
  name: "University of Cape Town Mastercard Foundation Scholarship",
  level: "ปริญญาตรี/โท",
  country: "แอฟริกาใต้",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Mastercard Foundation ผ่าน UCT",
  icon: "🌍",
  link: "https://www.uct.ac.za/"
},
{
  id: 993,
  name: "University of Edinburgh Mastercard Foundation Scholars",
  level: "ปริญญาตรี/โท",
  country: "สหราชอาณาจักร",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับผู้สมัครจากแอฟริกาที่เข้าเกณฑ์",
  icon: "🌍",
  link: "https://www.ed.ac.uk/student-funding/postgraduate/international/mastercard-foundation"
},
{
  id: 994,
  name: "University of British Columbia Mastercard Scholars",
  level: "ปริญญาตรี/โท",
  country: "แคนาดา",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุน Mastercard Foundation ผ่าน UBC",
  icon: "🌍",
  link: "https://mastercardfdn.org/"
},
{
  id: 995,
  name: "McGill Mastercard Foundation Scholars",
  level: "ปริญญาตรี/โท",
  country: "แคนาดา",
  type: "มูลนิธิ",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "โครงการทุนสำหรับนักศึกษาจากแอฟริกา",
  icon: "🌍",
  link: "https://www.mcgill.ca/"
},
{
  id: 996,
  name: "University of Western Australia International Scholarships",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ UWA",
  icon: "🇦🇺",
  link: "https://www.uwa.edu.au/study/scholarships"
},
{
  id: 997,
  name: "University of Queensland Graduate School Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยสำหรับนักศึกษาบัณฑิตศึกษา",
  icon: "🔬",
  link: "https://graduate-school.uq.edu.au/scholarships"
},
{
  id: 998,
  name: "Monash University Graduate Research Scholarship",
  level: "ปริญญาโท/เอก",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนวิจัยสำหรับนักศึกษาต่างชาติ",
  icon: "🔬",
  link: "https://www.monash.edu/graduate-research/study/scholarships"
},
{
  id: 999,
  name: "University of Sydney Vice-Chancellor's International Scholarship",
  level: "ปริญญาตรี/โท",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "ทุนสำหรับนักศึกษาต่างชาติ University of Sydney",
  icon: "🇦🇺",
  link: "https://www.sydney.edu.au/scholarships/"
},
{
  id: 1000,
  name: "University of Melbourne International Scholarships",
  level: "ปริญญาตรี/โท/เอก",
  country: "ออสเตรเลีย",
  type: "มหาวิทยาลัย",
  deadline: "ตรวจสอบรอบล่าสุด",
  description: "รวมทุนสำหรับนักศึกษาต่างชาติของ University of Melbourne",
  icon: "🇦🇺",
  link: "https://scholarships.unimelb.edu.au/"
}
];


  // ==============================
  // ดึง Element จาก HTML
  // ==============================

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const scholarshipsContainer = document.getElementById("scholarships");
  const noResult = document.getElementById("noResult");
  const resultCount = document.getElementById("resultCount");

  const modal = document.getElementById("detailModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalCountry = document.getElementById("modalCountry");
  const modalText = document.getElementById("modalText");
  const modalLevel = document.getElementById("modalLevel");
  const modalType = document.getElementById("modalType");
  const modalDeadline = document.getElementById("modalDeadline");
  const modalIcon = document.getElementById("modalIcon");
  const closeModal = document.getElementById("closeModal");
  const modalAction = document.getElementById("modalAction");

  const categoryButtons =
    document.querySelectorAll(".category-card");


  // ==============================
  // ตรวจสอบ Element
  // ==============================

  if (!searchInput ||
      !searchButton ||
      !scholarshipsContainer ||
      !noResult ||
      !modal ||
      !closeModal) {

    console.error(
      "เกิดข้อผิดพลาด: ไม่พบ Element ที่จำเป็นใน index.html"
    );

    return;
  }


  // ==============================
  // ตัวแปรระบบ
  // ==============================

  let currentCategory = "ทั้งหมด";


  // ==============================
  // แสดงทุน
  // ==============================

  function renderScholarships(list) {

    scholarshipsContainer.innerHTML = "";

    if (list.length === 0) {

      noResult.classList.remove("hidden");

      if (resultCount) {
        resultCount.textContent = "พบ 0 รายการ";
      }

      return;
    }

    noResult.classList.add("hidden");

    if (resultCount) {
      resultCount.textContent =
        `พบ ${list.length} รายการ`;
    }


    list.forEach(function (scholarship) {

      const card = document.createElement("article");

      card.className = "scholarship-card";

      card.innerHTML = `
        <div class="card-icon">
          ${scholarship.icon}
        </div>

        <h3>${scholarship.name}</h3>

        <p class="country">
          📍 ${scholarship.country}
        </p>

        <div class="tags">
          <span class="tag">
            ${scholarship.level}
          </span>

          <span class="tag">
            ${scholarship.type}
          </span>
        </div>

        <p class="deadline">
          📅 ${scholarship.deadline}
        </p>

        <button
          class="detail-button"
          type="button"
          data-id="${scholarship.id}"
        >
          ดูรายละเอียด
        </button>
      `;

      scholarshipsContainer.appendChild(card);
    });


    // ปุ่มรายละเอียด

    const detailButtons =
      document.querySelectorAll(".detail-button");

    detailButtons.forEach(function (button) {

      button.addEventListener("click", function () {

        const id = Number(button.dataset.id);

        openModal(id);

      });

    });

  }


  // ==============================
  // ค้นหา
  // ==============================

  function searchScholarship() {

    const keyword =
      searchInput.value.trim().toLowerCase();


    const filtered =
      scholarships.filter(function (scholarship) {

        const matchesKeyword =
          scholarship.name.toLowerCase().includes(keyword) ||
          scholarship.country.toLowerCase().includes(keyword) ||
          scholarship.level.toLowerCase().includes(keyword) ||
          scholarship.type.toLowerCase().includes(keyword) ||
          scholarship.description.toLowerCase().includes(keyword);


        const matchesCategory =
          currentCategory === "ทั้งหมด" ||
          scholarship.level === currentCategory;


        return matchesKeyword && matchesCategory;

      });


    renderScholarships(filtered);

  }


  // ==============================
  // ปุ่มค้นหา
  // ==============================

  searchButton.addEventListener(
    "click",
    searchScholarship
  );


  // ==============================
  // กด Enter เพื่อค้นหา
  // ==============================

  searchInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {
        searchScholarship();
      }

    }
  );


  // ==============================
  // หมวดหมู่
  // ==============================

  categoryButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        categoryButtons.forEach(function (item) {
          item.classList.remove("active");
        });

        button.classList.add("active");

        currentCategory =
          button.dataset.category;

        searchScholarship();

      }
    );

  });


  // ==============================
  // เปิด Modal
  // ==============================

  function openModal(id) {

    const scholarship =
      scholarships.find(function (item) {
        return item.id === id;
      });


    if (!scholarship) {
      return;
    }


    modalIcon.textContent =
      scholarship.icon;

    modalTitle.textContent =
      scholarship.name;

    modalCountry.textContent =
      `📍 ${scholarship.country}`;

    modalText.textContent =
      scholarship.description;

    modalLevel.textContent =
      scholarship.level;

    modalType.textContent =
      scholarship.type;

    modalDeadline.textContent =
      scholarship.deadline;

    modalAction.href =
      scholarship.link;


    modal.classList.add("show");

    document.body.style.overflow = "hidden";

  }


  // ==============================
  // ปิด Modal
  // ==============================

  function closeModalFunction() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

  }


  closeModal.addEventListener(
    "click",
    closeModalFunction
  );


  // คลิกพื้นที่ด้านนอก Modal

  modal.addEventListener(
    "click",
    function (event) {

      if (event.target === modal) {
        closeModalFunction();
      }

    }
  );


  // กด ESC เพื่อปิด

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        modal.classList.contains("show")
      ) {

        closeModalFunction();

      }

    }
  );


  // ==============================
  // เริ่มต้นเว็บไซต์
  // ==============================

  renderScholarships(scholarships);

});
