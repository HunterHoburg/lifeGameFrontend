function college1(player) {
  player.college = false;
  return {
    title: "CHUG! CHUG! CHUG!",
    text: 'Like many other freshmen, you drink to fit in. Well, you only fit in with the college dropouts now.'
  };
}
function college2(player) {
  player.college = false;
  return {
    title: "",
    text: "It turns out there aren't a whole lot of jobs you can get with an Art History degree in this town... I hear Wendy's is hiring!"
  };
}
function college3(player) {
  player.money += 5000;
  return {
    title: "",
    text: "You got a $5,000 scholarship for your exemplary performance in Chess Club. Nerd."
  };
}
function college4(player) {
  player.college = false;
  return {
    title: "",
    text: "The college years are the best years... And you were so busy enjoying those years that you forgot to graduate. Oops!"
  };
}
function college5(player) {
  player.money -= 70000;
  return {
    title: "",
    text: "You thought you wanted to go into Philosophy, but after a few years of that you decided that Equine Sciences was for you. Turns out you're allergic to horses and it took you a couple years to find that out, so you switched to Neuroscience. Knowledge is expensive! You lose $70,000."
  };
}
function college6(player) {
  player.college = false;
  return {
    title: "",
    text: "Not everyone is smart. College is hard for some people. Like you! Am I using small enough words for you to understand?"
  };
}
function college7(player) {
  player.college = false;
  return {
    title: "",
    text: "You did super well in college! Unfortunately, by the time they got to your name at graduation, they had actually run out of diplomas."
  };
}


//MARRIAGE EVENTS
function marriage1(player) {
  player.money -= 50000;
  return {
    title: "",
    text: "Your spouse suspected you were cheating and lit your car on fire. Whether you were or weren't is       unimportant; that car was worth $50,000!"
  };
}
function marriage2(player) {
  player.money -=70000;
  return {
    title: "Mail-order",
    text: "You ordered a Russian mail-order bride/groom, but you went cheap and didn't get next-day shipping. Someone forgot to poke holes in the box, and when the package showed up, it became apparent that you were going to have to find a good place to hide a body. You pay $70,000 to have a mafia cleanup crew dispose of the body."
  };
}
function marriage3(player) {
  player.money +=200000;
  return {
    title: "Gold digger",
    text: "You really married into a wealthy family! You get $" + this.money + " for your stocking stuffer this Christmas."
  };
}
function marriage4(player) {
  var moneyLost = player.money/2
  player.money -= moneyLost;
  return {
    title: "Lawyer up!",
    text: "D-I-V-O-R-C-E, give your ex-spouse half your money!"
  };
}

//ADDICTION
function addiction1(player) {
  player.addiction = true;
  return {
    title: "The Needle and the Damage Done",
    text: "Track marks, collapsed veins, gangrene, bloodshot eyes, rotting teeth, and a cornucopia of infectious diseases should have turned you back. But heroin is all you crave. She's your lover, and with her in your veins, you finally escape from that crushing defeat of never living up to what mom and dad always said you could achieve. Enter the addiction circle."
  };
}
function addiction2(player) {
  player.addiction = true;
  return {
    title: "",
    text: "Regardless of whether you're male or female, Viagra should never be taken in handfuls, but you don't care. It's been 34 hours... Maybe you should go see a doctor. Enter the addiction circle."
  };
}
function addiction3(player) {
  player.addiction = true;
  return {
    title: "",
    text: "Your love for video games has turned into an addiction. You can no longer discern between reality and the virtual world; you have no clarity of vision, and your fine motor skills are deteriorating from carpal tunnel. You simply can't feel love or pain, joy or sorrow any more; the only things you experience are new high scores and the empty sadism of spewing slurs at 14-year-olds through your headset in Call of Duty games. Enter the addiction circle."
  };
}
function addiction4(player) {
  player.addiction = true;
  return {
    title: "Speed Kills",
    text: "The need for speed; you've got it. Your addiction to methamphetamines puts you in the addiction circle."
  };
}


