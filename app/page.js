'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  HardHat,
  Truck,
  Users,
  MapPin,
  Mail,
  Phone,
  Award,
  ClipboardCheck,
  Flame,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Flame,
    title: 'Emergency Response Training',
    text: 'Nationally accredited training in fire warden, chief fire warden, first attack fire fighting, and confine small emergencies in a facility.',
  },
  {
    icon: ClipboardCheck,
    title: 'First Aid & Compliance Training',
    text: 'Practical, workplace-based training programs delivered to support site readiness, compliance, and safer teams.',
  },
  {
    icon: Truck,
    title: 'Plant Training & VOCs',
    text: 'Civil construction plant training, operator mentoring, verification of competency assessments, and practical workplace coaching.',
  },
  {
    icon: Users,
    title: 'Workforce Mentoring',
    text: 'Structured mentoring for new and developing operators, with a strong focus on building confidence, safety, and job-ready capability.',
  },
];

const highlights = [
  'Aboriginal-owned training company based in the Kimberley',
  '20+ years of mining and civil construction experience',
  'On-site delivery across remote, regional, and project locations',
  'Nationally accredited training and competency-based assessment',
  'Strong experience supporting civil construction and road projects',
  'Practical training designed for real workplaces, not just classrooms',
];

const trainingList = [
  'PUAFER005 – Operate as part of an emergency control organisation',
  'PUAFER006 – Lead an emergency control organisation',
  'PUAFER008 – Confine small emergencies in a facility',
  'CPPFES2005 – Demonstrate first attack firefighting equipment',
  'HLTAID011 – Provide First Aid',
  'Verification of Competency (VOC) assessments',
  'Plant operator mentoring and workplace instruction',
];

const regions = [
  'Broome',
  'Derby',
  'Kununurra',
  'Kimberley region',
  'Remote communities',
  'Civil and mining project sites across Western Australia',
];

