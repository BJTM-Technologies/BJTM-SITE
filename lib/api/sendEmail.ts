interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    }


export async function sendContactForm(data: ContactFormData) {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
  
    return await response.json();
  }
  