import { CheckCircle, Loader2 } from 'lucide-react';
import { useEnquiryForm } from '../hooks/useEnquiryForm';
import { services } from '../data/services';
import styles from './EnquiryForm.module.css';

const BUDGETS = ['Under ₹10,000', '₹10,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', 'Above ₹1,00,000'];
const TIMELINES = ['ASAP', '1–2 Weeks', '1 Month', '2–3 Months', 'Flexible'];
const CONTACTS = ['Email', 'Phone', 'WhatsApp', 'Telegram'];

export default function EnquiryForm({ onSuccess }) {
  const { fields, errors, status, serverError, handleChange, handleSubmit } = useEnquiryForm(onSuccess);

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <CheckCircle size={48} color="#10b981" />
        <h3>Enquiry Submitted!</h3>
        <p>Thank you! We'll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <Field label="Full Name *" error={errors.name}>
          <input name="name" value={fields.name} onChange={handleChange} placeholder="Your full name" />
        </Field>
        <Field label="Company Name" error={errors.company}>
          <input name="company" value={fields.company} onChange={handleChange} placeholder="Optional" />
        </Field>
      </div>
      <div className={styles.row}>
        <Field label="Email Address *" error={errors.email}>
          <input name="email" type="email" value={fields.email} onChange={handleChange} placeholder="you@example.com" />
        </Field>
        <Field label="Mobile Number *" error={errors.phone}>
          <input name="phone" type="tel" value={fields.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
        </Field>
      </div>
      <div className={styles.row}>
        <Field label="Service Required *" error={errors.service}>
          <select name="service" value={fields.service} onChange={handleChange}>
            <option value="">Select a service</option>
            {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
          </select>
        </Field>
        <Field label="Project Budget" error={errors.budget}>
          <select name="budget" value={fields.budget} onChange={handleChange}>
            <option value="">Select budget range</option>
            {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </Field>
      </div>
      <div className={styles.row}>
        <Field label="Project Timeline" error={errors.timeline}>
          <select name="timeline" value={fields.timeline} onChange={handleChange}>
            <option value="">Select timeline</option>
            {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Preferred Contact Method" error={errors.contactPreference}>
          <select name="contactPreference" value={fields.contactPreference} onChange={handleChange}>
            <option value="">Select preference</option>
            {CONTACTS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Project Description *" error={errors.description}>
        <textarea name="description" value={fields.description} onChange={handleChange} rows={4} placeholder="Describe your project, goals and any specific requirements..." />
      </Field>
      <Field error={errors.consent}>
        <label className={styles.checkLabel}>
          <input type="checkbox" name="consent" checked={fields.consent} onChange={handleChange} />
          I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to being contacted about my enquiry.
        </label>
      </Field>
      {serverError && <p className={styles.serverError}>{serverError}</p>}
      <button type="submit" className={styles.submit} disabled={status === 'loading'}>
        {status === 'loading' ? <><Loader2 size={18} className={styles.spin} /> Sending...</> : 'Send Enquiry'}
      </button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <div className={styles.field}>
      {label && <label>{label}</label>}
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
