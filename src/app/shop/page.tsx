"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { ShoppingCart, Star, Download, BookOpen, Crown } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

const products = [
  {
    id: 1,
    name: "Neko's ABC Learning Workbook",
    description: "Interactive alphabet workbook featuring Neko with tracing, coloring, and fun activities for ages 3-5.",
    price: "$12.99",
    originalPrice: "$16.99",
    rating: 4.8,
    reviews: 124,
    category: "Workbook",
    age: "3-5 years",
    image: "📚",
    bestseller: true
  },
  {
    id: 2,
    name: "Neko's Math Fun Worksheets Pack",
    description: "50+ printable math worksheets featuring Neko covering counting, addition, and basic geometry.",
    price: "$8.99",
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    category: "Worksheets",
    age: "4-7 years",
    image: "🔢",
    bestseller: false
  },
  {
    id: 3,
    name: "LogiNeko Premium with Neko Plus",
    description: "Unlimited access to all educational content, new Neko adventures monthly, and progress tracking.",
    price: "$9.99/month",
    originalPrice: "$14.99/month",
    rating: 4.9,
    reviews: 256,
    category: "Subscription",
    age: "3-8 years",
    image: "👑",
    bestseller: true
  },
  {
    id: 4,
    name: "Neko's Science Explorer Kit",
    description: "Digital science activities and experiments featuring Neko designed for curious young minds.",
    price: "$15.99",
    originalPrice: null,
    rating: 4.7,
    reviews: 67,
    category: "Digital Kit",
    age: "5-8 years",
    image: "🔬",
    bestseller: false
  },
  {
    id: 5,
    name: "Neko's Creative Art Bundle",
    description: "Drawing templates, coloring pages featuring Neko, and creative activities to spark imagination.",
    price: "$10.99",
    originalPrice: "$13.99",
    rating: 4.6,
    reviews: 98,
    category: "Art Kit",
    age: "3-6 years",
    image: "🎨",
    bestseller: false
  },
  {
    id: 6,
    name: "Neko's Reading Adventures Collection",
    description: "Interactive story books featuring Neko with audio narration and comprehension activities.",
    price: "$18.99",
    originalPrice: "$24.99",
    rating: 4.8,
    reviews: 145,
    category: "Story Books",
    age: "4-8 years",
    image: "📖",
    bestseller: true
  }
]

const categories = [
  { name: "All Products", count: 6, active: true },
  { name: "Workbooks", count: 1, active: false },
  { name: "Worksheets", count: 1, active: false },
  { name: "Subscriptions", count: 1, active: false },
  { name: "Digital Kits", count: 2, active: false }
]

export default function ShopPage() {
  const { addItem } = useCart()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-gradient">Neko&apos;s Learning Treasure Shop 🐱</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover amazing educational materials, worksheets, and resources to enhance your child&apos;s learning adventure with Neko
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
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
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
              <Card key={product.id} className="rounded-playful shadow-playful hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden group">
                <CardHeader className="relative">
                  {product.bestseller && (
                    <Badge className="absolute top-4 right-4 bg-gradient-secondary text-gray-800 px-3 py-1 rounded-playful">
                      🏆 Bestseller
                    </Badge>
                  )}
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-playful flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{product.image}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 text-center">{product.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <Badge variant="outline" className="rounded-playful">{product.category}</Badge>
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
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Button 
                        className="w-full bg-gradient-primary hover:opacity-90 text-white rounded-playful font-semibold shadow-playful"
                        onClick={() => addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image
                        })}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      
                      {product.category === "Worksheets" || product.category === "Digital Kit" ? (
                        <Button variant="outline" className="w-full rounded-playful border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                          <Download className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full rounded-playful border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Learn More
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
              <h2 className="text-4xl font-bold text-gradient">Special Bundle Offers</h2>
              <p className="text-xl text-gray-600">
                Save more when you buy our educational bundles! Perfect for comprehensive learning.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Complete Learning Bundle - Save 30%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Math & Science Combo - Save 25%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Art & Reading Pack - Save 20%</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-secondary hover:opacity-90 text-gray-800 rounded-playful px-8 py-4 text-lg font-semibold shadow-playful">
                <Crown className="w-5 h-5 mr-2" />
                View All Bundles
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-secondary rounded-playful p-8 shadow-playful">
                <div className="bg-white rounded-playful p-6 space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Premium Bundle</h3>
                    <p className="text-gray-600">Everything your child needs</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">All Workbooks</span>
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Premium Subscription</span>
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Digital Kits</span>
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4 border-t">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-primary">$49.99</span>
                      <span className="text-lg text-gray-400 line-through">$89.99</span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">Save $40.00!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Stay Updated with New Products</h2>
            <p className="text-xl text-white/90">
              Get notified about new educational materials and exclusive discounts
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-playful border-0 focus:ring-2 focus:ring-white/50 outline-none"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 rounded-playful px-6 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-white/80">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}