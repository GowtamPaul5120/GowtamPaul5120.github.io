# Batch Integration vs Messaging Integration

### Introduction

When connecting systems in an enterprise — whether syncing customer data between a CRM and a billing system, processing incoming orders, or importing files from a partner — there is a fundamental choice in how data moves:

* **Batch Integration** — Collect data, group it together, and process it all at once on a schedule.
* **Messaging (Event-Driven) Integration** — Process data immediately, one item at a time, as soon as something happens.

Both patterns are fully supported on this platform. Understanding when to use each one is the key to building integrations that are reliable, efficient, and fit for purpose.

This guide explains both patterns in plain terms, highlights when to use each, and shows how they can work together.

***

### Batch Integration

#### What Is It?

Batch integration is like processing a stack of mail at the end of the day instead of opening each letter the moment it arrives. You collect records into a group, then process them together in a controlled manner.

#### How Does It Work?

A batch integration follows a predictable lifecycle:

```
Collect Records → Create a Batch → Process in Chunks → Track Results → Complete & Clean Up
```

**Step by step:**

1. **Collect** — Gather records from a source (file, database, API).
2. **Create a Batch** — Register the group with a unique ID, set a processing limit (e.g., "process 10 records at a time"), and set an expiry window (e.g., "auto-cleanup after 8 hours").
3. **Process in Chunks** — Pull the next set of records, process them through workflow steps (API calls, database writes, transformations), and mark each as done.
4. **Track Results** — Every record is individually tracked: `pending`, `processing`, `succeeded`, or `failed`. Failed records can be retried without reprocessing the entire batch.
5. **Complete and Clean Up** — Once all records are processed, the batch is closed. If not explicitly closed, it automatically expires after the configured time window.

#### What Triggers a Batch?

| Trigger             | Example                                                |
| ------------------- | ------------------------------------------------------ |
| Time-based schedule | "Run every night at 2:00 AM" or "Run every 30 minutes" |
| File arrival        | A partner drops a CSV file on an SFTP server           |
| Manual invocation   | An operator kicks off a data migration                 |
| Cron expression     | "Every weekday at 6 PM EST"                            |

#### Where Does the Data Come From?

| Source                             | Example                                              |
| ---------------------------------- | ---------------------------------------------------- |
| File transfer (SFTP, blob storage) | CSV product catalog from a supplier                  |
| Database query                     | All orders modified in the last 24 hours             |
| Paginated API                      | Pulling 10,000 customer records across 100 API pages |
| Cloud storage (Azure Blob, AWS S3) | Daily transaction export files                       |

#### Key Characteristics

| Characteristic   | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| When it runs     | On a schedule or on demand — not instantly                         |
| How much data    | Large volumes — hundreds to millions of records                    |
| Speed            | Minutes to hours, depending on volume                              |
| Record tracking  | Each record is tracked individually (success/fail)                 |
| Retry capability | Failed records can be retried without reprocessing the whole batch |
| Resource control | Processing limit controls how many records are handled at once     |

#### Advantages

* Handles large data volumes efficiently
* Protects downstream systems from overload (controlled processing rate)
* Individual record tracking — know exactly what succeeded and what failed
* Failed records can be retried selectively
* Automatic cleanup prevents leftover data from piling up
* Well-suited for scheduled, predictable workloads

#### Limitations

* Not suitable when you need instant results
* Adds design complexity (batch lifecycle must be managed)
* Data is only as fresh as the last schedule run
* Requires shared state storage (Redis) for distributed coordination

#### Common Use Cases

| Use Case                 | Description                                                           |
| ------------------------ | --------------------------------------------------------------------- |
| Nightly data sync        | Sync all updated customer records from CRM to billing every night     |
| File-based partner feeds | Process a daily inventory file from a supplier                        |
| Data migration           | Move 500,000 records from a legacy system to a new platform           |
| Reconciliation           | Compare two datasets and fix mismatches in controlled batches         |
| Bulk API updates         | Push product price changes to an e-commerce platform in batches of 50 |
| Report generation        | Aggregate daily transactions into a summary report                    |

***

### Messaging / Event-Driven Integration

#### What Is It?

