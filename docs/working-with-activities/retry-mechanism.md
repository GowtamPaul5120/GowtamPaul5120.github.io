---
title: Retry Mechanism
---


### Overview

The retry mechanism automatically retries failed operations with exponential backoff and jitter. It's used with activities like RESTClient and SFTP to handle temporary failures gracefully.

### Configuration

#### Default Settings

| Parameter     | Default | Description                            |
| ------------- | ------- | -------------------------------------- |
| `maxAttempts` | 3       | Maximum retry attempts (hard limit: 3) |
| `delay`       | 3000ms  | Base delay between retries             |
| `maxDelay`    | 10000ms | Maximum delay cap                      |
| `maxJitter`   | 500ms   | Random jitter added to delay           |

#### Delay Calculation

Uses exponential backoff with jitter:

```
delay = min(maxDelay, baseDelay × 2^attempt) + random(0, maxJitter)
```

**Example with defaults:**

* 1st retry: \~3.0-3.5s
* 2nd retry: \~6.0-6.5s
* 3rd retry: \~10.0-10.5s

### Usage

#### Using Default Configuration

Activities like RESTClient and SFTP use the default retry policy automatically.

#### Overriding with Custom Retry Resource

Create a RetryPolicy resource and reference it in your activity:

```json
{

  "maxAttempts": 2,
  "delay": 5000,
  "maxDelay": 15000,
  "maxJitter": 1000
}
```

### Smart Retry Logic

#### What Gets Retried

✅ **Retryable** (by default):

* Network timeouts
* Service unavailable (503)
* Temporary server errors (500, 502, 504)
* Connection failures

❌ **Not Retryable** (by default):

* Client errors (400, 401, 403, 404)
* Validation errors
* Authentication failures

#### Decision Order

1. Hardcoded non-retryable (CLIENT\_ERROR, NOT\_FOUND) → Don't retry
2. Error code blacklist → Don't retry
3. Error code whitelist → Retry
4. Category blacklist → Don't retry
5. Category whitelist → Retry
6. Category default behavior

### Common Examples

#### Quick Retries (Fast Services)

```json
{
  "maxAttempts": 2,
  "delay": 1000,
  "maxDelay": 3000,
  "maxJitter": 200
}
```

#### Patient Retries (Slow Services)

```json
{
  "maxAttempts": 3,
  "delay": 5000,
  "maxDelay": 20000,
  "maxJitter": 1000
}
```

### Best Practices

* ✅ Start with default settings for most cases
* ✅ Increase delays for slow/unstable services
* ✅ Monitor retry rates to detect systemic issues
* ❌ Don't retry validation errors (fix the input instead)
* ❌ Don't set maxAttempts > 5 (enforced limit)
* ❌ Don't use very short delays (< 1000ms)

### Troubleshooting

| Issue                | Solution                        |
| -------------------- | ------------------------------- |
| Retries too fast     | Increase `delay` and `maxDelay` |
| Workflow too slow    | Reduce `maxAttempts` or `delay` |
| Wrong errors retried | Use `nonRetryableErrorCodes`    |
| Missing retries      | Use `retryableErrorCodes`       |
