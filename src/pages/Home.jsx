import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="homeBox">
      <div className="homeTitleBox">
        <span className="homeTitle">WELCOME TO A FAN MADE</span>
        <a
          href="https://nexus.leagueoflegends.com/en-us/"
          className="homeTitleGolden"
        >
          {" "}
          LEAGUE OF LEGENDS{" "}
        </a>
        <span className="homeTitle">WEB PAGE</span>
      </div>
      <iframe
        width="1020"
        height="574"
        src="https://www.youtube.com/embed/BGtROJeMPeE"
        title="What is League of Legends?"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="transcript">
        <p className="transcriptTitle">TRANSCRIPT</p>
        <div className="transcriptText">
          <p>
            League of Legends is a team-oriented strategy game. The goal is to work together with your teammates to bring down the enemy Nexus, located in the middle of their base, before your opponents take down yours. That sounds straightforward, but how you get there isn’t, so let’s walk you through the basics.
          </p>
          <p>
            You’ll start by choosing one Champion from a list of many, all of whom have their own unique strengths and personalities. Some are ranged marksmen, pelting their opponents from a safe distance; or burly fighters who like to get up in their opponents’ faces; others are arcane mages, casting powerful spells to trap and damage their enemies. However you like to get things done, there’s a champion out there to match your style.
          </p>
          <p>
            During the game, Champions get stronger in two ways – The first of which leveling up. You gain experience by being in the area when enemies die, and each level of experience gives you an ability point. Assign these points as you level up to unlock all of your abilities and make them stronger. At level 6, you can unlock your ultimate ability, which can change the tide of the game.
          </p>
          <p>
            The second way to get stronger is buying items. Items are bought at the shop in your base, using gold earned from killing enemy minions and champions. Once you’ve bought an item, it goes straight into your inventory and you immediately gain its benefits and power up. If you don’t know which items to buy, you can check the “Recommended” tab in the store for some pretty good stuff for your champion. Once you know your way around the shop, feel free to experiment with different item combos as you develop your own style, but if you ever get lost, the Recommended tab has your back.
          </p>
          <p>
            When you start the game, you and your team will appear in The Fountain; this is also where you’ll respawn if your champion dies. This is a pretty safe place that restores your health and mana, and provides access to the shop we just talked about. You start off the game with some gold, so grab some items right away and return to the shop when you’ve earned enough to buy more, or to upgrade items you already own.
          </p>
          <p>
            Once you’ve got your starting items, you’ll head to one of the three lanes, commonly called Bot (for Bottom), Mid (for Middle), and Top (…for Top). Between the lanes is the Jungle, a shadowy area filled with powerful monsters that can beat the heck out of an unprepared champion. Slaying these creatures will give you gold, experience, and some sweet buffs, but they do fight back, so stay in the lanes until you feel strong enough to take ’em on. Each lane is a path between the two bases, guarded by a set of powerful Turrets. You’ll need to destroy your enemy’s turrets to get into their base and take down their Nexus.
          </p>
          <p>
            That’s easier said than done, though. Those turrets are perilous, and even the most powerful champion will melt if targeted by one. To safely take them down, you need to stay behind your minions. Minions are computer-controlled units that march relentlessly down all lanes, engaging enemies in their path. Your opponents have minions too, and you’re going to want to stomp ’em. You’ll get experience when they die, but only the killing blow, commonly called the “last hit,” will earn you gold, so time your attacks carefully!
          </p>
          <p>
            Once you and your minions push up to an enemy turret, you’ll have a few moments to damage it while it attacks your minions. If you’re in range of the turret without any minions around, it will attack you, so be aware of your position. Also, if you attack an enemy champion while in range of the turret, it will change its focus to attack you, even if your minions are around.
          </p>
          <p>
            Working with your minions to siege enemy turrets is your main objective if you’re looking to crack their base – but watch out for enemy champions! Like you, they have items and abilities (and feelings) to help them stop your advance and make their way to your nexus. If you manage to take an enemy champion down, however, they’re worth a nice chunk of gold.
          </p>
          <p>
            Sometimes, things don’t go as planned. Maybe an enemy champion gets the drop on you, or maybe you take one too many turret shots. Whatever the case may be, if your champion dies you’ll have to wait for your death timer to expire before respawning back in your base’s Fountain. This timer increases as the game goes on–dying early in a match only requires a few seconds of time out, while a death later on could result in a thirty second penalty or even longer. Don’t worry though; you don’t lose any items, gold, or experience on death, and you can even buy items while waiting to respawn. Of course, killing your enemies also takes them off the map for a brief period, giving you the perfect opportunity to advance and demolish their turrets.
          </p>
          <p>
            That’s the basics of League of Legends: get money, buy stuff, and wreck their base, all while battling against a team of opponents trying to do the exact same things to you. A combination of skill, speed, and intelligence will lead you to the opponent’s Nexus and to victory. Then, you can start a new game and do it all over again!
          </p>
          <p>
            There’s a lot more to the world of League of Legends, though. A diverse community full of all kinds of people; a competitive ranked system to test your skills, either solo or with a team of friends; an ever-expanding roster of champions to explore and master; and even a professional esports scene where the best players in the world gather to play on massive stages in front of thousands of fans. It all starts with your first game!
          </p>
          <p>
            So hit that big Play button and start a game. At first, you’ll have co-op vs. AI available. Select intro bots for your first few games to help you learn the ropes. Try a few different champions–each is different, but there’s nothing like finding a champion you really click with. After you feel comfortable, you can try other co-op difficulties or start playing against other human beings. See you on the Fields of Justice, and welcome to League of Legends!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
