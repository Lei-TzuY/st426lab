'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  GraduationCap,
  ChevronRight,
  FlaskConical,
  Cpu,
  BookOpen,
  Image as ImageIcon,
  Video,
  Waves,
  Stethoscope,
  Factory,
  Sparkles,
  GitBranch,
} from "lucide-react";

const cn = (...inputs: Array<string | false | null | undefined>) =>
  inputs.filter(Boolean).join(" ");

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", className, ...props }, ref) => {
    const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
      default: "bg-slate-900 text-white",
      secondary: "bg-slate-100 text-slate-700",
      outline: "border border-slate-200 bg-transparent text-slate-700",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-1.5 border-b border-slate-200 px-4 py-3", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-lg font-semibold leading-6 text-slate-900", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-4 py-4 text-sm text-slate-700", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#areas", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#people", label: "People" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

const LAB = {
  nameZh: "AI 與多媒體應用實驗室",
  nameEn: "AIM Lab (Artificial Intelligence & Multimedia)",
  university: "東海大學 資訊工程學系 / Department of Computer Science, Tunghai University",
  advisor: "指導老師：陳仕偉",
  motto: "思辨創新，實踐智慧",
  blurb:
    "AIM Lab 致力於人工智慧（AI）與多媒體（Multimedia）領域的跨域研究，涵蓋智慧製造、智慧醫療、自然語言與多模態內容等主題。我們透過產學合作與社會實踐，打造具影響力的智慧生活與產業解決方案。",
  areas: [
    { icon: ImageIcon, title: "影像辨識與視覺理解" },
    { icon: Waves, title: "語音與音訊科技" },
    { icon: Video, title: "影像處理與串流系統" },
    { icon: BookOpen, title: "自然語言處理與跨模態應用" },
    { icon: Sparkles, title: "生成式人工智慧" },
    { icon: Factory, title: "智慧製造 (Smart Manufacturing)" },
    { icon: Stethoscope, title: "智慧醫療 (Smart Healthcare)" },
  ],
  contacts: {
    email: "aimlab@thu.edu.tw",
    address: "407224 台中市西屯區臺灣大道四段1727號 東海大學資訊工程學系",
    mapLink: "https://maps.google.com/?q=Tunghai+University+Department+of+Computer+Science",
  },
};

const researchFocus = [
  {
    icon: FlaskConical,
    title: "先進 AI 模型",
    desc: "設計針對產業需求的深度學習模型，從資料收集到部署完整串接。",
  },
  {
    icon: Cpu,
    title: "邊緣運算與系統整合",
    desc: "結合硬體加速與最佳化部署，在多種平台上快速落地智慧應用。",
  },
  {
    icon: BookOpen,
    title: "跨域協作與人才培育",
    desc: "與臨床、製造、教育等領域合作，培養具備實作能力的 AI 專才。",
  },
];

const projects = [
  {
    title: "智慧製造瑕疵檢測",
    tags: ["Computer Vision", "YOLO", "Edge AI"],
    desc: "以多光譜相機搭配深度學習模型進行瑕疵辨識，降低產線人工作業與不良率。",
  },
  {
    title: "跨模態醫療影像診斷",
    tags: ["Healthcare AI", "Fusion", "Explainable AI"],
    desc: "整合影像、病歷與量測資料，提供可解釋的智能輔助診斷建議。",
  },
  {
    title: "生成式多媒體內容",
    tags: ["GenAI", "Diffusion", "Multimodal"],
    desc: "運用擴散式模型創造跨模態互動內容，支援教育、文化及行銷應用。",
  },
];

const people = [
  { name: "陳仕偉", role: "教授（Advisor）", badges: ["AI", "Multimedia", "NLP"] },
  { name: "研究助理 / 專題生", role: "Students & Researchers", badges: ["Vision", "NLP", "Systems"] },
];

const publications = [
  { year: 2025, title: "Multimodal Generative Systems for Smart Manufacturing", venue: "IEEE/ACM (demo)" },
  { year: 2024, title: "Cross-modal Medical Imaging Retrieval", venue: "MICCAI (demo)" },
  { year: 2023, title: "Efficient Vision Transformers in the Wild", venue: "CVPR (demo)" },
];

const links = [
  { label: "GitHub", href: "https://github.com/", icon: GitBranch },
  { label: "系所網站", href: "https://www.cs.thu.edu.tw/", icon: GraduationCap },
];

const heroStats = [
  { value: "20+", label: "國際學術發表" },
  { value: "10+", label: "產學合作專案" },
  { value: "30+", label: "實驗室成員" },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="w-full max-w-6xl px-4 py-16 mx-auto">
      <FadeIn>
        <div className="mb-8 space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
          {subtitle && <p className="max-w-3xl text-base leading-7 text-slate-600">{subtitle}</p>}
        </div>
      </FadeIn>
      {children}
    </section>
  );
}

const Statistic = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col rounded-xl bg-white/5 p-4 text-left shadow-lg ring-1 ring-white/20 backdrop-blur">
    <span className="text-2xl font-semibold text-white">{value}</span>
    <span className="text-sm text-white/85">{label}</span>
  </div>
);

