# mcp-gate demo

Demo repository for **[mcp-gate](https://github.com/wrinfotel/mcp-gate)** — a GitHub Action that runs the official [MCP conformance suite](https://github.com/modelcontextprotocol/conformance) in CI.

[![MCP](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwrinfotel%2Fmcp-gate-demo%2Fbadge%2Fbadge.json)](https://github.com/wrinfotel/mcp-gate-demo/actions)

This repo is a **full-coverage reference MCP server** (tools, resources, prompts, completion, logging, caching, elicitation, sampling, roots) with `wrinfotel/mcp-gate@v0.1` wired into CI. On every push and PR you get:

- a **PR report comment** with failing checks linked to the spec scenario
- **scenario coverage** against frozen requirement sets
- the **compliance badge** above (published to the `badge` branch) — currently **100% compliant · Tier 1**, all scored scenarios green

Draft-spec `tasks-*` extension scenarios (SEP-1686) are intentionally out of scope — they are not scored by the runner.

The whole integration lives in [.github/workflows/ci.yml](.github/workflows/ci.yml) — three lines of Action config on top of a normal "install and start the server" job.
A closed [PR #1](https://github.com/wrinfotel/mcp-gate-demo/pull/1) shows the live report comment posted by the Action.
