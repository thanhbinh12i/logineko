"use client";

import {
  ShoppingCart,
  X,
  BookOpen,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const product = {
    name: "Sách học toán",
    category: "Bộ Học Số",
    price: "299,000",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const newErrors: Partial<typeof formData> = {};

    if (!formData.fullName) newErrors.fullName = "Vui lòng nhập họ tên";
    if (!formData.email) newErrors.email = "Vui lòng nhập email";
    if (!formData.phone) newErrors.phone = "Vui lòng nhập số điện thoại";
    if (!formData.address) newErrors.address = "Vui lòng nhập địa chỉ";
    if (!formData.city) newErrors.city = "Vui lòng nhập thành phố";
    if (!formData.district) newErrors.district = "Vui lòng nhập quận/huyện";
    if (!formData.ward) newErrors.ward = "Vui lòng nhập phường/xã";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Thông tin gửi đi:", formData, product);
      alert("Thanh toán thành công!");
      router.push("/"); // quay lại trang chủ hoặc chuyển hướng khác
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-8 bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Thông Tin Thanh Toán</h2>
              <p className="text-pink-100 mt-1">
                Vui lòng điền đầy đủ thông tin để hoàn tất đơn hàng
              </p>
            </div>
          </div>
          <button
            onClick={() => router.back()}
            className="p-3 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200"
          >
            <X className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-8">
        {/* Product Info */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {product?.name || "Sản phẩm"}
                </h3>
                <p className="text-gray-600 text-lg">
                  {product?.category || "Danh mục"}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-600 text-lg">Tổng tiền</p>
              <p className="text-4xl font-bold text-pink-600">
                {product?.price || "299,000"} VNĐ
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <User className="w-6 h-6 mr-3 text-blue-500" /> Thông tin cá nhân
            </h3>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Họ và tên *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl text-lg focus:outline-none transition-all ${
                  errors.fullName
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
                placeholder="Nhập họ và tên của bạn"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl text-lg focus:outline-none transition-all ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
                placeholder="example@gmail.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Số điện thoại *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl text-lg focus:outline-none transition-all ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
                placeholder="0123456789"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Address Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-blue-500" />
              Địa chỉ giao hàng
            </h3>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Địa chỉ cụ thể *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl text-lg focus:outline-none transition-all ${
                  errors.address
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
                placeholder="Số nhà, tên đường"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-2">{errors.address}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Thành phố *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl text-lg focus:outline-none transition-all ${
                  errors.city
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
                placeholder="Tp. Hồ Chí Minh"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-2">{errors.city}</p>
              )}
            </div>

            {/* District & Ward */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quận/Huyện *
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl text-lg focus:outline-none transition-all ${
                    errors.district
                      ? "border-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                  }`}
                  placeholder="Quận 1"
                />
                {errors.district && (
                  <p className="text-red-500 text-sm mt-2">{errors.district}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phường/Xã *
                </label>
                <input
                  type="text"
                  name="ward"
                  value={formData.ward}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl text-lg focus:outline-none transition-all ${
                    errors.ward
                      ? "border-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                  }`}
                  placeholder="Phường Bến Nghé"
                />
                {errors.ward && (
                  <p className="text-red-500 text-sm mt-2">{errors.ward}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-600">
              Bằng cách thanh toán, bạn đồng ý với
            </p>
            <p className="text-sm text-gray-500">
              Điều khoản sử dụng và Chính sách bảo mật
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => router.back()}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all text-lg"
            >
              Hủy bỏ
            </button>
            <button
              onClick={handleSubmit}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              <CreditCard className="w-6 h-6 inline mr-3" />
              Xác Nhận Thanh Toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
