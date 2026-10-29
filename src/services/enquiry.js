const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT || '/api/enquiry';

export async function submitEnquiry(data) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      sourcePage: window.location.href,
      submittedAt: new Date().toISOString(),
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Submission failed. Please try again.');
  }
  return res.json();
}
