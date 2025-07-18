"use client";

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
import { ShoppingCart, Star, Download, BookOpen, Crown } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Vở Học Chữ Cái ABC Của Neko",
    description:
      "Vở học chữ cái tương tác với Neko bao gồm tô chữ, tô màu và các hoạt động vui nhộn cho trẻ 3-5 tuổi.",
    price: "325.000₫",
    originalPrice: "425.000₫",
    rating: 4.8,
    reviews: 124,
    category: "Vở Bài Tập",
    age: "3-5 tuổi",
    image: "📚",
    bestseller: true,
  },
  {
    id: 2,
    name: "Bộ Bài Tập Toán Vui Của Neko",
    description:
      "Hơn 50 bài tập toán in được cùng Neko bao gồm đếm số, phép cộng và hình học cơ bản.",
    price: "225.000₫",
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    category: "Bài Tập",
    age: "4-7 tuổi",
    image: "🔢",
    bestseller: false,
  },
  {
    id: 3,
    name: "LogiNeko Premium Với Neko Plus",
    description:
      "Truy cập không giới hạn tất cả nội dung giáo dục, cuộc phiêu lưu Neko mới hàng tháng.",
    price: "250.000₫/tháng",
    originalPrice: "375.000₫/tháng",
    rating: 4.9,
    reviews: 256,
    category: "Gói Đăng Ký",
    age: "3-8 tuổi",
    image: "👑",
    bestseller: true,
  },
  {
    id: 4,
    name: "Bộ Khám Phá Khoa Học Của Neko",
    description:
      "Các hoạt động khoa học số và thí nghiệm cùng Neko được thiết kế cho trẻ em tò mò.",
    price: "400.000₫",
    originalPrice: null,
    rating: 4.7,
    reviews: 67,
    category: "Bộ Học Số",
    age: "5-8 tuổi",
    image: "🔬",
    bestseller: false,
  },
  {
    id: 5,
    name: "Bộ Nghệ Thuật Sáng Tạo Của Neko",
    description:
      "Mẫu vẽ, trang tô màu với Neko và các hoạt động sáng tạo để khơi dậy trí tưởng tượng.",
    price: "275.000₫",
    originalPrice: "350.000₫",
    rating: 4.6,
    reviews: 98,
    category: "Bộ Nghệ Thuật",
    age: "3-6 tuổi",
    image: "🎨",
    bestseller: false,
  },
  {
    id: 6,
    name: "Bộ Sách Của Neko",
    description:
      "Sách truyện tương tác với Neko kèm theo lồng tiếng và các hoạt động hiểu đọc.",
    price: "475.000₫",
    originalPrice: "625.000₫",
    rating: 4.8,
    reviews: 145,
    category: "Sách Truyện",
    age: "4-8 tuổi",
    image: "📖",
    bestseller: true,
  },
];

const categories = [
  { name: "Tất Cả Sản Phẩm", count: 6, active: true },
  { name: "Vở Bài Tập", count: 1, active: false },
  { name: "Bài Tập", count: 1, active: false },
  { name: "Gói Đăng Ký", count: 1, active: false },
  { name: "Bộ Học Số", count: 2, active: false },
];

export default function ShopPage() {
  const { addItem } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Cửa Hàng Kho Báu Học Tập Của Neko 🐱
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá những tài liệu giáo dục tuyệt vời, bài tập và tài nguyên
              để nâng cao cuộc phiêu lưu học tập của con bạn cùng Neko
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`rounded-playful px-6 py-3 font-semibold ${
                  category.active
                    ? "bg-gradient-primary text-black shadow-playful"
                    : "border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="rounded-playful shadow-playful hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden group"
              >
                <CardHeader className="relative">
                  {product.bestseller && (
                    <Badge className="absolute top-4 right-4 bg-gradient-secondary text-gray-800 px-3 py-1 rounded-playful">
                      🏆 Bán Chạy
                    </Badge>
                  )}
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-playful flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{product.image}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 text-center">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <Badge variant="outline" className="rounded-playful">
                      {product.category}
                    </Badge>
                    <span>{product.age}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-center text-gray-600">
                    {product.description}
                  </CardDescription>

                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews} đánh giá)
                    </span>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Link href="/payment">
                        <Button className="cursor-pointer w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-playful font-semibold shadow-playful transition-all duration-300">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Mua ngay
                        </Button>
                      </Link>

                      {product.category === "Bài Tập" ||
                      product.category === "Bộ Học Số" ? (
                        <Button
                          variant="outline"
                          className="cursor-pointer w-full rounded-playful border-2 border-secondary text-secondary hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Xem Trước
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full rounded-playful border-2 border-secondary text-secondary hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent"
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          Tìm Hiểu Thêm
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Ưu Đãi Combo Đặc Biệt
              </h2>
              <p className="text-xl text-gray-600">
                Tiết kiệm nhiều hơn khi mua combo giáo dục của chúng tôi! Hoàn
                hảo cho việc học tập toàn diện.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Combo Học Tập Toàn Diện - Tiết Kiệm 30%
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Combo Toán & Khoa Học - Tiết Kiệm 25%
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Gói Nghệ Thuật & Đọc Sách - Tiết Kiệm 20%
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-secondary hover:opacity-90 text-gray-800 rounded-playful px-8 py-4 text-lg font-semibold shadow-playful"
              >
                <Crown className="w-5 h-5 mr-2" />
                Xem Tất Cả Combo
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-secondary rounded-playful p-8 shadow-playful">
                <div className="bg-white rounded-playful p-6 space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Combo Premium
                    </h3>
                    <p className="text-gray-600">Mọi thứ con bạn cần</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tất Cả Vở Bài Tập</span>
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Gói Đăng Ký Premium</span>
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Bộ Học Số</span>
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-primary">
                        1.199.000đ
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        1.999.000đ
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">
                      Tiết kiệm 800.000đ!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Cập Nhật Sản Phẩm Mới
            </h2>
            <p className="text-xl text-white/90">
              Nhận thông báo về tài liệu giáo dục mới và ưu đãi độc quyền
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-300/50 outline-none shadow-lg bg-white text-gray-800 placeholder-gray-500"
              />
              <Button className="cursor-pointer bg-white text-purple-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white rounded-playful px-6 py-6 font-semibold shadow-lg transition-all duration-300">
                Đăng Ký
              </Button>
            </div>

            <p className="text-sm text-white/80">
              Không spam, hủy đăng ký bất cứ lúc nào. Chúng tôi tôn trọng quyền
              riêng tư của bạn.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
