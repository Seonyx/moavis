---
title: "A Week of Out-of-Process Calls"
date: 2026-08-01
categories:
  - news-and-updates
excerpt: "Printer repairs, a swollen tablet battery, and AI-assisted novel rewrites: a week of out-of-process calls, while Chilli Racers patiently waited."
image: "/assets/images/posts/DeskCollage1.jpg"
keywords:
  - "AI writing workflow"
  - "Claude Code"
  - "novel drafting with AI"
  - "multi-model writing"
  - "OpenClaw"
  - "printer repair vs replace"
  - "swollen tablet battery"
  - "AI agents for authors"
  - "indie publishing"
  - "Chilli Racers"
draft: false
---

*A week spent everywhere except the main program.*

Programmers have a phrase for it: the out-of-process call. It's what happens when a program can't do a job within its own four walls and has to hand the work to some other process entirely. These calls are notoriously slow, and far more likely to fail than anything you keep in-house. Which brings me neatly to my week, in which the main program (reading the third draft of my forthcoming novel) barely got a look in.

It started with the printer. I use paper more than I probably should admit. I print off crosswords, for one thing, because doing them online is hopeless; the answer is always a single guilty click away, and I have no willpower. So they get printed and done properly, with a pen. Add in the occasional official form and a working printer becomes non-negotiable in this house.

Printer repair follows a well-worn path. You check for paper jams, you turn it off and on again, and then things get more involved. My usual first port of call would be Claude, but I'd already burned through my tokens for the week, and my feelings about Sam Altman mean ChatGPT rarely gets a look in these days (a story for another time, perhaps). So I quizzed Google's Gemini instead, which had me unscrewing side panels to reach the little dock where the print cartridges park themselves when off duty. Apparently there's a sort of sponge shower facility in there, and it clogs. Two hours later, ink up to my elbows and nothing to show for it, common sense prevailed. I washed my hands of the whole business, literally, and ordered a new Brother from Amazon.

Barely a day passed before my el cheapo Android tablet followed suit. It would switch on, but the screen stayed resolutely black. Back to my little hardware engineer, who warned me that when the internal battery fails it can swell, pushing the graphics ribbon cable clean out of its socket. Sure enough, when I picked the thing up it was visibly pregnant. Gemini also suggested, with some urgency, that the house might burn down unless I donned a hazmat suit and tonged it straight to the recycling centre. I obediently complied.

And so it went, one out-of-process call after another, while the main job sat waiting. That job was reading the latest draft of Chilli Racers, now on its third pass. Reading draft two, I felt the final act fell flat. The climax is a car race; it should be the exciting bit, the payoff after a slow burn, and instead it plodded.

Since people sometimes ask how I work, here's a glimpse. I wrote a critique report for Claude Fable explaining the problem, and we went back and forth until the brief was clear: more tension, less third-person description of the race, more first-person exchanges, radio chatter between the drivers, that sort of thing. All my drafts conform to a paragraph-level Document Type Definition which strictly defines the structure of the book, so I fed the XML into Claude and asked it to produce a draft-three rewrite work order for Claude Code. It knows the drill by now; we've honed this process over many iterations of many books. Then I went to one of my OpenClaw servers (I run three, and one happened to be sitting idle) and set Claude Code to work generating the instructions, with OpenClaw dispatching them to whichever AI models I specify.

The model choices keep shifting, but at the moment I use DeepSeek for the tooling and Claude or Gemini for the prose voices. Using different models for different voices works remarkably well. In another work in progress, Polis, I divided the characters into a good guy camp and a bad guy camp and assigned a different model to each. It worked a treat, because each model has its own habits of language, and those habits become the character of the camp.

Meanwhile, everything else quietly kept churning. I have various agents monitoring possible places to get books reviewed, finding stories for the weekly Moavis newsletter, drafting the daily social posts. All of it ticked along in the background without complaint while I knelt on the floor covered in ink.

Cory Doctorow has a bit of jargon for this sort of arrangement. In automation theory, a centaur is a human head on a tireless machine body: you decide what wants doing and the machine gallops off and does it. A reverse centaur is the same creature upside down, a machine that has acquired a human being to do its fetching and carrying, at a pace of the machine's choosing. His book on the subject, The Reverse Centaur's Guide to Life After AI, came out in June, and I found myself chewing on it all week, mostly because I couldn't work out which end of the centaur I was. The hardware failed and waited, quite serenely, for me to dismantle it, mend it, or ferry it to the recycling centre. The AI churned out prose and waited, just as serenely, for me to read it, pass judgement, and feed it instructions for another lap. Everything in this house, silicon or otherwise, seems perfectly content to sit there until I come along and service it. Servants and masters might be putting it too grandly. But I notice I was the only one doing any kneeling.

If only one of them could fix a printer, or carry a tablet to the recycling centre. I'd have a new book for you by now. As it stands, Chilli Racers should be out by the end of the summer, distractions permitting. We can but hope.
