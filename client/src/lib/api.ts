const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function apiGet(endpoint: string) {
  const response = await fetch(`${API_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  return response.json();
}

export async function apiPost(endpoint: string, data: any) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let errorMessage = response.statusText;
    try {
      const errorData = await response.json();
      if (errorData.message) errorMessage = errorData.message;
    } catch (e) {
      // Ignore json parse error
    }
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function checkHealth() {
  try {
    const data = await apiGet("/health");
    return data;
  } catch (error) {
    console.warn("Health check failed:", error);
    return null;
  }
}
