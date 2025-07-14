import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// clsx는 다음 기능을 해요:
// 조건부 클래스 처리
// null, undefined, false, 빈 문자열 등은 무시

// tailwind-merge는:
// Tailwind CSS 클래스끼리 충돌할 경우, 마지막 것을 살려줌
// 예를 들어 px-2와 px-4가 같이 있으면 → px-4만 남김
