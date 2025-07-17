"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import {
  BookOpen,
  Gamepad2,
  Award,
  Users,
  Shield,
  Smartphone,
  Download,
  Play,
  Star,
  CheckCircle,
  Zap,
  Heart,
  Brain,
  Target,
  Clock,
  Palette,
  X,
} from "lucide-react";
import Link from "next/link";

const mainFeatures = [
  {
    icon: BookOpen,
    title: "Truyện Tương Tác Cùng Neko",
    description:
      "Tham gia những câu chuyện hoạt hình sống động với giọng đọc và hoạt động tương tác hấp dẫn.",
    details: [
      "Hơn 50 câu chuyện hoạt hình",
      "Lồng tiếng chuyên nghiệp",
      "Tương tác cảm ứng thông minh",
      "Câu hỏi hiểu nội dung",
      "Luyện từ vựng phong phú",
    ],
    color: "from-red-400 to-pink-400",
  },
  {
    icon: Gamepad2,
    title: "Vừa Chơi Vừa Học Với Neko",
    description:
      "Mini game vui nhộn giúp bé học kiến thức cơ bản mà vẫn thích thú mỗi ngày.",
    details: [
      "Trò chơi toán học & đếm số",
      "Nhận biết chữ cái",
      "Phân biệt hình dạng & màu sắc",
      "Trò chơi trí nhớ & logic",
      "Khám phá khoa học",
    ],
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Award,
    title: "Theo Dõi Tiến Trình Học Tập",
    description:
      "Theo dõi sự phát triển của bé với hệ thống báo cáo và thành tích trực quan.",
    details: [
      "Theo dõi tiến trình theo thời gian thực",
      "Huy hiệu & phần thưởng hấp dẫn",
      "Báo cáo chi tiết cho phụ huynh",
      "Theo dõi cột mốc học tập",
      "Gợi ý bài học cá nhân hóa",
    ],
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: Users,
    title: "Bảng Điều Khiển Cho Phụ Huynh",
    description:
      "Công cụ kiểm soát và theo dõi toàn diện, an tâm tuyệt đối cho ba mẹ.",
    details: [
      "Môi trường an toàn cho trẻ",
      "Quản lý thời gian sử dụng",
      "Thông báo tiến độ học tập",
      "Lọc nội dung theo độ tuổi",
      "Hỗ trợ nhiều hồ sơ con",
    ],
    color: "from-green-400 to-emerald-400",
  },
  {
    icon: Shield,
    title: "An Toàn & Bảo Mật",
    description:
      "Tuân thủ COPPA, không quảng cáo, không mua hàng trong ứng dụng, bảo mật tuyệt đối.",
    details: [
      "Tuân thủ COPPA",
      "Không quảng cáo",
      "Không mua hàng trong app",
      "Chế độ offline có sẵn",
      "Bảo vệ dữ liệu cá nhân",
    ],
    color: "from-purple-400 to-indigo-400",
  },
  {
    icon: Smartphone,
    title: "Tương Thích Đa Thiết Bị",
    description: "Trải nghiệm liền mạch trên mọi thiết bị, mọi nơi mọi lúc.",
    details: [
      "Hỗ trợ iOS & Android",
      "Tối ưu cho máy tính bảng",
      "Đồng bộ đa nền tảng",
      "Truy cập nội dung offline",
      "Lưu tiến trình trên đám mây",
    ],
    color: "from-teal-400 to-blue-400",
  },
];

const learningAreas = [
  {
    icon: Brain,
    title: "Phát Triển Tư Duy",
    description: "Trí nhớ, chú ý, giải quyết vấn đề và tư duy phản biện",
    age: "3-8 tuổi",
    activities: 45,
  },
  {
    icon: BookOpen,
    title: "Ngôn Ngữ & Tập Đọc Viết",
    description: "Đọc hiểu, viết chữ, học từ vựng và giao tiếp",
    age: "3-8 tuổi",
    activities: 60,
  },
  {
    icon: Zap,
    title: "Kiến Thức STEM",
    description: "Toán học, khoa học, công nghệ và kỹ thuật",
    age: "4-8 tuổi",
    activities: 38,
  },
  {
    icon: Palette,
    title: "Nghệ Thuật Sáng Tạo",
    description: "Vẽ tranh, tô màu, âm nhạc và biểu đạt sáng tạo",
    age: "3-8 tuổi",
    activities: 25,
  },
  {
    icon: Heart,
    title: "Kỹ Năng Xã Hội & Cảm Xúc",
    description: "Đồng cảm, hiểu cảm xúc, kỹ năng xã hội và nhận thức bản thân",
    age: "3-8 tuổi",
    activities: 20,
  },
];

