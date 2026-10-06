import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { FormField } from '@/components/ui/FormField';

export function RequestHelpForm({ selectedCategory }) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    contactMethod: '',
    location: '',
    assistanceType: '',
    language: '',
    accessibility: '',
    urgency: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selectedCategory if user clicked a card in "How We Can Help"
  useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({ ...prev, assistanceType: selectedCategory }));
    }
  }, [selectedCategory]);

  const safeContactOptions = [
    { value: 'phone', label: t('requestHelpPage.form.fields.contactMethod.options.phone') },
    { value: 'email', label: t('requestHelpPage.form.fields.contactMethod.options.email') },
    { value: 'text', label: t('requestHelpPage.form.fields.contactMethod.options.text') },
    { value: 'phoneOrText', label: t('requestHelpPage.form.fields.contactMethod.options.phoneOrText') },
    { value: 'any', label: t('requestHelpPage.form.fields.contactMethod.options.any') },
  ];

  const assistanceOptions = [
    { value: 'food', label: t('requestHelpPage.form.fields.assistanceType.options.food') },
    { value: 'clothing', label: t('requestHelpPage.form.fields.assistanceType.options.clothing') },
    { value: 'hygiene', label: t('requestHelpPage.form.fields.assistanceType.options.hygiene') },
    { value: 'children', label: t('requestHelpPage.form.fields.assistanceType.options.children') },
    { value: 'employment', label: t('requestHelpPage.form.fields.assistanceType.options.employment') },
    { value: 'courses', label: t('requestHelpPage.form.fields.assistanceType.options.courses') },
    { value: 'community', label: t('requestHelpPage.form.fields.assistanceType.options.community') },
    { value: 'other', label: t('requestHelpPage.form.fields.assistanceType.options.other') },
  ];

  const languageOptions = [
    { value: 'english', label: t('requestHelpPage.form.fields.language.options.english') },
    { value: 'french', label: t('requestHelpPage.form.fields.language.options.french') },
    { value: 'spanish', label: t('requestHelpPage.form.fields.language.options.spanish') },
    { value: 'arabic', label: t('requestHelpPage.form.fields.language.options.arabic') },
    { value: 'mandarin', label: t('requestHelpPage.form.fields.language.options.mandarin') },
    { value: 'cantonese', label: t('requestHelpPage.form.fields.language.options.cantonese') },
    { value: 'punjabi', label: t('requestHelpPage.form.fields.language.options.punjabi') },
    { value: 'other', label: t('requestHelpPage.form.fields.language.options.other') },
  ];

  const urgencyOptions = [
    { value: 'routine', label: t('requestHelpPage.form.fields.urgency.options.routine') },
    { value: 'moderate', label: t('requestHelpPage.form.fields.urgency.options.moderate') },
    { value: 'urgent', label: t('requestHelpPage.form.fields.urgency.options.urgent') },
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('requestHelpPage.form.errors.nameRequired');
    }
    if (!formData.contactMethod) {
      newErrors.contactMethod = t('requestHelpPage.form.errors.contactMethodRequired');
    }
    if (!formData.location.trim()) {
      newErrors.location = t('requestHelpPage.form.errors.locationRequired');
    }
    if (!formData.assistanceType) {
      newErrors.assistanceType = t('requestHelpPage.form.errors.assistanceTypeRequired');
    }
    if (!formData.language) {
      newErrors.language = t('requestHelpPage.form.errors.languageRequired');
    }
    if (!formData.urgency) {
      newErrors.urgency = t('requestHelpPage.form.errors.urgencyRequired');
    }
    if (!formData.consent) {
      newErrors.consent = t('requestHelpPage.form.errors.consentRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <Section id="request-help-form" className="py-10 md:py-16 bg-bg scroll-mt-20">
      <Container className="max-w-6xl space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="font-sans text-3xl font-extrabold text-primary sm:text-4xl">
            {t('requestHelpPage.form.title')}
          </h2>
          <p className="text-body-lg text-primary/80 max-w-4xl">
            {t('requestHelpPage.form.description')}
          </p>
        </div>

        {/* Form Container Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="font-sans text-2xl font-bold text-primary">
                {t('requestHelpPage.form.successTitle')}
              </h3>
              <p className="text-body-lg text-primary/80 max-w-xl mx-auto">
                {t('requestHelpPage.form.successMessage')}
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    contactMethod: '',
                    location: '',
                    assistanceType: '',
                    language: '',
                    accessibility: '',
                    urgency: '',
                    consent: false,
                  });
                }}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-contrast hover:bg-primary-700 transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Field 1: Name */}
                <FormField
                  id="name"
                  label={t('requestHelpPage.form.fields.name.label')}
                  required
                  error={errors.name}
                >
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('requestHelpPage.form.fields.name.placeholder')}
                    className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white"
                  />
                </FormField>

                {/* Field 2: Safe contact method */}
                <FormField
                  id="contactMethod"
                  label={t('requestHelpPage.form.fields.contactMethod.label')}
                  required
                  error={errors.contactMethod}
                >
                  <Select
                    id="contactMethod"
                    value={formData.contactMethod}
                    onValueChange={(val) => setFormData({ ...formData, contactMethod: val })}
                    placeholder={t('requestHelpPage.form.fields.contactMethod.placeholder')}
                    options={safeContactOptions}
                  />
                </FormField>

                {/* Field 3: General location */}
                <FormField
                  id="location"
                  label={t('requestHelpPage.form.fields.location.label')}
                  required
                  error={errors.location}
                >
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder={t('requestHelpPage.form.fields.location.placeholder')}
                    className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white"
                  />
                </FormField>

                {/* Field 4: Type of assistance requested */}
                <FormField
                  id="assistanceType"
                  label={t('requestHelpPage.form.fields.assistanceType.label')}
                  required
                  error={errors.assistanceType}
                >
                  <Select
                    id="assistanceType"
                    value={formData.assistanceType}
                    onValueChange={(val) => setFormData({ ...formData, assistanceType: val })}
                    placeholder={t('requestHelpPage.form.fields.assistanceType.placeholder')}
                    options={assistanceOptions}
                  />
                </FormField>

                {/* Field 5: Preferred language */}
                <FormField
                  id="language"
                  label={t('requestHelpPage.form.fields.language.label')}
                  required
                  error={errors.language}
                >
                  <Select
                    id="language"
                    value={formData.language}
                    onValueChange={(val) => setFormData({ ...formData, language: val })}
                    placeholder={t('requestHelpPage.form.fields.language.placeholder')}
                    options={languageOptions}
                  />
                </FormField>

                {/* Field 6: Accessibility requirements */}
                <FormField
                  id="accessibility"
                  label={t('requestHelpPage.form.fields.accessibility.label')}
                >
                  <Input
                    id="accessibility"
                    value={formData.accessibility}
                    onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })}
                    placeholder={t('requestHelpPage.form.fields.accessibility.placeholder')}
                    className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white"
                  />
                </FormField>

                {/* Field 7: Urgency */}
                <FormField
                  id="urgency"
                  label={t('requestHelpPage.form.fields.urgency.label')}
                  required
                  error={errors.urgency}
                >
                  <Select
                    id="urgency"
                    value={formData.urgency}
                    onValueChange={(val) => setFormData({ ...formData, urgency: val })}
                    placeholder={t('requestHelpPage.form.fields.urgency.placeholder')}
                    options={urgencyOptions}
                  />
                </FormField>

                {/* Field 8: Consent Checkbox */}
                <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-center pt-2">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: !!checked })}
                      className="mt-1 h-5 w-5 rounded border-slate-300 data-[state=checked]:bg-primary"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm font-medium leading-relaxed text-primary cursor-pointer"
                    >
                      {t('requestHelpPage.form.fields.consent.label')}
                      <span className="text-danger" aria-hidden="true"> *</span>
                    </label>
                  </div>
                  {errors.consent ? (
                    <p className="mt-1 text-small text-danger" role="alert">
                      {errors.consent}
                    </p>
                  ) : null}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-8 py-3.5 text-base font-semibold text-accent-contrast shadow-sm transition-all hover:bg-accent-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:opacity-50"
                >
                  <span>
                    {isSubmitting
                      ? t('requestHelpPage.form.submitting')
                      : t('requestHelpPage.form.submitButton')}
                  </span>
                  <ChevronRight className="h-5 w-5 stroke-[2.5]" aria-hidden />
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
