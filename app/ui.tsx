"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import {
  LayoutTemplate,
  AspectRatio,
  getAvailableLayouts,
} from "./layoutConfig";

const PhotoCollageApp = () => {
  const [selectedRatio, setSelectedRatio] = useState<string | null>(null);
  const [imageCount, setImageCount] = useState<number>(0);
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);
  const [availableLayouts, setAvailableLayouts] = useState<LayoutTemplate[]>(
    []
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const aspectRatios: AspectRatio[] = [
    { id: "1:1", label: "1:1 方形", value: 1 },
    { id: "3:4", label: "3:4 竖向", value: 0.75 },
    { id: "4:3", label: "4:3 横向", value: 1.33 },
    { id: "2:3", label: "2:3 竖向", value: 0.67 },
    { id: "3:2", label: "3:2 横向", value: 1.5 },
    { id: "9:16", label: "9:16 竖向", value: 0.5625 },
    { id: "16:9", label: "16:9 横向", value: 1.778 },
    { id: "full", label: "全屏", value: "auto" },
    { id: "more", label: "等分", value: "equal" },
  ];

  // 当图片数量或比例改变时更新可用布局
  useEffect(() => {
    if (imageCount && selectedRatio) {
      const layouts = getAvailableLayouts(imageCount, selectedRatio);

      console.log(layouts);
      setAvailableLayouts(layouts);
      setSelectedLayout(null);
    }
  }, [imageCount, selectedRatio]);

  // 处理图片上传
  const handleImageUpload = (files: FileList | null) => {
    if (files) {
      setImageCount(files.length);
    }
  };

  const handleButtonClick = () => {
    console.log("click");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-start px-6 py-4">
        <h2 className="text-2xl font-bold">拼图布局配置</h2>
        <p className="text-sm text-gray-500">
          已选择 {imageCount} 张图片
          {selectedRatio &&
            ` · ${aspectRatios.find((r) => r.id === selectedRatio)?.label}`}
        </p>
      </CardHeader>
      <CardBody className="px-6 py-4">
        <div className="space-y-6">
          {/* 图片上传区域 */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">上传图片</h3>
            <input
              ref={fileInputRef}
              multiple
              accept="image/*"
              className="hidden"
              id="image-upload"
              max={12}
              type="file"
              onChange={(e) => handleImageUpload(e.target.files)}
            />
            <label className="inline-block" htmlFor="image-upload">
              <Button
                className="cursor-pointer"
                color="default"
                startContent={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                }
                variant="bordered"
                onClick={handleButtonClick}
              >
                选择图片（1-12张）
              </Button>
            </label>
          </div>

          {/* 仅在有图片时显示比例选择 */}
          {imageCount > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-medium">选择画布比例</h3>
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                }}
              >
                {aspectRatios.map((ratio) => (
                  <Button
                    key={ratio.id}
                    className="h-20 flex flex-col items-center justify-center gap-1"
                    color={selectedRatio === ratio.id ? "primary" : "default"}
                    variant={selectedRatio === ratio.id ? "solid" : "bordered"}
                    onClick={() => setSelectedRatio(ratio.id)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                      />
                    </svg>
                    <span className="text-sm">{ratio.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* 仅在选择比例后显示布局选择 */}
          {selectedRatio && availableLayouts.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-medium">选择布局模板</h3>
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                }}
              >
                {availableLayouts.map((layout) => (
                  <Button
                    key={layout.id}
                    className="h-24 flex flex-col items-center justify-center gap-1"
                    color={selectedLayout === layout.id ? "primary" : "default"}
                    variant={
                      selectedLayout === layout.id ? "solid" : "bordered"
                    }
                    onClick={() => setSelectedLayout(layout.id)}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                    <span className="text-sm">{layout.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* 图片分区按顺序拼接在布局的指定位置 */}
           
        </div>
      </CardBody>
    </Card>
  );
};

export default PhotoCollageApp;
