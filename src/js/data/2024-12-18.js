dataSetVersion = "2024-12-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
        { name: "2nd Generation", key: "2gen" },
        { name: "3rd Generation", key: "3gen" },
        { name: "4th Generation", key: "4gen" },
        { name: "1st Gen Graduates", key: "1grad", checked: false },
        { name: "2nd Gen Graduates", key: "2grad", checked: false },
    ]
  },
  // {
  //   name: "Filter Activity Status",
  //   key: "activity_status",
  //   tooltip: "Check this to restrict members by activity status.",
  //   checked: true,
  //   sub: [
	// 	{ name: "Active Member", tooltip: "Member who currently active as member", key: "active", tooltip: "Only currently active members", checked: true },
	// 	{ name: "Graduated", tooltip: "Member who already graduated", key: "graduated", tooltip: "Graduated member(s)", checked: false }
  //   ]
  // }
  
  /*,
	{
		name: "Filter by Single",
		key: "single",
		tooltip: "Select this to restrict to sort Singles.",
		checked: false,
		sub:
		[
			{ name: "1st - 25th Single", key: "singles" }
		]
	},
	{
		name: "Filter by Single (embed BETA)",
		key: "sembed",
		tooltip: "Select this to restric to sort Singles with song samples.",
		checked: false,
		sub:
		[
			{ name: "1st - 25th Single", key: "sembeds" }
		]
	}
	*/
	/*,
  {
    name: "Filter by Year/Single",
    key: "single",
    tooltip: "Check this to restrict to certain singles.",
    checked: false,
    sub: 
		[
      { name: "1st generation", key: "1gen" },
      { name: "2nd generation", key: "2gen" },
      { name: "3rd generation", key: "3gen" },
      { name: "4th generation", key: "4gen" },
    ]
  },
  {
    name: "Filter by Member",
    key: "indivd",
    tooltip: "Check this to restrict to certain members.",
    checked: false,
    sub: [
      { name: "Suzuki Ayane", key: "ayamine" }
    ]
  }*/
];

