---
title: "Claude's Watermark Affair"
date: 2026-08-15
categories:
  - ai-authorship
image: "/assets/images/posts/watermark.jpg"
keywords:
  - Claude watermark
  - AI text watermarking
  - EU AI Act Article 50
  - SynthID text
  - watermarks-remover
  - AI content detection
  - invisible watermark AI writing
  - AI and authorship
excerpt: "Claude's future models will watermark everything they generate. On SynthID, the EU AI Act's Article 50, and what that means for a writer who leans on AI."
draft: false
---

*Notes from the ducking stool*

This week one story imprinted on me more than any other. It was that Claude's future models will carry watermarks in everything they generate.

The background, briefly, because this did not come out of nowhere. Gemini has been quietly watermarking its text since 2024 using a system called SynthID, which Google published in Nature and then partly open-sourced, and which nobody outside Google can actually check because detection needs the key and Google keeps the key. The EU AI Act's transparency obligations landed this month, and by the end of July around a hundred and ninety organisations had signed the accompanying code of practice: Google, Microsoft, OpenAI, Meta, Mistral, Cohere and Anthropic among them. Elon Musk's xAI did not sign, which will surprise nobody. New Claude models mark from launch, older ones have until December to catch up, and the marking applies wherever Claude is sold rather than only in Europe. That last part was Anthropic's own call. Running two pipelines is expensive, so everybody gets the European one.

As an AI-friendly writer I was quite triggered by this news, for a few reasons.

Firstly I view text differently to audio or video. It is easy to disguise a watermark in audio or video because they are much denser than text, megabytes and gigabytes as opposed to kilobytes. That is why streaming services get away with compression: there is enough redundancy in the data that vast swathes of it can be altered without anybody noticing. You could literally encode my DNA sequence into a digitised Hollywood movie and never see a gene on screen.

Text is different. There are a few ways to watermark text. The inclusion of obscure and invisible Unicode characters, for example, and we have seen AI using those already for formatting purposes, but such characters are easily stripped out by any good programmer's text editor. More likely and more sinister is the choice of words. The idea is to divide words into groups, assign numbers to each group, and then cherry-pick from those groups so that a signature is woven into the text as it is generated. So:

"The results suggest that..."

"The results indicate that..."

"The results show that..."

All ostensibly have the same meaning, but the choice between them can be used as a cipher.

As an author who leans heavily on AI, I am used to reading back what is written and adding my own flavour. What I object to is that the wishes expressed in my prompt may now produce text I am forced to correct, not because the model has made a bad word choice by accident but because it has made one deliberately, to satisfy an unelected bureaucrat in Brussels. (Yes, all right, the Act went through the Parliament and the Council like everything else, and the code of practice on top of it was voluntary and drafted by independent experts, and Anthropic signed it of its own free will. But we all sat through 2016 and you know exactly which register I am reaching for.)

Another thing is that this technology is imperfect and can issue misleading reports. Someone writing a hundred per cent human piece, like this blog, who then hands it to Claude for editing can pick up a watermark from the slightest of changes. Someone who hands off their ideation entirely and gets back a hundred per cent AI piece can rewrite it and destroy the watermark. That is plainly unfair, and it penalises the wrong type of author. Anthropic, to its credit, says as much in its own documentation: a mark means Claude touched the text, not that Claude wrote it, and heavy paraphrasing may remove it altogether. (There is also a carve-out buried in Article 50 for content that has had human review and where somebody holds editorial responsibility for publishing it, which sounds a lot like every blogger who has ever pressed publish. Whether that survives contact with the first pearl-clutching editor to run a detector over a freelancer's copy is another matter.)

Social media has been rich on this. The observation trotted out most often is that if you are the sort of person who wants to remove a watermark because you are passing off AI text as your own, you are probably the sort of person the legislation is designed for. This is the same argument used about draconian surveillance laws: if you are not a criminal, why worry. Well, that is not the point. Some things are best kept from the gaze of Big Brother. I am fine with a private security firm having a camera on the street where my ATM is, to deter muggers. I would be less keen if that camera could read my PIN.

Another view expressed is that the AI companies are falling in line without complaint because they think this will turn out to be a big nothing burger. There may be something in that, although thanks to the EU the world is still enduring cookie warnings, which are a royal pain in the wazoo if you are in the line of work where you visit dozens of new websites every day.

Maybe common sense will eventually prevail and the SHE USES AI, SHE'S A WITCH, BURN HER furore will die down once folk realise how useful the technology is. In the meantime, in the nature of the arms race so typical of the war between the establishment and the people that we have seen ever since the world wide web escaped the CERN lab, solutions to removing watermarks are already appearing. The open-source watermarks-remover repository went up on GitHub within a day of Anthropic's announcement and has collected several thousand stars since. It works in two stages: first it strips the invisible Unicode characters and non-standard formatting used as machine-readable markers, then it passes the text through a secondary, smaller language model to swap synonyms and restructure sentences, supposedly scrambling the underlying statistical patterns. I have not tried it, and it is unclear whether the disruption done by the second model is a solution or a further problem. The author appears to agree with me, having said publicly that the statistical part is not really working yet, and noting in his own documentation that rewriting through a cheaper model just swaps the expensive model's word choices for the cheap one's. Nobody can settle the argument either way, because Anthropic has not released a detector.

I cannot help feeling that all this anti-AI posturing is just rearranging the deck chairs on the Titanic. AI will disrupt industries and reshape society, and a watermark or a warning message will not do a thing to change that. Change is the only constant we have got, and it has never much cared whether we embrace it or not.
