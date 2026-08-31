"use client";

import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Compass,
  Mail,
  MoveUpRight,
  Sparkles,
  Target,
} from "lucide-react";
import { useState } from "react";

// Data
const stories = [
  {
    title: "Our roots",
    description: "Where it all began.",
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Our flavors",
    description: "Timeless tastes, shared with love.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Our community",
    description: "Cooking together, keeping traditions alive.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
  },
];

const team = [
  ["Ratana Oudom", "Founder & CEO", "/assets/team/Ratana Oudom.jpg"],
  ["Men Senghak", "Recipe Developer", "/assets/team/Men Senghak2.jpg"],
  [
    "San SengThanu",
    "Food Photographer",
    "/assets/team/សាន​ សេងថានុ - San sengthanu.jpg",
  ],
  ["Leang Seavminh", "Web Developer", "/assets/team/Leang-Seavminh.jpg"],
  ["Ban Sethdarasak", "UI/UX Designer", "/assets/team/Ban-Sethdarasak.png"],
  ["Chhun Hokchheng", "Community Manager", "/assets/team/Hokchheng.png"],
];

const mentor = [
  "Srorng Sokcheat",
  "Founder & CEO",
  "/assets/mentor/Mentor.JPG",
];

// Components
function DottedBackground() {
  const points = [
    [60, 180],
    [210, 90],
    [350, 210],
    [500, 130],
    [635, 280],
    [795, 200],
    [945, 320],
    [1085, 160],
    [50, 640],
    [220, 520],
    [340, 640],
    [510, 550],
    [660, 680],
    [830, 510],
    [1010, 620],
    [1170, 500],
  ];

  return (
    <svg
      className="about-dots"
      viewBox="0 0 1200 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="dot-fade">
          <stop offset="0" stopColor="#6A040F" stopOpacity=".2" />
          <stop offset="1" stopColor="#6A040F" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="950" cy="220" r="300" fill="url(#dot-fade)" />
      <g className="about-dots__network" fill="#6A040F" stroke="#6A040F">
        <path
          d="M60 180 210 90l140 120 150-80 135 150 160-80 150 120 140-160"
          fill="none"
          strokeOpacity=".12"
        />
        <path
          d="M50 640 220 520l120 120 170-90 150 130 160-170 180 110 160-120"
          fill="none"
          strokeOpacity=".1"
        />
        <path
          d="M210 90 220 520M500 130 510 550M795 200 680 580M1035 120 1040 470"
          fill="none"
          strokeOpacity=".08"
        />
        {points.map(([cx, cy], index) => (
          <circle
            className="about-particle"
            key={cx + "-" + cy}
            cx={cx}
            cy={cy}
            r={index % 3 === 0 ? "4" : "3"}
            stroke="none"
            style={
              {
                "--particle-delay": `${index * -0.7}s`,
                "--particle-duration": `${7 + (index % 4)}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </g>
    </svg>
  );
}

// Section Components
function HeroSection() {
  return (
    <section className="about-hero relative overflow-hidden">
      <div className="about-hero__pattern" aria-hidden="true" />
      <div className="about-container about-hero__content mx-auto grid items-center">
        <div className="about-hero__copy">
          <p className="eyebrow eyebrow--gold">
            <Sparkles size={14} /> About us
          </p>
          <h1>
            Sharing the taste <em>of our heritage.</em>
          </h1>
          <p className="hero-description">
            TosNham is more than just a recipe website. It’s a celebration of
            Cambodian cuisine, culture, and the stories passed down through
            generations.
          </p>
          <div className="ornament-line">
            <span />✦<span />
          </div>
        </div>
        <div className="about-hero__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=90"
            alt="A Cambodian-inspired bowl of food surrounded by fresh ingredients"
            className="about-hero__image"
          />
          <span className="hero-stamp">
            From our
            <br />
            <strong>table</strong>
            <br />
            to yours
          </span>
        </div>
      </div>
      <div className="hero-wave" />
    </section>
  );
}

function StorySection({
  storyIndex,
  onStoryChange,
}: {
  storyIndex: number;
  onStoryChange: (index: number) => void;
}) {
  const current = stories[storyIndex];
  const previous = stories[(storyIndex + 2) % 3];
  const next = stories[(storyIndex + 1) % 3];

  return (
    <section className="about-section about-section--story about-container mx-auto grid items-center gap-12">
      <div className="story-copy">
        <p className="eyebrow">
          <Compass size={14} /> Our story
        </p>
        <h2>
          From our roots
          <br />
          to your table.
        </h2>
        <div className="small-ornament" />
        <p>
          TosNham was born from a simple love for food and a deep appreciation
          for Cambodian heritage.
        </p>
        <p>
          Growing up, the kitchen was the heart of our home—where families
          gathered, stories were shared, and recipes were passed down with love.
        </p>
        <p>
          Today, we bring those timeless flavors to you, inspiring you to cook,
          share, and keep our culinary traditions alive.
        </p>
      </div>
      <div className="story-carousel flex items-center justify-center">
        <button
          className="carousel-arrow carousel-arrow--left"
          onClick={() => onStoryChange((storyIndex + 2) % 3)}
          aria-label="Previous story"
        >
          ←
        </button>
        <div className="story-card story-card--side">
          <img src={previous.image} alt="" />
          <div>
            <strong>{previous.title}</strong>
            <span>{previous.description}</span>
          </div>
        </div>
        <div className="story-card story-card--main">
          <img src={current.image} alt={current.title} />
          <div>
            <strong>{current.title}</strong>
            <span>{current.description}</span>
          </div>
        </div>
        <div className="story-card story-card--side">
          <img src={next.image} alt="" />
          <div>
            <strong>{next.title}</strong>
            <span>{next.description}</span>
          </div>
        </div>
        <button
          className="carousel-arrow carousel-arrow--right"
          onClick={() => onStoryChange((storyIndex + 1) % 3)}
          aria-label="Next story"
        >
          →
        </button>
        <div className="carousel-dots">
          {stories.map((story, index) => (
            <button
              key={story.title}
              className={index === storyIndex ? "is-current" : ""}
              onClick={() => onStoryChange(index)}
              aria-label={"Show " + story.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section className="about-section about-section--values border-y">
      <div className="about-container mx-auto">
        <div className="section-heading">
          <p className="eyebrow">What is TosNham ✦</p>
          <h2>Our vision & mission.</h2>
          <div className="small-ornament small-ornament--center" />
        </div>
        <div className="value-grid grid gap-6">
          <article className="value-card">
            <div className="value-icon">
              <Compass />
            </div>
            <div>
              <h3>Our vision</h3>
              <p>
                To be the leading platform that preserves and promotes Cambodian
                cuisine, connecting people through the joy of cooking and
                cultural pride.
              </p>
            </div>
          </article>
          <article className="value-card">
            <div className="value-icon">
              <Target />
            </div>
            <div>
              <h3>Our mission</h3>
              <p>
                To inspire everyone to explore, cook, and share authentic
                Cambodian recipes while supporting local ingredients and
                traditional practices.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="about-section about-section--team about-container mx-auto">
      <div className="team-featured flex justify-center">
        <article className="team-card team-card--featured" key={mentor[0]}>
          <div className="team-portrait">
            <img src={mentor[2]} alt={mentor[0]} />
          </div>
          <div className="team-card__info">
            <h3>{mentor[0]}</h3>
            <div className="team-badge">Mentor</div>
            <div className="team-social">
              <a href="#" aria-label="My Mentor on Instagram">
                <Camera size={15} />
              </a>
              <a href="mailto:hello@tosnham.com" aria-label="Email My Mentor">
                <Mail size={15} />
              </a>
            </div>
          </div>
        </article>
      </div>
      <div className="section-heading team-heading">
        <p className="eyebrow">Meet our team ✦</p>
        <h2>
          The people behind <em>TosNham.</em>
        </h2>
        <div className="team-heading__line">
          <span />✂<span />
        </div>
        <p className="team-heading__description">
          The passionate people preserving Cambodian flavor, one recipe at a
          time.
        </p>
      </div>
      <div className="team-grid grid grid-cols-1 gap-6 md:grid-cols-3">
        {team.map(([name, , image], index) => (
          <article
            className={
              "team-card team-card--member team-card--accent-" + (index % 2)
            }
            key={name}
          >
            <div className="team-portrait">
              <img src={image} alt={name} />
            </div>
            <div className="team-card__info">
              <h3>{name}</h3>
              <div className="team-badge">
                {index === 0 ? "Leader" : "Team member"}
              </div>
              <div className="team-social">
                <a href="#" aria-label={name + " on Instagram"}>
                  <Camera size={15} />
                </a>
                <a href="mailto:hello@tosnham.com" aria-label={"Email " + name}>
                  <Mail size={15} />
                </a>
              </div>
            </div>
            <MoveUpRight className="team-card__arrow" size={18} />
          </article>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="about-cta about-container mx-auto flex items-center justify-between">
      <div>
        <p className="eyebrow eyebrow--gold">Cook with us</p>
        <h2>
          There’s always room
          <br />
          at our table.
        </h2>
      </div>
      <Link href="/recipes" className="button button--light">
        Explore recipes <ArrowRight size={18} />
      </Link>
    </section>
  );
}

// Main Page Component
export default function AboutPage() {
  const [storyIndex, setStoryIndex] = useState(1);

  return (
    <main className="about-page">
      <DottedBackground />
      <HeroSection />
      <StorySection storyIndex={storyIndex} onStoryChange={setStoryIndex} />
      <VisionMissionSection />
      <TeamSection />
      <CTASection />
    </main>
  );
}