dataSet[dataSetVersion].characterData = [
  // 1st gen
  
  {
    name: "Uemura Rina",
    img: "akb48/images/4/42/Uemura_Rina_S46_Oct_2024.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/uemura-rina/",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Ozeki Rika",
    img: "akb48/images/9/93/Ozeki_Rika_As_you_know.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/ozeki-rika/",
    opts: {
      groups: ["1grad"],
    }
  },
  {
    name: "Koike Minami",
    img: "akb48/images/7/7c/Koike_Minami_S46_Feb_2025.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/koike-minami/",
    opts: {
      groups: ["1grad"],
    }
  },
  {
    name: "Kobayashi Yui",
    img: "akb48/images/0/0e/Kobayashi_Yui_Sakurazaka46_October_2023.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/kobayashi-yui/",
    opts: {
      groups: ["1grad"],
    }
  },
  {
    name: "Saito Fuyuka",
    img: "akb48/images/0/01/Saito_Fuyuka_S46_Oct_2024.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/saito-fuyuka/",
    opts: {
      groups: ["1grad"],
    }
  },
  {
    name: "Sugai Yuuka",
    img: "akb48/images/4/41/Sugai_Yuuka_As_you_know.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/sugai-yuuka/",
    opts: {
      groups: ["1grad"],
    }
  },
  {
    name: "Habu Mizuho",
    img: "akb48/images/7/7b/Habu_Mizuho_Sakurazaka46_October_2023.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/habu-mizuho/",
    opts: {
      groups: ["1grad"],
    }
  },
  {
    name: "Harada Aoi",
    img: "akb48/images/6/62/Harada_Aoi_S46_4th.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/harada-aoi/",
    opts: {
      groups: ["1grad"],
    }
  },
  {
    name: "Moriya Akane",
    img: "akb48/images/3/31/Moriya_Akane_Nagaredama.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/moriya-akane/",
    opts: {
      groups: ["1grad"],
    }
  },
  {
    name: "Watanabe Rika",
    img: "akb48/images/b/b0/Watanabe_Rika_Nagaredama.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/watanabe-rika/",
    opts: {
      groups: ["1grad"],
    }
  },
  {
    name: "Watanabe Risa",
    img: "akb48/images/8/84/Watanabe_Risa_S46_4th.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/watanabe-risa/",
    opts: {
      groups: ["1grad"],
    }
  },
  //2nd gen
  {
    name: "Inoue Rina",
    img: "akb48/images/5/59/Inoue_Rina_S46_Oct_2025.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/inoue-rina/",
    opts: {
      groups: ["2grad"],
    }
  },
  {
    name: "Endo Hikari",
    img: "akb48/images/c/ca/Endo_Hikari_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/endo-hikari/",
    opts: {
      groups: [ "2gen" ],
    }
  },
  {
    name: "Ozono Rei",
    img: "akb48/images/f/f2/Ozono_Rei_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/ozono-rei/",
    opts: {
      groups: [ "2gen" ],
    }
  },
  {
    name: "Onuma Akiho",
    img: "akb48/images/e/e4/Onuma_Akiho_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/onuma-akiho/",
    opts: {
      groups: ["2gen"],
    }
  },
  {
    name: "Kousaka Marino",
    img: "akb48/images/d/dc/Kousaka_Marino_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/kousaka-marino/",
    opts: {
      groups: ["2gen"],
    }
  },
  {
    name: "Seki Yumiko",
    img: "akb48/images/b/bf/Seki_Yumiko_Dec_2022.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/seki-yumiko/",
    opts: {
      groups: ["2grad"],
    }
  },
  {
    name: "Takemoto Yui",
    img: "akb48/images/c/c4/Takemoto_Yui_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/takemoto-yui/",
    opts: {
      groups: ["2gen"],
    }
  },
  {
    name: "Tamura Hono",
    img: "akb48/images/2/26/Tamura_Hono_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/tamura-hono/",
    opts: {
      groups: ["2gen"],
    }
  },
  {
    name: "Fujiyoshi Karin",
    img: "akb48/images/7/77/Fujiyoshi_Karin_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/fujiyoshi-karin/",
    opts: {
      groups: ["2gen"],
    }
  },
  {
    name: "Masumoto Kira",
    img: "akb48/images/9/9c/Masumoto_Kira_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/masumoto-kira/",
    opts: {
      groups: ["2gen"],
    }
  },
  {
    name: "Matsuda Rina",
    img: "akb48/images/9/9e/Matsuda_Rina_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/matsuda-rina/",
    opts: {
      groups: ["2gen"],
    }
  },
  {
    name: "Matsudaira Riko",
    img: "akb48/images/2/2d/Matsudaira_Riko_S46_1st.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/matsudaira-riko/",
    opts: {
      groups: ["2grad"],
    }
  },
  {
    name: "Morita Hikaru",
    img: "akb48/images/7/71/Morita_Hikaru_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/morita-hikaru/",
    opts: {
      groups: ["2gen"],
    }
  },
  {
    name: "Moriya Rena",
    img: "akb48/images/3/3c/Moriya_Rena_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/moriya-rena/",
    opts: {
      groups: ["2gen"],
    }
  }, 
  {
    name: "Yamasaki Ten",
    img: "akb48/images/a/ad/Yamasaki_Ten_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/yamasaki-ten/",
    opts: {
      groups: ["2gen"],
    }
  },
  //3rd gen
  {
    name: "Ishimori Rika",
    img: "akb48/images/0/00/Ishimori_Rika_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/ishimori-rika/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
    name: "Endo Riko",
    img: "akb48/images/6/68/Endo_Riko_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/endo-riko/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
    name: "Odakura Reina",
    img: "akb48/images/8/8c/Odakura_Reina_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/odakura-reina/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
    name: "Kojima Nagisa",
    img: "akb48/images/c/c5/Kojima_Nagisa_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/kojima-nagisa/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
    name: "Taniguchi Airi",
    img: "akb48/images/6/6b/Taniguchi_Airi_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/taniguchi-airi/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
    name: "Nakashima Yuzuki",
    img: "akb48/images/0/02/Nakashima_Yuzuki_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/graduate/nakashima-yuzuki/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
    name: "Matono Mio",
    img: "akb48/images/4/45/Matono_Mio_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/matono-mio/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
    name: "Mukai Itoha",
    img: "akb48/images/2/22/Mukai_Itoha_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/mukai-itoha/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
    name: "Murai Yu",
    img: "akb48/images/f/f8/Murai_Yu_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/murai-yu/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
    name: "Murayama Miu",
    img: "akb48/images/a/a2/Murayama_Miu_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/murayama-miu/",
    opts: {
      groups: ["3gen"],
    }
  },
  {
	name: "Yamashita Shizuki",
	img: "akb48/images/d/d9/Yamashita_Shizuki_S46_Feb_2026.jpg",
	profileUrl: "https://sakurazaka101.com/member/yamashita-shizuki/",
	opts: {
	  groups: ["3gen"],
	}
  },
  {
  name: "Asai Konomi",
  img: "akb48/images/0/01/Asai_Konomi_S46_Feb_2026.jpg",
  profileUrl: "https://sakurazaka101.com/member/asai-konomi/",
  opts: {
    groups: ["4gen"],
    }
  },
  {
  name: "Inaguma Hina",
  img: "akb48/images/8/87/Inaguma_Hina_S46_Feb_2026.jpg",
  profileUrl: "https://sakurazaka101.com/member/inaguma-hina/",
  opts: {
    groups: ["4gen"],
  }
  },
  {
  name: "Katsumata Haru",
  img: "akb48/images/0/05/Katsumata_Haru_S46_Feb_2026.jpg",
  profileUrl: "https://sakurazaka101.com/member/katsumata-haru/",
  opts: {
    groups: ["4gen"],
  }
  },
  {
  name: "Sato Neo",
  img: "akb48/images/9/9b/Sato_Neo_S46_Feb_2026.jpg",
  profileUrl: "https://sakurazaka101.com/member/sato-neo/",
  opts: {
    groups: ["4gen"],
  }
  },
  {
  name: "Nakagawa Chihiro",
  img: "akb48/images/7/73/Nakagawa_Chihiro_S46_Feb_2026.jpg",
  profileUrl: "https://sakurazaka101.com/member/nakagawa-chihiro/",
  opts: {
    groups: ["4gen"],
  }
  },
  {
    name: "Matsumoto Wako",
    img: "akb48/images/5/58/Matsumoto_Wako_S46_Feb_2026.jpg",
    profileUrl: "https://sakurazaka101.com/member/matsumoto-wako/",
    opts: {
      groups: ["4gen"],
    }
  },
  {
	name: "Meguro Hiiro",
	img: "akb48/images/8/8f/Meguro_Hiiro_S46_Feb_2026.jpg",
	profileUrl: "https://sakurazaka101.com/member/meguro-hiiro/",
	opts: {
	  groups: ["4gen"],
	}
  },
  {
  name: "Yamakawa Ui",
  img: "akb48/images/0/0e/Yamakawa_Ui_S46_Feb_2026.jpg",
  profileUrl: "https://sakurazaka101.com/member/yamakawa-ui/",
  opts: {
    groups: ["4gen"],
  }
  },
  {
	name: "Yamada Momomi",
	img: "akb48/images/a/ac/Yamada_Momomi_S46_Feb_2026.jpg",
	profileUrl: "https://sakurazaka101.com/member/yamada-momomi/",
	opts: {
	  groups: ["4gen"],
	}
  }
]



