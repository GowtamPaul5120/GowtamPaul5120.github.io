---
title: "CSV Format"
sidebar_position: 1
---


The **CSV Format** activity formats data into CSV structure.

## Configuring the CSV Format Activity

To configure the **CSV Format** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Column Definitions | Required | Define CSV columns. Mark _key for unique identification. Use upload to import from a sample. |  |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Start Row | Optional | Row number to start reading from (1-based). | Starting Row Number |
| Quote Char | Optional | Character to enclose field values. NONE disables quoting Options: Single Quote, Double Quote, NONE. | Quote Character |
| Column Separator | Optional | Delimiter between columns Options: Comma, Pipe, Tab. | Provide Column Separator |
| Array Element Separator | Optional | Character separating elements within an array field Options: Comma, Pipe, Semicolon. | Array Element Separator |
| Line Separator | Optional | Line ending format. LF for Unix/Mac, CRLF for Windows Options: Line Feed (\n), Carriage Return + Line Feed (\r\n). | Line Separator |
| Null Value | Optional | String representation of null values (e.g., empty string, 'NULL'). | Null Value |
| Has Header | Optional | Input has a header row with column names. |  |
| Skip First Data Row | Optional | Skip the first data row after the header. |  |
| Strict Headers | Optional | Column headers must exactly match the defined column names. |  |
