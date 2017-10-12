---
title: "Coding Standards"
categories: ["support"]
tags: []
weight: 20
contributors: ["rossdotparker"]
---

## General

1.  Avoid PHP Shortcodes - as of v8.0.00 Gibbon is moving away from `<?` in favour of `<?php`.

## Security

1.  When using `isActionAccessible()`, always hard code the address, rather than relying on session, get, post or server variables.
2.  For database connections, use the PDO class (instead of the more common mysql one), and parameterise any user-generated inputs. With PDO's parameters, you do not need to escape your input.
