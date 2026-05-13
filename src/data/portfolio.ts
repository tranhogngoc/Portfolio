import { Brain, Briefcase, Code, FileVideo, Layout, LineChart, Mail, MapPin, Palette, Phone, ShoppingBag, Store, TrendingUp } from "lucide-react";

export const PORTFOLIO_DATA = {
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
