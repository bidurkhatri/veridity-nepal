# 🔌 Veridity Complete API Documentation

Comprehensive REST API documentation for the Veridity privacy-first identity verification platform.

## 🎯 Overview

The Veridity API provides secure, privacy-preserving identity verification services using zero-knowledge proofs. All APIs follow REST principles with JSON payloads and standard HTTP status codes.

**Base URL**: `https://api.veridity.np/v1`
**Sandbox URL**: `https://sandbox-api.veridity.np/v1`

## 🔐 Authentication

### API Key Authentication

All API requests require authentication using API keys in the Authorization header.

```http
Authorization: Bearer YOUR_API_KEY
```

### OAuth 2.0 (Enterprise)

Enterprise clients can use OAuth 2.0 with client credentials flow.

```http
POST /oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET&
scope=verification:read verification:write
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "verification:read verification:write"
}
```

### Request Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Authorization` | Yes | Bearer token for authentication |
| `Content-Type` | Yes | Always `application/json` |
| `Accept` | No | Always `application/json` (default) |
| `X-Client-Version` | No | Client SDK version for debugging |
| `X-Request-ID` | No | Unique request identifier for tracing |
| `Accept-Language` | No | `en` or `ne` for localized responses |

## 📊 Standard Response Format

### Success Response
```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "metadata": {
    "timestamp": "2025-01-02T10:30:00Z",
    "request_id": "req_1234567890",
    "processing_time": 1250
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid birth date format",
    "details": {
      "field": "birth_date",
      "expected_format": "YYYY-MM-DD"
    }
  },
  "metadata": {
    "timestamp": "2025-01-02T10:30:00Z",
    "request_id": "req_1234567890"
  }
}
```

### HTTP Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful request |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Invalid or missing authentication |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Resource already exists |
| 422 | Unprocessable Entity | Validation failed |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |
| 503 | Service Unavailable | Service temporarily unavailable |

## 🔍 Verification Endpoints

### Create Verification

Create a new verification request.

```http
POST /verifications
```

**Request Body:**
```json
{
  "type": "age_verification",
  "user_data": {
    "birth_date": "1995-03-15"
  },
  "requirements": {
    "minimum_age": 18
  },
  "options": {
    "generate_proof": true,
    "store_result": false,
    "privacy_level": "high"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "verification_id": "ver_1234567890abcdef",
    "type": "age_verification",
    "status": "completed",
    "verified": true,
    "proof": {
      "proof": "0x1a2b3c4d5e6f7890abcdef...",
      "public_signals": ["1"],
      "verification_key": "vk_age_verification_v1",
      "circuit_id": "age_over_18_v2"
    },
    "created_at": "2025-01-02T10:30:00Z",
    "expires_at": "2025-01-02T11:30:00Z"
  },
  "metadata": {
    "timestamp": "2025-01-02T10:30:05Z",
    "request_id": "req_1234567890",
    "processing_time": 1250
  }
}
```

### Get Verification Status

Retrieve the status of a verification request.

```http
GET /verifications/{verification_id}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "verification_id": "ver_1234567890abcdef",
    "type": "age_verification",
    "status": "completed",
    "verified": true,
    "created_at": "2025-01-02T10:30:00Z",
    "completed_at": "2025-01-02T10:30:05Z",
    "expires_at": "2025-01-02T11:30:00Z",
    "metadata": {
      "processing_time": 1250,
      "confidence_score": 0.98,
      "risk_level": "low"
    }
  }
}
```

### List Verifications

List all verifications for the authenticated client.

