"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Play,
  Copy,
  Download,
  Code,
  Zap,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  Key,
  Globe,
  Lock,
  Server,
  Database,
  Smartphone,
  Eye,
  EyeOff
} from "lucide-react"

// API endpoint configurations
const apiEndpoints = {
  verification: {
    name: "Identity Verification",
    description: "Verify identity claims using zero-knowledge proofs",
    endpoint: "/api/v1/verify",
    method: "POST",
    authenticated: true,
    rateLimit: "1000/hour",
    examples: [
      {
        name: "Age Verification",
        description: "Verify someone is over 18 without revealing exact age",
        request: {
          type: "age_verification",
          claim: "over_18",
          proof: "zkp_age_proof_example_hash_abc123...",
          public_inputs: {
            minimum_age: 18,
            verification_id: "vf_12345"
          }
        },
        response: {
          success: true,
          verified: true,
          verification_id: "vf_12345",
          timestamp: "2024-07-01T10:30:00Z",
          proof_validity: {
            valid: true,
            circuit: "age_over_18_v1.0",
            constraints_verified: 1024
          }
        }
      },
      {
        name: "Education Credential",
        description: "Verify educational qualifications",
        request: {
          type: "education_verification",
          claim: "bachelor_degree",
          proof: "zkp_edu_proof_example_hash_def456...",
          public_inputs: {
            institution: "tribhuvan_university",
            minimum_gpa: 3.0,
            verification_id: "vf_67890"
          }
        },
        response: {
          success: true,
          verified: true,
          verification_id: "vf_67890",
          timestamp: "2024-07-01T10:35:00Z",
          proof_validity: {
            valid: true,
            circuit: "education_credential_v2.1",
            constraints_verified: 2048
          },
          metadata: {
            institution_verified: true,
            credential_type: "bachelor_degree"
          }
        }
      }
    ]
  },
  proofGeneration: {
    name: "Proof Generation",
    description: "Generate zero-knowledge proofs for identity claims",
    endpoint: "/api/v1/generate-proof",
    method: "POST",
    authenticated: true,
    rateLimit: "500/hour",
    examples: [
      {
        name: "Generate Age Proof",
        description: "Create ZK proof for age verification",
        request: {
          type: "age_verification",
          private_data: {
            birth_date: "1995-03-15",
            document_hash: "doc_hash_123..."
          },
          public_signals: {
            minimum_age: 18,
            current_date: "2024-07-01"
          },
          circuit_version: "age_over_18_v1.0"
        },
        response: {
          success: true,
          proof: "zkp_age_proof_a1b2c3d4e5f6...",
          verification_key: "vk_age_18_v1_xyz789...",
          proof_metadata: {
            circuit: "age_over_18_v1.0",
            proof_size: "1.2KB",
            generation_time: "2.3s",
            constraints: 1024
          },
          expires_at: "2024-07-08T10:30:00Z"
        }
      }
    ]
  },
  batch: {
    name: "Batch Operations",
    description: "Process multiple verifications efficiently",
    endpoint: "/api/v1/batch",
    method: "POST",
    authenticated: true,
    rateLimit: "100/hour",
    examples: [
      {
        name: "Batch Verification",
        description: "Verify multiple proofs in a single request",
        request: {
          verifications: [
            {
              id: "batch_1",
              type: "age_verification",
              proof: "zkp_age_proof_abc123..."
            },
            {
              id: "batch_2",
              type: "education_verification",
              proof: "zkp_edu_proof_def456..."
            }
          ],
          options: {
            fail_fast: false,
            return_details: true
          }
        },
        response: {
          success: true,
          total_processed: 2,
          successful: 2,
          failed: 0,
          results: [
            {
              id: "batch_1",
              verified: true,
              processing_time: "0.8s"
            },
            {
              id: "batch_2",
              verified: true,
              processing_time: "1.1s"
            }
          ],
          batch_metadata: {
            total_time: "1.2s",
            efficiency_gain: "67%"
          }
        }
      }
    ]
  }
}

