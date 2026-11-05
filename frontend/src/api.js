const API_BASE_URL = "https://arkb.pythonanywhere.com/api";

export async function getProfile() {
  const response = await fetch(`${API_BASE_URL}/profile/`);

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
}

export async function getSkills() {
  const response = await fetch(`${API_BASE_URL}/skills/`);

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  return response.json();
}
export async function getProjects() {
  const response = await fetch(`${API_BASE_URL}/projects/`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}
export async function getExperience() {
  const response = await fetch(`${API_BASE_URL}/experience/`);

  if (!response.ok) {
    throw new Error("Failed to fetch experience");
  }

  return response.json();
}
export async function getCertifications() {
  const response = await fetch(`${API_BASE_URL}/certifications/`);

  if (!response.ok) {
    throw new Error("Failed to fetch certifications");
  }

  return response.json();
}
export async function sendContactMessage(data) {
  const response = await fetch(`${API_BASE_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
}
export async function getEducation() {
  const response = await fetch(`${API_BASE_URL}/education/`);

  if (!response.ok) {
    throw new Error("Failed to fetch education");
  }

  return response.json();
}
