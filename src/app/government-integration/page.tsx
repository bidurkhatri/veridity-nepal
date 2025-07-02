"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Building2,
  Shield,
  CheckCircle,
  Clock,
  Database,
  Key,
  Globe,
  Zap,
  Lock,
  Users,
  TrendingUp,
  AlertTriangle,
  RefreshCw
} from "lucide-react"
import { governmentAPIs, govAPI, sampleIntegrationData, type CitizenshipRecord, type APIHealthData } from "@/lib/govApiIntegration"

export default function GovernmentIntegrationPage() {
  const [selectedAPI, setSelectedAPI] = useState(0)
  const [citizenshipNumber, setCitizenshipNumber] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<CitizenshipRecord | null>(null)
  const [apiHealthStatus, setApiHealthStatus] = useState<Record<string, APIHealthData>>({})
  const [error, setError] = useState<string | null>(null)

  // Check API health on component mount
  useEffect(() => {
    const checkAPIHealth = async () => {
      const healthChecks: Record<string, APIHealthData> = {}

      for (const api of governmentAPIs) {
        try {
          const response = await govAPI.checkAPIHealth(api.endpoint)
          const apiKey = api.name.toLowerCase().replace(/\s+/g, '_')
          if (response.success && response.data) {
            healthChecks[apiKey] = response.data
          }
        } catch (error) {
          const apiKey = api.name.toLowerCase().replace(/\s+/g, '_')
          healthChecks[apiKey] = {
            status: 'error',
            error: 'Health check failed'
          }
        }
      }

      setApiHealthStatus(healthChecks)
    }

    checkAPIHealth()
  }, [])

  const handleCitizenshipVerification = async () => {
    if (!citizenshipNumber.trim()) {
      setError("Please enter a citizenship number")
      return
    }

    setIsVerifying(true)
    setError(null)
    setVerificationResult(null)

    try {
      const response = await govAPI.verifyCitizenship(citizenshipNumber)

      if (response.success && response.data) {
        setVerificationResult(response.data)
      } else {
        setError(response.error || "Verification failed")
      }
    } catch (error) {
      setError("Network error occurred")
    } finally {
      setIsVerifying(false)
    }
  }

  const currentAPI = governmentAPIs[selectedAPI]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold">Government API Integration</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure integration with Nepal's government systems for privacy-preserving identity verification.
            Experience real-time API connectivity with major government agencies.
          </p>
        </div>

        {/* Integration Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active APIs</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{governmentAPIs.filter(api => api.status === 'active').length}</div>
              <p className="text-xs text-muted-foreground">
                {governmentAPIs.length} total integrations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2s</div>
              <p className="text-xs text-muted-foreground">
                Average API response
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.7%</div>
              <p className="text-xs text-muted-foreground">
                Verification accuracy
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Level</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">A+</div>
              <p className="text-xs text-muted-foreground">
                Enterprise grade
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="apis" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="apis">Government APIs</TabsTrigger>
            <TabsTrigger value="demo">Live Demo</TabsTrigger>
            <TabsTrigger value="integration">Integration Guide</TabsTrigger>
            <TabsTrigger value="security">Security & Compliance</TabsTrigger>
          </TabsList>

          <TabsContent value="apis" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* API List */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Government APIs</CardTitle>
                  <CardDescription>
                    Integrated government services for identity verification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {governmentAPIs.map((api, index) => (
                    <div
                      key={api.name}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedAPI === index ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedAPI(index)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{api.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant={api.status === 'active' ? 'default' : 'secondary'}>
                            {api.status}
                          </Badge>
                          <div className={`w-2 h-2 rounded-full ${
                            api.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                          }`} />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{api.description}</p>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Credentials:</span> {api.credentials.join(', ')}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Privacy:</span> {api.dataProtection} protection
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Selected API Details */}
              <Card>
                <CardHeader>
                  <CardTitle>{currentAPI.name}</CardTitle>
                  <CardDescription>API Integration Details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Endpoint:</span>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">{currentAPI.endpoint}</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Status:</span>
                      <Badge variant={currentAPI.status === 'active' ? 'default' : 'secondary'}>
                        {currentAPI.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Data Protection:</span>
                      <span className="text-sm capitalize">{currentAPI.dataProtection}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Supported Credentials:</h4>
                    <div className="space-y-1">
                      {currentAPI.credentials.map((credential, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Health Status:</h4>
                    {apiHealthStatus[currentAPI.name.toLowerCase().replace(/\s+/g, '_')] ? (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            apiHealthStatus[currentAPI.name.toLowerCase().replace(/\s+/g, '_')]?.status === 'healthy'
                              ? 'bg-green-500' : 'bg-red-500'
                          }`} />
                          <span className="text-sm capitalize">
                            {apiHealthStatus[currentAPI.name.toLowerCase().replace(/\s+/g, '_')]?.status}
                          </span>
                        </div>
                        {apiHealthStatus[currentAPI.name.toLowerCase().replace(/\s+/g, '_')]?.responseTime && (
                          <div className="text-xs text-muted-foreground">
                            Response time: {apiHealthStatus[currentAPI.name.toLowerCase().replace(/\s+/g, '_')]?.responseTime}ms
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span className="text-sm">Checking status...</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Citizenship Verification Demo</CardTitle>
                <CardDescription>
                  Test the Ministry of Home Affairs citizenship verification API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="citizenship">Citizenship Number</Label>
                  <Input
                    id="citizenship"
                    placeholder="12-34-56-78901 (demo number)"
                    value={citizenshipNumber}
                    onChange={(e) => setCitizenshipNumber(e.target.value)}
                    disabled={isVerifying}
                  />
                  <p className="text-xs text-muted-foreground">
                    Use demo number: 12-34-56-78901 for successful verification
                  </p>
                </div>

                <Button
                  onClick={handleCitizenshipVerification}
                  disabled={isVerifying}
                  className="w-full"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Shield className="mr-2 h-4 w-4" />
                      Verify Citizenship
                    </>
                  )}
                </Button>

                {error && (
                  <div className="p-3 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex items-center space-x-2 text-red-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span className="text-sm">{error}</span>
                    </div>
                  </div>
                )}

                {verificationResult && (
                  <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-700 mb-3">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">Verification Successful</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Name:</span> {verificationResult.fullName}</div>
                      <div><span className="font-medium">Status:</span>
                        <Badge variant="default" className="ml-2">{verificationResult.status}</Badge>
                      </div>
                      <div><span className="font-medium">Issued By:</span> {verificationResult.issuedBy}</div>
                      <div><span className="font-medium">Issue Date:</span> {verificationResult.issuedDate}</div>
                    </div>
                    <div className="mt-3 p-2 bg-white rounded border">
                      <p className="text-xs text-muted-foreground">
                        🔒 <strong>Privacy Notice:</strong> In production, only verification status would be returned.
                        Personal details are shown here for demonstration purposes only.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Integration Statistics */}
            <div className="grid md:grid-cols-3 gap-6">
              {sampleIntegrationData.successfulVerifications.map((verification, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{verification.type}</h3>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{verification.result}</p>
                    <p className="text-xs text-muted-foreground">Verified in {verification.verificationTime}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="integration" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>API Endpoints</CardTitle>
                  <CardDescription>Available government service endpoints</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sampleIntegrationData.apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{endpoint.name}</h4>
                        <Badge variant="outline">{endpoint.method}</Badge>
                      </div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-2">
                        {endpoint.url}
                      </code>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>Rate Limit: {endpoint.rateLimit}</div>
                        <div>Auth: {endpoint.authentication}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Integration Steps</CardTitle>
                  <CardDescription>How to integrate with government APIs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">API Registration</h4>
                        <p className="text-sm text-muted-foreground">
                          Register with each government agency to obtain API credentials
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Authentication Setup</h4>
                        <p className="text-sm text-muted-foreground">
                          Configure OAuth 2.0 or API key authentication
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Privacy Configuration</h4>
                        <p className="text-sm text-muted-foreground">
                          Implement zero-knowledge proof generation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Testing & Deployment</h4>
                        <p className="text-sm text-muted-foreground">
                          Test in sandbox environment before production
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security & Compliance Features</CardTitle>
                <CardDescription>
                  Enterprise-grade security for government integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Security Features:</h4>
                    {sampleIntegrationData.complianceFeatures.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Compliance Standards:</h4>
                    {sampleIntegrationData.complianceFeatures.slice(4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Zero-Knowledge Privacy</h4>
                      <p className="text-sm text-blue-700">
                        All government integrations use zero-knowledge proofs to verify identity claims
                        without exposing sensitive personal information. This ensures maximum privacy
                        while maintaining verification integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