//DISASTER (blue squares)
function disaster1(player) {
  player.money -= 70000;
  return {
    title: "It's Raining Cats and Dogs!",
    text: "It's raining cats and dogs! Literally. Your car is trashed by a particularly large tabby going through the engine block at terminal velocity. You lose $50,000."
  };
}
function disaster2(player) {
  player.money -= 100000;
  return {
    title: "When a Butterfly Flaps Its' Wings in China...",
    text: "Did you feel that? An earthquake knocked everything off of your shelves. Maybe you shouldn't have invested $200,000 in antique fine china..."
  };
}
function disaster3(player) {
  player.money -= 100000;
  return {
    title: "",
    text: "Did you know that the Japanese word 'Gojira' is a portmanteau of the Japanese words for whale and gorilla? Well, your house was stepped on by Godzilla and homeowner's insurance doesn't cover giant monster-related damage, so it looks like you're out of $100,000."
  };
}


//HEALTH (blue squares)
function health1(player) {
  player.health += 2;
  return {
    title: "",
    text: "Due to advances in medicine, we can finally grow organs like kidneys and hearts. You get a brand new ticker and an extra hip! Gain 2 health."
  };
}
function health2(player) {
  player.health -= 3;
  return {
    title: "Thick Skin",
    text: "The common cold isn't a big deal, but your cold ain't common, and it's actually not a cold. It's Fibrodysplasia ossificans progressiva, and it makes your skin slowly turn into bone. You lose 3 health and all chances at winning beauty pageants."
  };
}
function health3(player) {
  player.health -= 2;
  return {
    title: "",
    text: "I guess that WASN'T just a canker sore... Lose 2 health."
  };
}
function health4(player) {
  player.health -= 2;
  return {
    title: "",
    text: "Your mother had the Zyka virus when you were born, and you have a condition called 'microcephaly'. Normally it's not a big deal, but your bike helmet doesn't fit quite right, and you just wrecked into a parked car. Lose 2 health."
  };
}
function health5(player) {
  player.health -=3;
  return {
    title: "",
    text: "While abroad in Japan, you ate a suspicious-looking piece of beef stomach so you wouldn't offend your host. You contracted a typically harmless parasite called Blastocystis, except these ones are tearing apart your intestines like a group of tiny ronin; you lose 3 health. You also lose the contents of your bowels... Like, daily."
  };
}
function health6(player) {
  player.health -= 3;
  return {
    title: "",
    text: "Things were never the same for you. Not after... the accident. Lose 3 health."
  };
}


//FINANCIAL (blue squares)
function financial1(player) {
  player.money += 80000;
  return {
    title: "",
    text: "You were walking down the street when you found a $80,000 bill. Good luck finding change for that one!"
  };
}
function financial2(player) {
  player.money += 5000;
  return {
    title: "Pickpocket",
    text: "You found a $5000 bill in your pants pocket! Well, it wasn't in your pocket, really, and it was in someone else's pocket, but what's the difference?"
  };
}
function financial3(player) {
  player.money -= 30000;
  return {
    title: "",
    text: "You invested in Zune. Lose $30,000."
  };
}
function financial4(player) {
  player.money -= 10000;
  return {
    title: "",
    text: "Time for your weekly tithe. You lose $10,000, but gain eternal salvation!"
  };
}
function financial5(player) {
  player.money -= 5000;
  return {
    title: "An Offer You Should've Refused",
    text: "The mafia shows up for your weekly protection fee, and you don't have it. Vinny takes a bat to your kneecaps, and the hospital bills total up to $40,000. The horse head in your hospital bed was pretty gross too."
  };
}
function financial6(player) {
  player.money -= 50000;
  return {
    title: "",
    text: "In a lengthy investigation, your company is found to be a Ponzi scheme. And you're the Ponzi. You get fined $50,000."
  };
}
function financial7(player) {
  player.salary = 0;
  return {
    title: "",
    text: "You're fired! - Donald Trump"
  };
}
function financial8(player) {
  player.money -= 50000;
  return {
    title: "",
    text: "You spent a lot of money on a bitcoin mining operation, but gold standard,  unstable currency blah blah blah you lose $50,000."
  };
}


//CHIPOTLE
function chipotle1(player) {
  player.health -= 2;
  return {
    title: "",
    text: "Chipotle has been known to have birds habitually living in some of their restaurants, and it turns out that wasn't sour cream on that bite you just took... You now have Avian flu. Lose 2 health."
  };
}
function chipotle2(player) {
  player.health -= 2;
  return {
    title: "",
    text: "That Chipotle burrito did something truly foul to your stomach, and you've been on the toilet for nearly 12 hours. You got sores on your tookus, and lost 2 health."
  };
}
