---
title: NxAgent - User Guide
---


> **NxAgent** is Koodisi's built-in AI assistant. Tell it what you want to build, investigate, or understand — it handles the rest. Chat. Design. Build.

---

### Overview <a href="#user-content-overview" id="user-content-overview"></a>

**NxAgent** is an AI-powered assistant embedded directly into the Koodisi workspace. You can ask it questions, instruct it to build workflows, generate schemas, or investigate integration issues — all without leaving your canvas.

With NxAgent, you can:

- **Ask** questions about your applications, workflows, and schemas in plain language.
- **Design** new workflows and schemas by describing what you need in natural language.
- **Triage** integration health by querying live metrics and performance patterns.
- **Attach context** from your existing resources to make responses precise and relevant.

#### Key Concepts <a href="#user-content-key-concepts" id="user-content-key-concepts"></a>

| Term               | What it means                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| **Chat Mode**      | Controls NxAgent's focus: **Ask** (Q\&A), **Design** (generation), or **Triage** (monitoring).      |
| **Response Style** | Controls tone and depth: Concise, Learning, Explanatory, or Formal.                                 |
| **Context**        | Existing workflows or schemas you attach to inform NxAgent's response.                              |
| **Skill**          | A knowledge file (`.md` or `.zip`) uploaded by your org admin to extend NxAgent's domain awareness. |
| **Thread**         | A single conversation session. Each new thread starts fresh with no prior history.                  |

---

### Benefits <a href="#user-content-benefits" id="user-content-benefits"></a>

Here is how **NxAgent** improves your day-to-day work:

- **Speed up design**: Instead of manually building workflow logic node by node, describe what you want and NxAgent drafts it instantly.
- **Get instant answers**: Instead of searching docs or asking colleagues, ask NxAgent directly about your specific workflows and configurations.
- **Diagnose faster**: Instead of manually scanning logs and metrics, Triage mode surfaces the most important issues in plain language.
- **Personalized depth**: Instead of one-size-fits-all answers, select a response style that matches your level of expertise or the situation.

---

### Step-by-Step Guide <a href="#user-content-step-by-step-guide" id="user-content-step-by-step-guide"></a>

#### Task 1: Opening NxAgent <a href="#user-content-task-1-opening-nxagent" id="user-content-task-1-opening-nxagent"></a>

**Goal**: Access the NxAgent chat panel from anywhere in the workspace.

**Steps**:

1. From any application workspace, locate the **Chat With AI** panel on the right-hand sidebar.
2. Alternatively, if you see the **"Chat. Design. Build."** card on a landing screen, click **Try NxAgent →**.
3. The **Chat With AI** panel opens, showing the empty-state screen with suggested example prompts.

**Result**: NxAgent is open and ready for your first message. ✨

---

#### Task 2: Choosing a Chat Mode (Ask, Design, Triage) <a href="#user-content-task-2-choosing-a-chat-mode-ask-design-triage" id="user-content-task-2-choosing-a-chat-mode-ask-design-triage"></a>

**Goal**: Select the right mode for your task before starting a conversation.

NxAgent has three modes. Select from the **mode dropdown** in the bottom-left of the input bar.

| Mode       | Best for                                                                       | Example prompts                                                              |
| ---------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **Ask**    | Questions about existing workflows, schemas, errors, and configurations.       | _"Explain this workflow."_ / _"Why is this mapper step failing?"_            |
| **Design** | Generating brand-new workflows and schemas from a description.                 | _"Create a workflow that processes webhooks and stores data in a database."_ |
| **Triage** | Investigating operational health, metrics, and recurring integration problems. | _"Are there any critical issues right now?"_                                 |

**Steps**:

1. Click the **mode dropdown** in the bottom-left of the input bar (shows current mode, e.g. **Ask**).
2. Select **Ask**, **Design**, or **Triage**.

> **Important**: The mode is locked once you send the first message in a thread. To switch modes, click **+ (New Thread)** in the panel header.

**Result**: NxAgent is configured to respond according to the selected mode.

---

#### Task 3: Setting a Response Style <a href="#user-content-task-3-setting-a-response-style" id="user-content-task-3-setting-a-response-style"></a>

**Goal**: Control how NxAgent explains its answers.

**Steps**:

1. Click the **pen icon (✏)** in the input toolbar.
2. Choose from the four available styles:

| Style                 | Best for                                                                 |
| --------------------- | ------------------------------------------------------------------------ |
| **Concise (Default)** | Fast, direct answers. Best for experienced users.                        |
| **Learning**          | Includes reasoning and context. Best for understanding new concepts.     |
| **Explanatory**       | Detailed, structured breakdowns. Best for deep dives or sharing outputs. |
| **Formal**            | Professional tone. Best for stakeholder-facing outputs.                  |

3. The checkmark indicates the active selection.

**Result**: All responses in the current thread will use the selected style.

---

