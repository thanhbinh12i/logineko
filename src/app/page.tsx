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
  Star,
  BookOpen,
  Users,
  Award,
  Apple,
  Smartphone,
  Play,
  Heart,
  Shield,
  Gamepad2,
  X,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                  🎉 Tính năng mới đã có sẵn!
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    Learn & Play with
                  </span>
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    {" "}
                    Neko Mèo Con!
                  </span>
                  🐱
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Cùng Neko, người bạn mèo đáng yêu của bé, khám phá những cuộc
                  phiêu lưu học tập thú vị! Hoàn hảo cho trẻ em từ 3-8 tuổi với
                  những câu chuyện tương tác, trò chơi vui nhộn và hoạt động hấp
                  dẫn.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className=" cursor-pointer bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:rotate-1"
                >
                  <Play className="w-5 h-5 mr-2 animate-pulse" />
                  Bắt đầu học ngay hôm nay
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className=" cursor-pointer rounded-full px-8 py-4 text-lg font-semibold border-2 border-pink-500 text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-600 hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300 hover:-rotate-1 hover:shadow-lg"
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Xem video giới thiệu
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span>App Store</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">50K+</span>
                  <span>Bé yêu thích</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-r from-pink-500 to-violet-600 rounded-playful p-2 shadow-xl hover:shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 group-hover:scale-105">
                <div className="bg-white rounded-playful p-6 space-y-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-violet-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800 animate-pulse">
                      Trực tuyến
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 relative z-10 group-hover:text-pink-600 transition-colors duration-300">
                    Ứng dụng LogiNeko
                  </h3>
                  <p className="text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                    Học tập tương tác cho trẻ 3-8 tuổi
                  </p>
                  <div className="grid grid-cols-3 gap-4 relative z-10">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-yellow-200 transition-colors duration-300">
                        <span className="text-xl">🔤</span>
                      </div>
                      <span className="text-xs text-gray-600">Chữ cái</span>
                    </div>
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300 delay-100">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200 transition-colors duration-300">
                        <span className="text-xl">🔢</span>
                      </div>
                      <span className="text-xs text-gray-600">Số học</span>
                    </div>
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300 delay-200">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-green-200 transition-colors duration-300">
                        <span className="text-xl">🎨</span>
                      </div>
                      <span className="text-xs text-gray-600">Nghệ thuật</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Tại sao trẻ em yêu thích LogiNeko
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Được thiết kế cùng các chuyên gia phát triển trẻ em để làm cho
              việc học tập trở nên hấp dẫn, an toàn và hiệu quả
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-pink-50 transform hover:scale-105 hover:-rotate-1 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                  Giờ kể chuyện của Neko
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Cùng Neko trong những cuộc phiêu lưu được minh họa tuyệt đẹp
                  với giọng kể chuyện để cải thiện kỹ năng đọc và nghe.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 transform hover:scale-105 hover:rotate-1 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Chơi game cùng Neko
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Cùng Neko trong những trò chơi giáo dục vui nhộn dạy toán học,
                  đọc viết và kỹ năng giải quyết vấn đề thông qua trò chơi tương
                  tác.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 transform hover:scale-105 hover:-rotate-1 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  Theo dõi tiến độ cùng Neko
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Theo dõi sự phát triển của con bạn cùng Neko! Báo cáo tiến độ
                  chi tiết và thành tích để ăn mừng những cột mốc học tập.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Tải LogiNeko ngay hôm nay
            </h2>
            <p className="text-xl text-gray-600">
              Có sẵn trên iOS và Android. Bắt đầu cuộc phiêu lưu của con bạn
              cùng Neko ngay bây giờ!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                <Apple className="w-6 h-6 mr-3 relative z-10" />
                <div className="text-left relative z-10">
                  <div className="text-xs">Tải xuống trên</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </Button>

              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:-rotate-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                <Smartphone className="w-6 h-6 mr-3 relative z-10" />
                <div className="text-left relative z-10">
                  <div className="text-xs">Tải về trên</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Miễn phí tải xuống • Tính năng cao cấp có sẵn • An toàn cho trẻ em
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Phụ huynh nói gì
            </h2>
            <p className="text-xl text-gray-600">
              Được tin tưởng bởi hàng ngàn gia đình trên toàn thế giới
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl shadow-lg hover:shadow-2xl border-0 transform hover:scale-105 transition-all duration-300 hover:-rotate-1 group cursor-pointer bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  "Con gái 5 tuổi của tôi rất thích ứng dụng này! Con đã học
                  được rất nhiều và thực sự xin phép được làm 'bài tập về nhà'
                  bây giờ."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">H</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      Hương L.
                    </p>
                    <p className="text-sm text-gray-500">
                      Mẹ của bé An, 5 tuổi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-lg hover:shadow-2xl border-0 transform hover:scale-105 transition-all duration-300 hover:rotate-1 group cursor-pointer bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  "Hoàn hảo để giữ hai con sinh đôi của tôi tập trung trong khi
                  học. Tính năng theo dõi tiến độ giúp tôi thấy được sự tiến bộ
                  của các con."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      Minh T.
                    </p>
                    <p className="text-sm text-gray-500">
                      Bố của hai bé sinh đôi, 4 tuổi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-lg hover:shadow-2xl border-0 transform hover:scale-105 transition-all duration-300 hover:-rotate-1 group cursor-pointer bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  "Với tư cách là một giáo viên, tôi giới thiệu ứng dụng này cho
                  tất cả phụ huynh. Nó mang tính giáo dục, an toàn và thực sự
                  vui vẻ cho trẻ em."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                      Linh N.
                    </p>
                    <p className="text-sm text-gray-500">Giáo viên tiểu học</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button className="rounded-full px-8 py-3 text-lg font-semibold border-2 border-pink-500 bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text transform hover:scale-105 transition-all duration-300 cursor-pointer">
                Đọc thêm đánh giá
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-red-50 hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-90 group"
            >
              <X className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video giới thiệu LogiNeko"
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
