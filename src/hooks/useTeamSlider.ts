import { useState, useEffect, useCallback, useRef } from 'react';
import { teamData, TeamMember } from '../models/teamData';

interface UseTeamSliderOptions {
  autoPlayInterval?: number;
  initialIndex?: number;
}

export const useTeamSlider = ({
  autoPlayInterval = 4500,
  initialIndex = 0
}: UseTeamSliderOptions = {}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalMembers = teamData.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalMembers);
  }, [totalMembers]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalMembers) % totalMembers);
  }, [totalMembers]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalMembers) {
      setCurrentIndex(index);
    }
  }, [totalMembers]);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsPaused(false);
  }, []);

  useEffect(() => {
    if (totalMembers <= 1 || isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [totalMembers, isPaused, autoPlayInterval, nextSlide]);

  const currentMember: TeamMember = teamData[currentIndex];

  return {
    currentIndex,
    currentMember,
    totalMembers,
    isPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay,
    allMembers: teamData
  };
};
