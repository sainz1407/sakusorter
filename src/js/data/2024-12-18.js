dataSetVersion = "2024-12-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
        { name: "1st Generation", key: "1gen" },
        { name: "2nd Generation", key: "2gen" },
        { name: "3rd Generation", key: "3gen" },
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
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Ozeki Rika",
    img: "akb48/images/9/93/Ozeki_Rika_As_you_know.jpg",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Koike Minami",
    img: "akb48/images/a/a8/Koike_Minami_S46_Oct_2024.jpg",
    opts: {
      groups: ["1gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kobayashi Yui",
    img: "akb48/images/0/0e/Kobayashi_Yui_Sakurazaka46_October_2023.jpg",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Saito Fuyuka",
    img: "akb48/images/0/01/Saito_Fuyuka_S46_Oct_2024.jpg",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Sugai Yuuka",
    img: "akb48/images/4/41/Sugai_Yuuka_As_you_know.jpg",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Habu Mizuho",
    img: "akb48/images/7/7b/Habu_Mizuho_Sakurazaka46_October_2023.jpg",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Harada Aoi",
    img: "akb48/images/6/62/Harada_Aoi_S46_4th.jpg",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Moriya Akane",
    img: "akb48/images/3/31/Moriya_Akane_Nagaredama.jpg",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Watanabe Rika",
    img: "akb48/images/b/b0/Watanabe_Rika_Nagaredama.jpg",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Watanabe Risa",
    img: "akb48/images/8/84/Watanabe_Risa_S46_4th.jpg",
    opts: {
      groups: ["1grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  //2nd gen
  {
    name: "Inoue Rina",
    img: "akb48/images/d/d2/Inoue_Rina_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Endo Hikari",
    img: "akb48/images/3/3d/Endo_Hikari_S46_Oct_2024.jpg",
    opts: {
      groups: [ "2gen" ],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ozono Rei",
    img: "akb48/images/d/df/Ozono_Rei_S46_Oct_2024.jpg",
    opts: {
      groups: [ "2gen" ],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Onuma Akiho",
    img: "akb48/images/7/7f/Onuma_Akiho_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kousaka Marino",
    img: "akb48/images/8/84/Kousaka_Marino_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Seki Yumiko",
    img: "akb48/images/b/bf/Seki_Yumiko_Dec_2022.jpg",
    opts: {
      groups: ["2grad"],
      sub_unit: ["", ""], activity_status: ["graduated"]
    }
  },
  {
    name: "Takemoto Yui",
    img: "akb48/images/6/62/Takemoto_Yui_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tamura Hono",
    img: "akb48/images/3/34/Tamura_Hono_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Fujiyoshi Karin",
    img: "akb48/images/7/76/Fujiyoshi_Karin_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Masumoto Kira",
    img: "akb48/images/9/98/Masumoto_Kira_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Matsuda Rina",
    img: "akb48/images/3/3c/Matsuda_Rina_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Matsudaira Riko",
    img: "akb48/images/2/2d/Matsudaira_Riko_S46_1st.jpg",
    opts: {
      groups: ["2grad"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Morita Hikaru",
    img: "akb48/images/3/3f/Morita_Hikaru_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Moriya Rena",
    img: "akb48/images/1/13/Moriya_Rena_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  }, 
  {
    name: "Yamasaki Ten",
    img: "akb48/images/9/96/Yamasaki_Ten_S46_Oct_2024.jpg",
    opts: {
      groups: ["2gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  //3rd gen
  {
    name: "Ishimori Rika",
    img: "akb48/images/0/08/Ishimori_Rika_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Endo Riko",
    img: "akb48/images/e/ef/Endo_Riko_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Odakura Reina",
    img: "akb48/images/f/f4/Odakura_Reina_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kojima Nagisa",
    img: "akb48/images/f/f1/Kojima_Nagisa_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Taniguchi Airi",
    img: "akb48/images/1/1a/Taniguchi_Airi_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Nakashima Yuzuki",
    img: "akb48/images/2/27/Nakashima_Yuzuki_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Matono Mio",
    img: "akb48/images/3/3f/Matono_Mio_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Mukai Itoha",
    img: "akb48/images/1/1a/Mukai_Itoha_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Murai Yu",
    img: "akb48/images/f/f3/Murai_Yu_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Murayama Miu",
    img: "akb48/images/e/e6/Murayama_Miu_S46_Oct_2024.jpg",
    opts: {
      groups: ["3gen"],
      // sub_unit: [""], activity_status: ["active"]
    }
  },
  {
	name: "Yamashita Shizuki",
	img: "akb48/images/4/41/Yamashita_Shizuki_S46_Oct_2024.jpg",
	opts: {
	  groups: ["3gen"],
	  // sub_unit: [""], activity_status: ["active"]
	}
  }
]
