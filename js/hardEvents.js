var eventReturner = {

college1: function(player) {
  player.college = false;
  return {
    title: "CHUG! CHUG! CHUG!",
    text: 'Like many other freshmen, you drink to fit in. Well, you only fit in with the college dropouts now.'
  };
},
college2: function(player) {
  player.college = false;
  return {
    title: "Stop right there, Picasso...",
    text: "It turns out there aren't a whole lot of jobs you can get with an Art degree in this town... I hear Wendy's is hiring!"
  };
},
college3: function(player) {
  player.money += 5000;
  return {
    title: "Checkmate!",
    text: "You got a $5,000 scholarship for your exemplary performance in Chess Club. Nerd."
  };
},
college4: function(player) {
  player.college = false;
  return {
    title: "You're on the 10-year plan.",
    text: "The college years are the best years... And you were so busy enjoying those years that you forgot to graduate. Oops!"
  };
},
college5: function(player) {
  player.money -= 70000;
  return {
    title: "Your brain scan showed numerous abnormalities...",
    text: "You thought you wanted to go into Philosophy, but after a few years of that you decided that Equine Sciences was for you. Turns out you're allergic to horses and it took you a couple years to find that out, so you switched to Neuroscience. Knowledge is expensive! You lose $70,000."
  };
},
college6: function(player) {
  player.college = false;
  return {
    title: "Dick and Jane feel your pain...",
    text: "Not everyone is smart. College is hard for some people. Like you! Am I using small enough words for you to understand?"
  };
},
college7: function(player) {
  player.college = false;
  return {
    title: "Save our Forests!",
    text: "You did super well in college! Unfortunately, by the time they got to your name at graduation, they had actually run out of diplomas."
  };
},


//MARRIAGE EVENTS
marriage1: function(player) {
  player.money -= 50000;
  return {
    title: "Time to look up the bus schedule.",
    text: "Your spouse suspected you were cheating and lit your car on fire. Whether you were or weren't is       unimportant; that car was worth $50,000!"
  };
},
marriage2: function(player) {
  player.money -=70000;
  return {
    title: "Mail-order",
    text: "You ordered a Russian mail-order bride/groom, but you went cheap and didn't get next-day shipping. Someone forgot to poke holes in the box, and when the package showed up, it became apparent that you were going to have to find a good place to hide a body. You pay $70,000 to have a mafia cleanup crew dispose of the body."
  };
},
marriage3: function(player) {
  player.money +=200000;
  return {
    title: "Gold digger",
    text: "You really married into a wealthy family! You get $200,000 for your stocking stuffer this Christmas."
  };
},
marriage4: function(player) {
  var moneyLost = player.money/2
  player.money -= moneyLost;
  return {
    title: "Lawyer up!",
    text: "D-I-V-O-R-C-E, give your ex-spouse half your money!"
  };
},

//ADDICTION
addiction1: function(player) {
  player.addiction = true;
  player.curr = drugCircle;
  player.position = 0;
  return {
    title: "The Needle and the Damage Done",
    text: "Track marks, collapsed veins, gangrene, bloodshot eyes, rotting teeth, and a cornucopia of infectious diseases should have turned you back. But heroin is all you crave. She's your lover, and with her in your veins, you finally escape from that crushing defeat of never living up to what mom and dad always said you could achieve. Enter the addiction circle."
  };
},
addiction2: function(player) {
  player.addiction = true;
  player.curr = drugCircle;
  player.position = 0;
  return {
    title: "You are, quite simply, a Viagra Addict.",
    text: "Regardless of whether you're male or female, Viagra should never be taken in handfuls, but you don't care. It's been 34 hours... Maybe you should go see a doctor. Enter the addiction circle."
  };
},
addiction3: function(player) {
  player.addiction = true;
  player.curr = drugCircle;
  player.position = 0;
  return {
    title: "The Video Game Rehab Center for Troubled Gamers is Your New Home.",
    text: "Your love for video games has turned into an addiction. You can no longer discern between reality and the virtual world; you have no clarity of vision, and your fine motor skills are deteriorating from carpal tunnel. You simply can't feel love or pain, joy or sorrow any more; the only things you experience are new high scores and the empty sadism of spewing slurs at 14-year-olds through your headset in Call of Duty games. Enter the addiction circle."
  };
},
addiction4: function(player) {
  player.addiction = true;
  player.curr = drugCircle;
  player.position = 0;
  return {
    title: "Speed Kills",
    text: "The need for speed; you've got it. Your addiction to methamphetamines puts you in the addiction circle. You've also destroyed every house you've ever lived in."
  };
},


//DISASTER (blue squares)
disaster1: function(player) {
  player.money -= 70000;
  return {
    title: "It's Raining Cats and Dogs!",
    text: "It's raining cats and dogs! Literally. Your car is trashed by a particularly large tabby going through the engine block at terminal velocity. You lose $50,000. Luckily, the tabby is fine."
  };
},
disaster2: function(player) {
  player.money -= 100000;
  return {
    title: "When a Butterfly Flaps Its Wings in China...",
    text: "Did you feel that? An earthquake knocked everything off of your shelves. Maybe you shouldn't have invested $200,000 in antique fine china..."
  };
},
disaster3: function(player) {
  player.money -= 100000;
  return {
    title: "Bummer...It was an Act of Nature.",
    text: "Did you know that the Japanese word 'Gojira' is a portmanteau of the Japanese words for whale and gorilla? Well, your house was stepped on by Godzilla and homeowner's insurance doesn't cover giant monster-related damage, so it looks like you're out of $100,000."
  };
},


//HEALTH (blue squares)
health1: function(player) {
  player.health += 2;
  return {
    title: "Lab Grown Tissue is Your Friend.",
    text: "Due to advances in medicine, we can finally grow organs like kidneys and hearts. You get a brand new ticker and an extra hip! Gain 2 health."
  };
},
health2: function(player) {
  player.health -= 3;
  return {
    title: "Thick Skin",
    text: "The common cold isn't a big deal, but your cold ain't common, and it's actually not a cold. It's Fibrodysplasia ossificans progressiva, and it makes your skin slowly turn into bone. You lose 3 health and all chances at winning beauty pageants."
  };
},
health3: function(player) {
  player.health -= 2;
  return {
    title: "Put that in your Pipe and Smoke It.",
    text: "I guess that WASN'T just a canker sore... Lose 2 health."
  };
},
health4: function(player) {
  player.health -= 2;
  return {
    title: "Small Heads Suck.",
    text: "Your mother had the Zika Virus when you were born, and you have a condition called 'microcephaly'. Normally it's not a big deal, but your bike helmet doesn't fit quite right, and you just wrecked into a parked car. Lose 2 health."
  };
},
health5: function(player) {
  player.health -=3;
  return {
    title: "You Shit Your Pants. Again.",
    text: "While abroad in Japan, you ate a suspicious-looking piece of beef stomach so you wouldn't offend your host. You contracted a typically harmless parasite called Blastocystis, except these ones are tearing apart your intestines like a group of tiny ronin; you lose 3 health. You also lose the contents of your bowels... Like, daily."
  };
},
health6: function(player) {
  player.health -= 3;
  return {
    title: "THE ACCIDENT JUST HAPPENED.",
    text: "Things were never the same for you. Not after... the accident. Lose 3 health."
  };
},


//FINANCIAL (blue squares)
financial1: function(player) {
  player.money += 80000;
  return {
    title: "Just remember: poor people are happier than rich people.",
    text: "You were walking down the street when you found a $80,000 bill. Good luck finding change for that one!"
  };
},
financial2: function(player) {
  player.money += 5000;
  return {
    title: "Pickpocket",
    text: "You found a $5000 bill in your pants pocket! Well, it wasn't in your pocket, really, and it was in someone else's pocket, but what's the difference?"
  };
},
financial3: function(player) {
  player.money -= 30000;
  return {
    title: "Bill Gates is only good at philanthropy.",
    text: "You invested in Zune. Lose $30,000."
  };
},
financial4: function(player) {
  player.money -= 10000;
  return {
    title: "Tithe for your Soul.",
    text: "Time for your weekly tithe. You lose $10,000, but gain eternal salvation!"
  };
},
financial5: function(player) {
  player.money -= 5000;
  return {
    title: "An Offer You Should've Refused",
    text: "The mafia shows up for your weekly protection fee, and you don't have it. Vinny takes a bat to your kneecaps, and the hospital bills total up to $40,000. The horse head in your hospital bed was pretty gross too."
  };
},
financial6: function(player) {
  player.money -= 50000;
  return {
    title: "Bernie Madoff Loves You",
    text: "In a lengthy investigation, your company is found to be a Ponzi scheme. And you're the Ponzi. You get fined $50,000."
  };
},
financial7: function(player) {
  player.salary = 0;
  return {
    title: "Even though you take extra-good care of your spray tan...",
    text: "You're fired! - Donald Trump"
  };
},
financial8: function(player) {
  player.money -= 50000;
  return {
    title: "Bitcoin Bubble Burst",
    text: "You spent a lot of money on a bitcoin mining operation, but gold standard,  unstable currency blah blah blah you lose $50,000."
  };
},


//CHIPOTLE
chipotle1: function(player) {
  player.health -= 2;
  return {
    title: "Why, oh why, did you trust Chipotle?",
    text: "Chipotle has been known to have birds habitually living in some of their restaurants, and it turns out that wasn't sour cream on that bite you just took... You now have Avian flu. Lose 2 health."
  };
},
chipotle2: function(player) {
  player.health -= 2;
  return {
    title: "E. Coli is actually on the menu, you idiot.",
    text: "That Chipotle burrito did something truly foul to your stomach, and you've been on the toilet for nearly 12 hours. You got sores on your tookus, and lost 2 health."
  };
}
}
