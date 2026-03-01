// Site configuration and content data
// This mimics Eleventy's data files structure

export const siteConfig = {
  name: 'Heifer Society',
  tagline: 'Stop Shrinking.',
  description: 'A private emotional awakening and corporate disruption platform for high-capacity women who are done shrinking.',
  url: 'https://heifersociety.com',
  author: 'Heifer Society',
};

export const navigation = [
  { label: 'About', href: '#breaking-point' },
  { label: 'Journal', href: '#journal' },
  { label: 'Manifesto', href: '/manifesto' },
  { label: 'Contact', href: '/contact' },
];

// Journal entries - easily add new entries here
export const journals = [
  {
    id: 'cost-of-capable',
    title: 'The Cost of Being Capable',
    excerpt: 'On the invisible tax of competence—and how to stop paying it.',
    date: '2025-02-28',
    category: 'Essays',
    slug: 'the-cost-of-being-capable',
    content: `
      There is a tax that competent women pay. It is invisible, unspoken, and extracted daily.

      It is the tax of being the one who always figures it out. The one who cleans up the mess. 
      The one who remembers the details everyone else forgets. The one who holds the emotional 
      weight of a room, a team, a family, a life.

      You have been paying this tax for years. Perhaps decades. And like all taxes paid without 
      question, it has become expected. Normal. Invisible to everyone except the one paying it.

      But here is what they do not tell you: competence is not a favor you grant to the world. 
      It is not a debt you owe. It is not a license for others to take without giving back.

      The cost of being capable is burnout. It is resentment that simmers beneath a composed 
      surface. It is the slow erosion of your own needs, your own desires, your own voice.

      It is time to stop paying the tax.

      This does not mean becoming less capable. It means becoming more discerning about where 
      your capability goes. It means recognizing that your competence is valuable—and that value 
      deserves reciprocity.

      Stop being the only one who figures it out. Let others struggle. Let others fail. Let 
      others learn. Your competence is not a public service. It is a gift you choose to give, 
      and you are allowed to choose when and to whom you give it.

      Handle your own. With class. And let others handle theirs.
    `
  },
  {
    id: 'boundaries-without-explanation',
    title: 'Boundaries Without Explanation',
    excerpt: 'You do not owe anyone a reason for your limits.',
    date: '2025-02-21',
    category: 'Essays',
    slug: 'boundaries-without-explanation',
    content: `
      "No" is a complete sentence. You have heard this before. But hearing it and living it 
      are two different things.

      For years, you have been conditioned to soften your boundaries with explanations. 
      "I can't because..." "I would love to, but..." "Maybe next time when..."

      Each explanation is an invitation for negotiation. Each justification is a crack 
      in the boundary you are trying to set. Each reason you give is a rope for someone 
      else to pull.

      You do not owe anyone a reason for your limits.

      Your time is yours. Your energy is yours. Your attention is yours. You do not need 
      to explain why you are protecting them. You do not need to justify why you are saying no.

      The people who respect you will respect your boundaries without explanation. The people 
      who demand explanations are the people who were planning to negotiate anyway.

      Practice the complete sentence. "No." "I am not available." "That does not work for me." 
      Period. No door left open. No crack for negotiation.

      Your boundaries are not up for discussion. They are not a debate. They are a statement 
      of fact about what you will and will not accept in your life.

      Handle your own. With class. And without explanation.
    `
  },
  {
    id: 'quiet-power-rebellion',
    title: 'The Quiet Power of Composed Rebellion',
    excerpt: 'Disruption does not have to be loud to be effective.',
    date: '2025-02-14',
    category: 'Essays',
    slug: 'the-quiet-power-of-composed-rebellion',
    content: `
      There is a myth that rebellion must be loud. That disruption requires shouting. That 
      change only comes from those who make the most noise.

      This is a lie designed to exhaust you. To make you believe that your composed strength 
      is not enough. To convince you that unless you are screaming, you are not being heard.

      But the most powerful rebellions are often the quietest.

      Composed rebellion is the woman who shows up exactly as she is in a room that expected 
      her to shrink. It is the steady refusal to apologize for taking up space. It is the 
      calm "no" that does not waver. It is the unshakeable knowledge that you belong exactly 
      where you stand.

      Composed rebellion does not seek permission. It does not wait for invitation. It does 
      not ask if it is allowed. It simply is.

      The systems that were not built for you expect you to be loud. They expect you to exhaust 
      yourself in the performance of resistance. They are prepared for the shout. They are not 
      prepared for the steady, unwavering, composed presence of a woman who knows her worth.

      Be the disruption they did not anticipate. Be the quiet rebellion that changes the room 
      simply by being in it.

      Handle your own. With class. And with quiet, unshakable power.
    `
  },
  {
    id: 'emotional-labor-recognition',
    title: 'The Emotional Labor You Were Never Thanked For',
    excerpt: 'On the invisible work of holding everything together.',
    date: '2025-02-07',
    category: 'Essays',
    slug: 'the-emotional-labor-you-were-never-thanked-for',
    content: `
      You have been holding things together for as long as you can remember. Not just your 
      own life, but the lives around you. The emotional weight of a team. The unspoken needs 
      of a family. The invisible threads that keep everything from unraveling.

      This is emotional labor. And it is work. Real work. Exhausting work. Work that takes 
      energy and time and mental space. Work that is rarely acknowledged, rarely thanked, 
      rarely even seen.

      You have been doing this work because you are capable. Because you notice what others 
      miss. Because you care. Because someone has to, and you have always been the one who 
      steps up.

      But here is the truth: just because you can hold everything together does not mean you 
      should. Just because you notice the unspoken needs does not mean you are obligated to 
      meet them. Just because you care does not mean you must exhaust yourself proving it.

      Emotional labor is work. And like all work, it deserves boundaries. It deserves 
      reciprocity. It deserves to be seen and acknowledged and shared.

      Stop holding together what wants to fall apart. Let others feel the weight they have 
      been avoiding. Let the unspoken needs go unmet. Let someone else step up.

      Your capacity for emotional labor is not infinite. Protect it. Reserve it for what 
      truly matters. And let the rest go.

      Handle your own. With class. And with boundaries.
    `
  },
  {
    id: 'space-you-deserve',
    title: 'The Space You Deserve',
    excerpt: 'Taking up room without apology.',
    date: '2025-01-31',
    category: 'Essays',
    slug: 'the-space-you-deserve',
    content: `
      You have been making yourself smaller for years. Adjusting your volume. Shrinking 
      your presence. Apologizing for the space you occupy.

      You learned early that taking up room was dangerous. That being too much was a risk. 
      That the safest path was to be small, be quiet, be easy to move around.

      But you were never too much. You were just in rooms that were too small for you.

      The space you deserve is not measured in square feet. It is measured in the freedom 
      to be fully yourself. To speak without filtering. To exist without apologizing. To 
      take up exactly as much room as you need.

      You do not need to earn this space. You do not need to prove you deserve it. You do 
      not need to justify why you need it. You simply do. It is yours by right of being alive.

      Stop shrinking. Stop apologizing. Stop making yourself smaller to make others comfortable.

      Take up the space you deserve. Fill the room with your presence. Let them adjust to 
      you for once.

      Handle your own. With class. And with all the space you deserve.
    `
  },
  {
    id: 'competence-not-favor',
    title: 'Your Competence Is Not a Favor',
    excerpt: 'On stopping the performance of capability for others benefit.',
    date: '2025-01-24',
    category: 'Essays',
    slug: 'your-competence-is-not-a-favor',
    content: `
      Your competence is not a favor you grant to the world. It is not a gift you are 
      obligated to give. It is not a debt you owe for being capable.

      You have been performing competence for others your whole life. Figuring things out. 
      Fixing problems. Making it work. Being the reliable one, the capable one, the one 
      who always comes through.

      And in return, you have received... what? The expectation that you will always do 
      it? The assumption that you can handle it? The silence when you need help yourself?

      Your competence is valuable. It is the result of years of learning, growing, 
      struggling, and persevering. It deserves to be valued. It deserves reciprocity. 
      It deserves to be directed toward what matters to you, not extracted by those 
      who simply expect it.

      Stop performing competence for free. Stop being the safety net for people who 
      would not do the same for you. Stop proving your worth through what you can 
      accomplish for others.

      Your competence is yours. Use it for your own goals. Your own growth. Your own life.

      Handle your own. With class. And on your own terms.
    `
  }
];

