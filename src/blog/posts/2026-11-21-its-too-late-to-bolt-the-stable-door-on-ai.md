---
title: "It’s Too Late to Bolt the Stable Door on AI"
date: 2026-11-21
categories:
  - ai-politics
image: "/assets/images/posts/castle.jpg"
keywords:
  - Stuxnet
  - Cybersecurity
  - AI Safety
  - Open Source AI
  - Science Fiction
excerpt: "A 1960s robot rescuing the villain, and Google’s first fully autonomous cyber attack: why calling time on AI development may already be too late."
draft: false
narration:
  src: "/assets/audio/its-too-late-to-bolt-the-stable-door-on-ai.mp3"
  seconds: 402
---

*What a 1965 episode of Lost in Space taught me about AI, autonomous hacking and who ends up inside the castle.*

Ever the fan of science fiction, I gleefully watched the remake of ‘Lost in Space’ recently, which was excellent. That inspired me to seek out the original series, which aired before I was born! The series is perhaps best known for its robot and the catchphrase “Danger, Will Robinson”, which entered into folklore (despite the Robot only saying it once in the entire run, and not until the third season).

In episode three, titled ‘Island in the Sky’, an interesting situation occurred. If you’re not familiar with the show (spoiler alert), it’s about a family marooned in their spacecraft with an interloper, Zachary Smith, who stowed away when the thing launched. As far as I could figure out, he was the chief reason they went off course in the first place, though to a Sci-Fi author like me, the whole mission seemed a bit questionable to begin with. Anyway, Smith reprograms the robot to do his bidding, and at one point the family overcome Smith, locking him in the suspended animation device to keep him out of trouble. Then we see the robot rescuing him, awakening him from his slumber. At that moment I had an epiphany that rang alarm bells about the emergence of AI we’re seeing at the moment. The robot did exactly what it had been programmed to do, by the bad guy.

The previous day I’d caught a YouTube video on the Pindex channel where the Lordly Stephen Fry sagely warns against the dangers of AI and trots out a lot of footage of experts like Hinton banging on about safety standards and guard rails. My epiphany was that none of that matters, because it’s too late. It was too late when the first LLM was built. It was too late when Frank Rosenblatt simulated the perceptron on an IBM 704 in 1957. Hell, it was too late when Charles Babbage conceived of the Analytical Engine in the nineteenth century.

Coincidentally, this week Google published its latest AI threat report, and the headline is that fully autonomous cyber attacks are now a thing. Somebody has built a framework (imaginatively named exploit_agent) that keeps an eye on security patches for popular web software. It compares the code before and after each patch to work out which hole has just been plugged, writes an exploit for it and then runs it, all without a human lifting a finger. Hackers have automated things for decades, but those were mostly dumb loops. Back in September, Google said it hadn’t yet seen anyone running a fully autonomous pipeline like this in the wild. Two months later, here we are. (In fairness, the thing also hallucinates targets that don’t exist and leaves its fingerprints all over the place, so it isn’t exactly a criminal mastermind.)

It doesn’t matter if you call a halt to AI development now. There is already enough power in folks’ hands to do ‘civilisation ending’ damage. Even without AI, we can see that systems can be attacked by a bad actor with limited resources, a little time and a lot of motive.

Last month somebody got into the refrigeration controllers of around 700 French supermarkets and turned the freezers into ovens, with some systems cranked up as high as 50°C. A second wave hit supermarkets in at least five European countries at the start of November, including a Swedish store whose fridges and freezers were also set to 50°C. My first thought was, “serves them right for exposing refrigeration control systems on the internet”. However, I was forgetting Stuxnet.

In case you’d forgotten it too, Iran was enriching uranium with centrifuges at its Natanz plant, which was air-gapped, meaning it wasn’t connected to the internet at all. Somebody (widely believed to be the US and Israel, though neither has ever owned up) wrote a worm that got carried inside on a USB stick, probably by way of contractors who worked on the site. Once in, it went looking for the Siemens controllers running the centrifuges and made them spin faster and slower than they could stand, while showing the operators readings that said everything was fine. Estimates suggest it wrecked around a thousand centrifuges, though Iran has never confirmed the damage, and the story still has a paucity of proof and a huge capacity for myth. Sneaking malware in on removable media is hardly new, mind. Back in the floppy disc days there were plenty of viruses kicking around on the Amiga and Atari machines that were popular at the time. One was a white-hat virus that attached itself to boot sectors and stopped the boot sector being written to by black-hat virii, but I digress. The point is that the level of technology isn’t quite as important as the motive and determination of the bad actor to do something abysmal.

Taking this point further, it isn’t the big frontier models that worry me. It’s that everyone now has the knowledge: the scales have been lifted from our eyes. Anyone with a smattering of technical know-how could construct a local AI model from scratch that could inflict damage. The training would make ‘scratch’ a pretty gnarly option, so using one of the readily available open source models would probably be a more efficient starting point. (Google’s report noted that exploit_agent was already mixing frontier models with locally hosted ones.) Then though, the world is thine oyster. I liken this to the notion of a dirty bomb. It is beyond the reach of an individual or private enterprise to build a conventional nuclear weapon. However, it would be a great deal easier to get hold of a quantity of radioactive material (spent fuel, for example, some of which until recently travelled regularly by train through London) and strap that to a regular explosive. The fallout could put a good chunk of the City of London off limits for years, or prompt a clean-up operation costing billions.

In the same way, a hacker with a small AI model and a decent graphics card could bring down whole sectors of the economy, dwarfing the outages we saw last week, when Microsoft 365, Workday, the US air traffic system, several big banks and Apple all fell over within six days of each other. The official explanations so far are mostly bugs and botched updates. Whether any of it had an AI’s fingerprints on it, be that an attacker or simply a bit of machine-written code nobody checked properly, I doubt we’ll ever be told.

My point is that the horse has gone, so there is little point in bolting the stable door. It may be, as some have suggested, that the frontier model providers are positioning themselves as the protectors of the systems the bad actors would attack. If so, we’re entering a new type of cold war. One where the billionaire-owned AI companies are the ones in charge of the castle, and the rest of us, including the army, navy and air force, are outside the moat looking in. This is the moment where power shifts, as described in the book *The Sovereign Individual*, from nation states to private individuals. Or rather to companies, though they answer to a handful of tech billionaires who are the Lords anew. I don’t think many of us have a clue how this is going to play out, but I doubt it will be good for those of us outside the castle.

Until next week.

Mo
