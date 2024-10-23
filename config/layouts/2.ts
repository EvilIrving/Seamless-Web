const pics2LayoutsTemplate = [
  {
    id: "1x1",
    label: "1:1",
    template: [
      {
        layout: "horizontal",
        template: [
          { x: 0, y: 0, w: 1 / 2, h: 1 },
          { x: 1 / 2, y: 0, w: 1 / 2, h: 1 },
        ],
      },
      {
        layout: "vertical",
        template: [
          { x: 0, y: 0, w: 1, h: 1 / 2 },
          { x: 0, y: 1 / 2, w: 1, h: 1 / 2 },
        ],
      },
    ],
  },
  {
    id: "3x2",
    label: "3:2",
    template: [
      {
        layout: "horizontal",
        template: [
          { x: 0, y: 0, w: 3 / 5, h: 1 },
          { x: 3 / 5, y: 0, w: 2 / 5, h: 1 },
        ],
      },
      {
        layout: "vertical",
        template: [
          { x: 0, y: 0, w: 1, h: 2 / 3 },
          { x: 0, y: 2 / 3, w: 1, h: 1 / 3 },
        ],
      },
    ],
  },
  {
    id: "2x3",
    label: "2:3",
    template: [
      {
        layout: "horizontal",
        template: [
          { x: 0, y: 0, w: 2 / 5, h: 1 },
          { x: 2 / 5, y: 0, w: 3 / 5, h: 1 },
        ],
      },
      {
        layout: "vertical",
        template: [
          { x: 0, y: 0, w: 1, h: 1 / 3 },
          { x: 0, y: 1 / 3, w: 1, h: 2 / 3 },
        ],
      },
    ],
  },
  {
    id: "4x3",
    label: "4:3",
    template: [
      {
        layout: "horizontal",
        template: [
          { x: 0, y: 0, w: 4 / 7, h: 1 },
          { x: 4 / 7, y: 0, w: 3 / 7, h: 1 },
        ],
      },
      {
        layout: "vertical",
        template: [
          { x: 0, y: 0, w: 1, h: 3 / 4 },
          { x: 0, y: 3 / 4, w: 1, h: 1 / 4 },
        ],
      },
    ],
  },
  {
    id: "3x4",
    label: "3:4",
    template: [
      {
        layout: "horizontal",
        template: [
          { x: 0, y: 0, w: 3 / 7, h: 1 },
          { x: 3 / 7, y: 0, w: 4 / 7, h: 1 },
        ],
      },
      {
        layout: "vertical",
        template: [
          { x: 0, y: 0, w: 1, h: 4 / 7 },
          { x: 0, y: 4 / 7, w: 1, h: 3 / 7 },
        ],
      },
    ],
  },
  {
    id: "16x9",
    label: "16:9",
    template: [
      {
        layout: "horizontal",
        template: [
          { x: 0, y: 0, w: 16 / 25, h: 1 },
          { x: 16 / 25, y: 0, w: 9 / 25, h: 1 },
        ],
      },
      {
        layout: "vertical",
        template: [
          { x: 0, y: 0, w: 1, h: 9 / 16 },
          { x: 0, y: 9 / 16, w: 1, h: 7 / 16 },
        ],
      },
    ],
  },
  {
    id: "9x16",
    label: "9:16",
    template: [
      {
        layout: "horizontal",
        template: [
          { x: 0, y: 0, w: 9 / 25, h: 1 },
          { x: 9 / 25, y: 0, w: 16 / 25, h: 1 },
        ],
      },
      {
        layout: "vertical",
        template: [
          { x: 0, y: 0, w: 1, h: 9 / 16 },
          { x: 0, y: 9 / 16, w: 1, h: 7 / 16 },
        ],
      },
    ],
  },
];

export default pics2LayoutsTemplate;
