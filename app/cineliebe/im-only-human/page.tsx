"use client";

import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";

const videos = [
  {
    id: "DjDHryWbbWo",
    title: "Kindness",
    description:
      "This video made me realise that sometimes, putting in a little effort to help someone can mean more than we could ever imagine. We don’t always need to expect something in return. Sometimes, the happiness we see on someone’s face is enough to make every bit of our effort worthwhile. In the end, knowing that we made someone’s day a little brighter—that itself is a beautiful reward.",
  },
  {
    id: "QMnEP2DYfmI",
    title: "Ripple",
    description:
      "This video made me look at kindness a little differently. It reminded me that being there for someone doesn’t always have to be something big or extraordinary. Sometimes, it simply means giving your time, sharing what you have, or putting in a little effort when someone needs you. There may be moments when helping someone feels inconvenient, when it costs us our time, money, energy, or even something we wanted for ourselves. But I believe that if we have the ability to make someone’s difficult moment a little easier, we should. We may never receive anything back for what we do, and maybe we don’t need to. The thought that our small act might bring someone comfort, hope, or a smile is enough. For me, that is one of the most beautiful things about being human — choosing to help simply because someone needs us.",
  },
  {
    id: "iVrQqWIs6ZE",
    title: "A Little Humanity",
    description:
      "This video made me realise that helping someone can sometimes mean far more than we can imagine. We may never know what the person beside us is going through or what struggles they might be silently carrying. Everyone has a story, and sometimes, we may be completely unaware of what is happening in someone else’s life. But if we ever have the chance to make someone’s life a little easier, we should take it. Give whatever you can — your time, your effort, your support, or even something as simple as a helping hand. It may seem small to us, but it could mean everything to someone who truly needs it. We may not be able to help everyone in the world, but we can help everyone we can, to the fullest of our ability. Never underestimate the difference a small act of kindness can make in someone’s life. If you can help someone, please do. Don’t wait for anything in return. Sometimes, being able to make someone’s life a little better is more than enough of a reward. For me, that is one of the simplest and most beautiful ways of being human.",
  },
  {
    id: "uaWA2GbcnJU",
    title: "Unsung Hero",
    description:
      "What do we really get in return for helping others? Sometimes, we all have that thought in our minds. Why spend our time, energy, money, or effort on someone else when we may not get anything back? But maybe that is the wrong question to ask. Because when we help someone, we do receive something in return. Is it happiness? Is it satisfaction? Is it peace? I honestly don't know how to put it into words. Maybe it is all of them. There is something beautiful about knowing that, for a moment, we were able to make someone’s life a little better. No reward, no recognition, and nothing expected in return — just the quiet feeling inside that we did something good. And perhaps that feeling is worth more than anything we could ever receive. Maybe the greatest return for helping others is simply the happiness, satisfaction, and peace that comes from knowing we made a difference.",
  },
  {
    id: "7zeeVEKaDLM",
    title: "Generations of Care",
    description:
      "Do you think the people who actually listen to your problems or help you through your hardships have no problems of their own? You are absolutely wrong. The people who choose to help you, to stay with you, and to make you feel better often have their own struggles and responsibilities. Sometimes, they make sacrifices just to be there for you. They may leave behind their own responsibilities, worries, or even their own difficult moments simply because they want to see you feel a little better. So, always be kind to the person who is there for you. Appreciate the people who stand beside you when you need them the most. You may never know what they had to sacrifice just to be there. And remember, everyone will become a memory one day. Love your parents. Love your friends. Love the people who care about you. Be kind to them while they are still here. Because sometimes, the people we take for granted today become the memories we miss the most.",
  },
  {
    id: "Z_R4q70_rJg",
    title: "A Moment of Kindness",
    description:
      "This video is a great example of how much effort someone can put in just to give you a simple smile or a happy moment. Sometimes, we may not realise how much thought, time, and effort someone has put into making us happy. What may seem like a small gesture to us could mean so much to the person who made the effort. It reminds us to appreciate the little things and the people who go out of their way just to see us smile.",
  },
  {
    id: "RDHbcDJkAc4",
    title: "Gift",
    description:
      "What truly defines us as rich? It is not how much we earn or how much we can make. It is how much we can give, how much love we can provide, and how much we can be there for the people who need us. This video beautifully shows the kind of love and richness that truly matters, while also reminding us of the misfortune of not recognising the person who has been beside us all along — supporting us, believing in us, and helping us grow. Sometimes, we realise the value of someone only after they are gone. And their sudden departure leaves behind a silence that reminds us of everything we failed to appreciate while they were still with us. Perhaps true richness is not what we have, but the love we give and the people we are fortunate enough to have beside us.",
  },
];

