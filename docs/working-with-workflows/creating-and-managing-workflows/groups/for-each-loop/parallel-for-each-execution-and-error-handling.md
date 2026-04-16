# Parallel For-Each Execution and Error Handling

This feature enhances **FOR-type groups** by providing configurable controls for:

* Parallel execution of iterations
* Error tolerance during iteration processing
* Output ordering when results are collected

These options allow fine-grained control over how iteration-based workflows behave under load and when failures occur.

***

## Error Tolerance

Error tolerance determines how iteration failures affect the execution of the remaining iterations.

### Continue on Error

When enabled, the group continues executing remaining iterations even if some iterations fail.

**Behavior**

* Iteration failures are recorded.
* Remaining iterations continue to run.
* Execution stops only if the configured error threshold is exceeded.

**Use cases**

* Processing large batches where some failures are acceptable.
* Data pipelines where individual record failures should not stop the entire workflow.

***

### Maximum Errors

Defines how many iteration failures are allowed before stopping execution.

**Behavior**

* Execution stops when the number of errors exceeds this limit.
* If set to `0`, errors are **unlimited** (when Continue on Error is enabled).

**Example**

| Configuration                            | Behavior                    |
| ---------------------------------------- | --------------------------- |
| Continue on Error = false                | First error stops execution |
| Continue on Error = true, Max Errors = 3 | Up to 3 iterations may fail |
| Continue on Error = true, Max Errors = 0 | Unlimited failures allowed  |

***

## Parallel Iteration Execution

FOR groups support running iterations in parallel to improve throughput when processing multiple items.

Parallel execution is activated when:

* Parallel iteration is enabled
* Parallel execution is not disabled
* More than one item exists in the iteration list

***

### Maximum Parallel Iterations

Defines the maximum number of iterations that may run simultaneously.

**Behavior**

* Limits concurrency to prevent excessive resource usage.
* Actual parallelism is determined by the smallest value among:
  * The number of items in the iteration list
  * The configured maximum parallel iterations
  * The system's global parallel iteration limit

**Example**

| Items | Configured Parallel Limit | Actual Parallel Execution |
| ----- | ------------------------- | ------------------------- |
| 10    | 5                         | 5                         |
| 3     | 5                         | 3                         |

***

## Disable Parallel Execution

Forces iterations to run **sequentially**, even when parallel execution is otherwise possible.

**Behavior**

* Iterations execute one after another.
* Useful when iteration steps depend on shared state or ordering.

**Typical scenarios**

* Iterations update the same external resource
* Strict processing order is required
* Debugging workflows

***

## Iteration Limit Protection

To prevent runaway execution or unexpected large workloads, the system validates the number of iterations before execution begins.

If the number of items exceeds the configured **maximum iteration limit**, execution fails immediately.

This safeguard helps protect system stability and resource consumption.

***

## Output Collection and Ordering

When a FOR group collects output from iterations, results may arrive out of order during parallel execution.

### Sort Accumulated Output

When enabled, the system sorts collected outputs to match the **original iteration order**.

**Behavior**

| Setting  | Result Order                                        |
| -------- | --------------------------------------------------- |
| Enabled  | Output order matches input iteration order          |
| Disabled | Output order reflects completion time of iterations |

**Recommendation**

Enable sorting when:

* Output order matters
* Results must align with the input list

Disable sorting when:

* Order is not important
* Slightly better performance is desired

***

## Parallel Execution Summary

| Feature                     | Purpose                                       |
| --------------------------- | --------------------------------------------- |
| Continue on Error           | Prevent failures from stopping all iterations |
| Maximum Errors              | Control acceptable failure threshold          |
| Disable Parallel Execution  | Force sequential iteration processing         |
| Maximum Parallel Iterations | Limit concurrent iteration execution          |
| Sort Accumulated Output     | Preserve original iteration order in outputs  |