#### Task 4: Adding Context to a Prompt <a href="#user-content-task-4-adding-context-to-a-prompt" id="user-content-task-4-adding-context-to-a-prompt"></a>

**Goal**: Attach an existing workflow or schema so NxAgent answers specifically about your data.

**What you need**: An existing workflow or schema in your application.

**Steps**:

1. In the input bar, click the **attachment icon (📎)**, or drag and drop a workflow or schema from the left-hand sidebar directly into the chat input area.
2. A context tag showing the resource name appears above the text input.
3. To remove a context item, click the **✕** on its tag.
4. Type your prompt and send.

> **Note**: Context can only be added before the first message in a thread. Once a conversation starts, the context is locked.

**Result**: NxAgent references your attached resource to give a specific, targeted answer.

---

#### Task 5: Sending a Message and Reading Responses <a href="#user-content-task-5-sending-a-message-and-reading-responses" id="user-content-task-5-sending-a-message-and-reading-responses"></a>

**Goal**: Send a prompt and understand the types of responses NxAgent can return.

**Steps**:

1. Type your query in the **"Ask NxAgent..."** input field, or click an **example prompt chip** to pre-fill it (e.g., _"Explain this workflow"_, _"Add error handling"_).
2. Press **Enter** or click the **send arrow (→)** button.
3. NxAgent processes your message. Responses take several forms:

| Response Type       | What you see                                                        | Available action                                         |
| ------------------- | ------------------------------------------------------------------- | -------------------------------------------------------- |
| **Text / Markdown** | Structured text with formatting, lists, or tables.                  | Read and copy.                                           |
| **Workflow**        | A visual preview of a generated workflow node graph.                | Click **Accept** to add it to your canvas.               |
| **Schema**          | A structured JSON schema preview.                                   | Click **Accept** to import it into your Schema Registry. |
| **Chart (Triage)**  | An inline bar, line, area, or pie chart alongside written analysis. | Review; maximize the panel for a larger view.            |

4. After a response, you can:
   - Type a **follow-up message** to continue the conversation.
   - **Edit a past message** by hovering over it and clicking the edit icon — the conversation resets to that point.
   - **Provide feedback** with thumbs up/down below any response.
   - **Re-run a query** using the refresh option in the feedback panel.

**Result**: You receive a targeted answer, generated artifact, or operational insight from NxAgent.

---

#### Task 6: Managing Conversation History <a href="#user-content-task-6-managing-conversation-history" id="user-content-task-6-managing-conversation-history"></a>

**Goal**: Browse past conversations or start a clean new thread.

**To start a new thread**:

1. Click the **+ (New Thread) icon** in the panel header.
2. The panel resets. Prior conversations are saved and accessible from History.

**To browse past conversations**:

1. Click the **History icon (clock)** in the panel header.
2. A list of past chat sessions is shown.
3. Click any session to reload it and continue from where you left off.

**To maximize the panel**:

- Click the **expand icon** in the header. Especially useful for reviewing Triage charts or long workflow previews.

**Result**: You can manage multiple conversations and revisit AI outputs at any time.

---

### Troubleshooting & FAQs <a href="#user-content-troubleshooting--faqs" id="user-content-troubleshooting--faqs"></a>

#### Common Issues <a href="#user-content-common-issues" id="user-content-common-issues"></a>

**Problem: NxAgent gives generic answers, not specific to my workflow.**

- _Solution_: Attach your workflow or schema as context before sending. Drag it from the left panel directly into the chat input area.

**Problem: The mode dropdown is greyed out.**

- _Solution_: The mode locks once a conversation starts. Click **+ (New Thread)** and choose your mode before sending the first message.

**Problem: There is no "Accept" button after a response.**

- _Solution_: The Accept button only appears for workflow or schema generation responses. Text answers do not have an Accept action.

**Problem: Triage mode is not reflecting real-time data.**

- _Solution_: Check the **environment selector** in the input bar. Ensure you have selected the correct environment (**Development** or **Production**).

#### Frequently Asked Questions <a href="#user-content-frequently-asked-questions" id="user-content-frequently-asked-questions"></a>

**Q: Can NxAgent access a specific application's data?** A: Yes. Use the application context selector (top-right of the panel) to switch between applications, and attach specific workflows or schemas as context before prompting.

**Q: Are my conversations saved?** A: Yes. All threads are saved automatically and accessible from the History panel (clock icon in the header).

**Q: Can I edit a message I already sent?** A: Yes. Hover over any past message and click the **edit icon**. The conversation rolls back to that point so you can revise and resend.

**Q: How do I make NxAgent aware of my organization's internal systems?** A: Your Organization Administrator can upload **AI Skills** under **Settings → Organization → AI Skills**. See the&#x20;

![](https://vscode-file/vscode-app/Applications/Antigravity.app/Contents/Resources/app/extensions/theme-symbols/src/icons/files/markdown.svg)

NxAgent AI Skills Guide for details.

---

**Last Updated**: March 2026 **Maintained By**: Koodisi Support Team
