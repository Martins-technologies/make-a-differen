import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FormField } from '@/components/ui/FormField';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { MediaImage } from '@/components/ui/MediaImage';
import { contactImages } from '@/data/contactImages';
import { contactService } from '@/services/contact.service';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldClass =
  'h-12 rounded-xl border-slate-200 bg-white placeholder:text-muted/80 focus:bg-white';

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export function ContactMessageSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const subjectOptions = [
    { value: 'general', label: t('contactPage.form.subjects.general') },
    { value: 'programs', label: t('contactPage.form.subjects.programs') },
    { value: 'volunteer', label: t('contactPage.form.subjects.volunteer') },
    { value: 'partnership', label: t('contactPage.form.subjects.partnership') },
    { value: 'media', label: t('contactPage.form.subjects.media') },
    { value: 'donation', label: t('contactPage.form.subjects.donation') },
    { value: 'other', label: t('contactPage.form.subjects.other') },
  ];

  const validate = () => {
    const next = {};
    if (!formData.fullName.trim()) next.fullName = t('contactPage.form.errors.fullNameRequired');
    if (!formData.email.trim()) next.email = t('contactPage.form.errors.emailRequired');
    else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      next.email = t('contactPage.form.errors.emailInvalid');
    }
    if (!formData.subject) next.subject = t('contactPage.form.errors.subjectRequired');
    if (!formData.message.trim()) next.message = t('contactPage.form.errors.messageRequired');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    const subjectLabel =
      subjectOptions.find((option) => option.value === formData.subject)?.label || formData.subject;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      await contactService.send({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: subjectLabel,
        message: formData.message.trim(),
      });
      setIsSubmitted(true);
    } catch {
      setSubmitError(t('contactPage.form.errors.sendFailed'));
    }
    setIsSubmitting(false);
  };

  return (
    <Section className="bg-bg py-10 md:py-16">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 lg:col-span-5">
            <div className="space-y-2">
              <h2 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                {t('contactPage.form.title')}
              </h2>
              <p className="text-body-lg max-w-md text-primary/80">
                {t('contactPage.form.description')}
              </p>
            </div>
            <MediaImage
              src={contactImages.message}
              alt={t('contactPage.form.imageAlt')}
              placeholderLabel={t('contactPage.form.imagePlaceholder')}
              aspect="4/3"
              placeholderVariant="icon"
              roundedClassName="rounded-2xl"
            />
          </div>

          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="flex min-h-[22rem] flex-col items-center justify-center space-y-4 rounded-3xl border border-slate-200/80 bg-white px-6 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-10 w-10" aria-hidden />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">
                  {t('contactPage.form.successTitle')}
                </h3>
                <p className="max-w-md text-body-lg text-primary/80">
                  {t('contactPage.form.successMessage')}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData(EMPTY_FORM);
                    setErrors({});
                    setSubmitError('');
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-contrast transition-colors hover:bg-primary-700"
                >
                  {t('contactPage.form.sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    id="fullName"
                    label={t('contactPage.form.fields.fullName.label')}
                    required
                    error={errors.fullName}
                  >
                    <Input
                      id="fullName"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t('contactPage.form.fields.fullName.placeholder')}
                      className={fieldClass}
                    />
                  </FormField>

                  <FormField
                    id="email"
                    label={t('contactPage.form.fields.email.label')}
                    required
                    error={errors.email}
                  >
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contactPage.form.fields.email.placeholder')}
                      className={fieldClass}
                    />
                  </FormField>

                  <FormField
                    id="phone"
                    label={t('contactPage.form.fields.phone.label')}
                    error={errors.phone}
                  >
                    <Input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t('contactPage.form.fields.phone.placeholder')}
                      className={fieldClass}
                    />
                  </FormField>

                  <FormField
                    id="subject"
                    label={t('contactPage.form.fields.subject.label')}
                    required
                    error={errors.subject}
                  >
                    <Select
                      id="subject"
                      value={formData.subject}
                      onValueChange={(val) => setFormData({ ...formData, subject: val })}
                      placeholder={t('contactPage.form.fields.subject.placeholder')}
                      options={subjectOptions}
                      className="h-12 rounded-xl border-slate-200 bg-white"
                    />
                  </FormField>
                </div>

                <FormField
                  id="message"
                  label={t('contactPage.form.fields.message.label')}
                  required
                  error={errors.message}
                >
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contactPage.form.fields.message.placeholder')}
                    className="min-h-[8.5rem] rounded-xl border-slate-200 bg-white placeholder:text-muted/80"
                  />
                </FormField>

                {submitError ? (
                  <p className="text-small text-danger" role="alert">
                    {submitError}
                  </p>
                ) : null}

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-base font-semibold text-accent-contrast shadow-sm transition-all hover:bg-accent-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:opacity-50"
                  >
                    <span>
                      {isSubmitting
                        ? t('contactPage.form.submitting')
                        : t('contactPage.form.submit')}
                    </span>
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" aria-hidden />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
