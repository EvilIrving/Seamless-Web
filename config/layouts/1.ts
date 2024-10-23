const pics1LayoutsTemplate = {
  "1:1": [
    {
      id: "single-square",
      label: "方形填充",
      template: [{ x: 0, y: 0, w: 1, h: 1 }],
    },
    {
      id: "grid-2x2",
      label: "2x2网格",
      template: [
        { x: 0, y: 0, w: 1 / 2, h: 1 / 2 },
        { x: 1 / 2, y: 0, w: 1 / 2, h: 1 / 2 },
        { x: 0, y: 1 / 2, w: 1 / 2, h: 1 / 2 },
        { x: 1 / 2, y: 1 / 2, w: 1 / 2, h: 1 / 2 },
      ],
    },
    {
      id: "cascade",
      label: "瀑布流",
      template: [
        { x: 0, y: 0, w: 1, h: 1 / 2 },
        { x: 0, y: 1 / 2, w: 1, h: 1 / 4 },
        { x: 0, y: 3 / 4, w: 1, h: 1 / 4 },
      ],
    },
    {
      id: "carousel",
      label: "轮播",
      template: [{ x: 0, y: 0, w: 1, h: 1 }],
    },
    {
      id: "gallery",
      label: "画廊",
      template: [
        { x: 0, y: 0, w: 1 / 2, h: 1 / 2 },
        { x: 1 / 2, y: 0, w: 1 / 2, h: 1 / 2 },
        { x: 0, y: 1 / 2, w: 1 / 2, h: 1 / 2 },
      ],
    },
  ],
  "3:4": [
    {
      id: "single-portrait",
      label: "竖向填充",
      template: [{ x: 0, y: 0, w: 1, h: 1 }],
    },
  ],
  "3:2": [
    {
      id: "single-landscape",
      label: "横向填充",
      template: [{ x: 0, y: 0, w: 1, h: 1 }],
    },
  ],
  "4:3": [
    {
      id: "single-landscape",
      label: "横向填充",
      template: [{ x: 0, y: 0, w: 1, h: 1 }],
    },
  ],
  "2:3": [
    {
      id: "single-portrait",
      label: "竖向填充",
      template: [{ x: 0, y: 0, w: 1, h: 1 }],
    },
  ],
  "16:9": [
    {
      id: "single-landscape",
      label: "横向填充",
      template: [{ x: 0, y: 0, w: 1, h: 1 }],
    },
  ],
  "9:16": [
    {
      id: "single-portrait",
      label: "竖向填充",
      template: [{ x: 0, y: 0, w: 1, h: 1 }],
    },
  ],
  full: [
    {
      id: "single-portrait",
      label: "原图大小",
      template: [{ x: 0, y: 0, w: 1, h: 1 }],
    },
  ],
};

export default pics1LayoutsTemplate;