// Manifesto content
export const manifesto = {
  title: 'The Heifer Society Manifesto',
  subtitle: 'You Do Not Need Permission.',
  sections: [
    {
      heading: 'We Are Done Shrinking.',
      content: `
        We are the women who learned how to survive. Who figured out how to navigate 
        systems that were not built for us. Who became competent in rooms that questioned 
        our right to be there.

        We are done shrinking to make others comfortable. Done apologizing for our 
        presence. Done explaining our boundaries. Done performing competence for free.

        We are taking up space. Unapologetically. Unwaveringly. With class and with backbone.
      `
    },
    {
      heading: 'We Handle Our Own.',
      content: `
        A heifer does not wait for permission. She does not ask if she is allowed. She 
        does not explain her boundaries. She simply handles what needs to be handled—with 
        competence, with composure, with quiet strength.

        We are reclaiming this word. Not as an insult, but as a standard. A way of being 
        in the world that is self-sufficient, composed, and unshakeable.

        We handle our own. With class. And we let others handle theirs.
      `
    },
    {
      heading: 'We Set Boundaries Without Explanation.',
      content: `
        "No" is a complete sentence. Our time is ours. Our energy is ours. Our attention 
        is ours. We do not owe explanations for our limits. We do not justify our boundaries. 
        We simply state them and hold them.

        The people who respect us will respect our boundaries. The people who demand 
        explanations were planning to negotiate anyway.
      `
    },
    {
      heading: 'We Practice Composed Rebellion.',
      content: `
        Disruption does not have to be loud to be effective. The most powerful rebellions 
        are often the quietest. The steady refusal to shrink. The calm "no" that does not 
        waver. The unshakeable presence of a woman who knows her worth.

        We are the disruption they did not anticipate. The quiet rebellion that changes 
        the room simply by being in it.
      `
    },
    {
      heading: 'We Own Our Competence.',
      content: `
        Our competence is not a favor we grant. It is not a debt we owe. It is the result 
        of years of learning, growing, and persevering. It is valuable. It deserves 
        reciprocity. It deserves to be directed toward what matters to us.

        We stop performing competence for free. We stop being the safety net for those 
        who would not do the same. We use our competence for our own goals, our own growth, 
        our own lives.
      `
    },
    {
      heading: 'We Take Up Space.',
      content: `
        We were never too much. We were just in rooms that were too small for us. The space 
        we deserve is measured in the freedom to be fully ourselves. To speak without filtering. 
        To exist without apologizing.

        We stop shrinking. We stop apologizing. We take up exactly as much room as we need.
      `
    },
    {
      heading: 'We Are The Society.',
      content: `
        This is not a club you join. This is a way of being you choose. A commitment to 
        yourself. A refusal to shrink. A promise to handle your own—with class, with backbone, 
        with quiet, unshakable power.

        Welcome to Heifer Society.

        Handle your own. With class.
      `
    }
  ]
};

