"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Heart,
  BookOpen,
  Gamepad2,
  Shield,
  Clock,
  Users,
  Brain,
  Palette,
  Award,
  Send,
  User,
  Calendar,
  MessageCircle,
  ThumbsUp,
  Sparkles,
  LucideIcon,
} from "lucide-react";

// Type definitions
interface RatingCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface Ratings {
  [key: string]: number;
}

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  size?: string;
}

type AgeGroup = "3-5 tuổi" | "6-10 tuổi";
type UsageDuration =
  | "Dưới 1 tuần"
  | "1-2 tuần"
  | "1 tháng"
  | "2-3 tháng"
  | "Hơn 3 tháng";

// Constants
const ratingCategories: RatingCategory[] = [
  {
    id: "content",
    title: "Chất Lượng Nội Dung",
    description: "Tính phù hợp và chất lượng của các bài học",
    icon: BookOpen,
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: "engagement",
    title: "Tính Tương Tác",
    description: "Khả năng thu hút và giữ chú ý của con",
    icon: Gamepad2,
    color: "from-green-400 to-emerald-400",
  },
  {
    id: "educational",
    title: "Giá Trị Giáo Dục",
    description: "Hiệu quả học tập và phát triển kỹ năng",
    icon: Brain,
    color: "from-purple-400 to-indigo-400",
  },
  {
    id: "safety",
    title: "An Toàn & Bảo Mật",
    description: "Môi trường học tập an toàn cho trẻ",
    icon: Shield,
    color: "from-red-400 to-pink-400",
  },
  {
    id: "design",
    title: "Thiết Kế & Giao Diện",
    description: "Tính thân thiện và dễ sử dụng",
    icon: Palette,
    color: "from-yellow-400 to-orange-400",
  },
  {
    id: "progress",
    title: "Theo Dõi Tiến Trình",
    description: "Khả năng theo dõi sự phát triển của con",
    icon: Award,
    color: "from-teal-400 to-blue-400",
  },
];

const usageDurations: UsageDuration[] = [
  "Dưới 1 tuần",
  "1-2 tuần",
  "1 tháng",
  "2-3 tháng",
  "Hơn 3 tháng",
];

const ageGroups: AgeGroup[] = ["3-5 tuổi", "6-10 tuổi"];

