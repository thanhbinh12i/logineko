"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AdminLayout } from "@/components/admin-layout"
import { RouteGuard } from "@/components/route-guard"
import { 
  Users, 
  ShoppingBag, 
  MessageSquare, 
  TrendingUp, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Star,
  DollarSign,
  Package,
  AlertCircle
} from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "12,543",
    change: "+12%",
    icon: Users,
    color: "bg-blue-500"
  },
  {
    title: "Total Orders",
    value: "3,247",
    change: "+8%",
    icon: ShoppingBag,
    color: "bg-green-500"
  },
  {
    title: "Revenue",
    value: "$45,678",
    change: "+15%",
    icon: DollarSign,
    color: "bg-purple-500"
  },
  {
    title: "Feedback",
    value: "1,234",
    change: "+5%",
    icon: MessageSquare,
    color: "bg-orange-500"
  }
]

const recentOrders = [
  {
    id: "#12345",
    customer: "Sarah Johnson",
    product: "ABC Learning Workbook",
    amount: "$12.99",
    status: "Completed",
    date: "2024-01-15"
  },
  {
    id: "#12346",
    customer: "Mike Chen",
    product: "Premium Subscription",
    amount: "$9.99",
    status: "Processing",
    date: "2024-01-15"
  },
  {
    id: "#12347",
    customer: "Emily Davis",
    product: "Math Fun Worksheets",
    amount: "$8.99",
    status: "Completed",
    date: "2024-01-14"
  },
  {
    id: "#12348",
    customer: "David Wilson",
    product: "Science Explorer Kit",
    amount: "$15.99",
    status: "Pending",
    date: "2024-01-14"
  }
]

const products = [
  {
    id: 1,
    name: "ABC Learning Workbook",
    category: "Workbook",
    price: "$12.99",
    stock: 150,
    sales: 324,
    status: "Active"
  },
  {
    id: 2,
    name: "Math Fun Worksheets Pack",
    category: "Worksheets",
    price: "$8.99",
    stock: 0,
    sales: 189,
    status: "Out of Stock"
  },
  {
    id: 3,
    name: "Premium Subscription",
    category: "Subscription",
    price: "$9.99/month",
    stock: "∞",
    sales: 567,
    status: "Active"
  }
]

