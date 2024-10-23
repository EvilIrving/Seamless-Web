import pics1LayoutsTemplate from "./1";
import pics2LayoutsTemplate from "./2";
import pics3LayoutsTemplate from "./3";

// 基础类型定义
export interface AspectRatio {
  id: string; // 比例唯一标识
  label: string; // 显示名称
  value: number | "auto" | "equal"; // 实际比例值
}

export interface TemplateCell {
  x: number; // X轴起始位置（0-1）
  y: number; // Y轴起始位置（0-1）
  w: number; // 宽度占比（0-1）
  h: number; // 高度占比（0-1）
}

export interface LayoutTemplate {
  id: string; // 布局唯一标识
  label: string; // 显示名称
  template: TemplateCell[]; // 具体布局位置
}

// 按比例组织的布局配置
type LayoutsByAspectRatio = {
  [aspectRatioId: string]: LayoutTemplate[]; // 每个比例下的布局选项
};

// 按图片数量组织的布局配置
type LayoutsByImageCount = {
  [key: number]: {
    // key 是图片数量（1-12）
    [aspectRatioId: string]: LayoutTemplate[]; // 每个比例下的布局选项
  };
};

// 布局基础模版
const layoutConfigs: LayoutsByImageCount = {
  // 1张图片的布局选项
  1: pics1LayoutsTemplate,
  // 2张图片的布局选项
  2: pics2LayoutsTemplate,
  // 3张图片的布局选项
  3: pics3LayoutsTemplate,
  // ... 4-12张图片的布局选项
};

// 辅助函数：获取指定图片数量和比例下的可用布局
function getAvailableLayouts(
  imageCount: number,
  aspectRatioId: string
): LayoutTemplate[] {
  return layoutConfigs[imageCount]?.[aspectRatioId] || [];
}

// 辅助函数：检查布局是否适用于当前图片数量
function isLayoutValid(layout: LayoutTemplate, imageCount: number): boolean {
  return layout.template.length === imageCount;
}

export { layoutConfigs, getAvailableLayouts, isLayoutValid };
