import { KonvaEventObject } from "konva/lib/Node";
import React, { useCallback, useRef, useState } from "react";
import {
  Stage,
  Layer,
  Rect as KonvaRect,
  Image as KonvaImage,
  Circle as KonvaCircle,
  Line as KonvaLine,
  Arrow as KonvaArrow,
  Transformer,
} from "react-konva";
import { v4 as uuidv4 } from "uuid";
import { Arrow, Circle, Rectangle, Scribble } from "./Paint.types";
import { DrawAction, PAINT_OPTIONS } from "./Paint.constants";
import { SketchPicker } from "react-color";

import Toolbar from "./Toolbar";
import Options from "./Options";

interface PaintProps {}

const downloadURI = (uri: string | undefined, name: string) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri || "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const SIZE = 500*2;

export const Paint: React.FC<PaintProps> = React.memo(function Paint({}) {
  const [color, setColor] = useState("#000");
  const [drawAction, setDrawAction] = useState<DrawAction>(DrawAction.Select);
  const [scribbles, setScribbles] = useState<Scribble[]>([]);
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  const [circles, setCircles] = useState<Circle[]>([]);
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const [image, setImage] = useState<HTMLImageElement>();

  const onImportImageSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.[0]) {
        const imageUrl = URL.createObjectURL(e.target.files?.[0]);
        const image = new Image(SIZE / 2, SIZE / 2);
        image.src = imageUrl;
        setImage(image);
      }
      e.target.files = null;
    },
    []
  );

  const fileRef = useRef<HTMLInputElement>(null);
  const onImportImageClick = useCallback(() => {
    fileRef?.current && fileRef?.current?.click();
    console.log("hurray")
  }, []);

  const stageRef = useRef<any>(null);

  const onExportClick = useCallback(() => {
    const dataUri = stageRef?.current?.toDataURL({ pixelRatio: 3 });
    downloadURI(dataUri, "image.png");
  }, []);

  const onClear = useCallback(() => {
    setRectangles([]);
    setCircles([]);
    setScribbles([]);
    setArrows([]);
    setImage(undefined);
  }, []);

  const isPaintRef = useRef(false);

  const onStageMouseUp = useCallback(() => {
    isPaintRef.current = false;
  }, []);

  const currentShapeRef = useRef<string>();

  const onStageMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (drawAction === DrawAction.Select) return;
      isPaintRef.current = true;
      const stage = stageRef?.current;
      const pos = stage?.getPointerPosition();
      const x = pos?.x || 0;
      const y = pos?.y || 0;
      const id = uuidv4();
      currentShapeRef.current = id;

      switch (drawAction) {
        case DrawAction.Scribble: {
          setScribbles((prevScribbles) => [
            ...prevScribbles,
            {
              id,
              points: [x, y],
              color,
            },
          ]);
          break;
        }
        case DrawAction.Circle: {
          setCircles((prevCircles) => [
            ...prevCircles,
            {
              id,
              radius: 1,
              x,
              y,
              color,
            },
          ]);
          break;
        }
        case DrawAction.Rectangle: {
          setRectangles((prevRectangles) => [
            ...prevRectangles,
            {
              id,
              height: 1,
              width: 1,
              x,
              y,
              color,
            },
          ]);
          break;
        }
        case DrawAction.Arrow: {
          setArrows((prevArrows) => [
            ...prevArrows,
            {
              id,
              points: [x, y, x, y],
              color,
            },
          ]);
          break;
        }
      }
    },
    [drawAction, color]
  );

  const onStageMouseMove = useCallback(() => {
    if (drawAction === DrawAction.Select || !isPaintRef.current) return;

    const stage = stageRef?.current;
    const id = currentShapeRef.current;
    const pos = stage?.getPointerPosition();
    const x = pos?.x || 0;
    const y = pos?.y || 0;

    switch (drawAction) {
      case DrawAction.Scribble: {
        setScribbles((prevScribbles) =>
          prevScribbles?.map((prevScribble) =>
            prevScribble.id === id
              ? {
                  ...prevScribble,
                  points: [...prevScribble.points, x, y],
                }
              : prevScribble
          )
        );
        break;
      }
      case DrawAction.Circle: {
        setCircles((prevCircles) =>
          prevCircles?.map((prevCircle) =>
            prevCircle.id === id
              ? {
                  ...prevCircle,
                  radius:
                    ((x - prevCircle.x) ** 2 + (y - prevCircle.y) ** 2) ** 0.5,
                }
              : prevCircle
          )
        );
        break;
      }
      case DrawAction.Rectangle: {
        setRectangles((prevRectangles) =>
          prevRectangles?.map((prevRectangle) =>
            prevRectangle.id === id
              ? {
                  ...prevRectangle,
                  height: y - prevRectangle.y,
                  width: x - prevRectangle.x,
                }
              : prevRectangle
          )
        );
        break;
      }
      case DrawAction.Arrow: {
        setArrows((prevArrows) =>
          prevArrows.map((prevArrow) =>
            prevArrow.id === id
              ? {
                  ...prevArrow,
                  points: [prevArrow.points[0], prevArrow.points[1], x, y],
                }
              : prevArrow
          )
        );
        break;
      }
    }
  }, [drawAction]);

  const transformerRef = useRef<any>(null);
  const onShapeDragEnd = useCallback(
    (e: KonvaEventObject<DragEvent>) => {
      const id = e.target.id();
      const x = e.target.x();
      const y = e.target.y();

      setRectangles((prevRectangles) =>
        prevRectangles.map((rect) =>
          rect.id === id ? { ...rect, x, y } : rect
        )
      );

      setCircles((prevCircles) =>
        prevCircles.map((circle) =>
          circle.id === id ? { ...circle, x, y } : circle
        )
      );

      setArrows((prevArrows):any =>
        prevArrows.map((arrow) => {
          if (arrow.id === id) {
            const dx = x - arrow.points[0];
            const dy = y - arrow.points[1];
            return {
              ...arrow,
              points: arrow.points.map((point, index) =>
                index % 2 === 0 ? point + dx : point + dy
              ),
            };
          }
          return arrow;
        })
      );
    },
    []
  );
  const onShapeClick = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (drawAction !== DrawAction.Select) return;
      const currentTarget = e.currentTarget;
      transformerRef?.current?.node(currentTarget);
    },
    [drawAction]
  );

  const isDraggable = drawAction === DrawAction.Select;

  const onBgClick = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      transformerRef?.current?.nodes([]);
    },
    [drawAction]
  );

  return (

    <div className="grid grid-cols-[280px_1fr_280px] h-screen w-full">
 
  <Toolbar  setDrawAction={setDrawAction} setColor={setColor}  onImportImageClick={onImportImageClick} onImportImageSelect={onImportImageSelect} fileRef={fileRef} onExportClick={onExportClick} onClear={onClear}/>
 <div className="flex items-center justify-center bg-muted/20 ">
  {/* <img src="/placeholder.svg" width={800} height={600} alt="Canvas" className="max-w-full max-h-full object-contain" style={{aspectRatio: '800/600', objectFit: 'cover'}} /> */}
  <div
    className="  w-[SIZEpx] h-[SIZEpx] border border-black mt-4 overflow-hidden  "
  >
    <Stage
      height={SIZE}
      width={SIZE}
      ref={stageRef}
      onMouseUp={onStageMouseUp}
      onMouseDown={onStageMouseDown}
      onMouseMove={onStageMouseMove}
    >
      <Layer>
        <KonvaRect
          x={0}
          y={0}
          height={SIZE}
          width={SIZE}
          fill="white"
          id="bg"
          onClick={onBgClick}
        />
        {image && (
          <KonvaImage
            image={image}
            x={0}
            y={0}
            height={SIZE }
            width={SIZE }
            // draggable={isDraggable}
            onClick={onBgClick}
          />
        )}
        {arrows.map((arrow) => (
          <KonvaArrow
            key={arrow.id}
            id={arrow.id}
            points={arrow.points}
            fill={arrow.color}
            stroke={arrow.color}
            strokeWidth={4}
            onClick={onShapeClick}
            draggable={isDraggable}
            onDragEnd={onShapeDragEnd}
          />
        ))}
        {rectangles.map((rectangle) => (
          <KonvaRect
            key={rectangle.id}
            x={rectangle?.x}
            y={rectangle?.y}
            height={rectangle?.height}
            width={rectangle?.width}
            stroke={rectangle?.color}
            id={rectangle?.id}
            strokeWidth={4}
            onClick={onShapeClick}
            draggable={isDraggable}
            onDragEnd={onShapeDragEnd}
          />
        ))}
        {circles.map((circle) => (
          <KonvaCircle
            key={circle.id}
            id={circle.id}
            x={circle?.x}
            y={circle?.y}
            radius={circle?.radius}
            stroke={circle?.color}
            strokeWidth={4}
            onClick={onShapeClick}
            draggable={isDraggable}
            onDragEnd={onShapeDragEnd}
          />
        ))}
        {scribbles.map((scribble) => (
          <KonvaLine
            key={scribble.id}
            id={scribble.id}
            lineCap="round"
            lineJoin="round"
            stroke={scribble?.color}
            strokeWidth={4}
            points={scribble.points}
            onClick={onShapeClick}
            draggable={isDraggable}
            onDragEnd={onShapeDragEnd}
          />
        ))}
        <Transformer ref={transformerRef} />
      </Layer>
    </Stage>
  </div> 
</div>

 
  <Options rectangles={rectangles} arrows={arrows} circles={circles}/>
</div>

  );
});
