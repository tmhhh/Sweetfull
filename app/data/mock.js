const data = {
  "Sua hat dieu": [
    {
      coverSrc: "/COVER/1.png",
      nutrientSrc: "/NUTRIENT/1.png",
    },
    {
      coverSrc: "/COVER/2.png",
      nutrientSrc: "/NUTRIENT/2.png",
    },
    {
      coverSrc: "/COVER/3.png",
      nutrientSrc: "/NUTRIENT/3.png",
    },
    {
      coverSrc: "/COVER/4.png",
      nutrientSrc: "/NUTRIENT/4.png",
    },
  ],
  "Sua hanh nhan": [
    {
      coverSrc: "/COVER/5.png",
      nutrientSrc: "/NUTRIENT/5.png",
    },
    {
      coverSrc: "/COVER/6.png",
      nutrientSrc: "/NUTRIENT/6.png",
    },
    {
      coverSrc: "/COVER/7.png",
      nutrientSrc: "/NUTRIENT/7.png",
    },
    {
      coverSrc: "/COVER/8.png",
      nutrientSrc: "/NUTRIENT/8.png",
    },
  ],
  "Sua hat oc cho": [
    {
      coverSrc: "/COVER/9.png",
      nutrientSrc: "/NUTRIENT/9.png",
    },
    {
      coverSrc: "/COVER/10.png",
      nutrientSrc: "/NUTRIENT/10.png",
    },
    {
      coverSrc: "/COVER/11.png",
      nutrientSrc: "/NUTRIENT/11.png",
    },
    {
      coverSrc: "/COVER/13.png",
      nutrientSrc: "/NUTRIENT/13.png",
    },
  ],
  "Sua dau nanh": [
    {
      coverSrc: "/COVER/15.png",
      nutrientSrc: "/NUTRIENT/15.png",
    },
    {
      coverSrc: "/COVER/16.png",
      nutrientSrc: "/NUTRIENT/16.png",
    },
    {
      coverSrc: "/COVER/17.png",
      nutrientSrc: "/NUTRIENT/17.png",
    },
    {
      coverSrc: "/COVER/18.png",
      nutrientSrc: "/NUTRIENT/18.png",
    },
    {
      coverSrc: "/COVER/19.png",
      nutrientSrc: "/NUTRIENT/19.png",
    },
    {
      coverSrc: "/COVER/20.png",
      nutrientSrc: "/NUTRIENT/20.png",
    },
  ],
  "Sua hat sen": [
    {
      coverSrc: "/COVER/21.png",
      nutrientSrc: "/NUTRIENT/21.png",
    },
    {
      coverSrc: "/COVER/22.png",
      nutrientSrc: "/NUTRIENT/22.png",
    },
  ],
  "Sua ngu coc": [
    {
      coverSrc: "/COVER/23.png",
      nutrientSrc: "/NUTRIENT/23.png",
    },
  ],
  "Sua gao rang": [
    {
      coverSrc: "/COVER/25.png",
      nutrientSrc: "/NUTRIENT/25.png",
    },
    {
      coverSrc: "/COVER/26.png",
      nutrientSrc: "/NUTRIENT/26.png",
    },
  ],
};

export const products =
  Object.keys(data).length % 2 === 0
    ? data
    : Object.assign(data, { Empty: [] });