export default function AIMLabWebsite() {
  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-base font-bold text-white">
              A
            </span>
            <div className="leading-tight">
              <div className="font-semibold text-slate-900">{LAB.nameZh}</div>
              <div className="text-xs text-slate-500">{LAB.nameEn}</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden text-sm font-semibold text-slate-900 transition hover:text-slate-600 md:inline-flex"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <FadeIn>
              <Badge variant="outline" className="border-white/40 bg-white/10 text-white backdrop-blur">
                AIM Lab · Tunghai University
              </Badge>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                {LAB.nameZh}
                <span className="block text-lg font-normal text-white/70">{LAB.nameEn}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-2xl text-base leading-7 text-white/85">{LAB.blurb}</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100"
                >
                  探索專案
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href={LAB.contacts.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
                >
                  造訪東海資工 <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Card className="border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.92),rgba(30,64,175,0.45))] text-slate-100 shadow-2xl backdrop-blur">
              <CardHeader className="border-white/10 bg-white/[0.05] backdrop-blur">
                <CardTitle className="text-white">Lab Snapshots</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 p-6 text-slate-200">
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="space-y-1">
                    <div className="text-slate-400">學校單位</div>
                    <div className="text-base font-medium text-slate-100">{LAB.university}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-400">指導老師</div>
                    <div className="text-base font-medium text-slate-100">{LAB.advisor}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-400">座右銘</div>
                    <div className="text-base font-medium text-slate-100">{LAB.motto}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {heroStats.map((stat) => (
                    <Statistic key={stat.label} value={stat.value} label={stat.label} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <main>
        <Section id="about" title="實驗室概覽" subtitle={LAB.blurb}>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>基本資訊</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed">
                <div>
                  <span className="font-semibold text-slate-900">學術隸屬：</span>
                  <span className="text-slate-700">{LAB.university}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">指導老師：</span>
                  <span className="text-slate-700">{LAB.advisor}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">研究精神：</span>
                  <span className="text-slate-700">{LAB.motto}</span>
                </div>
                <div className="rounded-xl bg-slate-100/60 p-4 text-slate-700">
                  我們強調理論與實務並進，依據合作夥伴需求進行客製化研發，協助產業與社會快速導入 AI 解決方案。
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>核心焦點</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {researchFocus.map((item) => (
                  <div key={item.title} className="flex gap-3 rounded-xl border border-slate-100 bg-white/70 p-3 shadow-sm">
                    <item.icon className="h-6 w-6 shrink-0 text-slate-600" />
                    <div>
                      <div className="font-medium text-slate-900">{item.title}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="areas" title="Research Areas" subtitle="結合同步研究與實際部署的跨領域主題，以下為目前主要研究方向。">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LAB.areas.map((area) => (
              <FadeIn key={area.title} delay={0.05}>
                <Card className="h-full border-slate-100">
                  <CardContent className="flex items-center gap-4 p-5">
                    <area.icon className="h-6 w-6 shrink-0 text-slate-600" />
                    <div className="font-medium text-slate-900">{area.title}</div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="近期指導或進行中的研究專案，涵蓋產學合作與學術研究成果。">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.05}>
                <Card className="flex h-full flex-col">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-xl bg-slate-100 text-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600">{project.desc}</p>
                    <div className="mt-auto">
                      <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900" href="#contact">
                        想了解更多 <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section id="people" title="People" subtitle="跨領域師生協作，透過專題、論文與實務計畫，建立扎實的 AI 研究能量。">
          <div className="grid gap-6 md:grid-cols-2">
            {people.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.04}>
                <Card>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm text-slate-600">{member.role}</div>
                    <div className="flex flex-wrap gap-2">
                      {member.badges.map((badge) => (
                        <Badge key={badge} variant="outline" className="rounded-xl border-slate-200 text-slate-700">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section id="publications" title="Publications" subtitle="精選近年學術成果，更多細節可於會議論文集或 Google Scholar 查詢。">
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <FadeIn key={`${pub.title}-${pub.year}`} delay={index * 0.03}>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="w-16 shrink-0 text-sm font-semibold text-slate-700">{pub.year}</div>
                  <div>
                    <div className="font-medium text-slate-900">{pub.title}</div>
                    <div className="text-sm text-slate-600">{pub.venue}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="歡迎與 AIM Lab 聯繫，洽談合作、專題研究或加入團隊。">
          <div className="grid gap-6 md:grid-cols-5">
            <FadeIn delay={0.05}>
              <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm md:col-span-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="h-4 w-4" />
                  <span>{LAB.contacts.email}</span>
                </div>
                <a
                  className="flex items-start gap-2 text-slate-700 hover:text-slate-900"
                  href={LAB.contacts.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mt-1 h-4 w-4" />
                  <span className="leading-tight">{LAB.contacts.address}</span>
                </a>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>合作領域：AI 應用研究、系統導入、人才培訓與產學計畫。</div>
                  <div>也歡迎各系所學生與我們聯繫，了解專題與研究機會。</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>快速留言</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4" onSubmit={handleContactSubmit}>
                    <div className="grid gap-3 md:grid-cols-2">
                      <Input name="name" placeholder="姓名" required />
                      <Input type="email" name="email" placeholder="Email" required />
                    </div>
                    <Input name="topic" placeholder="想討論的主題 / 合作方向" />
                    <Textarea name="message" rows={4} placeholder="請簡述需求、研究興趣或合作想法" />
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>表單提交後，我們將盡快回覆您。</span>
                      <Button type="submit">Send</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            &copy; {new Date().getFullYear()} {LAB.nameZh} · {LAB.nameEn}
          </div>
          <div className="flex gap-4">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="inline-flex items-center gap-2 hover:text-slate-900">
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}









