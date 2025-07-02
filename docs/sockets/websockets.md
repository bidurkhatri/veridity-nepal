# 🔌 Veridity WebSocket API Documentation

Real-time communication documentation for the Veridity platform WebSocket API.

## 🎯 Overview

The Veridity WebSocket API provides real-time communication for verification progress updates, live proof generation monitoring, admin dashboard events, and system notifications.

**WebSocket URL**: `wss://api.veridity.np/v1/ws`
**Sandbox URL**: `wss://sandbox-api.veridity.np/v1/ws`

## 🔐 Authentication

### Connection Authentication

WebSocket connections must be authenticated immediately after establishing the connection.

```javascript
const ws = new WebSocket('wss://api.veridity.np/v1/ws');

ws.onopen = () => {
  // Send authentication message
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'your_api_key',
    client_info: {
      user_agent: navigator.userAgent,
      timestamp: Date.now()
    }
  }));
};

// Handle authentication response
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);

  if (message.type === 'auth_success') {
    console.log('WebSocket authenticated successfully');
    console.log('Session ID:', message.session_id);
  } else if (message.type === 'auth_failed') {
    console.error('Authentication failed:', message.error);
    ws.close();
  }
};
```

### Authentication Message Format

```typescript
interface AuthMessage {
  type: 'auth';
  token: string;
  client_info: {
    user_agent: string;
    timestamp: number;
    client_version?: string;
  };
}

interface AuthResponse {
  type: 'auth_success' | 'auth_failed';
  session_id?: string;
  permissions?: string[];
  error?: string;
  expires_at?: string;
}
```

## 📡 Message Protocol

### Standard Message Format

All WebSocket messages follow a standard JSON format:

```typescript
interface WebSocketMessage {
  type: string;
  channel?: string;
  data: any;
  timestamp: string;
  message_id: string;
  correlation_id?: string;
}
```

### Message Types

| Type | Direction | Description |
|------|-----------|-------------|
| `auth` | Client → Server | Authentication request |
| `subscribe` | Client → Server | Subscribe to channel |
| `unsubscribe` | Client → Server | Unsubscribe from channel |
| `ping` | Client ↔ Server | Keep-alive ping |
| `verification_progress` | Server → Client | Verification progress update |
| `verification_completed` | Server → Client | Verification completed |
| `system_alert` | Server → Client | System notification |
| `error` | Server → Client | Error message |

## 🔄 Channel Subscription

### Subscribe to Channels

```javascript
// Subscribe to verification updates for a specific verification
ws.send(JSON.stringify({
  type: 'subscribe',
  channel: 'verification',
  filters: {
    verification_id: 'ver_1234567890'
  }
}));

// Subscribe to system alerts
ws.send(JSON.stringify({
  type: 'subscribe',
  channel: 'system_alerts',
  filters: {
    level: ['warning', 'error']
  }
}));

// Subscribe to admin dashboard updates
ws.send(JSON.stringify({
  type: 'subscribe',
  channel: 'admin_dashboard',
  filters: {
    metrics: ['active_users', 'verification_rate']
  }
}));
```

### Available Channels

| Channel | Description | Required Permissions |
|---------|-------------|---------------------|
| `verification` | Individual verification updates | `verification:read` |
| `batch_verification` | Batch verification progress | `verification:read` |
| `system_alerts` | System notifications | `system:read` |
| `admin_dashboard` | Admin dashboard metrics | `admin:read` |
| `security_events` | Security-related events | `security:read` |
| `api_health` | API health status | `system:read` |

### Subscription Response

```json
{
  "type": "subscription_success",
  "channel": "verification",
  "message_id": "msg_1234567890",
  "timestamp": "2025-01-02T10:30:00Z",
  "subscription_id": "sub_abcdef123456"
}
```

## 🔍 Verification Progress Updates

### Real-Time Verification Monitoring

Monitor verification progress in real-time:

