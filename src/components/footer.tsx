import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🐱</span>
              </div>
              <span className="text-2xl font-bold">LogiNeko</span>
            </div>
            <p className="text-gray-400">
              Biến việc học trở nên vui nhộn và dễ tiếp cận cho trẻ từ 5–10 tuổi
              trên toàn thế giới cùng mèo Neko.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sản phẩm</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/features"
                  className="hover:text-white transition-colors"
                >
                  Tính năng
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Giá cả
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-white transition-colors"
                >
                  Đánh giá
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Cửa hàng</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/shop"
                  className="hover:text-white transition-colors"
                >
                  Tài liệu học tập
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-white transition-colors"
                >
                  Phiếu bài tập
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-white transition-colors"
                >
                  Gói đăng ký
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors"
                >
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 LogiNeko. Đã đăng ký bản quyền. Tạo nên bằng ❤️ dành
            tặng cho các bé khắp nơi.
          </p>
        </div>
      </div>
    </footer>
  );
}
