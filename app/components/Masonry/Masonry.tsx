'use client';

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";

interface MasonryItem {
  id: string | number;
  image: string;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface MasonryProps {
  data: MasonryItem[];
  enableClick?: boolean; // tambah prop baru, default aktif kalau tidak di-set
}

function Masonry({ data, enableClick = true }: MasonryProps) {
  const [columns, setColumns] = useState<number>(2);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [imageHeights, setImageHeights] = useState<{ [key: string]: number }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) {
        setColumns(5);
      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        setColumns(4);
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(3);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const colHeights = new Array(columns).fill(0);
    const items: GridItem[] = data.map((item) => {
      const column = colHeights.indexOf(Math.min(...colHeights));
      const colWidth = width / columns;
      const height = imageHeights[item.id] || 200;
      const x = colWidth * column;
      const y = colHeights[column];

      colHeights[column] += height;

      return {
        ...item,
        x,
        y,
        width: colWidth,
        height,
      };
    });

    return [colHeights, items];
  }, [columns, data, width, imageHeights]);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <>
      <div
        ref={ref}
        className="relative w-full h-full"
        style={{ height: Math.max(...heights) }}
      >
        {transitions((style, item) => (
          <a.div
            key={item.id}
            style={style}
            className="absolute p-[15px] [will-change:transform,width,height,opacity]"
          >
            <div
              className={`relative w-full h-auto overflow-hidden rounded-[4px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition duration-300 ease hover:scale-105 ${
                enableClick ? "cursor-pointer" : "cursor-default"
              }`}
              onClick={enableClick ? () => setSelectedImage(item.image) : undefined}
            >
              <img
                src={item.image}
                alt=""
                onLoad={(e) => {
                  const { naturalWidth, naturalHeight } = e.currentTarget;
                  const ratio = naturalHeight / naturalWidth;
                  setImageHeights((prev) => ({
                    ...prev,
                    [item.id]: (width / columns) * ratio,
                  }));
                }}
                className="w-full h-auto object-contain"
              />
            </div>
          </a.div>
        ))}
      </div>

      {/* Modal Preview */}
      {enableClick && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-xl shadow-lg object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Masonry;