```http
GET /verifications
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `limit` | integer | Number of results (1-100, default: 20) |
| `offset` | integer | Pagination offset (default: 0) |
| `type` | string | Filter by verification type |
| `status` | string | Filter by status |
| `from_date` | string | Filter from date (ISO 8601) |
| `to_date` | string | Filter to date (ISO 8601) |

**Response:**
```json
{
  "success": true,
  "data": {
    "verifications": [
      {
        "verification_id": "ver_1234567890abcdef",
        "type": "age_verification",
        "status": "completed",
        "verified": true,
        "created_at": "2025-01-02T10:30:00Z"
      }
    ],
    "pagination": {
      "limit": 20,
      "offset": 0,
      "total": 150,
      "has_next": true
    }
  }
}
```

## 🎓 Education Verification Endpoints

### Verify Education Credential

Verify educational credentials through government API integration.

```http
POST /verifications/education
```

**Request Body:**
```json
{
  "student_name": "राम बहादुर शाह",
  "degree_type": "bachelor",
  "field_of_study": "computer_science",
  "institution": "tribhuvan_university",
  "graduation_year": 2020,
  "student_id": "TU/CS/2016/001234",
  "options": {
    "generate_proof": true,
    "verify_with_institution": true,
    "privacy_level": "standard"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "verification_id": "ver_edu_1234567890",
    "type": "education_verification",
    "status": "completed",
    "verified": true,
    "education_details": {
      "degree_verified": true,
      "institution_verified": true,
      "graduation_year_verified": true,
      "gpa_range": "3.5-4.0"
    },
    "proof": {
      "proof": "0x2b3c4d5e6f7890abcdef...",
      "public_signals": ["1", "1", "1"],
      "verification_key": "vk_education_v1"
    },
    "created_at": "2025-01-02T10:30:00Z",
    "expires_at": "2025-01-09T10:30:00Z"
  }
}
```

### Get Institution List

Get list of supported educational institutions.

```http
GET /institutions
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `country` | string | Filter by country (default: NP) |
| `type` | string | university, college, institute |
| `search` | string | Search institution name |

**Response:**
```json
{
  "success": true,
  "data": {
    "institutions": [
      {
        "id": "tribhuvan_university",
        "name": "Tribhuvan University",
        "name_ne": "त्रिभुवन विश्वविद्यालय",
        "type": "university",
        "established": 1959,
        "api_integration": true,
        "supported_degrees": ["bachelor", "master", "phd"]
      },
      {
        "id": "kathmandu_university",
        "name": "Kathmandu University",
        "name_ne": "काठमाडौं विश्वविद्यालय",
        "type": "university",
        "established": 1991,
        "api_integration": true,
        "supported_degrees": ["bachelor", "master", "phd"]
      }
    ]
  }
}
```

## 🏛️ Government Integration Endpoints

### Verify Citizenship

Verify Nepal citizenship certificate through government API.

```http
POST /verifications/citizenship
```

**Request Body:**
```json
{
  "citizenship_number": "12-34-56-78901",
  "full_name": "राम बहादुर शाह",
  "date_of_birth": "1995-03-15",
  "consent_token": "consent_1234567890",
  "options": {
    "generate_proof": true,
    "verify_name": true,
    "verify_dob": true,
    "privacy_level": "maximum"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "verification_id": "ver_cit_1234567890",
    "type": "citizenship_verification",
    "status": "completed",
    "verified": true,
    "citizenship_details": {
      "citizenship_verified": true,
      "name_verified": true,
      "dob_verified": true,
      "status": "active",
      "issued_district": "काठमाडौं"
    },
    "proof": {
      "proof": "0x3c4d5e6f7890abcdef...",
      "public_signals": ["1", "1", "1"],
      "verification_key": "vk_citizenship_v1"
    },
    "created_at": "2025-01-02T10:30:00Z",
    "expires_at": "2025-01-02T16:30:00Z"
  }
}
```

### Government API Status

Check the status of government API integrations.

```http
GET /government/api-status
```

**Response:**
```json
{
  "success": true,
  "data": {
    "apis": [
      {
        "name": "MoHA Citizenship API",
        "endpoint": "citizenship_verification",
        "status": "healthy",
        "response_time": 850,
        "uptime": 99.95,
        "last_check": "2025-01-02T10:29:00Z"
      },
      {
        "name": "TU Academic Records",
        "endpoint": "academic_verification",
        "status": "healthy",
        "response_time": 650,
        "uptime": 99.87,
        "last_check": "2025-01-02T10:29:00Z"
      }
    ],
    "overall_status": "healthy"
  }
}
```

## 🔒 Zero-Knowledge Proof Endpoints

### Generate Custom Proof

Generate a custom zero-knowledge proof for specific claims.

```http
POST /proofs/generate
```

**Request Body:**
```json
{
  "circuit_id": "custom_age_income_v1",
  "private_inputs": {
    "birth_date": "1995-03-15",
    "annual_income": 75000
  },
  "public_inputs": {
    "minimum_age": 21,
    "minimum_income": 50000
  },
  "claims": [
    "age_over_21",
    "income_above_threshold"
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "proof_id": "proof_1234567890",
    "proof": {
      "proof": "0x4d5e6f7890abcdef...",
      "public_signals": ["1", "1"],
      "verification_key": "vk_custom_age_income_v1",
      "circuit_id": "custom_age_income_v1"
    },
    "claims": {
      "age_over_21": true,
      "income_above_threshold": true
    },
    "generated_at": "2025-01-02T10:30:00Z",
    "expires_at": "2025-01-02T11:30:00Z"
  }
}
```

