"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Smartphone,
  Shield,
  CheckCircle,
  Download,
  QrCode,
  User,
  FileText,
  Lock,
  ArrowRight,
  ArrowLeft,
  Clock,
  Building2,
  GraduationCap,
  CreditCard,
  AlertCircle
} from "lucide-react"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    phoneNumber: "",
    fullName: "",
    dateOfBirth: "",
    citizenship: "",
    address: "",
    selectedIssuer: "",
    documentType: "",
    acceptTerms: false
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const steps = [
    {
      id: "welcome",
      title: "Welcome to Veridity",
      description: "Let's set up your privacy-first digital identity"
    },
    {
      id: "phone",
      title: "Phone Verification",
      description: "Verify your phone number to secure your account"
    },
    {
      id: "profile",
      title: "Personal Information",
      description: "Provide basic information for credential requests"
    },
    {
      id: "issuer",
      title: "Choose Credential Issuer",
      description: "Select which organization will verify your identity"
    },
    {
      id: "verification",
      title: "Document Verification",
      description: "Upload required documents for verification"
    },
    {
      id: "wallet",
      title: "Set Up Wallet",
      description: "Configure your secure identity wallet"
    },
    {
      id: "complete",
      title: "Onboarding Complete",
      description: "Your Veridity identity is ready to use"
    }
  ]

  const issuers = [
    {
      id: "moha",
      name: "Ministry of Home Affairs",
      type: "Government",
      credentials: ["Citizenship Certificate", "National ID Card"],
      processing: "3-5 business days",
      icon: "🏛️"
    },
    {
      id: "tu",
      name: "Tribhuvan University",
      type: "Educational",
      credentials: ["Degree Certificates", "Academic Transcripts"],
      processing: "1-2 business days",
      icon: "🎓"
    },
    {
      id: "nrb",
      name: "Nepal Rastra Bank",
      type: "Financial",
      credentials: ["Banking Records", "Credit History"],
      processing: "1 business day",
      icon: "🏦"
    },
    {
      id: "employer",
      name: "Employer Verification",
      type: "Employment",
      credentials: ["Employment Letter", "Salary Certificate"],
      processing: "2-3 business days",
      icon: "💼"
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const simulateProcessing = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      nextStep()
    }, 3000)
  }

  const renderStepContent = () => {
    const step = steps[currentStep]

    switch(step.id) {
      case "welcome":
        return (
          <div className="text-center space-y-8">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-10 w-10 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to Veridity</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Create your privacy-first digital identity that puts you in control of your personal data
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Lock className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Privacy Protected</h3>
                  <p className="text-sm text-muted-foreground">
                    Your personal data never leaves your device
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Instantly Verified</h3>
                  <p className="text-sm text-muted-foreground">
                    Prove your identity in seconds, not days
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Mobile First</h3>
                  <p className="text-sm text-muted-foreground">
                    Works offline on any smartphone
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The onboarding process takes about 5-10 minutes to complete
              </p>
              <Button onClick={nextStep} size="lg">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case "phone":
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center">
              <Smartphone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Verify Your Phone Number</h2>
              <p className="text-muted-foreground">
                We'll send you a verification code to secure your account
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+977 98xxxxxxxx"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">Why do we need this?</p>
                    <p className="text-sm text-blue-600">
                      Your phone number helps secure your account and enables two-factor authentication
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={simulateProcessing}
                disabled={!formData.phoneNumber}
              >
                {isProcessing ? "Sending Code..." : "Send Verification Code"}
              </Button>
            </div>
          </div>
        )

      case "profile":
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center">
              <User className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
              <p className="text-muted-foreground">
                This information will be used to request credentials from issuers
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Ram Bahadur Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="citizenship">Citizenship Number</Label>
                <Input
                  id="citizenship"
                  placeholder="12-34-56-78901"
                  value={formData.citizenship}
                  onChange={(e) => setFormData({...formData, citizenship: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  placeholder="Ward No. 1, Kathmandu, Bagmati Province"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div className="p-4 bg-emerald-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Privacy Note</p>
                    <p className="text-sm text-emerald-600">
                      This data is encrypted and only shared with credential issuers you authorize
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={nextStep}
                disabled={!formData.fullName || !formData.dateOfBirth}
              >
                Continue
              </Button>
            </div>
          </div>
        )

      case "issuer":
        return (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center">
              <Building2 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Choose Credential Issuer</h2>
              <p className="text-muted-foreground">
                Select which organization you'd like to request a digital credential from
              </p>
            </div>

            <div className="grid gap-4">
              {issuers.map((issuer) => (
                <Card
                  key={issuer.id}
                  className={`cursor-pointer transition-all ${
                    formData.selectedIssuer === issuer.id ? 'ring-2 ring-emerald-500 bg-emerald-50' : 'hover:shadow-md'
                  }`}
                  onClick={() => setFormData({...formData, selectedIssuer: issuer.id})}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{issuer.icon}</div>
                        <div>
                          <h3 className="font-semibold">{issuer.name}</h3>
                          <p className="text-sm text-muted-foreground">{issuer.type}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {issuer.credentials.map((cred, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {cred}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{issuer.processing}</span>
                        </div>
                        {formData.selectedIssuer === issuer.id && (
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-2" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              className="w-full"
              onClick={nextStep}
              disabled={!formData.selectedIssuer}
            >
              Continue with Selected Issuer
            </Button>
          </div>
        )

      case "verification":
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center">
              <FileText className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Document Verification</h2>
              <p className="text-muted-foreground">
                Upload required documents for identity verification
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="documentType">Document Type</Label>
                <Select onValueChange={(value) => setFormData({...formData, documentType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="citizenship">Citizenship Certificate</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="license">Driving License</SelectItem>
                    <SelectItem value="id">National ID Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <Download className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">Upload Document Front</p>
                      <p className="text-sm text-muted-foreground">
                        JPG, PNG or PDF up to 10MB
                      </p>
                    </div>
                    <Button variant="outline">Choose File</Button>
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <Download className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">Upload Document Back</p>
                      <p className="text-sm text-muted-foreground">
                        JPG, PNG or PDF up to 10MB
                      </p>
                    </div>
                    <Button variant="outline">Choose File</Button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Important</p>
                    <p className="text-sm text-yellow-700">
                      Ensure documents are clear, well-lit, and all text is readable
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={simulateProcessing}
                disabled={!formData.documentType}
              >
                {isProcessing ? "Processing Documents..." : "Submit for Verification"}
              </Button>
            </div>
          </div>
        )

      case "wallet":
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center">
              <Smartphone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Set Up Your Wallet</h2>
              <p className="text-muted-foreground">
                Download the Veridity mobile app to complete your setup
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <QrCode className="h-16 w-16 mx-auto mb-4 border-2 border-gray-300 rounded p-2" />
                  <h3 className="font-semibold mb-2">Scan QR Code</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Scan this code with your phone to download the Veridity app
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Android APK
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      iOS App
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="font-semibold">Setup Instructions:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm font-medium">1</div>
                    <span className="text-sm">Download and install the Veridity app</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm font-medium">2</div>
                    <span className="text-sm">Create a secure PIN for your wallet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm font-medium">3</div>
                    <span className="text-sm">Import your credential when ready</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm font-medium">4</div>
                    <span className="text-sm">Start verifying your identity!</span>
                  </div>
                </div>
              </div>

              <Button className="w-full" onClick={nextStep}>
                I've Downloaded the App
              </Button>
            </div>
          </div>
        )

      case "complete":
        return (
          <div className="text-center space-y-8">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-emerald-600" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your Veridity identity is being set up. You'll receive a notification when your credential is ready.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div className="text-left">
                      <p className="font-medium">Processing Time</p>
                      <p className="text-sm text-muted-foreground">
                        Your credential will be ready within 3-5 business days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-emerald-600" />
                    <div className="text-left">
                      <p className="font-medium">Mobile App</p>
                      <p className="text-sm text-muted-foreground">
                        Keep the Veridity app installed to receive your credential
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <div className="text-left">
                      <p className="font-medium">Start Verifying</p>
                      <p className="text-sm text-muted-foreground">
                        Use your credential to verify your identity anywhere
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Go to Dashboard
              </Button>
              <Button variant="outline" size="lg">
                Learn More About Veridity
              </Button>
            </div>
          </div>
        )

      default:
        return <div>Step not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold">Identity Onboarding</h1>
                <p className="text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}: {steps[currentStep].description}
                </p>
              </div>
              <Badge variant="secondary">
                {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
              </Badge>
            </div>

            <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />

            {/* Step Indicators */}
            <div className="flex justify-between mt-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center space-y-1 ${
                    index <= currentStep ? 'text-emerald-600' : 'text-gray-400'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index < currentStep
                        ? 'bg-emerald-600 text-white'
                        : index === currentStep
                        ? 'bg-emerald-100 text-emerald-600 border-2 border-emerald-600'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {index < currentStep ? <CheckCircle className="h-4 w-4" /> : index + 1}
                  </div>
                  <span className="text-xs hidden md:block">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <Card className="min-h-[500px]">
            <CardContent className="p-8">
              {isProcessing ? (
                <div className="text-center space-y-4 py-12">
                  <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <h3 className="text-lg font-semibold">Processing...</h3>
                  <p className="text-muted-foreground">
                    Please wait while we process your information
                  </p>
                </div>
              ) : (
                renderStepContent()
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          {!isProcessing && (
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <div className="text-sm text-muted-foreground flex items-center">
                Need help? <a href="#" className="text-emerald-600 hover:underline ml-1">Contact Support</a>
              </div>

              {currentStep < steps.length - 1 && steps[currentStep].id !== "welcome" && (
                <Button onClick={nextStep}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
