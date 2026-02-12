// src/data/mockData.js

import { version } from "react";

export const TIERS_DATA = {
  ubers: {
    title: "Ubers",
    description: "El olimpo de los Pokemon. Solo las bestias mas poderosas habitan aqui.",
    pokemon: [
      { id: 979, name: "Annihilape", types: ["Lucha", "Fantasma"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/annihilape.png" },
      { id: 493, name: "Arceus", types: ["Normal"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/arceus.png" },
      { id: 998, name: "Baxcalibur", types: ["Dragon", "Hielo"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/baxcalibur.png" },
      { id: 898, name: "Calyrex (Jinete Glacial)", types: ["Psiquico", "Hielo"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/calyrex-ice.png" },
      { id: 1004, name: "Chi-Yu", types: ["Siniestro", "Fuego"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/chiyu.png" },
      { id: 1002, name: "Chien-Pao", types: ["Siniestro", "Hielo"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/chienpao.png" },
      { id: 386, name: "Deoxys (Ataque)", types: ["Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/deoxys-attack.png" },
      { id: 483, name: "Dialga", types: ["Acero", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/dialga.png" },
      { id: 483, name: "Dialga (Origen)", types: ["Acero", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/dialga-origin.png" },
      { id: 1020, name: "Flamariete", types: ["Fuego", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/gougingfire.png" },
      { id: 956, name: "Espathra", types: ["Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/espathra.png" },
      { id: 890, name: "Eternatus", types: ["Veneno", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/eternatus.png" },
      { id: 987, name: "Melenalete", types: ["Fantasma", "Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/fluttermane.png" },
      { id: 487, name: "Giratina", types: ["Fantasma", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/giratina.png" },
      { id: 487, name: "Giratina (Origen)", types: ["Fantasma", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/giratina-origin.png" },
      { id: 383, name: "Groudon", types: ["Tierra"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/groudon.png" },
      { id: 250, name: "Ho-Oh", types: ["Fuego", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/hooh.png" },
      { id: 991, name: "Ferrosaco", types: ["Hielo", "Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ironbundle.png" },
      { id: 1007, name: "Koraidon", types: ["Lucha", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/koraidon.png" },
      { id: 382, name: "Kyogre", types: ["Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/kyogre.png" },
      { id: 646, name: "Kyurem Negro", types: ["Dragon", "Hielo"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/kyurem-black.png" },
      { id: 645, name: "Landorus", types: ["Tierra", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/landorus.png" },
      { id: 792, name: "Lunala", types: ["Psiquico", "Fantasma"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/lunala.png" },
      { id: 801, name: "Magearna", types: ["Acero", "Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/magearna.png" },
      { id: 150, name: "Mewtwo", types: ["Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/mewtwo.png" },
      { id: 800, name: "Necrozma (Melena Crepuscular)", types: ["Psiquico", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/necrozma-duskmane.png" },
      { id: 1017, name: "Ogerpon (Mascara Hornilla)", types: ["Planta", "Fuego"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-hearthflame.png" },
      { id: 964, name: "Palafin", types: ["Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/palafin.png" },
      { id: 484, name: "Palkia", types: ["Agua", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/palkia.png" },
      { id: 484, name: "Palkia (Origen)", types: ["Agua", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/palkia-origin.png" },
      { id: 384, name: "Rayquaza", types: ["Dragon", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/rayquaza.png" },
      { id: 894, name: "Regieleki", types: ["Electrico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/regieleki.png" },
      { id: 1005, name: "Bramaluna", types: ["Dragon", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/roaringmoon.png" },
      { id: 492, name: "Shaymin (Cielo)", types: ["Planta", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/shaymin-sky.png" },
      { id: 897, name: "Spectrier", types: ["Fantasma"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/spectrier.png" },
      { id: 1024, name: "Terapagos", types: ["Normal"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/terapagos.png" },
      { id: 901, name: "Ursaluna (Luna Carmesi)", types: ["Tierra", "Normal"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ursaluna-bloodmoon.png" },
      { id: 892, name: "Urshifu (Estilo Brusco)", types: ["Lucha", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/urshifu.png" },
      { id: 892, name: "Urshifu (Estilo Fluido)", types: ["Lucha", "Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/urshifu-rapidstrike.png" },
      { id: 637, name: "Volcarona", types: ["Bicho", "Fuego"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/volcarona.png" },
      { id: 888, name: "Zacian", types: ["Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/zacian.png" },
      { id: 888, name: "Zacian (Espada Suprema)", types: ["Hada", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/zacian-crowned.png" },
      { id: 889, name: "Zamazenta (Escudo Supremo)", types: ["Lucha", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/zamazenta-crowned.png" },
      { id: 644, name: "Zekrom", types: ["Dragon", "Electrico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/zekrom.png" }
    ]
  },
  ou: {
    title: "Overused (OU)",
    description: "El estandar competitivo. Aqui se define el meta principal e incluye a los exiliados de UU (UUBL).",
    pokemon: [
      { id: 984, name: "Colmillolargo", types: ["Tierra", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/greattusk.png" },
      { id: 983, name: "Kingambit", types: ["Siniestro", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/kingambit.png" },
      { id: 1000, name: "Gholdengo", types: ["Acero", "Fantasma"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/gholdengo.png" },
      { id: 1021, name: "Electrofuria", types: ["Electrico", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ragingbolt.png" },
      { id: 887, name: "Dragapult", types: ["Dragon", "Fantasma"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/dragapult.png" },
      { id: 1018, name: "Archaludon", types: ["Acero", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/archaludon.png" },
      { id: 998, name: "Ferropaladin", types: ["Hada", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ironvaliant.png" },
      { id: 1017, name: "Ogerpon (Mascara Fuente)", types: ["Planta", "Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-wellspring.png" },
      { id: 889, name: "Zamazenta", types: ["Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/zamazenta.png" },
      { id: 491, name: "Darkrai", types: ["Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/darkrai.png" },
      { id: 645, name: "Landorus (Totem)", types: ["Tierra", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/landorus-therian.png" },
      { id: 472, name: "Gliscor", types: ["Tierra", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/gliscor.png" },
      { id: 646, name: "Kyurem", types: ["Dragon", "Hielo"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/kyurem.png" },
      { id: 386, name: "Deoxys (Velocidad)", types: ["Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/deoxys-speed.png" },
      { id: 1005, name: "Bramaluna", types: ["Dragon", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/roaringmoon.png" },
      { id: 1023, name: "Ferrotesta", types: ["Acero", "Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ironcrown.png" },
      { id: 149, name: "Dragonite", types: ["Dragon", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/dragonite.png" },
      { id: 993, name: "Ferropolilla", types: ["Fuego", "Veneno"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ironmoth.png" },
      { id: 1003, name: "Ting-Lu", types: ["Siniestro", "Tierra"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/tinglu.png" },
      { id: 892, name: "Urshifu (Estilo Fluido)", types: ["Lucha", "Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/urshifu-rapidstrike.png" },
      { id: 969, name: "Glimmora", types: ["Roca", "Veneno"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/glimmora.png" },
      { id: 730, name: "Primarina", types: ["Agua", "Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/primarina.png" },
      { id: 815, name: "Cinderace", types: ["Fuego"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/cinderace.png" },
      { id: 812, name: "Rillaboom", types: ["Planta"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/rillaboom.png" },
      { id: 823, name: "Corviknight", types: ["Volador", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/corviknight.png" },
      { id: 594, name: "Alomomola", types: ["Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/alomomola.png" },
      { id: 497, name: "Serperior", types: ["Planta"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/serperior.png" },
      { id: 503, name: "Samurott de Hisui", types: ["Agua", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/samurott-hisui.png" },
      { id: 727, name: "Incineroar", types: ["Fuego", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/incineroar.png" },
      { id: 978, name: "Tatsugiri", types: ["Dragon", "Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/tatsugiri.png" },

      { id: 257, name: "Blaziken", types: ["Fuego", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/blaziken.png" },
      { id: 445, name: "Garchomp", types: ["Dragon", "Tierra"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/garchomp.png" },
      { id: 720, name: "Hoopa (Desatado)", types: ["Psiquico", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/hoopa-unbound.png" },
      { id: 1022, name: "Ferromole", types: ["Roca", "Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ironboulder.png" },
      { id: 992, name: "Ferropalmas", types: ["Lucha", "Electrico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ironhands.png" },
      { id: 784, name: "Kommo-o", types: ["Dragon", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/kommoo.png" },
      { id: 380, name: "Latias", types: ["Dragon", "Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/latias.png" },
      { id: 908, name: "Meowscarada", types: ["Planta", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/meowscarada.png" },
      { id: 146, name: "Moltres de Galar", types: ["Siniestro", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/moltres-galar.png" },
      { id: 1017, name: "Ogerpon (Mascara Cimiento)", types: ["Planta", "Roca"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-cornerstone.png" },
      { id: 1014, name: "Okidogi", types: ["Veneno", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/okidogi.png" },
      { id: 279, name: "Pelipper", types: ["Agua", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/pelipper.png" },
      { id: 854, name: "Polteageist", types: ["Fantasma"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/polteageist.png" },
      { id: 914, name: "Quaquaval", types: ["Agua", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/quaquaval.png" },
      { id: 901, name: "Ursaluna", types: ["Tierra", "Normal"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ursaluna.png" },
      { id: 893, name: "Zarude", types: ["Siniestro", "Planta"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/zarude.png" }
    ]
  },

  uu: {
    title: "Underused (UU)",
    description: "Pokemon fuertes que no encajan en el top meta, pero son amenazas serias. Incluye a los exiliados de RU (RUBL).",
    pokemon: [
      { id: 381, name: "Latios", types: ["Dragon", "Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/latios.png" },
      { id: 212, name: "Scizor", types: ["Bicho", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/scizor.png" },
      { id: 658, name: "Greninja", types: ["Agua", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/greninja.png" },
      { id: 376, name: "Metagross", types: ["Acero", "Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/metagross.png" },
      { id: 530, name: "Excadrill", types: ["Tierra", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/excadrill.png" },
      { id: 1011, name: "Hydrapple", types: ["Planta", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/hydrapple.png" },
      { id: 920, name: "Lokix", types: ["Bicho", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/lokix.png" },
      { id: 450, name: "Hippowdon", types: ["Tierra"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/hippowdon.png" },
      { id: 1014, name: "Fezandipiti", types: ["Veneno", "Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/fezandipiti.png" },
      { id: 994, name: "Ferrocuello", types: ["Siniestro", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ironjugulis.png" },
      { id: 957, name: "Tinkaton", types: ["Hada", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/tinkaton.png" },
      { id: 752, name: "Araquanid", types: ["Agua", "Bicho"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/araquanid.png" },
      { id: 647, name: "Keldeo", types: ["Agua", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/keldeo.png" },
      { id: 184, name: "Azumarill", types: ["Agua", "Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/azumarill.png" },
      { id: 642, name: "Thundurus (Totem)", types: ["Electrico", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/thundurus-therian.png" },
      { id: 1012, name: "Sinistcha", types: ["Planta", "Fantasma"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/sinistcha.png" },
      { id: 989, name: "Pelarena", types: ["Electrico", "Tierra"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/sandyshocks.png" },
      { id: 227, name: "Skarmory", types: ["Acero", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/skarmory.png" },
      { id: 199, name: "Slowking", types: ["Agua", "Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/slowking.png" },
      { id: 988, name: "Reptalada", types: ["Bicho", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/slitherwing.png" },
      { id: 479, name: "Rotom (Lavado)", types: ["Electrico", "Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/rotom-wash.png" },
      { id: 638, name: "Cobalion", types: ["Acero", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/cobalion.png" },
      { id: 145, name: "Zapdos de Galar", types: ["Lucha", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/zapdos-galar.png" },

      { id: 373, name: "Salamence", types: ["Dragon", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/salamence.png" },
      { id: 635, name: "Hydreigon", types: ["Siniestro", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/hydreigon.png" },
      { id: 721, name: "Volcanion", types: ["Fuego", "Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/volcanion.png" },
      { id: 130, name: "Gyarados", types: ["Agua", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/gyarados.png" },
      { id: 612, name: "Haxorus", types: ["Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/haxorus.png" },
      { id: 473, name: "Mamoswine", types: ["Hielo", "Tierra"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/mamoswine.png" },
      { id: 1010, name: "Ferroverdor", types: ["Planta", "Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ironleaves.png" },
      { id: 905, name: "Enamorus (Totem)", types: ["Hada", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/enamorus-therian.png" },
      { id: 701, name: "Hawlucha", types: ["Lucha", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/hawlucha.png" },
      { id: 9, name: "Blastoise", types: ["Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/blastoise.png" },
      { id: 571, name: "Zoroark de Hisui", types: ["Normal", "Fantasma"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/zoroark-hisui.png" },
      { id: 549, name: "Lilligant de Hisui", types: ["Planta", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/lilligant-hisui.png" },
      { id: 741, name: "Oricorio (Animado)", types: ["Electrico", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/oricorio-pompom.png" },
      { id: 469, name: "Yanmega", types: ["Bicho", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/yanmega.png" },
      { id: 764, name: "Comfey", types: ["Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/comfey.png" }
    ]
  },

  ru: {
    title: "Rarelyused (RU)",
    description: "El punto medio. Estrategias solidas con Pokemon menos convencionales. Incluye a los exiliados de NU (NUBL).",
    pokemon: [
      { id: 242, name: "Blissey", types: ["Normal"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/blissey.png" },
      { id: 625, name: "Bisharp", types: ["Siniestro", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/bisharp.png" },
      { id: 450, name: "Hippowdon", types: ["Tierra"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/hippowdon.png" },
      { id: 652, name: "Chesnaught", types: ["Planta", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/chesnaught.png" },
      { id: 475, name: "Gallade", types: ["Psiquico", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/gallade.png" },
      { id: 282, name: "Gardevoir", types: ["Psiquico", "Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/gardevoir.png" },
      { id: 967, name: "Cyclizar", types: ["Dragon", "Normal"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/cyclizar.png" },
      { id: 936, name: "Armarouge", types: ["Fuego", "Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/armarouge.png" },
      { id: 902, name: "Basculegion (H)", types: ["Agua", "Fantasma"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/basculegion-f.png" },
      { id: 395, name: "Empoleon", types: ["Agua", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/empoleon.png" },
      { id: 244, name: "Entei", types: ["Fuego"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/entei.png" },
      { id: 462, name: "Magnezone", types: ["Electrico", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/magnezone.png" },
      { id: 778, name: "Mimikyu", types: ["Fantasma", "Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/mimikyu.png" },
      { id: 715, name: "Noivern", types: ["Volador", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/noivern.png" },
      { id: 245, name: "Suicune", types: ["Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/suicune.png" },
      { id: 663, name: "Talonflame", types: ["Fuego", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/talonflame.png" },
      { id: 553, name: "Krookodile", types: ["Tierra", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/krookodile.png" },
      { id: 197, name: "Umbreon", types: ["Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/umbreon.png" },
      { id: 925, name: "Maushold", types: ["Normal"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/maushold.png" },
      { id: 900, name: "Kleavor", types: ["Bicho", "Roca"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/kleavor.png" },
      { id: 151, name: "Mew", types: ["Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/mew.png" },
      { id: 342, name: "Crawdaunt", types: ["Agua", "Siniestro"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/crawdaunt.png" },
      { id: 205, name: "Forretress", types: ["Bicho", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/forretress.png" },
      { id: 719, name: "Diancie", types: ["Roca", "Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/diancie.png" },
      { id: 385, name: "Jirachi", types: ["Acero", "Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/jirachi.png" },
      { id: 706, name: "Goodra de Hisui", types: ["Acero", "Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/goodra-hisui.png" },
      { id: 745, name: "Lycanroc (Crepuscular)", types: ["Roca"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/lycanroc-dusk.png" },
      { id: 1014, name: "Fezandipiti", types: ["Veneno", "Hada"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/fezandipiti.png" },

      { id: 639, name: "Terrakion", types: ["Roca", "Lucha"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/terrakion.png" },
      { id: 386, name: "Deoxys (Defensa)", types: ["Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/deoxys-defense.png" },
      { id: 488, name: "Cresselia", types: ["Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/cresselia.png" },
      { id: 160, name: "Feraligatr", types: ["Agua"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/feraligatr.png" },
      { id: 91, name: "Cloyster", types: ["Agua", "Hielo"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/cloyster.png" },
      { id: 482, name: "Azelf", types: ["Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/azelf.png" },
      { id: 800, name: "Necrozma", types: ["Psiquico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/necrozma.png" },
      { id: 995, name: "Ferropuas", types: ["Roca", "Electrico"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/ironthorns.png" },
      { id: 895, name: "Regidrago", types: ["Dragon"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/regidrago.png" },
      { id: 448, name: "Lucario", types: ["Lucha", "Acero"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/lucario.png" },
      { id: 975, name: "Cetitan", types: ["Hielo"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/cetitan.png" },
      { id: 741, name: "Oricorio (Placido)", types: ["Fantasma", "Volador"], sprite: "https://play.pokemonshowdown.com/sprites/gen5/oricorio-sensu.png" }
    ]
  }  
};
export const POKEMON_BUILDS = {
  "colmillolargo": [
    {
      item: "Botas de Suela Dura",
      ability: "Paleosíntesis",
      nature: "Alegre",
      evs: "252 Ata / 4 Def / 252 Vel",
      moves: ["Arremetida", "A bocajarro", "Giro Rápido", "Pirueta Helada"],
      teraType: "Agua"
    }
  ],
  "kingambit": [
    {
      item: "Globo Helio",
      ability: "General Supremo",
      nature: "Firme",
      evs: "252 PS / 252 Ata / 4 Def",
      moves: ["Genufendiente", "Golpe Bajo", "Cabeza de Hierro", "Danza Espada"],
      teraType: "Fantasma"
    }
  ],
  "gholdengo": [
    {
      item: "Globo Helio",
      ability: "Cuerpo Áureo",
      nature: "Miedosa",
      evs: "252 SpA / 4 SpD / 252 Vel",
      moves: ["Fiebre Dorada", "Bola Sombra", "Brillo Mágico", "Recuperación"],
      teraType: "Acero"
    }
  ],
  "electrofuria": [
    {
      item: "Restos",
      ability: "Paleosíntesis",
      nature: "Modesta",
      evs: "252 PS / 252 SpA / 4 SpD",
      moves: ["Electroclima", "Pulso Dragón", "Voltiocambio", "Paz Mental"],
      teraType: "Eléctrico"
    }
  ],
  "dragapult": [
    {
      item: "Cinta Elección",
      ability: "Cuerpo Puro",
      nature: "Alegre",
      evs: "252 Ata / 4 Def / 252 Vel",
      moves: ["Draco-Flechas", "Golpe Fantasma", "Ida y Vuelta", "Golpe Bajo"],
      teraType: "Dragón"
    }
  ],
  "gliscor": [
    {
      item: "Toxisfera",
      ability: "Antídoto",
      nature: "Agitada",
      evs: "252 PS / 184 Def / 72 Vel",
      moves: ["Terremoto", "Protección", "Tóxico", "Púas / Trampa rocas"],
      teraType: "Agua"
    }
  ],
  "garchomp": [
    {
      version: "Defensivo físico",
      item: "Casco dentado",
      ability: "Piel tosca",
      nature: "Agitada",
      evs: "252 PS / 4 Ata / 252 Def",
      moves: ["Terremoto", "Cola dragón", "Trampa rocas", "Púas"],
      teraType: "Acero"
    },
    {
      version: "Atacante físico",
      item: "Dado trucado",
      ability: "Piel tosca",
      nature: "Alegre",
      evs: "252 Ata / 4 Def / 252 Vel",
      moves: ["Terremoto", "Ráfaga escamas", "Danza espada", "Colmillo ígneo"],
      teraType: "Dragón / Tierra"
    }
  ]
};