// Content loader for markdown files
// This loads content from the content/ folder

// Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  featuredImage?: string;
  content: string;
}

export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: 'apparel' | 'accessories' | 'digital';
  images: string[];
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

export interface CoachingService {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  price: string;
  duration: string;
  format: string;
  includes: string[];
  isAvailable: boolean;
  featured: boolean;
  bookingLink?: string;
}

// Mock data for development (will be replaced with actual file loading in production)
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Cost of Being Capable',
    slug: 'the-cost-of-being-capable',
    date: '2025-02-28',
    category: 'Essays',
    excerpt: 'On the invisible tax of competence—and how to stop paying it.',
    content: `There is a tax that competent women pay. It is invisible, unspoken, and extracted daily.

It is the tax of being the one who always figures it out. The one who cleans up the mess. The one who remembers the details everyone else forgets. The one who holds the emotional weight of a room, a team, a family, a life.

You have been paying this tax for years. Perhaps decades. And like all taxes paid without question, it has become expected. Normal. Invisible to everyone except the one paying it.

But here is what they do not tell you: competence is not a favor you grant to the world. It is not a debt you owe. It is not a license for others to take without giving back.

The cost of being capable is burnout. It is resentment that simmers beneath a composed surface. It is the slow erosion of your own needs, your own desires, your own voice.

It is time to stop paying the tax.

This does not mean becoming less capable. It means becoming more discerning about where your capability goes. It means recognizing that your competence is valuable—and that value deserves reciprocity.

Stop being the only one who figures it out. Let others struggle. Let others fail. Let others learn. Your competence is not a public service. It is a gift you choose to give, and you are allowed to choose when and to whom you give it.

Handle your own. With class. And let others handle theirs.`
  },
  {
    id: '2',
    title: 'Boundaries Without Explanation',
    slug: 'boundaries-without-explanation',
    date: '2025-02-21',
    category: 'Essays',
    excerpt: 'You do not owe anyone a reason for your limits.',
    content: `"No" is a complete sentence. You have heard this before. But hearing it and living it are two different things.

For years, you have been conditioned to soften your boundaries with explanations. "I can't because..." "I would love to, but..." "Maybe next time when..."

Each explanation is an invitation for negotiation. Each justification is a crack in the boundary you are trying to set. Each reason you give is a rope for someone else to pull.

You do not owe anyone a reason for your limits.

Your time is yours. Your energy is yours. Your attention is yours. You do not need to explain why you are protecting them. You do not need to justify why you are saying no.

The people who respect you will respect your boundaries without explanation. The people who demand explanations are the people who were planning to negotiate anyway.

Practice the complete sentence. "No." "I am not available." "That does not work for me." Period. No door left open. No crack for negotiation.

Your boundaries are not up for discussion. They are not a debate. They are a statement of fact about what you will and will not accept in your life.

Handle your own. With class. And without explanation.`
  },
  {
    id: '3',
    title: 'The Quiet Power of Composed Rebellion',
    slug: 'the-quiet-power-of-composed-rebellion',
    date: '2025-02-14',
    category: 'Essays',
    excerpt: 'Disruption does not have to be loud to be effective.',
    content: `There is a myth that rebellion must be loud. That disruption requires shouting. That change only comes from those who make the most noise.

This is a lie designed to exhaust you. To make you believe that your composed strength is not enough. To convince you that unless you are screaming, you are not being heard.

But the most powerful rebellions are often the quietest.

Composed rebellion is the woman who shows up exactly as she is in a room that expected her to shrink. It is the steady refusal to apologize for taking up space. It is the calm "no" that does not waver. It is the unshakeable knowledge that you belong exactly where you stand.

Composed rebellion does not seek permission. It does not wait for invitation. It does not ask if it is allowed. It simply is.

The systems that were not built for you expect you to be loud. They expect you to exhaust yourself in the performance of resistance. They are prepared for the shout. They are not prepared for the steady, unwavering, composed presence of a woman who knows her worth.

Be the disruption they did not anticipate. Be the quiet rebellion that changes the room simply by being in it.

Handle your own. With class. And with quiet, unshakable power.`
  },
  {
    id: '4',
    title: 'The Emotional Labor You Were Never Thanked For',
    slug: 'the-emotional-labor-you-were-never-thanked-for',
    date: '2025-02-07',
    category: 'Essays',
    excerpt: 'On the invisible work of holding everything together.',
    content: `You have been holding things together for as long as you can remember. Not just your own life, but the lives around you. The emotional weight of a team. The unspoken needs of a family. The invisible threads that keep everything from unraveling.

This is emotional labor. And it is work. Real work. Exhausting work. Work that takes energy and time and mental space. Work that is rarely acknowledged, rarely thanked, rarely even seen.

You have been doing this work because you are capable. Because you notice what others miss. Because you care. Because someone has to, and you have always been the one who steps up.

But here is the truth: just because you can hold everything together does not mean you should. Just because you notice the unspoken needs does not mean you are obligated to meet them. Just because you care does not mean you must exhaust yourself proving it.

Emotional labor is work. And like all work, it deserves boundaries. It deserves reciprocity. It deserves to be seen and acknowledged and shared.

Stop holding together what wants to fall apart. Let others feel the weight they have been avoiding. Let the unspoken needs go unmet. Let someone else step up.

Your capacity for emotional labor is not infinite. Protect it. Reserve it for what truly matters. And let the rest go.

Handle your own. With class. And with boundaries.`
  },
  {
    id: '5',
    title: 'The Space You Deserve',
    slug: 'the-space-you-deserve',
    date: '2025-01-31',
    category: 'Essays',
    excerpt: 'Taking up room without apology.',
    content: `You have been making yourself smaller for years. Adjusting your volume. Shrinking your presence. Apologizing for the space you occupy.

You learned early that taking up room was dangerous. That being too much was a risk. That the safest path was to be small, be quiet, be easy to move around.

But you were never too much. You were just in rooms that were too small for you.

The space you deserve is not measured in square feet. It is measured in the freedom to be fully yourself. To speak without filtering. To exist without apologizing. To take up exactly as much room as you need.

You do not need to earn this space. You do not need to prove you deserve it. You do not need to justify why you need it. You simply do. It is yours by right of being alive.

Stop shrinking. Stop apologizing. Stop making yourself smaller to make others comfortable.

Take up the space you deserve. Fill the room with your presence. Let them adjust to you for once.

Handle your own. With class. And with all the space you deserve.`
  },
  {
    id: '6',
    title: 'Your Competence Is Not a Favor',
    slug: 'your-competence-is-not-a-favor',
    date: '2025-01-24',
    category: 'Essays',
    excerpt: 'On stopping the performance of capability for others benefit.',
    content: `Your competence is not a favor you grant to the world. It is not a gift you are obligated to give. It is not a debt you owe for being capable.

You have been performing competence for others your whole life. Figuring things out. Fixing problems. Making it work. Being the reliable one, the capable one, the one who always comes through.

And in return, you have received... what? The expectation that you will always do it? The assumption that you can handle it? The silence when you need help yourself?

Your competence is valuable. It is the result of years of learning, growing, struggling, and persevering. It deserves to be valued. It deserves reciprocity. It deserves to be directed toward what matters to you, not extracted by those who simply expect it.

Stop performing competence for free. Stop being the safety net for people who would not do the same for you. Stop proving your worth through what you can accomplish for others.

Your competence is yours. Use it for your own goals. Your own growth. Your own life.

Handle your own. With class. And on your own terms.`
  }
];