```javascript
class VerificationMonitor {
  constructor(websocket) {
    this.ws = websocket;
    this.activeVerifications = new Map();
    this.setupEventHandlers();
  }

  startMonitoring(verificationId, callbacks) {
    // Subscribe to verification updates
    this.ws.send(JSON.stringify({
      type: 'subscribe',
      channel: 'verification',
      filters: {
        verification_id: verificationId
      }
    }));

    // Store callbacks for this verification
    this.activeVerifications.set(verificationId, callbacks);
  }

  setupEventHandlers() {
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case 'verification_started':
          this.handleVerificationStarted(message);
          break;
        case 'verification_progress':
          this.handleVerificationProgress(message);
          break;
        case 'verification_completed':
          this.handleVerificationCompleted(message);
          break;
        case 'verification_failed':
          this.handleVerificationFailed(message);
          break;
      }
    };
  }

  handleVerificationProgress(message) {
    const { verification_id, data } = message;
    const callbacks = this.activeVerifications.get(verification_id);

    if (callbacks && callbacks.onProgress) {
      callbacks.onProgress({
        percentage: data.percentage,
        current_step: data.current_step,
        estimated_time_remaining: data.estimated_time_remaining,
        step_details: data.step_details
      });
    }
  }

  handleVerificationCompleted(message) {
    const { verification_id, data } = message;
    const callbacks = this.activeVerifications.get(verification_id);

    if (callbacks && callbacks.onComplete) {
      callbacks.onComplete({
        verification_id,
        verified: data.verified,
        proof: data.proof,
        processing_time: data.processing_time
      });
    }

    // Cleanup
    this.activeVerifications.delete(verification_id);
  }
}

// Usage example
const monitor = new VerificationMonitor(ws);

monitor.startMonitoring('ver_1234567890', {
  onProgress: (progress) => {
    console.log(`Progress: ${progress.percentage}%`);
    console.log(`Current step: ${progress.current_step}`);
    updateProgressBar(progress.percentage);
  },
  onComplete: (result) => {
    console.log('Verification completed:', result);
    showVerificationResult(result);
  },
  onError: (error) => {
    console.error('Verification failed:', error);
    showErrorMessage(error.message);
  }
});
```

### Verification Progress Message Format

```typescript
interface VerificationProgressMessage {
  type: 'verification_progress';
  channel: 'verification';
  data: {
    verification_id: string;
    percentage: number;
    current_step: string;
    total_steps: number;
    estimated_time_remaining: number;
    step_details: {
      name: string;
      description: string;
      started_at: string;
      status: 'in_progress' | 'completed' | 'failed';
    };
  };
  timestamp: string;
  message_id: string;
}

interface VerificationCompletedMessage {
  type: 'verification_completed';
  channel: 'verification';
  data: {
    verification_id: string;
    verified: boolean;
    proof?: {
      proof: string;
      public_signals: string[];
      verification_key: string;
    };
    processing_time: number;
    confidence_score: number;
  };
  timestamp: string;
  message_id: string;
}
```

## 🏗️ Zero-Knowledge Proof Generation Updates

### Real-Time Proof Generation

Monitor ZK proof generation process:

```javascript
class ProofGenerationMonitor {
  constructor(websocket) {
    this.ws = websocket;
    this.setupProofEventHandlers();
  }

  monitorProofGeneration(proofId, onUpdate) {
    this.ws.send(JSON.stringify({
      type: 'subscribe',
      channel: 'proof_generation',
      filters: {
        proof_id: proofId
      }
    }));

    this.onUpdate = onUpdate;
  }

  setupProofEventHandlers() {
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === 'proof_generation_update') {
        this.handleProofGenerationUpdate(message);
      } else if (message.type === 'proof_generation_completed') {
        this.handleProofGenerationCompleted(message);
      }
    };
  }

  handleProofGenerationUpdate(message) {
    const { data } = message;

    if (this.onUpdate) {
      this.onUpdate({
        phase: data.phase,
        progress: data.progress,
        currentOperation: data.current_operation,
        estimatedTime: data.estimated_time,
        circuitConstraints: data.circuit_constraints,
        witnessGeneration: data.witness_generation
      });
    }
  }
}

// Usage for proof generation monitoring
const proofMonitor = new ProofGenerationMonitor(ws);

proofMonitor.monitorProofGeneration('proof_1234567890', (update) => {
  console.log(`Proof generation phase: ${update.phase}`);
  console.log(`Progress: ${update.progress}%`);
  console.log(`Current operation: ${update.currentOperation}`);

  // Update UI
  updateProofGenerationUI(update);
});
```

### Proof Generation Message Format