export default function ImOnlyHumanPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] text-[#252525]">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[#fcfbf8]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">

          <a
            href="/"
            className="text-sm font-semibold tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
          >
            Cyrilpsomy
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <a
              href="/"
              className="text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50"
            >
              About
            </a>

            <a
              href="/planet-2029"
              className="text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50"
            >
              PLANET 2029
            </a>

            <a
              href="/cineliebe"
              className="text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50"
            >
              Cineliebe
            </a>

            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#a17b25]">
              I’m Only Human
            </span>

          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-3 md:hidden">

            <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#a17b25]">
              CINELIEBE
            </span>

            <a
              href="/cineliebe"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 transition-colors hover:bg-black hover:text-white"
              aria-label="Back to Cineliebe"
            >
              ←
            </a>

          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-6 pb-28 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="mb-6 text-xs font-medium tracking-[0.35em] uppercase text-[#a17b25]">
              CINELIEBE
            </p>

            <h1 className="max-w-5xl text-5xl font-light tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              I’m Only Human.
            </h1>

            <div className="my-12 h-px w-full bg-black/10" />

          </motion.div>

          {/* Hero Introduction */}
          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

            {/* Side Label */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#a17b25]">
                Why this page exists
              </p>

              <div className="mt-5 h-px w-12 bg-black/20" />
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="max-w-4xl"
            >

              <div className="space-y-8 text-sm leading-8 text-black/70 sm:text-base sm:leading-9">

                {/* Opening */}
                <p className="max-w-3xl text-xl font-light leading-9 text-black/85 sm:text-2xl sm:leading-10">
                  You guys might be wondering why this “I’m Only Human” page
                  exists.
                </p>

                <p>
                  The creator of this website has something he wants to say to
                  the world. But sometimes, words are simply not enough to
                  express what we truly mean or what we carry within our minds
                  and hearts.
                </p>

                <p>
                  He believes that visual communication can often speak more
                  powerfully than the words displayed on a screen. Emotions are
                  not always easy to convey through the words we type or write.
                  Some feelings require a presence, a voice, an expression, or
                  a simple face-to-face conversation to be truly understood.
                </p>

                <p>
                  Since he cannot do that here, he has chosen another way.
                </p>

                <p>
                  Through the help of videos created and shared by wonderful
                  creators from around the world, he hopes to convey something
                  that words alone cannot. Videos that can make us smile, make
                  us happy, give us peace, remind us that we are loved, or
                  simply tell us that we are not alone in this world.
                </p>

              </div>

              {/* Human Section */}
              <div className="mt-14 border-t border-black/10 pt-14">

                <p className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-[#a17b25]">
                  Being Human
                </p>

                <div className="space-y-8 text-sm leading-8 text-black/70 sm:text-base sm:leading-9">

                  <p>
                    We all have our limitations. We make mistakes. We are not
                    perfect. We break promises. We hurt people. Sometimes, life
                    may feel unfair, and everything happening around us may
                    seem devastating. There may be moments when we feel lost,
                    exhausted, or as though nothing is going the way we hoped.
                  </p>

                  <p className="border-l border-[#a17b25] pl-5 text-xl font-medium leading-9 text-black/85 sm:text-2xl sm:leading-10">
                    But always remember — we are human.
                  </p>

                  <p>
                    We can make mistakes, but we can also forgive. We may lose
                    someone, but we can find love and meaning again. We may
                    break promises, but we can seek forgiveness and try to make
                    things right. We can fall, but we can get back up.
                  </p>

                  <p className="text-xl font-medium text-black/85 sm:text-2xl">
                    We are all human.
                  </p>

                  <p>
                    That means we have a responsibility to help those who are in
                    need, to listen when someone needs to be heard, to
                    understand before judging, and to try to see things from
                    another person’s perspective. We may not always be able to
                    change someone’s entire life, but sometimes, simply being
                    there can make a difference.
                  </p>

                </div>

              </div>

              {/* Kindness Section */}
              <div className="mt-14 border-t border-black/10 pt-14">

                <p className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-[#a17b25]">
                  A Thought About Kindness
                </p>

                <div className="space-y-8 text-sm leading-8 text-black/70 sm:text-base sm:leading-9">

                  <p>
                    And sometimes, in the act of helping someone or showing
                    kindness, we may get hurt. We may be taken for granted. We
                    may even be cheated by someone we genuinely tried to help.
                  </p>

                  <p>
                    But never be sad because your kindness was misused. Never
                    regret being the person who chose to help.
                  </p>

                  {/* Highlighted Message */}
                  <div className="border-l-2 border-[#a17b25] py-2 pl-6">

                    <p className="text-xl font-medium leading-9 text-black/85 sm:text-2xl sm:leading-10">
                      If someone used your kindness to hurt you, remember this.
                    </p>

                    <p className="mt-4 text-xl font-medium leading-9 text-[#a17b25] sm:text-2xl sm:leading-10">
                      It was not your kindness that was wrong.
                      <br />
                      It was your greatness that was misused.
                    </p>

                  </div>

                  <p>
                    So don’t let someone else’s actions change who you are.
                  </p>

                  <p className="text-xl font-light leading-9 text-black/85 sm:text-2xl sm:leading-10">
                    Be kind.
                    <br />
                    Keep helping.
                    <br />
                    Keep caring.
                    <br />
                    Keep being the person you are.
                  </p>

                  <p>
                    Just be a little more cautious next time.
                  </p>

                  <p>
                    Protect your heart, learn from what happened, and carry the
                    lesson with you — but never let the experience take away
                    the goodness within you.
                  </p>

                  <p className="text-xl font-medium leading-9 text-[#a17b25] sm:text-2xl sm:leading-10">
                    Because being hurt should teach you wisdom, not take away
                    your humanity.
                  </p>

                </div>

              </div>

              {/* Final Human Thought */}
              <div className="mt-14 border-t border-black/10 pt-14">

                <div className="space-y-8 text-sm leading-8 text-black/70 sm:text-base sm:leading-9">

                  <p>
                    Life can be unfair sometimes. It can hurt us, disappoint
                    us, and take away things we never wanted to lose.
                  </p>

                  <p className="text-xl font-medium leading-9 text-[#a17b25] sm:text-2xl sm:leading-10">
                    But remember — making a comeback is still your decision.
                  </p>

                  <p className="text-xl italic leading-9 text-black/75 sm:text-2xl sm:leading-10">
                    And perhaps, that is what being human is all about.
                  </p>

                </div>

              </div>

            </motion.div>
          </div>

          {/* Hero Tagline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 max-w-3xl lg:ml-[220px]"
          >

            <p className="text-lg font-light leading-8 text-black/60 sm:text-xl">
              Stories that remind us to be kind, love more, hate less, and
              find a little happiness in every moment.
            </p>

            <p className="mt-7 border-l border-[#a17b25] pl-5 text-sm italic leading-7 text-black/50">
              “Sometimes, being human is simply being there for someone.”
            </p>

            <a
              href="#collection"
              className="group mt-10 inline-flex items-center gap-4 text-xs font-medium tracking-[0.25em] uppercase"
            >
              <span className="border-b border-black/30 pb-1 transition-colors group-hover:border-[#a17b25]">
                Explore the stories
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>

          </motion.div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-20 text-center"
          >
            <p className="text-[10px] tracking-[0.35em] uppercase text-black/35">
              Be kind
            </p>
          </motion.div>

        </div>
      </section>

      {/* VIDEO COLLECTION */}
      <section
        id="collection"
        className="border-t border-black/10 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >

            <p className="mb-5 text-xs font-medium tracking-[0.3em] uppercase text-[#a17b25]">
              The Collection
            </p>

            <h2 className="max-w-3xl text-3xl font-light tracking-[-0.025em] sm:text-4xl md:text-5xl">
              Stories that say what words sometimes cannot.
            </h2>

          </motion.div>

          {/* Videos */}
          <div className="grid items-start gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">

            {videos.map((video, index) => (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                className="self-start"
              >

                {/* Video */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Number */}
                <div className="mt-6 flex items-center gap-4">

                  <span className="text-xs tracking-[0.2em] text-[#a17b25]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-black/15" />

                  <span className="text-[10px] tracking-[0.25em] uppercase text-black/35">
                    Story
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-light tracking-[-0.02em]">
                  {video.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-black/60">
                  {video.description}
                </p>

              </motion.article>
            ))}

          </div>
        </div>
      </section>

      {/* PERSONAL LESSON */}
      <section className="border-t border-black/10 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >

            <p className="mb-5 text-xs font-medium tracking-[0.3em] uppercase text-[#a17b25]">
              A Lesson Learned
            </p>

            <h2 className="max-w-3xl text-3xl font-light tracking-[-0.025em] sm:text-4xl md:text-5xl">
              Sometimes, we only understand the value of something after it
              is gone.
            </h2>

            <div className="mt-10 max-w-4xl space-y-7 text-sm leading-8 text-black/70 sm:text-base sm:leading-9">

              <p>
                Sometimes, we lose people, places, or things that meant more
                to us than we ever realised — and sometimes, we lose them
                because of our own mistakes.
              </p>

              <p>
                And there comes a moment when you finally understand that
                maybe you don’t deserve another chance to have that person,
                that place, or that thing back in your life.
              </p>

              <p>
                One of the hardest lessons he has learned is that we rarely
                understand the true value of something while it is still ours.
                It could be a person, a place, a relationship, a moment, or
                even something we once took for granted. We only begin to
                understand how much it meant to us when it slowly moves away —
                further and further — until it reaches a place beyond our
                hands, where no amount of wanting, regretting, or trying can
                bring it back.
              </p>

              <p className="border-l border-[#a17b25] pl-5 text-lg font-medium leading-8 text-black/85 sm:text-xl sm:leading-9">
                But do you know what hurts the most?
                <br />
                <span className="text-[#a17b25]">Being replaced.</span>
              </p>

              <p>
                It is not just losing something you loved. It is knowing that
                the beautiful place it once held in your life now belongs
                somewhere else.
              </p>

              <p>
                Knowing that the person who once chose you may now choose
                someone else. Knowing that the place where you once felt at
                home may now hold someone else’s memories. Knowing that
                something which once played such a beautiful role in your life
                is continuing its journey without you.
              </p>

              <p>
                And perhaps that is the most devastating part — watching
                something that once meant everything to you become a beautiful
                part of someone else’s life.
              </p>

              <p className="text-lg font-medium text-black/85 sm:text-xl">
                Lesson learned.
              </p>

              <p>
                Will he be a better person from now on?
              </p>

              <p>
                He honestly doesn’t know.
              </p>

              <p>
                Because he is human.
              </p>

              <p>
                He will probably make mistakes again. He may not always make
                the right choices. But he knows one thing now — he wishes he
                had understood the value of those people, those moments, those
                places, and those chances while they were still within his
                reach.
              </p>

              <p>
                He wishes he had made the past a little more beautiful.
              </p>

              <p>
                He wishes he had held on a little tighter.
              </p>

              <p>
                He wishes he had said the things he left unsaid, done the
                things he kept postponing, and made use of every chance he was
                given.
              </p>

              <p className="text-lg italic leading-9 text-black/75 sm:text-xl">
                But the past doesn’t come back.
              </p>

              <p>
                All he can do now is carry the lesson with him...
              </p>

              <p className="text-lg font-medium leading-9 text-[#a17b25] sm:text-xl">
                and hope that, somewhere ahead, he never again takes
                something truly precious for granted.
              </p>

            </div>

          </motion.div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-black/10 px-6 py-28 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >

          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#a17b25]">
            A Reminder
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-light tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Be kind.
            <br />
            Love more.
            <br />
            Be human.
          </h2>

          <p className="mx-auto mt-10 max-w-xl text-sm italic leading-8 text-black/50 sm:text-base">
            “Everyone will be a memory one day.”
          </p>

        </motion.div>
      </section>

      {/* DISCLAIMER */}
      <section className="border-t border-black/10 px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">

          <p className="text-[10px] leading-6 tracking-[0.05em] text-black/35">
            CONTENT NOTE — The videos featured on this page are created and
            published by their respective creators. They are included here
            for appreciation, reflection, and the message they convey. All
            rights belong to the original creators and copyright holders.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}