Event-driven integration is like answering the phone every time it rings. As soon as something happens — an order is placed, a webhook fires, a message arrives on a queue — the platform reacts immediately and processes it.

#### How Does It Work?

```
Something Happens (Event) → Platform Receives the Event → Workflow Executes Steps → Acknowledge Completion
```

**Step by step:**

1. **An event occurs** — A message arrives on a queue, a webhook is called, a file appears, or an API request comes in.
2. **The platform receives it** — A listener (called an "Event Source") picks up the event.
3. **A workflow executes** — The event triggers a workflow that processes it through a series of steps (call an API, write to a database, send a notification, etc.).
4. **Acknowledgment** — Once the workflow completes, the event is acknowledged (confirmed as processed). If something goes wrong, the message can be retried or sent to a dead-letter queue for investigation.

#### What Can Trigger an Event?

| Event Source         | How It Works                                                                   |
| -------------------- | ------------------------------------------------------------------------------ |
| Message Queue        | A message arrives on Azure Service Bus queue or JMS queue                      |
| Topic / Subscription | A message is published to a topic; all subscribers receive it                  |
| Webhook              | An external system sends an HTTP POST to your endpoint                         |
| REST API Call        | A client makes an API request that triggers a workflow                         |
| File System Watch    | A new file appears in a monitored directory                                    |
| Schedule             | A timer fires at a configured interval (this bridges into batch-like behavior) |

#### Key Characteristics

| Characteristic      | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| When it runs        | Immediately, when the event occurs                                    |
| How much data       | One record at a time (per event)                                      |
| Speed               | Milliseconds to seconds                                               |
| Coupling            | Loose — the event producer does not need to know about the consumer   |
| Delivery guarantees | At-least-once delivery with acknowledgment, retry, and dead-lettering |
| Security            | Webhook signature verification (HMAC, certificate-based)              |

#### Advantages

* Immediate response — no waiting for a schedule window
* Loose coupling between systems — change one side without breaking the other
* Scales naturally — add more listeners to handle more load
* Built-in reliability — message retry, dead-lettering, and fallout handling
* Supports fan-out — one event can trigger multiple independent workflows
* Full observability — each event is traced end-to-end

#### Limitations

* Not efficient for processing large volumes at once (each event has overhead)
* Message ordering is not guaranteed unless explicitly configured (e.g., sessions)
* Requires message broker infrastructure
* Bursts of events can overwhelm downstream systems without flow control
* Failure handling (dead-letters, retries, timeouts) needs careful configuration

#### Common Use Cases

| Use Case                         | Description                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| Real-time order processing       | Process each order the moment it is placed                                           |
| Webhook integrations             | Receive and process callbacks from payment providers, CRMs, or notification services |
| API mediation                    | Expose an API endpoint that triggers a multi-step workflow and returns a response    |
| Inter-system event routing       | When System A updates a record, notify Systems B, C, and D in real time              |
| File-triggered processing        | When a file lands in a directory, immediately parse and process it                   |
| Alert and notification workflows | Trigger an alert workflow the moment a threshold is crossed                          |

***

### Key Differences at a Glance

| Dimension                 | Batch                                                 | Messaging (Event-Driven)                                     |
| ------------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| When does it run?         | On a schedule or on demand                            | Immediately when an event occurs                             |
| What triggers it?         | Timer, cron job, manual trigger                       | Message, webhook, API call, file event                       |
| How much data?            | Large volumes (hundreds to millions)                  | One record per event                                         |
| How fast?                 | Minutes to hours                                      | Milliseconds to seconds                                      |
| How tightly coupled?      | Moderately coupled to source availability             | Loosely coupled through brokers/endpoints                    |
| How does it scale?        | Control processing rate within a batch                | Add more listeners to handle more events                     |
| How are failures handled? | Retry individual failed records within the batch      | Retry message delivery; dead-letter on repeated failure      |
| How complex to set up?    | Moderate — batch lifecycle must be designed           | Lower per-event — but broker and acknowledgment setup needed |
| Best for                  | Bulk sync, file processing, migration, reconciliation | Real-time processing, webhooks, API mediation, notifications |

***

### When to Use Each Pattern

#### Use Batch When...

