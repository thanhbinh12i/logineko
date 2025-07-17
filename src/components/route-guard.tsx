"use client"

import { useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"

interface RouteGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  requireAdmin?: boolean
  redirectTo?: string
}

export function RouteGuard({ 
  children, 
  requireAuth = false, 
  requireAdmin = false, 
  redirectTo = '/login' 
}: RouteGuardProps) {
  const { state } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (state.isLoading) return

    if (requireAuth && !state.isAuthenticated) {
      router.push(redirectTo)
      return
    }

    if (requireAdmin && (!state.isAuthenticated || state.user?.role !== 'admin')) {
      router.push('/login')
      return
    }
  }, [state.isLoading, state.isAuthenticated, state.user?.role, requireAuth, requireAdmin, redirectTo, router])

  if (state.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (requireAuth && !state.isAuthenticated) {
    return null
  }

  if (requireAdmin && (!state.isAuthenticated || state.user?.role !== 'admin')) {
    return null
  }

  return <>{children}</>
}