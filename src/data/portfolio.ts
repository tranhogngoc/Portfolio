import { Brain, Briefcase, Code, FileVideo, Layout, LineChart, Mail, MapPin, Palette, Phone, ShoppingBag, Store, TrendingUp } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const PORTFOLIO_DATA_VI = {
  name: "Trần Hồng Ngọc",
  role: "TikTok Shop US Seller | Content Editor | Graphic Designer",
  email: "ngoc10012004@gmail.com",
  phone: "+84 0349216247",
  behance: "behance.net/ngoctran139",
  location: "Đà Nẵng, Việt Nam",
  about: "Mình là Ngọc, mình có cơ hội được đồng hành và phát triển trong môi trường sáng tạo từ năm 2021. Với mong muốn khai phá giới hạn bản thân bằng những kiến thức và kỹ năng được rèn giũa, và mong muốn sử dụng kỹ năng được đào tạo để làm việc trong môi trường chuyên nghiệp giúp mình thể hiện được hết bản thân. Hiện tại, mình đang tập trung phát triển mạnh mẽ trong lĩnh vực thương mại điện tử với vai trò Seller TikTok Shop US.",
  education: [
    {
      period: "2021 - Hiện tại",
      school: "Cao đẳng FPT Polytechnic Đà Nẵng",
      degree: "Thiết kế đồ họa - Mỹ thuật đa phương tiện (Graphic Design)",
    }
  ],
  experience: [
    {
      period: "02/01/2025 - Hiện tại",
      role: "Seller TikTok Shop US",
      company: "TikTok Shop",
      description: "Vận hành, quản lý cửa hàng trên TikTok Shop thị trường US. Phân tích xu hướng, tối ưu hóa sản phẩm và lên chiến dịch bán hàng.",
      icon: ShoppingBag,
    },
    {
      period: "2021 - Hiện tại",
      role: "Freelancer (Graphic Design & Video Editing)",
      company: "Tự do",
      description: "Nhận các dự án thiết kế online: Social media post, Background, Backdrop Events. Chỉnh sửa video bóng đá (Football Content Editor).",
      icon: Palette,
    }
  ],
  achievements: [
    {
      title: "Doanh thu",
      value: "10000",
      prefix: "$",
      suffix: "+",
      description: "Trên TikTok Shop US trong 3 tháng đầu",
      icon: TrendingUp,
    },
    {
      title: "Người theo dõi",
      value: "50000",
      prefix: "",
      suffix: "+",
      description: "Kênh TikTok thể thao tự xây dựng",
      icon: Store,
    },
    {
      title: "Tỷ lệ chuyển đổi",
      value: "15",
      prefix: "",
      suffix: "%",
      description: "Tỷ lệ chuyển đổi trung bình qua video short",
      icon: LineChart,
    },
    {
      title: "Dự án Thiết kế",
      value: "50",
      prefix: "",
      suffix: "+",
      description: "Dự án Freelance đã hoàn thành",
      icon: FileVideo,
    }
  ],
  skills: [
    { name: "Photoshop (Ps)", category: "Design" },
    { name: "Illustrator (Ai)", category: "Design" },
    { name: "After Effects (Ae)", category: "Video" },
    { name: "Premiere Pro (Pr)", category: "Video" },
    { name: "InDesign (Id)", category: "Design" },
    { name: "CapCut", category: "Video" },
    { name: "Phân tích xu hướng TikTok", category: "Sale" },
    { name: "Vận hành TikTok Shop", category: "Sale" },
    { name: "Sáng tạo nội dung (Content Idea)", category: "Content" }
  ]
};

export const PORTFOLIO_DATA_EN = {
  name: "Tran Hong Ngoc",
  role: "US TikTok Shop Seller | Content Editor | Graphic Designer",
  email: "ngoc10012004@gmail.com",
  phone: "+84 0349216247",
  behance: "behance.net/ngoctran139",
  location: "Da Nang, Vietnam",
  about: "I am Ngoc. I have had the opportunity to accompany and develop in a creative environment since 2021. With a desire to break my limits through honed knowledge and skills, and aiming to use trained abilities in a professional environment to express myself fully. Currently, I am strongly focusing on e-commerce as a US TikTok Shop Seller.",
  education: [
    {
      period: "2021 - Present",
      school: "FPT Polytechnic College Da Nang",
      degree: "Graphic Design - Multimedia",
    }
  ],
  experience: [
    {
      period: "02/01/2025 - Present",
      role: "US TikTok Shop Seller",
      company: "TikTok Shop",
      description: "Operating and managing stores on the US TikTok Shop. Analyzing trends, optimizing products, and planning sales campaigns.",
      icon: ShoppingBag,
    },
    {
      period: "2021 - Present",
      role: "Freelancer (Graphic Design & Video Editing)",
      company: "Freelance",
      description: "Taking online design projects: Social media posts, Backgrounds, Event Backdrops. Football Video Editing (Football Content Editor).",
      icon: Palette,
    }
  ],
  achievements: [
    {
      title: "Revenue",
      value: "10000",
      prefix: "$",
      suffix: "+",
      description: "On US TikTok Shop in the first 3 months",
      icon: TrendingUp,
    },
    {
      title: "Followers",
      value: "50000",
      prefix: "",
      suffix: "+",
      description: "Self-built sports TikTok channel",
      icon: Store,
    },
    {
      title: "Conversion Rate",
      value: "15",
      prefix: "",
      suffix: "%",
      description: "Average conversion rate via shorts",
      icon: LineChart,
    },
    {
      title: "Design Projects",
      value: "50",
      prefix: "",
      suffix: "+",
      description: "Completed freelance projects",
      icon: FileVideo,
    }
  ],
  skills: [
    { name: "Photoshop (Ps)", category: "Design" },
    { name: "Illustrator (Ai)", category: "Design" },
    { name: "After Effects (Ae)", category: "Video" },
    { name: "Premiere Pro (Pr)", category: "Video" },
    { name: "InDesign (Id)", category: "Design" },
    { name: "CapCut", category: "Video" },
    { name: "TikTok Trend Analysis", category: "Sale" },
    { name: "TikTok Shop Operation", category: "Sale" },
    { name: "Content Creation (Idea)", category: "Content" }
  ]
};

export const usePortfolioData = () => {
  const { i18n } = useTranslation();
  return i18n.language && i18n.language.startsWith('vi') ? PORTFOLIO_DATA_VI : PORTFOLIO_DATA_EN;
};

// Keep for backward compatibility where needed, or replace
export const PORTFOLIO_DATA = PORTFOLIO_DATA_VI;
