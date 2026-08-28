import type { NextConfig } from "next";
import { withWorkflow } from "workflow/next";

delete process.env.VERCEL_DEPLOYMENT_ID;
delete process.env.VERCEL;
delete process.env.VERCEL_ENV;
delete process.env.VERCEL_URL;
delete process.env.VERCEL_PROJECT_ID;

process.env.WORKFLOW_TARGET_WORLD = "@open-workflow/world-redis";
process.env.WORKFLOW_NEXT_LAZY_DISCOVERY = "0";

if (!process.env.WORKFLOW_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_URL) {
  process.env.WORKFLOW_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
}
if (!process.env.WORKFLOW_REDIS_REST_TOKEN && process.env.UPSTASH_REDIS_REST_TOKEN) {
  process.env.WORKFLOW_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
}

process.env.WORKFLOW_BASE_URL ||=
  process.env.APP_BASE_URL || `http://localhost:${process.env.PORT ?? 3000}`;

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: true },
  serverExternalPackages: ["@open-workflow/world-redis"],
};

export default withWorkflow(nextConfig);
