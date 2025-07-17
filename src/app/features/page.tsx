"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
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
  X
} from "lucide-react"
import Link from "next/link"

const mainFeatures = [
  {
    icon: BookOpen,
    title: "Neko's Story Adventures",
    description: "Join Neko in engaging animated stories with voice narration, interactive elements, and comprehension activities.",
    details: [
      "50+ animated stories",
      "Professional voice narration",
      "Interactive touch elements",
      "Reading comprehension quizzes",
      "Vocabulary building exercises"
    ],
    color: "from-red-400 to-pink-400"
  },
  {
    icon: Gamepad2,
    title: "Play & Learn with Neko",
    description: "Fun mini-games where Neko teaches essential skills while keeping children entertained and engaged.",
    details: [
      "Math puzzles and counting games",
      "Letter recognition activities",
      "Shape and color matching",
      "Memory and logic games",
      "Science exploration activities"
    ],
    color: "from-blue-400 to-cyan-400"
  },
  {
    icon: Award,
    title: "Neko's Progress Journey",
    description: "Watch your child grow with Neko! Comprehensive progress monitoring with detailed reports and achievement systems.",
    details: [
      "Real-time progress tracking",
      "Achievement badges and rewards",
      "Detailed parent reports",
      "Learning milestone tracking",
      "Personalized recommendations"
    ],
    color: "from-yellow-400 to-orange-400"
  },
  {
    icon: Users,
    title: "Parent Dashboard",
    description: "Complete parental control and monitoring system for peace of mind.",
    details: [
      "Child-safe environment",
      "Screen time management",
      "Progress notifications",
      "Content filtering options",
      "Multiple child profiles"
    ],
    color: "from-green-400 to-emerald-400"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "COPPA compliant platform with no ads, no in-app purchases, and complete privacy protection.",
    details: [
      "COPPA compliant",
      "No advertisements",
      "No in-app purchases",
      "Offline mode available",
      "Data privacy protection"
    ],
    color: "from-purple-400 to-indigo-400"
  },
  {
    icon: Smartphone,
    title: "Multi-Platform",
    description: "Available on all devices with seamless synchronization across platforms.",
    details: [
      "iOS and Android apps",
      "Tablet optimized",
      "Cross-device sync",
      "Offline content access",
      "Cloud save progress"
    ],
    color: "from-teal-400 to-blue-400"
  }
]

const learningAreas = [
  {
    icon: Brain,
    title: "Cognitive Development",
    description: "Memory, attention, problem-solving, and critical thinking skills",
    age: "3-8 years",
    activities: 45
  },
  {
    icon: BookOpen,
    title: "Language & Literacy",
    description: "Reading, writing, vocabulary, and communication skills",
    age: "3-8 years",
    activities: 60
  },
  {
    icon: Zap,
    title: "STEM Learning",
    description: "Math, science, technology, and engineering concepts",
    age: "4-8 years",
    activities: 38
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description: "Drawing, coloring, music, and creative expression",
    age: "3-8 years",
    activities: 25
  },
  {
    icon: Heart,
    title: "Social-Emotional",
    description: "Empathy, emotions, social skills, and self-awareness",
    age: "3-8 years",
    activities: 20
  }
]

const testimonials = [
  {
    name: "Dr. Sarah Williams",
    role: "Child Development Expert",
    quote: "LogiNeko perfectly balances education and entertainment. Neko makes learning so engaging for children!",
    rating: 5
  },
  {
    name: "Mark Thompson",
    role: "Elementary School Principal",
    quote: "We recommend LogiNeko to all our parents. Neko makes it an excellent supplement to classroom learning.",
    rating: 5
  },
  {
    name: "Jennifer Chen",
    role: "Homeschool Parent",
    quote: "This app has transformed our homeschool routine. My kids actually look forward to learning time!",
    rating: 5
  }
]

export default function FeaturesPage() {
  const [showVideo, setShowVideo] = useState(false)
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-gradient-secondary text-gray-800 px-6 py-2 rounded-playful text-lg">
              🚀 Comprehensive Learning Platform
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Everything Your Child</span>
              <br />
              <span className="text-gradient">Needs with Neko! 🐱</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover LogiNeko's comprehensive suite of educational features designed by child development experts. 
              Join Neko the cat for fun, safe, and effective learning adventures for children ages 3-8.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-gray rounded-playful px-8 py-4 text-lg font-semibold shadow-playful">
                <Download className="w-5 h-5 mr-2" />
                Try Free Today
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
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient">Powerful Features for Effective Learning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is carefully designed to support your child's development and learning journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={feature.title} className="rounded-playful shadow-playful hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                  <CardHeader className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-playful flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">{feature.title}</CardTitle>
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
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient">Comprehensive Learning Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting all aspects of your child's development with age-appropriate content
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningAreas.map((area) => {
              const IconComponent = area.icon
              return (
                <Card key={area.title} className="rounded-playful shadow-playful hover:shadow-lg transition-shadow border-0 bg-white">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{area.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Age Range:</span>
                      <Badge variant="outline" className="rounded-playful">{area.age}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Activities:</span>
                      <span className="font-semibold text-primary">{area.activities}+</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient">Trusted by Experts</h2>
            <p className="text-xl text-gray-600">
              See what education professionals say about LogiNeko
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="rounded-playful shadow-playful border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Ready to Start Your Child's Adventure with Neko?</h2>
            <p className="text-xl text-white/90">
              Join thousands of families who trust LogiNeko for their children's education
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-playful px-8 py-4 text-lg font-semibold shadow-playful">
                <Download className="w-5 h-5 mr-2" />
                Download Free App
              </Button>
              <Link href="/shop">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-2 border-white rounded-playful px-8 py-4 text-lg font-semibold">
                  Explore Shop
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free to download</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>No ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Safe for kids</span>
              </div>
            </div>
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