### Verify Proof

Verify a zero-knowledge proof.

```http
POST /proofs/verify
```

**Request Body:**
```json
{
  "proof": "0x4d5e6f7890abcdef...",
  "public_signals": ["1", "1"],
  "verification_key": "vk_custom_age_income_v1",
  "circuit_id": "custom_age_income_v1",
  "expected_claims": [
    "age_over_21",
    "income_above_threshold"
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "verification_id": "proof_ver_1234567890",
    "valid": true,
    "claims_verified": {
      "age_over_21": true,
      "income_above_threshold": true
    },
    "verification_time": 245,
    "verified_at": "2025-01-02T10:30:00Z"
  }
}
```

### List Available Circuits

Get list of available zero-knowledge proof circuits.

```http
GET /circuits
```

**Response:**
```json
{
  "success": true,
  "data": {
    "circuits": [
      {
        "id": "age_over_18_v2",
        "name": "Age Over 18 Verification",
        "description": "Proves age is over specified minimum without revealing exact age",
        "version": "2.0",
        "inputs": {
          "private": ["birth_date"],
          "public": ["minimum_age", "current_date"]
        },
        "outputs": ["age_verified"],
        "constraints": 42,
        "proving_time": "~2.1s",
        "verification_time": "~0.8s"
      },
      {
        "id": "education_credential_v1",
        "name": "Education Credential Verification",
        "description": "Proves educational qualifications without revealing institution details",
        "version": "1.0",
        "inputs": {
          "private": ["degree_hash", "institution_hash"],
          "public": ["required_degree_hash"]
        },
        "outputs": ["education_verified"],
        "constraints": 156,
        "proving_time": "~1.8s",
        "verification_time": "~0.6s"
      }
    ]
  }
}
```

## 📊 Analytics & Reporting Endpoints

### Get Verification Statistics

Retrieve verification statistics and analytics.

```http
GET /analytics/verifications
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `from_date` | string | Start date (ISO 8601) |
| `to_date` | string | End date (ISO 8601) |
| `granularity` | string | hour, day, week, month |
| `type` | string | Filter by verification type |

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "total_verifications": 15420,
      "successful_verifications": 14890,
      "success_rate": 0.9656,
      "average_processing_time": 1350
    },
    "by_type": {
      "age_verification": {
        "count": 8500,
        "success_rate": 0.9721
      },
      "education_verification": {
        "count": 4200,
        "success_rate": 0.9583
      },
      "citizenship_verification": {
        "count": 2720,
        "success_rate": 0.9574
      }
    },
    "timeline": [
      {
        "date": "2025-01-01",
        "count": 1250,
        "success_rate": 0.9680
      },
      {
        "date": "2025-01-02",
        "count": 1380,
        "success_rate": 0.9710
      }
    ]
  }
}
```

### Generate Report

Generate detailed analytics report.

```http
POST /analytics/reports
```

**Request Body:**
```json
{
  "report_type": "comprehensive",
  "date_range": {
    "from": "2024-12-01T00:00:00Z",
    "to": "2025-01-01T00:00:00Z"
  },
  "sections": [
    "verification_metrics",
    "user_analytics",
    "performance_stats",
    "security_events"
  ],
  "format": "pdf",
  "include_charts": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "report_id": "report_1234567890",
    "status": "generating",
    "estimated_completion": "2025-01-02T10:35:00Z",
    "download_url": null,
    "sections_included": [
      "verification_metrics",
      "user_analytics",
      "performance_stats",
      "security_events"
    ]
  }
}
```

### Download Report

Download a generated report.

```http
GET /analytics/reports/{report_id}/download
```

**Response Headers:**
```
Content-Type: application/pdf
Content-Disposition: attachment; filename="veridity-report-2025-01-02.pdf"
```

## 🔧 Configuration Endpoints

### Get API Configuration

Retrieve current API configuration and limits.

```http
GET /config
```

**Response:**
```json
{
  "success": true,
  "data": {
    "api_version": "1.0.0",
    "environment": "production",
    "rate_limits": {
      "verification": {
        "requests_per_minute": 100,
        "requests_per_hour": 5000,
        "requests_per_day": 50000
      },
      "proof_generation": {
        "requests_per_minute": 50,
        "requests_per_hour": 2000
      }
    },
    "supported_verification_types": [
      "age_verification",
      "education_verification",
      "citizenship_verification",
      "custom_verification"
    ],
    "supported_languages": ["en", "ne"],
    "max_request_size": "10MB",
    "timeout": 30000
  }
}
```