```typescript
interface ProofGenerationUpdateMessage {
  type: 'proof_generation_update';
  channel: 'proof_generation';
  data: {
    proof_id: string;
    phase: 'circuit_compilation' | 'witness_generation' | 'proof_computation' | 'verification';
    progress: number;
    current_operation: string;
    estimated_time: number;
    circuit_constraints?: number;
    witness_generation?: {
      inputs_processed: number;
      total_inputs: number;
    };
    performance_metrics: {
      memory_usage: number;
      cpu_usage: number;
    };
  };
  timestamp: string;
  message_id: string;
}
```

## 📊 Admin Dashboard Real-Time Updates

### System Metrics Streaming

Real-time system metrics for admin dashboard:

```javascript
class AdminDashboardSocket {
  constructor(websocket) {
    this.ws = websocket;
    this.metrics = new Map();
    this.setupAdminHandlers();
  }

  subscribeToMetrics(metricTypes) {
    this.ws.send(JSON.stringify({
      type: 'subscribe',
      channel: 'admin_dashboard',
      filters: {
        metrics: metricTypes,
        update_interval: 30 // seconds
      }
    }));
  }

  setupAdminHandlers() {
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case 'system_metrics_update':
          this.handleSystemMetricsUpdate(message);
          break;
        case 'user_activity_update':
          this.handleUserActivityUpdate(message);
          break;
        case 'verification_stats_update':
          this.handleVerificationStatsUpdate(message);
          break;
        case 'security_alert':
          this.handleSecurityAlert(message);
          break;
      }
    };
  }

  handleSystemMetricsUpdate(message) {
    const { data } = message;

    // Update metrics
    this.metrics.set('system', data);

    // Trigger UI updates
    this.updateSystemMetricsUI(data);
  }

  updateSystemMetricsUI(metrics) {
    // Update CPU usage chart
    updateChart('cpu-usage', metrics.cpu_usage);

    // Update memory usage
    updateChart('memory-usage', metrics.memory_usage);

    // Update active connections
    updateMetric('active-connections', metrics.active_connections);

    // Update API response time
    updateMetric('api-response-time', metrics.avg_response_time);
  }
}

// Initialize admin dashboard WebSocket
const adminSocket = new AdminDashboardSocket(ws);

// Subscribe to various metrics
adminSocket.subscribeToMetrics([
  'system_health',
  'user_activity',
  'verification_stats',
  'api_performance',
  'security_events'
]);
```

### Admin Dashboard Message Formats

```typescript
interface SystemMetricsUpdateMessage {
  type: 'system_metrics_update';
  channel: 'admin_dashboard';
  data: {
    timestamp: string;
    cpu_usage: number;
    memory_usage: number;
    disk_usage: number;
    active_connections: number;
    avg_response_time: number;
    error_rate: number;
    throughput: number;
  };
  message_id: string;
}

interface UserActivityUpdateMessage {
  type: 'user_activity_update';
  channel: 'admin_dashboard';
  data: {
    active_users: number;
    new_registrations: number;
    verification_requests: number;
    geographic_distribution: {
      [region: string]: number;
    };
  };
  timestamp: string;
  message_id: string;
}

interface SecurityAlertMessage {
  type: 'security_alert';
  channel: 'admin_dashboard';
  data: {
    alert_id: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    category: 'authentication' | 'rate_limit' | 'suspicious_activity' | 'system_breach';
    message: string;
    details: {
      ip_address?: string;
      user_agent?: string;
      affected_resources?: string[];
      recommended_actions?: string[];
    };
    auto_mitigated: boolean;
  };
  timestamp: string;
  message_id: string;
}
```

## 🔒 Security Event Monitoring

### Real-Time Security Events

Monitor security events in real-time:

