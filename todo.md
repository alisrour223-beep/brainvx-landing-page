# Brainvx Landing Page - Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **OpenAI.com**: Clean, modern AI aesthetic with subtle animations
- **Linear.app**: Minimalist design with smooth interactions
- **Vercel.com**: Premium tech feel with gradient accents
- **Style**: Futuristic Minimalism + Dark Theme + Neon Accents

### Color Palette
- Primary: #000000 (Pure Black - background)
- Secondary: #0A0A0A (Deep Black - cards/sections)
- Accent Primary: #00D9FF (Neon Blue - CTAs and highlights)
- Accent Secondary: #8B5CF6 (Neon Purple - gradients)
- Text Primary: #FFFFFF (White)
- Text Secondary: #A0A0A0 (Light Gray)
- Border: #1A1A1A (Subtle borders)

### Typography
- Heading1: Inter font-weight 800 (56px) - Hero headline
- Heading2: Inter font-weight 700 (42px) - Section titles
- Heading3: Inter font-weight 600 (28px) - Card titles
- Body Large: Inter font-weight 400 (18px) - Subheadlines
- Body Normal: Inter font-weight 400 (16px) - Body text
- Body Small: Inter font-weight 400 (14px) - Labels/captions
- Button Text: Inter font-weight 600 (16px)

### Key Component Styles
- **Primary Button**: Neon blue gradient background, white text, 8px rounded, glow effect on hover
- **Secondary Button**: Transparent with neon blue border, hover: filled with blue
- **Cards**: Dark background (#0A0A0A), subtle border (#1A1A1A), 12px rounded, hover: lift with glow
- **Form Inputs**: Dark background, neon blue focus border, 8px rounded
- **Animations**: Smooth fade-in on scroll, subtle glow pulses, 300-500ms transitions

### Layout & Spacing
- Hero section: Full viewport height with centered content
- Section padding: 120px vertical (desktop), 80px (mobile)
- Card gaps: 32px between cards
- Max content width: 1200px centered
- Mobile breakpoint: 768px

### Images to Generate
1. **hero-ai-brain-network.jpg** - Abstract AI neural network visualization with glowing blue nodes on black background (Style: photorealistic, futuristic, high-tech)
2. **feature-task-planning.jpg** - Futuristic holographic task board with organized items (Style: 3d, minimalist, neon blue accents)
3. **feature-email-assistant.jpg** - AI analyzing emails with smart categorization visualization (Style: 3d, clean, purple-blue gradient)
4. **feature-action-plans.jpg** - Daily schedule interface with AI recommendations (Style: minimalist, modern, neon highlights)
5. **feature-decision-support.jpg** - AI brain making decisions with risk analysis charts (Style: 3d, futuristic, data visualization)
6. **feature-ai-coo.jpg** - 24/7 AI assistant concept with clock and automation symbols (Style: minimalist, modern, blue glow)
7. **target-entrepreneurs.jpg** - Modern entrepreneur with digital workspace (Style: photorealistic, professional, tech-forward)
8. **target-freelancers.jpg** - Creative freelancer with multiple projects (Style: photorealistic, dynamic, modern)
9. **target-teams.jpg** - Small team collaborating with AI tools (Style: photorealistic, collaborative, tech-enabled)
10. **target-busy-individuals.jpg** - Professional managing multiple tasks efficiently (Style: photorealistic, organized, modern)
11. **logo-brainvx.png** - Minimalist brain icon with circuit patterns (Style: vector-style, neon blue, transparent background)
12. **background-gradient-mesh.jpg** - Subtle gradient mesh background for sections (Style: abstract, dark with blue-purple gradients)

---

## Development Tasks

1. **Setup & Structure** - Read README.md, understand template structure, update index.html title
2. **Generate Images** - Create all 12 images using ImageCreator.generate_image following design guidelines
3. **Hero Section** - Full-screen hero with headline, subheadline, dual CTAs, background with AI brain visual
4. **Problem → Solution Section** - Two-column layout explaining the problem and Brainvx solution
5. **Key Features Section** - 5 feature cards in grid layout with icons and descriptions
6. **Who Brainvx Is For Section** - 4 target audience cards with images
7. **Social Proof Section** - Launch announcement and 3 placeholder testimonials
8. **Beta Signup Form** - Form with name, email, user type, optional feedback, submit button
9. **Footer** - Logo, tagline, social icons, legal links
10. **Styling & Animations** - Apply design system, add glow effects, smooth transitions, scroll animations
11. **Responsive Design** - Ensure mobile-first responsive layout
12. **Testing** - Run lint check, fix any issues
13. **Final Check** - CheckUI validation, build check