export default function FeedbackPage() {
  const [ratings, setRatings] = useState<Ratings>({});
  const [overallRating, setOverallRating] = useState<number>(0);
  const [childAge, setChildAge] = useState<string>("");
  const [usageDuration, setUsageDuration] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string>("");
  const [favoriteFeatures, setFavoriteFeatures] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleRatingChange = (categoryId: string, rating: number): void => {
    setRatings((prev) => ({
      ...prev,
      [categoryId]: rating,
    }));
  };

  const handleSubmit = (): void => {
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      alert(
        "🐱 Cảm ơn bạn đã chia sẻ! Phản hồi của bạn sẽ giúp Neko cải thiện app tốt hơn!"
      );
      setIsSubmitting(false);

      // Reset form
      setRatings({});
      setOverallRating(0);
      setChildAge("");
      setUsageDuration("");
      setComments("");
      setSuggestions("");
      setFavoriteFeatures("");
    }, 2000);
  };

  const handleChildAgeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setChildAge(e.target.value);
  };

  const handleUsageDurationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setUsageDuration(e.target.value);
  };

  const handleCommentsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setComments(e.target.value);
  };

  const handleSuggestionsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setSuggestions(e.target.value);
  };

  const handleFavoriteFeaturesChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFavoriteFeatures(e.target.value);
  };

  // Star Rating Component
  const StarRating: React.FC<StarRatingProps> = ({
    rating,
    onRatingChange,
    size = "w-8 h-8",
  }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star: number) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`${size} transition-all duration-200 hover:scale-110`}
          >
            <Star
              className={`w-full h-full ${
                star <= rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300 hover:text-yellow-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  // Calculate average rating
  const averageRating: number =
    Object.values(ratings).length > 0
      ? Object.values(ratings).reduce((a: number, b: number) => a + b, 0) /
        Object.values(ratings).length
      : 0;

  // Form validation
  const isFormValid: boolean = !!(
    childAge &&
    usageDuration &&
    overallRating > 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Đánh Giá LogiNeko 🐱
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chia sẻ trải nghiệm của bạn để giúp Neko cải thiện app và mang đến
              trải nghiệm học tập tốt hơn cho các bé
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Thông tin bảo mật</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>5 phút hoàn thành</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Child Information */}
        <Card className="rounded-playful shadow-playful border-0 bg-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
              <User className="w-6 h-6 mr-3 text-pink-500" />
              Thông Tin Về Con Bạn
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Độ tuổi của con
                </label>
                <select
                  value={childAge}
                  onChange={handleChildAgeChange}
                  className="w-full p-3 border border-gray-300 rounded-playful focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                >
                  <option value="">Chọn độ tuổi</option>
                  {ageGroups.map((age: AgeGroup) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thời gian sử dụng app
                </label>
                <select
                  value={usageDuration}
                  onChange={handleUsageDurationChange}
                  className="w-full p-3 border border-gray-300 rounded-playful focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                >
                  <option value="">Chọn thời gian</option>
                  {usageDurations.map((duration: UsageDuration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rating Categories */}
        <Card className="rounded-playful shadow-playful border-0 bg-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
              <Star className="w-6 h-6 mr-3 text-yellow-500" />
              Đánh Giá Chi Tiết
            </CardTitle>
            <p className="text-gray-600">
              Hãy đánh giá từng khía cạnh của LogiNeko
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {ratingCategories.map((category: RatingCategory) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="p-4 bg-gray-50 rounded-playful"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <StarRating
                          rating={ratings[category.id] || 0}
                          onRatingChange={(rating: number) =>
                            handleRatingChange(category.id, rating)
                          }
                        />
                        <span className="text-sm text-gray-500">
                          {ratings[category.id]
                            ? `${ratings[category.id]}/5 sao`
                            : "Chưa đánh giá"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Overall Rating */}
        <Card className="rounded-playful shadow-playful border-0 bg-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
              <ThumbsUp className="w-6 h-6 mr-3 text-green-500" />
              Đánh Giá Tổng Thể
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Bạn đánh giá LogiNeko bao nhiêu sao?
            </p>
            <div className="flex justify-center">
              <StarRating
                rating={overallRating}
                onRatingChange={setOverallRating}
                size="w-12 h-12"
              />
            </div>
            <div className="flex justify-center space-x-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">
                  {averageRating.toFixed(1)}
                </div>
                <div className="text-gray-500">Điểm trung bình</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">
                  {overallRating || 0}
                </div>
                <div className="text-gray-500">Đánh giá tổng thể</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments and Feedback */}
        <Card className="rounded-playful shadow-playful border-0 bg-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
              <MessageCircle className="w-6 h-6 mr-3 text-blue-500" />
              Chia Sẻ Trải Nghiệm
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tính năng yêu thích nhất của con bạn
              </label>
              <textarea
                value={favoriteFeatures}
                onChange={handleFavoriteFeaturesChange}
                placeholder="Ví dụ: Con thích truyện tương tác với Neko, mini game toán học..."
                className="w-full p-3 border border-gray-300 rounded-playful focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nhận xét chi tiết về app
              </label>
              <textarea
                value={comments}
                onChange={handleCommentsChange}
                placeholder="Chia sẻ trải nghiệm cụ thể về việc con sử dụng app..."
                className="w-full p-3 border border-gray-300 rounded-playful focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Đề xuất cải thiện
              </label>
              <textarea
                value={suggestions}
                onChange={handleSuggestionsChange}
                placeholder="Bạn muốn LogiNeko bổ sung thêm tính năng gì?"
                className="w-full p-3 border border-gray-300 rounded-playful focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !isFormValid}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-playful px-12 py-4 text-lg font-semibold shadow-playful transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Đang gửi...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="w-5 h-5 mr-2" />
                Gửi Đánh Giá
              </span>
            )}
          </Button>

          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-pink-500" />
              <span>Cảm ơn bạn đã chia sẻ</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>Giúp Neko cải thiện</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