const feedback = [
  {
    id: 1,
    user: "Jennifer M.",
    rating: 5,
    comment: "Amazing app! My daughter loves the interactive stories.",
    product: "Premium Subscription",
    date: "2024-01-15",
    status: "Published"
  },
  {
    id: 2,
    user: "Robert K.",
    rating: 4,
    comment: "Great educational content, but could use more math games.",
    product: "Math Fun Worksheets",
    date: "2024-01-14",
    status: "Pending"
  },
  {
    id: 3,
    user: "Lisa T.",
    rating: 5,
    comment: "Perfect for homeschooling. Highly recommended!",
    product: "ABC Learning Workbook",
    date: "2024-01-13",
    status: "Published"
  }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
      case "Active":
      case "Published":
        return "bg-green-100 text-green-800"
      case "Processing":
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Out of Stock":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <RouteGuard requireAdmin={true}>
      <AdminLayout>

      {/* Navigation Tabs */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "📊 Overview" },
              { id: "products", label: "📦 Products" },
              { id: "orders", label: "🛒 Orders" },
              { id: "feedback", label: "💬 Feedback" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 border-b-3 font-semibold text-sm rounded-t-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? "border-purple-500 text-purple-700 bg-white shadow-lg"
                    : "border-transparent text-gray-600 hover:text-purple-600 hover:bg-white/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, Admin! 👋</h1>
                  <p className="text-purple-100 text-lg">Here's what's happening with your LogiNeko platform today.</p>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                const gradients = [
                  'from-blue-500 to-blue-600',
                  'from-green-500 to-green-600', 
                  'from-purple-500 to-purple-600',
                  'from-orange-500 to-orange-600'
                ]
                return (
                  <Card key={stat.title} className="rounded-2xl shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.title}</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2 group-hover:text-purple-600 transition-colors">{stat.value}</p>
                          <div className="flex items-center mt-3">
                            <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded-full">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              <span className="text-xs font-semibold">{stat.change}</span>
                            </div>
                          </div>
                        </div>
                        <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="rounded-2xl shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl border-b border-blue-100">
                  <CardTitle className="flex items-center justify-between text-gray-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-bold">Recent Orders</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <Eye className="w-4 h-4 mr-2" />
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentOrders.slice(0, 4).map((order, index) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                            {order.customer.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{order.customer}</p>
                            <p className="text-sm text-gray-600">{order.product}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-gray-900">{order.amount}</p>
                          <Badge className={`text-xs font-semibold ${getStatusColor(order.status)} rounded-full px-3 py-1`}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-2xl border-b border-purple-100">
                  <CardTitle className="flex items-center justify-between text-gray-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-bold">Recent Feedback</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {feedback.slice(0, 3).map((item, index) => (
                      <div key={item.id} className="p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {item.user.charAt(0)}
                            </div>
                            <p className="font-semibold text-gray-900">{item.user}</p>
                          </div>
                          <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < item.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-3 italic">"${item.comment}"</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs text-purple-600 border-purple-200 bg-purple-50 rounded-full px-3 py-1">{item.product}</Badge>
                          <Badge className={`text-xs font-semibold ${getStatusColor(item.status)} rounded-full px-3 py-1`}>
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">📦 Products Management</h2>
                  <p className="text-green-100">Manage your educational content and subscriptions</p>
                </div>
                <Button className="bg-white text-green-600 hover:bg-gray-50 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </div>
            </div>

            <Card className="rounded-2xl shadow-xl border-0 bg-white">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{product.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge variant="outline" className="rounded-playful">{product.category}</Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900">{product.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={product.stock === 0 ? "text-red-600 font-medium" : "text-gray-900"}>
                              {product.stock}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900">{product.sales}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={`${getStatusColor(product.status)} rounded-playful`}>
                              {product.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="rounded-playful">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="rounded-playful text-red-600 hover:bg-red-50">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">🛒 Orders Management</h2>
                  <p className="text-blue-100">Track and manage customer orders and transactions</p>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-xl backdrop-blur-sm">
                    Export
                  </Button>
                  <Button className="bg-white text-blue-600 hover:bg-gray-50 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Analytics
                  </Button>
                </div>
              </div>
            </div>

            <Card className="rounded-2xl shadow-xl border-0 bg-white">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{order.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900">{order.customer}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900">{order.product}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{order.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">{order.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={`${getStatusColor(order.status)} rounded-playful`}>
                              {order.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="rounded-playful">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="rounded-playful">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Feedback Tab */}
        {activeTab === "feedback" && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">💬 User Feedback</h2>
                  <p className="text-purple-100">Monitor and moderate customer reviews and feedback</p>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-xl backdrop-blur-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Pending ({feedback.filter(f => f.status === 'Pending').length})
                  </Button>
                  <Button className="bg-white text-purple-600 hover:bg-gray-50 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Moderate All
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {feedback.map((item) => (
                <Card key={item.id} className="rounded-2xl shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{item.user.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.user}</p>
                            <p className="text-sm text-gray-500">{item.date}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < item.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-3">{item.comment}</p>
                        
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline" className="rounded-playful">{item.product}</Badge>
                          <Badge className={`${getStatusColor(item.status)} rounded-playful`}>
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 ml-4">
                        {item.status === 'Pending' && (
                          <>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-playful">
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="rounded-playful text-red-600 hover:bg-red-50">
                              Reject
                            </Button>
                          </>
                        )}
                        <Button size="sm" variant="outline" className="rounded-playful">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      </AdminLayout>
    </RouteGuard>
  )
}