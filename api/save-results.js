import { kv } from "@vercel/kv";

export default async function handler(request, response) {
  // Cấu hình CORS để Frontend gọi an toàn
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }

  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Đảm bảo dữ liệu được parse thành Object đúng chuẩn
    let newResults = request.body;
    if (typeof newResults === "string") {
      newResults = JSON.parse(newResults);
    }

    // Ghi đè vào Vercel KV
    await kv.set("wcMatchResults", newResults);

    return response.status(200).json({ success: true });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