function SectionHeading({ eyebrow, title, text, dark = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`mb-3 text-sm uppercase tracking-[0.25em] md:text-base ${dark ? 'text-stone-300' : 'text-stone-500'}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold tracking-tight md:text-5xl ${dark ? 'text-white' : 'text-stone-900'}`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-base leading-8 md:text-lg ${dark ? 'text-stone-300' : 'text-stone-600'}`}>{text}</p> : null}
    </div>
  );
}

export default function KQTLHWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-amber-50/40 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Kimberley Region, WA</p>
            <h1 className="text-lg font-semibold md:text-xl">Kimberley Quality Training & Labour Hire</h1>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="#services" className="text-sm text-stone-600 hover:text-stone-900">Services</a>
            <a href="#training" className="text-sm text-stone-600 hover:text-stone-900">Training</a>
            <a href="#about" className="text-sm text-stone-600 hover:text-stone-900">About</a>
            <a href="#contact">
              <Button className="rounded-2xl">Contact Us</Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(41,37,36,0.10),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.96),rgba(255,251,235,0.7))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm text-stone-700 shadow-sm">
                  <Award className="h-4 w-4" />
                  ABORIGINAL-OWNED | NATIONALLY ACCREDITED | SITE-BASED DELIVERY
                </div>
                <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  Practical training that stands out on site and delivers in the real world.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
                  We deliver nationally accredited training, competency-based assessments, and workforce mentoring built for real worksites across the Kimberley and regional Western Australia.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href="#contact">
                    <Button size="lg" className="rounded-2xl px-6 shadow-lg">
                      Request Training <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#services">
                    <Button size="lg" variant="outline" className="rounded-2xl border-stone-300 bg-white/70 px-6">
                      Explore Services
                    </Button>
                  </a>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <Card className="rounded-2xl border-stone-200 shadow-sm">
                    <CardContent className="p-5">
                      <p className="text-3xl font-semibold">20+</p>
                      <p className="mt-1 text-sm text-stone-600">Years of mining and civil experience</p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-2xl border-stone-200 shadow-sm">
                    <CardContent className="p-5">
                      <p className="text-3xl font-semibold">WA</p>
                      <p className="mt-1 text-sm text-stone-600">On-site delivery across regional and remote locations</p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-2xl border-stone-200 shadow-sm">
                    <CardContent className="p-5">
                      <p className="text-3xl font-semibold">Real</p>
                      <p className="mt-1 text-sm text-stone-600">Workplace-focused training and mentoring</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <Card className="rounded-[2rem] border-stone-200 bg-white/90 shadow-2xl">
                  <CardContent className="p-8 md:p-10">
                    <div className="grid gap-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100">
                          <HardHat className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Built for industry</h3>
                          <p className="mt-2 leading-7 text-stone-600">
                            Training shaped by hands-on experience in civil construction, mining, site safety, and workforce development.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100">
                          <ShieldCheck className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Compliance-focused</h3>
                          <p className="mt-2 leading-7 text-stone-600">
                            We support safe systems of work through documented, structured, and competency-based training delivery.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Remote delivery capability</h3>
                          <p className="mt-2 leading-7 text-stone-600">
                            We work where our clients need us, including yards, offices, project sites, and remote communities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="About Us"
              title="Training grounded in real site experience"
              text="Kimberley Quality Training & Labour Hire is an Aboriginal-owned company based in the Kimberley, delivering practical training, competency assessment, and workforce mentoring for civil construction, mining, and high-risk work environments."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="rounded-[2rem] border-stone-200 shadow-sm">
                <CardContent className="p-8 md:p-10">
                  <h3 className="mb-4 text-2xl font-semibold">What sets us apart</h3>
                  <div className="grid gap-4">
                    {highlights.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <ShieldCheck className="mt-1 h-5 w-5 shrink-0" />
                        <p className="leading-7 text-stone-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white shadow-xl">
                <CardContent className="flex h-full flex-col justify-between p-8 md:p-10">
                  <div>
                    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-stone-300">Our Approach</p>
                    <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                      We focus on capability, confidence, and safe performance on the job.
                    </h3>
                    <p className="mt-5 leading-8 text-stone-300">
                      Our delivery style is practical, direct, and built around the realities of site work. We work with businesses that need more than theory — they need training that translates into safer behaviours, stronger operator performance, and workforce development that lasts.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-stone-300">Delivery style</p>
                      <p className="mt-1 font-medium">Workplace-based</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-stone-300">Focus</p>
                      <p className="mt-1 font-medium">Safety and competency</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-stone-300">Coverage</p>
                      <p className="mt-1 font-medium">Remote and regional WA</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-stone-300">Clients</p>
                      <p className="mt-1 font-medium">Civil, mining, and industry teams</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-stone-200 bg-stone-50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Services"
              title="Training and assessment services"
              text="Flexible, on-site services designed for employers, projects, and organisations that need capable people, compliant systems, and practical outcomes."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Card className="h-full rounded-[2rem] border-stone-200 shadow-sm transition-shadow hover:shadow-lg">
                      <CardContent className="p-7">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                        <p className="leading-7 text-stone-600">{service.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="training" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500 md:text-base">Training Scope</p>
              <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-5xl">
                Accredited training and site-based competency support
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
                We support businesses that need recognised training outcomes as well as practical workforce development. Programs can be tailored to site requirements, participant numbers, and workplace conditions.
              </p>
              <div className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Where we work</h3>
                <div className="flex flex-wrap gap-3">
                  {regions.map((region) => (
                    <span key={region} className="rounded-full bg-stone-100 px-4 py-2 text-sm text-stone-700">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Card className="rounded-[2rem] border-stone-200 shadow-sm">
              <CardContent className="p-8 md:p-10">
                <h3 className="mb-5 text-2xl font-semibold">Common training areas</h3>
                <div className="grid gap-4">
                  {trainingList.map((item) => (
                    <div key={item} className="flex items-start gap-3 border-b border-stone-100 pb-4 last:border-b-0 last:pb-0">
                      <ChevronRight className="mt-1 h-5 w-5 shrink-0" />
                      <p className="leading-7 text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Why Clients Choose Us"
              title="Clear delivery. Practical outcomes. Strong site understanding."
              text="We understand the demands of civil and mining environments and deliver training in a way that respects production, safety, supervision, and workforce capability."
              dark
            />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Real-world credibility',
                  text: 'Our approach is built from direct site experience, operator development, and practical training leadership.',
                },
                {
                  title: 'Flexible delivery',
                  text: 'Training can be delivered at your workplace, project site, office, or remote location to suit your operational needs.',
                },
                {
                  title: 'Focused on people',
                  text: 'We support both compliance and confidence, helping workers understand, apply, and retain what they are taught.',
                },
              ].map((item) => (
                <Card key={item.title} className="rounded-[2rem] border-white/10 bg-white/10 shadow-none backdrop-blur">
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                    <p className="leading-8 text-stone-300">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <Card className="overflow-hidden rounded-[2rem] border-stone-200 shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-stone-950 via-stone-900 to-amber-900 p-8 text-white md:p-10">
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-300">Get in Touch</p>
                  <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                    Talk to us about training for your team or project.
                  </h2>
                  <p className="mt-5 leading-8 text-stone-300">
                    We work with organisations that need practical, reliable training support across the Kimberley and regional Western Australia.
                  </p>
                </div>
                <div className="bg-white p-8 md:p-10">
                  <div className="grid gap-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-stone-500">Email</p>
                        <a href="mailto:kimberleyqualitytraining@outlook.com" className="text-lg font-medium hover:underline">
                          kimberleyqualitytraining@outlook.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-stone-500">Phone</p>
                        <a href="tel:0428850965" className="text-lg font-medium hover:underline">
                          0428 850 965
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-stone-500">Location</p>
                        <p className="text-lg font-medium">Kimberley, Western Australia</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <a href="mailto:kimberleyqualitytraining@outlook.com?subject=Training%20Enquiry">
                        <Button size="lg" className="w-full rounded-2xl md:w-auto">
                          Enquire Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium">Kimberley Quality Training & Labour Hire</p>
            <p className="text-sm text-stone-500">Aboriginal-owned training company based in the Kimberley</p>
          </div>
          <p className="text-sm text-stone-500">Nationally accredited training | Civil | Mining | Workforce mentoring</p>
        </div>
      </footer>
    </div>
  );
}
