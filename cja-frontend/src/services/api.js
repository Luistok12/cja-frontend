const API_URL = "http://localhost:8080/api";

export async function getRepuestos() {
  const res = await fetch(`${API_URL}/repuestos`);
  return res.json();
}