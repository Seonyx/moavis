---
title: "Painting by Numbers"
date: 2026-08-29
categories:
  - ai-writing-tools
image: "/assets/images/posts/unicorn.jpg"
keywords:
  - AI novel writing process
  - writing a novel with AI
  - AI and publishing controversy
  - Anthony Horowitz AI
  - AI detection publishing
  - AI ghostwriting authors
  - novel drafting with AI tools
  - AI writing workflow
excerpt: "Publishers are asking novelists to prove where every sentence came from. As it turns out, I already have the receipts."
draft: false
---

*Publishers are asking novelists to prove where every sentence came from. As it turns out, I already have the receipts.*

At some point on Tuesday evening, while I was draining the pasta, a computer in the spare room rejected a paragraph of my novel and sent it back to be rewritten. It did this without consulting me. It had already done it twice that day to the same paragraph, for the same reason, and I only found out on Wednesday morning when I read the overnight logs with my coffee. I mention this because it is about as far as it is possible to get from what most people imagine when they hear that somebody is writing a book with AI.

What most people imagine, I think, is the one experiment they have tried themselves. They opened ChatGPT, typed "write me a novel about a detective", read four hundred words of beige, and concluded that the technology cannot write. Given that experiment, it is a perfectly sound conclusion. One request in, one finished object out, and the object is dreadful. The trade calls this a zero-shot prompt, a prompt being simply the typed instruction, and it is roughly equivalent to walking up to a stranger at a bus stop and saying "be brilliant, please, off the top of your head."

My method has almost nothing in common with that, and the honest word for it is not writing so much as revision, on an industrial scale, starting long before any prose exists.

It begins with a vision, usually somewhere inconvenient. I am walking down the street and a question arrives unbidden: would personalised cancer treatments end up weaponised as a means of assassination? What would massively extended lifespans do to wealth, and to the people who have none? A question like that has the arc of a story folded up inside it, and it bounces around in my head for days, sometimes weeks, before any machine is involved at all. The first session with an AI is where the teasing-out starts: dozens of small prompts, one point each, thrashing out what the book is actually for. Not the plot, the point. What it should say, what it should do to a reader, why it deserves to exist. Then who the characters are and what each one contributes. Then the three acts, and how the plot divides across them. Then each individual chapter is given a job, something it must move along, because a chapter without a job is padding. This is the stage where it is most tempting to hand over to the machine early, and where handing over early is fatal, because this is where the cycles of tension and release get built in, and their absence is precisely what makes machine prose feel like wallpaper. Only when all of that is settled does the plan go down to its finest grain: a beat sheet for every paragraph in the book, a line or two describing what each paragraph must accomplish.

Two different AIs are involved by this point, because the various systems on the market have genuinely different strengths, the way one colleague is good in a brainstorm and another is good at writing the minutes. One helps me argue the shape out; another turns the agreed shape into a formal writing plan. The plan is a map, but it also carries a list of prohibitions. Never use this phrase twice. Avoid these sentence patterns. Nothing about the weather doing anything meaningful. The don'ts turn out to matter as much as the dos.

Then the software I opened with takes over. It is a type of program called an agent harness, which sounds grander than it is. A harness is just a piece of software that sits between me and the AI and manages the conversation so I don't have to: it reads the plan, sends the AI a work order for one paragraph at a time, catches what comes back, and checks it. Mine is called OpenClaw, I run it myself, and the checking is the part I am proudest of. Every returned paragraph is tested against the prohibition list, and a paragraph that fails goes straight back out to be rewritten, as many times as it takes, which is what was happening on Tuesday while I dealt with the pasta. The harness also keeps notes as it goes, so the checks get smarter through the book. If a father's age was mentioned in chapter two, the system can verify that he is still plausibly older than his son in chapter nineteen. Novelists have been failing that particular test unassisted for two hundred years.

The draft that accumulates is not a word-processor document. It is stored in a format called XML, which deserves a sentence of explanation because it is doing a lot of quiet work. XML is simply a way of storing text with labels attached, readable by both humans and computers, and the practical effect is that the draft stops being one long scroll and becomes a card index: every paragraph sits on its own numbered card, carrying its position in the sequence, a record of the instruction that produced it, and an empty space for notes. Because every card is numbered, two drafts can be compared card by card, months apart, and nothing is ever lost, only superseded.

One newer trick: different characters can be drafted by different AIs. The protagonist might be written by one company's model and the antagonist by another's, because each system has its own habits of voice, and separating them stops everyone in the book quietly converging on the same register by chapter five.

All of this costs money, and the harness is built to be mean about it. AI companies bill by the token, their unit of text, roughly three-quarters of a word, and the naive approach of sending the entire manuscript along with every request would make a novel ruinously expensive. Instead each work order carries just enough context to write its one paragraph, and the frequently reused material is sent in a way the AI company has already processed and therefore discounts. Even so, by the time every chapter is drafted, hours have passed, thousands of requests have been sent, and millions of tokens have been spent.

Then the human part starts. I import the card index into an editing program I wrote myself, and I read the whole book, one paragraph at a time, with the instruction that produced each paragraph displayed alongside it and an empty box underneath. If a paragraph is wrong, and it usually is, I either rewrite it there and then or leave a note telling the machine what to do differently. A separate analysis pass counts every repeated word and phrase in the manuscript and produces what I have come to call the toxicity list, which I go through approving and condemning; the condemned repetitions generate their own work order for rewrites.

When the last paragraph has been read, the whole thing is exported and fed back into the harness for the next pass, then comes back to the editor to be read again. That is one lap. *The Mayfly Mutiny*, my first novel, went round seven times before I would let anyone see it.

The comparison I keep reaching for is painting by numbers, except that I am the one drawing the picture and numbering the regions, and the machine is doing the colouring in. People ask whether the book is really mine when so much of the text arrived from elsewhere, and I think it is, in the way the picture belongs to whoever drew the outlines. Occasionally the colouring comes back with the unicorn's nose in purple instead of white, and I send it back.

The question of whose book it is has stopped being a parlour game this year. In the spring, Anthony Horowitz cheerfully told interviewers that he uses ChatGPT constantly for research and feels as though he is cheating in a school exam; nothing whatever happened to him. In August, a debut novelist named Jerry Falade said much the same thing about his own use of it and watched a book deal reported at around two million dollars collapse in an afternoon, after his agents told publishers they could no longer authenticate how his manuscript had evolved from origin to completion. The difference between the two men, as far as I can establish, is a back catalogue.

That phrase, from origin to completion, is worth sitting with, because it describes the exact thing my card index is. Every paragraph in my books carries its full history: the beat it was written to serve, the instruction that produced it, every rejected version, every note I left, every rewrite, mine and the machine's, across seven drafts. If the industry's new anxiety is that nobody can prove how a manuscript came to be, then I am in the strange position of being the most auditable novelist I know. I could not conceal the machine's involvement if I wanted to, and I have never wanted to; what I can do, which the traditionally mysterious human process cannot, is show the receipts for every sentence.

The system is half-finished and improves every month, which means *The Mayfly Mutiny* is as bad as any of this is ever going to get. *The Chilli Racers* is on its third lap now and goes back round at the weekend. It will come back slightly better than it went in. There are still two places where the unicorn's nose is purple, and I have made notes on both.

Anyone curious about the machinery is welcome to get in touch and ask to see under the bonnet.
