"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, ShoppingCart, User, LogOut, Settings } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useAuth } from "@/contexts/AuthContext"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { state } = useCart()
  const { state: authState, logout } = useAuth()
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🐱</span>
            </div>
            <span className="text-2xl font-bold text-gradient">LogiNeko</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Features
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Shop
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Reviews
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-primary transition-colors font-medium">
              <User className="w-4 h-4" />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* User Menu */}
             {authState.isAuthenticated ? (
               <div className="relative" ref={userMenuRef}>
                 <button
                   onClick={() => setUserMenuOpen(!userMenuOpen)}
                   className="flex items-center space-x-2 p-2 text-gray-600 hover:text-pink-600 transition-colors"
                 >
                   <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                     <span className="text-gray-800 font-semibold text-sm">
                       {authState.user?.name?.charAt(0).toUpperCase()}
                     </span>
                   </div>
                 </button>
                 
                 {userMenuOpen && (
                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                     <div className="px-4 py-2 border-b border-gray-100">
                       <p className="text-sm font-medium text-gray-900">{authState.user?.name}</p>
                       <p className="text-xs text-gray-500">{authState.user?.email}</p>
                     </div>
                     
                     {authState.user?.role === 'admin' && (
                       <Link
                         href="/admin"
                         className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                         onClick={() => setUserMenuOpen(false)}
                       >
                         <Settings className="w-4 h-4 mr-2" />
                         Admin Dashboard
                       </Link>
                     )}
                     
                     <button
                       onClick={() => {
                         logout()
                         setUserMenuOpen(false)
                       }}
                       className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                     >
                       <LogOut className="w-4 h-4 mr-2" />
                       Sign Out
                     </button>
                   </div>
                 )}
               </div>
             ) : (
               <Link
                 href="/login"
                 className="flex items-center space-x-2 p-2 text-gray-600 hover:text-pink-600 transition-colors"
               >
                 <User className="w-5 h-5" />
                 <span className="hidden sm:inline">Sign In</span>
               </Link>
             )}
            
            <Button className="bg-gradient-primary hover:opacity-90 text-black rounded-playful px-6 py-2 font-semibold shadow-playful">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/features"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/admin"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
              <div className="pt-2">
                <div className="flex items-center justify-between w-full mb-2">
                  <Link href="/cart">
                    <Button variant="ghost" size="sm" className="relative">
                      <ShoppingCart className="w-5 h-5" />
                      {state.itemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {state.itemCount}
                        </span>
                      )}
                    </Button>
                  </Link>
                </div>
                
                {/* Mobile User Section */}
                {authState.isAuthenticated ? (
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex items-center mb-3">
                       <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                         <span className="text-gray-800 font-semibold text-sm">
                           {authState.user?.name?.charAt(0).toUpperCase()}
                         </span>
                       </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-800">{authState.user?.name}</div>
                        <div className="text-xs text-gray-500">{authState.user?.email}</div>
                      </div>
                    </div>
                    
                    {authState.user?.role === 'admin' && (
                      <Link
                        href="/admin"
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded mb-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <Settings className="w-4 h-4 mr-2 inline" />
                        Admin Dashboard
                      </Link>
                    )}
                    
                    <button
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
                    >
                      <LogOut className="w-4 h-4 mr-2 inline" />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="border-t border-gray-200 pt-4 mb-4 space-y-2">
                    <Link
                      href="/login"
                      className="block w-full text-center bg-gradient-primary hover:opacity-90 text-black rounded-playful px-4 py-2 font-semibold shadow-playful"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/register"
                      className="block w-full text-center border border-gray-300 text-gray-700 rounded-playful px-4 py-2 font-semibold hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-black rounded-playful font-semibold">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}