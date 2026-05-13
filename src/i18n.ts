import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  vi: {
    translation: {
      nav: {
        about: "Về tôi",
        experience: "Kinh nghiệm",
        achievements: "Thành tựu",
        skills: "Kỹ năng",
        contact: "Liên hệ"
      },
      hero: {
        greeting: "Xin chào, mình là",
        contact: "Liên hệ ngay",
        download: "Tải CV",
        image: "Ảnh Chân Dung"
      },
      about: {
        title: "Về Tôi",
        story: "Câu chuyện của mình",
        p1: "Từ năm 2021, mình bắt đầu sự nghiệp với vai trò Freelancer trong lĩnh vực thiết kế đồ họa và chỉnh sửa video, đặc biệt tập trung vào các nội dung về bóng đá. Quá trình làm việc đã giúp mình rèn giũa tư duy hình ảnh, kỹ năng nắm bắt xu hướng và thấu hiểu người xem.",
        p2: "Với nền tảng đó, bước sang năm 2025, mình quyết định thử sức ở một vai trò mới đầy thách thức nhưng cũng cực kỳ tiềm năng: Seller trên nền tảng TikTok Shop US. Sự kết hợp giữa tư duy thiết kế và kỹ năng sale là thế mạnh để mình tạo ra những chiến dịch hiệu quả.",
        education: "Học Vấn"
      },
      experience: {
        title: "Kinh Nghiệm"
      },
      achievements: {
        title: "Thành Tựu"
      },
      skills: {
        title: "Kỹ Năng Nổi Bật",
        all: "Tất cả",
        design: "Thiết kế",
        video: "Video",
        sale: "Bán hàng",
        content: "Nội dung"
      },
      contact: {
        title: "Liên Hệ",
        subtitle: "Hãy kết nối để cùng tạo ra những dự án tuyệt vời!",
        info: "Thông tin liên hệ",
        form: "Gửi tin nhắn cho mình",
        name: "Tên của bạn",
        email: "Email của bạn",
        message: "Tin nhắn...",
        send: "Gửi tin nhắn",
        phone: "Số điện thoại",
        location: "Địa chỉ"
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "About Me",
        experience: "Experience",
        achievements: "Achievements",
        skills: "Skills",
        contact: "Contact"
      },
      hero: {
        greeting: "Hello, I am",
        contact: "Contact Me",
        download: "Download CV",
        image: "Portrait Image"
      },
      about: {
        title: "About Me",
        story: "My Story",
        p1: "Since 2021, I started my career as a Freelancer in graphic design and video editing, specifically focusing on football content. Working in this field has sharpened my visual thinking, trend-catching skills, and audience understanding.",
        p2: "With that foundation, entering 2025, I decided to challenge myself in a new, challenging but highly potential role: US TikTok Shop Seller. The combination of design thinking and sales skills is my strength to create effective campaigns.",
        education: "Education"
      },
      experience: {
        title: "Experience"
      },
      achievements: {
        title: "Achievements"
      },
      skills: {
        title: "Featured Skills",
        all: "All",
        design: "Design",
        video: "Video",
        sale: "Sales",
        content: "Content"
      },
      contact: {
        title: "Contact",
        subtitle: "Let's connect to create amazing projects together!",
        info: "Contact Information",
        form: "Send me a message",
        name: "Your Name",
        email: "Your Email",
        message: "Message...",
        send: "Send Message",
        phone: "Phone",
        location: "Location"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi',
    supportedLngs: ['vi', 'en'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;