```javascript
class SecurityEventMonitor {
  constructor(websocket) {
    this.ws = websocket;
    this.alertHandlers = new Map();
    this.setupSecurityHandlers();
  }

  subscribeToSecurityEvents(eventTypes) {
    this.ws.send(JSON.stringify({
      type: 'subscribe',
      channel: 'security_events',
      filters: {
        event_types: eventTypes,
        severity_level: 'medium' // minimum severity
      }
    }));
  }

  addAlertHandler(alertType, handler) {
    if (!this.alertHandlers.has(alertType)) {
      this.alertHandlers.set(alertType, []);
    }
    this.alertHandlers.get(alertType).push(handler);
  }

  setupSecurityHandlers() {
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === 'security_event') {
        this.handleSecurityEvent(message);
      } else if (message.type === 'security_alert') {
        this.handleSecurityAlert(message);
      }
    };
  }

  handleSecurityEvent(message) {
    const { data } = message;

    // Log security event
    console.log(`Security event: ${data.event_type}`);
    console.log(`Severity: ${data.severity}`);
    console.log(`Details:`, data.details);

    // Trigger appropriate handlers
    const handlers = this.alertHandlers.get(data.event_type);
    if (handlers) {
      handlers.forEach(handler => handler(data));
    }

    // Auto-response for critical events
    if (data.severity === 'critical') {
      this.handleCriticalSecurityEvent(data);
    }
  }

  handleCriticalSecurityEvent(eventData) {
    // Implement immediate response actions
    console.warn('CRITICAL SECURITY EVENT DETECTED');

    // Notify security team
    this.notifySecurityTeam(eventData);

    // Trigger emergency protocols if needed
    if (eventData.event_type === 'data_breach_detected') {
      this.triggerEmergencyProtocols(eventData);
    }
  }
}

// Usage
const securityMonitor = new SecurityEventMonitor(ws);

securityMonitor.subscribeToSecurityEvents([
  'failed_authentication',
  'rate_limit_exceeded',
  'suspicious_activity',
  'data_breach_detected',
  'unauthorized_access'
]);

// Add custom handlers
securityMonitor.addAlertHandler('failed_authentication', (event) => {
  if (event.details.attempts > 5) {
    console.log('Multiple failed authentication attempts detected');
    // Implement IP blocking or additional security measures
  }
});
```

## 🌐 Connection Management

### Connection Lifecycle

```javascript
class VeridityWebSocket {
  constructor(url, apiKey) {
    this.url = url;
    this.apiKey = apiKey;
    this.ws = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 1000;
    this.subscriptions = new Set();
    this.messageQueue = [];
    this.connectionState = 'disconnected';
  }

  connect() {
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(this.url);
        this.setupEventHandlers(resolve, reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  setupEventHandlers(resolve, reject) {
    this.ws.onopen = () => {
      console.log('WebSocket connected');
      this.connectionState = 'connected';
      this.authenticate()
        .then(() => {
          this.reconnectAttempts = 0;
          this.processMessageQueue();
          this.restoreSubscriptions();
          resolve();
        })
        .catch(reject);
    };

    this.ws.onclose = (event) => {
      console.log('WebSocket disconnected:', event.code, event.reason);
      this.connectionState = 'disconnected';

      if (!event.wasClean && this.reconnectAttempts < this.maxReconnectAttempts) {
        this.attemptReconnect();
      }
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.connectionState = 'error';
    };

    this.ws.onmessage = (event) => {
      this.handleMessage(JSON.parse(event.data));
    };
  }

  authenticate() {
    return new Promise((resolve, reject) => {
      const authMessage = {
        type: 'auth',
        token: this.apiKey,
        client_info: {
          user_agent: navigator.userAgent,
          timestamp: Date.now()
        }
      };

      const timeout = setTimeout(() => {
        reject(new Error('Authentication timeout'));
      }, 10000);

      const handleAuthResponse = (message) => {
        if (message.type === 'auth_success') {
          clearTimeout(timeout);
          this.removeMessageHandler(handleAuthResponse);
          resolve(message);
        } else if (message.type === 'auth_failed') {
          clearTimeout(timeout);
          this.removeMessageHandler(handleAuthResponse);
          reject(new Error(message.error));
        }
      };

      this.addMessageHandler(handleAuthResponse);
      this.send(authMessage);
    });
  }

  attemptReconnect() {
    this.reconnectAttempts++;
    const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);

    console.log(`Attempting to reconnect in ${delay}ms (attempt ${this.reconnectAttempts})`);

    setTimeout(() => {
      this.connect().catch((error) => {
        console.error('Reconnection failed:', error);
      });
    }, delay);
  }

  send(message) {
    if (this.connectionState === 'connected') {
      this.ws.send(JSON.stringify(message));
    } else {
      // Queue message for later
      this.messageQueue.push(message);
    }
  }

  subscribe(channel, filters = {}) {
    const subscription = { channel, filters };
    this.subscriptions.add(subscription);

    this.send({
      type: 'subscribe',
      channel,
      filters
    });
  }

  unsubscribe(channel) {
    this.subscriptions.delete(channel);

    this.send({
      type: 'unsubscribe',
      channel
    });
  }

  processMessageQueue() {
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      this.send(message);
    }
  }

  restoreSubscriptions() {
    this.subscriptions.forEach(subscription => {
      this.send({
        type: 'subscribe',
        channel: subscription.channel,
        filters: subscription.filters
      });
    });
  }

  close() {
    if (this.ws) {
      this.ws.close(1000, 'Client closing connection');
    }
  }
}

// Usage
const veridityWS = new VeridityWebSocket(
  'wss://api.veridity.np/v1/ws',
  'your_api_key'
);

veridityWS.connect()
  .then(() => {
    console.log('Connected and authenticated');

    // Subscribe to channels
    veridityWS.subscribe('verification', {
      verification_id: 'ver_1234567890'
    });

    veridityWS.subscribe('system_alerts', {
      level: ['warning', 'error']
    });
  })
  .catch((error) => {
    console.error('Connection failed:', error);
  });
```