// Contact page content
export const contact = {
  title: 'Write to Us.',
  description: 'Collaborations, questions, or just a note—our inbox is open.',
  email: 'hello@heifersociety.com',
  social: {
    instagram: 'https://instagram.com/heifersociety',
    twitter: 'https://twitter.com/heifersociety',
  }
};

// Hero section content
export const heroContent = {
  wordmark: 'Heifer Society',
  headline: 'Stop Shrinking.',
  subheadline: 'You learned how to survive.\nNow you learn how to take up space.',
  ctaPrimary: 'Enter the Society',
  ctaSecondary: 'Read the Manifesto',
};

// Breaking Point section
export const breakingPoint = {
  label: 'The Breaking Point',
  content: `2025 cracked something open. The emotional labor. The over-apologizing. 
    Being competent but exhausted. The constant shrinking to make everyone else comfortable.

    And then—the moment you realized your space matters. That your competence 
    isn't a favor you grant. That your presence isn't an apology.`,
  cta: "I'm Done Shrinking.",
};

// What Is a Heifer section
export const whatIsAHeifer = {
  label: 'What Is a Heifer?',
  headline: 'Southern Steel. Self-Sufficient. Composed.',
  paragraphs: [
    `In the South, "heifer" was never just a word. It meant a female who handles her own. 
     Who doesn't wait for permission. Who moves through the world with competence and quiet confidence.`,
    `We're reclaiming it. Not loud. Not small. Not asking. Just handling what needs to be 
     handled—with class, with backbone, with the kind of strength that doesn't need to announce itself.`
  ],
  quote: `A heifer doesn't shrink. She doesn't apologize for her competence. 
    She doesn't explain her boundaries. She simply handles her own.`,
};

// The Work section
export const theWork = {
  label: 'The Work',
  headline: 'Four Pillars',
  pillars: [
    {
      title: 'Emotional Clarity',
      description: 'Understanding what you feel and why. Separating your emotions from other people\'s expectations.',
    },
    {
      title: 'Corporate Reality',
      description: 'Navigating systems that weren\'t built for you. Playing the game without losing yourself.',
    },
    {
      title: 'Boundaries & Backbone',
      description: 'Saying no without explaining. Holding the line without apology.',
    },
    {
      title: 'Ownership',
      description: 'Taking up space. Claiming your competence. Owning your impact.',
    },
  ],
};

// Footer content
export const footer = {
  tagline: 'Handle your own. With class.',
  copyright: '© 2025 Heifer Society. All rights reserved.',
};
