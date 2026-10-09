/**
 * Minimal streamable-HTTP MCP server for the mcp-gate demo.
 * Based on the official TypeScript SDK hono example (examples/hono/server.ts).
 */
import { serve } from '@hono/node-server';
import { createMcpHonoApp } from '@modelcontextprotocol/hono';
import { createMcpHandler, McpServer } from '@modelcontextprotocol/server';
import * as z from 'zod/v4';

function buildServer(): McpServer {
    const server = new McpServer({ name: 'mcp-gate-demo', version: '1.0.0' });

    server.registerTool(
        'greet',
        {
            title: 'Greeting',
            description: 'Say hello to someone',
            inputSchema: z.object({ name: z.string() }),
        },
        async ({ name }) => ({
            content: [{ type: 'text', text: `Hello, ${name}!` }],
        }),
    );

    server.registerTool(
        'roll',
        {
            title: 'Dice roll',
            description: 'Roll a six-sided die',
            inputSchema: z.object({}),
        },
        async () => ({
            content: [{ type: 'text', text: String(1 + Math.floor(Math.random() * 6)) }],
        }),
    );

    return server;
}

const port = Number(process.env.PORT ?? 3000);
const handler = createMcpHandler(buildServer);
const app = createMcpHonoApp();
app.get('/health', (c) => c.json({ status: 'ok' }));
app.all('/mcp', (c) => handler.fetch(c.req.raw));

serve({ fetch: app.fetch, port }, () => {
    console.error(`[demo] listening on http://127.0.0.1:${port}/mcp`);
});
