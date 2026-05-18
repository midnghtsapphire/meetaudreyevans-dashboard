# GoHighLevel Research Baseline

This document captures implementation-ready baseline guidance for aligning the dashboard with GoHighLevel-style CRM and automation workflows.

## Canonical Documentation Sources
Last verified: 2026-05-18 (API V2 public docs and public feedback board URLs)
- GoHighLevel API docs: https://marketplace.gohighlevel.com/docs/
- Official API repository/spec references: https://github.com/GoHighLevel/highlevel-api-docs
- Product feedback board (market signal source): https://ideas.gohighlevel.com/

## Core Objects + Baseline Field Contract
Field names below reflect current GoHighLevel-style API naming conventions for external integration payloads (not renamed internal aliases).

### Contact
- Required baseline: at least one of `email` or `phone` must be present (inclusive OR)
- Common fields: `firstName`, `lastName`, `email`, `phone`, `companyName`, `tags`, `customFields[]`, `source`

### Opportunity
- Required baseline: `name`, `pipelineId`, `stageId`
- Common fields: `contactId`, `status`, `value`, `estimatedCloseDate`, `assignedTo`, `tags`

### Conversation
- Required baseline: `contactId`, outbound message payload
- Common fields: `channelType`, `direction`, `status`, `createdAt`, `attachments[]`

### Task
- Required baseline: `title`, `dueDate`
- Common fields: `description`, `assignedTo`, `status`, `priority`, `contactId`, `opportunityId`

### Workflow Automation
- Required baseline: `name`, `triggers[]`, `actions[]`
- Common fields: `description`, `active`, `filters`, `timingRules`

## Chatter-Derived Demand Signals (Public Community Themes)
Top recurring demand signals from public community chatter and feedback portals:
1. Better dashboard KPI customization and role-specific views
2. More understandable workflow automation setup
3. Stronger pipeline stage flexibility and reporting depth
4. Cleaner analytics attribution from campaigns to revenue outcomes
5. Faster onboarding templates for agencies and creator operators

## Integration Structure Baseline for This Repository
Recommended code structure for future GoHighLevel implementation work:
- `src/lib/integrations/gohighlevel/client.ts` (API client/auth wrapper)
- `src/lib/integrations/gohighlevel/mappers.ts` (dashboard → GHL object mappers)
- `src/lib/integrations/gohighlevel/schemas.ts` (field contracts + validation)
- `src/lib/integrations/gohighlevel/sync.ts` (sync orchestration + retries)
- `src/lib/integrations/gohighlevel/types.ts` (strict typed objects)

## Ship-to-Market Baseline Acceptance
- [x] Canonical docs and feedback sources recorded
- [x] Core object field contract captured
- [x] Demand-signal summary captured
- [x] Integration code structure baseline defined
- [x] Validation tooling checks this document exists
