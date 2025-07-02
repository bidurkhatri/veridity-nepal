"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Copy,
  CheckCircle,
  Key,
  Zap,
  Shield,
  Globe,
  FileText,
  Terminal,
  Braces,
  ArrowRight
} from "lucide-react"

export default function ApiDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/verify",
      description: "Verify a zero-knowledge proof",
      category: "Verification"
    },
    {
      method: "POST",
      path: "/api/v1/credentials/request",
      description: "Request credential issuance",
      category: "Credentials"
    },
    {
      method: "GET",
      path: "/api/v1/status/{proof_id}",
      description: "Get verification status",
      category: "Verification"
    },
    {
      method: "POST",
      path: "/api/v1/webhooks/verify",
      description: "Webhook for verification results",
      category: "Webhooks"
    }
  ]

  const sdks = [
    {
      language: "JavaScript",
      install: "npm install @veridity/sdk",
      icon: "🟨"
    },
    {
      language: "Python",
      install: "pip install veridity-sdk",
      icon: "🐍"
    },
    {
      language: "PHP",
      install: "composer require veridity/sdk",
      icon: "🐘"
    },
    {
      language: "Java",
      install: "implementation 'com.veridity:sdk:1.0.0'",
      icon: "☕"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Developer Documentation
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Veridity API Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrate privacy-preserving identity verification into your applications with our simple, powerful APIs
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="authentication">Auth</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="sdks">SDKs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Quick Start */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span>Quick Start</span>
                </CardTitle>
                <CardDescription>
                  Get started with Veridity API in under 5 minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Key className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold">1. Get API Key</h3>
                    <p className="text-sm text-muted-foreground">Register and obtain your API credentials</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                      <Code className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold">2. Make Request</h3>
                    <p className="text-sm text-muted-foreground">Send verification requests to our endpoints</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold">3. Get Results</h3>
                    <p className="text-sm text-muted-foreground">Receive instant verification results</p>
                  </div>
                </div>

                <div className="bg-gray-950 text-gray-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Example Request</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(`curl -X POST https://api.veridity.io/v1/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "proof": "zkp_proof_3a7b...",
    "claim_type": "age_over_18",
    "verifier_id": "your_org_id"
  }'`, "quick-start")}
                    >
                      {copiedCode === "quick-start" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <pre className="text-sm overflow-x-auto">
{`curl -X POST https://api.veridity.io/v1/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "proof": "zkp_proof_3a7b...",
    "claim_type": "age_over_18",
    "verifier_id": "your_org_id"
  }'`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* API Endpoints Overview */}
            <Card>
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
                <CardDescription>
                  Core endpoints for identity verification and credential management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {endpoints.map((endpoint, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge variant={endpoint.method === 'GET' ? 'secondary' : 'default'}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm font-mono">{endpoint.path}</code>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{endpoint.category}</Badge>
                        <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    <span>Privacy-First</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Zero-knowledge proofs ensure user data never leaves their device. Only verification results are shared.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span>Lightning Fast</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Verification requests complete in under 1 second with 99.9% uptime SLA.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-500" />
                    <span>Easy Integration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    RESTful APIs with comprehensive SDKs for all major programming languages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="authentication" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>
                  Secure your API requests with Bearer token authentication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Getting Your API Key</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      After registering as a verifier partner, you'll receive API credentials in your dashboard.
                    </p>
                    <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg">
                      <Key className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="font-medium">API Key Format</p>
                        <code className="text-sm">vrd_live_sk_1234567890abcdef...</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Authentication Header</h3>
                    <div className="bg-gray-950 text-gray-100 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Request Headers</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(`Authorization: Bearer vrd_live_sk_1234567890abcdef...
Content-Type: application/json`, "auth-header")}
                        >
                          {copiedCode === "auth-header" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <pre className="text-sm">
{`Authorization: Bearer vrd_live_sk_1234567890abcdef...
Content-Type: application/json`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Environment Variables</h3>
                    <div className="bg-gray-950 text-gray-100 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Environment Setup</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(`# Production
VERIDITY_API_KEY=vrd_live_sk_...
VERIDITY_BASE_URL=https://api.veridity.io

# Sandbox
VERIDITY_API_KEY=vrd_test_sk_...
VERIDITY_BASE_URL=https://sandbox-api.veridity.io`, "env-vars")}
                        >
                          {copiedCode === "env-vars" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <pre className="text-sm">
{`# Production
VERIDITY_API_KEY=vrd_live_sk_...
VERIDITY_BASE_URL=https://api.veridity.io

# Sandbox
VERIDITY_API_KEY=vrd_test_sk_...
VERIDITY_BASE_URL=https://sandbox-api.veridity.io`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rate Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">1,000</div>
                    <div className="text-sm text-muted-foreground">Requests per hour</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">100</div>
                    <div className="text-sm text-muted-foreground">Concurrent requests</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">10MB</div>
                    <div className="text-sm text-muted-foreground">Max request size</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verification" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Verification API</CardTitle>
                <CardDescription>
                  Verify zero-knowledge proofs from user credentials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">POST /api/v1/verify</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Request Body</h4>
                      <div className="bg-gray-950 text-gray-100 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">JSON Payload</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(`{
  "proof": "zkp_proof_3a7bf92c...",
  "claim_type": "age_over_18",
  "verifier_id": "your_organization_id",
  "metadata": {
    "session_id": "sess_abc123",
    "user_agent": "Mozilla/5.0...",
    "ip_address": "203.xxx.xxx.xxx"
  }
}`, "verify-request")}
                          >
                            {copiedCode === "verify-request" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                        <pre className="text-sm overflow-x-auto">
{`{
  "proof": "zkp_proof_3a7bf92c...",
  "claim_type": "age_over_18",
  "verifier_id": "your_organization_id",
  "metadata": {
    "session_id": "sess_abc123",
    "user_agent": "Mozilla/5.0...",
    "ip_address": "203.xxx.xxx.xxx"
  }
}`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Response</h4>
                      <div className="bg-gray-950 text-gray-100 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Success Response</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(`{
  "verification_id": "ver_abc123def456",
  "status": "verified",
  "claim_type": "age_over_18",
  "result": true,
  "verified_at": "2025-01-01T14:30:25Z",
  "metadata": {
    "proof_validity": true,
    "issuer": "ministry_of_home_affairs",
    "verification_time_ms": 847
  }
}`, "verify-response")}
                          >
                            {copiedCode === "verify-response" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                        <pre className="text-sm overflow-x-auto">
{`{
  "verification_id": "ver_abc123def456",
  "status": "verified",
  "claim_type": "age_over_18",
  "result": true,
  "verified_at": "2025-01-01T14:30:25Z",
  "metadata": {
    "proof_validity": true,
    "issuer": "ministry_of_home_affairs",
    "verification_time_ms": 847
  }
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Supported Claim Types</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 border rounded">
                        <Badge>age_over_18</Badge>
                        <span className="text-sm">Prove user is 18 or older</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded">
                        <Badge>age_over_21</Badge>
                        <span className="text-sm">Prove user is 21 or older</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded">
                        <Badge>nepali_citizen</Badge>
                        <span className="text-sm">Prove Nepali citizenship</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded">
                        <Badge>university_degree</Badge>
                        <span className="text-sm">Prove university education</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 border rounded">
                        <Badge>income_range</Badge>
                        <span className="text-sm">Prove income within range</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded">
                        <Badge>employment_status</Badge>
                        <span className="text-sm">Prove current employment</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded">
                        <Badge>residency_proof</Badge>
                        <span className="text-sm">Prove address/residency</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded">
                        <Badge>bank_account</Badge>
                        <span className="text-sm">Prove valid bank account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Error Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-950 text-gray-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Error Response Format</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(`{
  "error": {
    "code": "INVALID_PROOF",
    "message": "The provided proof is invalid or malformed",
    "details": {
      "proof_id": "zkp_proof_3a7bf92c...",
      "validation_errors": ["signature_mismatch"]
    }
  },
  "request_id": "req_abc123def456"
}`, "error-response")}
                      >
                        {copiedCode === "error-response" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <pre className="text-sm overflow-x-auto">
{`{
  "error": {
    "code": "INVALID_PROOF",
    "message": "The provided proof is invalid or malformed",
    "details": {
      "proof_id": "zkp_proof_3a7bf92c...",
      "validation_errors": ["signature_mismatch"]
    }
  },
  "request_id": "req_abc123def456"
}`}
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Error Codes</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 border rounded">
                          <code>400</code>
                          <span>Bad Request</span>
                        </div>
                        <div className="flex justify-between p-2 border rounded">
                          <code>401</code>
                          <span>Unauthorized</span>
                        </div>
                        <div className="flex justify-between p-2 border rounded">
                          <code>403</code>
                          <span>Forbidden</span>
                        </div>
                        <div className="flex justify-between p-2 border rounded">
                          <code>429</code>
                          <span>Rate Limited</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Verification Errors</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 border rounded">
                          <code>INVALID_PROOF</code>
                          <span>Malformed proof</span>
                        </div>
                        <div className="flex justify-between p-2 border rounded">
                          <code>EXPIRED_CREDENTIAL</code>
                          <span>Credential expired</span>
                        </div>
                        <div className="flex justify-between p-2 border rounded">
                          <code>UNSUPPORTED_CLAIM</code>
                          <span>Claim type not supported</span>
                        </div>
                        <div className="flex justify-between p-2 border rounded">
                          <code>VERIFICATION_FAILED</code>
                          <span>Proof verification failed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Webhooks</CardTitle>
                <CardDescription>
                  Receive real-time notifications for verification events
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Setting Up Webhooks</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Webhook URL Configuration</h4>
                      <p className="text-sm text-blue-700">
                        Configure your webhook endpoint in the dashboard to receive verification events in real-time.
                      </p>
                    </div>

                    <div className="bg-gray-950 text-gray-100 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Webhook Payload Example</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(`{
  "event_type": "verification.completed",
  "verification_id": "ver_abc123def456",
  "timestamp": "2025-01-01T14:30:25Z",
  "data": {
    "verifier_id": "your_organization_id",
    "claim_type": "age_over_18",
    "result": true,
    "user_metadata": {
      "session_id": "sess_abc123"
    }
  },
  "signature": "sha256=abc123..."
}`, "webhook-payload")}
                        >
                          {copiedCode === "webhook-payload" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <pre className="text-sm overflow-x-auto">
{`{
  "event_type": "verification.completed",
  "verification_id": "ver_abc123def456",
  "timestamp": "2025-01-01T14:30:25Z",
  "data": {
    "verifier_id": "your_organization_id",
    "claim_type": "age_over_18",
    "result": true,
    "user_metadata": {
      "session_id": "sess_abc123"
    }
  },
  "signature": "sha256=abc123..."
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Event Types</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 border rounded">
                      <Badge variant="default">verification.completed</Badge>
                      <span className="text-sm">Verification process completed successfully</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded">
                      <Badge variant="secondary">verification.failed</Badge>
                      <span className="text-sm">Verification process failed</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded">
                      <Badge variant="outline">credential.issued</Badge>
                      <span className="text-sm">New credential issued to user</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded">
                      <Badge variant="outline">credential.revoked</Badge>
                      <span className="text-sm">Credential has been revoked</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Webhook Security</h3>
                  <div className="bg-gray-950 text-gray-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Signature Verification (Node.js)</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}`, "webhook-security")}
                      >
                        {copiedCode === "webhook-security" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <pre className="text-sm overflow-x-auto">
{`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sdks" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Official SDKs</CardTitle>
                <CardDescription>
                  Pre-built libraries for popular programming languages
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {sdks.map((sdk, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <span className="text-2xl">{sdk.icon}</span>
                          <span>{sdk.language}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Installation</h4>
                            <div className="bg-gray-950 text-gray-100 p-3 rounded">
                              <code className="text-sm">{sdk.install}</code>
                            </div>
                          </div>
                          <Button className="w-full" variant="outline">
                            View Documentation <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>JavaScript SDK Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-950 text-gray-100 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Complete Example</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(`import { Veridity } from '@veridity/sdk';

const veridity = new Veridity({
  apiKey: process.env.VERIDITY_API_KEY,
  environment: 'production' // or 'sandbox'
});

async function verifyAge(proofData) {
  try {
    const result = await veridity.verify({
      proof: proofData.proof,
      claimType: 'age_over_18',
      verifierId: 'your_org_id',
      metadata: {
        sessionId: 'sess_abc123'
      }
    });

    if (result.verified) {
      console.log('✅ User is over 18');
      return true;
    } else {
      console.log('❌ Age verification failed');
      return false;
    }
  } catch (error) {
    console.error('Verification error:', error);
    throw error;
  }
}`, "js-sdk-example")}
                        >
                          {copiedCode === "js-sdk-example" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <pre className="text-sm overflow-x-auto">
{`import { Veridity } from '@veridity/sdk';

const veridity = new Veridity({
  apiKey: process.env.VERIDITY_API_KEY,
  environment: 'production' // or 'sandbox'
});

async function verifyAge(proofData) {
  try {
    const result = await veridity.verify({
      proof: proofData.proof,
      claimType: 'age_over_18',
      verifierId: 'your_org_id',
      metadata: {
        sessionId: 'sess_abc123'
      }
    });

    if (result.verified) {
      console.log('✅ User is over 18');
      return true;
    } else {
      console.log('❌ Age verification failed');
      return false;
    }
  } catch (error) {
    console.error('Verification error:', error);
    throw error;
  }
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Testing & Sandbox</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Sandbox Environment</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Test your integration safely with our sandbox environment.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Base URL:</span>
                        <code>sandbox-api.veridity.io</code>
                      </div>
                      <div className="flex justify-between">
                        <span>API Key:</span>
                        <code>vrd_test_sk_...</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Rate Limit:</span>
                        <span>100 req/hour</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Test Data</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use these test proofs to verify your integration.
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        Generate Test Proof
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Download Test Data
                      </Button>
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
