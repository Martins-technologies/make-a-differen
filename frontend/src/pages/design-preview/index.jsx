import { Helmet } from 'react-helmet-async';

import { useTranslation } from 'react-i18next';

import { useState } from 'react';

import { ChevronRight, Heart } from 'lucide-react';

import { Container } from '@/components/ui/Container';

import { Section } from '@/components/ui/Section';

import { Button } from '@/components/ui/Button';

import { IconButton } from '@/components/ui/IconButton';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from '@/components/ui/Card';

import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

import { Input } from '@/components/ui/Input';

import { Textarea } from '@/components/ui/Textarea';

import { Badge } from '@/components/ui/Badge';

import { Alert } from '@/components/ui/Alert';

import { Accordion } from '@/components/ui/Accordion';

import { Tabs } from '@/components/ui/Tabs';

import { Modal } from '@/components/ui/Modal';

import { Spinner } from '@/components/ui/Spinner';

import { Pagination } from '@/components/ui/Pagination';

import { Checkbox } from '@/components/ui/Checkbox';

import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

import { FormField } from '@/components/ui/FormField';

import { Select } from '@/components/ui/Select';

import { SectionHeading } from '@/components/ui/SectionHeading';

const coreSwatches = [
  { className: 'bg-bg', label: 'bg' },

  { className: 'bg-surface', label: 'surface' },

  { className: 'bg-surface-alt', label: 'surface-alt' },

  { className: 'bg-surface-impact', label: 'surface-impact' },

  { className: 'bg-primary', label: 'primary' },

  { className: 'bg-secondary', label: 'secondary' },

  { className: 'bg-accent', label: 'accent' },

  { className: 'bg-success', label: 'success' },

  { className: 'bg-warning', label: 'warning' },

  { className: 'bg-danger', label: 'danger' },
];

const tintSwatches = [
  { className: 'bg-tint-lilac', label: 'tint-lilac' },
  { className: 'bg-tint-mint', label: 'tint-mint' },
  { className: 'bg-tint-sky', label: 'tint-sky' },
  { className: 'bg-tint-peach', label: 'tint-peach' },
  { className: 'bg-tint-turquoise', label: 'tint-turquoise' },
  { className: 'bg-tint-teal', label: 'tint-teal' },
  { className: 'bg-tint-cream', label: 'tint-cream' },
  { className: 'bg-tint-blush', label: 'tint-blush' },
  { className: 'bg-tint-slate', label: 'tint-slate' },
];

const primaryScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const accentScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const secondaryScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export default function DesignPreviewPage() {
  const { t } = useTranslation();

  const [page, setPage] = useState(2);

  if (!import.meta.env.DEV) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>
          {t('pages.designPreview.title')} | {t('site.name')}
        </title>
      </Helmet>

      <Section>
        <Container className="space-y-16">
          <div>
            <h1>{t('pages.designPreview.title')}</h1>

            <p className="text-body-lg mt-3 max-w-2xl text-muted">
              Compare tokens and components against the approved mockups. Toggle high contrast from
              the accessibility toolbar to preview the alternate theme.
            </p>
          </div>

          <section aria-labelledby="colors-heading">
            <SectionHeading
              title="Core colors"
              description="Semantic roles mapped in tokens.css"
            />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {coreSwatches.map(({ className, label }) => (
                <div key={label} className="space-y-2">
                  <div className={`h-16 rounded-lg border border-border ${className}`} />

                  <p className="text-small text-muted">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="tints-heading">
            <h2 id="tints-heading">Pastel tints</h2>

            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {tintSwatches.map(({ className, label }) => (
                <div key={label} className="space-y-2">
                  <div className={`h-14 rounded-xl ${className}`} />
                  <p className="text-small text-muted">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="scales-heading">
            <h2 id="scales-heading">Tint scales</h2>

            <div className="mt-6 space-y-6">
              <ScaleRow name="primary" steps={primaryScale.map((s) => `bg-primary-${s}`)} />
              <ScaleRow
                name="secondary (teal)"
                steps={secondaryScale.map((s) => `bg-secondary-${s}`)}
              />
              <ScaleRow name="accent (coral)" steps={accentScale.map((s) => `bg-accent-${s}`)} />
            </div>
          </section>

          <section aria-labelledby="type-heading">
            <h2 id="type-heading">Typography</h2>

            <div className="mt-6 space-y-4 rounded-xl border border-border bg-surface p-6">
              <p className="text-display text-primary">Display — Playfair Display</p>

              <h1>Heading 1</h1>

              <h2>Heading 2</h2>

              <h3>Heading 3</h3>

              <h4>Heading 4</h4>

              <h5>Heading 5</h5>

              <h6>Heading 6</h6>

              <p className="text-body-lg text-muted">Body large — supporting copy</p>

              <p>Body default — Inter</p>

              <p className="text-nav text-primary">Navigation label weight</p>

              <p className="text-small text-muted">Small muted</p>
            </div>
          </section>

          <section aria-labelledby="shape-heading">
            <h2 id="shape-heading">Radius & elevation</h2>

            <div className="mt-4 flex flex-wrap gap-4">
              {[
                ['sm', 'rounded-sm'],
                ['md', 'rounded-md'],
                ['lg', 'rounded-lg'],
                ['xl', 'rounded-xl'],
                ['2xl', 'rounded-2xl'],
                ['pill', 'rounded-pill'],
              ].map(([r, rounded]) => (
                <div
                  key={r}
                  className={`flex h-16 w-24 items-center justify-center ${rounded} text-small border border-border bg-surface shadow-sm`}
                >
                  {r}
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="buttons-heading">
            <h2 id="buttons-heading">Buttons</h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {['primary', 'secondary', 'outline', 'ghost', 'cta', 'danger'].map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant}
                </Button>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button variant="cta">
                <Heart className="h-4 w-4 fill-current" aria-hidden />
                Donate
              </Button>

              <Button variant="primary">
                Primary action
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {['sm', 'md', 'lg'].map((size) => (
                <Button key={size} size={size}>
                  {size}
                </Button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <IconButton variant="accent" aria-label="Next">
                <ChevronRight className="h-5 w-5" aria-hidden />
              </IconButton>

              <IconButton variant="primary" size="sm" aria-label="Next small">
                <ChevronRight className="h-4 w-4" aria-hidden />
              </IconButton>
            </div>
          </section>

          <section aria-labelledby="cards-heading">
            <h2 id="cards-heading">Cards</h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Default card</CardTitle>

                  <CardDescription>White surface, subtle border</CardDescription>
                </CardHeader>
              </Card>

              {['lilac', 'mint', 'peach', 'turquoise'].map((tint) => (
                <Card key={tint} variant="flat" tint={tint}>
                  <CardTitle>Tint: {tint}</CardTitle>

                  <CardDescription>Pastel icon-card background</CardDescription>
                </Card>
              ))}

              <Card variant="media" padding="none" className="md:col-span-2 lg:col-span-1">
                <CardMedia />

                <div className="p-6">
                  <CardTitle>Media card</CardTitle>

                  <CardDescription>Course / Get Involved pattern</CardDescription>

                  <CardFooter>
                    <IconButton variant="accent" aria-label="View details">
                      <ChevronRight className="h-5 w-5" aria-hidden />
                    </IconButton>
                  </CardFooter>
                </div>
              </Card>
            </div>

            <div className="mt-6">
              <ImagePlaceholder className="max-w-md" label="Hero / photo placeholder" />
            </div>
          </section>

          <section aria-labelledby="components-heading">
            <h2 id="components-heading">Form & feedback</h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                </CardHeader>

                <div className="flex flex-wrap gap-2">
                  <Badge>default</Badge>

                  <Badge variant="primary">primary</Badge>

                  <Badge variant="secondary">secondary</Badge>

                  <Badge variant="accent">accent</Badge>

                  <Badge variant="success">success</Badge>
                </div>
              </Card>

              <div className="space-y-3">
                <Alert variant="info">Info alert</Alert>

                <Alert variant="success">Success alert</Alert>

                <Alert variant="warning">Warning alert</Alert>

                <Alert variant="danger">Danger alert</Alert>
              </div>

              <FormField id="demo-input" label="Input" hint="Hint text">
                <Input id="demo-input" placeholder="Placeholder" />
              </FormField>

              <FormField id="demo-textarea" label="Textarea">
                <Textarea id="demo-textarea" />
              </FormField>

              <Select
                id="demo-select"

                placeholder="Choose"

                options={[
                  { value: 'a', label: 'Option A' },

                  { value: 'b', label: 'Option B' },
                ]}
              />

              <div className="flex items-center gap-2">
                <Checkbox id="demo-check" />

                <label htmlFor="demo-check">Checkbox</label>
              </div>

              <RadioGroup defaultValue="a" className="flex gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="a" id="r-a" />

                  <label htmlFor="r-a">A</label>
                </div>

                <div className="flex items-center gap-2">
                  <RadioGroupItem value="b" id="r-b" />

                  <label htmlFor="r-b">B</label>
                </div>
              </RadioGroup>

              <Accordion
                items={[
                  { value: '1', title: 'Accordion item', content: 'Content' },

                  { value: '2', title: 'Another item', content: 'More content' },
                ]}
              />

              <Tabs
                tabs={[
                  { value: 't1', label: 'Tab 1', content: 'Tab one content' },

                  { value: 't2', label: 'Tab 2', content: 'Tab two content' },
                ]}
              />

              <Modal
                title="Modal"

                description="Dialog preview"

                trigger={<Button variant="outline">Open modal</Button>}
              >
                <p className="text-body text-muted">Modal body</p>
              </Modal>

              <div className="flex items-center gap-4">
                <Spinner />

                <Pagination page={page} pages={5} onPageChange={setPage} />
              </div>
            </div>
          </section>
        </Container>
      </Section>
    </>
  );
}

function ScaleRow({ name, steps }) {
  return (
    <div>
      <p className="text-small mb-2 font-medium text-primary">{name}</p>
      <div className="flex overflow-hidden rounded-lg border border-border">
        {steps.map((className) => (
          <div key={className} className={`h-12 flex-1 ${className}`} title={className} />
        ))}
      </div>
    </div>
  );
}