export const products: Product[] = [
  {
    _id: '1',
    id: '1',
    title: 'The Composed Tee',
    slug: 'the-composed-tee',
    description: 'Premium cotton tee in bone white. Minimal branding. Maximum impact.',
    price: 68,
    category: 'apparel',
    images: [],
    inStock: true,
    featured: true,
    tags: ['apparel', 'basics']
  },
  {
    _id: '2',
    id: '2',
    title: 'Handle Your Own Journal',
    slug: 'handle-your-own-journal',
    description: 'Linen-bound journal for the woman who writes her own rules. 200 pages.',
    price: 42,
    category: 'accessories',
    images: [],
    inStock: true,
    featured: true,
    tags: ['journal', 'stationery']
  },
  {
    _id: '3',
    id: '3',
    title: 'Boundaries Without Apology',
    slug: 'boundaries-without-apology',
    description: 'Digital guide to setting limits that stick. Instant download.',
    price: 29,
    category: 'digital',
    images: [],
    inStock: true,
    featured: false,
    tags: ['digital', 'guide']
  },
  {
    _id: '4',
    id: '4',
    title: 'Quiet Power Hoodie',
    slug: 'quiet-power-hoodie',
    description: 'Oversized hoodie in charcoal. For composed rebellion.',
    price: 95,
    compareAtPrice: 120,
    category: 'apparel',
    images: [],
    inStock: true,
    featured: true,
    tags: ['apparel', 'lounge']
  }
];

export const services: CoachingService[] = [
  {
    _id: '1',
    id: '1',
    title: 'The Clarity Session',
    slug: 'clarity-session',
    description: 'One intensive session to cut through the noise and find your direction.',
    fullDescription: 'The Clarity Session is for the woman who knows something needs to change but isn\'t sure what or how. In 90 minutes, we\'ll cut through the noise and get to the heart of what you need.',
    price: '$350',
    duration: '90 minutes',
    format: 'Video call',
    includes: ['Pre-session questionnaire', '90-minute intensive', 'Action plan summary'],
    isAvailable: true,
    featured: true
  },
  {
    _id: '2',
    id: '2',
    title: 'The Boundary Blueprint',
    slug: 'boundary-blueprint',
    description: 'Three sessions to build boundaries that hold without explanation.',
    fullDescription: 'The Boundary Blueprint is a three-session intensive for the woman who is done explaining her limits.',
    price: '$900',
    duration: '3 sessions',
    format: 'Video calls',
    includes: ['Boundary assessment', '3 x 60-minute sessions', 'Custom boundary scripts'],
    isAvailable: true,
    featured: true
  },
  {
    _id: '3',
    id: '3',
    title: 'The Ownership Intensive',
    slug: 'ownership-intensive',
    description: 'Six-month partnership for the woman ready to take up space.',
    fullDescription: 'The Ownership Intensive is a six-month partnership for the woman who is ready to stop shrinking and start taking up space.',
    price: '$4,500',
    duration: '6 months',
    format: 'Bi-weekly calls + Voxer support',
    includes: ['Full assessment', 'Bi-weekly 60-min sessions', 'Unlimited Voxer access', 'Custom resources'],
    isAvailable: true,
    featured: false
  }
];

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getServiceBySlug(slug: string): CoachingService | undefined {
  return services.find(service => service.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured && p.inStock);
}

export function getFeaturedServices(): CoachingService[] {
  return services.filter(s => s.featured && s.isAvailable);
}
