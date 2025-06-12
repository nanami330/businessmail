"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { saveTestResult } from "@/lib/saveTestResult";

// 正解の並び順
const correctOrder = [
  "宛先",
  "件名",
  "宛名",
  "挨拶と名乗り",
  "本文",
  "結びの言葉",
  "署名",
];

// 初期の並び順（固定）
const initialOrder = [
  "本文",
  "挨拶と名乗り",
  "宛名",
  "署名",
  "宛先",
  "件名",
  "結びの言葉",
];

// 並び替え可能なリストアイテム
function SortableItem({ id, disabled }: { id: string; disabled?: boolean }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: disabled ? "default" : "grab",
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`border rounded p-2 bg-white flex justify-between items-center ${
        disabled ? "cursor-default" : "cursor-grab"
      }`}
    >
      <span>{id}</span>
      {!disabled && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      )}
    </li>
  );
}

export default function DragSortQuestion() {
  const [items, setItems] = useState(initialOrder);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    if (submitted) return;

    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = items.every((v, i) => v === correctOrder[i]);
    setIsCorrect(correct);
    if (correct) {
      setScore(5);
      setShowScore(true);
    }
  };

  useEffect(() => {
    if (showScore) {
      (async () => {
        const result = await saveTestResult("Chapter1", score);
        if (result.success) {
          console.log("保存成功");
        } else {
          console.error("保存失敗:", result.error?.message);
        }
      })();
    }
  }, [showScore]);

  const handleRetry = () => {
    setSubmitted(false);
    setIsCorrect(false);
    setItems(initialOrder);
  };

  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">
          Chapter 1: メールの基本構造
        </h1>

        <Card>
          <CardContent className="p-6 space-y-4">
            <p>ビジネスメールの構造の正しい順番に並び替えてください。</p>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={items} strategy={verticalListSortingStrategy}>
                <ul className="space-y-2 select-none">
                  {items.map((id) => (
                    <SortableItem key={id} id={id} disabled={submitted} />
                  ))}
                </ul>
              </SortableContext>
            </DndContext>

            {!submitted ? (
              <Button onClick={handleSubmit} className="mt-4 w-full">
                回答を提出する
              </Button>
            ) : (
              <div className="text-center space-y-4 mt-4">
                {isCorrect ? (
                  <p className="text-green-600 font-semibold text-lg">🎉 正解です！</p>
                ) : (
                  <p className="text-red-600 font-semibold text-lg">
                    ❌ 不正解です。もう一度試してください。
                  </p>
                )}
                <Button onClick={handleRetry}>やり直す</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
