"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Wallet,
  Shield,
  QrCode,
  History,
  Settings,
  Plus,
  CheckCircle,
  Clock,
  Eye,
  EyeOff,
  Smartphone,
  Download,
  Share,
  Lock
} from "lucide-react"

export default function UserApp() {
  const [showSensitiveData, setShowSensitiveData] = useState(false)
  const [selectedCredential, setSelectedCredential] = useState(null)

  const userProfile = {
    name: "Rajesh Sharma",
    id: "user_np_" + Math.random().toString(36).substr(2, 9),
    joinDate: "November 2024",
    verificationsCount: 23,
    credentialsCount: 4
  }

  const credentials = [
    {
      id: "cred_001",
      type: "Government ID",
      issuer: "Ministry of Home Affairs",
      issuedDate: "2024-03-15",
      status: "active",
      claims: ["Full Name", "Date of Birth", "Citizenship Number", "Address"],
      icon: "🏛️",
      color: "bg-blue-100 text-blue-700"
    },
    {
      id: "cred_002",
      type: "University Degree",
      issuer: "Tribhuvan University",
      issuedDate: "2024-06-20",
      status: "active",
      claims: ["Degree Type", "Major", "Graduation Date", "GPA"],
      icon: "🎓",
      color: "bg-green-100 text-green-700"
    },
    {
      id: "cred_003",
      type: "Bank Account",
      issuer: "Nepal Bank Ltd",
      issuedDate: "2024-11-10",
      status: "active",
      claims: ["Account Holder", "Account Type", "Opening Date", "Credit Score"],
      icon: "🏦",
      color: "bg-purple-100 text-purple-700"
    },
    {
      id: "cred_004",
      type: "Employment",
      issuer: "Tech Solutions Pvt Ltd",
      issuedDate: "2024-08-01",
      status: "active",
      claims: ["Job Title", "Department", "Start Date", "Salary Range"],
      icon: "💼",
      color: "bg-orange-100 text-orange-700"
    }
  ]

  const recentVerifications = [
    {
      id: "ver_001",
      type: "Age Verification",
      verifier: "Digital Bank App",
      date: "2025-01-01",
      status: "success",
      claimsShared: ["Over 18"]
    },
    {
      id: "ver_002",
      type: "Education Check",
      verifier: "Job Portal",
      date: "2024-12-28",
      status: "success",
      claimsShared: ["University Degree"]
    },
    {
      id: "ver_003",
      type: "Identity Proof",
      verifier: "Insurance Company",
      date: "2024-12-25",
      status: "success",
      claimsShared: ["Nepali Citizen", "Kathmandu Resident"]
    },
    {
      id: "ver_004",
      type: "Income Verification",
      verifier: "Loan Application",
      date: "2024-12-20",
      status: "pending",
      claimsShared: ["Income Range"]
    }
  ]

  const quickActions = [
    {
      title: "Generate QR Proof",
      description: "Create a proof for in-person verification",
      icon: <QrCode className="h-5 w-5" />,
      action: "qr"
    },
    {
      title: "Share Verification",
      description: "Send proof link to verifier",
      icon: <Share className="h-5 w-5" />,
      action: "share"
    },
    {
      title: "Add Credential",
      description: "Request new credential from issuer",
      icon: <Plus className="h-5 w-5" />,
      action: "add"
    },
    {
      title: "Backup Wallet",
      description: "Secure backup of your credentials",
      icon: <Download className="h-5 w-5" />,
      action: "backup"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile App Container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-white text-emerald-600">RS</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">{userProfile.name}</h2>
                <p className="text-emerald-100 text-sm">Verified since {userProfile.joinDate}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Settings className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-emerald-100 text-sm">Credentials</p>
              <p className="text-xl font-bold">{userProfile.credentialsCount}</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-emerald-100 text-sm">Verifications</p>
              <p className="text-xl font-bold">{userProfile.verificationsCount}</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <Tabs defaultValue="wallet" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 m-4 mb-0">
            <TabsTrigger value="wallet" className="text-xs">
              <Wallet className="h-4 w-4 mr-1" /> Wallet
            </TabsTrigger>
            <TabsTrigger value="history" className="text-xs">
              <History className="h-4 w-4 mr-1" /> History
            </TabsTrigger>
            <TabsTrigger value="verify" className="text-xs">
              <Shield className="h-4 w-4 mr-1" /> Verify
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wallet" className="p-4 space-y-4">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 text-emerald-600">
                      {action.icon}
                    </div>
                    <h3 className="font-medium text-sm">{action.title}</h3>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Credentials */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">My Credentials</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowSensitiveData(!showSensitiveData)}>
                  {showSensitiveData ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>

              <div className="space-y-3">
                {credentials.map((credential) => (
                  <Dialog key={credential.id}>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${credential.color}`}>
                                {credential.icon}
                              </div>
                              <div>
                                <h4 className="font-medium">{credential.type}</h4>
                                <p className="text-sm text-muted-foreground">{credential.issuer}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge variant="default" className="mb-1">Active</Badge>
                              <p className="text-xs text-muted-foreground">{credential.issuedDate}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <span className="text-lg">{credential.icon}</span>
                          <span>{credential.type}</span>
                        </DialogTitle>
                        <DialogDescription>
                          Issued by {credential.issuer} on {credential.issuedDate}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Available Claims:</h4>
                          <div className="space-y-2">
                            {credential.claims.map((claim, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                <span className="text-sm">{claim}</span>
                                <Lock className="h-3 w-3 text-muted-foreground" />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button className="flex-1">Create Proof</Button>
                          <Button variant="outline" className="flex-1">Share QR</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="p-4 space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Recent Verifications</h3>
              <div className="space-y-3">
                {recentVerifications.map((verification) => (
                  <Card key={verification.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            verification.status === 'success' ? 'bg-emerald-500' :
                            verification.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                          }`} />
                          <div>
                            <h4 className="font-medium text-sm">{verification.type}</h4>
                            <p className="text-xs text-muted-foreground">{verification.verifier}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={verification.status === 'success' ? 'default' : 'secondary'}
                            className="mb-1"
                          >
                            {verification.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground">{verification.date}</p>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t">
                        <p className="text-xs text-muted-foreground">
                          <strong>Shared:</strong> {verification.claimsShared.join(", ")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="verify" className="p-4 space-y-4">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <QrCode className="h-10 w-10 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Quick Verification</h3>
                <p className="text-muted-foreground text-sm">
                  Generate a QR code for instant verification or share a verification link
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <QrCode className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-medium">Age Verification</h4>
                  <p className="text-sm text-muted-foreground">Prove you're over 18</p>
                  <Button className="w-full mt-3" size="sm">Generate QR</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-medium">Identity Proof</h4>
                  <p className="text-sm text-muted-foreground">Confirm your identity</p>
                  <Button className="w-full mt-3" size="sm" variant="outline">Generate QR</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium">Custom Verification</h4>
                  <p className="text-sm text-muted-foreground">Choose specific claims</p>
                  <Button className="w-full mt-3" size="sm" variant="outline">Customize</Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <Shield className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-emerald-900">Privacy Protected</h4>
                  <p className="text-sm text-emerald-700">
                    Zero-knowledge proofs ensure your sensitive data never leaves your device
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t">
          <div className="grid grid-cols-4 gap-1 p-2">
            <Button variant="ghost" size="sm" className="flex-col h-12 text-xs">
              <Wallet className="h-4 w-4" />
              Wallet
            </Button>
            <Button variant="ghost" size="sm" className="flex-col h-12 text-xs">
              <QrCode className="h-4 w-4" />
              Scan
            </Button>
            <Button variant="ghost" size="sm" className="flex-col h-12 text-xs">
              <History className="h-4 w-4" />
              History
            </Button>
            <Button variant="ghost" size="sm" className="flex-col h-12 text-xs">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