## 📈 Performance Considerations

### Message Batching

For high-frequency updates, implement message batching:

```javascript
class BatchedWebSocketClient {
  constructor(websocket, batchSize = 50, batchInterval = 1000) {
    this.ws = websocket;
    this.batchSize = batchSize;
    this.batchInterval = batchInterval;
    this.messageBatch = [];
    this.batchTimer = null;
  }

  addMessageToBatch(message) {
    this.messageBatch.push(message);

    if (this.messageBatch.length >= this.batchSize) {
      this.processBatch();
    } else if (!this.batchTimer) {
      this.batchTimer = setTimeout(() => {
        this.processBatch();
      }, this.batchInterval);
    }
  }

  processBatch() {
    if (this.messageBatch.length > 0) {
      // Process all messages in batch
      this.messageBatch.forEach(message => {
        this.handleMessage(message);
      });

      this.messageBatch = [];
    }

    if (this.batchTimer) {
      clearTimeout(this.batchTimer);
      this.batchTimer = null;
    }
  }
}
```

### Connection Health Monitoring

```javascript
class WebSocketHealthMonitor {
  constructor(websocket, pingInterval = 30000) {
    this.ws = websocket;
    this.pingInterval = pingInterval;
    this.lastPong = Date.now();
    this.pingTimer = null;
    this.isHealthy = true;
  }

  startHealthMonitoring() {
    this.pingTimer = setInterval(() => {
      this.sendPing();
    }, this.pingInterval);

    // Setup pong handler
    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'pong') {
        this.lastPong = Date.now();
        this.isHealthy = true;
      }
    });
  }

  sendPing() {
    const now = Date.now();
    const timeSinceLastPong = now - this.lastPong;

    if (timeSinceLastPong > this.pingInterval * 2) {
      // Connection might be unhealthy
      this.isHealthy = false;
      this.handleUnhealthyConnection();
    } else {
      this.ws.send(JSON.stringify({
        type: 'ping',
        timestamp: now
      }));
    }
  }

  handleUnhealthyConnection() {
    console.warn('WebSocket connection appears unhealthy');
    // Trigger reconnection logic
    this.ws.close(1000, 'Health check failed');
  }

  stopHealthMonitoring() {
    if (this.pingTimer) {
      clearInterval(this.pingTimer);
      this.pingTimer = null;
    }
  }
}
```

## 🚨 Error Handling

### WebSocket Error Types

```typescript
interface WebSocketError {
  type: 'connection_error' | 'auth_error' | 'subscription_error' | 'message_error';
  code: string;
  message: string;
  details?: any;
  recoverable: boolean;
}

const errorHandlers = {
  connection_error: (error) => {
    console.error('Connection error:', error);
    // Attempt reconnection
  },

  auth_error: (error) => {
    console.error('Authentication error:', error);
    // Refresh token or redirect to login
  },

  subscription_error: (error) => {
    console.error('Subscription error:', error);
    // Retry subscription
  },

  message_error: (error) => {
    console.error('Message processing error:', error);
    // Log error and continue
  }
};
```

---

**WebSocket Documentation Version**: 1.0 | **Last Updated**: January 2025
**WebSocket URL**: wss://api.veridity.np/v1/ws | **Support**: websocket-support@veridity.np
**Protocol Version**: 1.0 | **Max Message Size**: 64KB