* You are moving large volumes of data between systems
* The business process is naturally periodic (daily, hourly, weekly)
* You need to protect downstream systems from being overwhelmed
* You need to track and retry individual records within a larger job
* The data comes from files, database exports, or paginated APIs
* A delay of minutes or hours is acceptable

#### Use Messaging When...

* The business needs the data processed within seconds
* An external system pushes data to you (webhooks, queue messages)
* You need to decouple the sender from the receiver
* Multiple systems need to react to the same event
* You are building an API endpoint that triggers a workflow
* The data arrives as individual items, not bulk files

#### Use Both (Hybrid) When...

* You collect data in bulk but need to process each record in real time
* A batch completion should notify another system immediately
* Events arrive one at a time but should be accumulated and processed together once a threshold is reached

***

### Hybrid: Using Both Patterns Together

Most real-world enterprise integrations are not purely batch or purely event-driven. This platform is designed to let you combine both patterns seamlessly.

#### Pattern 1: Batch Collection → Event-Driven Processing

```
BATCH SIDE                                EVENT SIDE
─────────────────────────                 ─────────────────────────
Scheduled Workflow                        Processing Workflow

1. Query source                           4. Receive record
2. Create batch            ── message ──► 5. Call API
3. For each record,           per record  6. Update DB
   send to queue                          7. Mark done
```

**Example:** Every night, a scheduled workflow queries all new orders from a database and creates a batch. For each order, a message is sent to a queue. A separate event-driven workflow picks up each message and processes the order in real time — calling an API, updating a status, and sending a confirmation.

#### Pattern 2: Event-Driven Collection → Batch Processing

```
EVENT SIDE                                BATCH SIDE
─────────────────────────                 ─────────────────────────
Webhook Workflow                          Scheduled Workflow

1. Receive event                          4. Iterate batch
2. Validate               ── add ──►     5. Process chunk
3. Add to batch               to batch   6. Track results
                                          7. Retry failures
```

**Example:** Webhooks arrive throughout the day from a partner system. Each webhook adds a record to a batch. Every hour, a scheduled workflow iterates through the accumulated batch, processing records in controlled chunks against a rate-limited downstream API.

#### Pattern 3: Auto-Processing (Built-In Hybrid)

The platform supports auto-processing configuration on batches. When records are added and a threshold is met (e.g., batch initialized, records added), the platform can automatically dispatch records to a processing workflow via a message queue — without manual intervention.

This is the simplest way to combine both patterns: configure it once, and the platform handles the handoff.

***

### Quick Decision Guide

Ask yourself these questions in order:

> **Q1:** Does the source produce data in large, periodic batches (files, database dumps, bulk API exports)?
>
> * **YES** → Batch Integration
> * **NO** → Continue to Q2

> **Q2:** Does the business need the data processed within seconds?
>
> * **YES** → Messaging / Event-Driven Integration
> * **NO** → Continue to Q3

> **Q3:** Does the data arrive one item at a time from an external system (webhooks, queue messages, API calls)?
>
> * **YES** → Messaging / Event-Driven Integration
> * **NO** → Continue to Q4

> **Q4:** Do multiple systems need to react to the same data?
>
> * **YES** → Messaging (Topic/Subscription fan-out)
> * **NO** → Continue to Q5

> **Q5:** Is throughput more important than speed?
>
> * **YES** → Batch Integration
> * **NO** → Messaging / Event-Driven Integration

***

### Summary

|                    | Batch                                                        | Messaging                                     |
| ------------------ | ------------------------------------------------------------ | --------------------------------------------- |
| **Think of it as** | Processing a stack of forms at end of day                    | Answering each phone call as it rings         |
| **Best for**       | Large volumes, scheduled jobs, file imports                  | Real-time events, webhooks, instant reactions |
| **Speed**          | Minutes to hours                                             | Seconds                                       |
| **Tracking**       | Per-record within a batch                                    | Per-event with acknowledgment                 |
| **Combined**       | Both patterns work together for complex enterprise scenarios |                                               |

The right choice depends on your business requirement. If the question is _"how fast does this need to happen?"_, the answer usually points you to the right pattern. When in doubt, start simple and evolve — **batch for predictable bulk work, event-driven for anything that needs to happen now**.
