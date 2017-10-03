---
title: "Likes"
date: 2017-08-20T18:18:44+08:00
categories: ["support"]
tags: []
weight: 20

authorname: "Ross Parker"
authorurl: "http://rossparker.org/"
---

The aim of a like (or a star, as they were sometimes known) is to give a user positive feedback on some aspect of their school life. Gibbon has a unified implementation, allowing for any module to issue likes to any user. In /functions.php you will find the following functions that allow you to manipulate likes:

*   setLike
*   deleteLike
*   countLikesByContext
*   countLikesByContextAndGiver
*   countLikesByRecipient

In relation to likes, context means the situation in which the like was issued. It has two parts: a name and a value. The name would generally be a database field which identifies the context (e.g. `gibbonPlannerEntryID` for a star relating to a lesson plan) and the value would be the value of that field (e.g. 0000007365).