const testimonials = [
  {
    name: "TS. Sarah Williams",
    role: "Chuyên Gia Phát Triển Trẻ Em",
    quote:
      "LogiNeko cân bằng hoàn hảo giữa giáo dục và giải trí. Trẻ em học mà không cảm thấy bị ép buộc!",
    rating: 5,
  },
  {
    name: "Hiệu Trưởng Mark Thompson",
    role: "Trường Tiểu Học Hope Hill",
    quote:
      "Chúng tôi luôn giới thiệu LogiNeko đến các bậc phụ huynh. Một công cụ hỗ trợ học tập tuyệt vời!",
    rating: 5,
  },
  {
    name: "Phụ huynh Jennifer Chen",
    role: "Giáo dục tại nhà",
    quote:
      "Ứng dụng này đã thay đổi hoàn toàn lịch học ở nhà và trên trường. Các con tôi mong đợi giờ học mỗi ngày!",
    rating: 5,
  },
];

export default function FeaturesPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="text-center space-y-2">
            <Badge className="bg-gradient-secondary text-gray-800 px-6 py-2 rounded-playful text-lg">
              🚀 Nền Tảng Học Tập Toàn Diện
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Mọi Thứ Con Bạn
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Cần Cùng Neko! 🐱
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Khám phá bộ tính năng giáo dục toàn diện của LogiNeko được thiết
              kế bởi các chuyên gia phát triển trẻ em. Cùng Neko - chú mèo đáng
              yêu trong những cuộc phiêu lưu học tập vui vẻ, an toàn và hiệu quả
              dành cho trẻ em từ 3-8 tuổi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className=" cursor-pointer bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:rotate-1"
              >
                <Download className="w-5 h-5 mr-2" />
                Dùng Thử Miễn Phí Ngay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className=" cursor-pointer rounded-full px-8 py-4 text-lg font-semibold border-2 border-pink-500 text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-600 hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300 hover:-rotate-1 hover:shadow-lg"
                onClick={() => setShowVideo(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                Xem Video Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Tính Năng Mạnh Mẽ Cho Việc Học Hiệu Quả
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mỗi tính năng đều được thiết kế cẩn thận để hỗ trợ sự phát triển
              và hành trình học tập của con bạn
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="rounded-playful shadow-playful hover:shadow-lg transition-all duration-300 border-0 overflow-hidden"
                >
                  <CardHeader className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-playful flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Các Lĩnh Vực Học Tập Toàn Diện
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hỗ trợ mọi khía cạnh phát triển của con bạn với nội dung phù hợp
              với lứa tuổi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <Card
                  key={area.title}
                  className="rounded-playful shadow-playful hover:shadow-lg transition-shadow border-0 bg-white"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Độ tuổi:</span>
                      <Badge variant="outline" className="rounded-playful">
                        {area.age}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Hoạt động:</span>
                      <span className="font-semibold text-primary">
                        {area.activities}+
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Được Các Chuyên Gia Tin Cậy
            </h2>
            <p className="text-xl text-gray-600">
              Xem các chuyên gia giáo dục nói gì về LogiNeko
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="rounded-playful shadow-playful border-0"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Sẵn Sàng Cho Hành Trình Học Tập Cùng Neko Chưa?
            </h2>
            <p className="text-xl text-white/90">
              Hàng ngàn gia đình đã tin tưởng LogiNeko để đồng hành cùng con
              trong giáo dục.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 rounded-playful px-8 py-4 text-lg font-semibold shadow-playful"
              >
                <Download className="w-5 h-5 mr-2" />
                Tải Ứng Dụng Miễn Phí
              </Button>
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 border-2 border-white rounded-playful px-8 py-4 text-lg font-semibold"
                >
                  Khám Phá Cửa Hàng
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Tải miễn phí</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Không quảng cáo</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>An toàn cho trẻ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Demo LogiNeko"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
