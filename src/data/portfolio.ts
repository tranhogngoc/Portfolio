import { Brain, Briefcase, Code, FileVideo, Gamepad2, Layout, LineChart, Mail, MapPin, Palette, Phone, ShoppingBag, Store, TrendingUp } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const PORTFOLIO_DATA_VI = {
  name: "Trần Hồng Ngọc",
  role: "TikTok Shop US Seller | Content Editor | Graphic Designer",
  email: "ngoc10012004@gmail.com",
  phone: "+84 0349216247",
  behance: "behance.net/ngoctran139",
  location: "Đà Nẵng, Việt Nam",
  about: "Mình là Ngọc, đã có cơ hội học hỏi và phát triển trong môi trường sáng tạo từ năm 2021. Với tinh thần cầu tiến, chăm chỉ và luôn sẵn sàng tiếp thu, mình không ngừng rèn luyện kiến thức, kỹ năng để hoàn thiện bản thân và đóng góp tốt hơn trong môi trường làm việc chuyên nghiệp. Hiện tại, mình đang tập trung phát triển trong lĩnh vực thương mại điện tử với vai trò Seller trên TikTok Shop US. Mình có kinh nghiệm xây dựng nội dung, vận hành gian hàng và tối ưu hiệu suất bán hàng nhằm tăng trưởng doanh thu trên TikTok Shop.",
  education: [
    {
      period: "2021 - 2024",
      school: "Cao đẳng FPT Polytechnic Đà Nẵng",
      degree: "Thiết kế đồ họa - Mỹ thuật đa phương tiện (Graphic Design)",
    }
  ],
  experience: [
    {
      period: "06/2025 - Hiện tại",
      role: "TikTok Shop Team Lead",
      company: "Bug Media",
      description: "Quản lý và vận hành gian hàng trên TikTok, đồng thời dẫn dắt và phân công công việc cho đội nhóm sản xuất nội dung và bán hàng. Xây dựng chiến lược nội dung, tối ưu hiệu suất team nhằm tăng trưởng doanh thu và tỷ lệ chuyển đổi trên TikTok Shop.",
      icon: ShoppingBag,
    },
    {
      period: "01/2025 - 06/2025",
      role: "TikTok Shop Seller",
      company: "Bug Media",
      description: "Quản lý và vận hành gian hàng trên TikTok, xây dựng nội dung video và livestream để quảng bá sản phẩm. Tối ưu hiệu suất bán hàng thông qua việc tăng tương tác, chuyển đổi và quản lý đơn hàng trên TikTok Shop.",
      icon: ShoppingBag,
    },
    {
      period: "01/2024 - 12/2025",
      role: "Game QA & LiveOps Executive",
      company: "Bug Media",
      description: "Thực hiện kiểm thử game (functional, gameplay, regression), phát hiện và theo dõi lỗi nhằm đảm bảo chất lượng sản phẩm trước và sau khi phát hành. Vận hành game (LiveOps) thông qua quản lý sự kiện, theo dõi dữ liệu người dùng và tối ưu trải nghiệm để tăng retention và doanh thu.",
      icon: Gamepad2,
    },
    {
      period: "2021 - 2024",
      role: "Freelancer (Graphic Design & Video Editing)",
      company: "Tự do",
      description: "Nhận các dự án thiết kế online: Social media post, Background, Backdrop Events. Chỉnh sửa video bóng đá (Football Content Editor).",
      icon: Palette,
    }
  ],
  achievements: [
    {
      title: "Doanh thu",
      value: "220000",
      prefix: "$",
      suffix: "+",
      description: "Trên TikTok Shop US trong 1 năm đầu",
      icon: TrendingUp,
    },
    {
      title: "Người theo dõi",
      value: "15000",
      prefix: "",
      suffix: "+",
      description: "Kênh TikTok bán áo 2d tự xây dựng",
      icon: Store,
    },
    {
      title: "Tỷ lệ chuyển đổi",
      value: "10",
      prefix: "",
      suffix: "%",
      description: "Tỷ lệ chuyển đổi trung bình qua video short",
      icon: LineChart,
    },
    {
      title: "Dự án Thiết kế",
      value: "3000",
      prefix: "",
      suffix: "+",
      description: "Dự án Freelance đã hoàn thành",
      icon: FileVideo,
    }
  ],
  skills: [
    { name: "Phân tích xu hướng TikTok", category: "Sale" },
    { name: "Vận hành TikTok Shop", category: "Sale" },
    { name: "Sáng tạo nội dung (Content Idea)", category: "Content" },
    { name: "Photoshop (Ps)", category: "Design" },
    { name: "Illustrator (Ai)", category: "Design" },
    { name: "CapCut", category: "Video" },
    
  ]  
};

