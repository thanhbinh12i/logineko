"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { Star, BookOpen, Users, Award, Apple, Smartphone, Play, Heart, Shield, Gamepad2, X } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-secondary text-gray px-4 py-2 rounded-playful">
                  🎉 New Features Available!
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">Learn & Play with</span>
                  <span className="text-gradient"> Neko the Cat! 🐱</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join Neko, your adorable cat companion, on exciting learning adventures! Perfect for children ages 3-8 with interactive stories, fun games, and engaging activities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-gray rounded-playful px-8 py-4 text-lg font-semibold shadow-playful">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-playful px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
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
                  <span>Happy Kids</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-primary rounded-playful p-8 shadow-playful transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-playful p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Online</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">LogiNeko App</h3>
                  <p className="text-gray-600">Interactive learning for ages 3-8</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">🔤</span>
                      </div>
                      <span className="text-xs text-gray-600">ABC</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">🔢</span>
                      </div>
                      <span className="text-xs text-gray-600">123</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">🎨</span>
                      </div>
                      <span className="text-xs text-gray-600">Art</span>
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
            <h2 className="text-4xl font-bold text-gradient">Why Kids Love LogiNeko</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed with child development experts to make learning engaging, safe, and effective
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-playful shadow-playful hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-red-50 to-pink-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-gray" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Neko's Story Time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Join Neko in beautifully illustrated adventures with voice narration to improve reading and listening skills.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="rounded-playful shadow-playful hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="w-8 h-8 text-gray-800" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Play Games with Neko</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Join Neko in fun educational games that teach math, reading, and problem-solving skills through interactive play.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="rounded-playful shadow-playful hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-gray-800" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Neko's Progress Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Watch your child grow with Neko! Detailed progress reports and achievements to celebrate learning milestones.
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
            <h2 className="text-4xl font-bold text-gradient">Download LogiNeko Today</h2>
            <p className="text-xl text-gray-600">
              Available on iOS and Android. Start your child's adventure with Neko now!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-playful px-8 py-4 text-lg font-semibold shadow-playful">
                <Apple className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </Button>
              
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-playful px-8 py-4 text-lg font-semibold shadow-playful">
                <Smartphone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </Button>
            </div>
            
            <p className="text-sm text-gray-500">
              Free to download • Premium features available • Safe for kids
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient">What Parents Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of families worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-playful shadow-playful border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "My 5-year-old daughter loves this app! She's learned so much and actually asks to do her 'homework' now."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Sarah M.</p>
                    <p className="text-sm text-gray-500">Parent of Emma, age 5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-playful shadow-playful border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Perfect for keeping my twins engaged while learning. The progress tracking helps me see their improvement."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Michael R.</p>
                    <p className="text-sm text-gray-500">Parent of twins, age 4</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-playful shadow-playful border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "As a teacher, I recommend this app to all parents. It's educational, safe, and genuinely fun for kids."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Lisa K.</p>
                    <p className="text-sm text-gray-500">Elementary Teacher</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" className="rounded-playful px-8 py-3 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Read More Reviews
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
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="LogiNeko Demo Video"
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
  )
}
