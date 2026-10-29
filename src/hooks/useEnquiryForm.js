import { useState, useCallback } from 'react';
import { submitEnquiry } from '../services/enquiry';

const INITIAL = {
  name: '', company: '', email: '', phone: '',
  service: '', budget: '', timeline: '', description: '',
  contactPreference: '', consent: false,
};

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Full name is required.';
  if (!f.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email is required.';
  if (!f.phone.match(/^\+?[\d\s\-()]{7,15}$/)) e.phone = 'Valid phone number is required.';
  if (!f.service) e.service = 'Please select a service.';
  if (!f.description.trim()) e.description = 'Project description is required.';
  if (!f.consent) e.consent = 'Please accept the privacy policy.';
  return e;
}

export function useEnquiryForm(onSuccess) {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFields(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    setServerError('');
    try {
      await submitEnquiry(fields);
      setStatus('success');
      setFields(INITIAL);
      onSuccess?.();
    } catch (err) {
      setStatus('error');
      setServerError(err.message);
    }
  }, [fields, onSuccess]);

  const reset = useCallback(() => {
    setStatus('idle');
    setServerError('');
    setErrors({});
  }, []);

  return { fields, errors, status, serverError, handleChange, handleSubmit, reset };
}
