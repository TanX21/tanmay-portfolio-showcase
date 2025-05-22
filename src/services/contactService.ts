
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // This is a mock implementation for demonstration purposes
  // In a real app, you would send this data to a backend service
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted with data:', formData);
      resolve({
        success: true,
        message: 'Your message has been sent successfully!'
      });
    }, 1500);
  });
};