export const PORTFOLIO_DATA_EN = {
  name: "Tran Hong Ngoc",
  role: "TikTok Shop US Seller | Content Editor | Graphic Designer",
  email: "ngoc10012004@gmail.com",
  phone: "+84 0349216247",
  behance: "behance.net/ngoctran139",
  location: "Da Nang, Vietnam",
  about: "I am Ngoc, having had the opportunity to learn and develop in a creative environment since 2021. With a progressive, hardworking spirit and always ready to learn, I constantly hone my knowledge and skills to improve myself and contribute better in a professional working environment. Currently, I am focusing on developing in the e-commerce field as a Seller on US TikTok Shop. I have experience in content creation, store operation, and sales performance optimization to increase revenue on TikTok Shop.",
  education: [
    {
      period: "2021 - 2024",
      school: "FPT Polytechnic College Da Nang",
      degree: "Graphic Design - Multimedia",
    }
  ],
  experience: [
    {
      period: "06/2025 - Present",
      role: "TikTok Shop Team Lead",
      company: "Bug Media",
      description: "Managing and operating TikTok stores, while leading and assigning tasks for the content production and sales team. Building content strategies, optimizing team performance to increase revenue and conversion rates on TikTok Shop.",
      icon: ShoppingBag,
    },
    {
      period: "01/2025 - 06/2025",
      role: "TikTok Shop Seller",
      company: "Bug Media",
      description: "Managing and operating TikTok stores, creating video content and livestreams to promote products. Optimizing sales performance by increasing interaction, conversion, and managing orders on TikTok Shop.",
      icon: ShoppingBag,
    },
    {
      period: "01/2024 - 12/2025",
      role: "Game QA & LiveOps Executive",
      company: "Bug Media",
      description: "Performing game testing (functional, gameplay, regression), detecting and tracking bugs to ensure product quality before and after release. Operating games (LiveOps) through event management, tracking user data, and optimizing experience to increase retention and revenue.",
      icon: Gamepad2,
    },
    {
      period: "2021 - 2024",
      role: "Freelancer (Graphic Design & Video Editing)",
      company: "Freelance",
      description: "Taking online design projects: Social media posts, Backgrounds, Event Backdrops. Editing football videos (Football Content Editor).",
      icon: Palette,
    }
  ],
  achievements: [
    {
      title: "Revenue",
      value: "220000",
      prefix: "$",
      suffix: "+",
      description: "On US TikTok Shop in the first year",
      icon: TrendingUp,
    },
    {
      title: "Followers",
      value: "15000",
      prefix: "",
      suffix: "+",
      description: "Self-built 2D shirt selling TikTok channel",
      icon: Store,
    },
    {
      title: "Conversion Rate",
      value: "10",
      prefix: "",
      suffix: "%",
      description: "Average conversion rate via short videos",
      icon: LineChart,
    },
    {
      title: "Design Projects",
      value: "3000",
      prefix: "",
      suffix: "+",
      description: "Completed freelance projects",
      icon: FileVideo,
    }
  ],
  skills: [
    { name: "TikTok Trend Analysis", category: "Sale" },
    { name: "TikTok Shop Operation", category: "Sale" },
    { name: "Content Creation (Idea)", category: "Content" },
    { name: "Photoshop (Ps)", category: "Design" },
    { name: "Illustrator (Ai)", category: "Design" },
    { name: "CapCut", category: "Video" },
  ]
};

export const usePortfolioData = () => {
  const { i18n } = useTranslation();
  return i18n.language && i18n.language.startsWith('vi') ? PORTFOLIO_DATA_VI : PORTFOLIO_DATA_EN;
};

// Keep for backward compatibility where needed, or replace
export const PORTFOLIO_DATA = PORTFOLIO_DATA_VI;
