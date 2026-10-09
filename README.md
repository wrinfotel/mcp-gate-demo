# mcp-gate demo

Demo repository for **[mcp-gate](https://github.com/wrinfotel/mcp-gate)** — a GitHub Action that runs the official [MCP conformance suite](https://github.com/modelcontextprotocol/conformance) in CI.

[![MCP](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwrinfotel%2Fmcp-gate-demo%2Fbadge%2Fbadge.json)](https://github.com/wrinfotel/mcp-gate-demo/actions)

This repo is a tiny MCP server (two tools: `greet` and `roll`) with `wrinfotel/mcp-gate@v0.1` wired into CI. On every push and PR you get:

- a **PR report comment** with failing checks linked to the spec scenario
- **scenario coverage** against frozen requirement sets
- the **compliance badge** above (published to the `badge` branch)

The whole integration lives in [.github/workflows/ci.yml](.github/workflows/ci.yml) — three lines of Action config on top of a normal "install and start the server" job.
