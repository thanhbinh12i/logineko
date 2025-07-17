"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert(
        "🐱 Neko nói: Cảm ơn bạn đã mua hàng! Tài liệu học tập sẽ có sẵn sớm thôi!"
      );
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-16 h-16 text-white" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Giỏ Hàng Của Bạn Đang Trống
              </h1>
              <p className="text-xl text-gray-600">
                🐱 Neko đang chờ bạn thêm một số tài liệu học tập tuyệt vời!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-white rounded-playful px-8 py-4 text-lg font-semibold shadow-playful"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Bắt Đầu Mua Sắm Cùng Neko
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-playful px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Quay Về Trang Chủ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            🐱 Giỏ Hàng Của Neko
          </h1>
          <p className="text-xl text-gray-600">
            Xem lại những kho báu học tập trước khi thanh toán
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="rounded-playful shadow-playful border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">
                    Sản Phẩm Trong Giỏ ({state.itemCount})
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                    className="text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Xóa Tất Cả
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 bg-white rounded-playful border border-gray-100"
                  >
                    <div className="w-16 h-16 bg-gradient-secondary rounded-playful flex items-center justify-center text-2xl">
                      {item.image}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-primary font-bold">{item.price}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(0, item.quantity - 1)
                          )
                        }
                        className="w-8 h-8 p-0 rounded-full"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>

                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 p-0 rounded-full"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="rounded-playful shadow-playful border-0 sticky top-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Tóm Tắt Đơn Hàng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Tạm tính ({state.itemCount} sản phẩm)
                    </span>
                    <span className="font-semibold">
                      ${state.total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vận chuyển</span>
                    <span className="font-semibold text-green-600">
                      Miễn phí
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thuế</span>
                    <span className="font-semibold">
                      ${(state.total * 0.08).toFixed(2)}
                    </span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Tổng cộng</span>
                    <span className="font-bold text-primary">
                      ${(state.total * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-primary hover:opacity-90 text-white rounded-playful py-3 text-lg font-semibold shadow-playful"
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                  >
                    {isCheckingOut ? (
                      <span className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Đang xử lý...
                      </span>
                    ) : (
                      "🐱 Thanh Toán Cùng Neko"
                    )}
                  </Button>

                  <Link href="/shop">
                    <Button
                      variant="outline"
                      className="w-full rounded-playful py-3 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Tiếp Tục Mua Sắm
                    </Button>
                  </Link>
                </div>

                <div className="bg-green-50 p-4 rounded-playful">
                  <div className="flex items-center space-x-2 text-green-800">
                    <Badge className="bg-green-100 text-green-800">
                      🐱 Lời Hứa Của Neko
                    </Badge>
                  </div>
                  <p className="text-sm text-green-700 mt-2">
                    Miễn phí vận chuyển cho tất cả đơn hàng! Neko đảm bảo thanh
                    toán an toàn và bảo mật.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
