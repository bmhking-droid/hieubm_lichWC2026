import { kv } from "@vercel/kv";

export default async function handler(request, response) {
  try {
    const results = (await kv.get("wcMatchResults")) || {};

    return response.status(200).json(results);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
