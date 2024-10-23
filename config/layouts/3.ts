const pics3LayoutsTemplate = [
  {
    ratio: "1:1",
    layouts: [
      {
        id: "1x1-grid-1x3",
        label: "1行3列网格",
        template: [
          { x: 0, y: 0, w: 1 / 3, h: 1 },
          { x: 1 / 3, y: 0, w: 1 / 3, h: 1 },
          { x: 2 / 3, y: 0, w: 1 / 3, h: 1 },
        ],
      },
      {
        id: "1x1-grid-3x1",
        label: "3行1列网格",
        template: [
          { x: 0, y: 0, w: 1, h: 1 / 3 },
          { x: 0, y: 1 / 3, w: 1, h: 1 / 3 },
          { x: 0, y: 2 / 3, w: 1, h: 1 / 3 },
        ],
      },
      {
        id: "1x1-main-secondary",
        label: "1+2主次布局",
        template: [
          { x: 0, y: 0, w: 1 / 2, h: 1 },
          { x: 1 / 2, y: 0, w: 1 / 4, h: 1 / 2 },
          { x: 1 / 2, y: 1 / 2, w: 1 / 4, h: 1 / 2 },
        ],
      },
      {
        id: "1x1-secondary-main",
        label: "2+1主次布局",
        template: [
          { x: 0, y: 0, w: 1 / 4, h: 1 / 2 },
          { x: 0, y: 1 / 2, w: 1 / 4, h: 1 / 2 },
          { x: 1 / 2, y: 0, w: 1 / 2, h: 1 },
        ],
      },
    ],
  },
  {
    ratio: "3:2",
    layouts: [
      {
        id: "3x2-grid-1x3",
        label: "1行3列网格",
        template: [
          { x: 0, y: 0, w: 1 / 3, h: 2 / 3 },
          { x: 1 / 3, y: 0, w: 1 / 3, h: 2 / 3 },
          { x: 2 / 3, y: 0, w: 1 / 3, h: 2 / 3 },
        ],
      },
      {
        id: "3x2-grid-3x1",
        label: "3行1列网格",
        template: [
          { x: 0, y: 0, w: 2 / 3, h: 1 / 3 },
          { x: 0, y: 1 / 3, w: 2 / 3, h: 1 / 3 },
          { x: 0, y: 2 / 3, w: 2 / 3, h: 1 / 3 },
        ],
      },
      {
        id: "3x2-main-secondary",
        label: "1+2主次布局",
        template: [
          { x: 0, y: 0, w: 2 / 3, h: 2 / 3 },
          { x: 2 / 3, y: 0, w: 1 / 3, h: 1 / 3 },
          { x: 2 / 3, y: 1 / 3, w: 1 / 3, h: 1 / 3 },
        ],
      },
      {
        id: "3x2-secondary-main",
        label: "2+1主次布局",
        template: [
          { x: 0, y: 0, w: 1 / 3, h: 1 / 3 },
          { x: 0, y: 1 / 3, w: 1 / 3, h: 1 / 3 },
          { x: 2 / 3, y: 0, w: 1 / 3, h: 2 / 3 },
        ],
      },
    ],
  },
  // 以下比例类型同理，根据比例调整w和h的值
  // ...
  {
    ratio: "2:3",
    layouts: [
      // 1行3列网格
      // 3行1列网格
      // 1+2主次布局
      // 2+1主次布局
    ],
  },
  {
    ratio: "4:3",
    layouts: [
      // 1行3列网格
      // 3行1列网格
      // 1+2主次布局
      // 2+1主次布局
    ],
  },
  {
    ratio: "3:4",
    layouts: [
      // 1行3列网格
      // 3行1列网格
      // 1+2主次布局
      // 2+1主次布局
    ],
  },
  {
    ratio: "16:9",
    layouts: [
      // 1行3列网格
      // 3行1列网格
      // 1+2主次布局
      // 2+1主次布局
    ],
  },
  {
    ratio: "9:16",
    layouts: [
      // 1行3列网格
      // 3行1列网格
      // 1+2主次布局
      // 2+1主次布局
    ],
  },
];

export default pics3LayoutsTemplate;
