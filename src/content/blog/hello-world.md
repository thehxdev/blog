---
title: "Hello World: Building Simple, Fast Systems"
description: "Introduction to who I am, what I build, and my approach to software."
pubDate: 2026-10-03
tags: ["intro", "systems", "philosophy"]
---

Welcome to my personal site. I am Hossein ([@thehxdev](https://github.com/thehxdev) on GitHub), a software engineer focused on low-level systems, networking protocols, compilers, and pragmatic software design.

I built this space to document what I learn while building software, break down technical problems, and share notes on building lean, reliable systems.

## What I Work On

Most of my work revolves around systems programming where control over memory, concurrency, and performance matters:

- **Networking & Protocols:** Implementing custom and standard network protocols, such as [`ssc`](https://github.com/thehxdev/ssc) (a Shadowsocks-2022 proxy in C), [`Repload`](https://github.com/thehxdev/Repload) (resumable file uploads over TCP), and minimal API tooling like [`telbot`](https://github.com/thehxdev/telbot).
- **Compilers, Interpreters & VMs:** Building execution engines and parsers from the ground up, including [`bfi`](https://github.com/thehxdev/bfi) (an optimizing BrainFuck interpreter and compiler in C), compiler backends with [`qbe-zig`](https://github.com/thehxdev/qbe-zig), and architecture VMs like [`lc3-vm`](https://github.com/thehxdev/lc3-vm).
- **Core Primitives & Data Structures:** Zero-dependency libraries built from first principles, like [`jacson`](https://github.com/thehxdev/jacson) (a streaming JSON parser and query engine in C) and [`chan`](https://github.com/thehxdev/chan) (a thread-safe channel queue in C99).
- **Graphics & Utilities:** Experimenting with graphics engines like [`Zay`](https://github.com/thehxdev/Zay) (a multi-threaded software renderer in Zig) and [`quantizer`](https://github.com/thehxdev/quantizer) (median-cut color quantization in Odin).

My primary tools of choice are C, Zig, Rust, Go, and occasionally Odin and Assembly when exploring machine-level behavior.

## Core Mindset

Over time, I have found that excessive abstraction is the root cause of most bloated, fragile software. A few principles guide how I build:

1. **Don't design by abstraction:** Premature abstractions lead to convoluted architectures and leaky abstractions. Write concrete code first; compress and generalize only when patterns clearly emerge.
2. **Action produces information:** Thinking ahead cannot reveal all edge cases. Writing an obvious, working solution—even a rough one—yields immediate feedback and exposes the true constraints of the problem.
3. **Profile before optimizing:** Speculative optimization wastes time. Measure actual bottlenecks, understand cache and memory behavior, and optimize where it counts.
4. **Keep tooling minimal:** Software should be easy to inspect, build, and deploy. This blog follows the same philosophy: static HTML, native CSS, zero client-side JavaScript, and zero tracking.

## What to Expect Here

Here I will share technical write-ups, deep dives into network protocols and bytecode interpreters, benchmarks, and practical engineering lessons.

You can find my code on [GitHub](https://github.com/thehxdev) or reach out via email.