export default function APIPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<keyof typeof apiEndpoints>("verification")
  const [selectedExample, setSelectedExample] = useState(0)
  const [requestBody, setRequestBody] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [apiKey, setApiKey] = useState("")
  const [showApiKey, setShowApiKey] = useState(false)
  const [responseTime, setResponseTime] = useState<number | null>(null)

  const currentEndpoint = apiEndpoints[selectedEndpoint]
  const currentExample = currentEndpoint.examples[selectedExample]

  // Initialize request body when endpoint or example changes
  const handleExampleChange = (exampleIndex: number) => {
    setSelectedExample(exampleIndex)
    setRequestBody(JSON.stringify(currentEndpoint.examples[exampleIndex].request, null, 2))
    setResponse("")
    setResponseTime(null)
  }

  const handleEndpointChange = (endpoint: keyof typeof apiEndpoints) => {
    setSelectedEndpoint(endpoint)
    setSelectedExample(0)
    setRequestBody(JSON.stringify(apiEndpoints[endpoint].examples[0].request, null, 2))
    setResponse("")
    setResponseTime(null)
  }

  // Simulate API call
  const executeRequest = async () => {
    if (!apiKey.trim()) {
      setResponse(JSON.stringify({
        error: "Authentication required",
        message: "Please provide a valid API key",
        code: "MISSING_API_KEY"
      }, null, 2))
      return
    }

    setIsLoading(true)
    const startTime = Date.now()

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500))

      // Simulate response
      const simulatedResponse = currentExample.response
      setResponse(JSON.stringify(simulatedResponse, null, 2))
      setResponseTime(Date.now() - startTime)
    } catch (error) {
      setResponse(JSON.stringify({
        error: "Request failed",
        message: "Network error occurred",
        code: "NETWORK_ERROR"
      }, null, 2))
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Code className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">API Playground</h1>
              <p className="text-gray-600">Interactive testing environment for Veridity's verification APIs</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Server className="mr-1 h-4 w-4" />
              Base URL: https://api.veridity.com
            </div>
            <div className="flex items-center">
              <Shield className="mr-1 h-4 w-4" />
              API Version: v1.0
            </div>
            <div className="flex items-center">
              <Zap className="mr-1 h-4 w-4" />
              Response Time: &lt; 2s
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - API Configuration */}
          <div className="lg:col-span-1 space-y-6">
            {/* Authentication */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="mr-2 h-5 w-5" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="relative">
                    <Input
                      id="apiKey"
                      type={showApiKey ? "text" : "password"}
                      placeholder="vr_test_key_12345..."
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Get your API key from the{" "}
                    <a href="/admin" className="text-emerald-600 hover:underline">
                      developer dashboard
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Endpoint Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Endpoint</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(apiEndpoints).map(([key, endpoint]) => (
                  <div
                    key={key}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedEndpoint === key
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleEndpointChange(key as keyof typeof apiEndpoints)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{endpoint.name}</h4>
                      <Badge variant="outline">{endpoint.method}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{endpoint.description}</p>
                    <div className="text-xs text-gray-500">
                      Rate limit: {endpoint.rateLimit}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Example Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {currentEndpoint.examples.map((example, index) => (
                    <div
                      key={index}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedExample === index
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleExampleChange(index)}
                    >
                      <h4 className="font-medium text-sm">{example.name}</h4>
                      <p className="text-xs text-gray-600">{example.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Request/Response */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    {currentEndpoint.method} {currentEndpoint.endpoint}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    {currentEndpoint.authenticated && (
                      <Badge variant="secondary" className="flex items-center">
                        <Lock className="mr-1 h-3 w-3" />
                        Authenticated
                      </Badge>
                    )}
                    <Badge variant="outline">
                      {currentEndpoint.rateLimit}
                    </Badge>
                  </div>
                </div>
                <CardDescription>{currentExample.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="request" className="h-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>

                  <TabsContent value="request" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="request-body">Request Body</Label>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(requestBody)}
                        >
                          <Copy className="mr-1 h-4 w-4" />
                          Copy
                        </Button>
                        <Button
                          onClick={executeRequest}
                          disabled={isLoading || !apiKey.trim()}
                          className="min-w-[100px]"
                        >
                          {isLoading ? (
                            <>
                              <Clock className="mr-1 h-4 w-4 animate-spin" />
                              Testing...
                            </>
                          ) : (
                            <>
                              <Play className="mr-1 h-4 w-4" />
                              Send Request
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    <Textarea
                      id="request-body"
                      value={requestBody}
                      onChange={(e) => setRequestBody(e.target.value)}
                      className="font-mono text-sm min-h-[400px]"
                      placeholder="Request body will appear here..."
                    />
                  </TabsContent>

                  <TabsContent value="response" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Label>Response</Label>
                        {responseTime && (
                          <Badge variant="outline" className="text-xs">
                            <Clock className="mr-1 h-3 w-3" />
                            {responseTime}ms
                          </Badge>
                        )}
                        {response && (
                          <Badge
                            variant={response.includes('"success": true') ? "default" : "destructive"}
                            className="text-xs"
                          >
                            {response.includes('"success": true') ? (
                              <>
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Success
                              </>
                            ) : (
                              <>
                                <XCircle className="mr-1 h-3 w-3" />
                                Error
                              </>
                            )}
                          </Badge>
                        )}
                      </div>

                      {response && (
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(response)}
                          >
                            <Copy className="mr-1 h-4 w-4" />
                            Copy
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const blob = new Blob([response], { type: 'application/json' })
                              const url = URL.createObjectURL(blob)
                              const a = document.createElement('a')
                              a.href = url
                              a.download = 'api-response.json'
                              a.click()
                            }}
                          >
                            <Download className="mr-1 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      )}
                    </div>

                    <Textarea
                      value={response}
                      readOnly
                      className="font-mono text-sm min-h-[400px] bg-gray-50"
                      placeholder="Response will appear here after sending a request..."
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* API Information Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-blue-600" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">TLS 1.3 Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">API Key Authentication</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Zero-Knowledge Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Rate Limiting Protection</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-yellow-600" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Response Time</span>
                <span className="text-sm font-medium">&lt; 2s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Uptime</span>
                <span className="text-sm font-medium">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Throughput</span>
                <span className="text-sm font-medium">1K req/min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Global CDN</span>
                <span className="text-sm font-medium">15 regions</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5 text-purple-600" />
                Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Mobile SDKs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-4 w-4 text-gray-500" />
                <span className="text-sm">REST & GraphQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Webhooks</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-gray-500" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
