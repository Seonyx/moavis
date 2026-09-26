---
title: "AI Isn't a Photocopier: What the Copyright Cases Actually Show"
date: 2026-09-26
categories:
  - ai-authorship
image: "/assets/images/posts/prompt1.jpg"
keywords:
  - AI copyright
  - AI plagiarism
  - LLM memorisation
  - AI regurgitation
  - training data
  - pirated books
  - fair use
  - New York Times v OpenAI
  - GEMA v OpenAI
  - Kadrey v Meta
  - song lyrics
  - Straight and Crooked Thinking
  - Gerard Hoffnung
excerpt: "Is AI just a photocopier for other people's work? What the copyright cases show about when, and why, AI actually reproduces text word for word."
draft: false
---

*Why verbatim copying by AI is rare, and why humans do it more often than we admit*

This week there have been many stories in the AI writing space reinforcing a trope I hear a lot, that LLMs are just photocopiers, parroting work that someone else created and owns the rights to. There are a couple of flaws in this view that tend to get lost in the coverage, so let's deep dive into why I believe this argument to be so weak as to be treated with contempt.

First is the difference between 'all' and 'some'. This was impressed on me at a young age when my English teacher recommended *Straight and Crooked Thinking* by R.H. Thouless. The book is an inspiration to anyone eager to equip themselves with the fundamental tools of critical thinking about the media we consume. News articles often use the word 'all' misleadingly, or worse still, imply 'all' when in reality 'some' is the case. This is often done deliberately to win arguments by deceit. This is exactly what has happened to the public discourse on AI.

Barely a day goes by without my doing battle with anti-AI folk on social media and meeting someone who asserts that AI is built on stolen copyright work. This is wrong on a couple of counts. Firstly, yes, some AI companies trained on pirated works, and we've seen legal cases about this. However, not all AI companies used pirated material, only some of them did. (Copyright material in general is a different matter. Almost everything on the open web belongs to somebody, and whether training on it counts as fair use is exactly what the courts are still arguing about.) Secondly, the ones that did use pirated material, mainly books, did so as part of a much wider training programme, of which the pirated books were a fairly small part. So only some of the training material was stolen. The distinction is important because spurious arguments get built on top of the incorrect assumption, such as the idea that copyright owners whose work was used illegally for training also own a share of everything the model goes on to generate. Those suing the companies behind the big foundation models can't claim they part-own everything those models produce. A group of authors tried something close to it against Meta in 2023, arguing that the model itself was a derivative work of their books, and the judge threw the theory out as "nonsensical".

Another flawed argument is that AI actually copies anything. There have been a few instances in the court cases where an AI has been reported to have regurgitated parts of an original work, though these cases are quite rare. AI models are not databases. They don't simply 'store' text in the way you would save text in a Word document. AIs are trained on material so that they can learn the statistical patterns used in language. The oft-cited analogy (which is rather too simplistic for my liking but serves a useful purpose here) is that AI predicts the best choice of next words from what has gone before. It doesn't 'know' a passage in the same way we might recite a Kipling poem. It calculates its answers, and even then it does so with a built-in level of randomness, so it rarely gives exactly the same response twice to the same question. (In fairness, a handful of very heavily duplicated texts do end up close to stored. Researchers coaxed most of the first Harry Potter book out of several commercial models earlier this year, and a Munich court has ruled that song lyrics memorised by ChatGPT count as copies.) So when AI does recount a verse of a song, or a few paragraphs from a book, researchers are fascinated to learn why. It turns out there are several contributing factors.

One of these is found in the original prompt. If the AI is asked to complete the sentence "To be, or not to..." then choosing anything but 'be' would come as a bit of a surprise to any of us who remember our school Shakespeare. This is an overly simplistic example, but it illustrates that the construction of the prompt plays a role in what comes out the other end. Another issue comes from the training data itself, and how it shapes the weights. This particularly affects song lyrics, which often appear hundreds or thousands of times across the web. If someone prompts for a song about a rose garden, a certain Lynn Anderson hit that popularised the phrase will have appeared so many times that it heavily weights the lyric, so some parts of it may appear. Add the tendency of lyrics to follow rhyming schemes and the likelihood of those lyrics being selected rises further. (This isn't hypothetical. Music publishers suing Anthropic claim that asking Claude for a song about the death of Buddy Holly produced the words to American Pie.)

So reproduction of original works is unlikely but not impossible. However, in many of the court cases so far, exceptional circumstances were involved in generating the copied material. They have included feeding long excerpts of the original into the prompt and, according to OpenAI, retrying prompts tens of thousands of times, both rather contrived ways to induce a response that is not normally seen in everyday AI use.

Finally, something I mentioned in [a previous blog](/blog/posts/2026-06-06-to-prompt-or-not-to-prompt/): we humans plagiarise in a far more prosaic way than AI does. Since this is an article about copying, I'll reproduce it here:

> A few weeks ago I wrote [a post](/blog/posts/2026-05-01-the-night-the-internet-gods-turned-on-me/) about an evening's losing battle with passwords, passkeys and two-factor authentication, the whole modern liturgy of proving you are not a robot. I presented the idyllic setting in which I found myself, then shattered it with the line, "Then I lost my presence of mind." I did not invent that. I took it, knowingly, from Gerard Hoffnung. In *The Bricklayer's Lament* the wretched builder reaches the point in his letter where he writes, "It was at this point that I lost my presence of mind." I have carried that line around in my head for decades, and out it came, barely altered, in a blog post of my own.
>
> There is the real point. When a human reaches for a phrase, we usually reach for the one phrase we happen to have lodged in memory. We do not have a thousand alternatives fanned out in front of us. The machine, oddly, does. It is choosing from a vast spread of weighted possibilities, most of which we will never see, which is exactly why its output can feel smoothed and averaged. So the lazy charge that AI is just a parrot stitching together other people's words misses something. A human doing the same thing is often the more naked plagiarist. We only have the one parrot, and it only knows the lines it grew up with.

So the next time someone accosts you on social media, I give you my permission to use any of these arguments against them. They are not copyright!
