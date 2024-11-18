import HeroDetails from "@/interface/heroes/HeroDetails";

const heroesDetails: { [key: string]: HeroDetails } = {
  abaddon: {
    shortDescription:
      "Able to transform enemy attacks into self-healing, Abaddon can survive almost any assault. Shielding allies and launching his double-edged coil at a friend or foe, he is always ready to ride into the thick of battle.",
    heroIntro: "SHIELDS HIS ALLIES OR HIMSELF FROM ATTACKS",
    abilities: [
      {
        name: "Withering Mist ",
        description:
          "Damaging enemies applies the Withering Mist debuff for 5s. Affected enemies have their HP regeneration, healing, lifesteal and spell lifesteal reduced by 35% if they are below 40% HP. ",
      },
      {
        name: "Mist Coil ",
        description:
          "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png",
      },
      {
        name: "Aphotic Shield ",
        description:
          "Summons dark energies around an ally unit, creating an all damage barrier that absorbs a set amount of damage before expiring. When the barrier is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. Removes certain types of negative buffs and stuns on cast.DISPEL TYPE: Strong Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_aphotic_shield.png",
      },
      {
        name: "Curse of Avernus ",
        description:
          "Abaddon strikes an enemy, affecting them by a chilling curse, slowing them, causing them to take damage over time, and all attacks against them gain an attack speed boost. Damage over time component to buildings is reduced by 70%. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_frostmourne.png",
      },
      {
        name: "Borrowed Time ",
        description:
          "When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed. If the ability is not on cooldown, it will automatically activate if your health falls below 400.DISPEL TYPE: Strong Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_borrowed_time.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png",
    },
    heroName: "Abaddon",
    state: "universal",
    complexity: 1,
  },
  alchemist: {
    shortDescription:
      "Synthesizing extra resources from each and every kill, Alchemist has no trouble gathering the tools needed to destroy his foes. Ambushing enemies with corrosive acid and a host of unstable chemicals, he battles to ensure his greedy escapades can remain uninterrupted.",
    heroIntro: "EARNS EXTRA GOLD FROM UNIT KILLS AND BOUNTY RUNES",
    abilities: [
      {
        name: "Greevil's Greed ",
        description:
          "Alchemist synthesizes additional gold from his enemies and bounty runes. With each kill, Alchemist earns base bonus gold and extra bonus gold. If Alchemist kills another unit which yields gold within the next 40 seconds, an additional instance of Extra Bonus Gold is added to the total. Additionally, causes bounty runes to yield more gold. ",
      },
      {
        name: "Acid Spray ",
        description:
          "Sprays high-pressure acid across a target area. Enemy units who step across the contaminated terrain take damage per second and have their armor reduced. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_acid_spray.png",
      },
      {
        name: "Unstable Concoction ",
        description:
          "Alchemist brews up an unstable concoction that he can throw at an enemy hero, to stun and deal damage in an area around the explosion. The longer the concoction brews, the more damage it deals and the longer the stun. Alchemist is faster while charging the concoction. After 5 seconds, the brew reaches its maximum damage and stun time. However, after 5.5 seconds, the concoction will explode on Alchemist himself if not thrown. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_unstable_concoction.png",
      },
      {
        name: "Corrosive Weaponry ",
        description:
          "Alchemist coats his weapons with an acid that applies a stacking slow and base attack damage reduction to enemies hit. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_corrosive_weaponry.png",
      },
      {
        name: "Chemical Rage ",
        description:
          "Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing movement speed and health regeneration.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_chemical_rage.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.png",
    },
    heroName: "Alchemist",
    state: "strength",
    complexity: 1,
  },
  ancientapparition: {
    shortDescription:
      "Able to launch a powerful blast of damaging ice across the battlefield, Ancient Apparition threatens to shatter weakened enemies wherever they are. Slowing enemies as he enhances his allies' effectiveness in battle, he is a constant threat to his foes.",
    heroIntro: "LAUNCHES A POWERFUL ICY BLAST FROM ANYWHERE ON THE MAP",
    abilities: [
      {
        name: "Death Rime ",
        description:
          "Ancient Apparition's abilities apply Death Rime Stacks on enemies. Death Rime slows enemies' movement speed and deals damage over time. ",
      },
      {
        name: "Cold Feet ",
        description:
          "Places Death Rime Stacks on an enemy that can be dispelled by moving away from the initial cast point.  If the enemy unit doesn't move outside of the given range, it will be stunned and frozen in place after 4 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_cold_feet.png",
      },
      {
        name: "Ice Vortex ",
        description:
          "Creates a vortex of icy energy that applies Death Rime Stacks and increases magic damage done to enemies in its range. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_ice_vortex.png",
      },
      {
        name: "Chilling Touch ",
        description:
          "Enhances Ancient Apparition's attack with increased range and heavy magic damage. Applies a Death Rime Stack that lasts for 4 seconds. Additionally applies a 100% slow for 0.7 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_chilling_touch.png",
      },
      {
        name: "Ice Blast ",
        description:
          "Launches a tracer toward any location on the battlefield, which must be triggered again to mark the area to be blasted by a damaging explosion of hail. The further the tracer travels, the larger the explosion will be. Enemies caught in the explosion, or who touch the icy ball of hail as it travels, are Frostbitten, gaining Death Rime Stacks and prevented from regenerating or healing. If a Frostbitten unit's health drops below a certain percentage, they will instantly shatter. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_ice_blast.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ancient_apparition.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ancient_apparition.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ancient_apparition.png",
    },
    heroName: "Ancient Apparition",
    state: "intelligence",
    complexity: 2,
  },
  "anti-mage": {
    shortDescription:
      "Should Anti-Mage have the opportunity to gather his full strength, few can stop his assaults. Draining mana from enemies with every strike or teleporting short distances to escape an ambush, cornering him is a challenge for any foe.",
    heroIntro: "SLASHES HIS FOES WITH MANA-DRAINING ATTACKS",
    abilities: [
      {
        name: "Persecutor ",
        description:
          "Attacks slow enemies based on how much mana they are missing. Min slow at 50% mana, up to max slow at 0% mana. No effect if enemy is above 50% mana. ",
      },
      {
        name: "Mana Break ",
        description:
          "Burns an opponent's mana on each attack and deals damage equal to a percentage of the mana burnt. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png",
      },
      {
        name: "Blink ",
        description:
          "Short distance teleportation that allows Anti-Mage to move in and out of combat. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png",
      },
      {
        name: "Counterspell ",
        description:
          "Passively grants magic resistance. Counterspell may be activated to create an anti-magic shell around Anti-Mage that blocks any targeted spells. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_counterspell.png",
      },
      {
        name: "Mana Void ",
        description:
          "For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies.  The main target is also mini-stunned. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_void.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png",
    },
    heroName: "Anti-Mage",
    state: "agility",
    complexity: 1,
  },
  arcwarden: {
    shortDescription:
      "A splintered fragment of the same primordial power as the Ancients themselves, Zet the Arc Warden has pledged to see the clash between Radiant and Dire finally end. Assault lone enemies with fluxing energy, or distort space to generate a protective field around allies. Summon a Spark Wraith to patrol an area for enemies to infuse with harmful magic, then create a double of Zet, items and all, to overwhelm your foes.",
    heroIntro: "CREATES A COPY OF HIMSELF TO SPLIT PUSH",
    abilities: [
      {
        name: "Runic Infusion ",
        description:
          "Upon activating any rune, gain the Regeneration Rune buff for 4s. ",
      },
      {
        name: "Flux ",
        description:
          "Infuses a lone enemy unit with swirling, volatile energy, dealing damage over time and slowing the target. The damage is not applied if another enemy unit is near the target. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_flux.png",
      },
      {
        name: "Magnetic Field ",
        description:
          "Arc Warden generates a circular distortion field of magnetic energy around themself. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_magnetic_field.png",
      },
      {
        name: "Spark Wraith ",
        description:
          "Summons a Spark Wraith that slowly materializes and patrols a targeted area until an enemy comes within its range. Once a target has been found the wraith fuses with them, dealing magical damage and slowing the unit. Non-hero units receive 40% more damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_spark_wraith.png",
      },
      {
        name: "Tempest Double ",
        description:
          "Briefly refocusing its fractured elements into a single form, the Arc Warden is able to create a perfect electrical duplication of itself. The duplicate can use all of Arc Warden's current items and special Tempest Double versions of his spells, except most consumables and items that drop on death. The duplicate has separate item and ability cooldowns.If killed by the enemy, the Tempest Double gives bounty gold to enemies, and the ability's cooldown is restarted.The Tempest Double loses its sense of self if he is too far away from Arc Warden and takes more damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_tempest_double.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.png",
    },
    heroName: "Arc Warden",
    state: "agility",
    complexity: 3,
  },
  axe: {
    shortDescription:
      "One after another, Axe cuts down his foes. Marching ahead of his team, he locks his enemies in battle then counters their blows with a deadly spin of his weapon. Slamming his culling blade through a weakened enemy, he is always charging onward.",
    heroIntro: "TAUNTS AND FORCES ENEMIES TO ATTACK HIM",
    abilities: [
      {
        name: "Coat of Blood ",
        description:
          "Whenever Axe gets a kill, he permanently gains 0.2 armor. Killing with Culling Blade gives 3x that amount. ",
      },
      {
        name: "Berserker's Call ",
        description:
          "Axe taunts nearby enemy units, forcing them to attack him while he gains bonus armor during the duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_berserkers_call.png",
      },
      {
        name: "Battle Hunger ",
        description:
          "Enrages an enemy unit, causing it to take damage over time until it kills another unit or the duration ends. The damage is increased by a factor of Axe's armor. The enemy is also slowed as long as they are facing away from Axe. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_battle_hunger.png",
      },
      {
        name: "Counter Helix ",
        description:
          "After a set number of attacks, Axe will perform a helix counter attack, dealing pure damage to all nearby enemies. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_counter_helix.png",
      },
      {
        name: "Culling Blade ",
        description:
          "Axe spots a weakness and strikes, dealing pure damage. When an enemy hero is killed with Culling Blade, its cooldown is reset, and all nearby allied units gain bonus movement speed and armor. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_culling_blade.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.png",
    },
    heroName: "Axe",
    state: "strength",
    complexity: 1,
  },
  bane: {
    shortDescription:
      "Bane brings terror to his enemies with his arsenal of disabling abilities. Whether trapping a foe within a contagious nightmare, or gripping an enemy in place, he gives allies all the time they need to slay their enemy.",
    heroIntro: "PUTS HIS ENEMIES TO SLEEP, INCAPACITATING THEM",
    abilities: [
      {
        name: "Ichor of Nyctasha ",
        description:
          "Bane's attribute gains are always evenly distributed across all three attributes (items that grant +3 Strength will now grant +1 Str/Agi/Int). ",
      },
      {
        name: "Enfeeble ",
        description:
          "Deals damage every second and lowers the enemy's total attack damage and cast range. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bane_enfeeble.png",
      },
      {
        name: "Brain Sap ",
        description:
          "Feasts on the vital energies of an enemy unit, healing Bane and dealing damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bane_brain_sap.png",
      },
      {
        name: "Nightmare ",
        description:
          "Puts the target enemy or friendly Hero to sleep. Sleeping units are awakened when damaged. If the target was directly attacked, the Nightmare passes to the attacking unit. Bane can attack and damage Nightmared targets freely. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bane_nightmare.png",
      },
      {
        name: "Fiend's Grip ",
        description:
          "CHANNELED - Grips an enemy unit, disabling it and causing heavy damage over time, while stealing mana every 0.5 seconds based on the unit's maximum mana. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bane_fiends_grip.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.png",
    },
    heroName: "Bane",
    state: "universal",
    complexity: 2,
  },
  batrider: {
    shortDescription:
      "Once he takes to the skies, Batrider can strike from any direction. Snatching a foe with his lasso, he soars above the treetops, pulling his prey through a trail of flame as he drags them before his merciless allies.",
    heroIntro: "CAN LASSO AN ENEMY AWAY FROM HIS TEAM",
    abilities: [
      {
        name: "Smoldering Resin ",
        description:
          "Batrider's attacks apply a debuff that deals 15% of the attack damage every 1s for 2s. ",
      },
      {
        name: "Sticky Napalm ",
        description:
          "Drenches an area in sticky oil, amplifying damage from Batrider's attacks and abilities and slowing the movement speed and turn rate of enemies.  Additional casts of Sticky Napalm continue to increase damage, up to 10 stacks. Applies a small amount of damage with each cast. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/batrider_sticky_napalm.png",
      },
      {
        name: "Flamebreak ",
        description:
          "Hurls an explosive cocktail that explodes when it reaches the target location, knocking back, slowing and dealing damage over time to enemies in the area. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/batrider_flamebreak.png",
      },
      {
        name: "Firefly ",
        description:
          "Batrider takes to the skies, laying down a trail of flames from the air.  The fire damages any enemies it touches, and destroys trees below Batrider. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/batrider_firefly.png",
      },
      {
        name: "Flaming Lasso ",
        description:
          "Lassoes an enemy and drags them in Batrider's wake. Dragged units cannot move, attack, or use abilities.  Teleporting or blinking will break the lasso. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/batrider_flaming_lasso.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/batrider.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/batrider.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/batrider.png",
    },
    heroName: "Batrider",
    state: "universal",
    complexity: 2,
  },
  beastmaster: {
    shortDescription:
      "Summoning a poison-spitting boar and a scouting hawk to aid his hunt, Beastmaster never stalks the battlefield unprepared. Chopping through the forest with his axes, his stunning roar opens the way for his allies to devastate enemies.",
    heroIntro: "SUMMONS BEASTS TO AID HIS HUNT",
    abilities: [
      {
        name: "Rugged ",
        description:
          "Beastmaster's melee hero Damage Block Chance is increased from 50% to 100% versus non-hero units. ",
      },
      {
        name: "Wild Axes ",
        description:
          "Beastmaster sends his axes flying and calls them home again, slicing through enemy units and trees along their path.  Each axe can hit an enemy once, and amplifies subsequent damage from Beastmaster and his units. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_wild_axes.png",
      },
      {
        name: "Call of the Wild Boar ",
        description:
          "Beastmaster calls forth a Boar to aid in the battlefield. The Boar has a passive poison attack that slows attack and movement speeds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_call_of_the_wild_boar.png",
      },
      {
        name: "Call of the Wild Hawk ",
        description:
          "Beastmaster summons a hawk that circles around Beastmaster and dive-bombs at enemies with a base attack rate of every 4s, damaging and rooting them. Attack rate increases with the Hawk's attack speed. Prioritizes heroes.  ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_call_of_the_wild_hawk.png",
      },
      {
        name: "Inner Beast ",
        description:
          "Untaps the inner fury of Beastmaster and units he controls, passively increasing their attack speed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_inner_beast.png",
      },
      {
        name: "Primal Roar ",
        description:
          "Beastmaster lets loose a deafening roar that stuns, and shoves open a path to its target. All units in the path of the roar are damaged, while units shoved aside by the roar have their movement and attack speed slowed. Additionally, Beastmaster and his units gain 40% movement speed for 3 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_primal_roar.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/beastmaster.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/beastmaster.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/beastmaster.png",
    },
    heroName: "Beastmaster",
    state: "universal",
    complexity: 2,
  },
  bloodseeker: {
    shortDescription:
      "Bloodseeker forces difficult decisions on his enemies. Able to drive his foes to a retreat by bathing a large area with a damaging ritual, his gruesome ultimate asks his opponents to hold still, or die.",
    heroIntro: "CHASES DOWN LOW HEALTH ENEMIES WITH INCREASED SPEED",
    abilities: [
      {
        name: "Sanguivore ",
        description:
          "Bloodseeker restores some life when he kills a unit, equal to 1.5% of the units max health per Bloodseeker's Level plus a base of 25.Restores for half values if an ally kills a nearby enemy hero. ",
      },
      {
        name: "Bloodrage ",
        description:
          "Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second. Provides half attack speed to allied heroes. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bloodseeker_bloodrage.png",
      },
      {
        name: "Blood Rite ",
        description:
          "Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bloodseeker_blood_bath.png",
      },
      {
        name: "Thirst ",
        description:
          "Bloodseeker is invigorated by the wounds of his enemies, gaining bonus movement speed when an enemy hero's health falls below 100%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bloodseeker_thirst.png",
      },
      {
        name: "Rupture ",
        description:
          "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bloodseeker_rupture.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bloodseeker.png",
    },
    heroName: "Bloodseeker",
    state: "agility",
    complexity: 1,
  },
  bountyhunter: {
    shortDescription:
      "Sneaking invisibly at the heels of his enemies, Bounty Hunter is always keeping track of his foes. Whenever one of his targets falls in battle, he and his allies stand to make quite a profit.",
    heroIntro: "LOOTS AND COLLECTS BOUNTIES OFF OF HIS ENEMIES",
    abilities: [
      {
        name: "Big Game Hunter ",
        description:
          "When getting a kill or assist on an enemy that has a killing streak, Bounty Hunter receives 20% extra gold. ",
      },
      {
        name: "Shuriken Toss ",
        description:
          "Hurls a deadly shuriken at an enemy unit, dealing damage and slowing the target's Movement Speed by 100% for 0.35s.  The shuriken will bounce to any Tracked units who are within a 1200 radius of each other. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bounty_hunter_shuriken_toss.png",
      },
      {
        name: "Jinada ",
        description:
          "Bounty Hunter plans his next hit, dealing bonus damage and stealing some unreliable gold. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bounty_hunter_jinada.png",
      },
      {
        name: "Shadow Walk ",
        description:
          "Bounty Hunter becomes invisible and gains the ability to move through other units until he attacks or uses an ability.  If he breaks the invisibility with an attack, that attack will stun the target for a short duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bounty_hunter_wind_walk.png",
      },
      {
        name: "Track ",
        description:
          "Tracks an enemy hero, granting True Sight of the target, increasing the damage they take and providing information on how much gold it is carrying. Bounty Hunter moves fast when near the tracked unit. If the target dies, Bounty Hunter and nearby heroes collect a bonus bounty of gold. Casting Track does not take you out of invisibility. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bounty_hunter_track.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bounty_hunter.png",
    },
    heroName: "Bounty Hunter",
    state: "agility",
    complexity: 1,
  },
  brewmaster: {
    shortDescription:
      "A fearsome fighter in any situation, Brewmaster can turn the tide of battle by splitting into three elemental spirits, each with their own unique abilities. When not divided, he brings drunken chaos to his foes with slowing claps and powerful swings of his staff.",
    heroIntro: "SPLITS INTO FOUR ELEMENTAL SPIRITS WITH UNIQUE ABILITIES",
    abilities: [
      {
        name: "Belligerent ",
        description:
          "Brewmaster gains 20% bonus attack damage for 15s when he comes out of Primal Split and for 30s when he respawns. ",
      },
      {
        name: "Thunder Clap ",
        description:
          "Slams the ground, dealing damage and slowing the movement speed and attack rate of nearby enemy units. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/brewmaster_thunder_clap.png",
      },
      {
        name: "Cinder Brew ",
        description:
          "Drenches himself and an area in alcohol, causing enemy units to move slower and ignite once they take any Magic or Pure damage. Duration is increased by 3 seconds when enemies are ignited. While Brewmaster is Brewed Up, His Drunken Brawler Stances are stronger. Dealing or receiving magic damage extends Brewmaster's Brewed Up duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/brewmaster_cinder_brew.png",
      },
      {
        name: "Drunken Brawler ",
        description:
          "Brewmaster can switch stances based on the elements he controls, gaining passive bonuses that improve against enemies when Brewed Up.Earth Brawler - Grants 1 armor and 5% Magic Resistance. Bonuses are 2.5x when Brewed Up.Storm Brawler - Grants 15% evasion and 5% Bonus Move Speed. Bonuses are 2.5x when Brewed Up.Fire Brawler - Grants 20% chance to critical strike for 120% of your attack damage and 10 Attack Speed. Crit Chance and Attack Speed is %active_multiplier%x when Brewed Up. Void Brawler - Grants 5% bonus Status Resistance to Brewmaster and applies a 10% Slow for 2s on attack. Slow and Status Resistance are %active_multiplier%x when affected by Cinder Brew. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/brewmaster_drunken_brawler.png",
      },
      {
        name: "Primal Split ",
        description:
          "Splits Brewmaster into elements, forming 4 specialized warriors, adept at survival, each with their own abilities. If any of them survive until the end of their summoned timer, the Brewmaster is reborn. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/brewmaster_primal_split.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/brewmaster.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/brewmaster.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/brewmaster.png",
    },
    heroName: "Brewmaster",
    state: "universal",
    complexity: 3,
  },
  bristleback: {
    shortDescription:
      "When it comes to a fight, Bristleback really puts his back into it. Reducing all damage arriving from the rear or from the sides, he wades into battle with barely a care, spraying enemies with damaging quills and slowing snot.",
    heroIntro: "TAKES REDUCED DAMAGE WHEN FACING AWAY FROM ENEMIES",
    abilities: [
      {
        name: "Prickly ",
        description:
          "Bristleback has 10% damage and debuff duration amp against enemy heroes that are behind him. ",
      },
      {
        name: "Viscous Nasal Goo ",
        description:
          "Covers a target in snot, causing it to have reduced armor and movement speed for 6 seconds.  Multiple casts stack and refresh the duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bristleback_viscous_nasal_goo.png",
      },
      {
        name: "Quill Spray ",
        description:
          "Sprays enemy units with quills dealing damage in an area of effect around Bristleback.  Deals bonus damage for every time a unit was hit by Quill Spray in the last 14 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bristleback_quill_spray.png",
      },
      {
        name: "Bristleback ",
        description:
          "Bristleback takes less damage if hit on the sides or rear.  If Bristleback takes 275 damage from the rear, he releases a Quill Spray of the current level. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bristleback_bristleback.png",
      },
      {
        name: "Warpath ",
        description:
          "Bristleback works himself up into a fury every time he casts a spell, increasing his movement speed and damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/bristleback_warpath.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bristleback.png",
    },
    heroName: "Bristleback",
    state: "strength",
    complexity: 1,
  },
  broodmother: {
    shortDescription:
      "Gliding along her webs, Broodmother births an army of spiders to lead her team's forces toward the enemy base. As prey wanders near, she joins her children and attacks, slowing foes with incapacitating bites as she indulges her insatiable hunger.",
    heroIntro: "HUNTS WITH HER ARMY OF SPIDERLINGS",
    abilities: [
      {
        name: "Spider's Milk ",
        description:
          "Whenever Broodmother kills a unit, she and all units under her control in a 600 radius receive a buff that heals them for a percentage of the victims health every 0.5 seconds. Healing from creeps is reduced by 40%. ",
      },
      {
        name: "Insatiable Hunger ",
        description:
          "A violent lust for vital fluids increases Broodmother's attack damage and gives her a vampiric attack. Lifesteal from creeps is reduced by 40%. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/broodmother_insatiable_hunger.png",
      },
      {
        name: "Spin Web ",
        description:
          "Spins a large web that grants Broodmother a passive movement speed increase and increases her Turn Rate, while in its vicinity, as well as giving free movement. Spin Web charges restore every 27 seconds, with a max of 4 charges.Spin Web can be cast from anywhere as long as the new web touches an existing web. Webs never expire, and can be manually destroyed. When the maximum limit of webs is exceeded, the oldest web disappears. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/broodmother_spin_web.png",
      },
      {
        name: "Incapacitating Bite ",
        description:
          "Broodmother's venom cripples enemy units, causing her attacks to slow and giving the affected unit a chance to miss its attacks and extra damage from attacks. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/broodmother_incapacitating_bite.png",
      },
      {
        name: "Spawn Spiderlings ",
        description:
          "Broodmother injects her young into an enemy unit, dealing damage and slowing them for 4 seconds. The spiderlings will hatch if the target is killed while under this influence. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/broodmother_spawn_spiderlings.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/broodmother.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/broodmother.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/broodmother.png",
    },
    heroName: "Broodmother",
    state: "universal",
    complexity: 2,
  },
  centaurwarrunner: {
    shortDescription:
      "Centaur Warrunner is a master of both inflicting and absorbing damage. Leading the charge into battle, he stomps to stun his enemies, and instantly counters their every attack. His stampede speeds his allies in both fight and flight, quickening the pace of the carnage.",
    heroIntro: "REFLECTS DAMAGE BACK TO HIS ATTACKERS",
    abilities: [
      {
        name: "Rawhide ",
        description: "Permanently gain 30 max health every 120s. ",
      },
      {
        name: "Hoof Stomp ",
        description:
          "After a brief windup, Centaur Warrunner slams the ground, stunning and damaging nearby enemy units. During the delay, he is disarmed but can move. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/centaur_hoof_stomp.png",
      },
      {
        name: "Double Edge ",
        description:
          "Centaur strikes a mighty blow at melee range, damaging both himself and a small area around the target. Deals extra damage based on your strength. Centaur cannot die from Double Edge. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/centaur_double_edge.png",
      },
      {
        name: "Retaliate ",
        description:
          "Centaur counters all attacks, dealing damage back to the attacker. Returns a fixed amount plus a percentage of your strength. Deals half damage to towers. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/centaur_return.png",
      },
      {
        name: "Stampede ",
        description:
          "Centaur leads all allies into a vicious charge causing them to move through units at max speed and slow any enemy units they trample. Trampled enemies take damage based on Centaur Warrunner's strength. Each enemy can be trampled once. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/centaur_stampede.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/centaur.png",
    },
    heroName: "Centaur Warrunner",
    state: "strength",
    complexity: 1,
  },
  chaosknight: {
    shortDescription:
      "Chaos Knight is an army unto himself. Able to summon a cavalry of clones to demolish enemy defenses, should an enemy present itself, he can rift reality to pull him and his phantasms close enough to rain brutal cudgel blows upon their head.",
    heroIntro: "HAS STRONG BUT RANDOM DAMAGE OUTPUT",
    abilities: [
      {
        name: "Reins of Chaos ",
        description:
          "Whenever illusions of Chaos Knight are created, there is a 50% chance that an additional 1 extra illusion will spawn. ",
      },
      {
        name: "Chaos Bolt ",
        description:
          "Throws a mysterious bolt of energy at the target unit. It stuns for a random duration and deals random damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/chaos_knight_chaos_bolt.png",
      },
      {
        name: "Reality Rift ",
        description:
          "Teleports Chaos Knight, any illusions he has, and the target unit to a point along the line between him and the target. Reduces armor of the enemy unit for 6 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/chaos_knight_reality_rift.png",
      },
      {
        name: "Chaos Strike ",
        description:
          "Chaos Knight and his illusions' attacks have a chance to deal a critical strike of varying strength with bonus lifesteal. Deals 2x damage to creeps, but lifesteal from creeps is reduced by 70%. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/chaos_knight_chaos_strike.png",
      },
      {
        name: "Phantasm ",
        description:
          "Summons several phantasmal copies of the Chaos Knight from alternate dimensions. The phantasms are illusions that deal 100% damage, but take 350% damage.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/chaos_knight_phantasm.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chaos_knight.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chaos_knight.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chaos_knight.png",
    },
    heroName: "Chaos Knight",
    state: "strength",
    complexity: 1,
  },
  chen: {
    shortDescription:
      "Converting the creatures of the forest to his cause, Chen leads his makeshift armies to aid his team in battle. He assaults enemies with beasts while sending friends to safety. Then, when things seem darkest, he heals his allies wherever they may be.",
    heroIntro: "CONVERTS CREEPS TO HIS CAUSE, BUILDING AN ARMY",
    abilities: [
      {
        description: "This hero's innate ability is Summon Convert.",
      },

      {
        name: "Summon Convert",
        description:
          "Chen summons a convert to fight for him. The convert gains bonuses from Holy Persuasion and dies if Chen dies. Its maximum health is set to 220 + 80 per Chen Level.",
      },
      {
        name: "Penitence",
        description:
          "Forces an enemy unit to move slower and for allies to attack it more quickly. Chen can attack the Penitence target with bonus attack range. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/chen_penitence.png",
      },
      {
        name: "Holy Persuasion",
        description:
          "Chen takes control of an enemy or neutral creep and receives a percentage of its bounty. Its maximum health is set to 400 + 50 per Chen Level. Converted creeps will have increased movement speed and bonus damage.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/chen_holy_persuasion.png",
      },
      {
        name: "Divine Favor",
        description:
          "Passively provides an aura that grants increased health regeneration. Can be cast on allies to provide them with bonus armor and increasing the healing and health regeneration they receive.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/chen_divine_favor.png",
      },
      {
        name: "Hand of God ",
        description:
          "Heals all allied heroes on the map as well as all units under Chen's control. A large heal is applied at first and a slow heal over time is applied for 10 seconds afterwards.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/chen_hand_of_god.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/chen.png",
    },
    heroName: "Chen",
    state: "universal",
    complexity: 3,
  },
  clinkz: {
    shortDescription:
      "When Clinkz stalks invisibly through the battlefield, none are safe from ambush. Swift of foot and arrow, he rains fiery death upon his foes, calling upon an army of blazing compatriots to bolster his assault.",
    heroIntro: "STALKS INVISIBLY TO AMBUSH LONE ENEMIES",
    abilities: [
      {
        name: "Bone and Arrow ",
        description:
          "Clinkz summons a Skeleton Archer when he dies. Skeleton Archers are immobile and die within multiple attacks from a hero. Skeleton Archers deal a percentage of Clinkz' damage, and deal less damage to buildings. Attack range is equal to Clinkz' attack range.Some of Clinkz' other abilities can also summon Skeleton Archers. ",
      },
      {
        name: "Strafe ",
        description:
          "Clinkz gains attack speed and has bonus attack range. Any current Skeleton Archers within a 1200 radius of Clinkz also gain bonus attack range and 60% of the attack speed bonus.  Casting Strafe does not break Skeleton Walk invisibility. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/clinkz_strafe.png",
      },
      {
        name: "Tar Bomb ",
        description:
          "Clinkz throws a projectile filled with tar at the target enemy, dealing Magic damage on impact. After impact, the tar spills onto the ground and stays there for 5 seconds. Any enemy that walks across it gets slowed, and attacks from Clinkz or his Skeleton Archers will deal bonus physical damage. When the Tar Bomb hits, any Skeleton Archers within attack range will attack the target. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/clinkz_tar_bomb.png",
      },
      {
        name: "Death Pact ",
        description:
          "Clinkz consumes the target enemy creep or friendly Skeleton Archer and creates a Skeleton Archer in their place, healing and gaining max health. Does not take Clinkz out of Skeleton Walk. Only one archer can be summoned from Death Pact at a time. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/clinkz_death_pact.png",
      },
      {
        name: "Skeleton Walk ",
        description:
          "Clinkz moves invisibly through units until the moment he attacks or uses items. Leaving Skeleton Walk creates Skeleton Archers. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/clinkz_wind_walk.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/clinkz.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/clinkz.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/clinkz.png",
    },
    heroName: "Clinkz",
    state: "agility",
    complexity: 2,
  },
  clockwerk: {
    shortDescription:
      "Launching himself into enemies with his grappling hookshot, Clockwerk isolates targets and blasts them apart with disorienting shrapnel. As he scouts the battlefield with his handy flares, he never has trouble finding targets to send himself toward.",
    heroIntro: "LAUNCHES HIMSELF INTO ENEMIES WITH HIS HOOKSHOT",
    abilities: [
      {
        name: "Armor Power ",
        description:
          "Clockwerk's outgoing damage increases by 0.25% per point of armor. ",
      },
      {
        name: "Battery Assault ",
        description:
          "Discharges high-powered shrapnel at random nearby enemy units, dealing minor magical damage and ministun. Deals double damage to creeps. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/rattletrap_battery_assault.png",
      },
      {
        name: "Power Cogs ",
        description:
          "Forms a ring of energized cogs around Clockwerk, trapping any units that are near. Enemies outside the trap that touch a cog are knocked back, losing health and mana. Once a cog has delivered a shock, it will power down. Damage is increased by 50% of the mana burned. Cogs can be destroyed by enemy attacks, but Clockwerk can push them up to 1000 distance away with one hit. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/rattletrap_power_cogs.png",
      },
      {
        name: "Rocket Flare ",
        description:
          "Fires a global range flare that explodes over a given area. Upon impact, enemies in the area take damage and are briefly slowed. Rocket flare provides vision over the impact area for 6 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/rattletrap_rocket_flare.png",
      },
      {
        name: "Hookshot ",
        description:
          "Fires a grappling device rapidly at the target location.  If the hook hits a unit, Clockwerk launches himself into the target, stunning and dealing damage to everyone in a 175 radius around the hit target.  Any enemies Clockwerk collides with along the way are damaged and stunned. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/rattletrap_hookshot.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rattletrap.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rattletrap.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rattletrap.png",
    },
    heroName: "Clockwerk",
    state: "universal",
    complexity: 2,
  },
  crystalmaiden: {
    shortDescription:
      "Able to keep her allies supplied with mana as she slows down enemies to ensure a kill, Crystal Maiden is a helpful addition to any team. And, when the opportunity arises, she can unleash her massive ultimate ability to devastate her foes.",
    heroIntro: "UNLEASHES A HIGH DAMAGE BLIZZARD UPON HER FOES",
    abilities: [
      {
        name: "Blueheart Floe ",
        description: "Crystal Maiden has 50% Mana Regeneration Amplification. ",
      },
      {
        name: "Crystal Nova ",
        description:
          "A burst of damaging frost slows enemy movement in the targeted area. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/crystal_maiden_crystal_nova.png",
      },
      {
        name: "Frostbite ",
        description:
          "Encases an enemy unit in ice, prohibiting movement and attack, while dealing damage over time. Deals 4x damage to non-ancient creeps. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/crystal_maiden_frostbite.png",
      },
      {
        name: "Arcane Aura ",
        description:
          "Gives additional mana regeneration to all friendly units on the map. Allies within a 1200 radius of Crystal Maiden receive 3x the mana regeneration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/crystal_maiden_brilliance_aura.png",
      },
      {
        name: "Freezing Field ",
        description:
          "CHANNELED - Surrounds Crystal Maiden with 100 random icy explosions that slow enemies and deal massive damage. Lasts 10 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/crystal_maiden_freezing_field.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/crystal_maiden.png",
    },
    heroName: "Crystal Maiden",
    state: "intelligence",
    complexity: 1,
  },
  darkseer: {
    shortDescription:
      "Versatile and strategic, Dark Seer excels at manipulating the positions of his enemies. Vacuuming foes into the attacks of his allies, he can turn enemy strength against itself by pulling foes through his replicating wall.",
    heroIntro: "PULLS AND MANIPULATES HIS ENEMIES' POSITIONS",
    abilities: [
      {
        name: "Mental Fortitude ",
        description:
          "Dark Seer's Intelligence cannot be lower than the average of his Strength and Agility. ",
      },
      {
        name: "Vacuum ",
        description:
          "Dark Seer creates a vacuum over the target area that sucks in enemy units, disrupting them and dealing damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_seer_vacuum.png",
      },
      {
        name: "Ion Shell ",
        description:
          "Surrounds the target unit with a bristling shield that damages enemy units in an area around it. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_seer_ion_shell.png",
      },
      {
        name: "Surge ",
        description:
          "Charges a target friendly unit with power, giving it a brief burst of phased movement speed. Allows the unit to reach maximum movement speed and cannot be slowed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_seer_surge.png",
      },
      {
        name: "Wall of Replica ",
        description:
          "Raises a wall of warping light that slows, damages, and creates replicas of any enemy hero who crosses it. Enemy replicas serve at the Dark Seer's will. Replicas last until they are destroyed, or until the wall's duration ends. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_seer_wall_of_replica.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_seer.png",
    },
    heroName: "Dark Seer",
    state: "universal",
    complexity: 1,
  },
  darkwillow: {
    shortDescription:
      "A slight flutter from the shadows may be all an enemy sees of Dark Willow, as she eludes pursuit and controls her foe's movements with cunning fae tricks. Calling upon powers far more ancient than any scholarly magic, she binds enemies in place before unleashing the full wrath and terror of the fae realm upon them.",
    heroIntro: "HAS AN ARSENAL OF DISABLES AT HER DISPOSAL",
    abilities: [
      {
        name: "Pixie Dust ",
        description:
          "Whenever a skill makes Dark Willow become untargetable, she gains 100% HP Regen and 100% Mana Regen while in that state. ",
      },
      {
        name: "Bramble Maze ",
        description:
          "Dark Willow creates a 500 AoE maze of 8 brambles that grow in the target area after 0.3 seconds. Enemies that walk into a bramble are rooted and take damage over time. Lasts 12 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_bramble_maze.png",
      },
      {
        name: "Shadow Realm ",
        description:
          "Dark Willow recedes into the shadows, becoming untargetable.  Her next attack has 600 bonus attack range and deals bonus magic damage, and will end Shadow Realm. Damage scales based on how long she remains under the effects of Shadow Realm, the maximum being reached after 3 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_shadow_realm.png",
      },
      {
        name: "Cursed Crown ",
        description:
          "Dark Willow casts an ancient fae curse on the target. After a delay, the target and nearby enemies are stunned. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_cursed_crown.png",
      },
      {
        name: "Bedlam ",
        description:
          "Dark Willow sends her pet wisp to roam around herself for the duration, rapidly attacking nearby enemies.  Bedlam cannot be used while Terrorize is active. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_bedlam.png",
      },
      {
        name: "Terrorize ",
        description:
          "Dark Willow releases her pet wisp to terrorize her enemies. After a short delay, all enemies in the target area become fearful and run toward their home fountain. Terrorize cannot be used while Bedlam is active. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_terrorize.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_willow.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_willow.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_willow.png",
    },
    heroName: "Dark Willow",
    state: "universal",
    complexity: 2,
  },
  dawnbreaker: {
    shortDescription:
      "Dawnbreaker shines in the heart of battle, happily crushing enemies with her celestial hammer and healing nearby allies. She revels in hurling her hammer through multiple foes and then converging with it in a blazing wake, always waiting to tap her true cosmic power to fly to the aid of her teammates — eager to rout her enemies on the battlefield no matter where they are.",
    heroIntro: "LEAPS TO AID HER ALLIES, WHEREVER THEY ARE ON THE MAP",
    abilities: [
      {
        name: "Break of Dawn ",
        description:
          "Whenever the sun comes out, Dawnbreaker reveals the whole map to allies for 5 seconds. ",
      },
      {
        name: "Starbreaker ",
        description:
          "Dawnbreaker whirls her hammer around 3 times, damaging enemies with her attack plus bonus damage. On the final strike, she smashes her hammer down, stunning and damaging enemies in front of her. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dawnbreaker_fire_wreath.png",
      },
      {
        name: "Celestial Hammer ",
        description:
          "Dawnbreaker hurls her weapon at a target, damaging enemies struck along the way. The hammer pauses for 2 seconds at the destination before flying back to her, leaving a trail of fire that slows enemies. Dawnbreaker can recall the hammer at any time, pulling her towards it so they meet in the middle. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dawnbreaker_celestial_hammer.png",
      },
      {
        name: "Luminosity ",
        description:
          "After a number of attacks, Dawnbreaker powers up, charging her next attack with a critical hit that heals all allied heroes within 650 units around her for a portion of attack damage dealt. Creeps and neutral enemies provide less healing. Allies are healed for 50% of the amount. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dawnbreaker_luminosity.png",
      },
      {
        name: "Solar Guardian ",
        description:
          "CHANNELED - Dawnbreaker creates a pulsing effect at a location within 350 units of an allied hero anywhere on the map, damaging enemies and healing allies with each pulse. After a short duration, she flies to the target location, dealing additional damage and stunning enemies upon landing. Once channeled, Dawnbreaker cannot stop the ability. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dawnbreaker_solar_guardian.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dawnbreaker.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dawnbreaker.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dawnbreaker.png",
    },
    heroName: "Dawnbreaker",
    state: "strength",
    complexity: 1,
  },
  dazzle: {
    shortDescription:
      "Born to support his cohorts in battle, Dazzle keeps wounded allies alive so they might later rain death upon the enemy. His strange magic weaves its way into nearby armor, weakening enemies and strengthening friends.",
    heroIntro: "POWERFUL HEALER WHO CAN BRIEFLY PREVENT DEATH",
    abilities: [
      {
        name: "Weave ",
        description:
          "Dazzle's abilities apply Weave to both allies and enemies they affect, increasing allied armor and reducing enemy armor. Multiple instances of this effect stack. ",
      },
      {
        name: "Poison Touch ",
        description:
          "Releases a cone of poison that strikes multiple enemy units. Deals damage over time and slows the targets. Anytime the targets get attacked by Dazzle, the debuff duration is refreshed and slow is increased. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_poison_touch.png",
      },
      {
        name: "Shallow Grave ",
        description:
          "An ally blessed with Shallow Grave, no matter how close to death, cannot die while under its protection. Healing on that ally is also amplified for the duration based on the hero's HP. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_shallow_grave.png",
      },
      {
        name: "Shadow Wave ",
        description:
          "Sends out a bolt of power that arcs between allies, healing them while damaging any enemy units standing nearby.  Dazzle is always healed by Shadow Wave. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_shadow_wave.png",
      },
      {
        name: "Bad Juju ",
        description:
          "Decreases the remaining cooldown of all other abilities. Casting Bad Juju temporarily increases its health cost. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_bad_juju.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.png",
    },
    heroName: "Dazzle",
    state: "universal",
    complexity: 1,
  },
  deathprophet: {
    shortDescription:
      "When she unleashes her army of ghosts, Death Prophet excels at demolishing enemies and their defenses alike. Leading her team's forces toward the enemy base with wave after damaging wave from her swarm, her onslaught can seem unstoppable.",
    heroIntro: "SUMMONS AN ARMY OF GHOSTS TO ATTACK",
    abilities: [
      {
        name: "Witchcraft ",
        description:
          "Death Prophet's occult knowledge deepens with experience, gaining 0.75% movement speed per level, and 0.5% spell cooldown reduction per level. ",
      },
      {
        name: "Crypt Swarm ",
        description:
          "Sends a swarm of winged beasts to savage enemy units in front of Death Prophet. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/death_prophet_carrion_swarm.png",
      },
      {
        name: "Silence ",
        description:
          "Fires a projectile that prevents enemy units in a target area from casting spells. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/death_prophet_silence.png",
      },
      {
        name: "Spirit Siphon ",
        description:
          "Creates a spirit link between Death Prophet and an enemy unit, draining health from the enemy. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/death_prophet_spirit_siphon.png",
      },
      {
        name: "Exorcism ",
        description:
          "Unleashes evil spirits to drain the life of nearby enemy units and structures. Spirits need to return back to Death Prophet in order to attack again. At the end of the spell's duration, Death Prophet is healed in proportion to the damage dealt. Deals 50% damage to buildings. Lasts 40 seconds.Increases Death Prophet's movement speed while active. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/death_prophet_exorcism.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/death_prophet.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/death_prophet.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/death_prophet.png",
    },
    heroName: "Death Prophet",
    state: "intelligence",
    complexity: 1,
  },
  disruptor: {
    shortDescription:
      "Disruptor excels at shattering the plans of his enemies. Summoning impassable fences to trap targets as he calls down a silencing storm, should a foe attempt something unexpected he simply teleports them back to their earlier location.",
    heroIntro: "TRAPS AND SILENCES FOES IN HIS STATIC STORM",
    abilities: [
      {
        name: "Electromagnetic Repulsion ",
        description:
          "Whenever Disruptor takes more than 250 damage from any source within 400 radius, all nearby enemies within are pushed back up to a 400 unit distance. ",
      },
      {
        name: "Thunder Strike ",
        description:
          "Repeatedly strikes the targeted unit with lightning.  Each strike damages nearby enemy units in a small radius and slows enemy movement and attack speed by 100% for 0.4 seconds.  Provides vision of its target. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_thunder_strike.png",
      },
      {
        name: "Glimpse ",
        description:
          "Teleports the target hero back to where it was 4 seconds ago.  Instantly kills illusions. Deals damage equal to a percentage of the distance glimpsed, that cannot go over a damage maximum. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png",
      },
      {
        name: "Kinetic Field ",
        description:
          "After a short formation time, creates a circular barrier of kinetic energy that enemies can't pass. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_kinetic_field.png",
      },
      {
        name: "Static Storm ",
        description:
          "Creates a damaging static storm that also silences all enemy units in the area for the duration.  The damage starts off weak, but increases in power over the duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/disruptor_static_storm.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/disruptor.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/disruptor.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/disruptor.png",
    },
    heroName: "Disruptor",
    state: "intelligence",
    complexity: 2,
  },
  doom: {
    shortDescription:
      "One way or another, Doom shuts down his enemies. Devouring creeps to claim the various skills they had in life, he can place a lingering silence upon a foe's spells and items with his ultimate as he torches his foes.",
    heroIntro:
      "CAN PREVENT A SINGLE ENEMY FROM CASTING SPELLS OR HEALING IN ANY WAY",
    abilities: [
      {
        name: "Lvl ? Pain ",
        description:
          "Doom's attacks deal 15% bonus damage to heroes whose level is lower than Doom's level. ",
      },
      {
        name: "Devour ",
        description:
          "Consumes an enemy or neutral creep, acquiring any special abilities that it possessed. If alt-cast is deactivated, Doom will not acquire the creep's abilities. Duration is equal to the cooldown. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/doom_bringer_devour.png",
      },
      {
        name: "Scorched Earth ",
        description:
          "Carpets the nearby earth in flames which damage enemies, while also granting him increased movement speed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/doom_bringer_scorched_earth.png",
      },
      {
        name: "Infernal Blade ",
        description:
          "Doom swings his burning sword, igniting the enemy. Stuns for 0.6 seconds and applies a 4 second burn that deals a base damage plus a percentage of the target's Max HP as damage per second. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/doom_bringer_infernal_blade.png",
      },
      {
        name: "Doom ",
        description:
          "Inflicts a curse that dispels an enemy Hero and prevents them from casting spells or healing in any way, while taking damage over time.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/doom_bringer_doom.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/doom_bringer.png",
    },
    heroName: "Doom",
    state: "strength",
    complexity: 2,
  },
  dragonknight: {
    shortDescription:
      "When he takes on his terrifying dragon form, Dragon Knight strikes fear into any who face him. Strong and adaptable, he can stun his enemies and burn all in front of him, often providing his allies the momentum they need to carry them to victory.",
    heroIntro: "TRANSFORMS INTO A FORMIDABLE RANGED DRAGON",
    abilities: [
      {
        name: "Dragon Blood ",
        description:
          "The life blood of the Dragon improves Dragon Knight's health regeneration and armor. Amount for both values is increased by 0.5 per level and is multiplied when in Dragon Form. ",
      },
      {
        name: "Breathe Fire ",
        description:
          "Unleashes a breath of fire in front of Dragon Knight that burns enemies and reduces the damage their attacks deal. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_breathe_fire.png",
      },
      {
        name: "Dragon Tail ",
        description:
          "Dragon Knight smites an enemy unit in melee range with his shield, stunning it and dealing damage.  When in Elder Dragon Form, the cast range increases to 450. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_dragon_tail.png",
      },
      {
        name: "Wyrm's Wrath ",
        description:
          "The life blood of the Dragon improves Dragon Knight's attacks. When in Dragon form, these attack effects are stronger. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_dragon_blood.png",
      },
      {
        name: "Elder Dragon Form ",
        description:
          "Dragon Knight takes the form of one of three powerful elder dragons. Increases movement speed and attack damage, with Wyrm's Wrath on-hit effects applying to all enemies near the target. Increases Dragon Tail range. Increases health regeneration and armor bonuses from Dragon Blood.  ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_elder_dragon_form.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dragon_knight.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dragon_knight.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dragon_knight.png",
    },
    heroName: "Dragon Knight",
    state: "strength",
    complexity: 1,
  },
  drowranger: {
    shortDescription:
      "Not many can escape Drow Ranger once she's within range. After her foes have been silenced with a chilling blast, she finishes them off with a barrage of slowing, ice-tipped arrows that few can survive.",
    heroIntro: "SLOWS WITH HER FROST-TIPPED ARROWS",
    abilities: [
      {
        name: "Precision Aura ",
        description:
          "Grants Drow and nearby ranged heroes with bonus agility based on Drow's current agility and level. ",
      },
      {
        name: "Frost Arrows ",
        description:
          "Adds a freezing effect to Drow's attacks, slowing enemy movement and dealing bonus damage.  Slow lasts 1.5 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/drow_ranger_frost_arrows.png",
      },
      {
        name: "Gust ",
        description:
          "Releases a wave that silences and knocks back and reveals invisible enemy units. Knockback distance is relative to how close they are to Drow. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/drow_ranger_wave_of_silence.png",
      },
      {
        name: "Multishot ",
        description:
          "CHANNELED - Drow releases a flurry of arrows in continuous salvos, hitting enemies for extra damage and applying Frost Arrows. Lasts up to 1.75 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/drow_ranger_multishot.png",
      },
      {
        name: "Marksmanship ",
        description:
          "Drow's experiences in battle grant her a chance to launch arrows with incredible accuracy and effectiveness. Pierces through the enemy's defenses, ignoring their base armor. This ability is disabled if there is an enemy hero within 400 range. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/drow_ranger_marksmanship.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/drow_ranger.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/drow_ranger.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/drow_ranger.png",
    },
    heroName: "Drow Ranger",
    state: "agility",
    complexity: 1,
  },
  earthspirit: {
    shortDescription:
      "Earth Spirit keeps the enemy in chaos and his friends in the fight. Adapting to any battle scenario, he can send his statue remnants back and forth to damage foes, or grips an ally from the jaws of death.",
    heroIntro: "DISABLES AND REPOSITIONS HIS ENEMIES",
    abilities: [
      {
        description: "This hero's innate ability is Stone Remnant.",
      },
      {
        name: "Boulder Smash",
        description:
          "Earth Spirit smashes the target enemy or ally, sending them in the direction he is facing. If Earth Spirit targets an area, he will smash the nearest unit in a 200 radius, prioritizing Stone Remnants. The travelling unit or Remnant damages all enemy units it hits.  If an enemy is hit by a Stone Remnant, they are also slowed. Stone Remnants travel further than other units. Deals 1.4x damage to creeps.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/earth_spirit_boulder_smash.png",
      },
      {
        name: "Rolling Boulder",
        description:
          "Earth Spirit gathers himself into a boulder and, after a 0.6s delay, rolls toward the target location, dealing 60 + 100% STR damage and stunning enemy units. He will stop if he collides with an enemy hero or is stunned. If he rolls over a Stone Remnant, he will travel further and faster, and stun enemies for longer.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/earth_spirit_rolling_boulder.png",
      },
      {
        name: "Geomagnetic Grip",
        description:
          "Earth Spirit pulls the target Stone Remnant. Enemies struck by the gripped target will be silenced and take damage.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/earth_spirit_geomagnetic_grip.png",
      },
      {
        name: "Stone Remnant",
        description:
          "Call a Stone Remnant to the target location.  Stone Remnants have no vision and are invulnerable, and can be used with Earth Spirit's abilities.  Calling a Stone Remnant consumes a charge, which recharge over time. Gains additional charges every 5 hero levels.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/earth_spirit_stone_caller.png",
      },
      {
        name: "Magnetize",
        description:
          "Magnetizes units in a small nearby area, causing them to take damage for a short duration. Magnetized heroes cause nearby Stone Remnants to explode, destroying the remnant and refreshing Magnetize's duration on all nearby enemies. This process can repeat multiple times. If an enemy hero is affected by Geomagnetic Grip or Boulder Smash, all magnetized heroes share the effects. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/earth_spirit_magnetize.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earth_spirit.png",
    },
    heroName: "Earth Spirit",
    state: "strength",
    complexity: 3,
  },
  earthshaker: {
    shortDescription:
      "Whether blocking an enemy's escape, dividing their forces, or shattering the ground beneath gathered foes, Earthshaker is at his best when he strikes without warning. Whatever survives the aftershocks still has a swing from his mighty totem to look forward to.",
    heroIntro: "DISRUPTS ENEMY TEAM WITH HIS CHAIN STUNS",
    abilities: [
      {
        name: "Spirit Cairn ",
        description:
          "When Earthshaker dies, a 75 radius fissure is created where he died. This fissure blocks movement and allows Earthshaker to continue to gain experience around it. It remains until Earthshaker respawns. ",
      },
      {
        name: "Fissure ",
        description:
          "Slams the ground with a mighty totem, creating an impassable ridge of stone while stunning and damaging enemy units along its line. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/earthshaker_fissure.png",
      },
      {
        name: "Enchant Totem ",
        description:
          "Empowers Earthshaker's totem, causing it to deal extra damage and have 100 bonus attack range on the next attack. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/earthshaker_enchant_totem.png",
      },
      {
        name: "Aftershock ",
        description:
          "Causes the earth to shake underfoot, adding additional damage and stuns to nearby enemy units when Earthshaker casts his abilities. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/earthshaker_aftershock.png",
      },
      {
        name: "Echo Slam ",
        description:
          "Shockwaves travel through the ground, damaging enemy units.  Each enemy hit causes an echo to damage nearby units. Real heroes cause two echoes. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/earthshaker_echo_slam.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earthshaker.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earthshaker.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/earthshaker.png",
    },
    heroName: "Earthshaker",
    state: "strength",
    complexity: 2,
  },
  eldertitan: {
    shortDescription:
      "Scouting the way with his astral spirit, Elder Titan can strike from any direction. Halting foes with a stomp of his hoof while his presence eats away at their defenses, he splits the earth itself to bring his enemies low.",
    heroIntro: "DAMAGES AND DISABLES WITH HIS ASTRAL SPIRIT",
    abilities: [
      {
        name: "Tip the Scales ",
        description:
          "Allied creeps and buildings affected by Glyph of Fortification or Roshan's Banner deal 100% bonus damage. ",
      },
      {
        name: "Echo Stomp ",
        description:
          "CHANNELED - Elder Titan and his Astral Spirit both stomp the ground, damaging and knocking nearby enemy units unconscious around their locations.  The Elder Titan stomp deals physical damage, while the Spirit stomp deals magical damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/elder_titan_echo_stomp.png",
      },
      {
        name: "Astral Spirit ",
        description:
          "Elder Titan sends forth his Astral Spirit, damaging any units it passes through.  When the spirit rejoins the Titan, it grants bonus damage, armor, and movement speed for each unit it passed through.The Astral Spirit possesses the Echo Stomp, Return Spirit, and Natural Order abilities. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/elder_titan_ancestral_spirit.png",
      },
      {
        name: "Natural Order ",
        description:
          "Reduces all elements to their basic levels, removing base armor and magic damage resistance from nearby enemy units. The armor reduction is centered around the hero, while the magic armor reduction is centered around Astral Spirit. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/elder_titan_natural_order.png",
      },
      {
        name: "Earth Splitter ",
        description:
          "Sends forth a jagged crack in front of Elder Titan. After 3 seconds, the crack implodes, slowing movement while dealing damage to each enemy based on their maximum life. Half of the damage dealt is Magical damage, while the other half is Physical damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/elder_titan_earth_splitter.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/elder_titan.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/elder_titan.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/elder_titan.png",
    },
    heroName: "Elder Titan",
    state: "strength",
    complexity: 2,
  },
  emberspirit: {
    shortDescription:
      "Swift and elusive, Ember Spirit strikes all nearby enemies in rapid succession, and ties them up with burning chains. Quickly rushing across the battlefield to arrive at one of his exploding remnants, few can avoid, or capture, his flame.",
    heroIntro: "RAPIDLY STRIKES AND CHAINS HIS FOES",
    abilities: [
      {
        name: "Immolation ",
        description:
          "Ember Spirit is continuously burning, dealing damage per second to all nearby enemies at all times. ",
      },
      {
        name: "Searing Chains ",
        description:
          "Ember Spirit unleashes fiery bolas that wrap around nearby enemies, anchoring them in place and dealing damage each second. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ember_spirit_searing_chains.png",
      },
      {
        name: "Sleight of Fist ",
        description:
          "Ember Spirit dashes around with blazing speed, attacking all enemies in the targeted area of effect, then returning to his start location.  Deals bonus damage to heroes. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ember_spirit_sleight_of_fist.png",
      },
      {
        name: "Flame Guard ",
        description:
          "Ember Spirit surrounds himself with a ring of fire that consumes incoming magic damage, absorbing a percentage of the damage taken. Flame Guard deals damage per second in an area around Ember Spirit while Flame Guard is active. If the shield is broken, the damage is also lost. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ember_spirit_flame_guard.png",
      },
      {
        name: "Activate Fire Remnant ",
        description: "Select the Fire Remnant to arrive at. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ember_spirit_activate_fire_remnant.png",
      },
      {
        name: "Fire Remnant ",
        description:
          "Sends a Fire Remnant that runs to the target location at 250% Ember Spirit's speed.  Using Activate Fire Remnant, Ember Spirit will dash out to all active Fire Remnants, destroying them and dealing damage in an area and then moving to the nearest Remnant.  Ember Spirit will end at the Remnant closest to the targeted location. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ember_spirit_fire_remnant.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.png",
    },
    heroName: "Ember Spirit",
    state: "agility",
    complexity: 2,
  },
  enchantress: {
    shortDescription:
      "Harmful up close and lethal at a distance, Enchantress skewers foes with attacks imbued to become more damaging the further they fly. Whether inflicting powerful slows on her enemies or charming forest creatures to fight her battles, she is never short of tools to win a fight.",
    heroIntro: "ENCHANTS NEUTRAL CREEPS TO DO HER BIDDING",
    abilities: [
      {
        name: "Rabble-Rouser ",
        description:
          "All neutral camps deal more damage to enemy heroes. Damage increase is 10% + 3% per Enchantress's hero level. ",
      },
      {
        name: "Impetus ",
        description:
          "Places an enchantment on each attack while activated, causing it to deal additional damage based on how far away the target is.  The farther the target, the greater the damage dealt. Deals double damage to creeps and illusions. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/enchantress_impetus.png",
      },
      {
        name: "Enchant ",
        description:
          "Enchantress charms an enemy. If the enemy is a hero, they are dispelled and slowed for 3.5s. If the enemy is a creep, she brings it under her control and receives 35% of their experience bounty.  Enchantress can control creeps for up to 30s. DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/enchantress_enchant.png",
      },
      {
        name: "Nature's Attendants ",
        description:
          "A cloud of wisps heals Enchantress and any friendly units nearby. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/enchantress_natures_attendants.png",
      },
      {
        name: "Untouchable ",
        description:
          "Enchantress beguiles her enemies, slowing their attacks when she is attacked. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/enchantress_untouchable.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enchantress.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enchantress.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enchantress.png",
    },
    heroName: "Enchantress",
    state: "intelligence",
    complexity: 2,
  },
  enigma: {
    shortDescription:
      "Widely feared for his ultimate ability, Enigma can summon a black hole capable of entrapping enemy forces, so that allies can then destroy them. An ever-present contingent of eidolons at his side, he pummels foes with ranged attacks.",
    heroIntro: "TRAPS AND DAMAGES ENEMIES IN A BLACK HOLE",
    abilities: [
      {
        name: "Gravity Well ",
        description:
          "Allies within 500 distance from Enigma have up to 9% Damage Reduction. Effect starts at 0% at max distance and increases to its maximum strength when the ally is at 200 distance. Does not affect Enigma itself. ",
      },
      {
        name: "Malefice ",
        description:
          "Focuses Enigma's power on a target, causing it to take damage and become repeatedly stunned for multiple instances.  An instance strikes every 2 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/enigma_malefice.png",
      },
      {
        name: "Demonic Summoning ",
        description:
          "Summons three fragments of Enigma himself at the cost of health.  The eidolons health is increased by 3% of Enigma's current health. These eidolons are all under Enigma's control, and repeated successful attacks cause them to multiply.  When this happens, the eidolons have their health restored. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/enigma_demonic_conversion.png",
      },
      {
        name: "Midnight Pulse ",
        description:
          "Steeps an area in dark resonance, dealing 5 + a percentage of the enemies current HP as damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/enigma_midnight_pulse.png",
      },
      {
        name: "Black Hole ",
        description:
          "CHANNELED - Summons a vortex that sucks in nearby enemy units.  Enemies affected by Black Hole cannot move, attack, or cast spells. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/enigma_black_hole.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/enigma.png",
    },
    heroName: "Enigma",
    state: "universal",
    complexity: 2,
  },
  facelessvoid: {
    shortDescription:
      "Time is everything to Faceless Void. He speeds time to dash between locations, manipulates it to dodge attacks, stops it in a large area to devastate his foes, and given enough of it to gather resources, he can make himself unbelievably powerful.",
    heroIntro: "CAN FREEZE HIS ENEMIES IN TIME",
    abilities: [
      {
        name: "Distortion Field ",
        description:
          "Enemy Attack Projectiles within 600 radius are slowed by 35%. ",
      },
      {
        name: "Time Walk ",
        description:
          "Rushes to a target location while backtracking any damage taken the last 2 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_time_walk.png",
      },
      {
        name: "Time Dilation ",
        description:
          "Faceless Void traps all nearby enemies in a time dilation field for 8 seconds, extending their cooldowns and slowing their movement and attack speed by 7% for each cooldown extended. Deals bonus damage per second for each cooldown. The debuff does not tick down while inside Chronosphere. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_time_dilation.png",
      },
      {
        name: "Time Lock ",
        description:
          "Adds the chance for an attack to lock an enemy unit in time while attacking it a second time. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_time_lock.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/faceless_void.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/faceless_void.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/faceless_void.png",
    },
    heroName: "Faceless Void",
    state: "agility",
    complexity: 2,
  },
  grimstroke: {
    shortDescription:
      "Skilled at manipulating battle from the outskirts, Grimstroke studies every movement and assesses each line, deciding when to emerge from inky darkness to disable his victims and bind them together with a swipe of his brush. He delights in unleashing phantom thralls to vex opponents, as he carefully considers how to dispatch multiple enemies with one fateful stroke.",
    heroIntro: "DISABLES ENEMIES WITH A SWIPE OF HIS BRUSH",
    abilities: [
      {
        name: "Ink Trail ",
        description:
          "Adds an effect to Grimstroke's attacks that causes enemy heroes to leave a trail of ink behind them for 4s. ",
      },
      {
        name: "Stroke of Fate ",
        description:
          "Grimstroke paints a path of ink with his brush, damaging and slowing enemies. The damage is increased with each enemy the ink hits. Applies Ink Trail on hit. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/grimstroke_dark_artistry.png",
      },
      {
        name: "Phantom's Embrace ",
        description:
          "Summons a phantom that moves quickly towards the target, latching to it when she arrives. Once latched, the phantom damages and silences. If she survives the full latch duration she rends her victim for heavy damage and refreshes Phantom's Embrace's cooldown.Hero attacks against the phantom count as 3 attacks each. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/grimstroke_ink_creature.png",
      },
      {
        name: "Ink Swell ",
        description:
          "Grimstroke shrouds an allied unit in ink, increasing its movement speed. Enemies in range of the allied unit are damaged with inky tendrils over time. After 3 seconds it applies damage and stun in an area around the unit in proportion to how long ink tendril was near any hero. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/grimstroke_spirit_walk.png",
      },
      {
        name: "Soulbind ",
        description:
          "Binds a targeted enemy hero to its nearest allied hero within the bind radius, preventing both from moving away from each other. Any unit-targeted ability that either bound hero receives also gets cast on the other hero. If the bind is broken before the duration expires, the initial target will be bound to its nearest allied hero in the radius. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/grimstroke_soul_chain.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/grimstroke.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/grimstroke.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/grimstroke.png",
    },
    heroName: "Grimstroke",
    state: "intelligence",
    complexity: 2,
  },
  gyrocopter: {
    shortDescription:
      "With his arsenal of firepower at the ready, Gyrocopter soars into battle. Blasting all nearby enemies with shots from his cannon or hammering them with a barrage of rockets, if he is able to gather his full strength, he demolishes foes with ease.",
    heroIntro: "BARRAGES WITH HIS CANNON AND HOMING MISSILES",
    abilities: [
      {
        name: "Chop Shop ",
        description: "Gyrocopter can disassemble most items. ",
      },
      {
        name: "Rocket Barrage ",
        description:
          "Launches a salvo of rockets at nearby enemy units in a radius around the Gyrocopter. Lasts 3 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_rocket_barrage.png",
      },
      {
        name: "Homing Missile ",
        description:
          "Fires a homing missile to seek the targeted enemy unit. The missile gains speed over time, dealing damage and stunning when it impacts the target. Enemy units can destroy the missile before it reaches its target. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_homing_missile.png",
      },
      {
        name: "Flak Cannon ",
        description:
          "Gyrocopter's attacks hit all enemy units in an area around it for a limited number of attacks.  Only the main target of attacks will receive attack bonuses such as Critical Strike.  Lasts 12 seconds or until the attacks are used. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_flak_cannon.png",
      },
      {
        name: "Call Down ",
        description:
          "Call down 3 aerial missile strikes that slow and damage enemy units in a target area. Each strike is 500 distance from the previous one. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_call_down.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/gyrocopter.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/gyrocopter.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/gyrocopter.png",
    },
    heroName: "Gyrocopter",
    state: "agility",
    complexity: 1,
  },
  hoodwink: {
    shortDescription:
      "Always at hand when trouble's afoot, Hoodwink lives to tangle with the threats that fill the haunted forest she adopted as her home. Toting a massive crossbow while still able to scurry through the woodland with the greatest of ease, Hoodwink is nearly impossible to keep tabs on in battle. Lose track and she'll pop out behind you -- your stunned carcass already dangling in one of her nets.",
    heroIntro: "SHACKLES HER ENEMIES TO TREES",
    abilities: [
      {
        name: "Mistwoods Wayfarer ",
        description:
          "Hoodwink has a chance to redirect enemy attacks to a nearby tree. ",
      },
      {
        name: "Acorn Shot ",
        description:
          "Fires Hoodwink's attack with an acorn at the target unit.  The acorn bounces to nearby targets, slowing them and dealing a percentage of Hoodwink's attack with bonus damage.If point targeted, a tree is created at the target position and the acorn will bounce to nearby targets.  The ability may be placed on alt-cast to force this behavior. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/hoodwink_acorn_shot.png",
      },
      {
        name: "Bushwhack ",
        description:
          "Tosses a net trap that stuns enemies if they are near a tree in the area.  Affected enemies take damage over time and are pulled towards the tree nearest to them within the target area, and have their vision reduced to 0 for the duration of the stun. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/hoodwink_bushwhack.png",
      },
      {
        name: "Scurry ",
        description:
          "Hoodwink gains bonus movement speed, phased movement, and tree-walking for a brief time. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/hoodwink_scurry.png",
      },
      {
        name: "Sharpshooter ",
        description:
          "Hoodwink charges up and fires a deadly bolt from her crossbow, dealing heavy damage, break and slow to an enemy Hero.  The damage and debuff duration scale up to max after 3 seconds, and the bolt is fired automatically after 5 seconds.Hoodwink is knocked backwards for a distance of 350 from the force of the shot. Creeps hit by the bolt are damaged for half the values. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/hoodwink_sharpshooter.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/hoodwink.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/hoodwink.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/hoodwink.png",
    },
    heroName: "Hoodwink",
    state: "agility",
    complexity: 2,
  },
  huskar: {
    shortDescription:
      "As his health lowers, Huskar's ability to slay enemies grows considerably. Able to instantly remove a portion of both his and an enemy's health with his ultimate, when near death he is able to throw his burning spears with devastating speed.",
    heroIntro: "SACRIFICES HIS HEALTH TO DEAL MORE DAMAGE",
    abilities: [
      {
        name: "Blood Magic ",
        description:
          "Huskar does not have mana. Mana costs of items are converted into health costs. ",
      },
      {
        name: "Inner Fire ",
        description:
          "In a fiery rage, knocks all nearby enemies away from you to a fixed distance, dealing damage and silencing them. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/huskar_inner_fire.png",
      },
      {
        name: "Burning Spear ",
        description:
          "Huskar sets his spears aflame, dealing damage over time with his regular attack.  Multiple attacks will stack additional damage.  Each attack drains some of Huskar's health. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/huskar_burning_spear.png",
      },
      {
        name: "Berserker's Blood ",
        description:
          "Huskar's injuries feed his power, giving increased attack speed, magic resistance and health regen based on missing health. Health regen is a percentage of your strength. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/huskar_berserkers_blood.png",
      },
      {
        name: "Life Break ",
        description:
          "Huskar draws upon his health to break an enemy's life, leaping at a target to shatter a percentage of that hero's current health and slow both their movement and attack speed.  While leaping, Huskar is Debuff Immune and has 60% increased magic resistance.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/huskar_life_break.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/huskar.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/huskar.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/huskar.png",
    },
    heroName: "Huskar",
    state: "strength",
    complexity: 1,
  },
  invoker: {
    shortDescription:
      "With an intricate arsenal of spells at his disposal, Invoker can adapt to any battle situation. Each configuration of his three spell components yields of one of ten spells, meaning he's never without a way to destroy or escape his enemies.",
    heroIntro: "WEAVES MAGIC WITH AN ARRAY OF SPELL COMBOS",
    abilities: [
      {
        name: "Mastermind ",
        description:
          "When Invoker denies a lane creep, he gets 25% of the XP. ",
      },
      {
        name: "Quas ",
        description: "Allows manipulation of ice elements. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_quas.png",
      },
      {
        name: "Wex ",
        description: "Allows manipulation of storm elements. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_wex.png",
      },
      {
        name: "Exort ",
        description: "Allows manipulation of fire elements. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_exort.png",
      },
      {
        name: "Invoke ",
        description:
          "Combines the properties of the elements currently being manipulated to create a new spell for Invoker to use. Invoke cooldown is reduced by 0.3 seconds for each orb level.  Click the help button to see the list of possible spells. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_invoke.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/invoker.png",
    },
    heroName: "Invoker",
    state: "universal",
    complexity: 3,
  },
  io: {
    shortDescription:
      "Io has a talent for making allies more effective. A powerful companion, the wisp's tether speeds allies and stops enemies. Capable of linking to and teleporting across the battlefield with an ally, Io can make a dangerous ally even deadlier.",
    heroIntro: "LINKS TO ITS ALLIES TO BUFF THEM",
    abilities: [
      {
        name: "Sight Seer ",
        description:
          "Io's Team takes 1s less to take watchers, and their watchers have 300 bonus vision. ",
      },
      {
        name: "Tether ",
        description:
          "Tethers Io to an allied unit, granting bonus movement speed to both. When Io restores health or mana, the tethered unit gains a portion of that amount. The tether breaks when the allied unit moves too far away, or Io cancels the tether. Tether slows and damages enemies touching it. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_tether.png",
      },
      {
        name: "Spirits ",
        description:
          "Summon five particle spirits that dance in a circle around Io. If a particle collides with an enemy hero, it explodes, damaging all enemy units in an area around it.  Creeps take minor damage from touching a particle spirit, but do not cause them to explode.  When its duration ends, any remaining Spirits explode. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_spirits.png",
      },
      {
        name: "Overcharge ",
        description:
          "Io gains health regeneration based on max health.  If Io is Tethered to an ally, that unit also gains any bonuses granted by Overcharge. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_overcharge.png",
      },
      {
        name: "Spirits In ",
        description:
          "Sends the spirits closer to you. Can be toggled on and off. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_spirits_in.png",
      },
      {
        name: "Spirits Out ",
        description:
          "Sends the spirits farther away from you. Can be toggled on and off. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_spirits_out.png",
      },
      {
        name: "Relocate ",
        description:
          "Teleports Io and a tethered ally to any location. After the spell expires, Io and the tethered ally will return to their original location. Double-click to teleport to your team's base fountain. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_relocate.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/wisp.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/wisp.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/wisp.png",
    },
    heroName: "Io",
    state: "universal",
    complexity: 3,
  },
  jakiro: {
    shortDescription:
      "Jakiro is their own best friend. Not content to merely punish enemies with fire, the twins freeze them in place to force them to stand there and burn. With foes aflame, they turn to inflicting massive damage on enemy structures with their liquid fire.",
    heroIntro: "FREEZES AND BURNS ENEMIES WITH MAGIC",
    abilities: [
      {
        name: "Double Trouble ",
        description:
          "Jakiro's attacks launch an attack from each head, but deal 50% less damage each. ",
      },
      {
        name: "Dual Breath ",
        description:
          "An icy blast followed by a wave of fire launches out in a path in front of Jakiro. The ice slows enemies, while the fire delivers damage over time. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/jakiro_dual_breath.png",
      },
      {
        name: "Ice Path ",
        description:
          "Creates a path of ice that stuns and damages enemies that touch it. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/jakiro_ice_path.png",
      },
      {
        name: "Macropyre ",
        description:
          "Jakiro exhales a wide line of lasting flames, which deals damage per second to any enemy units caught in the fire. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/jakiro_macropyre.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/jakiro.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/jakiro.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/jakiro.png",
    },
    heroName: "Jakiro",
    state: "intelligence",
    complexity: 1,
  },
  juggernaut: {
    shortDescription:
      "In a flurry of slashes, Juggernaut cuts down his foes. Sprinting and spinning into battle with reckless abandon, and nearly invincible once he is able to begin his assault, stopping Juggernaut can often be just as difficult as surviving him.",
    heroIntro: "SLICES THROUGH HIS ENEMIES WITH PRECISE STRIKES",
    abilities: [
      {
        name: "Duelist ",
        description:
          "Juggernaut deals 12% more damage to targets that are facing him. Damage bonus always applies during Omnislash. ",
      },
      {
        name: "Blade Fury ",
        description:
          "Causes a bladestorm of destructive force around Juggernaut, rendering him debuff immune, increasing his magic resistance by 80%, and dealing damage to nearby enemy units. Juggernaut deals damage in an interval equal to 2x his attack speed. Applies a strong dispel at the end of the spin. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_blade_fury.png",
      },
      {
        name: "Healing Ward ",
        description:
          "Summons a Healing Ward which heals all nearby allied units, based on their max health.  The Healing Ward moves at 325 movement speed after being summoned.  Lasts 25 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_healing_ward.png",
      },
      {
        name: "Blade Dance ",
        description:
          "Gives Juggernaut a chance to deal critical damage on each attack. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_blade_dance.png",
      },
      {
        name: "Omnislash ",
        description:
          "Juggernaut leaps towards the target enemy units, and then slashes the target and other nearby enemy units at an increased attack rate. Juggernaut is invulnerable for the duration.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_omni_slash.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/juggernaut.png",
    },
    heroName: "Juggernaut",
    state: "agility",
    complexity: 1,
  },
  keeperofthelight: {
    shortDescription:
      "Keeper of the Light is a helpful addition to any team. Manipulating the mana of both his allies and enemies, he effortlessly destroys lesser foes with waves of illumination, then enters his spirit form to gather his team to press the assault.",
    heroIntro: "PROVIDES INSTANT MANA TO ALLIES",
    abilities: [
      {
        name: "Mana Magnifier ",
        description:
          "Allies within 900 range of Keeper of the Light have 15% more mana. Lingers for 5 seconds. ",
      },
      {
        name: "Illuminate ",
        description:
          "CHANNELED - Channels light energy, building power the longer it's channeled.  Once released, a wave is sent forth that deals damage and gives vision in its path.  The longer it is channeled, the more damage is dealt. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/keeper_of_the_light_illuminate.png",
      },
      {
        name: "Blinding Light ",
        description:
          "A blinding light flashes over the targeted area, knocking back and blinding the units in the area, causing them to miss some attacks. Knockback is 400 range over 0.6 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/keeper_of_the_light_blinding_light.png",
      },
      {
        name: "Chakra Magic ",
        description:
          "Restores mana to the target unit and reduces cooldowns of all basic abilities currently on cooldown by a fixed amount. Is 25% more effective when used on himself. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/keeper_of_the_light_chakra_magic.png",
      },
      {
        name: "Spirit Form ",
        description:
          "Ezalor temporarily turns his body luminescent, gaining bonus movement speed, cast range, and allows Illuminate to be channeled by a separate spirit and heal allies. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/keeper_of_the_light_spirit_form.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/keeper_of_the_light.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/keeper_of_the_light.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/keeper_of_the_light.png",
    },
    heroName: "Keeper of the Light",
    state: "intelligence",
    complexity: 2,
  },
  kunkka: {
    shortDescription:
      "Kunkka is always predicting where his enemies will go next. Able to attack a location with a geyser of water or a ghostly shipwreck, should his aim prove true, he and his allies will have no trouble cleaning up whatever is left.",
    heroIntro: "DISRUPTS ENEMY POSITIONING AND DISABLES THEM",
    abilities: [
      {
        name: "Admiral's Rum ",
        description:
          "Damage from enemy heroes, buildings, or Roshan that would reduce Kunkka below a threshold causes him to douse himself with The Admiral's Rum, receiving bonus movement speed and a delayed reaction to incoming damage. ",
      },
      {
        name: "Torrent ",
        description:
          "Summons a rising torrent that, after a short delay, hurls enemy units into the sky, stunning, dealing damage and slowing movement speed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/kunkka_torrent.png",
      },
      {
        name: "Tidebringer ",
        description:
          "Kunkka's legendary sword grants increased damage and cleaves a large area of effect in front of him for a single strike. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/kunkka_tidebringer.png",
      },
      {
        name: "X Marks the Spot ",
        description:
          "Targets a friendly or enemy Hero, marks their position with an X, and returns them to it after several seconds.  Kunkka can trigger the return at any time during the duration. Lasts twice as long on allied heroes. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/kunkka_x_marks_the_spot.png",
      },
      {
        name: "Ghostship ",
        description:
          "Summons a ghostly ship that sails through the battle before smashing apart, damaging and stunning all enemies caught near the wreckage. Allied heroes touched by the Ghostship are given a strong swig of The Admiral's Rum, receiving bonus movement speed and a delayed reaction to incoming damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/kunkka_ghostship.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/kunkka.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/kunkka.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/kunkka.png",
    },
    heroName: "Kunkka",
    state: "strength",
    complexity: 2,
  },
  legioncommander: {
    shortDescription:
      "Marching across the battlefield, Legion Commander challenges lone enemies in single combat. Each duel she wins increases the power of her attacks, until at last she can become a relentless one-woman army.",
    heroIntro: "INCREASES POWER WITH EACH DUEL VICTORY",
    abilities: [
      {
        name: "Outfight Them! ",
        description:
          "Attacking an enemy hero that is higher level than you increases your HP regeneration, lifesteal, and incoming heals by 50% for 4s. ",
      },
      {
        name: "Overwhelming Odds ",
        description:
          "Turns the enemies' numbers against them, dealing damage per unit or per hero and granting you bonus attack speed. Deals bonus damage to illusions and summoned units as a percent of their current health. Can be cast during Duel. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/legion_commander_overwhelming_odds.png",
      },
      {
        name: "Press The Attack ",
        description:
          "Removes debuffs and disables from the target friendly unit, and grants bonus movement speed and health regen for a short time.DISPEL TYPE: Strong Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/legion_commander_press_the_attack.png",
      },
      {
        name: "Moment of Courage ",
        description:
          "When attacked, Legion Commander has a chance to immediately counterattack with bonus lifesteal. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/legion_commander_moment_of_courage.png",
      },
      {
        name: "Duel ",
        description:
          "Legion Commander and the target enemy hero are forced to attack each other for a short duration.  Neither hero can use items or abilities, with the exception of Legion Commander being able to cast Overwhelming Odds. If either hero dies during the duration, the hero winning the Duel gains permanent bonus damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/legion_commander_duel.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/legion_commander.png",
    },
    heroName: "Legion Commander",
    state: "strength",
    complexity: 1,
  },
  leshrac: {
    shortDescription:
      "Leshrac's powerful spells lay waste to enemies and their defenses alike. Pushing deep into enemy territory with his devastating edict, careful timing of his ability to split the earth will stun foes, allowing his merciless allies to finish them off.",
    heroIntro: "CAN DEAL HEAVY DAMAGE IN AN AURA AROUND HIMSELF",
    abilities: [
      {
        name: "Defilement ",
        description: "Leshrac gains AoE per intelligence. ",
      },
      {
        name: "Split Earth ",
        description:
          "Splits the earth under enemies. Deals damage and stuns for a short duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/leshrac_split_earth.png",
      },
      {
        name: "Diabolic Edict ",
        description:
          "Saturates the area around Leshrac with magical explosions that deal pure damage to enemy units and buildings.  The fewer units available to attack, the more damage those units will take. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/leshrac_diabolic_edict.png",
      },
      {
        name: "Lightning Storm ",
        description:
          "Summons a lightning storm that blasts the target enemy unit, then strikes any nearby enemy units. Struck enemies have their move speed and attack speed slowed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/leshrac_lightning_storm.png",
      },
      {
        name: "Pulse Nova ",
        description:
          "Creates waves of damaging energy around Leshrac, one per second, to damage nearby enemy units. Drains Leshrac's mana with each pulse. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/leshrac_pulse_nova.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/leshrac.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/leshrac.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/leshrac.png",
    },
    heroName: "Leshrac",
    state: "intelligence",
    complexity: 1,
  },
  lich: {
    shortDescription:
      "Drifting from battle to battle and sacrificing creeps to fuel his assaults, Lich is always ready to help his fellow heroes destroy their enemies with slowing frost. Should his foes be foolish enough to gather, his bouncing ultimate will ensure their demise.",
    heroIntro: "UNLEASHES A POWERFUL ATTACK THAT BOUNCES BETWEEN ENEMIES",
    abilities: [
      {
        name: "Death Charge ",
        description:
          "Lich cannot gain passive mana regeneration, but any unit dying within 1500 range of Lich restores 2.5% of his Max Mana (Dying heroes restore 15% of Lich's Max Mana). Instant mana restoration from items and abilities apply to Lich as normal. ",
      },
      {
        name: "Frost Blast ",
        description:
          "Blasts the target enemy unit with damaging frost, dealing area damage and slowing movement and attack rates for 4 seconds.  The primary target receives both base and area damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lich_frost_nova.png",
      },
      {
        name: "Frost Shield ",
        description:
          "Applies a magical frost shield around the target, reducing damage from attacks against it. While the shield is active, ice magic will affect nearby enemy units every 1 seconds, dealing minor damage and slowing them. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lich_frost_shield.png",
      },
      {
        name: "Sinister Gaze ",
        description:
          "CHANNELED. Hypnotizes an enemy unit, causing it to move towards a point between the two of you and drains a percentage of its current mana.Lich can use his other abilities while channeling this ability.  If cast on a creep lasts 2x longer and deals 250 damage per second. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lich_sinister_gaze.png",
      },
      {
        name: "Chain Frost ",
        description:
          "Releases an orb of frost that bounces between nearby enemy units up to 10 times, slowing and damaging each time it hits. Each bounce increases the damage for the subsequent bounces. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lich_chain_frost.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lich.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lich.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lich.png",
    },
    heroName: "Lich",
    state: "intelligence",
    complexity: 1,
  },
  lifestealer: {
    shortDescription:
      "Should Lifestealer get close to his prey, there is little that can save them. Travelling within a creep or an allied hero, once he nears a foe he explodes from his host body, surprising enemies and tearing into them with his claws.",
    heroIntro: "INFESTS OTHER UNITS FOR MOBILITY AND STRENGTH",
    abilities: [
      {
        name: "Feast ",
        description:
          "Lifestealer's attacks deal damage and provide heal for a percentage of his target's max health. Allows Lifestealer to attack allied creeps at 75% health. Lifestealer gains permanent max HP whenever he kills a creep or hero. ",
      },
      {
        name: "Open Wounds ",
        description:
          "Lifestealer rends an enemy unit, slowing the victim's movement speed and allowing all allies to regain health for a percentage of the damage they deal to that unit. All damage dealt will steal life, including damage from spells. The victim recovers movement speed over the duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/life_stealer_open_wounds.png",
      },
      {
        name: "Ghoul Frenzy ",
        description: "Passively grants Lifestealer Movement and Attack Speed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/life_stealer_ghoul_frenzy.png",
      },
      {
        name: "Infest ",
        description:
          "Lifestealer infests the body of a target unit, becoming undetectable, and healing for a portion of his max hitpoints every second while inside. He can then explode from the host body, dealing damage to nearby enemies. If the infested unit is an enemy creep or a neutral creep, he can take control of the unit's ability to move and attack. Does not work on enemy heroes.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/life_stealer_infest.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/life_stealer.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/life_stealer.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/life_stealer.png",
    },
    heroName: "Lifestealer",
    state: "strength",
    complexity: 2,
  },
  lina: {
    shortDescription:
      "As deadly as she is fragile, Lina effortlessly strikes down any foe foolish enough to be caught alone. Gaining attack speed with each spell she casts, she scours enemies with flame and heat lightning, ensuring few can survive her assaults.",
    heroIntro: "INCREASES ATTACK AND SPEED WITH EVERY SPELL",
    abilities: [
      {
        name: "Combustion ",
        description:
          "Every 175 damage Lina does to an enemy hero causes them to overheat, doing damage to their nearby allies. This effect can trigger multiple times off a single instance of damage. Overheated illusions do less damage. ",
      },
      {
        name: "Dragon Slave ",
        description:
          "Lina channels the breath of a dragon, sending out a wave of fire that scorches every enemy in its path. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lina_dragon_slave.png",
      },
      {
        name: "Light Strike Array ",
        description:
          "Summons a column of flames that damages and stuns enemies. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lina_light_strike_array.png",
      },
      {
        name: "Fiery Soul ",
        description:
          "Grants bonus attack and movement speed each time Lina hits an enemy with a spell. Stacks with itself. Lasts 18 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lina_fiery_soul.png",
      },
      {
        name: "Laguna Blade ",
        description:
          "Fires off a bolt of lightning at a single enemy unit, dealing massive damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lina_laguna_blade.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lina.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lina.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lina.png",
    },
    heroName: "Lina",
    state: "intelligence",
    complexity: 1,
  },
  lion: {
    shortDescription:
      "Lion gives enemies little chance to retaliate. Stunning targets with a damaging row of spikes, or temporarily transforming them into a harmless critter, even if his powerful spells aren't enough, he and his allies should still have all the time they need to slay their foes.",
    heroIntro: "STEALS ENEMY MANA TO FUEL HIS OWN ABILITIES",
    abilities: [
      {
        name: "To Hell and Back ",
        description:
          "Lion gains 20% debuff duration and 20% spell amplification for 90s after respawning. ",
      },
      {
        name: "Earth Spike ",
        description:
          "Rock spikes burst from the earth along a straight path. Enemy units are hurled into the air, then are stunned and take damage when they fall. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lion_impale.png",
      },
      {
        name: "Hex ",
        description:
          "Transforms an enemy unit into a harmless beast, with all special abilities disabled. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lion_voodoo.png",
      },
      {
        name: "Mana Drain ",
        description:
          "CHANNELED - Channels magical energy, taking mana and slowing enemies over time. If the enemy has no mana remaining, the slow is increased by 15%.  Can target allies to give them mana and movement speed at a 50% rate. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lion_mana_drain.png",
      },
      {
        name: "Finger of Death ",
        description:
          "Rips at an enemy unit, trying to turn it inside-out. Deals massive damage and grows stronger with each life it consumes. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lion_finger_of_death.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lion.png",
    },
    heroName: "Lion",
    state: "intelligence",
    complexity: 1,
  },
  lonedruid: {
    shortDescription:
      "Battling alongside his powerful spirit bear, Lone Druid demolishes enemy forces and structures. Switching as needed between ranged and melee attacks with his transformation, should he have enough time to arm and strengthen both himself and his companion, there is little that can stop them.",
    heroIntro: "COMMANDS A POWERFUL SPIRIT BEAR IN BATTLE",
    abilities: [
      {
        name: "Gift Bearer ",
        description: "Lone Druid can re-roll his Neutral Token once per tier. ",
      },
      {
        name: "Summon Spirit Bear ",
        description:
          "Summons a powerful Spirit Bear companion that can equip items. Neutral Items are copied from, and share a cooldown with, Lone Druid's own Neutral Items.If the bear moves 1100 distance away from the Lone Druid, it cannot attack.  Lone Druid suffers 20% of his max health as backlash damage if the Spirit Bear dies.Spirit Bear has the Return, Demolish and Entangling Claws abilities. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lone_druid_spirit_bear.png",
      },
      {
        name: "Spirit Link ",
        description:
          "Links Lone Druid and the Spirit Bear, increasing their attack speed as well as sharing a percentage of their armor and lifesteal with each other. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lone_druid_spirit_link.png",
      },
      {
        name: "Savage Roar ",
        description:
          "Lone Druid and the Spirit Bear roar fiercely causing nearby enemies to flee towards their base in terror. Their movement speed is increased by 20%. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lone_druid_savage_roar.png",
      },
      {
        name: "True Form ",
        description:
          "Lone Druid starts a transformation into a raging bear that has enhanced attack and defensive capabilities. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lone_druid_true_form.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lone_druid.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lone_druid.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lone_druid.png",
    },
    heroName: "Lone Druid",
    state: "universal",
    complexity: 3,
  },
  luna: {
    shortDescription:
      "Riding swiftly into battle, Luna tears into her enemies with attacks able to bounce between targets. When foes threaten, she calls down the power of the moon as a single searing beam or as a lunar barrage, crushing those who stand against her.",
    heroIntro: "TEARS INTO HER ENEMIES WITH BOUNCING ATTACKS",
    abilities: [
      {
        name: "Lunar Blessing ",
        description:
          "Grants 1 attack damage per level to Luna and nearby allied heroes, with Luna receiving double the attack damage bonuses. At night, Lunar Blessing is global, and Luna is blessed with 400 bonus night vision + 20 per level. ",
      },
      {
        name: "Lucent Beam ",
        description:
          "Calls a beam of lunar energy down upon an enemy, damaging and briefly stunning them. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/luna_lucent_beam.png",
      },
      {
        name: "Lunar Orbit ",
        description:
          "Creates 4 glaives that rotate 250 radius around Luna. Any enemy unit that collides with a glaive will take a percentage of Luna's Attack Damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/luna_lunar_orbit.png",
      },
      {
        name: "Moon Glaives ",
        description:
          "Empowers Luna's glaives, causing her attacks to bounce between enemy units. Deals less damage with each bounce. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/luna_moon_glaive.png",
      },
      {
        name: "Eclipse ",
        description:
          "Showers random nearby enemies with strikes from Luna's current level of Lucent Beam. These beams do not stun their targets, and there is a maximum number of times that a single target can be struck. Also turns day into night for a short time. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/luna_eclipse.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/luna.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/luna.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/luna.png",
    },
    heroName: "Luna",
    state: "agility",
    complexity: 1,
  },
  lycan: {
    shortDescription:
      "As a man or as a wolf, Lycan devastates enemies with sharp claws and deadly jaws. Summoning stealthy wolves to scout ahead or assault a foe, his wolf transformation grants him the speed and strength to run down his enemies, or escape an ambush.",
    heroIntro: "SHAPESHIFTS INTO A FEROCIOUS BEAST",
    abilities: [
      {
        name: "Apex Predator ",
        description: "Deal 2% extra damage to neutral creeps per hero level. ",
      },
      {
        name: "Summon Wolves ",
        description:
          "Summons 2 wolves to aid Lycan in battle. At level 3, wolves gain Permanent Invisibility, and at level 4 wolves gain Cripple that gives 20% chance to cripple the target, causing 8 damage per second and lose 60 attack speed for 4 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lycan_summon_wolves.png",
      },
      {
        name: "Howl ",
        description:
          "Strikes fear into enemies, reducing armor and attack damage of all enemies within 2000 range of Lycan and his wolves. At night, Howl's armor and attack damage reductions are global. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lycan_howl.png",
      },
      {
        name: "Feral Impulse ",
        description:
          "Increases the HP regeneration and damage of Lycan and all units under his control. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lycan_feral_impulse.png",
      },
      {
        name: "Shapeshift ",
        description:
          "Lycan assumes his lupine form, granting him critical strikes and added vision at night. During Shapeshift, Lycan moves at increased speed and cannot be slowed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/lycan_shapeshift.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lycan.png",
    },
    heroName: "Lycan",
    state: "universal",
    complexity: 2,
  },
  magnus: {
    shortDescription:
      "Enemies who are foolish enough to gather learn to fear the horn of Magnus. Able to pull nearby foes together, he can batter them with empowered attacks or skewer them with his horn to bring them before his merciless allies.",
    heroIntro: "CHARGES IN TO REPOSITION HIS ENEMIES",
    abilities: [
      {
        name: "Solid Core ",
        description:
          "Magnus has slow resistance and suffers 50% less knockback from enemy's abilities and items. ",
      },
      {
        name: "Shockwave ",
        description:
          "Magnus sends out a wave of force, damaging enemy units in a line, pulling them towards him, and slowing them for a brief period. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/magnataur_shockwave.png",
      },
      {
        name: "Empower ",
        description:
          "Gives an allied unit bonus damage and cleave on attack. Magnus receives 50% larger bonus. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/magnataur_empower.png",
      },
      {
        name: "Skewer ",
        description:
          "Magnus rushes forward, goring enemy units on his massive tusk. Heroes hit on the way will be dragged to the destination, then damaged and affected by slowed movement and attack speed. Deals additional damage when skewering enemies into trees or cliffs. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/magnataur_skewer.png",
      },
      {
        name: "Reverse Polarity ",
        description:
          "Magnus changes properties of matter, pulling all nearby enemies in front of him and stunning them with a damaging slam. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/magnataur_reverse_polarity.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/magnataur.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/magnataur.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/magnataur.png",
    },
    heroName: "Magnus",
    state: "universal",
    complexity: 2,
  },
  marci: {
    shortDescription:
      "Proving that undying loyalty yields unrivaled power, Marci always marches into battle ready to raise fists in defense of her companions. Effortlessly flinging friends and foes around the battlefield, she happily bounds into any brawl, able to grant allies a deadly edge and unleash a hidden power strong enough to make even gods reconsider the wisdom of a hostile path.",
    heroIntro: "DASHES AROUND PUMMELING ENEMIES WITH RAPID ATTACKS",
    abilities: [
      {
        name: "Special Delivery ",
        description:
          "All allied couriers gain 3 bonus levels and 1 bonus health. ",
      },
      {
        name: "Dispose ",
        description:
          "Marci grabs an allied or enemy target and throws it effortlessly behind her, damaging and slowing the unit if it's an enemy. Any enemy units in the landing area will also be damaged and slowed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/marci_grapple.png",
      },
      {
        name: "Rebound ",
        description:
          "Marci bounds to the targeted allied unit, choosing a direction and distance she will spring away from it. Upon reaching the unit, Marci lunges to her final destination, damaging and stunning enemies where she lands. The ally receives 25% bonus movement speed for 4s. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/marci_companion_run.png",
      },
      {
        name: "Unleash ",
        description:
          "Marci taps a hidden power, gaining Fury charges that allow her to deliver a rapid sequence of strikes that slow movement and attack speed of the target for 2s. The last strike in every Fury combo creates a damaging pulse around the target. In between Fury combos, Marci is unable to attack for 1.5s.Marci gains 15% movement speed when Unleash is cast. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/marci_unleash.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/marci.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/marci.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/marci.png",
    },
    heroName: "Marci",
    state: "universal",
    complexity: 2,
  },
  mars: {
    shortDescription:
      "The warrior deity Mars thrives in the heart of strife, guarded by the bulk of a deadly shield as he skewers enemies with his legendary spear. He revels in facing opponents in an arena ringed with loyal spearmen—who guarantee that no one escapes and that whatever odds he's facing, the god of war can dictate the terms of battle knowing the crowd is forever on his side.",
    heroIntro: "TRAPS HIS FOES IN AN INESCAPABLE ARENA",
    abilities: [
      {
        name: "Dauntless ",
        description:
          "Mars and allied heroes within 2000 units get more HP Regen the more they are outnumbered by enemy heroes in that area. ",
      },
      {
        name: "Spear of Mars ",
        description:
          "Mars throws his legendary Spear with deadly precision, damaging each enemy unit it strikes. The first enemy hero it hits is skewered on the spear, pushing it back. If a skewered hero hits a tree, building, or cliff, they will be impaled to it and stunned. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/mars_spear.png",
      },
      {
        name: "God's Rebuke ",
        description:
          "Mars smashes enemies in front of him with his shield, knocking them back and damaging them with a critical hit based on his attack. Bonus damage is added when hitting heroes. Has True Strike. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/mars_gods_rebuke.png",
      },
      {
        name: "Bulwark ",
        description:
          "Mars wields his massive shield to block a portion of each physical attack when hit from the front or sides. Can be toggled, granting phased movement, removing Mars's ability to attack, and locking the direction he is facing. When active, reduces movement speed and re-directs 70% of the attack projectiles aimed at Mars's allies towards Mars instead. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/mars_bulwark.png",
      },
      {
        name: "Arena Of Blood ",
        description:
          "After a short formation time, Mars summons an arena lined with the undead warriors of the Ash Legion, who block enemy attacks and movement. Enemy heroes near the inside edge of the arena will be attacked by spears, dealing damage and knocking them back. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/mars_arena_of_blood.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mars.png",
    },
    heroName: "Mars",
    state: "strength",
    complexity: 1,
  },
  medusa: {
    shortDescription:
      "Constant attack is the key to Medusa's success. Using her mana shield to stave off assault, she employs split shots to mow down waves of enemies. Once she gathers her full strength, she becomes a force powerful enough to stop anyone in their tracks.",
    heroIntro: "IMMOBILIZES HER ENEMIES WITH HER STONE GAZE",
    abilities: [
      {
        name: "Mana Shield ",
        description:
          "Creates a shield that absorbs 98% of incoming damage in exchange for Medusa's mana that increases with each level of Medusa. Illusions absorb 60% less damage per point of mana. ",
      },
      {
        name: "Split Shot ",
        description:
          "Medusa magically splits her shot into several arrows. These arrows deal a lower percent of her normal damage.The extra targets will not receive other attack effects (such as critical strike). ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/medusa_split_shot.png",
      },
      {
        name: "Mystic Snake ",
        description:
          "A mystic snake made of energy jumps from target to target dealing damage. Damage and speed increases with each jump. After it reaches its last target, it returns to Medusa to replenish her with mana. The snake returns a percentage of the targets' total mana. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/medusa_mystic_snake.png",
      },
      {
        name: "Gorgon's Grasp ",
        description:
          "Medusa fires arrows in a line that land in 3 groups, with each grouping larger than the previous. Enemies struck by a volley of arrows take an initial burst of damage and then are rooted, cannot turn, are revealed to the enemy, and take damage per second. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/medusa_gorgon_grasp.png",
      },
      {
        name: "Stone Gaze ",
        description:
          "Any enemy units looking at Medusa will have their movement and attack speed slowed.  If 2 seconds of total time is accumulated looking at Medusa while Stone Gaze is active, that unit will turn to stone.  Petrified units are stunned, and take bonus physical attack damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/medusa_stone_gaze.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/medusa.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/medusa.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/medusa.png",
    },
    heroName: "Medusa",
    state: "agility",
    complexity: 1,
  },
  meepo: {
    shortDescription:
      "By summoning up to five permanent copies of himself, Meepo can fight from every front at once. Spreading his clones throughout the battlefield, when an enemy is found, he binds his foe, gathers his selves with an explosive teleport, then buries what remains.",
    heroIntro: "FIVE ARE STRONGER THAN ONE",
    abilities: [
      {
        name: "Sticky Fingers ",
        description: "Has an extra choice of neutral item to select from. ",
      },
      {
        name: "Earthbind ",
        description:
          "Tosses a net at the target point, rooting down all enemy units in an area around it. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/meepo_earthbind.png",
      },
      {
        name: "Poof ",
        description:
          "Drawing mystical energies from the earth, a Meepo can teleport to another Meepo or itself after channeling for 1.5 seconds, damaging the enemy in both the departure and arrival locations. If the ability is in alt-cast state, all Meepos will also cast Poof to the target. When cast on the ground, all Meepos except the selected one will Poof to the closest location. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/meepo_poof.png",
      },
      {
        name: "Ransack ",
        description:
          "Steals health from the enemy with each strike and heals all other Meepos for that amount. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/meepo_ransack.png",
      },
      {
        name: "Divided We Stand ",
        description:
          "Meepo summons an imperfect, semi-autonomous duplicate of himself, which can gain gold and experience as he does and shares his experience, attributes and abilities. However, the clones cannot wield any items but the boots that Meepo himself wears.  If any of the clones die, they all die. Divided We Stand grants all Meepos bonus Magic Resistance. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/meepo_divided_we_stand.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/meepo.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/meepo.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/meepo.png",
    },
    heroName: "Meepo",
    state: "agility",
    complexity: 3,
  },
  mirana: {
    shortDescription:
      "As she takes aim from a distance with her deadly arrow, Mirana must always be ready to leap into battle. Able to shield her allies from the eyes of her enemies, she ensures that her team is always on the prowl.",
    heroIntro: "STUNS ENEMIES WITH PRECISE ARROWS FROM AFAR",
    abilities: [
      {
        name: "Selemene's Faithful ",
        description:
          "Healing Lotuses are 20% more effective on Mirana and her allies. ",
      },
      {
        name: "Starstorm ",
        description:
          "Calls down a wave of meteors to damage nearby enemy units. The closest enemy unit to Mirana in a 675 radius will be struck a second time for 80% of the damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/mirana_starfall.png",
      },
      {
        name: "Sacred Arrow ",
        description:
          "Fires a long-range arrow with deadly precision, which stuns and damages the first enemy unit it strikes. The stun duration ranges from 0.01 to 2.6 seconds, with bonus damage up to 150 added, based on the distance the arrow travels to its target. Instantly kills the first non-ancient creep it hits. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/mirana_arrow.png",
      },
      {
        name: "Leap ",
        description:
          "Mirana leaps forward into battle, empowering herself with a ferocious roar that grants bonus attack and movement speed. Speed bonus lasts 5 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/mirana_leap.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/mirana.png",
    },
    heroName: "Mirana",
    state: "universal",
    complexity: 2,
  },
  monkeyking: {
    shortDescription:
      "Always in search of a good fight, Monkey King travels atop the trees aiming to spring from leafy cover and surprise his enemies. Calling upon an army of monkey soldiers to overwhelm opponents, this agile trickster revels in the chaos of battle, ready to slam his legendary staff down on any hopes of escape.",
    heroIntro: "SPRINGS FROM THE COVER OF THE TREE TOPS",
    abilities: [
      {
        description: "This hero's innate ability is Mischief.",
      },
      {
        name: "Boundless Strike",
        description:
          "Monkey King enlarges his staff and slams it against the ground, stunning enemies in a line and damaging them with bonus damage and a critical hit based on his attack. Has True Strike. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/monkey_king_boundless_strike.png",
      },
      {
        name: "Tree Dance",
        description:
          "Monkey King jumps to a tree and perches atop it. While perched, he gains the Primal Spring ability-a channeled leap attack. If Monkey King's tree is destroyed, he falls and is stunned for 4 seconds. Taking damage while on the ground puts Tree Dance on cooldown.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/monkey_king_tree_dance.png",
      },
      {
        name: "Jingu Mastery",
        description:
          "Monkey King's attacks awaken the Jingu Bang's power. Upon the fourth hit on the same enemy hero, Monkey King earns 4 charged attacks that have bonus damage and lifesteal.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/monkey_king_jingu_mastery.png",
      },
      {
        name: "Mischief",
        description:
          "Changes Monkey King's shape to deceive opponents, using the environment nearby as inspiration for the disguise. Taking damage, attacking, or using any item or ability breaks Monkey King's disguise. Grants damage immunity for 0.2 seconds upon transforming.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/monkey_king_mischief.png",
      },
      {
        name: "Wukong's Command ",
        description:
          "Monkey King creates a circular formation of soldiers that spread out from his position. If Monkey King leaves the area his soldiers disperse. The soldiers have Monkey King's attack and only target heroes. Monkey King is granted bonus armor for the spell's duration.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/monkey_king_wukongs_command.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/monkey_king.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/monkey_king.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/monkey_king.png",
    },
    heroName: "Monkey King",
    state: "agility",
    complexity: 2,
  },
  morphling: {
    shortDescription:
      "Shifting his attributes to suit his situation, Morphling can be as elusive as he is deadly. Whether riding a wave to flank an enemy, or boosting his health before escaping into his deceptive replication, few can hope to corner him.",
    heroIntro: "RIDES THE WAVES TO FLANK ENEMIES",
    abilities: [
      {
        name: "Accumulation ",
        description:
          "Morphling receives 50% of stat growth bonuses every half level instead of the full bonus at level up. Morphling receives +100% bonus stats from All Attributes bonus from skill points in the Talent Tree. ",
      },
      {
        name: "Waveform ",
        description:
          "Morphling dissolves into liquid and surges forward, damaging enemy units in his path.  Morphling is invulnerable during Waveform and attacks all enemies it goes through with a penalty. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_waveform.png",
      },
      {
        name: "Adaptive Strike (Agility) ",
        description:
          "Launches a surge of water toward an enemy unit, dealing base damage plus additional damage based on Morphling's agility times a multiplier.  If Morphling's agility is 50% higher than strength, the maximum agility multiplier is used.  Also puts Adaptive Strike (Strength) on a 3 second cooldown. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_adaptive_strike_agi.png",
      },
      {
        name: "Adaptive Strike (Strength) ",
        description:
          "Launches a surge of water toward an enemy unit, stunning the target based on Morphling's strength. If his strength is 50% higher than his agility, the maximum stun is dealt.  Also puts Adaptive Strike (Agility) on a 3 second cooldown. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_adaptive_strike_str.png",
      },
      {
        name: "Attribute Shift (Agility Gain) ",
        description:
          "Morphling shifts its form, pulling points from Strength and pouring them into Agility. The process is reversible.  Additional points in Attribute Shift increase the rate of stat change. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_morph_agi.png",
      },
      {
        name: "Attribute Shift (Strength Gain) ",
        description:
          "Morphling shifts its form, pulling points from Agility and pouring them into Strength. The process is reversible.  Additional points in Attribute Shift increase the rate of stat change. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_morph_str.png",
      },
      {
        name: "Morph ",
        description:
          "Morphling changes his form to match the targeted enemy, gaining their basic abilities. Can be toggled for the duration of the ability. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_replicate.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/morphling.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/morphling.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/morphling.png",
    },
    heroName: "Morphling",
    state: "agility",
    complexity: 3,
  },
  muerta: {
    shortDescription:
      "Muerta is a master of death who stalks the lands of life, corralling targets with fearsome trickshots and summoning revenants to smother her foes. Always ready to pick off unwary targets with her spare gunhand, Muerta is at her most menacing when she crosses the veil of the dead to strike her enemies with the ethereal fury of the damned.",
    heroIntro: "BLASTS FEARSOME TRICKSHOTS AND UNLEASHES ETHEREAL RUIN",
    abilities: [
      {
        name: "Supernatural ",
        description:
          "Muerta can always attack when she is ethereal. Muerta can always attack ethereal targets. When attacking ethereal targets, all of her attack damage is dealt as magical damage. ",
      },
      {
        name: "Dead Shot ",
        description:
          "Muerta fires a ghostly trickshot at an enemy unit or tree. When the bullet strikes, it damages and briefly slows, then ricochets in the targeted direction.The ricochet damages all units that it passes through, stopping when it hits a hero. Heroes hit by the ricochet are feared away from the impact. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/muerta_dead_shot.png",
      },
      {
        name: "The Calling ",
        description:
          "Summons a group of 4 revenants that slowly circle the targeted location. Enemies within the area are slowed and have reduced attack speed. Revenants deal damage and silence enemies as they pass through them. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/muerta_the_calling.png",
      },
      {
        name: "Gunslinger ",
        description:
          "Toggleable. When toggled on, Muerta's attacks have a chance to fire a second shot at another target. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/muerta_gunslinger.png",
      },
      {
        name: "Pierce the Veil ",
        description:
          "Muerta transforms, becoming immune to physical damage. All of her attack damage is dealt as magical damage and Muerta gains bonus attack damage and phased movement.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/muerta_pierce_the_veil.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/muerta.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/muerta.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/muerta.png",
    },
    heroName: "Muerta",
    state: "intelligence",
    complexity: 1,
  },
  nagasiren: {
    shortDescription:
      "Sending squads of mirrored clones against her foes, Naga Siren ensnares and slays enemies as she leads her forces to victory. With the sound of her voice, she disables nearby foes to spring an ambush or crafting a hasty escape.",
    heroIntro: "ABLE TO CAPITIVATE AND DISABLE ENEMIES WITH HER SONG",
    abilities: [
      {
        name: "Eelskin ",
        description:
          "Naga Siren gets 6% evasion per other Naga Siren within 900 radius. ",
      },
      {
        name: "Mirror Image ",
        description:
          "Creates multiple images of Naga Siren under her control.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/naga_siren_mirror_image.png",
      },
      {
        name: "Ensnare ",
        description:
          "Interrupts the target and traps them in place, preventing movement or blinking. Can target invulnerable and sleeping units. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/naga_siren_ensnare.png",
      },
      {
        name: "Song of the Siren ",
        description:
          "All enemies in range of the Naga Siren are put into a magical stasis where they cannot act or be attacked. Allies in range recover a percentage of their health per second. Using Song of the Siren again will end the duration early. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/naga_siren_song_of_the_siren.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/naga_siren.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/naga_siren.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/naga_siren.png",
    },
    heroName: "Naga Siren",
    state: "agility",
    complexity: 2,
  },
  "nature'sprophet": {
    shortDescription:
      "Whether in the thick of battle or gathering resources for his next assault, Nature's Prophet seems to be everywhere. Teleporting at will to any location and instantly creating an army of violent trees to fight for him, he attacks where enemies least expect.",
    heroIntro: "ABLE TO TELEPORT TO ANY LOCATION ON THE MAP AT WILL",
    abilities: [
      {
        name: "Spirit of the Forest ",
        description:
          "Nature's Prophet gains 2% bonus damage for each tree within 300 and a multiplier of that same bonus for each treant within 1200 distance of him. ",
      },
      {
        name: "Sprout ",
        description:
          "Sprouts a ring of trees around a unit, damaging and trapping it in place and providing vision in a 250 radius. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/furion_sprout.png",
      },
      {
        name: "Teleportation ",
        description:
          "Teleports to any point on the map. Gains a barrier after arriving to its destination. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/furion_teleportation.png",
      },
      {
        name: "Nature's Call ",
        description:
          "Converts an area of trees into Treants under the command of Nature's Prophet. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/furion_force_of_nature.png",
      },
      {
        name: "Wrath of Nature ",
        description:
          "Damaging energy bounces around the map, striking enemies that are in vision starting with those closest to the cast point. Each enemy hit beyond the first adds damage, up to the maximum after 16 are hit. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/furion_wrath_of_nature.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/furion.png",
    },
    heroName: "Nature's Prophet",
    state: "intelligence",
    complexity: 2,
  },
  necrophos: {
    shortDescription:
      "Wherever Necrophos goes, enemies wither as allies thrive. Restoring health to his friends and harming enemies with each death pulse, once his very presence has eaten away at an enemy, he summons the reaper to lengthen their stay in the afterlife.",
    heroIntro: "DAMAGES ENEMIES AND HEALS ALLIES SIMULTANEOUSLY",
    abilities: [
      {
        name: "Sadist ",
        description:
          "Necrophos gains stacking regen for 8 seconds for each unit he kills. Hero kills multiply the effect. ",
      },
      {
        name: "Death Pulse ",
        description:
          "Necrophos releases a wave of death around him, dealing damage to enemy units and healing allied units. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/necrolyte_death_pulse.png",
      },
      {
        name: "Ghost Shroud ",
        description:
          "Necrophos slips into the realm that separates the living from the dead. Unable to attack or be attacked, he emits an aura that slows enemies around him. He takes additional magic damage in this form, but his restorative powers are amplified. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/necrolyte_ghost_shroud.png",
      },
      {
        name: "Heartstopper Aura ",
        description:
          "Necrophos stills the hearts of his opponents, causing nearby enemy units to lose a percentage of their max health over time. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/necrolyte_heartstopper_aura.png",
      },
      {
        name: "Reaper's Scythe ",
        description:
          "Stuns the target enemy hero, then deals damage based on how much life it is missing. If Necrophos kills an enemy this way, he'll permanently gain Health and Mana Regen. Any kill under this effect is credited to Necrophos. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/necrolyte_reapers_scythe.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/necrolyte.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/necrolyte.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/necrolyte.png",
    },
    heroName: "Necrophos",
    state: "intelligence",
    complexity: 1,
  },
  nightstalker: {
    shortDescription:
      "Once the sun goes down, Night Stalker's hunt begins. Charging through the shadowy forests, he snares prey in a slowing void as he tears them to shreds. Should sunrise threaten to end his terror, he can darken the skies to extend his onslaught.",
    heroIntro: "ENPOWERED BY THE SHADOWS OF NIGHTFALL",
    abilities: [
      {
        name: "Heart of Darkness ",
        description:
          "During the night, Night Stalker's health regeneration is increased by 40%, and during the day it is decreased by 20%. ",
      },
      {
        name: "Void ",
        description:
          "Creates a damaging void that slows an enemy unit, reduces its vision and deals damage. At night, Void also mini-stuns, interrupting channeling abilities, and its effects lasts longer. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/night_stalker_void.png",
      },
      {
        name: "Crippling Fear ",
        description:
          "Night Stalker horrifies all nearby enemies, causing them to become silenced and take damage over time while near him.  The effect lasts longer at night. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/night_stalker_crippling_fear.png",
      },
      {
        name: "Hunter in the Night ",
        description:
          "Night Stalker is in his element at night, attacking and moving with great swiftness. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/night_stalker_hunter_in_the_night.png",
      },
      {
        name: "Dark Ascension ",
        description:
          "Night Stalker smothers the sun and summons instant darkness, so that he might use his powers at their fullest. Night Stalker gains flight and bonus damage during this time. Has unobstructed vision. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/night_stalker_darkness.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/night_stalker.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/night_stalker.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/night_stalker.png",
    },
    heroName: "Night Stalker",
    state: "strength",
    complexity: 1,
  },
  nyxassassin: {
    shortDescription:
      "Nyx Assassin is always hunting for fragile targets. Sneaking invisibly through the forest, when he spots his prey, he swipes them with his deadly claws and impales them on stunning spikes, then reverses any counterattack with his reflecting carapace.",
    heroIntro: "REFLECTS ENEMY DAMAGE AND STUNS",
    abilities: [
      {
        name: "Nyxth Sense ",
        description:
          "Nyx Assassin can detect heroes within 350 units of himself. ",
      },
      {
        name: "Impale ",
        description:
          "Rock spikes burst from the earth along a straight path. Enemy units take damage, then are hurled into the air and stunned. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_impale.png",
      },
      {
        name: "Mind Flare ",
        description:
          "Deals damages to the enemy equal to a percentage of its Max Mana. Additionally deals damage equal to a percentage of damage the target received from Nyx Assassin in the past 15s. Instantly kills non-ancient creeps. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_jolt.png",
      },
      {
        name: "Spiked Carapace ",
        description:
          "When activated while above ground, Spiked Carapace reflects and negates damage dealt to Nyx Assassin (max once from each source), as well as stunning the source of the damage. Activating Spiked Carapace will not break Vendetta invisibility.While Burrowed, Spiked Carapace instantly stuns nearby enemies when cast. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_spiked_carapace.png",
      },
      {
        name: "Vendetta ",
        description:
          "Allows Nyx Assassin to become invisible and gain a speed bonus.  If Nyx Assassin attacks to break the invisibility, massive bonus damage is dealt with the attack. Nyx Assassin has 75 additional attack range and a 70% faster attack animation for this attack. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_vendetta.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nyx_assassin.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nyx_assassin.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nyx_assassin.png",
    },
    heroName: "Nyx Assassin",
    state: "universal",
    complexity: 2,
  },
  ogremagi: {
    shortDescription:
      "With a chance to multiply the outcome of each spell they cast, a bit of luck is all Ogre Magi needs to burn enemies to cinder, or boost the power of his allies. Of course, luck can be difficult to rely upon...",
    heroIntro: "USES A TOUCH OF LUCK TO AMPLIFY HIS SKILLS",
    abilities: [
      {
        name: "Dumb Luck ",
        description:
          "Ogre Magi's max Intelligence is 0. He receives mana and mana regeneration from Strength. ",
      },
      {
        name: "Fireblast ",
        description:
          "Blasts an enemy unit with a wave of fire, dealing damage and stunning the target. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ogre_magi_fireblast.png",
      },
      {
        name: "Ignite ",
        description:
          "Drenches the target and another random unit in volatile chemicals, causing it to burst into flames. The target is in immense pain, taking damage and moving more slowly. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ogre_magi_ignite.png",
      },
      {
        name: "Bloodlust ",
        description:
          "Incites a frenzy in a friendly unit, increasing its movement speed and attack speed. Gives bonus attacks speed if cast on Ogre himself. Can be cast on towers. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ogre_magi_bloodlust.png",
      },
      {
        name: "Multicast ",
        description:
          "Enables Ogre Magi to cast his abilities and items multiple times with each use. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ogre_magi_multicast.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ogre_magi.png",
    },
    heroName: "Ogre Magi",
    state: "strength",
    complexity: 1,
  },
  omniknight: {
    shortDescription:
      "A guardian at the front lines of battle, Omniknight is always eager to join his team in battle. Whether healing an ally with a spell that also harms nearby foes, or battering an enemy with his mighty hammer, he protects his allies from harm.",
    heroIntro: "TANKY FRONTLINER WHO PROTECTS AND HEALS HIS ALLIES",
    abilities: [
      {
        name: "Degen Aura ",
        description:
          "Degenerates the movement capabilities of enemy units that stray too near. ",
      },
      {
        name: "Purification ",
        description:
          "Instantly heals a friendly unit and damages all nearby enemy units. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_purification.png",
      },
      {
        name: "Repel ",
        description:
          "Grants Debuff Immunity with 60% magic resistance to the target, as well as bonus Strength and HP Regen based on the amount of Debuffs on them. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_martyr.png",
      },
      {
        name: "Hammer of Purity ",
        description:
          "Omniknight imbues his hammer with holy power, causing his attack to deal pure damage based on a percentage of his base damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_hammer_of_purity.png",
      },
      {
        name: "Guardian Angel ",
        description:
          "Omniknight calls upon a Guardian Angel that grants immunity from physical damage to allied units in an area. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_guardian_angel.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/omniknight.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/omniknight.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/omniknight.png",
    },
    heroName: "Omniknight",
    state: "strength",
    complexity: 1,
  },
  oracle: {
    shortDescription:
      "By carefully combining his intricate abilities, Oracle controls the destinies of both friend and foe. Shrouding threatened allies with his false promise, he can grant an ally a few precious moments of protection to destroy an enemy, or even reverse a grisly fate.",
    heroIntro: "ALTERS THE FATES OF HEROES WITH HIS BUFFS AND NUKES",
    abilities: [
      {
        name: "Prognosticate ",
        description:
          "Oracle will predict and announce to allies, where the next power rune will spawn (top or bottom). ",
      },
      {
        name: "Fortune's End ",
        description:
          "CHANNELED - Gathers Oracle's power into a bolt of scouring energy that, when released, damages, roots, and dispels enemies of buffs in an area around the target. If target is an ally it will only dispel debuffs. The root duration is equal to the time spent channeling.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/oracle_fortunes_end.png",
      },
      {
        name: "Fate's Edict ",
        description:
          "Oracle enraptures a target, disarming them if they are an enemy and granting them 100% magic damage resistance if they are an ally. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/oracle_fates_edict.png",
      },
      {
        name: "Purifying Flames ",
        description:
          "Burns away impurities, dealing heavy magic damage to the target before causing them to regenerate health over time. The amount of health regenerated over its duration exceeds the amount of initial damage. Can be cast on enemies and allies. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/oracle_purifying_flames.png",
      },
      {
        name: "False Promise ",
        description:
          "Temporarily alters an ally's destiny, delaying any healing or damage taken until False Promise ends. Any healing that is delayed by False Promise is amplified. Removes most negative status effects and disables on initial cast.DISPEL TYPE: Strong Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/oracle_false_promise.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/oracle.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/oracle.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/oracle.png",
    },
    heroName: "Oracle",
    state: "intelligence",
    complexity: 3,
  },
  outworlddestroyer: {
    shortDescription:
      "Stealing from the minds of those he imprisons, Outworld Destroyer turns raw intelligence into destructive power. Weakening enemies with a barrage of arcane energy, he shatters their sanity with his ultimate blast, often erasing mana from those that survive.",
    heroIntro: "CAN IMPRISON A HERO, MAKING THEM INVULNERABLE",
    abilities: [
      {
        name: "Ominous Discernment ",
        description:
          "Outworld Destroyer gains an additional 2 mana per point of Intelligence. ",
      },
      {
        name: "Arcane Orb ",
        description:
          "Adds extra pure damage to Outworld Destroyer's attacks, based on his remaining mana pool. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/obsidian_destroyer_arcane_orb.png",
      },
      {
        name: "Astral Imprisonment ",
        description:
          "Places a target unit into an astral prison. The hidden unit is invulnerable and disabled. When the astral prison implodes, it deals damage to the target and steals a percentage of their max mana. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/obsidian_destroyer_astral_imprisonment.png",
      },
      {
        name: "Essence Flux ",
        description:
          "Passively grants a chance to restore a percentage of your max mana each time you cast an ability. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/obsidian_destroyer_equilibrium.png",
      },
      {
        name: "Sanity's Eclipse ",
        description:
          "Unleashes a psychic blast that deals damage to enemies based on the difference between your mana and the target's mana. Sanity's Eclipse can hit units trapped by Astral Imprisonment. Deals bonus damage to illusions. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/obsidian_destroyer_sanity_eclipse.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/obsidian_destroyer.png",
    },
    heroName: "Outworld Destroyer",
    state: "intelligence",
    complexity: 2,
  },
  pangolier: {
    shortDescription:
      "Eager to dash into danger at a moment's notice, the Pangolier thrives on disrupting enemy movements and placing himself in the midst of chaos. Artfully guiding his blade between cracks in armor and shrugging off attacks with his protective scales, this graceful swordsman is always ready to roll into battle.",
    heroIntro: "DASHES AND ROLLS IN TO DISRUPT ENEMY MOVEMENTS",
    abilities: [
      {
        name: "Fortune Favors the Bold ",
        description:
          "Random item and ability effects of enemies near Pangolier have a reduced chance to affect him. ",
      },
      {
        name: "Swashbuckle ",
        description:
          "Pangolier dashes along the target line, then slashes all enemies in the drawn direction with several quick swipes.Lucky Shot has a chance to activate from this damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pangolier_swashbuckle.png",
      },
      {
        name: "Shield Crash ",
        description:
          "Pangolier jumps in the air and slams back to the ground in front of his current position, damaging and slowing all enemies in a radius. For each enemy hero hit, he gains an all damage shield for a short time.Forward movement is maintained if Shield Crash is used while Rolling Thunder is active, and allows Rolling Thunder to clear walls or cliffs. Shield Crash cooldown during Rolling Thunder is decreased. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pangolier_shield_crash.png",
      },
      {
        name: "Lucky Shot ",
        description:
          "Pangolier rolls the dice and lets fate decide the outcome for his enemies. Grants a chance to drastically slow their attack speed and reduce armor on any damage dealt by Pangolier's attacks or abilities. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pangolier_lucky_shot.png",
      },
      {
        name: "Rolling Thunder ",
        description:
          "Pangolier curls into a debuff immune ball with 60% additional magic resistance and rolls out. When rolling, he moves at an increased speed and can move through trees, but has a decreased ability to turn. Striking enemies knocks them back, inflicting damage proportional to his attack damage and stunning them when they land. Colliding with walls or cliffs will cause a temporary pause while Pangolier reverses in direction. During Rolling Thunder, Shield Crash cooldown is reduced.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pangolier_gyroshell.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.png",
    },
    heroName: "Pangolier",
    state: "universal",
    complexity: 2,
  },
  phantomassassin: {
    shortDescription:
      "The moment she finds her prey, Phantom Assassin strikes. Instantly closing in on a target, she effortlessly dodges attacks as she relentlessly cuts away at her foe. Without warning, any one of her attacks could prove suddenly and brutally fatal.",
    heroIntro: "BLINKS ONTO HER FOES WITH CRITICAL STRIKES",
    abilities: [
      {
        name: "Immaterial ",
        description:
          "Phantom Assassin focuses inward, increasing her ability to evade enemy attacks. Evasion improves with Phantom Assassin's levels. Stacks diminishingly with other sources of Evasion. ",
      },
      {
        name: "Stifling Dagger ",
        description:
          "Throws a dagger slowing the enemy unit's movement speed, dealing 65+30% of Phantom Assassin's attack damage as physical damage and applying attack effects from items and abilities. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_stifling_dagger.png",
      },
      {
        name: "Phantom Strike ",
        description:
          "Teleports to a unit, friendly or enemy, and grants bonus attack speed while attacking if it's an enemy unit. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_phantom_strike.png",
      },
      {
        name: "Blur ",
        description:
          "Phantom Assassin blurs her body, disjointing incoming projectiles, increasing her movement speed, causing her to be impossible to see until she attacks or comes near enemy heroes, towers, or outposts. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_blur.png",
      },
      {
        name: "Coup de Grace ",
        description:
          "Phantom Assassin refines her combat abilities, acquiring a chance of gaining Deadly Focus with each attack. When attacking with Deadly Focus, Phantom Assassin will consume the buff and guarantee a critical hit. Stifling Dagger has a bonus chance to cause Deadly Focus. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_coup_de_grace.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_assassin.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_assassin.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_assassin.png",
    },
    heroName: "Phantom Assassin",
    state: "agility",
    complexity: 1,
  },
  phantomlancer: {
    shortDescription:
      "Phantom Lancer storms enemy forces with an endless supply of clones. Leading his illusory army, he can cut foes apart in a breathtaking flurry of attacks, send clones to push into enemy territory, or use his doppelgangers to mislead and elude foes if cornered.",
    heroIntro: "CREATES ILLUSIONS OF HIMSELF TO TRICK OR ATTACK FOES",
    abilities: [
      {
        name: "Illusory Armaments ",
        description:
          "Items, abilities, and auras that grant bonus damage instead grant base damage. ",
      },
      {
        name: "Spirit Lance ",
        description:
          "Sends a magical spirit lance to a target enemy unit that damages and slows, while summoning an illusory phantom to attack the unit. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_lancer_spirit_lance.png",
      },
      {
        name: "Doppelganger ",
        description:
          "Phantom Lancer briefly vanishes from the battlefield. After 1 second, Phantom Lancer and any of his nearby illusions reappear at a random position within the targeted location, along with two additional doppelgangers. Extends duration of all illusions. The two added doppelgangers have different properties: one takes normal damage and deals none, while the other takes 500% bonus damage and deals -80% less damage.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_lancer_doppelwalk.png",
      },
      {
        name: "Phantom Rush ",
        description:
          "When targeting an enemy for an attack, Phantom Lancer quickly charges into range, gaining a temporary agility boost. Phantom Lancer's illusions also have this ability. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_lancer_phantom_edge.png",
      },
      {
        name: "Juxtapose ",
        description:
          "Phantom Lancer has a chance to fracture his presence on an attack, creating an illusion of himself. Illusions also have a chance to fracture further. Illusions created from Phantom Lancer last for 8 seconds, while illusions created from other illusions last 4 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_lancer_juxtapose.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phantom_lancer.png",
    },
    heroName: "Phantom Lancer",
    state: "agility",
    complexity: 2,
  },
  phoenix: {
    shortDescription:
      "Diving into battle, Phoenix blasts enemies and heals allies with rays of solar flame. When the time is right, it can become a burning sun to scorch nearby foes before unleashing a stunning detonation that also restores Phoenix to full strength.",
    heroIntro: "HEALS AND DAMAGES AT THE SACRIFICE OF ITS OWN HEALTH",
    abilities: [
      {
        name: "Blinding Sun ",
        description:
          "Phoenix ability debuffs apply a stackable 2% Miss chance per second. Lasts 4 seconds. ",
      },
      {
        name: "Icarus Dive ",
        description:
          "Phoenix dives forward in an arc with a fixed distance in the targeted direction, dealing damage over time and slowing the movement speed of any units it comes into contact with, and then orbiting back to its original position. If Phoenix casts Supernova, the dive ends. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phoenix_icarus_dive.png",
      },
      {
        name: "Fire Spirits ",
        description:
          "Summons 4 fire spirits that circle around Phoenix. Each spirit can be launched independently at a targeted area of effect. Affected enemy units take damage over time and have their attack speed greatly reduced. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phoenix_fire_spirits.png",
      },
      {
        name: "Sun Ray ",
        description:
          "Phoenix expels a beam of light at the cost of its own health. The beam damages enemies and heals allies for a base amount plus a percentage of their health. The percentage increases as the beam continues to fire. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phoenix_sun_ray.png",
      },
      {
        name: "Supernova ",
        description:
          "The Phoenix willingly ends its current life for the chance to be reborn. Transforms into a burning sun that scorches enemies in a huge area. The sun can be destroyed by attacks from enemy Heroes. After 6 seconds the sun explodes, stunning all nearby enemies while restoring Phoenix to full health and mana with refreshed abilities.DISPEL TYPE: Strong Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/phoenix_supernova.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.png",
    },
    heroName: "Phoenix",
    state: "universal",
    complexity: 2,
  },
  primalbeast: {
    shortDescription:
      "Rushing savagely through enemies and allies alike, Primal Beast pounds into battle as one born to raise a ruckus. An unavoidable threat amidst any fray, the Beast can punish attackers and relishes grabbing prey to repeatedly slam them against the ground until nothing but mush remains.",
    heroIntro: "STOMPS OVER EVERYTHING AND SMASHES ENEMIES INTO MESSY BITS",
    abilities: [
      {
        name: "Colossal ",
        description: "Primal Beast deals 40% more damage to buildings. ",
      },
      {
        name: "Onslaught ",
        description:
          "Primal Beast charges up and then runs in the chosen direction, knocking back enemies and allies alike. Enemy units are damaged and stunned on impact. The longer the charge duration, the farther Primal Beast's momentum will carry him.  Can be cancelled at any time with the Stop command. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/primal_beast_onslaught.png",
      },
      {
        name: "Trample ",
        description:
          "Primal Beast stomps over everything. For every 140 units traveled, all enemies around the Beast receive damage. Deals base damage plus a multiplier of Primal Beast's attack damage. Primal Beast is disarmed for the duration of the ability. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/primal_beast_trample.png",
      },
      {
        name: "Uproar ",
        description:
          "The Beast's temper passively provides bonus damage. Additionally, for every instance of 50 damage or more Primal Beast takes from enemy heroes, he accumulates stacks of Uproar.  When activated, Primal Beast releases a roar that slows surrounding enemies and grants the Beast additional attack damage and armor for 7 seconds based on his current stacks of Uproar. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/primal_beast_uproar.png",
      },
      {
        name: "Pulverize ",
        description:
          "CHANNELED - Primal Beast channels his rage, grabbing the target enemy and slamming them into the ground repeatedly, damaging and mini-stunning any enemies caught in the AoE. Each consecutive hit deals bonus damage. Lasts 2.3 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/primal_beast_pulverize.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/primal_beast.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/primal_beast.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/primal_beast.png",
    },
    heroName: "Primal Beast",
    state: "strength",
    complexity: 1,
  },
  puck: {
    shortDescription:
      "Puck has a talent for confounding its enemies with playfully elusive mischief. By teleporting to its damaging orb in order to hop short distances, it attacks foes with bursts of silencing dust. By the time its enemies can react, Puck has long since escaped.",
    heroIntro: "ORBS TO ENEMIES AND SILENCES THEM",
    abilities: [
      {
        name: "Puckish ",
        description:
          "Whenever Puck disjoints an attack, it restores 15 + 2% of its max mana and 15 + 2% of its max health. Dodging a targeted spell projectile restores 4x that amount. ",
      },
      {
        name: "Illusory Orb ",
        description:
          "Puck launches a magic orb that floats in a straight path, damaging enemy units along the way. At any point, Puck may teleport to the orb's location using Ethereal Jaunt. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/puck_illusory_orb.png",
      },
      {
        name: "Waning Rift ",
        description:
          "Puck teleports to the target location and releases a burst of faerie dust that deals damage and silences enemy units nearby. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/puck_waning_rift.png",
      },
      {
        name: "Phase Shift ",
        description:
          "CHANNELED - Puck briefly shifts into another dimension where it is immune from harm. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/puck_phase_shift.png",
      },
      {
        name: "Dream Coil ",
        description:
          "Creates a coil of volatile magic that latches onto enemy Heroes, damaging and leashing them.  If the enemy hero stretches the coil by moving too far away, it snaps, stunning and dealing additional damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/puck_dream_coil.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/puck.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/puck.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/puck.png",
    },
    heroName: "Puck",
    state: "intelligence",
    complexity: 2,
  },
  pudge: {
    shortDescription:
      "Each carefully aimed throw of Pudge's signature hook strikes fear into his foes. Pulling his enemies near to carve them with his cleavers, he gains additional health and damage with every kill, and soon becomes an unstoppable killer.",
    heroIntro: "HOOKS AND PULLS ENEMIES TOWARDS HIM",
    abilities: [
      {
        name: "Flesh Heap ",
        description:
          "Each time Pudge kills an enemy Hero, he permanently gains 1.1 bonus Strength. ",
      },
      {
        name: "Meat Hook ",
        description:
          "Launches a bloody hook toward a unit or location. The hook will snag the first unit it encounters, dragging the unit back to Pudge, killing it if it's a non-ancient creep and dealing damage if it is an enemy otherwise. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_meat_hook.png",
      },
      {
        name: "Rot ",
        description:
          "A toxic cloud that deals intense damage and slows movement--harming not only enemy units but Pudge himself. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_rot.png",
      },
      {
        name: "Meat Shield ",
        description:
          "Pudge covers himself with a layer of flesh that blocks damage of any type taken from any source. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_flesh_heap.png",
      },
      {
        name: "Dismember ",
        description:
          "CHANNELED - Pudge chows down on an enemy unit, disabling it and dealing damage over time. Damage is increased by Pudge's Strength and heals him for the total amount. Pudge pulls the unit at a rate of 75 units, up to a minimum of 125 range. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_dismember.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.png",
    },
    heroName: "Pudge",
    state: "strength",
    complexity: 2,
  },
  pugna: {
    shortDescription:
      "A crafty trickster, Pugna turns the enemy's power against itself as he blasts their defenses. While his nether ward strikes nearby foes that dare to cast a spell, he drains life from enemies to ensure he will be ready for the next assault.",
    heroIntro: "DRAINS ENEMY LIFE TO HEAL HIMSELF",
    abilities: [
      {
        name: "Oblivion Savant ",
        description: "Pugna can cast spells and use items while channeling. ",
      },
      {
        name: "Nether Blast ",
        description:
          "An exploding pulse deals damage to enemies and structures in the area.  Deals 65% damage to structures. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pugna_nether_blast.png",
      },
      {
        name: "Decrepify ",
        description:
          "A powerful banishing spell that slows a unit and renders it unable to attack or be attacked. Healing on affected allies is increased, while afflicted enemies take extra magic damage instead. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pugna_decrepify.png",
      },
      {
        name: "Nether Ward ",
        description:
          "Pugna places a Nether Ward at the target location. The ward will fire at any enemy hero who casts a spell dealing base damage plus the damage multiplier of the mana spent by the enemy hero. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pugna_nether_ward.png",
      },
      {
        name: "Life Drain ",
        description:
          "CHANNELED - When cast on an enemy, Pugna drains health from the target enemy unit to heal himself and granting vision over the target. If Pugna has full HP, and the enemy target is a Hero, Life Drain will restore mana instead.When cast on an ally, Pugna will drain his own health into his ally. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/pugna_life_drain.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pugna.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pugna.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pugna.png",
    },
    heroName: "Pugna",
    state: "intelligence",
    complexity: 2,
  },
  queenofpain: {
    shortDescription:
      "Queen of Pain strikes without warning, destroying gathered foes with deafening screams. Should an enemy survive her onslaught, she slows their escape with a throw of her dagger before finishing them off.",
    heroIntro: "BLINKS IN TO DEAL MASSIVE MAGICAL DAMAGE",
    abilities: [
      {
        name: "Bondage ",
        description:
          "Whenever an enemy within 1200 range deals spell damage to Queen of Pain, she returns 15% of the damage dealt. ",
      },
      {
        name: "Shadow Strike ",
        description:
          "Hurls a poisoned dagger which deals large initial damage, and then deals damage over time. The poisoned unit has its movement speed slowed for 16 seconds.  An instance of damage is dealt every 3 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/queenofpain_shadow_strike.png",
      },
      {
        name: "Blink ",
        description:
          "Short distance teleportation that allows Queen of Pain to move in and out of combat. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/queenofpain_blink.png",
      },
      {
        name: "Scream Of Pain ",
        description:
          "The Queen of Pain lets loose a piercing scream around her, damaging nearby enemies. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/queenofpain_scream_of_pain.png",
      },
      {
        name: "Sonic Wave ",
        description:
          "Creates a gigantic wave of sound in front of Queen of Pain, dealing heavy damage to all enemy units in its wake and pushing them back. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/queenofpain_sonic_wave.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/queenofpain.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/queenofpain.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/queenofpain.png",
    },
    heroName: "Queen of Pain",
    state: "intelligence",
    complexity: 2,
  },
  razor: {
    shortDescription:
      "With a deadly lightning storm at his command, Razor charges into battle. Deploying a sweeping ring of electrified plasma to fry his enemies, he links with foes to drain them of their power and use it against them.",
    heroIntro: "STEALS ENEMY DAMAGE TO ADD TO HIS OWN",
    abilities: [
      {
        name: "Unstable Current ",
        description:
          "Passively increases Razor's movement speed by 1% per hero level. ",
      },
      {
        name: "Plasma Field ",
        description:
          "Releases a wave of energetic plasma that grows in power as it expands, but also zaps on contraction, slowing and dealing damage to enemy units caught in its path. Damage and slow increases with distance from Razor. The Plasma Field hits each unit twice, once each direction. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/razor_plasma_field.png",
      },
      {
        name: "Static Link ",
        description:
          "Creates a charged link between Razor and an enemy Hero, stealing damage from the target and giving it to Razor. Allows Razor to attack while moving with the link active. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/razor_static_link.png",
      },
      {
        name: "Storm Surge ",
        description:
          "There's a chance when attacked, and always when targeted with a spell, to release a forked lightning that strikes the target and other nearby enemies, prioritizing the unit type of the attacker, dealing damage and slowing movement speed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/razor_storm_surge.png",
      },
      {
        name: "Eye of the Storm ",
        description:
          "A powerful lightning storm strikes out at the enemy unit with the lowest health, dealing damage and reducing armor. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/razor_eye_of_the_storm.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/razor.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/razor.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/razor.png",
    },
    heroName: "Razor",
    state: "agility",
    complexity: 1,
  },
  riki: {
    shortDescription:
      "Riki stalks the battlefield, unseen by the enemy. He chooses his moment carefully and bursts forth in a puff of silencing smoke, stabbing at his foes before they even know he's there.",
    heroIntro: "REMAINS PERMANENTLY INVISIBLE UNTIL THE MOMENT TO STRIKE",
    abilities: [
      {
        name: "Backstab ",
        description:
          "Every time Riki strikes his enemy from behind, he deals bonus damage based on his Agility. ",
      },
      {
        name: "Smoke Screen ",
        description:
          "Throws down a smoke bomb, silencing enemies. Enemies attacking from the smoke or attacking allies within the smoke have a chance to miss their attacks. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/riki_smoke_screen.png",
      },
      {
        name: "Blink Strike ",
        description:
          "Teleports behind the target unit, momentarily slowing them and striking for bonus damage if it is an enemy. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/riki_blink_strike.png",
      },
      {
        name: "Tricks of the Trade ",
        description:
          "CHANNELED - Riki phases out of the world while striking random enemy units from behind in an area around him. While phased out his attack damage is reduced, but his Agility greatly increases. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/riki_tricks_of_the_trade.png",
      },
      {
        name: "Cloak and Dagger ",
        description:
          "Riki fades into the shadows, becoming invisible. When Riki attacks, he becomes visible. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/riki_backstab.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/riki.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/riki.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/riki.png",
    },
    heroName: "Riki",
    state: "agility",
    complexity: 1,
  },
  ringmaster: {
    shortDescription:
      "All the battlefield's a stage, and Ringmaster is a gleeful director. Controlling fights with a showman's flair, Ringmaster tames enemies with his fearsome whip and endless knives, ushers allies away from danger with his cunning escape act, and always draws a crowd to unwillingly witness the wonders of his mesmerizing wheel.",
    heroIntro: "DIRECTS THE BATTLE WITH FEAR AND MESMERISM",
    abilities: [
      {
        name: "Dark Carnival Barker ",
        description:
          "Ringmaster receives a random single-use Dark Carnival Souvenir whenever an enemy hero dies within 925 units of him. Additional Souvenirs are held as charges.If Ringmaster does not have a Souvenir when he respawns he will be granted one.Souvenirs of the Dark Carnival include a Funhouse Mirror, a Strongman Tonic, and a Whoopee Cushion. ",
      },
      {
        name: "Tame the Beasts ",
        description:
          "CHANNELED - Ringmaster twirls his whip for up to 1 second then cracks it. Whipped enemies are damaged and flee in fear from Ringmaster. Channel time exponentially increases damage and extends the fear duration, but reduces the radius. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ringmaster_tame_the_beasts.png",
      },
      {
        name: "Escape Act ",
        description:
          "Ringmaster packs himself or an allied hero into a mobile, extradimensional box. Boxed units gain phased movement, slow resistance, bonus magic resistance, and bonus movement speed. They are also untargetable, muted, silenced, and disarmed. The box will pop open after the effect expires or it moves more than 500 units away. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ringmaster_the_box.png",
      },
      {
        name: "Impalement Arts ",
        description:
          "Ringmaster throws one of his daggers to a precise point of his choosing. If he strikes an enemy, the dagger deals impact damage, briefly slows the unit hit, and causes them to bleed. The bleeding deals a percentage of the victim's maximum health in damage every second to heroes and flat damage per second to creeps. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ringmaster_impalement.png",
      },
      {
        name: "Wheel of Wonder ",
        description:
          "Ringmaster rolls the Wheel of Wonder to the targeted location, knocking aside enemies along the way. After it reaches its target, enemies in range of the wheel take damage over time and are slowed by -50%.Enemy heroes who face the wheel for more than 0.5 seconds are mesmerized and drawn towards it. The first enemy to be mesmerized triggers a timer for the wheel to explode. If the timer is not triggered, it will automatically explode after 4 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ringmaster_wheel.png",
      },
      {
        name: "Funhouse Mirror ",
        description:
          "Use: Proportion DistortionCreates 1 imperfect image of your hero that lasts 18 seconds. Your illusion deals 28% and takes  300% damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ringmaster_funhouse_mirror.png",
      },
      {
        name: "Strongman Tonic ",
        description:
          "Use: Forcefully ImbibeTemporarily increases an allied hero's Strength by 5 plus 1 per Ringmaster's level for 8 seconds. The effect holds for 4 seconds and then deteriorates over the duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ringmaster_strongman_tonic.png",
      },
      {
        name: "Whoopee Cushion ",
        description:
          "Use: WhoopsiePropels your hero forward 400 units. Leaves a 200 radius stink cloud behind for 3 seconds that slows enemies by -30%. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ringmaster_whoopee_cushion.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ringmaster.mov?v5",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ringmaster.webm?v5",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ringmaster.png",
    },
    heroName: "Ringmaster",
    state: "intelligence",
    complexity: 2,
  },
  rubick: {
    shortDescription:
      "Always seeking a new spell to steal, Rubick is ever eager to turn an enemy's most unique advantage against them. Snatching his enemies into the air to fling them where he will, he has no trouble sowing chaos among careless foes.",
    heroIntro: "STEALS THE SPELLS OF HIS ENEMIES TO USE AGAINST THEM",
    abilities: [
      {
        name: "Might and Magus ",
        description:
          "Each 1% Spell Amplification also increases Rubick's attack damage by 0.75% and Magic Resistance by 0.75%. ",
      },
      {
        name: "Telekinesis ",
        description:
          "Rubick uses his telekinetic powers to lift the enemy into the air briefly and then hurls them back at the ground. The unit lands on the ground with such force that it stuns nearby enemies. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/rubick_telekinesis.png",
      },
      {
        name: "Fade Bolt ",
        description:
          "Rubick creates a powerful stream of arcane energy that travels between enemy units, dealing damage and reducing their attack damage. Each jump deals less damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/rubick_fade_bolt.png",
      },
      {
        name: "Arcane Supremacy ",
        description:
          "Rubick's mastery of the arcane allows him to have a larger cast range and increased potency. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/rubick_arcane_supremacy.png",
      },
      {
        name: "Spell Steal ",
        description:
          "Rubick studies the trace magical essence of one enemy hero, learning the secrets of the last spell the hero cast. Rubick can use this spell as his own for several minutes or until he dies, and stolen spells last longer on enemies. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/rubick_spell_steal.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/rubick.png",
    },
    heroName: "Rubick",
    state: "intelligence",
    complexity: 3,
  },
  sandking: {
    shortDescription:
      "Not many can survive an ambush from Sand King. Demolishing everything around him with waves of deadly vibration from his ultimate, he evades counterattacks by hiding himself in a scouring gust of sand, and stuns foes by striking them from beneath.",
    heroIntro: "BURROWS TO STUN AND SLOW ENEMIES",
    abilities: [
      {
        name: "Caustic Finale ",
        description:
          "Sand King's attacks inject a venom that causes enemy units to violently explode when they die. ",
      },
      {
        name: "Burrowstrike ",
        description:
          "Sand King burrows into the ground and tunnels forward, damaging and stunning enemy units above him as he resurfaces. Adds Caustic Finale poison to heroes hit Can be put on alt-cast to immediately cast in the desired direction, without walking towards the targeted location. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sandking_burrowstrike.png",
      },
      {
        name: "Sand Storm ",
        description:
          "Sand King creates a fearsome sandstorm that damages enemy units. The effect ends when Sand King leaves the area. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sandking_sand_storm.png",
      },
      {
        name: "Stinger ",
        description:
          "Sand King strikes an area, performing an attack on all enemies in the area of effect, dealing extra damage to each. Enemies within an innermost radius of 125 take 40% extra damage. Applies Caustic Finale and a slow to all enemies hit. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sandking_scorpion_strike.png",
      },
      {
        name: "Epicenter ",
        description:
          "After a cast point of 2 seconds, Sand King sends a disturbance into the earth, causing it to shudder violently. All enemies caught within range will take damage and become slowed. Each subsequent pulse increases the radius of damage dealt. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sandking_epicenter.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sand_king.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sand_king.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sand_king.png",
    },
    heroName: "Sand King",
    state: "universal",
    complexity: 2,
  },
  shadowdemon: {
    shortDescription:
      "Spewing clouds of demonic poison to damage enemies or scout the battlefield, few dare to approach Shadow Demon. Banishing an enemy as his allies gather for the kill, he can inflict demonic curses as he summons traitorous illusions to turn enemy strength against itself.",
    heroIntro: "STACKS EXPONENTIAL POISON DAMAGE AGAINST HIS FOES",
    abilities: [
      {
        name: "Menace ",
        description:
          "Shadow Demon's Attacks apply a stacking 2% Amplify Damage debuff to the enemy for 8 seconds. ",
      },
      {
        name: "Disruption ",
        description:
          "Banishes the targeted unit from the battlefield for a short duration.  Upon returning, two illusions of the banished unit with bonus base damage are created under Shadow Demon's control. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shadow_demon_disruption.png",
      },
      {
        name: "Disseminate ",
        description:
          "Whenever the target takes damage, all enemies, including the target itself if it is an enemy, within 675 range of the target also receive a portion of that damage. Can target enemy and allied units. Effect is paused if the target is hidden by Disruption. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shadow_demon_disseminate.png",
      },
      {
        name: "Shadow Poison ",
        description:
          "Deals damage in a line, and afflicts enemy units with a poison effect. The poison deals 1/2/4/8/16 times the stack damage based on the number of stacks on the target, up to 5 stacks. Additional stacks cause 50 damage each.  This deferred damage is dealt when Shadow Poison's duration is expired, or the Release sub-ability is used. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shadow_demon_shadow_poison.png",
      },
      {
        name: "Demonic Purge ",
        description:
          "Purges the target enemy unit, removing positive buffs, and slowing the target for the duration.  The unit slowly regains its speed until the end of the duration, upon which damage is dealt.  Units under the effect of Disruption can still be affected by Demonic Purge.DISPEL TYPE: Basic Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shadow_demon_demonic_purge.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_demon.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_demon.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_demon.png",
    },
    heroName: "Shadow Demon",
    state: "intelligence",
    complexity: 2,
  },
  shadowfiend: {
    shortDescription:
      "Capturing souls from every kill he makes, Shadow Fiend is always gathering his power. Every assault, each carefully aimed raze that kills an enemy, brings him closer to unleashing his gathered souls in a deadly blast of scouring energy.",
    heroIntro: "UNLEASHES THE SOULS OF FALLEN ENEMIES FOR DAMAGE",
    abilities: [
      {
        name: "Necromastery ",
        description:
          "Shadow Fiend steals the soul from units he kills, gaining bonus damage. On death, he releases 30% of them from bondage. ",
      },
      {
        name: "Shadowraze ",
        description:
          "Shadow Fiend razes the ground directly in front of him, dealing damage to enemy units in the area. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/nevermore_shadowraze1.png",
      },
      {
        name: "Feast of Souls ",
        description:
          "Shadow Fiend gains Bonus Attack Speed for 8 seconds. After the effect finishes, Shadow Fiend loses a fixed amount of souls. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/nevermore_frenzy.png",
      },
      {
        name: "Presence of the Dark Lord ",
        description:
          "Shadow Fiend's presence reduces the armor of nearby enemies. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/nevermore_dark_lord.png",
      },
      {
        name: "Requiem of Souls ",
        description:
          "Shadow Fiend gathers his captured souls to release them as lines of demonic energy. Units near Shadow Fiend when the souls are released can be damaged by several lines of energy. Any unit damaged by Requiem of Souls will be feared and have its movement speed and magic resistance reduced for 0.6 seconds for each line hit up to a maximum of 2.15. Lines of energy are created for every soul captured through Necromastery.  Requiem of Souls is automatically cast whenever Shadow Fiend dies, regardless of its cooldown. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/nevermore_requiem.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/nevermore.png",
    },
    heroName: "Shadow Fiend",
    state: "agility",
    complexity: 2,
  },
  shadowshaman: {
    shortDescription:
      "Shadow Shaman quickly clears the way for his team's forces to march on the enemy base. Blasting enemies with shocking spells and interrupting attackers with hexes, his powerful serpent wards destroy enemy defenses with ease.",
    heroIntro: "SUMMONS POWERFUL SERPENT WARDS TO DEAL DAMAGE",
    abilities: [
      {
        name: "Fowl Play ",
        description:
          "When taking lethal damage, Shadow Shaman receives a strong dispel and survives as a 1 HP chicken. Incoming damage is reduced to zero for 1s.Cooldown is reset upon respawning.DISPEL TYPE: Strong Dispel ",
      },
      {
        name: "Ether Shock ",
        description:
          "Creates a cone of ethereal energy that strikes multiple enemy units. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shadow_shaman_ether_shock.png",
      },
      {
        name: "Hex ",
        description:
          "Transforms an enemy unit into a harmless creature, disabling their attacks and abilities. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shadow_shaman_voodoo.png",
      },
      {
        name: "Shackles ",
        description:
          "CHANNELED - Magically binds an enemy unit so that it cannot move or attack, absorbing their life energy over time. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shadow_shaman_shackles.png",
      },
      {
        name: "Mass Serpent Ward ",
        description:
          "Summons 10 Serpent Wards to attack enemy units and structures. The Wards are immune to magic. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shadow_shaman_mass_serpent_ward.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_shaman.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_shaman.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shadow_shaman.png",
    },
    heroName: "Shadow Shaman",
    state: "intelligence",
    complexity: 1,
  },
  silencer: {
    shortDescription:
      "Silencer changes the dynamic of every battle when he shuts down the enemy's ability to cast their spells. As he cuts his foes to ribbons with his glaive, he steals their intelligence to add to his own, ensuring his foes are always at a disadvantage.",
    heroIntro: "CAN SILENCE ALL ENEMIES ON THE MAP",
    abilities: [
      {
        name: "Brain Drain ",
        description:
          "If Silencer kills an enemy hero, he permanently steals 1 Intelligence. ",
      },
      {
        name: "Arcane Curse ",
        description:
          "Curses the target area, causing enemy heroes to take damage over time and slowing their movement speed. If a target casts a spell, they are silenced for a short period. The duration is paused as long as the target is silenced. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/silencer_curse_of_the_silent.png",
      },
      {
        name: "Glaives of Wisdom ",
        description:
          "Silencer enchants his glaives with his wisdom, stealing his target's Intelligence with each hit and dealing additional damage based on his Intelligence. After 4 attacks on the same target, that enemy will be silenced for 2.5 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/silencer_glaives_of_wisdom.png",
      },
      {
        name: "Last Word ",
        description:
          "Enemies within 1200 range of Silencer are slowed and damaged every second for each Silence they have on them. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/silencer_last_word.png",
      },
      {
        name: "Global Silence ",
        description:
          "Silencer stops all sound, preventing enemy heroes and units on the map from casting spells. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/silencer_global_silence.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/silencer.png",
    },
    heroName: "Silencer",
    state: "intelligence",
    complexity: 2,
  },
  skywrathmage: {
    shortDescription:
      "Deadly and fragile in equal measure, Skywrath Mage quickly destroys his enemies with a barrage of powerful magic. He silences foes while increasing their vulnerability to spells, meaning he has no trouble vaporizing any who stand against him.",
    heroIntro: "CASTS HIGH DAMAGE MAGICAL SPELLS ON A SINGLE TARGET",
    abilities: [
      {
        name: "Ruin and Restoration ",
        description: "Skywrath Mage has 20% Spell Lifesteal. ",
      },
      {
        name: "Arcane Bolt ",
        description:
          "Skywrath Mage launches a slow-moving bolt of arcane magic, dealing damage to an enemy unit based on Skywrath Mage's intelligence. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/skywrath_mage_arcane_bolt.png",
      },
      {
        name: "Concussive Shot ",
        description:
          "Skywrath Mage sets off a long range shot that hits the closest hero within a long range.  Upon impact, it deals damage and slows in an area of effect. Deals 75% damage to creeps. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/skywrath_mage_concussive_shot.png",
      },
      {
        name: "Ancient Seal ",
        description:
          "Skywrath Mage seals the targeted unit with an ancient rune, silencing it and causing it to take additional damage from spells. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/skywrath_mage_ancient_seal.png",
      },
      {
        name: "Mystic Flare ",
        description:
          "Skywrath Mage uses his ultimate magical ability to conjure a precise and violent mystical field that lays waste to his adversaries. Deals massive damage distributed evenly among any Heroes in the area over 2 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/skywrath_mage_mystic_flare.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skywrath_mage.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skywrath_mage.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skywrath_mage.png",
    },
    heroName: "Skywrath Mage",
    state: "intelligence",
    complexity: 1,
  },
  slardar: {
    shortDescription:
      "Ready to find and demolish his foes, Slardar quickly slithers into battle. After exposing an enemy's position and shattering their defenses, he closes the distance to lock them in place with crushing blows and powerful bashes from his trident.",
    heroIntro: "CHASES DOWN HIS ENEMIES TO WEAKEN AND BASH THEM",
    abilities: [
      {
        name: "Seaborn Sentinel ",
        description:
          "Slardar gains bonus movement speed, health regeneration, attack damage, and armor while in a puddle or river. ",
      },
      {
        name: "Guardian Sprint ",
        description:
          "Slardar slithers ahead, moving significantly faster and passing through units. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/slardar_sprint.png",
      },
      {
        name: "Slithereen Crush ",
        description:
          "Slams the ground, leaving a puddle of water, and stunning and damaging nearby enemy units.  After the stun, the affected units are slowed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/slardar_slithereen_crush.png",
      },
      {
        name: "Bash of the Deep ",
        description:
          "After 3 attacks, your next attack will bash the target. Deals double damage against creeps. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/slardar_bash.png",
      },
      {
        name: "Corrosive Haze ",
        description:
          "Reduces enemy armor to amplify physical damage and provides True Sight and vision of the targeted unit, revealing invisibility. The enemy unit leaves a trail of water behind it for 8 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/slardar_amplify_damage.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slardar.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slardar.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slardar.png",
    },
    heroName: "Slardar",
    state: "strength",
    complexity: 1,
  },
  slark: {
    shortDescription:
      "Pouncing into danger then slipping back out is what Slark does best. He rushes at the chance to pin or corner a lone foe, steals their essence with each cut from his dagger, and is always ready to vanish should the tables turn.",
    heroIntro: "SLIPS IN AND OUT OF SKIRMISHES",
    abilities: [
      {
        name: "Barracuda ",
        description:
          "When not visible to the enemy team, Slark gains bonus movement speed and health regeneration. ",
      },
      {
        name: "Dark Pact ",
        description:
          "After a short delay, Slark sacrifices some of his life blood, purging most negative debuffs and dealing damage to enemy units around him and to himself.  Slark only takes 30% of the damage.DISPEL TYPE: Strong Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/slark_dark_pact.png",
      },
      {
        name: "Pounce ",
        description:
          "Slark leaps forward, leashing the first hero he connects.  That unit can only move a limited distance away from Slark's landing position. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/slark_pounce.png",
      },
      {
        name: "Essence Shift ",
        description:
          "Slark steals the life essence of enemy heroes with his attacks, draining each of their attributes and converting them to bonus Agility. If Slark kills an affected enemy hero, he permanently steals 1 Agility. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/slark_essence_shift.png",
      },
      {
        name: "Shadow Dance ",
        description:
          "When used, Slark hides himself in a cloud of shadows, becoming immune to detection. Attacking, casting spells, and using items will not reveal Slark. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/slark_shadow_dance.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/slark.png",
    },
    heroName: "Slark",
    state: "agility",
    complexity: 2,
  },
  snapfire: {
    shortDescription:
      "Just as happy to blow your legs off with her trusty scattergun as to fill your belly up with a deliciously-dangerous cookie, Beatrix Snapfire delights in riding into battle with her dragon toad Mortimer, always ready to mow down their enemies with her homemade heavy artillery or finish them off with a steady barrage of Mortimer's firespit globs.",
    heroIntro: "MOWS DOWN HER ENEMIES WITH HEAVY ARTILLERY AND TRUSTY LIZARD",
    abilities: [
      {
        name: "Buckshot ",
        description:
          "Snapfire deals 25% more damage with her auto attacks, but has a 25% chance of a glancing shot, dealing 60% damage. ",
      },
      {
        name: "Scatterblast ",
        description:
          "Snapfire unloads with a wide blast that damages and slows enemies in a cone. Damage, Movement Slow, Attack Slow and Slow Duration are increased by 50% for enemies caught at point-blank range. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/snapfire_scatterblast.png",
      },
      {
        name: "Firesnap Cookie ",
        description:
          "Snapfire feeds a potent cookie to Mortimer or an ally, causing them to hop a short distance. The hopping unit stuns and damages enemies in the landing zone. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/snapfire_firesnap_cookie.png",
      },
      {
        name: "Lil' Shredder ",
        description:
          "Snapfire heats up her mounted turret to rapidly fire 5 attacks dealing fixed damage plus a percentage of her attack damage. Each attack reduces the enemy's armor. Provides bonus attack range for the duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/snapfire_lil_shredder.png",
      },
      {
        name: "Mortimer Kisses ",
        description:
          "Snapfire's friend launches a barrage of firespit globs over 5.5 seconds. Globs cause impact damage and create pools of firespit, which slow and apply damage over time. Snapfire has a reduced turn rate for the duration and a minimum launch range of 600. Each glob can be targeted with a right click. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/snapfire_mortimer_kisses.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/snapfire.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/snapfire.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/snapfire.png",
    },
    heroName: "Snapfire",
    state: "universal",
    complexity: 1,
  },
  sniper: {
    shortDescription:
      "Death from a distance is Sniper's specialty. He keeps his enemies on their toes with a steady barrage of firepower, and then, when the time is right, picks them off with a kill shot.",
    heroIntro: "PICKS OFF HIS ENEMIES FROM AFAR",
    abilities: [
      {
        name: "Keen Scope ",
        description: "Increases Sniper's attack range. ",
      },
      {
        name: "Shrapnel ",
        description:
          "Consumes a charge to launch a ball of shrapnel that showers the target area in explosive pellets. Enemies are subject to damage and slowed movement. Reveals the targeted area. Shrapnel charges restore every 35 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sniper_shrapnel.png",
      },
      {
        name: "Headshot ",
        description:
          "Sniper increases his accuracy, giving him a chance to deal extra damage and knock back his enemies. Knockback distance increases based on how close the enemy is to Sniper. Headshots briefly slow enemy movement and attack speed by -100%. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sniper_headshot.png",
      },
      {
        name: "Take Aim ",
        description:
          "Increases armor, Headshot chance, and attack range. Slows you by 65% for the duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sniper_take_aim.png",
      },
      {
        name: "Assassinate ",
        description:
          "Sniper locks onto a target enemy unit and, after a short aiming duration, fires a devastating shot that deals Sniper's attack damage plus bonus damage at long range and mini-stuns the target. Whenever Sniper kills an enemy hero, Assassinate is refreshed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sniper_assassinate.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sniper.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sniper.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sniper.png",
    },
    heroName: "Sniper",
    state: "agility",
    complexity: 1,
  },
  spectre: {
    shortDescription:
      "Spectre haunts her enemies wherever they may be. Able to destroy lone prey with ease, she spreads her presence throughout the battlefield to choose her target. Once she has gathered her strength, none can escape her terrible wrath.",
    heroIntro: "HAUNTS HER ENEMIES AND TELEPORTS TO HER TARGET",
    abilities: [
      {
        name: "Spectral ",
        description: "Spectre and her illusions are permanently phased. ",
      },
      {
        name: "Spectral Dagger ",
        description:
          "Spectre flings a dagger to draw a Shadow Path, dealing damage and slowing the movement speed of any enemies along the trail. Units hit by the dagger also trail a Shadow Path. While treading the path, Spectre phases through otherwise impassable terrain. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/spectre_spectral_dagger.png",
      },
      {
        name: "Desolate ",
        description:
          "Deals bonus damage whenever Spectre attacks an enemy that does not have any allied units within a 400 radius around them. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/spectre_desolate.png",
      },
      {
        name: "Dispersion ",
        description:
          "Damage done to Spectre is reflected on her enemies, leaving her unharmed. The effect lessens with distance. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/spectre_dispersion.png",
      },
      {
        name: "Shadow Step ",
        description:
          "Creates a spectral nemesis to haunt a single visible enemy hero. At any moment during the duration, Spectre can use Reality to exchange places with any haunting illusion.Haunt illusions are uncontrollable, take extra damage, and deal less damage than Spectre herself.  They ignore terrain. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/spectre_haunt_single.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spectre.png",
    },
    heroName: "Spectre",
    state: "agility",
    complexity: 2,
  },
  spiritbreaker: {
    shortDescription:
      "Highly mobile and always aggressive, Spirit Breaker charges across the map to bring the fight to his enemies. With each bash of his heavy lantern, he knocks his foes senseless. His enemies may run, but with the help of a few wards, they cannot hide.",
    heroIntro: "CHARGES DOWN ENEMIES FROM ANYWHERE ON THE MAP",
    abilities: [
      {
        name: "Herd Mentality ",
        description:
          "The hero on your team whose level is lower than anybody else's on your team gains 50% more experience. ",
      },
      {
        name: "Charge of Darkness ",
        description:
          "Spirit Breaker fixes his sight on an enemy unit and starts charging through all objects, starting at 25% of the bonus speed and reaching his max speed after 1.5s.All enemy units passed through and the targeted unit will be hit by a Greater Bash.  If the targeted unit dies, Spirit Breaker will change his target to the nearest enemy unit to that location. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/spirit_breaker_charge_of_darkness.png",
      },
      {
        name: "Bulldoze ",
        description:
          "Spirit Breaker gains movement speed and status resistance to ram through enemies. Can be used while charging. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/spirit_breaker_bulldoze.png",
      },
      {
        name: "Greater Bash ",
        description:
          "Gives a chance to stun and knockback an enemy unit on an attack. Deals a percentage of movement speed as damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/spirit_breaker_greater_bash.png",
      },
      {
        name: "Nether Strike ",
        description:
          "Spirit Breaker slips into the nether realm, reappearing next to his hapless victim. Upon reappearing, a Greater Bash of the current level occurs and deals bonus damage. Knocks back for double the normal distance. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/spirit_breaker_nether_strike.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/spirit_breaker.png",
    },
    heroName: "Spirit Breaker",
    state: "strength",
    complexity: 1,
  },
  stormspirit: {
    shortDescription:
      "Storm Spirit is never one to miss a fight. Zipping from across the battlefield in a bolt of lightning, he strikes enemies from every direction with exploding remnants and charged attacks, then disappears while his enemies are still scrambling to react.",
    heroIntro: "ZIPS ACROSS THE MAP TO ENGAGE IN FIGHTS",
    abilities: [
      {
        name: "Galvanized ",
        description:
          "Storm Spirit gains a charge of 0.2 mana regeneration per kill. Loses 3 charges per death. Leveling Ball Lightning gives Storm Spirit 3 bonus charges. Additionally every time he gains a charge he also gains 0.1 Mana Regen permanently. ",
      },
      {
        name: "Static Remnant ",
        description:
          "Creates an explosively charged image of Storm Spirit that lasts 12 seconds and will detonate and deal damage if an enemy unit comes near it. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/storm_spirit_static_remnant.png",
      },
      {
        name: "Electric Vortex ",
        description:
          "A vortex that pulls an enemy unit to Storm Spirit's location. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/storm_spirit_electric_vortex.png",
      },
      {
        name: "Overload ",
        description:
          "Casting a spell creates an electrical charge, which is released in a burst on Storm's next attack, dealing damage and slowing nearby enemies. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/storm_spirit_overload.png",
      },
      {
        name: "Ball Lightning ",
        description:
          "Storm Spirit becomes volatile electricity, charging across the battlefield until he depletes his mana or reaches his target. The activation mana cost is 25+7.5% of his total mana pool, and the cost per 100 units traveled is 10+0.65% of his total mana pool.  Damage is expressed in damage per 100 units traveled. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/storm_spirit_ball_lightning.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/storm_spirit.png",
    },
    heroName: "Storm Spirit",
    state: "intelligence",
    complexity: 2,
  },
  sven: {
    shortDescription:
      "Sven is always eager to charge into a fight. He stuns grouped enemies as he wades into battle, and once he ignites his damage-boosting ultimate, a few swings of his massive sword are often more than enough to slay his foes.",
    heroIntro: "CLEAVES DOWN ENEMIES WITH HIS INCREDIBLE STRENGTH",
    abilities: [
      {
        name: "Vanquisher ",
        description:
          "Sven's attacks deal 17% bonus damage to stunned enemies. ",
      },
      {
        name: "Storm Hammer ",
        description:
          "Sven unleashes his magical gauntlet that deals damage and stuns enemy units in a small area around the target. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sven_storm_bolt.png",
      },
      {
        name: "Great Cleave ",
        description:
          "Sven strikes with great force, cleaving all nearby enemy units with his attack. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sven_great_cleave.png",
      },
      {
        name: "Warcry ",
        description:
          "Sven's Warcry heartens his allied heroes for battle, increasing their armor and movement speed. Lasts 8 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sven_warcry.png",
      },
      {
        name: "God's Strength ",
        description:
          "Sven channels his rogue strength, granting bonus damage and slow resistance for 35 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/sven_gods_strength.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sven.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sven.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sven.png",
    },
    heroName: "Sven",
    state: "strength",
    complexity: 1,
  },
  techies: {
    shortDescription:
      "For the Techies, battle is a matter of mischief. Giggling while they lob sticky bombs around the battlefield, their hidden explosive mines, disarming zaps, and reckless blast-off attacks are enough to leave most enemies dead. Or at least enraged. Often both.",
    heroIntro:
      "SURPRISES ENEMIES WITH INVISIBLE LANDMINES AND EXPLOSIVE ATTACKS",
    abilities: [
      {
        description: "This hero's innate ability is Minefield Sign.",
      },
      {
        name: "Sticky Bomb",
        description:
          "Lobs a Sticky Bomb towards the target area. If it lands next to an enemy hero, the bomb will stick to it, slowing its movement speed. After a few seconds the bomb will explode, dealing damage in an area around the detonation and applying a secondary slow for 3 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_sticky_bomb.png",
      },
      {
        name: "Reactive Tazer",
        description:
          "Techies trigger an electric charge giving them bonus movement speed for a short period of time. Enemies attacking Techies are temporarily disarmed and get a Basic Dispel. At the end of the effect, the charge explodes, disarming all enemies within the radius.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_reactive_tazer.png",
      },
      {
        name: "Blast Off!",
        description:
          "Techies hurtle themselves into the enemy's midst, detonating charges upon impact which deal massive area of effect damage and stun enemies. Upon landing, the assault deals Techies non-lethal damage equal to a percentage of their current health.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_suicide.png",
      },
      {
        name: "Minefield Sign",
        description:
          "Plant a warning sign, causing mines within its radius to be invulnerable. Only one sign can exist at a time. Lasts 60 seconds.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_minefield_sign.png",
      },
      {
        name: "Proximity Mines",
        description:
          "Plant an invisible mine that cannot be detected by True Sight, but is visible if an enemy is within the active 500 AoE of the mine. Mines detonate if an enemy is standing within the active AoE for 1 seconds dealing damage and temporarily reducing the enemy's Magic Resistance. The explosion deals full damage if the target is within 150 radius and decreases up to 50% on the edge. Deals 30% damage to buildings.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_land_mines.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/techies.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/techies.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/techies.png",
    },
    heroName: "Techies",
    state: "universal",
    complexity: 2,
  },
  templarassassin: {
    shortDescription:
      "Peppering the battlefield with slowing traps, Templar Assassin hides invisibly, ready to ambush her prey. Once she springs her attack, she shreds enemies with piercing psionic blades, and deflects counterattacks with her refracting shield.",
    heroIntro: "SLOWS DOWN ENEMIES WITH TRAPS",
    abilities: [
      {
        name: "Third Eye ",
        description:
          "Templar Assassin and her teammates can see Roshan's respawn timer. ",
      },
      {
        name: "Refraction ",
        description:
          "Templar Assassin becomes highly elusive, gaining a small barrier and bonus to her damage.  The damage and avoidance effects are separate, and have a limited number of instances. If a barrier is consumed, a new one is created as long as there are charges left. If an instance of damage would deal more damage than the remaining barrier, all of the damage is absorbed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/templar_assassin_refraction.png",
      },
      {
        name: "Meld ",
        description:
          "Templar Assassin conceals herself, becoming invisible as long as she remains still.  If Meld's invisibility is broken by attacking an enemy, Lanaya will deal bonus damage to the enemy and reduce their armor for 6 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/templar_assassin_meld.png",
      },
      {
        name: "Psi Blades ",
        description:
          "Templar Assassin's psi blades slice through the attacked unit, splitting and damaging enemy units directly behind it, while gaining bonus attack range. For each unit it damages, the spill damage is reduced by a percentage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/templar_assassin_psi_blades.png",
      },
      {
        name: "Psionic Trap ",
        description:
          "Templar Assassin places mystical traps that invisibly monitor enemy movement. When sprung at her command, they deal a small amount of damage and exert a slowing influence of 20% in the area. Traps charge up to slow 50% after 3.5 seconds. Deals bonus damage when fully charged. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/templar_assassin_psionic_trap.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/templar_assassin.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/templar_assassin.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/templar_assassin.png",
    },
    heroName: "Templar Assassin",
    state: "agility",
    complexity: 2,
  },
  terrorblade: {
    shortDescription:
      "With Terrorblade, nothing is as it seems. Conjuring powerful illusions to confuse enemies and break their defenses, the demon marauder can exchange health with foes and friends to stave off death or weaken his enemies.",
    heroIntro: "TRANSFORMS INTO A POWERFUL RANGED DEMON",
    abilities: [
      {
        name: "Dark Unity ",
        description:
          "Illusions under Terrorblade's control that are within range receive a damage bonus. Illusions outside of the range receive a damage penalty. ",
      },
      {
        name: "Reflection ",
        description:
          "Terrorblade brings forth an invulnerable dark reflection of all enemy heroes in a target area. Affected enemy heroes have movement and attack speeds slowed and attacked by their reflection. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/terrorblade_reflection.png",
      },
      {
        name: "Conjure Image ",
        description: "Creates an illusion of Terrorblade that deals damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/terrorblade_conjure_image.png",
      },
      {
        name: "Metamorphosis ",
        description:
          "Terrorblade transforms into a powerful demon with a ranged attack. Any of Terrorblade's illusions that are within 1200 range will also be transformed by Metamorphosis. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/terrorblade_metamorphosis.png",
      },
      {
        name: "Sunder ",
        description:
          "Severs the life from both Terrorblade and a target hero, exchanging a percentage of both units' current health. Some health points must remain. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/terrorblade_sunder.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/terrorblade.png",
    },
    heroName: "Terrorblade",
    state: "agility",
    complexity: 2,
  },
  tidehunter: {
    shortDescription:
      "Stalking ahead of his team, Tidehunter is always on the lookout for the right time to strike. When the moment comes, he unleashes his massive and devastating ultimate, paving the way for his allies to slay their stunned enemies.",
    heroIntro: "DURABLE HERO WHO SHRUGS OFF ENEMY DAMAGE",
    abilities: [
      {
        name: "Blubber ",
        description:
          "Tidehunter's hide removes negative status effects if he takes more than 450 damage. Removes most debuffs, even if they are generally not purgable.DISPEL TYPE: Strong Dispel ",
      },
      {
        name: "Gush ",
        description:
          "Summons a gush of water to damage an enemy unit, reducing their movement speed and armor. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tidehunter_gush.png",
      },
      {
        name: "Kraken Shell ",
        description:
          "Thickens Tidehunter's hide to passively block a portion of any incoming physical attack damage.Does not stack with items that provide Damage Block. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tidehunter_kraken_shell.png",
      },
      {
        name: "Anchor Smash ",
        description:
          "Tidehunter swings his mighty anchor to attack and deal bonus damage to nearby enemies and reduce their attack damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tidehunter_anchor_smash.png",
      },
      {
        name: "Ravage ",
        description:
          "Slams the ground, causing tentacles to erupt in all directions, damaging and stunning all nearby enemy units. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tidehunter_ravage.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tidehunter.png",
    },
    heroName: "Tidehunter",
    state: "strength",
    complexity: 1,
  },
  timbersaw: {
    shortDescription:
      "Elusive and unpredictable, Timbersaw chops through the forest to face his foes. Unleashing an arsenal of saw blades to cut enemies to pieces, he rides his chain into nearby trees and batters foes along the way.",
    heroIntro: "CHOPS THROUGH THE FOREST TO FACE HIS FOES",
    abilities: [
      {
        name: "Exposure Therapy ",
        description: "Whenever Timbersaw destroys a tree, he gains 4 mana. ",
      },
      {
        name: "Whirling Death ",
        description:
          "Timbersaw whirls extremely sharp edges, damaging enemies and destroying trees around him in an area. If an enemy hero is affected, it loses some of its primary attribute for a short duration. Whirling Death will deal bonus damage per tree destroyed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shredder_whirling_death.png",
      },
      {
        name: "Timber Chain ",
        description:
          "Timbersaw fires a chain that embeds itself in the first tree it hits, pulling him towards it.  Any enemy in the path takes damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shredder_timber_chain.png",
      },
      {
        name: "Reactive Armor ",
        description:
          "Each time Timbersaw is attacked, he gains increased health regen and armor. Hero attacks are counted as 3x the amount. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shredder_reactive_armor.png",
      },
      {
        name: "Chakram ",
        description:
          "Fires Timbersaw's main saw blade at the target location where it will spin in place, dealing damage in an area around it.  Enemies caught in the saw blade will move more slowly for every 5% of health missing. The blade deals damage and cuts down trees in its path when fired and retracted.  While active the ability costs mana, and Timbersaw loses the ability to attack. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/shredder_chakram.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shredder.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shredder.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/shredder.png",
    },
    heroName: "Timbersaw",
    state: "strength",
    complexity: 2,
  },
  tinker: {
    shortDescription:
      "Tinker demolishes foes with swarms of machines and a host of deadly gadgets. If he can gather the resources he needs, the power that instantly refreshes his abilities enables him to lead his team from every front.",
    heroIntro: "DEMOLISHES HIS ENEMIES WITH SWARMS OF MACHINES",
    abilities: [
      {
        name: "Eureka! ",
        description:
          "Tinker gains 1% item cooldown reduction per 3 Intelligence, up to a maximum of 60%. ",
      },
      {
        name: "Laser ",
        description:
          "Fires an intense energy beam, damaging and blinding the target. Blinded targets miss all physical attacks. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tinker_laser.png",
      },
      {
        name: "March of the Machines ",
        description:
          "Enlists an army of robotic minions to destroy enemy units in an area around Tinker. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tinker_march_of_the_machines.png",
      },
      {
        name: "Defense Matrix ",
        description:
          "Targets an allied unit, applying an all damage barrier to them that also provides Status Resistance. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tinker_defense_matrix.png",
      },
      {
        name: "Rearm ",
        description: "CHANNELED - Resets the cooldown on Tinker's abilities. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tinker_rearm.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tinker.png",
    },
    heroName: "Tinker",
    state: "intelligence",
    complexity: 2,
  },
  tiny: {
    shortDescription:
      "Growing to tremendous size and strength as the battle progresses, Tiny's power can quickly become terrifying. He tosses heroes and creeps at his enemies, or stuns them beneath an avalanche. Should he gather his full strength, he can demolish the enemy's base with ease.",
    heroIntro: "GROWS IN SIZE AND STRENGTH AS BATTLE ENSUES",
    abilities: [
      {
        name: "Craggy Exterior ",
        description:
          "Enemies that attack Tiny receive a stacking debuff that lowers their attack damage with each stack. ",
      },
      {
        name: "Avalanche ",
        description:
          "Bombards an area with rocks, continously doing small intervals of damage and stun to enemy units. Avalanche does 100% bonus damage to units being tossed ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tiny_avalanche.png",
      },
      {
        name: "Toss ",
        description:
          "Grabs the nearest unit in a 300 radius around Tiny, ally or enemy, and launches it at the target unit or rune to deal damage where they land. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tiny_toss.png",
      },
      {
        name: "Tree Grab ",
        description:
          "Grabs a tree to whack enemies on the head for a limited number of attacks. Grants bonus attack range. Attacks deal more damage and fully splash on units along the way. The tree can be thrown, to deal your attack to a unit at a distance. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tiny_tree_grab.png",
      },
      {
        name: "Grow ",
        description:
          "Tiny gains craggy mass, increasing his attack damage, movement speed and armor, and toss power while slowing his attack speed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tiny_grow.png",
      },
      {
        name: "Tree Throw ",
        description:
          "Throws the tree at the target unit, proccing your attack on it and splashing damage around the target. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tiny_toss_tree.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tiny.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tiny.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tiny.png",
    },
    heroName: "Tiny",
    state: "strength",
    complexity: 2,
  },
  treantprotector: {
    shortDescription:
      "Treant Protector is ever the benevolent ally, sprouting regenerating armor for his cohorts and their fortifications alike. Emerging unseen from among the trees, he binds foes with overgrowth as he leeches health from enemies and into nearby allies.",
    heroIntro: "CALLS UPON THE FOREST TO ROOT HIS FOES",
    abilities: [
      {
        name: "Nature's Guise ",
        description:
          "Provides Treant with Tree Walking whenever he hasn't taken damage for 3 seconds. While nearby trees or affected by Nature's Grasp, Treant gains bonus movement speed. ",
      },
      {
        name: "Nature's Grasp ",
        description:
          "Creates vines towards the target location. Vines slow down and deal damage to enemies that walk through. Vines deal 50% more damage if they touch a tree. Does half damage to creeps. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/treant_natures_grasp.png",
      },
      {
        name: "Leech Seed ",
        description:
          "Treant plants a life-sapping seed in an enemy unit, draining its health, while simultaneously slowing it. The seed heals friendly units around it. Healing to creeps is reduced by 50%. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/treant_leech_seed.png",
      },
      {
        name: "Living Armor ",
        description:
          "Infuses the target hero or structure with a protective coating which heals the target and provides bonus armor. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/treant_living_armor.png",
      },
      {
        name: "Overgrowth ",
        description:
          "Summons an overgrowth of vines and branches around Treant that deal damage to afflicted enemies and prevent them from moving, blinking, going invisible, or attacking. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/treant_overgrowth.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/treant.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/treant.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/treant.png",
    },
    heroName: "Treant Protector",
    state: "strength",
    complexity: 2,
  },
  trollwarlord: {
    shortDescription:
      "Instantly able to swap between ranged and melee attacks, Troll Warlord is a formidable force at any distance. Axes in hand, he can strike in a storm of spinning blades. He takes down enemies with increasingly swift attacks, and can speed his allies' assaults wherever they are.",
    heroIntro: "SWAPS BETWEEN RANGED AND MELEE ATTACKS AT WILL",
    abilities: [
      {
        description: "This hero's innate ability is Battle Stance.",
      },

      {
        name: "Battle Stance",
        description:
          "Troll Warlord swaps from using ranged to melee attacks. Melee attacks have decreased base attack time.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_switch_stance.png",
      },
      {
        name: "Whirling Axes (Ranged)",
        description:
          "Troll hurls a fistful of five axes in a cone shape over 950 range, slowing and damaging enemy units.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_whirling_axes_ranged.png",
      },
      {
        name: "Whirling Axes (Melee)",
        description:
          "Troll hurls two axes around him in a close range area of effect, damaging enemy units and causing them to miss some attacks.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_whirling_axes_melee.png",
      },
      {
        name: "Fervor",
        description:
          "With each continuous blow on the same target, Troll gains increased attack speed.  If Troll changes targets, the stacks drop to zero.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_fervor.png",
      },
      {
        name: "Berserker's Rage",
        description:
          "While in melee form, Troll Warlord's attacks have a chance to ensnare, preventing the target from moving or using mobility spells and has additional movement speed and armor.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_berserkers_rage.png",
      },
      {
        name: "Battle Trance",
        description:
          "Troll unleashes a powerful battle trance, that forces you to continuously attack the closest enemy unit within 900 range, prioritizing heroes. Damage does not kill you during this mode. Grants you bonus lifesteal, attack speed and movement speed. Applies a Basic Dispel.",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_battle_trance.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/troll_warlord.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/troll_warlord.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/troll_warlord.png",
    },
    heroName: "Troll Warlord",
    state: "agility",
    complexity: 2,
  },
  tusk: {
    shortDescription:
      "Tusk is always eager to start a fight. Able to instantly corner an enemy with a wall of ice shards, he gathers with his allies and rolls into enemies inside of a massive snowball, bringing him in range to land his signature knockout punch.",
    heroIntro: "SNOWBALLS INTO HIS ENEMIES TO STUN",
    abilities: [
      {
        name: "Bitter Chill ",
        description:
          "Passively slows the attack speed of all enemies within 350 radius. ",
      },
      {
        name: "Ice Shards ",
        description:
          "Tusk compresses shards of ice into a ball of frozen energy that damages all enemies it comes in contact with. When the ball reaches its target destination the shards are released, creating a barrier that lasts for 4 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tusk_ice_shards.png",
      },
      {
        name: "Snowball ",
        description:
          "Tusk begins rolling into a snowball. Allies within a 350 radius can also be added to the snowball by right-clicking on them, even while the snowball is moving. Once launched, any enemies caught in the snowball's path will be stunned and take damage. Each allied Hero in the snowball will add to its damage and stun duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tusk_snowball.png",
      },
      {
        name: "Walrus PUNCH! ",
        description:
          "Tusk connects with his mighty Walrus Punch, a critical strike with bonus damage so powerful it launches its victim into the air. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/tusk_walrus_punch.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/tusk.png",
    },
    heroName: "Tusk",
    state: "strength",
    complexity: 1,
  },
  underlord: {
    shortDescription:
      "Conjure waves of abyssal flame to immolate enemies held paralyzed in your spiteful grip. Feast upon the carnage of battle, gaining strength as foes perish around you, their attacks diminished by your very presence. Tear a rift in reality to teleport yourself and your teammates across the map, delivering bloody retribution to any who would defy the will of Vrogros the Underlord.",
    heroIntro: "TELEPORTS HIS TEAM IN AND OUT OF BATTLE",
    abilities: [
      {
        name: "Invading Force ",
        description:
          "After an allied hero Teleports, they temporarily gain Damage Reduction and Movement Speed. Allies receive 2x bonuses if teleporting via Fiend's Gate. ",
      },
      {
        name: "Firestorm ",
        description:
          "Calls down waves of fire that damage enemy units in the target area, burning for additional damage over time. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/abyssal_underlord_firestorm.png",
      },
      {
        name: "Pit of Malice ",
        description:
          "A deadly pit is conjured at the target location; any unit that enters will be damaged and rooted. Each enemy unit within the pit are affected by the root only every 3.6 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/abyssal_underlord_pit_of_malice.png",
      },
      {
        name: "Atrophy Aura ",
        description:
          "Nearby enemy units are weakened, losing a portion of their base damage. If an enemy dies while under this effect, Underlord gains temporary bonus damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/abyssal_underlord_atrophy_aura.png",
      },
      {
        name: "Fiend's Gate ",
        description:
          "Opens 2 portals, one next to Underlord and one in the target location. Heroes can channel a portal for 3.5 seconds to teleport to the other side. Portals have to be at least 1500 away from each other.Double-click to teleport to your team's base, in front of your fountain. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/abyssal_underlord_dark_portal.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abyssal_underlord.png",
    },
    heroName: "Underlord",
    state: "strength",
    complexity: 2,
  },
  undying: {
    shortDescription:
      "Shambling into battle, Undying forces enemies to decide whether to flee his wrath or be torn apart by it. He drains strength from his foes, and summons a horde of clawing undead. When he finally becomes a hulking flesh golem, his enemies may already be overwhelmed.",
    heroIntro: "SUMMONS HORDES OF ZOMBIES TO ATTACK HIS FOES",
    abilities: [
      {
        name: "Ceaseless Dirge ",
        description:
          "When Undying dies he will instantly respawn in the fountain. Begins the game on cooldown. Cannot be refreshed. ",
      },
      {
        name: "Decay ",
        description:
          "Undying steals strength from all enemy heroes in an area, dealing base damage as he claims the enemy's strength for himself. Deals 2x damage to creeps. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/undying_decay.png",
      },
      {
        name: "Soul Rip ",
        description:
          "Undying rips health away from all nearby units and uses it to heal an ally, or damage an enemy. Soul Rip can also be used to heal Tombstone. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/undying_soul_rip.png",
      },
      {
        name: "Tombstone ",
        description:
          "Summons a tombstone at the target point.  Zombies will frequently spawn next to every enemy unit in the area around the Tombstone, and attack them.  Zombies have the Deathlust ability, which causes their attacks to slow the target, and if the target reaches below a certain amount of health, increases the attack and movement speed of the zombie. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/undying_tombstone.png",
      },
      {
        name: "Flesh Golem ",
        description:
          "Undying transforms into a horrifying flesh golem. Gains a percentage increase to strength and imbues attacks with a slow and damage amplification. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/undying_flesh_golem.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/undying.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/undying.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/undying.png",
    },
    heroName: "Undying",
    state: "strength",
    complexity: 1,
  },
  ursa: {
    shortDescription:
      "With each swipe of his claws, Ursa increases his target's vulnerability to his next attack. Capable of briefly increasing how swiftly he can strike, and able to slow down nearby prey, he quickly tears apart his enemies.",
    heroIntro: "DEALS MORE DAMAGE WITH EVERY HIT TO THE SAME FOE",
    abilities: [
      {
        name: "Maul ",
        description:
          "Ursa gains bonus damage equal to a percentage of his Current HP. ",
      },
      {
        name: "Earthshock ",
        description:
          "Ursa leaps forward 250 units and slams the earth, causing a powerful shock to damage and slow all enemy units in a nearby area for 4 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ursa_earthshock.png",
      },
      {
        name: "Overpower ",
        description:
          "Using his skill in combat, Ursa gains increased attack speed and slow resistance for a number of subsequent attacks. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ursa_overpower.png",
      },
      {
        name: "Fury Swipes ",
        description:
          "Ursa's claws dig deeper wounds in the enemy, causing consecutive attacks to the same enemy to deal more damage.  If the same target is not attacked after 8 seconds, the bonus damage is lost. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ursa_fury_swipes.png",
      },
      {
        name: "Enrage ",
        description:
          "Ursa goes into a frenzy, providing damage reduction and status resistance. Removes any existing debuffs.DISPEL TYPE: Strong Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/ursa_enrage.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ursa.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ursa.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ursa.png",
    },
    heroName: "Ursa",
    state: "agility",
    complexity: 1,
  },
  vengefulspirit: {
    shortDescription:
      "Vengeful Spirit's presence is felt at all times, whether she is alive or dead. Able to swap positions with any nearby hero, stun enemies, and reduce her killer's effectiveness if she falls, she constantly brings confusion and chaos to her foes.",
    heroIntro: "CAN SWAP HERSELF WITH ANY NEARBY HERO",
    abilities: [
      {
        name: "Retribution ",
        description:
          "Whenever an enemy hero kills Vengeful Spirit, they get a debuff until their next death, causing Vengeful Spirit to deal 10% bonus damage to them. ",
      },
      {
        name: "Magic Missile ",
        description:
          "Fires a magic missile at an enemy unit, stunning and dealing damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/vengefulspirit_magic_missile.png",
      },
      {
        name: "Wave of Terror ",
        description:
          "Vengeful Spirit lets loose a wicked cry, weakening the total attack damage and armor of enemies, and giving vision of the path ahead. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/vengefulspirit_wave_of_terror.png",
      },
      {
        name: "Vengeance Aura ",
        description:
          "Vengeful Spirit's presence increases the damage of nearby friendly heroes. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/vengefulspirit_command_aura.png",
      },
      {
        name: "Nether Swap ",
        description:
          "Instantaneously swaps positions with a target Hero, friend or enemy. Nether Swap interrupts channeling abilities on the target. Enemy Swapped units take damage. Vengeful Spirit and allied swapped units gain a barrier equal to the damage dealt. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/vengefulspirit_nether_swap.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/vengefulspirit.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/vengefulspirit.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/vengefulspirit.png",
    },
    heroName: "Vengeful Spirit",
    state: "universal",
    complexity: 1,
  },
  venomancer: {
    shortDescription:
      "Venomancer brings slow death to his enemies. Sprouting an endless army of toxin-spitting watchers to defend his territory, should foes draw near he can release a massive cloud of lingering poison to weaken enemies.",
    heroIntro: "DEALS DAMAGE OVER TIME WITH VENOMOUS ATTACKS",
    abilities: [
      {
        name: "Septic Shock ",
        description:
          "Venomancer's attacks deal extra damage based on how many debuffs the attack target has. Extra damage is dealt as magical damage. Only counts debuffs from Venomancer or his Plague Wards. ",
      },
      {
        name: "Venomous Gale ",
        description:
          "Launches a ball of venom in a line, poisoning enemy units so that they take both initial damage and damage over time, as well as suffering slowed movement.  Venomous Gale deals damage every 3 seconds over its duration. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/venomancer_venomous_gale.png",
      },
      {
        name: "Poison Sting ",
        description:
          "Adds poison damage to Venomancer's normal attacks and slowing movement speed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/venomancer_poison_sting.png",
      },
      {
        name: "Plague Ward ",
        description:
          "Summons a plague ward to attack enemy units and structures. The ward is immune to magic. Wards gain the Poison Sting level from Venomancer, dealing 50% of the full damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/venomancer_plague_ward.png",
      },
      {
        name: "Noxious Plague ",
        description:
          "Infects an enemy with a deadly plague that does an initial burst of damage and additional damage over time based on the unit's maximum health. The plague slows the target and nearby enemies based on their distance to the target. When the target dies or the debuff expires, all nearby enemies are infected with a noncommunicable version of the plague. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/venomancer_noxious_plague.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png",
    },
    heroName: "Venomancer",
    state: "universal",
    complexity: 1,
  },
  viper: {
    shortDescription:
      "Launching deadly poison from a distance, Viper poses a grave threat to whomever he targets. As his various toxins eat away at an enemy's health and slow their movement, Viper simply does what he does best: he keeps adding more poison.",
    heroIntro: "POISONOUS TOXINS CHIP AWAY ARMOR AND SLOW ENEMIES",
    abilities: [
      {
        name: "Predator ",
        description:
          "Viper's attacks deal an additional instance of physical damage per missing health percentage of the target hero, equal to 0.15 + 0.05 per Viper's level. ",
      },
      {
        name: "Poison Attack ",
        description:
          "Intensifies Viper's venom, adding an effect to his normal attack that applies a stacking movement speed slow and magic resistance deduction while dealing damage over time. Stacks up to 6 times. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/viper_poison_attack.png",
      },
      {
        name: "Nethertoxin ",
        description:
          "Viper releases a Nethertoxin at the targeted area. Units in that area take an increasing damage over time based on how long they remain in it. Units in it have their attack speed slowed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/viper_nethertoxin.png",
      },
      {
        name: "Corrosive Skin ",
        description:
          "Viper exudes an infectious toxin that damages and slows the attack speed of any enemy that damages it in a 1200 radius. The acid exudate also increases Viper's resistance to magic. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/viper_corrosive_skin.png",
      },
      {
        name: "Viper Strike ",
        description:
          "Viper slows the targeted enemy unit's movement and attack speed while also disabling their passives and dealing poison damage over time. The slowing effect reduces over the duration of the poison. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/viper_viper_strike.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/viper.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/viper.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/viper.png",
    },
    heroName: "Viper",
    state: "agility",
    complexity: 1,
  },
  visage: {
    shortDescription:
      "As his deadly familiars scout the field, Visage cloaks himself in armor and seeks the next battle. Once near a skirmish, he gathers soul energy from damage inflicted upon nearby fighters before releasing it in a devastating attack.",
    heroIntro: "SCOUTS AND ATTACKS WITH HIS FAMILIARS",
    abilities: [
      {
        name: "Lurker ",
        description:
          "Visage's ability cooldown durations are accelerated as long as he's not taking damage.Grants a stack every 2s that Visage does not take damage. Each stack grants 2% cooldown acceleration with a max of 8 stacks. Stacks fade after 2s upon taking any damage. ",
      },
      {
        name: "Grave Chill ",
        description:
          "Visage drains the movement and attack speed of the targeted unit, gaining it for itself and nearby familiars. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/visage_grave_chill.png",
      },
      {
        name: "Soul Assumption ",
        description:
          "Visage gathers charges of soul essence each time nearby heroes take more than 100 damage. When the essence is released, it deals base damage as well as damage for each gathered soul charge. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/visage_soul_assumption.png",
      },
      {
        name: "Gravekeeper's Cloak ",
        description:
          "Visage generates a layered barrier that protects him from damage.  If he receives damage from a player, one layer is removed, and takes time to recover. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/visage_gravekeepers_cloak.png",
      },
      {
        name: "Summon Familiars ",
        description:
          "Conjures 2 blind Familiars to fight for Visage.  Familiars possess the Stone Form ability, that allows them to turn into stone, stunning enemies upon landing.  While in Stone Form, Familiars are invulnerable, and rapidly regenerate their health.  Familiars grant high bounty when killed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/visage_summon_familiars.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/visage.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/visage.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/visage.png",
    },
    heroName: "Visage",
    state: "universal",
    complexity: 3,
  },
  voidspirit: {
    shortDescription:
      "Privy to secrets that would shatter a mortal mind, the Void Spirit emerges from his Hidden Temple to stand guard over multiple areas of the battlefield at once. Able to step into and out of the mortal plane at will, he easily outmaneuvers opponents to strike from wherever he desires, calling upon the powers of the aether to shield him in times of need.",
    heroIntro: "STEPS IN AND OUT OF THE MORTAL PLANE TO STRIKE HIS FOES",
    abilities: [
      {
        name: "Intrinsic Edge ",
        description:
          "Void Spirit gains 25% more secondary bonuses from all of his stats. ",
      },
      {
        name: "Aether Remnant ",
        description:
          "Void Spirit dispatches a remnant to the target location. The remnant stands watch over the region, facing the direction of his vector. When a unit crosses its gaze, the remnant pulls it in and damages it. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/void_spirit_aether_remnant.png",
      },
      {
        name: "Dissimilate ",
        description:
          "Void Spirit temporarily fades into the aether, creating a number of portals through which he can reassemble himself. Upon exiting a portal, he damages all enemies in the area. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/void_spirit_dissimilate.png",
      },
      {
        name: "Resonant Pulse ",
        description:
          "Void Spirit wraps himself in a protective shield that absorbs physical damage and emits a single damaging pulse around him. The shield gains increased damage absorption for each enemy hero the pulse hits. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/void_spirit_resonant_pulse.png",
      },
      {
        name: "Astral Step ",
        description:
          "Void Spirit tears a rift through the astral plane to appear at the target location, attacking all enemies along the path. This attack inflicts a void mark that slows for 1.25 seconds and then detonates. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/void_spirit_astral_step.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/void_spirit.png",
    },
    heroName: "Void Spirit",
    state: "universal",
    complexity: 2,
  },
  warlock: {
    shortDescription:
      "Summoning forth his demonic golem, Warlock brings ruin to enemies and destroys their defenses. Yet even without his golem, his dark spells can still wreak havoc, whether healing allies and harming enemies with a word, or binding foes together to share their agony.",
    heroIntro: "SUMMONS POWERFUL DEMONS TO FIGHT AT HIS SIDE",
    abilities: [
      {
        name: "Eldritch Summoning ",
        description:
          "Whenever an enemy unit dies while afflicted by one or more of Warlock's abilities, a minor imp is summoned that lasts for 15 seconds and explodes on death. Imps will automatically seek out nearby units, favoring fatally bonded heroes, and will explode when reaching their prey. ",
      },
      {
        name: "Fatal Bonds ",
        description:
          "Binds several enemy units together, causing a percentage of the damage dealt to one of them to be felt by the others. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/warlock_fatal_bonds.png",
      },
      {
        name: "Shadow Word ",
        description:
          "Warlock whispers an incantation, casting a spell on a unit that makes it deal damage to nearby enemy units and heal nearby ally units. Target Unit will also heal or be damaged depending on whether they are ally or enemy. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/warlock_shadow_word.png",
      },
      {
        name: "Upheaval ",
        description:
          "CHANNELED - A powerful slowing and damaging current that grows stronger as it's channeled. Lasts up to 10 seconds. Enemies are slowed for 3 seconds after leaving the area or the spell ends. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/warlock_upheaval.png",
      },
      {
        name: "Chaotic Offering ",
        description:
          "Summons a Golem from the depths, stunning enemies for 0.8 seconds. The Golem lives 60 seconds, takes reduced damage from spells, has increased Slow Resistance, has Permanent Immolation and Flaming Fists on attack. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/warlock_rain_of_chaos.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/warlock.png",
    },
    heroName: "Warlock",
    state: "intelligence",
    complexity: 1,
  },
  weaver: {
    shortDescription:
      "Weaver has no trouble evading enemies to position himself for another strike. Slipping in and out of sight, he avoids death by rewinding himself to an earlier position and health state. His arsenal of elusive skills ensures he is always a critical nuisance to his foes.",
    heroIntro: "REWINDS TIME TO REVERSE DAMAGE AND POSITION",
    abilities: [
      {
        name: "Rewoven ",
        description:
          "Every time Weaver casts an ability, he gains 50 attack range for 7s. This effect stacks independently. ",
      },
      {
        name: "The Swarm ",
        description:
          "Weaver launches a swarm of 12 young Weavers that latch on any enemy unit in their path, attacking and reducing armor until it is killed. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/weaver_the_swarm.png",
      },
      {
        name: "Shukuchi ",
        description:
          "Weaver shifts out of visibility, gaining max movement speed --doing harm to any enemies it passes through. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/weaver_shukuchi.png",
      },
      {
        name: "Geminate Attack ",
        description: "Allows Weaver to dispatch two attacks at once. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/weaver_geminate_attack.png",
      },
      {
        name: "Time Lapse ",
        description:
          "Weaver warps backward to whatever position it was in five seconds earlier--regaining the HP and mana from that time. No effect on cooldown, gold or experience.DISPEL TYPE: Strong Dispel ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/weaver_time_lapse.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/weaver.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/weaver.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/weaver.png",
    },
    heroName: "Weaver",
    state: "agility",
    complexity: 2,
  },
  windranger: {
    shortDescription:
      "Evasive and swift, the nimble Windranger is always seeking the right angle to attack. Whether she's clearing the way with a draw of her deadly powershot, or shackling enemies together to pepper them with arrows, she's always on the move.",
    heroIntro: "FIRES SWIFT FLURRY OF ARROWS AT A SINGLE TARGET",
    abilities: [
      {
        name: "Easy Breezy ",
        description:
          "Windranger's movement speed cannot be lower than 240 and can reach 600. ",
      },
      {
        name: "Shackleshot ",
        description:
          "Shackles the target to an enemy unit or tree in a line directly behind it.  If no unit or tree is present, the stun duration is reduced to 0.6. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/windrunner_shackleshot.png",
      },
      {
        name: "Powershot ",
        description:
          "CHANNELED - Windranger charges her bow for up to 1 second for a single powerful shot, which slows and deals more damage the longer it is charged. The arrow damages enemies along its path. For each enemy that Powershot hits, its damage and slow power is reduced. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/windrunner_powershot.png",
      },
      {
        name: "Windrun ",
        description:
          "Increases movement speed and adds evasion from all physical attacks. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/windrunner_windrun.png",
      },
      {
        name: "Focus Fire ",
        description:
          "Windranger channels the wind to gain 350 additional attack speed against a single enemy unit or structure, though with a reduction to her attack damage.  Extra damage from secondary item effects is not reduced. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/windrunner_focusfire.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/windrunner.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/windrunner.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/windrunner.png",
    },
    heroName: "Windranger",
    state: "universal",
    complexity: 2,
  },
  winterwyvern: {
    shortDescription:
      "Winter Wyvern stalks the skies, slowing foes with burning cold as she soars over the battlefield. Should the enemy be foolish enough to gather, she curses them to attack one of their own as she blasts the gathering with icy splinters.",
    heroIntro: "ABLE TO FORCE HER ENEMIES TO ATTACK THEIR OWN ALLY",
    abilities: [
      {
        name: "Eldwurm Scholar ",
        description:
          "When an allied hero picks up a Wisdom Rune, Winter Wyvern shares the knowledge with her entire team, granting 20% of the experience to each of the 3 heroes that did not collect the initial bonus. ",
      },
      {
        name: "Arctic Burn ",
        description:
          "Winter Wyvern soars upon an arctic wind, granting her unobstructed movement and allowing her to exhale a blistering chill into each attack. While soaring, her attacks travel further and faster, and slow enemies with a magical freeze that strips them of 4% of their current health each second. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/winter_wyvern_arctic_burn.png",
      },
      {
        name: "Splinter Blast ",
        description:
          "Launches a ball of brittle ice toward a unit. The ice shatters on impact, leaving the primary target completely unaffected, while hurling damaging splinters into nearby enemies in a 500 base radius. Enemies struck by these splinters are slowed by 28%. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/winter_wyvern_splinter_blast.png",
      },
      {
        name: "Cold Embrace ",
        description:
          "Encases an ally in an icy cocoon, freezing them solid while healing a base amount as well as a percentage of their maximum health each second. The cocoon blocks all physical damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/winter_wyvern_cold_embrace.png",
      },
      {
        name: "Winter's Curse ",
        description:
          "Winter Wyvern dispells then freezes an enemy in place while striking those nearby with a maddening curse which causes them to attack their frozen ally with increased attack speed. The frozen ally and those cursed to attack their ally are immune to all damage from their enemies with the exception of magic damage from Winter Wyvern or her controlled units, that is amplified. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/winter_wyvern_winters_curse.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.png",
    },
    heroName: "Winter Wyvern",
    state: "universal",
    complexity: 2,
  },
  witchdoctor: {
    shortDescription:
      "Witch Doctor is whatever his team needs him to be. Whether aiding his team with gradual healing, stunning and cursing foes to ensure a kill, or destroying enemies himself with a dance by his mighty ultimate, few can match Witch Doctor's versatility.",
    heroIntro: "CHANNELS A HIGH DAMAGE DEATH WARD",
    abilities: [
      {
        name: "Gris-Gris ",
        description:
          "Witch Doctor gets a Gris-Gris, an item that cannot be dropped or placed in the backpack. When the owner dies, 100% of the gold lost from death is added to the item, and will be refunded when the item is consumed. The value of the Gris-Gris is increased by 1 every 3s.  Right-click to consume and permanently remove the item. ",
      },
      {
        name: "Paralyzing Cask ",
        description:
          "Launches a cask of paralyzing powder that ricochets between enemy units, stunning and damaging those it hits. Deals 150% damage to creeps. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/witch_doctor_paralyzing_cask.png",
      },
      {
        name: "Voodoo Restoration ",
        description:
          "Witch Doctor focuses his magic to heal nearby allied units, costing Witch Doctor mana every second Voodoo Restoration is active. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/witch_doctor_voodoo_restoration.png",
      },
      {
        name: "Maledict ",
        description:
          "Curses all enemy Heroes in a small area, causing them to take a set amount of damage each second, as well as bursts of damage every 4 seconds based on how much health they have lost since the curse began. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/witch_doctor_maledict.png",
      },
      {
        name: "Death Ward ",
        description:
          "CHANNELED - Summons a deadly ward to attack enemy heroes within its attack range. Lasts a maximum of 8 seconds. Death Ward has 50% bonus accuracy. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/witch_doctor_death_ward.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/witch_doctor.png",
    },
    heroName: "Witch Doctor",
    state: "intelligence",
    complexity: 1,
  },
  wraithking: {
    shortDescription:
      "Striding fearlessly toward his enemies, Wraith King stuns his foes and slashes them into submission. Should his enemies gain the upper hand, his self-resurrecting ultimate ensures he'll have another chance to swing his sword.",
    heroIntro: "CAN REINCARNATE INSTANTLY UPON DEATH",
    abilities: [
      {
        name: "Vampiric Spirit ",
        description:
          "Grants Wraith King Lifesteal. When slain Wraith King turns into a free pathing Wraith with Bonus Attack and Movement Speed for a short duration, delaying his death. ",
      },
      {
        name: "Wraithfire Blast ",
        description:
          "Wraith King sears an enemy unit with spectral fire, dealing damage and stunning, then dealing damage over time and slowing the target. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/skeleton_king_hellfire_blast.png",
      },
      {
        name: "Mortal Strike ",
        description:
          "Wraith King passively deals bonus damage on an attack with a cooldown. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/skeleton_king_mortal_strike.png",
      },
      {
        name: "Reincarnation ",
        description:
          "Wraith King's form regroups after death, allowing him to resurrect when killed in battle.  Upon death, enemy units in a 900 radius are slowed. Can be self-cast to kill Wraith King instantly. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/skeleton_king_reincarnation.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skeleton_king.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skeleton_king.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/skeleton_king.png",
    },
    heroName: "Wraith King",
    state: "strength",
    complexity: 1,
  },
  zeus: {
    shortDescription:
      "None can hide from Zeus, whether he's calling down a bolt to reveal the surroundings, sending an arc coursing through his nearest enemies, or summoning a terrifying volley of lightning upon all enemies. Wherever his foes are, Zeus will find them.",
    heroIntro: "STRIKES ENEMIES NEAR AND FAR WITH LIGHTNING",
    abilities: [
      {
        name: "Static Field ",
        description:
          "Zeus shocks any enemy that he attacks or is hit by his abilities, causing damage equal to a percentage of their current health. ",
      },
      {
        name: "Arc Lightning ",
        description:
          "Hurls a bolt of lightning that leaps through nearby enemy units that deal damage. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/zuus_arc_lightning.png",
      },
      {
        name: "Lightning Bolt ",
        description:
          "Calls down a bolt of lightning to strike an enemy unit, causing damage and a mini-stun. When cast, Lightning Bolt briefly provides unobstructed vision and True Sight around the target in a 750 radius. Can be cast on the ground, affecting the closest enemy hero in 325 range. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/zuus_lightning_bolt.png",
      },
      {
        name: "Heavenly Jump ",
        description:
          "Zeus performs a Heavenly Jump, leaping forward and shocking the closest visible nearby enemy (prioritizing heroes), dealing damage as well as reducing their movement and attack speed. Zeus gets 900 unobstructed vision around him for 3 seconds. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/zuus_heavenly_jump.png",
      },
      {
        name: "Thundergod's Wrath ",
        description:
          "Strikes all enemy heroes with a bolt of lightning, dealing damage, no matter where they may be.Thundergod's Wrath also provides True Sight around each hero struck.  If an enemy hero is invisible, it takes no damage, but the True Sight is still created at that hero's location. ",
        abilityIcon:
          "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/abilities/zuus_thundergods_wrath.png",
      },
    ],
    media: {
      mov: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/zuus.mov",
      webm: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/zuus.webm?undefined",
      poster:
        "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/zuus.png",
    },
    heroName: "Zeus",
    state: "intelligence",
    complexity: 1,
  },
};

export default heroesDetails;