### Update Client Configuration

Update client-specific configuration.

```http
PUT /config/client
```

**Request Body:**
```json
{
  "webhook_url": "https://your-app.com/webhooks/veridity",
  "notification_preferences": {
    "verification_completed": true,
    "verification_failed": false,
    "system_alerts": true
  },
  "default_options": {
    "privacy_level": "high",
    "generate_proof": true,
    "store_results": false
  }
}
```

## 🚨 Error Codes Reference

### Authentication Errors (401)
| Code | Message | Resolution |
|------|---------|------------|
| `AUTH_TOKEN_MISSING` | Authorization header is required | Include Bearer token |
| `AUTH_TOKEN_INVALID` | Invalid API key or token | Check API key validity |
| `AUTH_TOKEN_EXPIRED` | Access token has expired | Refresh token |

### Validation Errors (422)
| Code | Message | Resolution |
|------|---------|------------|
| `VALIDATION_ERROR` | Request validation failed | Check request format |
| `INVALID_DATE_FORMAT` | Date must be in YYYY-MM-DD format | Use correct date format |
| `MISSING_REQUIRED_FIELD` | Required field is missing | Include all required fields |
| `INVALID_VERIFICATION_TYPE` | Unsupported verification type | Use supported types |

### Rate Limiting Errors (429)
| Code | Message | Resolution |
|------|---------|------------|
| `RATE_LIMIT_EXCEEDED` | Too many requests | Implement backoff strategy |
| `QUOTA_EXCEEDED` | Monthly quota exceeded | Upgrade plan or wait |

### Service Errors (503)
| Code | Message | Resolution |
|------|---------|------------|
| `SERVICE_UNAVAILABLE` | Service temporarily unavailable | Retry with backoff |
| `GOVERNMENT_API_DOWN` | Government API is unavailable | Try manual verification |
| `MAINTENANCE_MODE` | System under maintenance | Check status page |

## 📡 WebSocket Real-Time API

### Connection

Connect to WebSocket for real-time updates.

```javascript
const ws = new WebSocket('wss://api.veridity.np/v1/ws');

// Authenticate after connection
ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'your_api_key'
  }));
};
```

### Real-Time Verification Updates

Subscribe to verification progress updates.

```javascript
// Subscribe to verification updates
ws.send(JSON.stringify({
  type: 'subscribe',
  channel: 'verification_updates',
  verification_id: 'ver_1234567890'
}));

// Handle incoming messages
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);

  switch (message.type) {
    case 'verification_progress':
      console.log(`Progress: ${message.data.percentage}%`);
      break;
    case 'verification_completed':
      console.log('Verification completed:', message.data);
      break;
    case 'verification_failed':
      console.log('Verification failed:', message.data.error);
      break;
  }
};
```

### Message Types

| Type | Description | Data |
|------|-------------|------|
| `verification_progress` | Progress update | `{percentage, current_step, estimated_time}` |
| `verification_completed` | Verification finished | `{verification_id, result}` |
| `verification_failed` | Verification error | `{verification_id, error}` |
| `system_alert` | System notification | `{level, message, timestamp}` |

## 📈 Rate Limits

### Default Limits

| Endpoint Category | Requests/min | Requests/hour | Requests/day |
|-------------------|--------------|---------------|--------------|
| Verification | 100 | 5,000 | 50,000 |
| Proof Generation | 50 | 2,000 | 20,000 |
| Analytics | 200 | 10,000 | 100,000 |
| Configuration | 20 | 500 | 5,000 |

### Rate Limit Headers

All responses include rate limit information:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1641024000
X-RateLimit-Window: 60
```

### Rate Limit Exceeded Response

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded",
    "details": {
      "limit": 100,
      "window": 60,
      "retry_after": 15
    }
  }
}
```

## 🔐 Security Best Practices

### API Key Security
- Store API keys securely (environment variables)
- Use different keys for different environments
- Rotate keys regularly
- Never expose keys in client-side code

### Request Security
- Always use HTTPS
- Validate input data
- Implement request signing for sensitive operations
- Use webhook signature verification

### Data Protection
- Minimize data collection
- Implement data retention policies
- Use zero-knowledge proofs when possible
- Encrypt sensitive data in transit and at rest

---

**API Documentation Version**: 1.0 | **Last Updated**: January 2025
**Base URL**: https://api.veridity.np/v1 | **Support**: api-support@veridity.np
**Status Page**: https://status.veridity.np | **Postman Collection**: [Download](https://api.veridity.np/postman)
