'use strict';

/** @typedef {{[name: string]: SSBSet}} SSBSets */
/**
 * @typedef {Object} SSBSet
 * @property {string} species
 * @property {string | string[]} ability
 * @property {string | string[]} item
 * @property {GenderName} gender
 * @property {(string | string[])[]} moves
 * @property {string} signatureMove
 * @property {{hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number}=} evs
 * @property {{hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number}=} ivs
 * @property {string | string[]} nature
 * @property {number=} level
 * @property {boolean=} shiny
 */

const RandomTeams = require('../../data/random-teams');

class RandomStaffBrosTeams extends RandomTeams {
	randomStaffBrosTeam() {
		/** @type {PokemonSet[]} */
		let team = [];
		/** @type {SSBSets} */
		let sets = {
			/*
			// Example:
			'Username': {
				species: 'Species', ability: 'Ability', item: 'Item', gender: '',
				moves: ['Move Name', ['Move Name', 'Move Name']],
				signatureMove: 'Move Name',
				evs: {stat: number}, ivs: {stat: number}, nature: 'Nature', level: 100, shiny: false,
			},
			// Species, ability, and item need to be captialized properly ex: Ludicolo, Swift Swim, Life Orb
			// Gender can be M, F, N, or left as an empty string
			// each slot in moves needs to be a string (the move name, captialized properly ex: Hydro Pump), or an array of strings (also move names)
			// signatureMove also needs to be capitalized properly ex: Scripting
			// You can skip Evs (defaults to 82 all) and/or Ivs (defaults to 31 all), or just skip part of the Evs (skipped evs are 0) and/or Ivs (skipped Ivs are 31)
			// You can also skip shiny, defaults to false. Level can be skipped (defaults to 100).
			// Nature needs to be a valid nature with the first letter capitalized ex: Modest
			*/
			// Please keep sets organized alphabetically based on staff member name!
			'2xTheTap': {
				species: 'Arcanine', ability: 'Mold Breaker', item: 'Life Orb', gender: 'M',
				moves: ['Sacred Fire', 'Extreme Speed', 'Morning Sun'],
				signatureMove: 'Noble Howl',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Adamant', shiny: true,
			},
			'5gen': {
				species: 'Sawsbuck', ability: 'Season\'s Gift', item: 'Heat Rock', gender: 'M',
				moves: ['Sunny Day', 'Return', 'High Jump Kick'],
				signatureMove: 'Too Much Saws',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly',
			},
			'ACakeWearingAHat': {
				species: 'Dunsparce', ability: 'Serene Grace', item: 'Leftovers', gender: 'M',
				moves: ['Headbutt', 'Shadow Strike', 'Roost'],
				signatureMove: 'Sparce Dance',
				evs: {hp: 252, def: 4, spe: 252}, nature: 'Jolly',
			},
			'Aelita': {
				species: 'Porygon-Z', ability: 'Protean', item: 'Life Orb', gender: 'F',
				moves: [['Boomburst', 'Moonblast'], 'Blue Flare', 'Chatter'],
				signatureMove: 'Energy Field',
				evs: {hp: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Modest',
			},
			'Akir': {
				species: 'Parasect', ability: 'Regrowth', item: 'Leftovers', gender: 'M',
				moves: ['Spore', 'Leech Life', ['Toxic', 'Healing Wish', 'Parting Shot']],
				signatureMove: 'Compost',
				evs: {hp: 248, atk: 8, spd: 252}, nature: 'Careful',
			},
			'Amaluna': {
				species: 'Octillery', ability: 'Neuroforce', item: 'Expert Belt', gender: 'F',
				moves: ['Surf', 'Fire Blast', 'Freeze-Dry'],
				signatureMove: 'Turismo Splash',
				evs: {hp: 252, spa: 252, spd: 4}, ivs: {atk: 0, spe: 0}, nature: 'Quiet',
			},
			'Andy >_>': {
				species: 'Absol', ability: 'Adaptability', item: 'Absolite', gender: 'M',
				moves: ['Dragon Dance', 'Destiny Bond', 'Sucker Punch'],
				signatureMove: 'Pilfer',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Adamant',
			},
			'ant': {
				species: 'Durant', ability: 'Flash Fire', item: 'Leftovers', gender: 'F',
				moves: ['King\'s Shield', 'U-turn', 'Pursuit'],
				signatureMove: 'TRU ANT',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly',
			},
			'A Quag to The Past': {
				species: 'Quagsire', ability: 'Unaware', item: 'Leftovers', gender: 'M',
				moves: ['Recover', 'Toxic', 'Scald'],
				signatureMove: 'Murky Ambush',
				evs: {hp: 252, def: 252, spd: 4}, ivs: {spe: 0}, nature: 'Relaxed',
			},
			'Arcticblast': {
				species: 'Garbodor', ability: 'Mold Breaker', item: 'Choice Band', gender: 'M',
				moves: ['Knock Off', 'Poison Jab', ['Earthquake', 'U-turn']],
				signatureMove: 'Trashalanche',
				evs: {hp: 252, atk: 252, def: 4}, nature: 'Adamant',
			},
			'Arrested': {
				species: 'Blastoise', ability: 'Torrent', item: 'Blastoisinite', gender: 'M',
				moves: ['Muddy Water', 'Ice Beam', 'Slack Off'],
				signatureMove: 'Jail Shell',
				evs: {hp: 252, def: 4, spa: 252}, nature: 'Modest',
			},
			'Arsenal': {
				species: 'Arceus', ability: 'Logia', gender: 'M',
				item: ["Draco Plate", "Dread Plate", "Earth Plate", "Fist Plate", "Flame Plate", "Icicle Plate", "Insect Plate", "Iron Plate", "Meadow Plate", "Mind Plate", "Pixie Plate", "Sky Plate", "Splash Plate", "Spooky Plate", "Stone Plate", "Toxic Plate", "Zap Plate"],
				moves: ['Mimic', 'Stealth Rock', 'Memento'],
				signatureMove: 'Come on you Gunners',
				evs: {hp: 4, spa: 252, spe: 252}, ivs: {hp: 20, def: 20, spd: 20}, nature: 'Naive',
			},
			'Beowulf': {
				species: 'Beedrill', ability: ['Download', 'Speed Boost'], item: 'Beedrillite', gender: 'M',
				moves: ['Spiky Shield', 'Gunk Shot', ['Bolt Strike', 'Diamond Storm', 'Sacred Fire']],
				signatureMove: 'Buzzing of the Swarm',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly',
			},
			'Bhris Brown': {
				species: 'Swampert', ability: 'Damp', item: 'Swampertite', gender: 'M',
				moves: ['Waterfall', 'Ice Punch', 'Earthquake'],
				signatureMove: 'Final Impact',
				evs: {atk: 252, spd: 4, spe: 252}, nature: 'Adamant', shiny: true,
			},
			'biggie': {
				species: 'Snorlax', ability: 'Fur Coat', item: 'Leftovers', gender: 'M',
				moves: ['Diamond Storm', 'Knock Off', ['Drain Punch', 'Precipice Blades']],
				signatureMove: 'Food Rush',
				evs: {hp: 4, atk: 252, spd: 252}, nature: 'Adamant',
			},
			'Bimp': {
				species: 'Stakataka', ability: 'Learn Something New!', item: 'Rockium Z', gender: 'M',
				moves: ['Gyro Ball', 'Stone Edge', 'Earthquake'],
				signatureMove: 'Trivia Room',
				evs: {hp: 248, atk: 252, spd: 8}, ivs: {spe: 0}, nature: 'Brave',
			},
			'bobochan': {
				species: 'Emolga', ability: 'Huge Power', item: 'Choice Band', gender: 'M',
				moves: ['Brave Bird', ['Knock Off', 'Encore'], 'U-Turn'],
				signatureMove: 'Thousand Circuit Overload',
				evs: {atk: 252, spd: 4, spe: 252}, nature: 'Jolly',
			},
			'Brandon': {
				species: 'Shaymin', ability: 'Gracidea Mastery', item: 'Red Card', gender: 'N',
				moves: ['Seed Flare', ['Earth Power', 'Moonblast', 'Psychic'], ['Oblivion Wing', 'Strength Sap']],
				signatureMove: 'Blustery Winds',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: ['Modest', 'Timid'],
			},
			'bumbadadabum': {
				species: 'Slowbro', ability: 'Regenerator', item: 'Leftovers', gender: 'M',
				moves: ['Scald', 'Slack Off', 'Psyshock'],
				signatureMove: 'Wonder Trade',
				evs: {hp: 252, def: 252, spa: 4}, nature: 'Bold',
			},
			'cant say': {
				species: 'Aegislash', ability: 'Stance Change', item: 'Weakness Policy', gender: 'M',
				moves: ['Shift Gear', 'Spectral Thief', 'Sacred Sword'],
				signatureMove: 'a e s t h e t i s l a s h',
				evs: {hp: 32, atk: 252, spd: 4, spe: 220}, nature: 'Jolly',
			},
			'cc': {
				species: 'Cobalion', ability: 'Lurking', item: ['Shuca Berry', 'Chople Berry', 'Fightinium Z'], gender: 'M',
				moves: ['Focus Blast', 'Flash Cannon', ['Thunder', 'Blizzard']],
				signatureMove: 'Restarting Router',
				evs: {def: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Ceteris': {
				species: 'Greninja', ability: 'Protean', item: 'Expert Belt', gender: 'M',
				moves: ['Dark Pulse', 'Origin Pulse', 'Gunk Shot', 'Shadow Sneak'],
				signatureMove: 'Bringer of Darkness',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid', shiny: true,
			},
			'Cerberax': {
				species: 'Wailord', ability: 'Levitate', item: 'Figy Berry', gender: 'F',
				moves: ['Shift Gear', 'Waterfall', 'Recover'],
				signatureMove: 'Blimp Crash',
				evs: {hp: 4, atk: 252, spe: 252}, nature: 'Adamant',
			},
			'chaos': {
				species: 'Bewear', ability: 'Fur Coat', item: 'Red Card', gender: 'M',
				moves: ['Extreme Speed', 'Close Combat', 'Knock Off', ['Swords Dance', 'Recover']],
				signatureMove: 'Forcewin',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Adamant',
			},
			'Chloe': {
				species: 'Tapu Fini', ability: 'Prankster', item: 'Light Clay', gender: 'F',
				moves: ['Fleur Cannon', 'Parting Shot', ['Taunt', 'Topsy Turvy']],
				signatureMove: 'beskyttelsesnet',
				evs: {hp: 248, def: 252, spa: 8}, ivs: {atk: 0}, nature: 'Bold',
			},
			'deg': {
				species: 'Gengar', ability: 'Bad Dreams', item: 'Gengarite', gender: 'M',
				moves: [['Hex', 'Shadow Ball'], 'Sludge Wave', 'Focus Blast'],
				signatureMove: 'Lucid Dreams',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: ['Modest', 'Timid'],
			},
			'DragonWhale': {
				species: 'Garchomp', ability: 'Hustle', item: 'Groundium Z', gender: 'M',
				moves: ['Earthquake', 'Dragon Rush', 'Diamond Storm'],
				signatureMove: 'Earth\'s Blessing',
				evs: {hp: 4, atk: 252, spe: 252}, nature: 'Jolly',
			},
			'duck': {
				species: 'Farfetch\'d', ability: 'Sniper', item: 'Stick', gender: 'M',
				moves: ['Shift Gear', 'Superpower', 'Dragon Ascent'],
				signatureMove: 'Holy Duck!',
				evs: {atk: 252, spd: 4, spe: 252}, nature: 'Jolly',
			},
			'E4 Flint': {
				species: 'Steelix', ability: 'Sturdy', item: 'Magmarizer', gender: 'M',
				moves: ['Sunsteel Strike', 'Thousand Arrows', ['Dragon Tail', 'Knock Off', 'Fire Lash', 'Fire Lash']], // Fire Lash listed twice for 50% chance to get it
				signatureMove: 'Fang of the Fire King',
				evs: {hp: 252, atk: 36, def: 100, spd: 120}, ivs: {spe: 0}, nature: 'Brave',
			},
			'explodingdaisies': {
				species: 'Houndoom', ability: 'Flash Fire', item: 'Houndoominite', gender: 'M',
				moves: ['Sludge Bomb', 'Nasty Plot', 'Dark Pulse'],
				signatureMove: 'DOOM!',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Eien': {
				species: 'Mew', ability: 'Psychic Surge', item: 'Terrain Extender', gender: 'N',
				moves: ['Calm Mind', 'Psychic', 'Psyshock'],
				signatureMove: 'Ancestral Power',
				evs: {hp: 252, spd: 4, spe: 252}, nature: 'Timid',
			},
			'eternally': {
				species: 'Ducklett', ability: 'Primordial Sea', item: 'Eviolite', gender: 'M',
				moves: ['Origin Pulse', 'Hurricane', 'Roost'],
				signatureMove: 'Quack',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'EV': {
				species: 'Eevee', ability: 'Anticipation', item: 'Leftovers', gender: 'M',
				moves: ['Baton Pass', 'Wish', 'Protect'],
				signatureMove: 'Evoblast',
				evs: {hp: 252, spe: 252}, nature: 'Serious',
			},
			'false': {
				species: 'Rayquaza-Mega', ability: 'Infiltrator', item: 'Focus Band', gender: 'F',
				moves: ['Celebrate'],
				signatureMove: 'fr*ck',
				evs: {atk: 252, spe: 252, def: 4}, nature: 'Jolly', shiny: true,
			},
			'FOMG': {
				species: 'Golem', ability: 'Serene Grace', item: 'Astleyium Z', gender: 'M',
				moves: ['Earthquake', 'Explosion', 'Iron Head'],
				signatureMove: 'Rock Slide',
				evs: {hp: 4, atk: 252, spe: 252}, nature: 'Jolly',
			},
			'grimAuxiliatrix': {
				species: 'Aggron', ability: 'Sturdy', item: 'Aggronite', gender: '',
				moves: [['Toxic', 'Stealth Rock'], ['Stone Edge', 'Heat Crash'], 'Earthquake'],
				signatureMove: 'Pain Train',
				evs: {hp: 252, def: 4, spd: 252}, nature: 'Careful',
			},
			'Hippopotas': {
				species: 'Hippopotas', ability: 'Regenerator', item: 'Eviolite', gender: 'N',
				moves: ['Stealth Rock', 'Spikes', 'Toxic Spikes', 'Sticky Web'],
				signatureMove: 'Hazard Pass',
				evs: {hp: 252, def: 252, spd: 4}, ivs: {atk: 0, spa: 0}, nature: 'Bold',
			},
			'Hipster Sigilyph': {
				species: 'Sigilyph', ability: 'Simple', item: 'Focus Sash', gender: 'M',
				moves: ['Oblivion Wing', 'Silver Wind', 'Calm Mind'],
				signatureMove: 'Mainstream Shock',
				evs: {def: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'HoeenHero': {
				species: 'Ludicolo', ability: 'Scripter', item: 'Terrain Extender', gender: 'M',
				moves: [['Hydro Pump', 'Scald'], 'Giga Drain', 'Ice Beam'],
				signatureMove: 'Scripted Terrain',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Modest',
			},
			'Hubriz': {
				species: 'Roserade', ability: 'Merciless', item: 'Focus Sash', gender: 'F',
				moves: ['Toxic Spikes', 'Fleur Cannon', 'Sludge Bomb'],
				signatureMove: 'Flower Tornado',
				evs: {def: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'imas': {
				species: 'Skarmory', ability: 'Prankster', item: 'Sharp Beak', gender: 'M',
				moves: ['Swords Dance', 'Roost', 'Taunt'],
				signatureMove: 'B O I',
				evs: {hp: 252, atk: 252, spe: 4}, nature: 'Adamant',
			},
			'Iyarito': {
				species: 'Vaporeon', ability: 'Poison Heal', item: 'Leftovers', gender: 'F',
				moves: ['Scald', 'Wish', 'Toxic'],
				signatureMove: 'Víbora',
				evs: {hp: 252, def: 220, spd: 36}, nature: 'Bold', shiny: true,
			},
			'jdarden': {
				species: 'Dragonair', ability: 'Fur Coat', item: 'Eviolite', gender: 'M',
				moves: ['Rest', 'Sleep Talk', 'Quiver Dance'],
				signatureMove: 'Wyvern\'s Wail',
				evs: {hp: 248, def: 252, spd: 8}, ivs: {atk: 0}, nature: 'Bold',
			},
			'Kaiju Bunny': {
				species: 'Gligar', ability: 'Immunity', item: 'Eviolite', gender: 'F',
				moves: ['Earthquake', 'Roost', ['Toxic', 'Stealth Rock']],
				signatureMove: 'Beastial Strike',
				evs: {hp: 252, def: 156, spd: 100}, nature: 'Impish',
			},
			'Kalalokki': {
				species: 'Wingull', ability: 'Swift Swim', item: ['Waterium Z', 'Flyinium Z', 'Electrium Z'], gender: 'M',
				moves: ['Water Spout', 'Hurricane', 'Thunder'],
				signatureMove: 'Maelström',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Modest',
			},
			'kay': {
				species: 'Inkay', ability: 'Contrary', item: 'Eviolite', gender: 'M',
				moves: ['Power Trip', 'Rest', 'Sleep Talk'],
				signatureMove: 'Inkzooka',
				evs: {hp: 252, atk: 144, spe: 112}, nature: 'Adamant',
			},
			'KingSwordYT': {
				species: 'Pangoro', ability: 'Kung Fu Panda', item: 'Life Orb', gender: 'M',
				moves: ['Ice Punch', 'Bullet Punch', 'Knock Off'],
				signatureMove: 'Dragon Warrior Touch',
				evs: {atk: 252, hp: 4, spe: 252}, nature: 'Jolly',
			},
			'Level 51': {
				species: 'Porygon2', ability: 'Stamina', item: 'Eviolite', gender: 'N',
				moves: ['Recover', ['Seismic Toss', 'Night Shade'], ['Cosmic Power', 'Aqua Ring']],
				signatureMove: 'Next Level Strats',
				evs: {hp: 236, def: 220, spd: 48, spe: 4}, ivs: {atk: 0}, nature: 'Calm',
			},
			'LifeisDANK': {
				species: 'Delibird', ability: 'Mountaineer', item: 'Focus Sash', gender: 'F',
				moves: ['Ice Shard', 'Return', 'Explosion'],
				signatureMove: 'Bar Fight',
				evs: {hp: 4, atk: 252, spe: 252}, nature: 'Jolly',
			},
			'Lionyx': {
				species: 'Gardevoir', ability: 'Frozen Skin', item: 'Gardevoirite', gender: 'F',
				moves: [['Thunder Wave', 'Will-O-Wisp', 'Toxic', 'Sing'], ['Moonblast', 'Psychic'], 'Calm Mind'],
				signatureMove: 'Let it Go',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid', shiny: true,
			},
			'Lost Seso': {
				species: 'Typhlosion', ability: 'Competitive', item: 'Scope Lens', gender: 'M',
				moves: ['Quiver Dance', 'Teeter Dance', 'Revelation Dance', 'Fiery Dance'],
				signatureMove: 'Shuffle Ramen Dance',
				evs: {def: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid', shiny: true,
			},
			'Lycanium Z': {
				species: 'Keldeo', ability: 'Protean', item: 'Choice Scarf', gender: 'N',
				moves: ['Steam Eruption', 'Secret Sword', ['Frost Breath', 'Power Gem', 'Discharge']],
				signatureMove: 'IP Merge',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid', shiny: true,
			},
			'MacChaeger': {
				species: 'Mantyke', ability: 'Water Veil', item: ['Life Orb', 'Normalium Z'], gender: 'M',
				moves: ['Scald', 'Aeroblast', 'Sleep Talk'],
				signatureMove: 'Nap Time',
				evs: {hp: 248, spa: 84, spe: 176}, ivs: {atk: 0}, nature: 'Modest',
			},
			'MajorBowman': {
				species: 'Victini', ability: 'Victory Star', item: 'Victinium Z', gender: 'M',
				moves: ['Bolt Strike', 'Zen Headbutt', 'U-Turn'],
				signatureMove: 'V-create',
				evs: {hp: 252, atk: 4, spe: 252}, nature: 'Jolly',
			},
			'martha': {
				species: 'Diancie', ability: 'Pixilate', item: 'Diancite', gender: 'F',
				moves: ['Hyper Voice', ['Fire Blast', 'Earth Power'], 'Photon Geyser'],
				signatureMove: 'Crystal Boost',
				evs: {hp: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Marty': {
				species: 'Silvally', ability: 'RKS System', item: 'Normal Gem', gender: 'N',
				moves: ['Parting Shot', 'Explosion', 'Extreme Speed'],
				signatureMove: 'Type Analysis',
				evs: {hp: 4, atk: 252, spe: 252}, nature: 'Jolly',
			},
			'Meicoo': {
				species: 'Pidgeot', ability: 'Prankster', item: 'Pidgeotite', gender: 'M',
				moves: ['Hurricane', 'Inferno', 'Roost'],
				signatureMove: '/scavenges u',
				evs: {def: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Megazard': {
				species: 'Exeggutor-Alola', ability: 'Stand Up Tall', item: 'Leftovers', gender: 'M',
				moves: ['Strength Sap', 'Growth', 'Stockpile'],
				signatureMove: 'Tipping Over',
				evs: {hp: 252, atk: 252, def: 4}, ivs: {spe: 0}, nature: 'Adamant',
			},
			'MicktheSpud': {
				species: 'Lycanroc-Midnight', ability: 'Fake Crash', item: 'Life Orb', gender: 'M', // Changes to Lycanrock-Dusk when ability is triggered
				moves: ['Stone Edge', ['Earthquake', 'High Horsepower'], ['Dragon Dance', 'Swords Dance']],
				signatureMove: 'Cyclone Spin',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly',
			},
			'Mitsuki': {
				species: 'Serperior', ability: 'Contrary', item: 'Leftovers', gender: 'M',
				moves: ['Leech Seed', 'Substitute', ['Earth Power', 'Flamethrower', 'Glare']],
				signatureMove: 'Python Ivy',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'moo': {
				species: 'Miltank', ability: 'Scrappy', item: 'Life Orb', gender: 'M',
				moves: ['Extreme Speed', 'Rapid Spin', 'Close Combat'],
				signatureMove: 'Protein Shake',
				evs: {hp: 252, def: 4, spd: 252}, nature: 'Careful',
			},
			'Morfent ( _̀> ̀)': {
				species: 'Banette', ability: 'Intimidate', item: 'Banettite', gender: 'M',
				moves: ['Shadow Sneak', 'Spectral Thief', 'Drain Punch'],
				signatureMove: 'E',
				evs: {hp: 184, atk: 252, def: 68, spd: 4}, ivs: {spe: 0}, nature: 'Brave',
			},
			'nui': {
				species: 'Milotic', ability: 'Prismatic Terrain', item: 'Waterium Z', gender: 'N',
				moves: ['Steam Eruption', 'Toxic', 'Recover'],
				signatureMove: 'Pyramiding Song',
				evs: {hp: 252, def: 252, spd: 4}, ivs: {atk: 0}, nature: 'Bold', shiny: true,
			},
			'OM': {
				species: 'Flareon', ability: 'Pixilate', item: 'Metronome', gender: 'M',
				moves: ['Fake Out', 'Thousand Arrows', 'Extreme Speed'],
				signatureMove: 'OM Boom',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Adamant',
			},
			'Osiris': {
				species: 'Pumpkaboo-Super', ability: 'Sacred Shadow', item: 'Eviolite', gender: 'M',
				moves: ['Leech Seed', 'Will-O-Wisp', 'Seed Bomb'],
				signatureMove: 'Night March',
				evs: {hp: 252, atk: 144, spd: 112}, nature: 'Adamant', shiny: true,
			},
			'Overneat': {
				species: 'Sylveon', ability: 'Fairy Aura', item: 'Life Orb', gender: 'F',
				moves: ['Nasty Plot', 'Psyshock', 'Earth Power'],
				signatureMove: 'Total Leech',
				evs: {def: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Paradise': {
				species: 'Muk', ability: 'Unaware', item: 'Black Sludge', gender: '',
				moves: ['Wish', 'Knock Off', 'Protect'],
				signatureMove: 'Corrosive Toxic',
				evs: {hp: 252, def: 4, spd: 252}, nature: 'Careful',
			},
			'pluviometer': {
				species: 'Mismagius', ability: 'Sheer Force', item: 'Life Orb', gender: '',
				moves: ['Taunt', 'Moonblast', ['Mystical Fire', 'Earth Power']],
				signatureMove: 'Grammar Hammer',
				evs: {hp: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'ptoad': {
				species: 'Politoed', ability: 'Fat Rain', item: 'Damp Rock', gender: 'M',
				moves: ['Scald', 'Toxic', 'Ice Beam'],
				signatureMove: 'Lilypad Shield',
				evs: {hp: 252, def: 60, spd: 196}, ivs: {atk: 0}, nature: 'Calm',
			},
			'Quite Quiet': {
				species: 'Misdreavus', ability: 'Levitate', item: 'Leftovers', gender: 'F',
				moves: [['Moongeist Beam', 'Shadow Ball', 'Night Shade'], 'Recover', ['Heal Bell', 'Encore', 'Taunt', 'Swagger']],
				signatureMove: 'Literally Cheating',
				evs: {hp: 252, def: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Rory Mercury': {
				species: 'Charjabug', ability: 'Recharge', item: ['Occa Berry', 'Ganlon Berry'], gender: 'M',
				moves: ['Zing Zap', ['Leech Life', 'Lunge'], 'Natural Gift'],
				signatureMove: 'Scavenge',
				evs: {hp: 248, atk: 252, def: 8}, ivs: {spe: 0}, nature: 'Brave',
			},
			'Saburo': {
				species: 'Metagross', ability: 'Levitate', item: 'Metagrossite', gender: 'M',
				moves: ['Psychic Fangs', 'Iron Head', ['Earthquake', 'Ice Punch']],
				signatureMove: 'Soulbend',
				evs: {hp: 184, atk: 148, spe: 176}, nature: 'Jolly', shiny: true,
			},
			'SamJo': {
				species: 'Mamoswine', ability: 'Thiccer Fat', item: 'Thiccinium Z', gender: '',
				moves: ['Icicle Crash', 'Precipice Blades', ['Ice Shard', 'Superpower', 'Stone Edge', 'Knock Off']],
				signatureMove: 'Thicc',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly',
			},
			'Scotteh': {
				species: 'Suicune', ability: 'Fur Coat', item: 'Leftovers', gender: 'M',
				moves: ['Nasty Plot', 'Ice Beam', 'Scald', 'Recover'],
				signatureMove: 'Geomagnetic Storm',
				evs: {def: 252, spa: 4, spe: 252}, nature: 'Bold',
			},
			'Shiba': {
				species: 'Fletchinder', ability: 'Gale Wings 1.0', item: 'Eviolite', gender: 'F',
				moves: ['Dragon Ascent', 'Sacred Fire', 'Roost'],
				signatureMove: 'GO INDA',
				evs: {atk: 252, hp: 248, spe: 8}, nature: 'Adamant',
			},
			'Slowbroth': {
				species: 'Beheeyem', ability: 'Psychic Surge', item: 'Psychium Z', gender: 'M',
				moves: ['Nasty Plot', 'Psystrike', ['Aura Sphere', 'Earth Power', 'Shadow Ball']],
				signatureMove: 'Alien Wave',
				evs: {hp: 248, spa: 252, spd: 8}, ivs: {atk: 0, spe: 0}, nature: 'Quiet',
			},
			'Snaquaza': {
				species: 'Honchkrow', ability: 'Illusion', item: 'Fakeclaimium Z', gender: 'M',
				moves: ['Superpower', 'Sucker Punch', ['Flamethrower', 'Ice Beam', 'Thunderbolt']],
				signatureMove: 'Brave Bird',
				nature: 'Serious',
			},
			'SunGodVolcarona': {
				species: 'Volcarona', ability: 'Solar Flare', item: 'Volcaronium Z', gender: 'M',
				moves: ['Quiver Dance', 'Giga Drain', ['Earth Power', 'Psychic']],
				signatureMove: 'Fiery Dance',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Teclis': {
				species: 'Gallade', ability: 'Intimidate', item: 'Galladite', gender: 'M',
				moves: ['Sacred Sword', 'Psycho Cut', 'Knock Off'],
				signatureMove: 'Zekken',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly', shiny: true,
			},
			'tennisace': {
				species: 'Raikou', ability: 'Levitate', item: 'Life Orb', gender: 'M',
				moves: ['Volt Switch', 'Shadow Ball', 'Aura Sphere'],
				signatureMove: 'Ground Surge',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Teremiare': {
				species: 'Zorua', ability: 'Not Prankster', item: 'Eject Button', gender: 'N',
				moves: ['Encore', 'Taunt', 'Lunar Dance'],
				signatureMove: 'No Fun Zone',
				evs: {hp: 252, def: 136, spd: 120}, ivs: {atk: 0}, nature: 'Bold', shiny: true,
			},
			'The Immortal': {
				species: 'Buzzwole', ability: 'Beast Boost 2', item: 'Assault Vest', gender: 'N', // confirm with TI
				moves: ['Leech Life', 'Plasma Fists', 'Ice Punch'],
				signatureMove: 'Ultra Succ',
				evs: {hp: 252, atk: 252, spd: 4}, nature: 'Adamant',
			},
			'The Leprechaun': {
				species: 'Bronzong', ability: 'Steelworker', item: 'Life Orb', gender: 'N',
				moves: ['Photon Geyser', 'Precipice Blades', 'Diamond Storm'],
				signatureMove: 'Gyro Ballin\'',
				evs: {hp: 252, atk: 252, def: 4}, ivs: {spe: 0}, nature: 'Brave', shiny: true,
			},
			'Tiksi': {
				species: 'Cradily', ability: 'Sand Stream', item: 'Tiksium Z', gender: 'M',
				moves: ['Shore Up', 'Horn Leech', 'Curse'],
				signatureMove: 'Rock Slide', // Base move for custom Z-move
				evs: {hp: 252, atk: 252, spd: 4}, nature: 'Adamant',
			},
			'torkool': {
				species: 'Torkoal', ability: 'Deflective Shell', item: 'Leftovers', gender: 'M',
				moves: ['Morning Sun', ['Lava Plume', 'Magma Storm'], 'Toxic'],
				signatureMove: 'Smoke Bomb',
				evs: {hp: 248, spa: 8, spd: 252}, nature: 'Calm',
			},
			'Trickster': {
				species: 'Hoopa', ability: 'Interdimensional', item: 'Life Orb', gender: 'M',
				moves: ['Inferno', 'Zap Cannon', ['Roost', 'Grasswhistle']],
				signatureMove: 'Mini Singularity',
				evs: {hp: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'UnleashOurPassion': {
				species: 'Stunfisk', ability: 'Teravolt', item: 'Lum Berry', gender: 'M',
				moves: ['Earth Power', 'Shore Up', ['Surf', 'Giga Drain', 'Stealth Rock']],
				signatureMove: 'Continuous 1v1',
				evs: {hp: 252, spa: 200, spd: 56}, ivs: {atk: 0}, nature: 'Modest',
			},
			'urkerab': {
				species: 'Muk-Alola', ability: 'Focus Energy', item: 'Air Balloon', gender: 'M',
				moves: ['Night Slash', 'Drill Run', 'Cross Poison'],
				signatureMove: 'Holy Orders',
				evs: {hp: 248, atk: 100, def: 136, spd: 24}, nature: 'Impish',
			},
			'Uselesscrab': {
				species: 'Kyurem-Black', ability: 'Teravolt', item: 'Nichium Z', gender: 'M',
				moves: ['Dragon Hammer', 'Plasma Fists', 'Taunt'],
				signatureMove: 'Icicle Crash',
				evs: {hp: 252, atk: 252, spe: 4}, nature: 'Adamant', shiny: true,
			},
			'Volco': {
				species: 'Volcanion', ability: 'Unaware', item: 'Assault Vest', gender: 'M',
				moves: ["Steam Eruption", "Giga Drain", ["Ice Beam", "Ice Beam", "Earth Power"]],
				signatureMove: 'Explosive Drain',
				evs: {hp: 248, spa: 252, spd: 8}, ivs: {atk: 0}, nature: 'Modest',
			},
			'Yuki': {
				species: 'Ninetales-Alola', ability: 'Snow Storm', item: 'Focus Sash', gender: 'F',
				moves: ['Blizzard', 'Moonblast', 'Aurora Veil'],
				signatureMove: 'Cutie Escape',
				evs: {hp: 4, spa: 252, spe: 252}, nature: 'Timid',
			},
			'Xayahh': {
				species: 'Noivern', ability: 'Dancer', item: 'Flyinium Z', gender: 'F',
				moves: ['Clanging Scales', 'Roost', 'Glare'],
				signatureMove: 'Cutting Dance',
				evs: {spa: 252, spd: 4, spe: 252}, nature: 'Timid',
			},
			'XpRienzo ☑◡☑': {
				species: 'Reshiram', ability: 'Turboblaze', item: 'Charcoal', gender: 'M',
				moves: ['Core Enforcer', 'Volt Switch', 'Psystrike'],
				signatureMove: 'Bleh Flame',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {hp: 24, def: 25, spd: 20}, nature: 'Timid',
			},
			'Zarel': {
				species: 'Meloetta', ability: 'Serene Grace', item: '', gender: 'M',
				moves: ['Lunar Dance', 'Fiery Dance', 'Perish Song', 'Petal Dance', 'Quiver Dance'],
				signatureMove: 'Relic Song Dance',
				evs: {hp: 4, atk: 252, spa: 252}, nature: 'Quiet',
			},
		};
		let pool = Object.keys(sets);
		/** @type {{[type: string]: number}} */
		let typePool = {};
		while (pool.length && team.length < 6) {
			let name = '';
			// DEBUG CODE
			let debug = false; // Programmers - Toggle this to use the code below
			if (team.length === 1 && debug) {
				// Force a specific set to appear for testing
				name = 'A Quag to The Past';
				if (pool.indexOf(name) > -1) {
					pool.splice(pool.indexOf(name), 1);
				} else {
					// Was already picked
					name = this.sampleNoReplace(pool);
				}
			} else {
				name = this.sampleNoReplace(pool);
			}
			let ssbSet = sets[name];
			// Enforce typing limits
			let types = this.getTemplate(ssbSet.species).types;
			if (name === 'E4 Flint') types = ["Steel", "Ground", "Fire"];
			if (name === 'OM') types = ["Fire", "Fairy"];
			let rejected = false;
			for (let type of types) {
				if (typePool[type] === undefined) typePool[type] = 0;
				if (typePool[type] >= 3) {
					// Reject
					rejected = true;
					break;
				}
			}
			if (rejected) continue;
			// Update type counts
			for (let type of types) {
				typePool[type]++;
			}
			/** @type {PokemonSet} */
			let set = {
				name: name,
				species: ssbSet.species,
				item: Array.isArray(ssbSet.item) ? this.sampleNoReplace(ssbSet.item) : ssbSet.item,
				ability: Array.isArray(ssbSet.ability) ? this.sampleNoReplace(ssbSet.ability) : ssbSet.ability,
				moves: [],
				nature: Array.isArray(ssbSet.nature) ? this.sampleNoReplace(ssbSet.nature) : ssbSet.nature,
				gender: ssbSet.gender,
				evs: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
				level: ssbSet.level || 100,
				shiny: ssbSet.shiny,
			};
			if (ssbSet.ivs) {
				for (let iv in ssbSet.ivs) {
					// IVs from the set override the default of 31, assume the hardcoded IVs are legal
					// @ts-ignore StatsTable has no index signature
					set.ivs[iv] = ssbSet.ivs[iv];
				}
			}
			if (ssbSet.evs) {
				for (let ev in ssbSet.evs) {
					// EVs from the set override the default of 0, assume the hardcoded EVs are legal
					// @ts-ignore StatsTable has no index signature
					set.evs[ev] = ssbSet.evs[ev];
				}
			} else {
				set.evs = {hp: 82, atk: 82, def: 82, spa: 82, spd: 82, spe: 82};
			}
			while (set.moves.length < 3 && ssbSet.moves.length > 0) {
				let move = this.sampleNoReplace(ssbSet.moves);
				if (Array.isArray(move)) move = this.sampleNoReplace(move);
				set.moves.push(move);
			}
			set.moves.push(ssbSet.signatureMove);
			team.push(set);
		}
		return team;
	}
}

module.exports = RandomStaffBrosTeams;
